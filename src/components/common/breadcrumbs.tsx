export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-sm text-slate-500">
      {items.map((it, i) => (
        <span key={i}>
          {it.href ? (
            <a className="underline" href={it.href}>
              {it.label}
            </a>
          ) : (
            it.label
          )}
          {i < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}
