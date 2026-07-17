<#
  .SYNOPSIS
    Generates the MDX files used for the website's "Command Reference" pages.

  .NOTES
    Uses the latest Pester version unless a specific -PesterVersion is given.

  .EXAMPLE
    .\generate-command-reference.ps1

  .EXAMPLE
    .\generate-command-reference.ps1 -PesterVersion 4.10.1

  .LINK
    https://docusaurus-powershell.netlify.app/docs/faq/ci-cd
#>
[CmdletBinding()]
param (
    [string] $PesterVersion,
    [string] $PlatyPSVersion,
    [string] $DocusaurusVersion,
    [switch] $SkipModuleImport,
    [ValidateSet('Current','v4','v5')]
    [string] $DocsVersion = 'Current'
)
# Set-StrictMode -Version Latest
# $PSDefaultParameterValues['*:ErrorAction'] = 'Stop'

Write-Host 'Generating MDX files for website Command Reference' -BackgroundColor DarkGreen

# -----------------------------------------------------------------------------
# Install required modules
# -----------------------------------------------------------------------------
$ModuleList = [ordered]@{
    'Microsoft.PowerShell.PlatyPS' = $PlatyPSVersion
    'Alt3.Docusaurus.PowerShell'   = $DocusaurusVersion
    'Pester'                       = $PesterVersion
}
# Can't use the original enumerator here because we may modify the dictionary mid-process
$ModuleList.Keys.Clone() | ForEach-Object {
    $ModuleName = $_
    $RequestedVersion = $ModuleList.Item($ModuleName)
    Write-Host "Requires $ModuleName $RequestedVersion"

    if ([String]::IsNullOrEmpty($RequestedVersion)) {
        Write-Host "=> Fetching latest stable version of $ModuleName from PSGallery..."
        $RequestedVersion = (Find-Module -Name $ModuleName).Version
        $ModuleList.Item($ModuleName) = $RequestedVersion
        Write-Host "=> PSGallery version is $RequestedVersion"
    }

    $Installed = Get-Module -ListAvailable $ModuleName
    if ($Installed -and ($Installed.Version -contains $RequestedVersion)) {
        Write-Host '=> required version already installed'
    } else {
        if (-not $Installed) {
            Write-Host "=> no versions installed: installing $RequestedVersion"
        } else {
            Write-Host "=> no matching version installed: installing $RequestedVersion"
        }
        Install-Module $ModuleName -RequiredVersion $RequestedVersion -AllowPrerelease -Force -SkipPublisherCheck -AllowClobber -Scope CurrentUser
    }

    if (-not $SkipModuleImport) {
        Write-Host '=> importing'
        # Import doesn't support prerelease-version. Only one x.y.z* version can be installed at any time, so just strip suffix
        Import-Module -Name $ModuleName -RequiredVersion ($RequestedVersion -replace '-\w+$') -Force
    }
}

