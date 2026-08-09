import React from "react";
import {
  createSortedRowModel,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from '@tanstack/react-table'
import "./style.css";

const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
  },
});

// our pester.dev specific react-table
const PesterDataTable = ({
  columns,
  data,
}) => {
  const table = useTable(
    {
      features,
      columns,
      data,
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
                <table.FlexRender header={header} />
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
              {row.getAllCells().map(cell => {
                return (
                  <td
                    key={cell.id}
                    role="cell"
                    className={cell.column.columnDef.className}
                  >
                    <table.FlexRender cell={cell} />
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
