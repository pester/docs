/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * PlEASE NOTE:
 * The API pages for pester-docs are generated using the
 * Alt3.Docusaurus.PowerShell module. It takes the Get-Help
 * information produced by the Pester module and uses it to
 * 1) generate .mdx files with the required Docusaurus (markdown)
 *    front matter variables for each of the exported module
 *    commands
 * 2) generate a sidebar file containing references to each
 *    command page (/docs/commands/docusaurus.sidebar.js)
 *
 * To regenerate all API pages, run the following PowerShell
 * command inside the root directory of this repo
 *
 * New-DocusaurusHelp -Module Pester -OutputFolder "docs" -Sidebar "commands" -Verbose
 */

const commands = require("./docs/commands/docusaurus.sidebar.js");

module.exports = {
  docs: {
    Introduction: [
      "quick-start",
      "introduction/installation",
    ],
    Usage: [
      "usage/file-placement-and-naming",
      "usage/importing-tested-functions",
      "usage/test-file-structure",
      "usage/discovery-and-run",
      "usage/data-driven-tests",
      "usage/setup-and-teardown",
      "usage/tags",
      "usage/skip",
      "usage/mocking",
      "usage/modules",
      "usage/testdrive",
      "usage/testregistry",
      "usage/test-results",
      "usage/code-coverage",
      "usage/configuration",
      "usage/output",
      "usage/vscode",
      "usage/troubleshooting",
    ],
    "Assertions": [
      "assertions/should-command",
      "assertions/assertions",
      "assertions/custom-assertions",
    ],
    "Migration Guides": [
      "migrations/v4-to-v5",
      "migrations/breaking-changes-in-v5",
      "migrations/v3-to-v4",
    ],
    "Additional Resources": [
      "additional-resources/articles",
      "additional-resources/courses",
      "additional-resources/misc",
      "additional-resources/projects",
      "additional-resources/videos",
    ],
    "Contributing": [
      "contributing/introduction",
      "contributing/reporting-issues",
      "contributing/feature-requests",
      "contributing/pull-requests",
    ],
    "Command Reference": commands
  }
};
