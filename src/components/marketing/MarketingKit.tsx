import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";

/* ---------- Device placeholders (swap for real captures later) ---------- */

type DeviceKind = "phone" | "phone-half" | "phone-tilted" | "laptop" | "screenshot";

const labels: Record<DeviceKind, string> = {
  phone: "Phone bezel, full",
  "phone-half": "Phone bezel, top half",
  "phone-tilted": "Phone bezel, tilted",
  laptop: "Laptop bezel",
  screenshot: "App screenshot",
};

function Slot({ label }: { label: string }) {
  return (
    <div className="grid h-full w-full place-items-center rounded-[inherit] border-2 border-dashed border-home-ink/25 p-3 text-center">
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-home-ink/40">{label}</span>
    </div>
  );
}

export function DeviceSlot({ kind = "phone", label, className = "" }: { kind?: DeviceKind; label?: string; className?: string }) {
  const text = label ?? labels[kind];
  if (kind === "laptop") {
    return (
      <div className={`mx-auto w-full max-w-xl ${className}`}>
        <div className="aspect-[16/10] rounded-t-2xl border-[6px] border-b-0 border-home-charcoal bg-background p-2">
          <div className="h-full rounded-lg"><Slot label={text} /></div>
        </div>
        <div className="-mx-[5%] h-3 rounded-b-xl bg-home-charcoal" />
      </div>
    );
  }
  if (kind === "screenshot") {
    return <div className={`aspect-[9/16] w-full max-w-[240px] rounded-3xl bg-background/70 p-1.5 ${className}`}><Slot label={text} /></div>;
  }
  const half = kind === "phone-half";
  return (
    <div className={`relative mx-auto w-full max-w-[240px] overflow-hidden ${half ? "aspect-[9/10]" : "aspect-[9/19]"} ${kind === "phone-tilted" ? "-rotate-6" : ""} ${className}`}>
      <div className={`absolute inset-x-0 top-0 ${half ? "h-[190%]" : "h-full"} rounded-[2.6rem] border-[7px] border-home-charcoal bg-background p-1.5`}>
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-home-charcoal" />
        <div className="h-full rounded-[2rem]"><Slot label={text} /></div>
      </div>
    </div>
  );
}

/* ---------- Filter pill stage (one spot, many stories) ---------- */

export type StageItem = { pill: string; title: string; copy: string; points: string[]; device: DeviceKind; tint: string };

export function FilterStage({ items, dark = false }: { items: StageItem[]; dark?: boolean }) {
  const [i, setI] = useState(0);
  const it = items[i];
  const go = (d: number) => setI((i + d + items.length) % items.length);
  const pillOn = dark ? "bg-primary-foreground text-home-ink" : "bg-home-ink text-primary-foreground";
  const pillOff = dark ? "bg-primary-foreground/10 text-primary-foreground" : "bg-home-ink/5 text-home-ink";
  return (
    <div>
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none]">
        {items.map((s, k) => (
          <button key={s.pill} onClick={() => setI(k)} className={`h-10 shrink-0 rounded-full px-5 text-sm font-bold transition ${k === i ? pillOn : pillOff}`}>{s.pill}</button>
        ))}
      </div>
      <div className={`mt-6 grid items-center gap-8 overflow-hidden rounded-[2rem] p-6 sm:p-10 md:grid-cols-2 ${it.tint} text-home-ink`}>
        <div>
          <p className="text-sm font-bold opacity-50">{String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</p>
          <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{it.title}</h3>
          <p className="mt-4 text-lg leading-relaxed opacity-80">{it.copy}</p>
          <ul className="mt-6 space-y-2">{it.points.map((p) => <li key={p} className="flex gap-3 font-semibold"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-home-ink" />{p}</li>)}</ul>
          <div className="mt-8 flex gap-2">
            <button aria-label="Previous" onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full bg-home-ink text-primary-foreground"><ArrowLeft className="h-5 w-5" strokeWidth={2.8} /></button>
            <button aria-label="Next" onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full bg-home-ink text-primary-foreground"><ArrowRight className="h-5 w-5" strokeWidth={2.8} /></button>
          </div>
        </div>
        <DeviceSlot kind={it.device} label={`${labels[it.device]}: ${it.pill}`} />
      </div>
    </div>
  );
}

/* ---------- Sequential steps with dividers ---------- */

export function StepList({ items }: { items: [LucideIcon, string, string][] }) {
  return (
    <div className="divide-y divide-home-ink/15 border-y border-home-ink/15">
      {items.map(([Icon, t, c]) => (
        <div key={t} className="flex gap-5 py-7">
          <Icon className="mt-1 h-7 w-7 shrink-0" strokeWidth={2.4} />
          <div><h3 className="text-2xl font-extrabold">{t}</h3><p className="mt-2 text-lg leading-relaxed opacity-70">{c}</p></div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Icon feature grid (2-up) ---------- */

export function IconGrid({ items, iconClass = "text-primary" }: { items: [LucideIcon, string, string][]; iconClass?: string }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-3">
      {items.map(([Icon, t, c]) => (
        <div key={t}>
          <Icon className={`h-7 w-7 ${iconClass}`} strokeWidth={2.4} />
          <h3 className="mt-4 text-lg font-extrabold leading-tight">{t}</h3>
          <p className="mt-1.5 text-sm leading-relaxed opacity-70">{c}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Horizontal swipe cards ---------- */

export function SwipeCards({ items }: { items: [LucideIcon, string, string, string][] }) {
  return (
    <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none]">
      {items.map(([Icon, t, c, bg]) => (
        <article key={t} className={`flex min-h-[340px] w-[80%] max-w-sm shrink-0 snap-start flex-col rounded-[2rem] p-7 text-home-ink ${bg}`}>
          <Icon className="mx-auto mt-6 h-20 w-20" strokeWidth={2.2} />
          <h3 className="mt-auto text-2xl font-extrabold">{t}</h3>
          <p className="mt-2 leading-relaxed opacity-75">{c}</p>
        </article>
      ))}
    </div>
  );
}

export function Section({ className = "", eyebrow, title, copy, children }: { className?: string; eyebrow?: string; title: ReactNode; copy?: string; children?: ReactNode }) {
  return (
    <section className={`px-5 py-20 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-[1100px]">
        {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.16em] opacity-60">{eyebrow}</p>}
        <h2 className="mt-3 max-w-3xl text-[clamp(2rem,5.5vw,4rem)] leading-[0.98] font-extrabold">{title}</h2>
        {copy && <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-75">{copy}</p>}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
