import { Avatar } from "./Avatar";

type Person = { name: string; src?: string };

export function AvatarGroup({ people, maxVisible = 6 }: { people: Person[]; maxVisible?: number }) {
  const visible = people.slice(0, maxVisible);
  const remaining = people.length - visible.length;

  return (
    <div className="flex -space-x-2 rtl:space-x-reverse">
      {visible.map((p, i) => (
        <div key={i} className="ring-2 ring-white dark:ring-slate-900">
          <Avatar name={p.name} src={p.src} />
        </div>
      ))}
      {remaining > 0 && (
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white text-xs font-semibold ring-2 ring-white dark:ring-slate-900">
          +{remaining}
        </div>
      )}
    </div>
  );
}
