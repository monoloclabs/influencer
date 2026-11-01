import { createFileRoute } from "@tanstack/react-router";
import { PlatformMark } from "@/components/influencer/Marks";
import { Band, CardGrid, ClosingCta, Faq, Hero, MarketingShell, Stats, meta } from "@/components/marketing/MarketingPage";

export const Route = createFileRoute("/for-brands")({
  head: () => meta("For brands, reach the people who matter", "Post a brief, get matched with fitting creators, approve work and track spend and results live."),
  component: Page,
});

function Page() {
  return (
    <MarketingShell tone={{ bg: "bg-home-yellow", text: "text-home-forest", accent: "", muted: "" }}>
      <Hero eyebrow="For brands" title={<>Reach that<br />actually <span className="text-primary">moves.</span></>} copy="Post one brief and get creators whose audiences match your customers. Approve every post before it goes live, pay only on approved milestones, and see spend and reach as it happens.">
        <div className="grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {([["TikTok", "8M views"], ["Instagram", "3.2M reach"], ["YouTube", "1.4M views"], ["X", "640K impressions"]] as const).map(([p, v]) => (
            <div key={p} className="rounded-[2rem] bg-home-forest p-5 text-primary-foreground"><PlatformMark platform={p} className="h-7 w-7 text-primary-foreground" /><p className="mt-5 text-xl font-extrabold">{v}</p><p className="text-sm opacity-70">{p}</p></div>
          ))}
        </div>
      </Hero>
      <Band className="bg-home-forest text-primary-foreground" title="From brief to results, in one place">
        <CardGrid card="bg-primary-foreground/10" items={[
          ["Smart briefs", "Set goal, budget, audience and deliverables once. Reuse templates for repeat campaigns."],
          ["Fit-first matching", "Creators ranked on audience overlap, past delivery and engagement, with full media kits."],
          ["Approval queue", "Inspect drafts, request changes or approve. Nothing goes live without sign off."],
          ["Live spend tracking", "Budget, committed and released money per campaign, updated as milestones clear."],
          ["Creator network", "Favorite creators you love, blacklist poor fits and rebook in one tap."],
          ["Standing rules", "Auto decline low budgets, auto approve deliverables that meet your conditions."],
        ]} />
      </Band>
      <Band className="bg-background text-home-ink" title="Why brands switch">
        <Stats items={[["24", "Creators matched per brief", "bg-home-yellow"], ["92%", "Approved first pass", "bg-home-sky"], ["$0", "Paid for unapproved work", "bg-home-pink"], ["1", "Dashboard for all campaigns", "bg-home-lime"]]} />
        <p className="mt-4 text-sm opacity-60">Illustrative figures for this prototype.</p>
      </Band>
      <Band className="bg-home-yellow" title="Brand questions">
        <Faq border="border-home-forest/25" items={[["How fast can a campaign go live?", "Matches usually arrive within a day; live depends on your approval speed."], ["What if a creator underdelivers?", "Unapproved milestones stay in escrow and can be returned to you."], ["Can agencies manage several brands?", "Yes, through an agency partnership. Use the Partnerships form on the homepage."]]} />
      </Band>
      <ClosingCta className="bg-home-forest text-primary-foreground" button="bg-home-yellow text-home-forest" title="Post your first brief in minutes." />
    </MarketingShell>
  );
}
