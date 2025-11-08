type Props = { src?: string; name: string; size?: number };

export function Avatar({ src, name, size = 32 }: Props) {
  const initials =
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2) || "؟";

  return (
    <div
      className="inline-flex items-center justify-center rounded-full border bg-white text-slate-700 shadow-sm"
      style={{ width: size, height: size }}
      title={name}
    >
      {src ? (
        // you can replace with next/image
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          className="h-full w-full rounded-full object-cover"
          width={size}
          height={size}
        />
      ) : (
        <span className="text-[11px] font-semibold">{initials}</span>
      )}
    </div>
  );
}
