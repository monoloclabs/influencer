import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EscrowSpine, ArtifactCollage } from "@/components/marketing/MarketingArtifacts";
import { Section } from "@/components/marketing/MarketingKit";
import { Band, CardGrid, ClosingCta, Faq, Hero, MarketingShell, Stats, meta } from "@/components/marketing/MarketingPage";

export const Route = createFileRoute("/how-it-works")({
  head: () => meta("How INFLUENCER works, brief to payout", "See how a brief becomes a matched, tracked and paid campaign, step by step, for brands and creators."),
  component: Page,
});

const steps: [string, string, string][] = [
  ["Post the brief", "Budget, goal, audience, platforms and deliverables in one form. No decks, no back and forth emails.", "bg-home-lilac"],
  ["Get matched", "We rank creators on audience fit, past delivery and real engagement, not follower count alone.", "bg-home-sky"],
  ["Offer and accept", "Creators see the full scope and fee up front. Accept, decline or counter in one tap.", "bg-home-yellow"],
  ["Funds go to escrow", "The brand funds the campaign before work starts, so creators never chase an invoice.", "bg-home-pink"],
  ["Create and submit", "Drafts, captions and posting dates live in one activation workspace that both sides can see.", "bg-home-coral"],
  ["Approve and release", "Each approved milestone releases payment automatically. Revisions are tracked, not lost in chat.", "bg-home-lime"],
];

function Page() {
  return (
    <MarketingShell tone={{ bg: "bg-background", text: "text-home-ink", accent: "", muted: "" }}>
      <Hero eyebrow="How it works" title={<>Six steps.<br /><span className="text-primary">Zero chasing.</span></>} copy="Every campaign follows the same visible path, from the first brief to the last payout. Both sides always know what happens next and who it is waiting on." />
      <section className="mx-auto max-w-[1440px] space-y-4 px-5 pb-20 sm:px-8 lg:px-12">
        {steps.map(([t, c, bg], i) => (
          <div key={t} className={`grid gap-4 rounded-[2rem] p-7 sm:grid-cols-[6rem_1fr_auto] sm:items-center sm:p-9 ${bg}`}>
            <p className="text-5xl font-extrabold">{String(i + 1).padStart(2, "0")}</p>
            <div><h2 className="text-3xl font-extrabold">{t}</h2><p className="mt-2 max-w-2xl text-lg leading-relaxed">{c}</p></div>
            {i < steps.length - 1 && <ArrowRight className="hidden h-8 w-8 rotate-90 sm:block" strokeWidth={3} />}
          </div>
        ))}
      </section>
      <Section className="bg-home-sand text-home-ink" eyebrow="The escrow spine" title="Tap a stage. See what actually lands on screen." copy="Every deal moves along the same five stages. Each one produces a real record, not a promise.">
        <EscrowSpine />
      </Section>
      <Section className="bg-background text-home-ink" eyebrow="Proof, not claims" title="The receipts both sides keep." copy="Offers, escrow, approvals and payouts are artifacts you can open later, not messages lost in a chat.">
        <ArtifactCollage />
      </Section>
      <Band className="bg-home-ink text-primary-foreground" title="What each side sees" copy="Same deal, two views. Brands manage spend and approvals; creators manage work and income.">
        <CardGrid card="bg-primary-foreground/10" items={[
          ["Brand view", "Live campaign board, spend against budget, approval queue and creator performance per post.", "Brands"],
          ["Creator view", "Offers, activation checklists, content calendar and a wallet that shows what is cleared and what is coming.", "Creators"],
          ["Shared record", "Contract, brief, revisions and payments sit on one timeline neither side can quietly edit.", "Both"],
        ]} />
      </Band>
      <Band className="bg-background" title="Typical timings">
        <Stats items={[["10 min", "To post a brief", "bg-home-lilac"], ["24 h", "To first matches", "bg-home-sky"], ["48 h", "Average approval", "bg-home-yellow"], ["Same day", "Payout on approval", "bg-home-lime"]]} />
        <p className="mt-4 text-sm opacity-60">Illustrative figures for this prototype.</p>
      </Band>
      <Band className="bg-home-sky" title="Common questions">
        <Faq items={[["What if a deliverable is late?", "Both sides get reminders, the milestone stays unpaid and the brand can extend or cancel that item."], ["Who owns the content?", "Usage rights are set in the brief and written into the contract before anyone accepts."], ["Can I negotiate the fee?", "Yes. Creators can counter an offer and brands can accept, adjust or decline."]]} />
      </Band>
      <ClosingCta className="bg-home-ink text-primary-foreground" button="bg-primary text-primary-foreground" title="Run your next campaign the clear way." />
    </MarketingShell>
  );
}
