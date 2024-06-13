<#
  .SYNOPSIS
    Updates the Configuration page with latest PesterConfiguration Sections and Options
#>
[CmdletBinding()]
param (
    [Parameter(Mandatory = $False)]
    [string] $PesterVersion,
    [ValidateScript({ Test-Path -Path $_ -PathType Leaf })]
    [string] $ConfigurationPagePath = "$PSScriptRoot/docs/usage/configuration.mdx",
    [ValidateSet('List','Table')]
    [string] $Style = 'List'
)

#region helpers
function Format-NicelyMini ($value) {
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
            $default = Format-NicelyMini $option.Default
            $type = $option.Default.GetType() -as [string] -replace '^Pester\.'
            "| $optionName | $($option.Description) | ``$type`` | ``$default`` |"
        }

        @"
### ${sectionName}

$sectionDescription

| Option | Description | Type | Default |
|--------|-------------|-----:|--------:|
$($options -join $eol)

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
            $default = Format-NicelyMini $option.Default
            $type = $option.Default.GetType() -as [string]
            @"
#### $sectionName.$optionName

**Type:** ``$type``<br/>
**Default:** ``$default``

$($option.Description)

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

$startComment = 'GENERATED_PESTER_CONFIGURATION_DOCS_START'
$endComment = 'GENERATED_PESTER_CONFIGURATION_DOCS_END'

if ($PSBoundParameters.ContainsKey('PesterVersion')) {
    Import-Module Pester -RequiredVersion $PesterVersion
} else {
    Import-Module Pester
}

# generate help for config object and insert it
$eol = "`n"
$encoding = 'UTF8'

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
