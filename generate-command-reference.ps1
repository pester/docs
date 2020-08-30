#Requires -Modules @{ ModuleName="Alt3.Docusaurus.Powershell"; ModuleVersion="1.0.13" }
#requires -Module PlatyPS
#Requires -Modules @{ ModuleName="Pester"; ModuleVersion="5.0.3" }

<#
    .SYNOPSIS
      Example script to show how to (CI/CD) re-generate the Command Reference
#>
$PSDefaultParameterValues['*:ErrorAction'] = "Stop" # full script stop on first error

Push-Location $PSScriptRoot
Write-Host (Get-Location)

# Write-Host "Importing required modules" -ForegroundColor Magenta
# Import-Module PlatyPS -NoClobber -Force
# Import-Module Pester -NoClobber -Force
# Import-Module Alt3.Docusaurus.Powershell -NoClobber -Force

$arguments = @{
  Module = "Pester"
  DocsFolder = "./docs"
  SideBar = "commands"
  Exclude = @(
    "Get-MockDynamicParameter"
    "Invoke-Mock"
    "SafeGetCommand"
    "Set-DynamicParameterVariable"
  )
  MetaDescription = 'Help page for the Powershell Pester "%1" command'
  MetaKeywords = @(
      "Powershell"
      "Pester"
      "Help"
      "Documentation"
  )
}

Write-Host "Removing existing files" -ForegroundColor Magenta
$outputFolder = Join-Path -Path $arguments.DocsFolder -ChildPath $arguments.Sidebar | Join-Path -ChildPath "*.*"
if (Test-Path -Path $outputFolder) {
  Remove-Item -Path $outputFolder
}

Write-Host "Generating Command Reference" -ForegroundColor Magenta
New-DocusaurusHelp @arguments

Pop-Location
