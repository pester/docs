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
Set-StrictMode -Version Latest
$PSDefaultParameterValues['*:ErrorAction'] = 'Stop'

Write-Host 'Generating MDX files for website Command Reference' -BackgroundColor DarkGreen

# -----------------------------------------------------------------------------
# Install required modules
# -----------------------------------------------------------------------------
$ModuleList = [ordered]@{
    'PlatyPS'                    = $PlatyPSVersion
    'Alt3.Docusaurus.PowerShell' = $DocusaurusVersion
    'Pester'                     = $PesterVersion
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
    Module          = 'Pester'
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
    MetaDescription = 'Help page for the PowerShell Pester "%1" command'
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

Write-Host "Removing existing MDX files" -ForegroundColor Magenta
$outputFolder = Join-Path -Path $docusaurusOptions.DocsFolder -ChildPath $docusaurusOptions.Sidebar | Join-Path -ChildPath "*.*"
if (Test-Path -Path $outputFolder) {
  Remove-Item -Path $outputFolder
}

Write-Host "Generating new MDX files" -ForegroundColor Magenta
New-DocusaurusHelp @docusaurusOptions

Write-Host "Render completed successfully" -BackgroundColor DarkGreen
Pop-Location

if ($ENV:GITHUB_ACTIONS) {
  # Output Workflow information
  Write-Host "::set-output name=pester-version::$($ModuleList.Item('Pester'))"
}
