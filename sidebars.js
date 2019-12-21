/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * PlEASE NOTE:
 * The API pages for pester-docs is generated using the
 * Alt3.Docusaurus.Powershell module. It takes the Get-Help
 * information produced by the Pester module and uses it to
 * generate .mdx files with the required Docusaurus (markdown)
 * front matter variables.
 *
 * To regenerate all API documentation, run the following
 * Powershell command inside the root directory of this repo
 *
 * New-DocusaurusHelp -Module Pester -EditUrl "https://github.com/pester/Pester/blob/master/Functions" -OutputFolder "docs" -Sidebar "commands" -Verbose
 */

const commands = require("./docs/commands/docusaurus.sidebar.js");

module.exports = {
  docs: {
    Docusaurus: ["doc1", "doc2", "doc3"],
    Features: ["mdx"],
    "Command Reference": commands
  }
};
