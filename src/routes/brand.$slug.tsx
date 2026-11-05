import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronRight, CreditCard, Download, LifeBuoy, Mail, MessageCircle, Receipt, Users } from "lucide-react";
import { BrandShell, brandMeta } from "@/components/brand/BrandShell";

const destinations: Record<string, { title: string; description: string }> = {
  integrations: { title: "Integrations", description: "Connections for your brand workspace." },
  profile: { title: "Profile", description: "Your brand profile, team and payout details." },
  plans: { title: "Plan & Billing", description: "Your brand plan, AI credits and invoices." },
  settings: { title: "Settings", description: "Notifications, approvals and workspace preferences." },
  support: { title: "Support", description: "Help with briefs, escrow and approvals." },
};

export const Route = createFileRoute("/brand/$slug")({
  loader: ({ params }) => {
    const destination = destinations[params.slug];
    if (!destination) throw notFound();
    return { ...destination, slug: params.slug };
  },
  head: ({ loaderData }) => loaderData
    ? brandMeta(`${loaderData.title}, Brand workspace | INFLUENCER`, loaderData.description)
    : { meta: [{ title: "Brand page unavailable | INFLUENCER" }, { name: "robots", content: "noindex" }, { name: "description", content: "This brand page is unavailable." }, { property: "og:title", content: "Brand page unavailable | INFLUENCER" }, { property: "og:description", content: "This brand page is unavailable." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] },
  component: BrandPage,
});

const card = "rounded-3xl border border-border bg-card p-5";

function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex items-center justify-between py-3 text-sm"><span className="text-muted-foreground">{label}</span><span className="font-bold">{value}</span></div>;
}

function Profile() {
  return (
    <>
      <div className={`${card} flex items-center gap-4`}>
        <span className="grid h-14 w-14 place-items-center rounded-full bg-home-ink text-lg font-extrabold text-primary-foreground">G</span>
        <div><p className="text-lg font-extrabold">Gymshark</p><p className="text-sm text-muted-foreground">Fitness apparel · London</p></div>
      </div>
      <div className={`${card} mt-4 divide-y divide-border py-1`}>
        <Row label="Website" value="gymshark.com" /><Row label="Category" value="Sportswear" /><Row label="Billing email" value="partners@gymshark.com" /><Row label="Escrow account" value="Funded · •••• 4821" />
      </div>
      <h3 className="mt-6 mb-3 flex items-center gap-2 font-extrabold"><Users className="h-4 w-4" strokeWidth={2.6} />Team</h3>
      <div className={`${card} divide-y divide-border py-1`}>
        {[["Ama Okafor", "Owner"], ["Leo Grant", "Campaign manager"], ["Priya Shah", "Approver"]].map(([n, r]) => <Row key={n} label={n} value={r} />)}
      </div>
    </>
  );
}

function Plans() {
  return (
    <>
      <div className="rounded-3xl bg-home-sage p-6 text-home-ink">
        <p className="text-sm font-bold uppercase tracking-[0.12em]">Current plan</p>
        <p className="mt-2 text-3xl font-extrabold">Growth</p>
        <p className="mt-1 text-sm font-semibold opacity-75">$99 per month · renews 1 Dec</p>
        <div className="mt-5"><div className="flex justify-between text-sm font-bold"><span>AI credits</span><span>640 / 1,000</span></div><div className="mt-2 h-2.5 rounded-full bg-home-ink/15"><div className="h-full w-[64%] rounded-full bg-home-ink" /></div></div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="h-12 rounded-full bg-home-ink text-sm font-bold text-primary-foreground">Top up credits</button>
        <button className="h-12 rounded-full bg-surface text-sm font-bold">Change plan</button>
      </div>
      <div className={`${card} mt-4 flex items-center gap-3`}><CreditCard className="h-5 w-5" strokeWidth={2.4} /><span className="flex-1 text-sm font-bold">Visa •••• 2290</span><span className="text-sm text-muted-foreground">Edit</span></div>
      <h3 className="mt-6 mb-3 flex items-center gap-2 font-extrabold"><Receipt className="h-4 w-4" strokeWidth={2.6} />Invoices</h3>
      <div className={`${card} divide-y divide-border py-1`}>
        {[["Nov 2026", "$99.00"], ["Oct 2026", "$99.00"], ["Sep 2026", "$99.00"]].map(([m, a]) => (
          <div key={m} className="flex items-center justify-between py-3 text-sm"><span className="font-bold">{m}</span><span className="flex items-center gap-3">{a}<Download className="h-4 w-4 text-muted-foreground" /></span></div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">Sample figures for this prototype.</p>
    </>
  );
}

function Settings() {
  const [s, setS] = useState<Record<string, boolean>>({ "New creator matches": true, "Deliverable ready to review": true, "Escrow released": true, "Weekly spend summary": false, "Require two approvers over $5,000": false });
  return (
    <div className={`${card} divide-y divide-border py-1`}>
      {Object.entries(s).map(([k, v]) => (
        <button key={k} onClick={() => setS({ ...s, [k]: !v })} className="flex w-full items-center justify-between py-4 text-left text-sm font-bold">
          {k}
          <span className={`flex h-7 w-12 items-center rounded-full p-1 transition ${v ? "bg-primary" : "bg-muted"}`}><span className={`h-5 w-5 rounded-full bg-background transition ${v ? "translate-x-5" : ""}`} /></span>
        </button>
      ))}
    </div>
  );
}

function Support() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <button className="flex flex-col items-start gap-6 rounded-3xl bg-home-sky p-5 text-left text-home-ink"><MessageCircle className="h-7 w-7" strokeWidth={2.4} /><span className="font-extrabold">Chat with us</span></button>
        <button className="flex flex-col items-start gap-6 rounded-3xl bg-home-yellow p-5 text-left text-home-ink"><Mail className="h-7 w-7" strokeWidth={2.4} /><span className="font-extrabold">Email support</span></button>
      </div>
      <h3 className="mt-6 mb-3 flex items-center gap-2 font-extrabold"><LifeBuoy className="h-4 w-4" strokeWidth={2.6} />Common questions</h3>
      <div className={`${card} divide-y divide-border py-1`}>
        {["How escrow is funded", "Releasing a milestone", "Requesting a revision", "Adding team approvers", "Cancelling a brief"].map((q) => (
          <div key={q} className="flex items-center justify-between py-3.5 text-sm font-bold">{q}<ChevronRight className="h-4 w-4 text-muted-foreground" /></div>
        ))}
      </div>
    </>
  );
}

function BrandPage() {
  const { title, description, slug } = Route.useLoaderData();
  return (
    <BrandShell title={title}>
      <h2 className="pt-2 text-2xl font-extrabold">{title}</h2>
      <p className="mt-1.5 mb-5 text-sm text-muted-foreground">{description}</p>
      {slug === "profile" && <Profile />}
      {slug === "plans" && <Plans />}
      {slug === "settings" && <Settings />}
      {slug === "support" && <Support />}
      {slug === "integrations" && <p className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4" />Open Integrations from the menu.</p>}
    </BrandShell>
  );
}
