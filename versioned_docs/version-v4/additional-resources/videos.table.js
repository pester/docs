import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const videos = [
  {
    title: "Mastering PowerShell testing with Pester",
    author: "Mark Wragg",
    date: "2018-10-10",
    url: "https://www.youtube.com/watch?v=BbOiQCgDDR8",
  },
  {
    title: "Introduction to testing with Pester",
    author: "Jakub Jares",
    date: "2017-04-08",
    url: "https://www.youtube.com/watch?v=F3oOk0BC9B4",
  },
  {
    title: "Testing PowerShell with Pester",
    author: "Robert Cain",
    date: "2016-06-18",
    url: "https://www.pluralsight.com/courses/powershell-testing-pester",
  },
  {
    title: "Pester the Tester PowerShell Bugs Beware",
    author: "Robert Cain",
    date: "2016-06-14",
    url: "https://www.youtube.com/watch?v=o4ihc7atwYQ",
  },
  {
    title: "Test-Driven Development with Pester",
    author: "June Blender",
    date: "2016-05-21",
    url: "https://www.youtube.com/watch?v=gssAtCeMOoo",
  },
  {
    title: "Pester in  Action - series",
    author: "Kevin Marquett",
    date: "2015-11-11",
    url: "https://www.youtube.com/playlist?list=PLOcTmsj9WHDo2_FfKePLaq_mJTcnW_fEJ",
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
