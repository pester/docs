import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const videos = [
  {
    title: "Overcoming the ‘Testing Sucks’ Mentality with Pester & ChatGPT",
    author: "Jaap Brasser",
    date: "2023-06-22",
    url: "https://www.youtube.com/watch?v=5HhTVeV5d5k",
    event: "PowerShell Conference EU 2023",
  },
  {
    title: "The rollercoaster of upgrading dbachecks to Pester v5 and Sampler and teamwork",
    author: "Jess Pomfret, Rob Sewell",
    date: "2023-06-21",
    url: "https://www.youtube.com/watch?v=Ff8YCogXpU0",
    event: "PowerShell Conference EU 2023",
  },
  {
    title: "Test Your Code Quality with Pester and PSScriptAnalyzer",
    author: "Leo Visser",
    date: "2023-06-20",
    url: "https://www.youtube.com/watch?v=zO3-8xgTar8",
    event: "PowerShell Conference EU 2023",
  },
  {
    title: "Pester what is new?",
    author: "Jakub Jareš",
    date: "2023-06-19",
    url: "https://www.youtube.com/watch?v=ysGRRyZfa0g",
    event: "PowerShell Conference EU 2023",
  },
  {
    title: "The art of mocking",
    author: "Bartosz Bielawski",
    date: "2022-06-21",
    url: "https://www.youtube.com/watch?v=_w1mKwZRp_Q",
    event: "PowerShell Conference EU 2022",
  },
  {
    title: "Pester 5 vs Pester 4",
    author: "Jakub Jareš",
    date: "2022-06-20",
    url: "https://www.youtube.com/watch?v=D7kY0V7FOak",
    event: "PowerShell Conference EU 2022",
  },
  {
    title: "What's new in Pester v5?",
    author: "Jakub Jareš",
    date: "2020-06-02",
    url: "https://www.youtube.com/watch?v=xC8SfYHQ_i4",
    event: "PowerShell Conference EU 2020",
  },
  {
    title: "PesterSec: Using Pester & ScriptAnalyzer for Detecting Obfuscated PowerShell",
    author: "Daniel Bohannon",
    date: "2019-06-06",
    url: "https://www.youtube.com/watch?v=qYgCLzBaVaw",
    event: "PowerShell Conference EU 2019",
  },
  {
    title: "Breakout Session: Community Talk about Pester 5",
    author: "Jakub Jareš",
    date: "2019-06-05",
    url: "https://www.youtube.com/watch?v=ysw_hXbYYs0",
    event: "PowerShell Conference EU 2019",
  },
  {
    title: "Custom Pester assertions are the vocabulary of your tests",
    author: "Jakub Jareš",
    date: "2019-06-05",
    url: "https://www.youtube.com/watch?v=WYw23cGoKco",
    event: "PowerShell Conference EU 2019",
  },
  {
    title: "Pester internals and concepts (v5)",
    author: "Jakub Jareš",
    date: "2019-06-04",
    url: "https://www.youtube.com/watch?v=6d0K2i7pgQs",
    event: "PowerShell Conference EU 2019",
  },
  {
    title: "Common mistakes in Pester tests",
    author: "Jakub Jareš",
    date: "2018-04-20",
    url: "https://www.youtube.com/watch?v=VBSxCXmNqQ8",
    event: "PowerShell Conference EU 2018",
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