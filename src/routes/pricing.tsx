import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, BadgeCheck, BarChart3, Bell, Bot, Briefcase, CalendarDays, Check, CircleDollarSign, Coins, FileSignature,
  FileText, Filter, Globe, Handshake, Inbox, Layers, Lock, Megaphone, MessageSquare, Minus, Plug, Receipt, Search,
  ShieldCheck, Sparkles, Star, Target, Users, Wallet, X, Zap, type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Faq, MarketingShell, meta } from "@/components/marketing/MarketingPage";
import { DeviceSlot, IconGrid, Section } from "@/components/marketing/MarketingKit";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/pricing")({
  head: () => meta("INFLUENCER pricing: start free, get paid first", "Creator and brand plans. Start free, run real campaigns and get paid before you ever pay for a plan."),
  component: Page,
});

type Role = "creator" | "brand";
type Feat = [LucideIcon, string];
type Plan = { name: string; price: string; per: string; tag: string; bg: string; credits: string; platform: Feat[]; ai: Feat[]; cta: string; popular?: boolean };

const included: Record<Role, [LucideIcon, string, string][]> = {
  creator: [
    [Inbox, "Brand offers", "Receive, accept or decline real offers."],
    [Layers, "Activations", "One workspace per live campaign."],
    [Wallet, "Wallet and escrow", "Funds held before you start work."],
    [CalendarDays, "Content calendar", "Shoots, drafts and post dates together."],
    [FileText, "Media kit", "A shareable kit with your rates."],
    [Bot, "AI Assistant", "Ask, draft and summarise, built in."],
  ],
  brand: [
    [Megaphone, "Post briefs", "Publish a brief in minutes."],
    [Target, "Creator matching", "Matched by niche, reach and rate."],
    [BadgeCheck, "Approval queue", "Inspect and approve every deliverable."],
    [ShieldCheck, "Escrow payouts", "Release funds on verified milestones."],
    [BarChart3, "Live spend", "Budget and results as they happen."],
    [Bot, "AI Assistant", "Price briefs and summarise spend."],
  ],
};

