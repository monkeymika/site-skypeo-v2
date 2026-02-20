const items = [
  "AUTOMATISATION",
  "NANCY",
  "SITES WEB",
  "DIGITALISATION",
  "SKYPEO",
  "TPE & ARTISANS",
  "SUR-MESURE",
  "INNOVATION",
];

const doubled = [...items, ...items];

export function Marquee() {
  return (
    <div className="border-y border-violet-deep/30 dark:border-violet-deep/40 py-4 overflow-hidden select-none">
      <div className="flex animate-marquee will-change-transform gap-0">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pl-6 text-[11px] font-bold uppercase tracking-[0.2em] text-violet-mid/60 dark:text-violet-mid/50 whitespace-nowrap"
          >
            {item}
            <span className="text-rose text-[8px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
