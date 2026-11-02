import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, BarChart3, Filter, Megaphone, ShieldCheck, Target, Users } from "lucide-react";
import { ClosingCta, Faq, MarketingShell, meta } from "@/components/marketing/MarketingPage";
import { DeviceSlot, FilterStage, Section, StepList } from "@/components/marketing/MarketingKit";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/for-brands")({
  head: () => meta("INFLUENCER for brands: reach the people who matter", "Post a brief, get matched with creators, approve deliverables and pay through escrow on verified milestones."),
  component: Page,
});

function Page() {
  return (
    <MarketingShell tone={{ bg: "bg-background", text: "text-home-ink", accent: "", muted: "" }}>
      <section className="mx-auto max-w-[1100px] px-5 pt-10 pb-16 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-home-blue">For brands</p>
        <h1 className="mt-4 text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] font-extrabold">Reach the people who matter to your brand.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-75">Your team posts briefs on mobile. Marketing leads get the full picture on desktop.</p>
        <div className="mt-8 flex gap-3">
          <Link to="/pricing" className="inline-flex h-12 items-center rounded-full bg-home-blue px-6 font-bold text-primary-foreground">Brand plans</Link>
          <Link to="/welcome" className="inline-flex h-12 items-center rounded-full bg-home-sky px-6 font-bold">Post a brief</Link>
        </div>
        <div className="mt-12 rounded-[2rem] bg-home-sand p-6 sm:p-10"><DeviceSlot kind="laptop" label="Laptop: Brand dashboard" /></div>
      </section>

      <Section className="bg-home-sand" title="From brief to live in minutes">
        <StepList items={[
          [Megaphone, "Brief", "Set budget, niche, platforms and deliverables."],
          [Target, "Match", "Get creators who fit your audience and rate."],
          [BadgeCheck, "Approve", "Inspect every draft before it goes live."],
          [ShieldCheck, "Release", "Escrow pays out only on verified milestones."],
        ]} />
      </Section>

      <Section className="bg-background" title="What marketing leads see">
        <div className="divide-y divide-home-ink/15 border-y border-home-ink/15">
          {[[BarChart3, "Live spend", "Budget used, committed and remaining, per campaign."], [Users, "Creator network", "Favourites, past results and a blacklist."], [Filter, "Standing rules", "Auto decline low budgets, flag off niche creators."]].map(([I, t, c]) => {
            const Icon = I as typeof BarChart3;
            return <div key={t as string} className="grid grid-cols-[48px_1fr] gap-4 py-7"><Icon className="h-8 w-8 text-home-blue" strokeWidth={2.2} /><div><h3 className="text-xl font-extrabold">{t as string}</h3><p className="mt-1 opacity-70">{c as string}</p></div></div>;
          })}
        </div>
      </Section>

      <Section className="bg-home-yellow" title="One stage, every workflow">
        <FilterStage items={[
          { pill: "Briefs", title: "Post a brief in minutes", copy: "A guided form with budget and deliverables.", points: ["Templates", "Platform targeting"], device: "phone", tint: "bg-background" },
          { pill: "Approvals", title: "A queue, not a pile", copy: "Drafts waiting on you, in order.", points: ["Approve or inspect", "Comments stay on record"], device: "laptop", tint: "bg-home-sky" },
          { pill: "Timeline", title: "Every payment, clearly coloured", copy: "Outflows, refunds and pending payments.", points: ["Escrow status", "Export"], device: "phone-half", tint: "bg-home-sage" },
        ]} />
      </Section>

      <Section className="bg-background" title="Brand questions">
        <Faq items={[["How fast can we launch?", "Most briefs go live the same day."], ["Are payments safe?", "Funds sit in escrow until you approve."], ["Agencies?", "Scale supports multiple brands and seats."]]} />
      </Section>
      <ClosingCta title="Post your first brief free." className="bg-home-blue text-primary-foreground" button="bg-home-yellow text-home-ink" />
    </MarketingShell>
  );
}