const plans: Record<Role, Plan[]> = {
  creator: [
    { name: "Free", price: "$0", per: "forever", tag: "Get paid before you pay", bg: "bg-home-lilac", credits: "50 AI credits / month", cta: "Start free",
      platform: [[Inbox, "Unlimited brand offers"], [Layers, "Up to 3 live activations"], [Wallet, "Wallet with escrow protection"], [CalendarDays, "Content calendar"], [FileText, "Basic media kit"], [Plug, "2 integrations"]],
      ai: [[Bot, "AI Assistant"], [Sparkles, "Caption and reply drafts"], [Coins, "50 monthly AI credits"]] },
    { name: "Pro", price: "$12", per: "per month", tag: "For full-time creators", bg: "bg-home-lime", credits: "600 AI credits / month", cta: "Upgrade to Pro", popular: true,
      platform: [[Check, "Everything in Free"], [Layers, "Unlimited activations"], [Search, "Rate research"], [Users, "Brand network 360"], [FileSignature, "Contracts and briefs library"], [Plug, "Unlimited integrations"], [Receipt, "Invoices and tax export"]],
      ai: [[Bot, "Priority AI Assistant"], [Filter, "Instructions and auto rules"], [MessageSquare, "Negotiation drafts"], [Coins, "600 monthly AI credits"]] },
    { name: "Elite", price: "$29", per: "per month", tag: "For creators with a team", bg: "bg-home-sky", credits: "2,000 AI credits / month", cta: "Upgrade to Elite",
      platform: [[Check, "Everything in Pro"], [Briefcase, "My Office with team seats"], [Users, "Manager access"], [Star, "Featured in brand matching"], [Globe, "Custom media kit link"], [ShieldCheck, "Priority payout review"]],
      ai: [[Bot, "Assistant across your team"], [Zap, "Deal pricing suggestions"], [BarChart3, "Monthly income reports"], [Coins, "2,000 monthly AI credits"]] },
  ],
  brand: [
    { name: "Starter", price: "$0", per: "forever", tag: "Run your first campaign free", bg: "bg-home-yellow", credits: "50 AI credits / month", cta: "Start free",
      platform: [[Megaphone, "1 live brief at a time"], [Target, "Creator matching"], [BadgeCheck, "Approval queue"], [ShieldCheck, "Escrow payouts"], [CalendarDays, "Campaign calendar"]],
      ai: [[Bot, "AI Assistant"], [Sparkles, "Brief writing help"], [Coins, "50 monthly AI credits"]] },
    { name: "Growth", price: "$99", per: "per month", tag: "For teams running monthly", bg: "bg-home-sage", credits: "1,000 AI credits / month", cta: "Upgrade to Growth", popular: true,
      platform: [[Check, "Everything in Starter"], [Megaphone, "Unlimited briefs"], [Users, "Creator network with favourites"], [BarChart3, "Live spend tracking"], [FileText, "Files and documents"], [Plug, "Unlimited integrations"]],
      ai: [[Filter, "Instructions and auto rules"], [CircleDollarSign, "Brief pricing"], [MessageSquare, "Campaign message drafts"], [Coins, "1,000 monthly AI credits"]] },
    { name: "Scale", price: "$299", per: "per month", tag: "For agencies and big brands", bg: "bg-home-pink", credits: "5,000 AI credits / month", cta: "Upgrade to Scale",
      platform: [[Check, "Everything in Growth"], [Users, "Unlimited team seats"], [Handshake, "Multi brand workspaces"], [Lock, "Roles and permissions"], [Bell, "Dedicated support"]],
      ai: [[Zap, "Creator fit scoring"], [BarChart3, "Spend summaries by brand"], [Coins, "5,000 monthly AI credits"]] },
  ],
};

const usage: [string, string][] = [
  ["Quick question to the Assistant", "1"],
  ["Draft a caption or reply", "2"],
  ["Summarise an offer or brief", "3"],
  ["Price a deal or brief", "5"],
  ["Draft a contract message", "6"],
  ["Monthly income or spend report", "10"],
];

const compare: Record<Role, [string, string[]][]> = {
  creator: [
    ["Brand offers", ["Unlimited", "Unlimited", "Unlimited"]], ["Live activations", ["3", "Unlimited", "Unlimited"]],
    ["Escrow wallet", ["yes", "yes", "yes"]], ["Rate research", ["no", "yes", "yes"]], ["Brand network 360", ["no", "yes", "yes"]],
    ["Auto rules", ["no", "yes", "yes"]], ["Team seats", ["no", "no", "3"]], ["AI credits / month", ["50", "600", "2,000"]],
  ],
  brand: [
    ["Live briefs", ["1", "Unlimited", "Unlimited"]], ["Creator matching", ["yes", "yes", "yes"]], ["Escrow payouts", ["yes", "yes", "yes"]],
    ["Live spend", ["no", "yes", "yes"]], ["Auto rules", ["no", "yes", "yes"]], ["Team seats", ["1", "5", "Unlimited"]],
    ["Multi brand", ["no", "no", "yes"]], ["AI credits / month", ["50", "1,000", "5,000"]],
  ],
};

function Cell({ v }: { v: string }) {
  if (v === "yes") return <Check className="mx-auto h-5 w-5 text-home-forest" strokeWidth={3} />;
  if (v === "no") return <Minus className="mx-auto h-5 w-5 opacity-30" strokeWidth={3} />;
  return <span className="font-bold">{v}</span>;
}

