import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ClosingCta, Hero, MarketingShell, meta } from "@/components/marketing/MarketingPage";
import { features } from "@/components/marketing/features";

export const Route = createFileRoute("/features/")({
  head: () => meta("Features | INFLUENCER", "AI Assistant, standing rules, escrow payouts, approvals, live media kits and campaign calendars in one app for creators and brands."),
  component: Page,
});

function Page() {
  return (
    <MarketingShell tone={{ bg: "bg-home-sand", text: "text-home-ink", accent: "", muted: "" }}>
      <Hero eyebrow="Features" title={<>Everything inside<br />the app.</>} copy="Six tools that run the whole deal, from the first offer to the money landing in your wallet." />
      <section className="mx-auto grid max-w-[1100px] gap-4 px-5 pb-20 sm:px-8 md:grid-cols-6">
        {features.map((f, i) => (
          <Link key={f.slug} to="/features/$slug" params={{ slug: f.slug }} className={`group flex flex-col justify-between rounded-[2rem] p-7 shadow-[3px_3.5px_0_0_rgba(0,0,0,0.92)] ${f.bg} ${[ "md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-4", "md:col-span-3", "md:col-span-3"][i]} min-h-[220px]`}>
            <p className="text-sm font-bold uppercase tracking-[0.14em] opacity-60">{f.tag}</p>
            <div><h2 className="mt-8 text-3xl font-extrabold">{f.name}</h2><p className="mt-2 flex items-center gap-2 font-semibold opacity-75">{f.short}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={3} /></p></div>
          </Link>
        ))}
      </section>
      <ClosingCta title="Start free today." className="bg-home-ink text-primary-foreground" button="Get started" />
    </MarketingShell>
  );
}
