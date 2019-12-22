/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * PlEASE NOTE:
 * The API pages for pester-docs are generated using the
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

const commands = require("./docs/commands/docusaurus.sidebar.js");

module.exports = {
  docs: {
    Docusaurus: ["doc1", "doc2", "doc3"],
    Features: ["mdx"],
    "Command Reference": commands
  }
};
