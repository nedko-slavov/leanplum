interface TableProps {
  rows: string[][];
  columns: string[];
}

export default function Table({ rows, columns }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.replace(/\s+/g, "")}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.join().replace(/\s+/g, "")}>
            {row.map((td) => (
              <td key={td.replace(/\s+/g, "")}>{td}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
