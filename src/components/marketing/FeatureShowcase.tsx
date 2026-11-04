import { Check, Sparkles, X } from "lucide-react";
import type { Feature } from "./features";
import { DeviceSlot } from "./MarketingKit";

/* One bespoke visual per feature so pages don't share a template. Sample data only. */
export function FeatureShowcase({ f }: { f: Feature }) {
  switch (f.layout) {
    case "chat":
      return (
        <div className="mx-auto max-w-xl space-y-3">
          <p className="ml-auto w-fit max-w-[85%] rounded-3xl rounded-br-md bg-home-ink px-5 py-3 font-semibold text-primary-foreground">Sephora offered $1,800 for 2 Reels + 90 days whitelisting. Fair?</p>
          <div className="w-fit max-w-[90%] rounded-3xl rounded-bl-md bg-card px-5 py-4 text-home-ink shadow-[3px_3.5px_0_0_rgba(0,0,0,0.92)]">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-creator-violet"><Sparkles className="h-4 w-4" />Assistant</p>
            <p className="mt-2 font-semibold">Your base for 2 Reels is about $1,600. 90-day whitelisting usually adds 30%, so counter at <b>$2,100</b>.</p>
            <div className="mt-3 flex gap-2"><span className="rounded-full bg-home-lilac px-3 py-1 text-xs font-bold">Draft counter</span><span className="rounded-full bg-home-sand px-3 py-1 text-xs font-bold">Show math</span></div>
          </div>
        </div>
      );
    case "rules":
      return (
        <div className="grid gap-3 md:grid-cols-2">
          {[["Decline offers under $1,500", "On new offer", true], ["Reject perpetual usage", "On new offer", true], ["Need 5 days shoot notice", "On booking", true], ["Weekly earnings recap", "Mondays 9:00", false]].map(([t, w, on]) => (
            <div key={t as string} className="flex items-center justify-between rounded-[1.5rem] border-2 border-home-ink bg-card p-5 text-home-ink shadow-[3px_3.5px_0_0_rgba(0,0,0,0.92)]">
              <div><p className="font-extrabold">{t}</p><p className="text-sm opacity-60">{w}</p></div>
              <span className={`flex h-7 w-12 items-center rounded-full p-1 ${on ? "justify-end bg-home-electric" : "bg-home-ink/20"}`}><span className="h-5 w-5 rounded-full bg-card" /></span>
            </div>
          ))}
        </div>
      );
    case "ledger":
      return (
        <div className="mx-auto max-w-2xl overflow-hidden rounded-[2rem] border-2 border-home-ink bg-card text-home-ink shadow-[4px_5px_0_0_rgba(0,0,0,0.92)]">
          {[["Gymshark · milestone 2", "+$2,250", "text-tint-green-foreground"], ["Editor salary · Marcus", "−$600", "text-destructive"], ["Sephora · in escrow", "+$1,800", "text-muted-foreground"], ["Nike · released", "+$4,250", "text-tint-green-foreground"]].map(([l, a, c]) => (
            <div key={l} className="flex items-center justify-between border-b border-home-ink/10 px-6 py-5 last:border-0"><span className="font-bold">{l}</span><span className={`text-xl font-extrabold ${c}`}>{a}</span></div>
          ))}
        </div>
      );
    case "queue":
      return (
        <div className="space-y-3">
          {["Gymshark · Reel draft v2", "Sephora · Story set", "Nike · TikTok cut"].map((t) => (
            <div key={t} className="rounded-[1.5rem] bg-card p-5 text-home-ink shadow-[3px_3.5px_0_0_rgba(0,0,0,0.92)]">
              <p className="font-extrabold">{t}</p><p className="text-sm opacity-60">Submitted 2h ago · due Friday</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary font-bold text-primary-foreground"><Check className="h-4 w-4" strokeWidth={3} />Approve</span>
                <span className="flex h-11 items-center rounded-full bg-muted px-5 font-bold">Inspect</span>
                <span className="flex h-11 items-center gap-1 px-3 font-bold text-destructive"><X className="h-4 w-4" strokeWidth={3} />Decline</span>
              </div>
            </div>
          ))}
        </div>
      );
    case "kit":
      return (
        <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
          <div className="flex h-[320px] items-center justify-center"><DeviceSlot kind="phone" label="Media kit screenshot" className="h-full" /></div>
          <div className="space-y-3">
            {[["TikTok Reel", "$1,200 – $1,900"], ["Instagram Reel", "$1,000 – $1,600"], ["YouTube integration", "$2,500 – $4,000"]].map(([p, r]) => (
              <div key={p} className="flex items-center justify-between rounded-[1.5rem] bg-card p-5 text-home-ink"><span className="font-bold">{p}</span><span className="font-extrabold">{r}</span></div>
            ))}
            <p className="text-sm font-semibold opacity-70">Sample ranges for a 250k-follower lifestyle creator.</p>
          </div>
        </div>
      );
    case "calendar":
      return (
        <div className="grid grid-cols-7 gap-2 text-home-ink">
          {Array.from({ length: 14 }, (_, d) => {
            const ev = ({ 2: ["Shoot", "bg-home-pink"], 5: ["Draft due", "bg-home-sky"], 9: ["Post", "bg-home-lime"], 12: ["Shoot", "bg-home-lilac"] } as Record<number, [string, string]>)[d];
            return (
              <div key={d} className="flex aspect-square flex-col justify-between rounded-2xl bg-card p-2">
                <span className="text-xs font-bold opacity-50">{d + 1}</span>
                {ev && <span className={`truncate rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${ev[1]}`}>{ev[0]}</span>}
              </div>
            );
          })}
        </div>
      );
  }
}
