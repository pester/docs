/**
 * NOTE:
 * The Commands-pages for pester-docs are generated using the
 * Alt3.Docusaurus.Powershell module. It takes the Get-Help
 * information produced by the Pester module and uses it to
 * 1) generate .mdx files with the required Docusaurus (markdown)
 *    front matter variables for each of the exported module
 *    commands
 * 2) generate a sidebar file containing references to each
 *    command page (/docs/commands/docusaurus.sidebar.js)
 *
 * To regenerate all API pages, run the following Powershell
 * command inside the root directory of this repo
 *
 * New-DocusaurusHelp -Module Pester -OutputFolder "docs" -Sidebar "commands" -Verbose
 */

import commands from "./docs/commands/docusaurus.sidebar.js";

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      // Root category used to identify the root node in the breadcrumbs,
      // can be removed once https://github.com/facebook/docusaurus/issues/6953 is fixed to avoid extra indent
      type: 'category',
      label: 'Documentation',
      collapsible: false,
      items: [
        {
          "Introduction": [
            "quick-start",
            "introduction/installation",
          ],
          "Usage": [
            "usage/file-placement-and-naming",
            "usage/importing-tested-functions",
            "usage/test-file-structure",
            "usage/discovery-and-run",
            "usage/parallel",
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
            "usage/result-object",
            "usage/vscode",
            "usage/troubleshooting",
          ],
          "Assertions": [
            "assertions/should-command",
            "assertions/should-beequivalent",
            "assertions/soft-assertions",
            "assertions/assertions",
            "assertions/custom-assertions",
          ],
          "Migration Guides": [
            "migrations/v5-to-v6",
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
        }
      ],
    }
  ],
  commands: [
    {
      // Root category used to identify the root node in the breadcrumbs,
      // can be removed once https://github.com/facebook/docusaurus/issues/6953 is fixed to avoid extra indent
      type: 'category',
      label: 'Command Reference',
      items: commands,
      collapsible: false,
    },
  ],
};

export default sidebars;
