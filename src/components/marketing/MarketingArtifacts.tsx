import { useState } from "react";
import { BadgeCheck, FileSignature, Inbox, Landmark, Lock, Send, Wallet, type LucideIcon } from "lucide-react";
import { DeviceSlot } from "./MarketingKit";

/* ---------- Real mini artifacts: look like the product, not a feature list ---------- */

export function OfferArtifact() {
  return (
    <div className="rounded-3xl bg-card p-5 text-home-ink shadow-[0_18px_40px_-20px_color-mix(in_oklab,var(--home-ink)_45%,transparent)]">
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] opacity-50"><span>New offer</span><span>2 min ago</span></div>
      <p className="mt-3 text-xl font-extrabold">Gymshark, Autumn Athlete</p>
      <p className="mt-1 text-sm opacity-70">2 TikToks, 1 Reel, 30 day usage</p>
      <div className="mt-4 flex items-end justify-between">
        <p className="text-3xl font-extrabold">$4,250</p>
        <span className="rounded-full bg-tint-green px-3 py-1 text-xs font-bold text-tint-green-foreground">Funded</span>
      </div>
      <div className="mt-4 grid grid-cols-[2fr_1fr_1fr] gap-2 text-sm font-bold">
        <span className="rounded-full bg-primary py-2.5 text-center text-primary-foreground">Accept</span>
        <span className="rounded-full bg-muted py-2.5 text-center">Counter</span>
        <span className="py-2.5 text-center text-destructive">Decline</span>
      </div>
    </div>
  );
}

export function EscrowArtifact() {
  return (
    <div className="rounded-3xl bg-home-ink p-5 text-primary-foreground">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] opacity-60"><Lock className="h-4 w-4" strokeWidth={2.6} />Escrow receipt</div>
      <p className="mt-4 text-4xl font-extrabold">$12,000.00</p>
      <p className="text-sm opacity-60">Held for 3 milestones</p>
      <div className="mt-5 space-y-2 border-t border-primary-foreground/15 pt-4 font-mono text-xs">
        {[["Ref", "ESC-20931"], ["Payer", "Sephora UK"], ["Release", "On approval"]].map(([k, v]) => (
          <div key={k} className="flex justify-between"><span className="opacity-50">{k}</span><span>{v}</span></div>
        ))}
      </div>
    </div>
  );
}

export function ApprovalArtifact() {
  return (
    <div className="rounded-3xl bg-home-sand p-5 text-home-ink">
      <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-50">Awaiting approval</p>
      <div className="mt-3 flex gap-3">
        <div className="aspect-[9/14] w-16 shrink-0 rounded-xl border-2 border-dashed border-home-ink/25" />
        <div><p className="font-extrabold">Reel draft v2</p><p className="text-sm opacity-60">Caption, 3 hashtags, posts Fri 6pm</p><p className="mt-1 text-xs font-bold text-primary">1 revision tracked</p></div>
      </div>
      <div className="mt-4 grid grid-cols-[2fr_1fr] gap-2 text-sm font-bold">
        <span className="rounded-full bg-home-ink py-2.5 text-center text-primary-foreground">Approve</span>
        <span className="rounded-full bg-card py-2.5 text-center">Inspect</span>
      </div>
    </div>
  );
}

export function PayoutArtifact() {
  return (
    <div className="rounded-3xl bg-home-lime p-5 text-home-ink">
      <div className="flex items-center justify-between"><Wallet className="h-7 w-7" strokeWidth={2.6} /><span className="rounded-full bg-home-ink px-3 py-1 text-xs font-bold text-primary-foreground">Cleared</span></div>
      <p className="mt-5 text-sm font-bold opacity-60">Milestone 2 of 3 released</p>
      <p className="text-4xl font-extrabold">+$4,000</p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-home-ink/15"><div className="h-full w-2/3 rounded-full bg-home-ink" /></div>
      <p className="mt-2 text-xs font-bold opacity-60">$8,000 of $12,000 paid</p>
    </div>
  );
}

export function ContractArtifact() {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 text-home-ink">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] opacity-50"><FileSignature className="h-4 w-4" strokeWidth={2.6} />Contract, clause 4</div>
      <p className="mt-3 font-serif text-lg leading-snug">"Usage rights: paid social, 30 days from first post. No whitelisting without written consent."</p>
      <div className="mt-4 flex gap-2 text-xs font-bold">
        <span className="rounded-full bg-tint-green px-3 py-1 text-tint-green-foreground">Signed, Tola</span>
        <span className="rounded-full bg-tint-green px-3 py-1 text-tint-green-foreground">Signed, Brand</span>
      </div>
    </div>
  );
}

/* ---------- 5-stage escrow spine: tap a stage, see the real artifact ---------- */

const stages: { icon: LucideIcon; name: string; who: string; copy: string; art: () => JSX.Element }[] = [
  { icon: Send, name: "Brief", who: "Brand", copy: "Budget, audience, platforms and usage rights in one form. Matching starts the moment it is posted.", art: ContractArtifact },
  { icon: Inbox, name: "Offer", who: "Creator", copy: "The full scope and fee arrive up front. Accept, counter or decline in one tap, no email chains.", art: OfferArtifact },
  { icon: Landmark, name: "Escrow", who: "Brand", copy: "Funds are locked before any work starts. The creator sees the money is real before filming.", art: EscrowArtifact },
  { icon: BadgeCheck, name: "Approve", who: "Both", copy: "Drafts land in one queue. Approve, inspect or request a revision; every version is kept.", art: ApprovalArtifact },
  { icon: Wallet, name: "Payout", who: "Creator", copy: "Each approved milestone releases automatically to the creator wallet. Same day, no invoice.", art: PayoutArtifact },
];

export function EscrowSpine() {
  const [i, setI] = useState(2);
  const s = stages[i]!;
  const Art = s.art;
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
      <ol className="relative space-y-1 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-0.5 before:bg-home-ink/15">
        {stages.map((st, k) => {
          const Icon = st.icon;
          const on = k === i;
          const done = k < i;
          return (
            <li key={st.name}>
              <button onClick={() => setI(k)} className={`relative flex w-full items-center gap-4 rounded-2xl p-2 text-left transition ${on ? "bg-card" : ""}`}>
                <span className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full ml-[0.4rem] ${on ? "bg-primary text-primary-foreground" : done ? "bg-home-ink text-primary-foreground" : "bg-home-sand text-home-ink"}`}>
                  <Icon className="h-4 w-4" strokeWidth={2.8} />
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-extrabold">{String(k + 1).padStart(2, "0")} {st.name}</span>
                  {on && <span className="mt-1 block text-sm leading-relaxed opacity-70">{st.copy}</span>}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.12em] opacity-50">{st.who}</span>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="relative">
        <div className="absolute -inset-4 -rotate-2 rounded-[2.5rem] bg-home-yellow" />
        <div className="relative mx-auto max-w-sm rotate-1"><Art /></div>
      </div>
    </div>
  );
}

/* ---------- Asymmetric artifact collage (bento, varied sizes) ---------- */

export function ArtifactCollage() {
  return (
    <div className="grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
      <div className="md:col-span-3 md:row-span-2"><DeviceSlot kind="phone-tilted" label="Phone bezel, tilted: Creator wallet" /></div>
      <div className="md:col-span-3"><OfferArtifact /></div>
      <div className="md:col-span-2"><PayoutArtifact /></div>
      <div className="md:col-span-1 grid place-items-center rounded-3xl bg-home-pink p-4 text-center text-home-ink"><p className="text-3xl font-extrabold">0</p><p className="text-xs font-bold">invoices chased</p></div>
    </div>
  );
}
