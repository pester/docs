import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new integrations.
// ----------------------------------------------------------------------------
export const integrations = [
  {
    title: "VSCode snippets for Pester",
    author: "Adam Bertram",
    date: "2017-03-07",
    url: "https://forums.powershell.org/t/vscode-snippets-for-pester/8195",
  },
];

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new books.
// ----------------------------------------------------------------------------
export const books = [
  {
    title: "The Pester Book",
    author: "Adam Bertram",
    date: "2017-08-01",
    url: "http://www.leanpub.com/pesterbook",
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
