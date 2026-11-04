import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ClosingCta, Faq, MarketingShell, meta } from "@/components/marketing/MarketingPage";
import { FilterStage, Section } from "@/components/marketing/MarketingKit";
import { FeatureShowcase } from "@/components/marketing/FeatureShowcase";
import { features, getFeature } from "@/components/marketing/features";

export const Route = createFileRoute("/features/$slug")({
  loader: ({ params }) => {
    const f = getFeature(params.slug);
    if (!f) throw notFound();
    return { slug: f.slug };
  },
  head: ({ loaderData }) => {
    const f = loaderData ? getFeature(loaderData.slug) : undefined;
    return f ? meta(`${f.name} | INFLUENCER`, f.copy.slice(0, 155)) : { meta: [{ title: "Feature | INFLUENCER" }, { name: "robots", content: "noindex" }] };
  },
  notFoundComponent: () => <div className="p-10 text-center font-bold">Feature not found. <Link to="/features" className="underline">See all features</Link></div>,
  component: Page,
});

function Page() {
  const { slug } = Route.useLoaderData();
  const f = getFeature(slug)!;
  const others = features.filter((o) => o.slug !== f.slug);
  return (
    <MarketingShell tone={{ bg: f.bg, text: "text-home-ink", accent: "", muted: "" }}>
      <section className="mx-auto max-w-[1100px] px-5 pt-10 pb-14 sm:px-8">
        <Link to="/features" className="text-sm font-bold uppercase tracking-[0.14em] opacity-60">Features / {f.name}</Link>
        <h1 className="mt-5 text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92] font-extrabold">{f.headline}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed font-medium">{f.copy}</p>
        <Link to="/welcome" className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-primary px-7 font-bold text-primary-foreground">Start free <ArrowRight className="h-5 w-5" strokeWidth={3} /></Link>
        <div className="mt-14"><FeatureShowcase f={f} /></div>
      </section>
      <Section className="bg-card" eyebrow={f.tag} title="See it work, step by step"><FilterStage items={f.stages} /></Section>
      <section className="bg-home-ink px-5 py-16 text-primary-foreground sm:px-8">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
          {f.facts.map(([k, v]) => <div key={k}><p className="text-sm font-bold uppercase tracking-[0.14em] opacity-50">{k}</p><p className="mt-2 text-2xl font-extrabold">{v}</p></div>)}
        </div>
      </section>
      <Section className={f.bg} title="Questions"><Faq items={f.faq} /></Section>
      <Section className="bg-home-sand" title="More features">
        <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none]">
          {others.map((o) => (
            <Link key={o.slug} to="/features/$slug" params={{ slug: o.slug }} className={`w-64 shrink-0 snap-start rounded-[2rem] p-6 ${o.bg}`}>
              <p className="text-xl font-extrabold">{o.name}</p><p className="mt-2 font-semibold opacity-70">{o.short}</p>
            </Link>
          ))}
        </div>
      </Section>
      <ClosingCta title="Use it free. Get paid before you pay." className="bg-home-ink text-primary-foreground" button="Get started" />
    </MarketingShell>
  );
}
