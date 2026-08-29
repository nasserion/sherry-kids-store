export function Badge({ label }: { label: "New" | "Sale" }) {
  const styles =
    label === "New"
      ? "bg-mint text-white"
      : "bg-sun text-ink";
  return (
    <span
      className={`inline-flex -rotate-3 items-center rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide shadow-sm ${styles}`}
    >
      {label}
    </span>
  );
}
