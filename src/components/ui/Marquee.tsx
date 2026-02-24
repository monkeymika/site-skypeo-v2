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
    <div
      className="py-4 overflow-hidden select-none"
      style={{ borderTop: "1px solid rgba(0,143,120,0.15)", borderBottom: "1px solid rgba(0,143,120,0.15)" }}
    >
      <div className="flex animate-marquee will-change-transform gap-0">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pl-6 text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap"
            style={{ color: "rgba(0,143,120,0.55)" }}
          >
            {item}
            <span style={{ color: "#2b3475", fontSize: "8px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
