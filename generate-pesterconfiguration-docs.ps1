<#
  .SYNOPSIS
    Updates the Configuration page with latest PesterConfiguration Sections and Options
#>
[CmdletBinding()]
param (
    [Parameter(Mandatory = $False)]
    [string] $PesterVersion,
    [ValidateSet('Current','v5')]
    [string] $DocsVersion = 'Current',
    [ValidateSet('List','Table')]
    [string] $Style = 'List'
)

#region helpers

# Run.RepoRoot is resolved by New-PesterConfiguration to the absolute path of the
# repository the generator runs in (machine-specific). We replace it with an
# illustrative placeholder repo root so no build path leaks into the published docs.
$repoRootPlaceholder = 'C:\MyProject'

function Format-MdxDescription ($text) {
    # Escape characters that are structurally significant to MDX 3 / Markdown tables so raw
    # PesterConfiguration help text (e.g. "{ . './setup.ps1' }") doesn't break the docs build.
    # MDX 3 treats `{` as a JS expression and `<` as a JSX tag; `|` would corrupt a table row.
    if ($null -eq $text) { return '' }
    return ([string]$text) -replace '([{}<|])', '\$1'
}

function Format-NicelyMini ($value) {
    if ($null -eq $value) {
        return '$null'
    }

    if ($value -is [bool]) {
        if ($value) {
            '$true'
        } else {
            '$false'
        }
    }

    if ($value -is [int] -or $value -is [decimal]) {
        return $value
    }

    if ($value -is [string]) {
        if ([String]::IsNullOrEmpty($value)) {
            return '$null'
        } else {
            return "'$value'"
        }
    }

    # does not work with [object[]] when building for some reason
    if ($value -is [System.Collections.IEnumerable]) {
        if (0 -eq $value.Count) {
            return '@()'
        }
        $v = foreach ($i in $value) {
            Format-NicelyMini $i
        }
        return "@($($v -join ', '))"
    }
}

function generateSectionsMarkdownAsTable {
    $configObject = New-PesterConfiguration
    foreach ($configSection in $configObject.PSObject.Properties) {
        $sectionName = $configSection.Name
        $sectionDescription = $configSection.Value -as [string]
        $section = $configSection.Value

        $options = foreach ($configOption in $section.PSObject.Properties) {
            $optionName = $configOption.Name
            $option = $configOption.Value
            $rawDefault = $option.Default
            # Run.RepoRoot defaults to an auto-detected, machine-specific path. Render an illustrative placeholder (C:\MyProject) so the generated docs stay machine-independent.
            if ($rawDefault -is [string] -and $rawDefault -eq $configObject.Run.RepoRoot.Value) { $rawDefault = $repoRootPlaceholder }
            $default = Format-NicelyMini $rawDefault
            # Use the declared property type so options with a $null default (e.g. CodeCoverage.ReportRoot) still report their type.
            $type = $option.GetType().GetProperty('Default').PropertyType -as [string] -replace '^Pester\.'
            "| $sectionName.$optionName | $(Format-MdxDescription $option.Description) | ``$type`` | ``$default`` |"
        }

        @"
### ${sectionName}

$sectionDescription

<div className="table-wrapper">
| Option | Description | Type | Default |
|--------|-------------|-----:|--------:|
$($options -join $eol)
</div>

"@
    }
}

function generateSectionsMarkdownAsList {
    $configObject = New-PesterConfiguration
    foreach ($configSection in $configObject.PSObject.Properties) {
        $sectionName = $configSection.Name
        $sectionDescription = $configSection.Value -as [string]
        $section = $configSection.Value

        $options = foreach ($configOption in $section.PSObject.Properties) {
            $optionName = $configOption.Name
            $option = $configOption.Value
            $rawDefault = $option.Default
            # Run.RepoRoot defaults to an auto-detected, machine-specific path. Render an illustrative placeholder (C:\MyProject) so the generated docs stay machine-independent.
            if ($rawDefault -is [string] -and $rawDefault -eq $configObject.Run.RepoRoot.Value) { $rawDefault = $repoRootPlaceholder }
            $default = Format-NicelyMini $rawDefault
            # Use the declared property type so options with a $null default (e.g. CodeCoverage.ReportRoot) still report their type.
            $type = $option.GetType().GetProperty('Default').PropertyType -as [string]
            @"
#### $sectionName.$optionName

**Type:** ``$type``<br/>
**Default:** ``$default``

$($option.Description | ForEach-Object { Format-MdxDescription $_ })

"@
        }

        # Output markdown string per section
        @"
### ${sectionName}

$sectionDescription

$($options -join $eol)
"@
    }
}
#endregion

$loadedModule = if ($PSBoundParameters.ContainsKey('PesterVersion')) {
    Import-Module Pester -RequiredVersion ($PesterVersion -replace '-\w+$') -PassThru
} else {
    Import-Module Pester -PassThru
}

$loadedVersion = if ($loadedModule.PrivateData -and $loadedModule.PrivateData.PSData -and $loadedModule.PrivateData.PSData.PreRelease) {
    "$($loadedModule.Version)-$($loadedModule.PrivateData.PSData.PreRelease)"
} else {
    $loadedModule.Version
}

if ($PSBoundParameters.ContainsKey('PesterVersion') -and $loadedVersion -ne $PesterVersion) {
    throw "Pester $PesterVersion was requested, but version '$loadedVersion' was loaded. Aborting."
}

# generate help for config object and insert it
$startComment = 'GENERATED_PESTER_CONFIGURATION_DOCS_START'
$endComment = 'GENERATED_PESTER_CONFIGURATION_DOCS_END'
$eol = "`n"
$encoding = 'UTF8'

$ConfigurationPagePath = switch ($DocsVersion) {
    'Current' { "$PSScriptRoot/docs/usage/configuration.mdx" }
    'v5' { "$PSScriptRoot/versioned_docs/version-v5/usage/configuration.mdx" }
}

$generatedConfigDocs = switch ($Style) {
    'List' { generateSectionsMarkdownAsList }
    'Table' { generateSectionsMarkdownAsTable }
}

$pageContent = Get-Content $ConfigurationPagePath -Encoding $encoding
$sbf = [System.Text.StringBuilder]''
$sectionFound = $false

foreach ($line in $pageContent) {
    if (-not $sectionFound -and $line -match $startComment) {
        $null = $sbf.AppendLine("$line$eol")
        $null = $sbf.AppendLine("*This section was generated using Pester $loadedVersion.*$eol")
        $sectionFound = $true
        $null = $sbf.AppendJoin($eol, $generatedConfigDocs)
    } elseif ($sectionFound -and ($line -match $endComment)) {
        $sectionFound = $false
    }
    if (-not $sectionFound) {
        $null = $sbf.AppendLine($line)
    }
}

Set-Content -Encoding $encoding -Value $sbf.ToString().TrimEnd() -Path $ConfigurationPagePath
