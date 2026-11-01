import { createFileRoute } from "@tanstack/react-router";
import { BrandMark } from "@/components/influencer/Marks";
import { Band, CardGrid, ClosingCta, Faq, Hero, MarketingShell, Stats, meta } from "@/components/marketing/MarketingPage";

export const Route = createFileRoute("/for-creators")({
  head: () => meta("For creators, turn your audience into a business", "Find paid brand work, run campaigns, track deliverables and get paid on approval, all in one creator workspace."),
  component: Page,
});

function Page() {
  return (
    <MarketingShell tone={{ bg: "bg-home-magenta", text: "text-primary-foreground", accent: "", muted: "" }}>
      <Hero eyebrow="For creators" title={<>Your audience<br />is a business.<br /><span className="text-home-lime">Run it like one.</span></>} copy="Stop juggling DMs, spreadsheets and late invoices. Get offers with the fee on the table, deliver in one workspace, and watch money land the day your work is approved.">
        <div className="grid max-w-3xl grid-cols-2 gap-3 text-home-ink sm:grid-cols-3">
          {([["Spotify", "$12,000", "Offer"], ["Gymshark", "$4,250", "Paid"], ["Sephora", "$6,800", "In review"]] as const).map(([b, v, s]) => (
            <div key={b} className="rounded-[2rem] bg-card p-5 shadow-card"><BrandMark brand={b} className="h-8 w-8" /><p className="mt-5 text-2xl font-extrabold">{v}</p><p className="text-sm font-bold opacity-60">{b} · {s}</p></div>
          ))}
        </div>
      </Hero>
      <Band className="bg-background text-home-ink" title="Everything a creator business needs" copy="Built around the work you already do, not another feed to scroll.">
        <CardGrid card="bg-home-lilac" items={[
          ["Offers, not cold pitches", "Brands come to you with scope and fee already set. Accept, decline or counter."],
          ["Activation workspace", "Every campaign gets a checklist, drafts, captions and posting dates in one place."],
          ["Content calendar", "See every shoot, draft and go live date across all your brands at once."],
          ["Media kit and rates", "A live kit that updates with your numbers, plus rate research to price with confidence."],
          ["Wallet", "Cleared, pending and upcoming money, with escrow so you never chase an invoice."],
          ["Brand network", "A 360 view of each brand you work with: deals, totals paid and what is still open."],
        ]} />
      </Band>
      <Band className="bg-home-lime text-home-ink" title="Get paid like a professional">
        <Stats items={[["0", "Invoices to chase", "bg-card"], ["100%", "Funded before you start", "bg-home-pink"], ["Same day", "Release on approval", "bg-home-sky"], ["1", "Place for every deal", "bg-home-yellow"]]} />
      </Band>
      <Band className="bg-home-magenta" title="Creator questions">
        <Faq border="border-primary-foreground/25" items={[["Do I need a minimum following?", "No. Brands match on audience fit and engagement, so niche creators win work too."], ["What does it cost creators?", "Final pricing is not set yet; see the Pricing page for the current plan."], ["Can my manager use it?", "Yes, a manager can run offers and approvals on your behalf."]]} />
      </Band>
      <ClosingCta className="bg-home-ink text-primary-foreground" button="bg-home-lime text-home-ink" title="Start your creator business today." />
    </MarketingShell>
  );
}
