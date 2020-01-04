import React from "react";

// ----------------------------------------------------------------------------
// Please respect alphabetical (title) order when adding new entries.
// ----------------------------------------------------------------------------
export const projects = [
  {
    title: "Assert",
    author: "Jakub Jares",
    url: "https://github.com/nohwnd/Assert",
  },
  {
    title: "Format-Pester",
    author: "Erwan Quelin",
    url: "https://github.com/equelin/Format-Pester",
  },
  {
    title: "Pester Test Runner Build Task for VSTS",
    author: "Richard Fennell",
    url: "https://marketplace.visualstudio.com/items?itemName=richardfennellBM.BM-VSTS-PesterRunner-Task",
  },
  {
    title: "PesterHelpers",
    author: "https://github.com/PowerShellModules/PesterHelpers",
    url: "Ryan Yates",
  },
  {
    title: "PowershellGuard",
    author: "Steven Murawski",
    url: "https://github.com/smurawski/PowerShellGuard",
  },
  {
    title: "PesterOperationsTest",
    author: "Tore Groneng",
    url: "https://github.com/torgro/PesterOperationTest",
  },
  {
    title: "PestWatch",
    author: "Ed Elliott",
    url: "https://github.com/GOEddie/PestWatch",
  },
  {
    title: "PoshSpec",
    author: "Chris Hunt",
    url: "https://github.com/Ticketmaster/poshspec",
  },
  {
    title: "PowerShell Pester Dashboard Kickstarter",
    author: "Josh Castillo",
    url: "https://github.com/doesitscript/PSPesterDashboardKickstarter/tree/develop",
  },
  {
    title: "PesterMatchArray",
    author: "Stuart Leeks",
    url: "https://github.com/stuartleeks/PesterMatchArray",
  },
  {
    title: "PesterMatchHashtable",
    author: "Stuart Leeks",
    url: "https://github.com/stuartleeks/PesterMatchHashtable",
  },
  {
    title: "Remotely",
    author: "Ravikanth Chaganti",
    url: "https://github.com/rchaganti/Remotely",
  },
  {
    title: "Vester",
    author: "Chris Wahl",
    url: "https://github.com/WahlNetwork/Vester",
  },
  {
    title: "Watchmen",
    author: "Brandon Olin",
    url: "https://github.com/devblackops/watchmen",
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
];
