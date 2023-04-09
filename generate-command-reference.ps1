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
  [Parameter(Mandatory = $False)][string] $PesterVersion,

  [Parameter(Mandatory = $False)][string] $PlatyPSVersion,

  [Parameter(Mandatory = $False)][string] $DocusaurusVersion,

  [switch]$SkipModuleImport
)
Set-StrictMode -Version Latest
$PSDefaultParameterValues['*:ErrorAction'] = "Stop"

Write-Host "Generating MDX files for website Command Reference" -BackgroundColor DarkGreen

# Generate help for Operator switch-parameters for Should.
# CAUTION: Do not use -SkipModuleImport unless this env-var was set prior to importing Pester.
# See https://github.com/pester/Pester/pull/2336
if ($env:PESTER_GENERATE_HELP_FOR_SHOULDOPERATORS -ne 1) {
    $env:PESTER_GENERATE_HELP_FOR_SHOULDOPERATORS = 1
    $envChanged = $true
}

# -----------------------------------------------------------------------------
# Install required modules
# -----------------------------------------------------------------------------
$ModuleList = [ordered]@{
  'PlatyPS' = $PlatyPSVersion
  'Alt3.Docusaurus.PowerShell' = $DocusaurusVersion
  'Pester' = $PesterVersion
}
# Can't use the original enumerator here because we may modify the dictionary mid-process
$ModuleList.Keys.Clone() | ForEach-Object {
  $ModuleName = $_
  $RequestedVersion = $ModuleList.Item($ModuleName)
  Write-Host "Requires $ModuleName $RequestedVersion"

  if ([String]::IsNullOrEmpty($RequestedVersion)) {
    Write-Host "=> Fetching module versions of $ModuleName from PSGallery..."
    $RequestedVersion = (Find-Module -Name $ModuleName).Version
    $ModuleList.Item($ModuleName) = $RequestedVersion
    Write-Host "=> PSGallery version is $RequestedVersion"
  }

  $Installed = Get-Module -ListAvailable $ModuleName
  if ($Installed -and ($Installed.Version -contains $RequestedVersion)) {
    Write-Host "=> required version already installed"
  } else {
    if (-not $Installed) {
      Write-Host "=> no versions installed: installing $RequestedVersion"
    } else {
      Write-Host "=> no matching version installed: installing $RequestedVersion"
    }
    Install-Module $ModuleName -RequiredVersion $RequestedVersion -Force -SkipPublisherCheck -AllowClobber -Scope CurrentUser
  }

  if (-not $SkipModuleImport) {
    Write-Host "=> importing"
    Import-Module -Name $ModuleName -RequiredVersion $RequestedVersion -Force
  }
}

if ($envChanged) {
    # Revert to default behavior to avoid import perf hit in future imports in same session
    $env:PESTER_GENERATE_HELP_FOR_SHOULDOPERATORS = 0
}

# -----------------------------------------------------------------------------
# Use below settings to manipulate the rendered MDX files
# -----------------------------------------------------------------------------
$docusaurusOptions = @{
  Module          = "Pester"
  DocsFolder      = "./docs"
  SideBar         = "commands"
  EditUrl         = "null" # prevent the `Edit this Page` button from appearing
  Exclude         = @(
    "Get-MockDynamicParameter"
    "Invoke-Mock"
    "SafeGetCommand"
    "Set-DynamicParameterVariable"
  )
  MetaDescription = 'Help page for the PowerShell Pester "%1" command'
  MetaKeywords    = @(
    "PowerShell"
    "Pester"
    "Help"
    "Documentation"
  )
  PrependMarkdown = @"
:::info This page was generated
Contributions are welcome in [Pester-repo](https://github.com/pester/pester).
:::
"@
  AppendMarkdown = @"
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
