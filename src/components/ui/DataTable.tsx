type Row = { model: string; purpose: string };

export function DataTable({ rows }: { rows: Row[] }) {
  return (
    <div className="content-surface overflow-x-auto rounded-xl">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-card-border bg-background/50">
            <th className="px-4 py-3 pr-4 font-semibold text-foreground">Model</th>
            <th className="px-4 py-3 font-semibold text-foreground">Purpose</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.model} className="border-b border-card-border last:border-b-0">
              <td className="px-4 py-3 pr-4 font-semibold text-brand">{row.model}</td>
              <td className="px-4 py-3 text-muted">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
