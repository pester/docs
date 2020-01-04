import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const articles = [
  {
    title: "Adding a code coverage badge to a PowerShell project",
    author: "Mark Wragg",
    date: "2018-05-14",
    url: "http://wragg.io/add-a-code-coverage-badge-to-your-powershell-deployment-pipeline/",
  },
  {
    title: "Azure Security Audits With Pester",
    author: "Sam Cogan",
    date: "2017-12-20",
    url: "https://samcogan.com/azure-security-audits-with-pester",
  },
  {
    title: "Handling Missing Instances when Looping with Pester",
    author: "Rob Sewell",
    date: "2017-11-30",
    url: "https://sqldbawithabeard.com/2017/11/30/handling-missing-instances-when-looping-with-pester/",
  },
  {
    title: "2 Ways to Loop through collections in Pester",
    author: "Rob Sewell",
    date: "2017-11-28",
    url: "https://sqldbawithabeard.com/2017/11/28/2-ways-to-loop-through-collections-in-pester/",
  },
  {
    title: "Building An Infrastructure Pipeline Part 2 - Testing",
    author: "Sam Cogan",
    date: "2017-11-27",
    url: "https://samcogan.com/building-an-infrastructure-pipeline-part-2/",
  },
  {
    title: "Writing and Using Custom Assertions for Pester Tests",
    author: "Mathieu Buisson",
    date: "2017-10-31",
    url: "https://mathieubuisson.github.io/pester-custom-assertions/",
  },
  {
    title: "Getting Started with Pester",
    author: "Josh Duffney",
    date: "2017-08-23",
    url: "http://duffney.io/GettingStartedWithPester",
  },
  {
    title: "Writing Dynamic and Random Tests Cases for Pester",
    author: "Rob Sewell",
    date: "2017-07-06",
    url: "https://sqldbawithabeard.com/2017/07/06/writing-dynamic-and-random-tests-cases-for-pester/",
  },
  {
    title: "Unit Testing with Pester : Storing complex Mock objects in a JSON file",
    author: "Mathieu Buisson",
    date: "2017-02-14",
    url: "https://mathieubuisson.github.io/storing-mock-objects-in-json/",
  },
  {
    title: "Mocking New-Object in Pester with PowerShell classes",
    author: "Ben Taylor",
    date: "2017-01-10",
    url: "https://bentaylor.work/2017/01/mocking-new-object-in-pester-with-powershell-classes/",
  },
  {
    title: "Writing Pester Tests",
    author: "PowerShell Community",
    date: "2016-11-07",
    url: "https://github.com/PowerShell/PowerShell/blob/master/docs/testing-guidelines/WritingPesterTests.md",
  },
  {
    title: "Functional / Non-Functional Pester Tests and why I think you really should have a form of both.",
    author: "Ryan Yates",
    date: "2016-07-21",
    url:
      "http://blog.kilasuit.org/2016/07/21/functional-non-functional-pester-tests-and-why-i-think-you-really-should-have-a-form-of-both/",
  },
  {
    title: "Unit tests versus integration tests in Pester",
    author: "Adam Bertram",
    date: "2016-07-21",
    url: "https://4sysops.com/archives/unit-tests-versus-integration-tests-in-pester/#integration-tests",
  },
  {
    title: "Pester, Jenkins, Remote & ExitCode",
    author: "Fabien Dibot",
    date: "2016-07-02",
    url: "https://pwrshell.net/pester-jenkins-remote-exitcode/",
  },
  {
    title: "Using Visual Studio Code to develop VSTS Build Tasks with PowerShell and Pester tests",
    author: "Richard Fennell",
    date: "2016-06-27",
    url:
      "http://blogs.blackmarble.co.uk/blogs/rfennell/post/2016/06/21/Using-Visual-Studio-Code-to-develop-VSTS-Build-Tasks-with-PowerShell-and-Pester-tests",
  },
  {
    title: "The Pester Pipeline",
    author: "Christopher Hunt",
    date: "2016-06-21",
    url: "https://www.automatedops.com/blog/2016/06/21/the-pester-pipeline/",
  },
  {
    title: "Remediating vSphere Configuration Drift with PowerShell Pester Tests",
    author: "Chris Wahl",
    date: "2016-06-17",
    url: "http://wahlnetwork.com/2016/06/16/remediating-vsphere-configuration-drift-powershell-pester-tests/",
  },
  {
    title: "Constructing Private Test Credentials for Pester Testing",
    author: "Chris Wahl",
    date: "2016-04-27",
    url: "http://wahlnetwork.com/2016/04/27/private-test-credentials-pester-testing/",
  },
  {
    title: "Visualizing Operational Tests with Jenkins and Pester",
    author: "Bill Hurt",
    date: "2016-06-25",
    url: "https://scripting.tech/2016/06/25/visualizing-operational-tests-with-jenkins-and-pester/",
  },
  {
    title: "Testing Pester Code Coverage",
    author: "June Blender",
    date: "2016-06-24",
    url: "https://www.sapien.com/blog/2016/06/24/testing-pester-code-coverage/",
  },
  {
    title: "How to Pass Parameters to a Pester Test Script",
    author: "June Blender",
    date: "2016-06-17",
    url: "https://www.sapien.com/blog/2016/06/17/how-to-pass-parameters-to-a-pester-test-script/",
  },
  {
    title: "Invoke-Pester: Running Selected Tests",
    author: "June Blender",
    date: "2016-06-15",
    url: "https://www.sapien.com/blog/2016/06/15/invoke-pester-run-selected-tests",
  },
  {
    title: "How to Run a Pester Test",
    author: "June Blender",
    date: "2016-06-13",
    url: "https://www.sapien.com/blog/2016/06/13/how-to-run-a-pester-test",
  },
  {
    title: "Testing Active Directory with Pester and Powershell",
    author: "Mark Wragg",
    date: "2016-06-13",
    url: "http://wragg.io/testing-active-directory-with-pester-and-powershell/",
  },
  {
    title: "Active Directory ReportUnit Pester results",
    author: "Irwin Strachan",
    date: "2016-06-10",
    url: "https://pshirwin.wordpress.com/2016/06/10/active-directory-reportunit-pester-results/",
  },

  {
    title: "A different pitch for Pester",
    author: "James O'Neill",
    date: "2016-06-01",
    url: "https://jamesone111.wordpress.com/2016/06/01/a-different-pitch-for-pester/",
  },
  {
    title: "Help = Spec = Test",
    author: "James O'Neill",
    date: "2016-05-31",
    url: "https://jamesone111.wordpress.com/2016/05/31/help-spec-test/",
  },
  {
    title: "Writing #Pester based Unit Tests for #PowerShell Remoting",
    author: "Nicholas Dille",
    date: "2016-05-30",
    url: "http://dille.name/blog/2016/05/30/writing-pester-based-unit-tests-for-powershell-remoting/",
  },
  {
    title: "PowerShell – Pester and Invoke-ScriptAnalyzer",
    author: "Ben Taylor",
    date: "2016-05-27",
    url: "http://bentaylor.work/2016/05/powershell-pester-and-invoke-scriptanalyzer/",
  },
  {
    title: "[PowerShell Pester assertions – Testing with the should command",
    author: "Adam Bertram",
    date: "2016-05-24",
    url: "https://4sysops.com/archives/powershell-pester-assertions-testing-with-the-should-command",
  },
  {
    title: "Download Free Pester Cheat Sheet",
    author: "Kaj Bonfils",
    date: "2016-05-18",
    url: "https://kajbonfils.com/2016/05/download-free-pester-cheat-sheet",
  },
  {
    title: "Mocking SQL Results in Pester",
    author: "Nick Hudacin",
    date: "2016-04-28",
    url: "https://nickhudacin.wordpress.com/2016/04/28/mocking-sql-results-in-pester/",
  },
  {
    title: "Testing Script Modules with Pester - series",
    author: "Dave Wyatt",
    date: "2015-12-14",
    url: "https://blogs.technet.microsoft.com/heyscriptingguy/2015/12/14/what-is-pester-and-why-should-i-care",
  },
  {
    title: "Pester Explained: Describe, Context, and It Blocks",
    author: "Jakub Jares",
    date: "2015-12-03",
    url: "http://www.powershellmagazine.com/2015/12/03/pester-explained-describe-context-and-it-blocks/",
  },
  {
    title: "Pester Explained: Should",
    author: "Jakub Jares",
    date: "2015-12-02",
    url: "http://www.powershellmagazine.com/2015/12/02/pester-explained-should/",
  },
  {
    title: "Pester Explained: Introduction and Assertions",
    author: "Jakub Jares",
    date: "2015-12-01",
    url: "http://www.powershellmagazine.com/2015/12/01/pester-explained-introduction-and-assertions/",
  },
  {
    title: "Comparing Objects using JSON in PowerShell for Pester Tests",
    author: "Daniel Scott-Raynsford",
    date: "2015-08-23",
    url:
      "https://dscottraynsford.wordpress.com/2015/08/23/comparing-objects-using-json-in-powershell-for-pester-tests/",
  },
  {
    title: "Pester: Triangulation and reusing test cases",
    author: "Jakub Jares",
    date: "2015-06-04",
    url: "http://www.powershellmagazine.com/2015/06/04/pester-triangulation-and-reusing-test-cases/",
  },
  {
    title: "Boost your productivity with Pester snippets",
    author: "Jakub Jares",
    date: "2015-01-13",
    url: "http://www.powershellmagazine.com/2015/01/13/boost-your-productivity-with-pester-snippets/",
  },
  {
    title: "Build your Azure lab with DSC and validate it using Pester – 2/3",
    author: "Fabien Dibot",
    date: "2015-01-04",
    url: "https://pwrshell.net/build-your-azure-lab-with-dsc-and-validate-it-using-pester-23/",
  },
  {
    title: "Build your Azure lab with DSC and validate it using Pester – 1/3",
    author: "Fabien Dibot",
    date: "2014-12-27",
    url: "https://pwrshell.net/build-your-azure-lab-with-dsc-and-validate-it-using-pester-13/",
  },
  {
    title: "Create your first Pester script to test a DSC resource",
    author: "Fabien Dibot",
    date: "2014-11-30",
    url: "https://pwrshell.net/create-your-first-pester-script-to-test-a-dsc-resource/",
  },
  {
    title: "Practical PowerShell Unit-Testing: Checking program flow",
    author: "Michael Sorens",
    date: "2014-11-05",
    url: "https://www.simple-talk.com/sysadmin/powershell/practical-powershell-unit-testing-checking-program-flow",
  },
  {
    title: "Practical PowerShell Unit-Testing: Mock Objects",
    author: "Michael Sorens",
    date: "2014-11-04",
    url: "https://www.simple-talk.com/sysadmin/powershell/practical-powershell-unit-testing-mock-objects",
  },
  {
    title: "Practical PowerShell Unit-Testing: Getting Started",
    author: "Michael Sorens",
    date: "2014-11-03",
    url: "https://www.simple-talk.com/sysadmin/powershell/practical-powershell-unit-testing-getting-started",
  },
  {
    title:
      "Configure and test windows infrastructure using Powershell technologies DSC and Pester running from Chef and Test-Kitchen",
    author: "Matt Wrock",
    date: "2014-10-13",
    url:
      "http://www.hurryupandwait.io/blog/configure-and-test-windows-infrastructure-using-powershell-technologies-dsc-and-pester-running-from-chef-and-test-kitchen",
  },
  {
    title: "Pester Mock and TestDrive",
    author: "Jakub Jares",
    date: "2014-09-30",
    url: "http://www.powershellmagazine.com/2014/09/30/pester-mock-and-testdrive/",
  },
  {
    title: "Growing an Open Source Project: The Pester Story",
    author: "Scott Muc",
    date: "2014-08-07",
    url: "http://scottmuc.com/growing-an-open-source-project-the-pester-story/",
  },
  {
    title: "Testing your PowerShell scripts with Pester: Assertions and more",
    author: "Jakub Jares",
    date: "2014-03-27",
    url:
      "http://www.powershellmagazine.com/2014/03/27/testing-your-powershell-scripts-with-pester-assertions-and-more/",
  },
  {
    title: "Get started with Pester (PowerShell unit testing framework",
    author: "Jakub Jares",
    date: "2014-03-12",
    url: "http://www.powershellmagazine.com/2014/03/12/get-started-with-pester-powershell-unit-testing-framework/",
  },
  {
    title: "PowerShell BDD Testing - Pester Screencast",
    author: "Scott Muc",
    date: "2011-08-25",
    url: "http://scottmuc.com/blog/development/powershell-bdd-testing-pester-screencast/",
  },
  {
    title: "Pester - PowerShell BDD Style Testing for the System Administrator",
    author: "Scott Muc",
    date: "2011-03-11",
    url: "http://scottmuc.com/blog/development/pester-bdd-for-the-system-administrator/",
  },
];

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const moduleTests = [
  {
    title: "A Boilerplate for Unit testing DSC resources with Pester",
    author: "Mathieu Buisson",
    date: "2016-07-12",
    url: "https://mathieubuisson.github.io/unit-testing-dsc-resources/",
  },
  {
    title: "Generic Pester Tests",
    author: "Nicholas M. Getchell",
    date: "2016-06-16",
    url: "https://powershell.getchell.org/2016/05/16/generic-pester-tests/",
  },
  {
    title:
      "Creating a set of simple Pester Tests for existing or old PowerShell Modules & making them easier to update in future.",
    author: "Ryan Yates",
    date: "2016-05-24",
    url:
      "http://blog.kilasuit.org/2016/05/24/creating-a-set-of-simple-pester-tests-for-existing-or-old-powershell-modules-making-them-easier-to-update-in-future",
  },
  {
    title: "How To Test PowerShell Modules with Pester",
    author: "Adam Bertram",
    date: "2016-05-19",
    url: "http://mattmcnabb.github.io/Pester-For-PowerShell-Gallery",
  },
  {
    title: "Testing Your Module Manifest With Pester - Revisited",
    author: "Matt McNabb",
    date: "2016-05-18",
    url: "http://mattmcnabb.github.io/Pester-For-PowerShell-Gallery",
  },
  {
    title: "Using Pester to test your Manifest File",
    author: "Francois-Xavier Cat",
    date: "2016-05-11",
    url: "http://www.lazywinadmin.com/2016/05/using-pester-to-test-your-manifest-file.html",
  },
  {
    title: "Using Pester to test your Comment Based Help",
    author: "Francois-Xavier Cat",
    date: "2016-05-10",
    url: "http://www.lazywinadmin.com/2016/05/using-pester-to-test-your-comment-based.html",
  },
  {
    title: "Write Dynamic Unit Tests for your PowerShell Code with Pester",
    author: "Mike F Robbins",
    date: "2016-04-14",
    url: "http://mikefrobbins.com/2016/04/14/write-dynamic-unit-tests-for-your-powershell-code-with-pester",
  },
  {
    title: "Building a Simple Release Pipeline in PowerShell Using psake, Pester, and PSDeploy",
    author: "Brandon Olin",
    date: "2016-04-06",
    url: "https://devblackops.io/building-a-simple-release-pipeline-in-powershell-using-psake-pester-and-psdeploy/",
  },
  {
    title: "Invoking PSScriptAnalyzer in Pester Tests for each Rule",
    author: "Ryan Yates",
    date: "2016-03-29",
    url: "http://blog.kilasuit.org/2016/03/29/invoking-psscriptanalyzer-in-pester-tests-for-each-rule/",
  },
  {
    title: "An Easier Way to Control Pester Tests",
    author: "Adam Bertram",
    date: "2016-03-24",
    url: "http://www.adamtheautomator.com/easier-way-control-pester-tests",
  },
  {
    title: "Testing Script Modules with Pester",
    author: "Dave Wyatt",
    date: "2015-12-17",
    url: "https://blogs.technet.microsoft.com/heyscriptingguy/2015/12/17/testing-script-modules-with-pester",
  },
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
  {
    Header: "Title",
    accessor: "title",
    className: "pester-data-table left",
    Cell: ({ cell: { value }, row: { original } }) => (
      <a href={`${original.url}`} target="blank" rel="noreferrer noopener">
        {value}
      </a>
    ),
  },
  {
    Header: "Author",
    accessor: "author",
    className: "pester-data-table left",
  },
  {
    Header: "Date",
    accessor: "date",
    className: "pester-data-table",
  },
];
