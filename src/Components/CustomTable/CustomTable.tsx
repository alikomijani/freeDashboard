import { ReactNode } from "react";

type Props<T> = {
  data: T[];
  headers: { name: keyof T; title: string; render: (row: T) => ReactNode }[];
};

function CustomTable<T>({ data, headers }: Props<T>) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.name.toString()}>{header.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header.name.toString()}>{header.render(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
