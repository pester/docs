import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const videos = [
  {
    title: "Beyond Pester 102: Acceptance testing with PowerShell",
    author: "Glenn Sarti",
    date: "2019-05-18",
    url: "https://www.youtube.com/watch?v=L-1nXtaQ6YM",
    event: "PowerShell + DevOps Global Summit 2019",
  },
  {
    title: "Mastering PowerShell testing with Pester",
    author: "Mark Wragg",
    date: "2018-10-10",
    url: "https://www.youtube.com/watch?v=BbOiQCgDDR8",
    event: "PSDay.UK 2018",
  },
  {
    title: "Beyond Pester 101: Applying testing principles to PowerShell",
    author: "Glenn Sarti",
    date: "2018-05-03",
    url: "https://www.youtube.com/watch?v=NrUxgSaFvtk",
    event: "PowerShell + DevOps Global Summit 2018",
  },
  {
    title: "Infrastructure validation using Pester",
    author: "Irwin Strachan",
    date: "2018-04-18",
    url: "https://www.youtube.com/watch?v=Qfi_H7IZyHg",
    event: "PowerShell Conference EU 2018",
  },
  {
    title: "Pester internals and concepts (v4)",
    author: "Jakub Jareš",
    date: "2018-04-18",
    url: "https://www.youtube.com/watch?v=Wc-9B_MqxYs",
    event: "PowerShell Conference EU 2018",
  },
  {
    title: "How we made Configurable Pester Tests for SQL Server",
    author: "Chrissy LeMaire, Rob Sewell",
    date: "2018-04-17",
    url: "https://www.youtube.com/watch?v=3XahgUEp12I",
    event: "PowerShell Conference EU 2018",
  },
  {
    title: "Fighting Configuration Drift with Dynamic Pester Tests",
    author: "André Kamman",
    date: "2017-05-04",
    url: "https://www.youtube.com/watch?v=JCfwEpkjFfA",
    event: "PowerShell Conference EU 2017",
  },
  {
    title: "Green is bad Red is Good - Turning your Checklists into Pester Tests",
    author: "Rob Sewell",
    date: "2017-05-03",
    url: "https://www.youtube.com/watch?v=Qy-uvT57pt8",
    event: "PowerShell Conference EU 2017",
  },
  {
    title: "Introduction to testing with Pester",
    author: "Jakub Jareš",
    date: "2017-04-08",
    url: "https://www.youtube.com/watch?v=F3oOk0BC9B4",
    event: "PowerShell UG Singapore",
  },
  {
    title: "Pester the Tester PowerShell Bugs Beware",
    author: "Robert Cain",
    date: "2016-06-14",
    url: "https://www.youtube.com/watch?v=o4ihc7atwYQ",
    event: "Mississippi PowerShell User Group",
  },
  {
    title: "Test-Driven Development with Pester",
    author: "June Blender",
    date: "2016-04-21",
    url: "https://www.youtube.com/watch?v=gssAtCeMOoo",
    event: "PowerShell Conference EU 2016",
  },
  {
    title: "Pester in Action - series",
    author: "Kevin Marquett",
    date: "2015-11-11",
    url: "https://www.youtube.com/playlist?list=PLOcTmsj9WHDo2_FfKePLaq_mJTcnW_fEJ",
    event: "",
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
  {
    header: "Date",
    accessorKey: "date",
    className: "pester-data-table nowrap",
  },
  {
    header: "Event",
    accessorKey: "event",
    className: "pester-data-table left",
  },
];
