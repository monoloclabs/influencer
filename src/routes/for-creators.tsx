import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Coins, FileSignature, Handshake, Inbox, Layers, PenLine, Search, ShieldCheck, Sparkles, Wallet, Zap } from "lucide-react";
import { ClosingCta, Faq, Hero, MarketingShell, meta } from "@/components/marketing/MarketingPage";
import { DeviceSlot, FilterStage, IconGrid, Section, StepList, SwipeCards } from "@/components/marketing/MarketingKit";

export const Route = createFileRoute("/for-creators")({
  head: () => meta("INFLUENCER for creators: turn your audience into a business", "Receive offers, run campaigns, track deliverables and get paid through escrow from one app."),
  component: Page,
});

function Page() {
  return (
    <MarketingShell tone={{ bg: "bg-home-lilac", text: "text-home-ink", accent: "", muted: "" }}>
      <Hero eyebrow="For influencers" title={<>Turn your audience<br />into a business.</>} copy="Offers, contracts, content dates and payouts in one place. Start free and get paid before you ever pay for a plan." cta="Start free">
        <div className="flex items-end justify-center gap-4">
          <DeviceSlot kind="phone-tilted" label="Phone: Offer inbox" className="max-w-[200px]" />
          <DeviceSlot kind="phone" label="Phone: Dashboard" className="max-w-[220px]" />
        </div>
      </Hero>

      <Section className="bg-background" title="From offer to payout" copy="Every campaign follows the same simple path.">
        <StepList items={[
          [Inbox, "Offer", "A brand sends a brief with budget, dates and deliverables. Accept, decline or counter."],
          [Layers, "Activation", "A workspace opens with your tasks, drafts and approvals in order."],
          [Wallet, "Payout", "Each approved milestone releases money from escrow straight to your wallet."],
        ]} />
      </Section>

      <Section className="bg-home-ink text-primary-foreground" eyebrow="Inside the app" title="Your whole workday, one tap away">
        <FilterStage dark items={[
          { pill: "Campaigns", title: "See every deal at a glance", copy: "Campaigns 360 shows offers, live work and history per brand.", points: ["Brand logos on every deal", "Status from offer to paid"], device: "phone", tint: "bg-home-lime" },
          { pill: "Approvals", title: "Approve or inspect in seconds", copy: "Open a draft, inspect the details and make a decision.", points: ["Approve, Inspect, Decline", "Full history kept"], device: "screenshot", tint: "bg-home-sky" },
          { pill: "Calendar", title: "Never miss a post date", copy: "Shoots, drafts and live dates sit on one calendar.", points: ["Brand colour coding", "Tap for details"], device: "phone-half", tint: "bg-home-yellow" },
          { pill: "Wallet", title: "Money you can see coming", copy: "Earnings, pending and incoming payouts with clear colours.", points: ["Green in, red out, gray pending", "Escrow protected"], device: "phone", tint: "bg-home-pink" },
        ]} />
      </Section>

      <Section className="bg-background" title="Everything a creator business needs">
        <IconGrid iconClass="text-creator-violet" items={[
          [FileSignature, "Contracts and briefs", "Every agreement filed by brand."],
          [PenLine, "Media kit", "Shareable rates and stats."],
          [Search, "Rate research", "Know what to charge."],
          [CalendarDays, "Content calendar", "Shoots and post dates."],
          [Handshake, "Brand network", "Full history per brand."],
          [Sparkles, "AI Assistant", "Drafts replies and captions."],
        ]} />
      </Section>

      <Section className="bg-home-lilac" title="You are never left hanging">
        <SwipeCards items={[
          [ShieldCheck, "Paid before you post", "Brands fund escrow before work starts.", "bg-home-sky"],
          [Coins, "Top up, no new plan", "Run low on AI credits? Top up for a fraction of the cost.", "bg-home-lime"],
          [Zap, "Your task gets finished", "Even if credits run out mid task, it completes.", "bg-home-yellow"],
        ]} />
      </Section>

      <Section className="bg-background" title="Creator questions">
        <Faq items={[["Is it really free?", "Yes. Receive offers, deliver and get paid on the free plan."], ["When do I get paid?", "As soon as each milestone is approved."], ["Do I need a manager?", "No. Elite adds team seats if you have one."]]} />
      </Section>
      <ClosingCta title="Get paid for the audience you built." className="bg-creator-violet text-primary-foreground" button="bg-background text-home-ink" />
    </MarketingShell>
  );
}
