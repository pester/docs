// ----------------------------------------------------------------------------
// Please note that this component is deliberately NOT using a CCS stylesheet
// because react-table is ui-agnostic and the table will therefore inherit
// Docusaurus table styling. If additional styling ever becomes required please
// consider using either "css modules" or "styled components".
//
// Code sandbox at https://codesandbox.io/s/pester-data-table-basic-1x0mw
// ----------------------------------------------------------------------------
import React from "react";
import { flexRender, useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table'
import "./style.css";

// our pester.dev specific react-table
const PesterDataTable = ({
  columns,
  data,
}) => {
  const table = useReactTable(
    {
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      debugTable: true,
    },
  );

  // Render the UI for your table
  return (
    <table role="table">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id} role="row">
            {headerGroup.headers.map(header => (
              <th
                key={header.id}
                colSpan={header.colSpan}
                role="columnheader"
                className={header.column.columnDef.className}
                style={{ cursor: "pointer" }}
                onClick={header.column.getToggleSortingHandler()}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                <span>{{
                  asc: ' ▲',
                  desc: ' ▼',
                }[header.column.getIsSorted()] ?? ''}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody role="rowgroup">
        {table.getRowModel().rows.map((row, i) => {
          return (
            <tr key={row.id} role="row">
              {row.getVisibleCells().map(cell => {
                return (
                  <td
                    key={cell.id}
                    role="cell"
                    className={cell.column.columnDef.className}
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PesterDataTable;
