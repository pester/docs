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
param (
  [Parameter(Mandatory = $False)][string] $PesterVersion
)
Set-StrictMode -Version Latest
$PSDefaultParameterValues['*:ErrorAction'] = "Stop"

Write-Host "Generating MDX files for website Command Reference" -BackgroundColor DarkGreen

# -----------------------------------------------------------------------------
# Fetch module versions from PSGallery
# -----------------------------------------------------------------------------
$modules = @{}

Write-Host "Fetching module versions from PSGallery..."
if ($PesterVersion) {
  $modules.Pester = $PesterVersion
} else {
  $modules.Pester = (Find-Module -Name Pester).Version
}

$modules."Alt3.Docusaurus.Powershell" = (Find-Module -Name Alt3.Docusaurus.Powershell).Version
$modules.PlatyPS = (Find-Module -Name PlatyPS).Version

# -----------------------------------------------------------------------------
# Install required modules
# -----------------------------------------------------------------------------
$modules.GetEnumerator() | ForEach-Object {
  Write-Host "Requires $($_.Name) $($_.Value)"

  if ((Get-Module -ListAvailable $_.Name).Version -contains $_.Value) {
    Write-Host "=> already installed"
  } else {
    Write-Host "=> installing"
    Install-Module $_.Name -RequiredVersion $_.Value -Force -SkipPublisherCheck -AllowClobber -Scope CurrentUser
  }

  Write-Host "=> importing"
  Import-Module -Name $_.Name -RequiredVersion $_.Value -Force
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
  MetaDescription = 'Help page for the Powershell Pester "%1" command'
  MetaKeywords    = @(
    "Powershell"
    "Pester"
    "Help"
    "Documentation"
  )
  AppendMarkdown = "## EDIT THIS PAGE`nThis page was auto-generated using the comment based help in Pester $($modules.Pester). To edit the content of this page, change the corresponding help in the [pester/Pester](https://github.com/pester/pester) repository. See our [contribution guide](https://github.com/pester/docs#contributing) for more information."
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