# -----------------------------------------------------------------------------
# Use below settings to manipulate the rendered MDX files
# -----------------------------------------------------------------------------
$docusaurusOptions = @{
    DocsFolder      = switch ($DocsVersion) {
        'Current' { "$PSScriptRoot/docs" }
        'v5' { "$PSScriptRoot/versioned_docs/version-v5" }
        'v4' { "$PSScriptRoot/versioned_docs/version-v4" }
    }
    SideBar         = 'commands'
    EditUrl         = 'null' # prevent the `Edit this Page` button from appearing
    Exclude         = @(
        'Get-MockDynamicParameter'
        'Invoke-Mock'
        'SafeGetCommand'
        'Set-DynamicParameterVariable'
    )
    MetaKeywords    = @(
        'PowerShell'
        'Pester'
        'Help'
        'Documentation'
    )
    PrependMarkdown = @'
:::info This page was generated
Contributions are welcome in [Pester-repo](https://github.com/pester/pester).
:::
'@
    AppendMarkdown  = @"
## VERSION
*This page was generated using comment-based help in [Pester $($ModuleList.Pester)](https://github.com/pester/pester).*
"@
}

# -----------------------------------------------------------------------------
# Generate the new MDX files
# -----------------------------------------------------------------------------
Push-Location $PSScriptRoot
Write-Host (Get-Location)

Write-Host 'Removing existing MDX files' -ForegroundColor Magenta
$outputFolder = Join-Path -Path $docusaurusOptions.DocsFolder -ChildPath $docusaurusOptions.Sidebar | Join-Path -ChildPath '*.*'
if (Test-Path -Path $outputFolder) {
    Remove-Item -Path $outputFolder
}

Write-Host 'Generating new MDX files' -ForegroundColor Magenta
$commandHelp = New-CommandHelp -CommandInfo (Get-Command -Module Pester -CommandType Cmdlet, Function)
$commandHelp | ForEach-Object {
    $_.Metadata['description'] = "Help page for the PowerShell Pester '$($_.Title)' command - $($_.Synopsis.ReplaceLineEndings(''))"
}
New-DocusaurusHelp @docusaurusOptions -CommandHelp $commandHelp

function Repair-ExampleFences {
    <#
        Normalize fences inside the EXAMPLES section only: collapse runs of adjacent
        fence lines and alternate them open/close per example, so each example becomes a
        single well-formed ```powershell code block followed by its description. The
        SYNTAX and PARAMETERS sections (and their YAML blocks) are left untouched.
    #>
    param([string] $Content)

    $eol = if ($Content -match "`r`n") { "`r`n" } else { "`n" }
    $lines = $Content -split "`r?`n"

    # Locate the EXAMPLES section: '## EXAMPLES' up to the next H2 heading.
    $start = -1
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match '^##\s+EXAMPLES\s*$') { $start = $i; break }
    }
    if ($start -lt 0) { return $Content }

    $end = $lines.Count
    for ($i = $start + 1; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match '^##\s' -and $lines[$i] -notmatch '^###') { $end = $i; break }
    }

    $result = [System.Collections.Generic.List[string]]::new()
    $inCode = $false
    $i = 0
    while ($i -lt $lines.Count) {
        $line = $lines[$i]

        # Outside the EXAMPLES section: pass through unchanged.
        if ($i -le $start -or $i -ge $end) {
            if ($i -eq $end -and $inCode) { $result.Add('```'); $inCode = $false }
            $result.Add($line); $i++; continue
        }

        # A new example heading closes any block left open by the previous one.
        if ($line -match '^###\s') {
            if ($inCode) { $result.Add('```'); $inCode = $false }
            $result.Add($line); $i++; continue
        }

        # Collapse a run of adjacent fence lines into a single open or close fence.
        if ($line -match '^\s{0,3}```') {
            $langs = @()
            while ($i -lt $end -and $lines[$i] -match '^\s{0,3}```(.*)$') {
                $langs += $Matches[1].Trim()
                $i++
            }
            if (-not $inCode) {
                $lang = $langs | Where-Object { $_ -ne '' } | Select-Object -First 1
                if (-not $lang) { $lang = 'powershell' }
                $result.Add('```' + $lang)
                $inCode = $true
            }
            else {
                $result.Add('```')
                $inCode = $false
            }
            continue
        }

        $result.Add($line); $i++
    }

    return ($result -join $eol)
}

# -----------------------------------------------------------------------------
# Post-process the generated MDX:
#  * Repair the mismatched code fences PlatyPS emits for .EXAMPLE blocks that
#    contain their own Markdown fences (see Repair-ExampleFences) so the MDX
#    compiles.
# -----------------------------------------------------------------------------
Write-Host 'Post-processing generated MDX files (ProgressAction, example fences)' -ForegroundColor Magenta
$commandsFolder = Join-Path -Path $docusaurusOptions.DocsFolder -ChildPath $docusaurusOptions.Sidebar
Get-ChildItem -Path $commandsFolder -Filter '*.mdx' | ForEach-Object {
    $content = Get-Content -LiteralPath $_.FullName -Raw
    # Fix mismatched code fences inside the EXAMPLES section
    # TODO: Remove? Not really needed. Only fixed two earlier typos in pester/pester repo.
    $updated = Repair-ExampleFences -Content $content
    if ($updated -ne $content) {
        Set-Content -LiteralPath $_.FullName -Value $updated -NoNewline -Encoding utf8
    }
}

Write-Host 'Render completed successfully' -BackgroundColor DarkGreen
Pop-Location

if ($ENV:GITHUB_ACTIONS) {
    # Output Workflow information
    "pester-version=$($ModuleList.Pester))" >> $env:GITHUB_OUTPUT
}
