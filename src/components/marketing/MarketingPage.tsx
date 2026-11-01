import { useState, type ReactNode } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { InfluencerMark } from "@/components/alfred/InfluencerMark";
import { PlatformMark } from "@/components/influencer/Marks";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const marketingPages = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/for-creators", label: "For creators" },
  { to: "/for-brands", label: "For brands" },
  { to: "/why-us", label: "Why us" },
  { to: "/pricing", label: "Pricing" },
] as const;

export type Tone = { bg: string; text: string; accent: string; muted: string };

export function MarketingShell({ tone, children }: { tone: Tone; children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className={`min-h-screen overflow-x-clip ${tone.bg} ${tone.text}`}>
      <header className={`sticky top-0 z-50 ${tone.bg} backdrop-blur`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-2 text-base font-extrabold text-primary">INFLUENCER <InfluencerMark className="h-5 w-5 text-primary" /></Link>
          <div className="flex items-center gap-2">
            <Link to="/welcome" className="inline-flex h-9 items-center rounded-full bg-home-ink px-4 text-sm font-bold text-primary-foreground">Get started</Link>
            <button aria-label="Menu" onClick={() => setMenu(true)} className="grid h-9 w-9 place-items-center rounded-full bg-home-ink text-primary-foreground"><Menu className="h-5 w-5" strokeWidth={2.6} /></button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-home-charcoal px-6 py-14 text-primary-foreground sm:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Link to="/" className="flex items-center gap-2 text-lg font-extrabold text-primary">INFLUENCER <InfluencerMark className="h-6 w-6 text-primary" /></Link>
          <div className="mt-8 flex gap-6">{["X", "YouTube", "Instagram", "TikTok"].map((p) => <PlatformMark key={p} platform={p} className="h-7 w-7 text-primary-foreground" />)}</div>
          <ul className="mt-10 grid max-w-lg grid-cols-2 gap-4">
            {marketingPages.map((p) => <li key={p.to}><Link to={p.to} className="text-lg text-primary-foreground/60">{p.label}</Link></li>)}
          </ul>
        </div>
      </footer>
      <MarketingMenu open={menu} onOpenChange={setMenu} />
    </div>
  );
}

export function MarketingMenu({ open, onOpenChange, onPartner }: { open: boolean; onOpenChange: (v: boolean) => void; onPartner?: () => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" hideClose className="flex w-[85%] flex-col border-0 bg-home-ink px-6 pt-6 pb-8 text-primary-foreground">
        <div className="flex items-center justify-between">
          <SheetTitle className="flex items-center gap-2 text-base font-extrabold text-primary">INFLUENCER <InfluencerMark className="h-5 w-5 text-primary" /></SheetTitle>
          <SheetClose aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/15"><X className="h-4 w-4" strokeWidth={3} /></SheetClose>
        </div>
        <nav className="mt-10 flex flex-col gap-1">
          <Link to="/" onClick={() => onOpenChange(false)} className="flex items-center justify-between rounded-2xl px-2 py-3 text-2xl font-extrabold">Home<ArrowRight className="h-5 w-5 opacity-50" strokeWidth={3} /></Link>
          {marketingPages.map((p) => (
            <Link key={p.to} to={p.to} onClick={() => onOpenChange(false)} activeProps={{ className: "text-home-lime" }} className="flex items-center justify-between rounded-2xl px-2 py-3 text-2xl font-extrabold">{p.label}<ArrowRight className="h-5 w-5 opacity-50" strokeWidth={3} /></Link>
          ))}
          {onPartner && <button onClick={() => { onOpenChange(false); onPartner(); }} className="mt-2 rounded-2xl bg-home-lime px-4 py-3 text-left text-2xl font-extrabold text-home-ink">Partnerships</button>}
        </nav>
        <Link to="/welcome" className="mt-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary text-base font-bold text-primary-foreground">Get Started <ArrowRight className="h-5 w-5" strokeWidth={3} /></Link>
      </SheetContent>
    </Sheet>
  );
}

export function Hero({ eyebrow, title, copy, cta = "Get started", children }: { eyebrow: string; title: ReactNode; copy: string; cta?: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pt-10 pb-16 sm:px-8 lg:px-12 lg:pt-16">
      <p className="text-sm font-bold uppercase tracking-[0.14em]">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-extrabold">{title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed font-medium sm:text-xl">{copy}</p>
      <Link to="/welcome" className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-primary px-7 font-bold text-primary-foreground shadow-card">{cta} <ArrowRight className="h-5 w-5" strokeWidth={3} /></Link>
      {children && <div className="mt-14">{children}</div>}
    </section>
  );
}

export function Band({ className, title, copy, children }: { className: string; title: string; copy?: string; children: ReactNode }) {
  return (
    <section className={`px-5 py-20 sm:px-8 sm:py-28 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-[1200px]">
        <h2 className="max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] font-extrabold">{title}</h2>
        {copy && <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-80">{copy}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function CardGrid({ items, card }: { items: [string, string, string?][]; card: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map(([t, c, k], i) => (
        <article key={t} className={`rounded-[2rem] p-7 ${card}`}>
          <p className="text-sm font-extrabold opacity-60">{k ?? String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-6 text-2xl font-extrabold">{t}</h3>
          <p className="mt-3 leading-relaxed opacity-80">{c}</p>
        </article>
      ))}
    </div>
  );
}

export function Stats({ items }: { items: [string, string, string][] }) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {items.map(([v, l, bg]) => (
        <div key={l} className={`rounded-[2rem] p-6 text-home-ink ${bg}`}><p className="text-4xl font-extrabold sm:text-5xl">{v}</p><p className="mt-2 font-bold">{l}</p></div>
      ))}
    </div>
  );
}

export function Faq({ items, border = "border-home-ink/20" }: { items: [string, string][]; border?: string }) {
  return (
    <Accordion type="single" collapsible className="max-w-3xl">
      {items.map(([q, a]) => (
        <AccordionItem key={q} value={q} className={border}>
          <AccordionTrigger className="text-left text-lg font-bold">{q}</AccordionTrigger>
          <AccordionContent className="text-base opacity-80">{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function ClosingCta({ title, className, button }: { title: string; className: string; button: string }) {
  return (
    <section className={`px-5 py-24 text-center ${className}`}>
      <h2 className="mx-auto max-w-3xl text-[clamp(2.5rem,7vw,5rem)] leading-[0.92] font-extrabold">{title}</h2>
      <Link to="/welcome" className={`mt-10 inline-flex h-16 w-full max-w-md items-center justify-center gap-3 rounded-full text-lg font-bold ${button}`}>Get started <ArrowRight className="h-5 w-5" strokeWidth={3} /></Link>
    </section>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ],
});