function Page() {
  const [role, setRole] = useState<Role>("creator");
  const [open, setOpen] = useState<Plan | null>(null);
  const list = plans[role];
  return (
    <MarketingShell tone={{ bg: "bg-background", text: "text-home-ink", accent: "", muted: "" }}>
      {/* Hero */}
      <section className="mx-auto max-w-[1100px] px-5 pt-10 pb-12 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Pricing</p>
        <h1 className="mt-4 text-[clamp(2.8rem,8vw,6rem)] leading-[0.92] font-extrabold">Get paid before<br />you ever pay.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-75">
          {role === "creator"
            ? "Start on INFLUENCER for free. Receive real offers, deliver campaigns and watch payouts land in your wallet. Upgrade only when it already pays for itself."
            : "Post your first brief for free. Match with creators, approve deliverables and release escrow on verified milestones. Upgrade when you scale."}
        </p>
        <div className="mt-8 inline-flex rounded-full bg-home-ink/5 p-1">
          {(["creator", "brand"] as Role[]).map((r) => (
            <button key={r} onClick={() => setRole(r)} className={`h-11 rounded-full px-7 text-sm font-bold capitalize transition ${role === r ? "bg-home-ink text-primary-foreground" : ""}`}>{r === "creator" ? "Influencer" : "Brand"}</button>
          ))}
        </div>
      </section>

      {/* Included in every plan */}
      <Section className="bg-home-sand" title="Included in every plan, even free" copy="If it's on the free plan, it's on every plan above it. No feature you rely on ever disappears.">
        <IconGrid items={included[role]} />
      </Section>

      {/* Plan cards */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1100px] gap-4 md:grid-cols-3">
          {list.map((p) => (
            <article key={p.name} className={`relative flex flex-col rounded-[2rem] p-7 ${p.bg}`}>
              {p.popular && <span className="absolute right-5 top-5 rounded-full bg-home-ink px-3 py-1 text-xs font-bold text-primary-foreground">Most popular</span>}
              <h2 className="text-2xl font-extrabold">{p.name}</h2>
              <p className="mt-1 text-sm font-semibold opacity-70">{p.tag}</p>
              <p className="mt-6 text-5xl font-extrabold">{p.price}<span className="ml-2 text-base font-bold opacity-60">{p.per}</span></p>
              <p className="mt-3 flex items-center gap-2 text-sm font-bold"><Coins className="h-4 w-4" strokeWidth={2.6} />{p.credits}</p>
              <ul className="mt-6 space-y-2.5">
                {p.platform.slice(0, 4).map(([I, t]) => <li key={t} className="flex items-center gap-3 text-sm font-semibold"><I className="h-4 w-4 shrink-0" strokeWidth={2.6} />{t}</li>)}
              </ul>
              <button onClick={() => setOpen(p)} className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-home-ink font-bold text-primary-foreground">Explore <ArrowRight className="h-4 w-4" strokeWidth={3} /></button>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-[1100px] text-center text-sm opacity-60">Prices are placeholders for this prototype.</p>
      </section>

      {/* AI credits */}
      <Section className="bg-home-ink text-primary-foreground" eyebrow="AI credits" title="An Assistant on every plan. Credits that fit how you work." copy="The Assistant is a feature. Credits are your monthly allowance for using it. Here is roughly what common actions cost.">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="divide-y divide-primary-foreground/15 rounded-[2rem] bg-primary-foreground/5 px-6">
            {usage.map(([a, c]) => (
              <div key={a} className="flex items-center justify-between py-4"><span className="font-semibold">{a}</span><span className="flex items-center gap-1.5 font-extrabold text-home-lime"><Coins className="h-4 w-4" />~{c}</span></div>
            ))}
          </div>
          <div className="flex flex-col justify-between rounded-[2rem] bg-home-lime p-7 text-home-ink">
            <Sparkles className="h-12 w-12" strokeWidth={2.4} />
            <div className="mt-10">
              <h3 className="text-3xl font-extrabold leading-tight">Run low? Top up anytime.</h3>
              <p className="mt-3 leading-relaxed opacity-80">Top up your AI credits for a fraction of your subscription cost. No plan change needed. Credits reset monthly.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Device showcase */}
      <Section title="See it on your phone and your desk" copy="Creators run deals in their pocket. Brand teams get the full picture on desktop.">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_2fr]">
          <DeviceSlot kind="phone" label="Phone bezel: Wallet screen" />
          <DeviceSlot kind="laptop" label="Laptop bezel: Brand dashboard" />
        </div>
      </Section>

      {/* Comparison */}
      <Section className="bg-home-sand" title="Compare plans">
        <div className="overflow-x-auto rounded-[2rem] bg-background">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-home-ink/10">
                <th className="sticky left-0 bg-background p-5 text-left font-extrabold">Feature</th>
                {list.map((p) => <th key={p.name} className="p-5 text-center font-extrabold">{p.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {compare[role].map(([f, vals]) => (
                <tr key={f} className="border-b border-home-ink/5 last:border-0">
                  <td className="sticky left-0 bg-background p-5 font-semibold">{f}</td>
                  {vals.map((v, k) => <td key={k} className="p-5 text-center"><Cell v={v} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Pricing questions">
        <Faq items={[
          ["Can I really use it without paying?", "Yes. The free plan lets you receive offers, deliver campaigns and get paid. Upgrade only when you want more."],
          ["How does escrow work?", "Brands fund the campaign up front. Money is released to the creator when each milestone is approved."],
          ["What happens if I run out of AI credits?", "Your tasks still finish. You can top up anytime, or wait for the monthly reset."],
          ["Can I cancel anytime?", "Yes. No lock in. You keep everything on the free plan."],
          ["Agency or custom needs?", "Reach us through Partnerships on the homepage."],
        ]} />
      </Section>

      <PlanModal plan={open} onClose={() => setOpen(null)} />
    </MarketingShell>
  );
}

function PlanModal({ plan, onClose }: { plan: Plan | null; onClose: () => void }) {
  return (
    <Dialog open={!!plan} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="flex h-[88vh] max-w-lg flex-col gap-0 overflow-hidden rounded-[2rem] border-0 p-0 [&>button]:hidden">
        {plan && (
          <>
            <div className={`shrink-0 p-6 ${plan.bg} text-home-ink`}>
              <div className="flex items-start justify-between">
                <div>
                  <DialogTitle className="text-3xl font-extrabold">{plan.name}</DialogTitle>
                  <p className="mt-1 text-sm font-semibold opacity-70">{plan.tag}</p>
                </div>
                <button aria-label="Close" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-home-ink/10"><X className="h-4 w-4" strokeWidth={3} /></button>
              </div>
              <p className="mt-4 text-4xl font-extrabold">{plan.price}<span className="ml-2 text-base font-bold opacity-60">{plan.per}</span></p>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6 text-home-ink">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] opacity-50">Platform features</h3>
              <ul className="mt-4 space-y-4">{plan.platform.map(([I, t]) => <li key={t} className="flex items-center gap-4 font-semibold"><I className="h-5 w-5 shrink-0 text-primary" strokeWidth={2.4} />{t}</li>)}</ul>
              <h3 className="mt-9 text-xs font-bold uppercase tracking-[0.16em] opacity-50">AI features</h3>
              <ul className="mt-4 space-y-4">{plan.ai.map(([I, t]) => <li key={t} className="flex items-center gap-4 font-semibold"><I className="h-5 w-5 shrink-0 text-creator-violet" strokeWidth={2.4} />{t}</li>)}</ul>
              <p className="mt-9 rounded-2xl bg-home-sand p-4 text-sm leading-relaxed">Top up AI credits anytime for a fraction of your subscription cost.</p>
            </div>
            <div className="shrink-0 border-t border-home-ink/10 p-5">
              <Link to="/welcome" className="flex h-14 items-center justify-center gap-2 rounded-full bg-primary font-bold text-primary-foreground">{plan.cta} <ArrowRight className="h-5 w-5" strokeWidth={3} /></Link>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
