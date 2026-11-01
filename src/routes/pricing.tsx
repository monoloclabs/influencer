import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Band, Faq, Hero, MarketingShell, meta } from "@/components/marketing/MarketingPage";

export const Route = createFileRoute("/pricing")({
  head: () => meta("INFLUENCER pricing for creators and brands", "Simple plans for creators and brands. Start free and upgrade as your campaigns grow."),
  component: Page,
});

const plans = [
  { n: "Creator", p: "Free", s: "to start", bg: "bg-home-lilac", f: ["Unlimited offers", "Activation workspace", "Wallet and escrow", "Media kit"] },
  { n: "Creator Pro", p: "$12", s: "per month", bg: "bg-home-lime", f: ["Everything in Creator", "Rate research", "Brand network 360", "Assistant and rules"] },
  { n: "Brand", p: "$99", s: "per month", bg: "bg-home-yellow", f: ["Unlimited briefs", "Creator matching", "Approval queue", "Live spend tracking"] },
];

function Page() {
  return (
    <MarketingShell tone={{ bg: "bg-background", text: "text-home-ink", accent: "", muted: "" }}>
      <Hero eyebrow="Pricing" title={<>Simple plans.<br /><span className="text-primary">No surprises.</span></>} copy="Start free, upgrade when it pays for itself. Prices below are placeholders for this prototype." />
      <section className="mx-auto grid max-w-[1200px] gap-4 px-5 pb-24 sm:px-8 md:grid-cols-3">
        {plans.map((pl) => (
          <article key={pl.n} className={`flex flex-col rounded-[2rem] p-7 ${pl.bg}`}>
            <h2 className="text-2xl font-extrabold">{pl.n}</h2>
            <p className="mt-6 text-5xl font-extrabold">{pl.p}<span className="ml-2 text-base font-bold opacity-60">{pl.s}</span></p>
            <ul className="mt-6 space-y-3">{pl.f.map((f) => <li key={f} className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5" strokeWidth={3} />{f}</li>)}</ul>
            <Link to="/welcome" className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-home-ink font-bold text-primary-foreground">Choose {pl.n}</Link>
          </article>
        ))}
      </section>
      <Band className="bg-home-sky" title="Pricing questions">
        <Faq items={[["Are there transaction fees?", "A small platform fee may apply to escrow payouts; final terms are not set yet."], ["Can I cancel anytime?", "Yes, plans are monthly with no lock in."], ["Do you offer agency plans?", "Yes, contact us through Partnerships on the homepage."]]} />
      </Band>
    </MarketingShell>
  );
}
