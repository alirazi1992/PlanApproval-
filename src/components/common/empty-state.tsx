export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="border rounded-lg p-8 text-center text-slate-500">
      <div className="font-medium">{title}</div>
      {description && <div className="text-sm mt-2">{description}</div>}
    </div>
  );
}
