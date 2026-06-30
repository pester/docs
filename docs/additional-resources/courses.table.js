import React from "react";

// ----------------------------------------------------------------------------
// Please respect alphabetical (title) order when adding new entries.
// ----------------------------------------------------------------------------
export const courses = [
  {
    title: "Testing PowerShell with Pester",
    author: "Ashley McGlone, Adam Bertram",
    url: "https://learn.microsoft.com/en-us/shows/testing-powershell-with-pester/",
  },
  {
    title: "PSKoans - A simple, fun, and interactive way to learn the PowerShell language through Pester unit testing",
    author: "Joel Sallow and a Community",
    url: "https://github.com/vexx32/PSKoans",
  },
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
  {
    header: "Title",
    accessorKey: "title",
    className: "pester-data-table left",
    cell: ({ cell, row: { original } }) => (
      <a href={`${original.url}`} target="blank" rel="noreferrer noopener">
        {cell.getValue()}
      </a>
    ),
  },
  {
    header: "Author",
    accessorKey: "author",
    className: "pester-data-table left",
  },
];
