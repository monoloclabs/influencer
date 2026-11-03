import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { ApprovalArtifact, ContractArtifact, EscrowArtifact } from "@/components/marketing/MarketingArtifacts";
import { Band, CardGrid, ClosingCta, Hero, MarketingShell, meta } from "@/components/marketing/MarketingPage";

export const Route = createFileRoute("/why-us")({
  head: () => meta("Why INFLUENCER, one deal flow not a directory", "We run the whole deal between brands and creators, from match to escrow to verified payout."),
  component: Page,
});

const rows = ["Matched on audience fit", "Escrow before work starts", "Approvals built in", "Payout on approval", "One shared record"];

function Page() {
  return (
    <MarketingShell tone={{ bg: "bg-home-sand", text: "text-home-ink", accent: "", muted: "" }}>
      <Hero eyebrow="Why us" title={<>One deal flow.<br /><span className="text-home-electric">Not a directory.</span></>} copy="Directories hand you a list of names and leave the hard part to you. We run the whole commercial workflow: match, contract, delivery, approval and payment." />
      <Band className="bg-card" title="Directory vs deal flow">
        <div className="overflow-hidden rounded-[2rem] border border-border">
          <div className="grid grid-cols-[1fr_5rem_5rem] bg-home-ink px-5 py-4 text-sm font-bold text-primary-foreground sm:grid-cols-[1fr_8rem_8rem]"><span /><span className="text-center">Directory</span><span className="text-center">Us</span></div>
          {rows.map((r) => (
            <div key={r} className="grid grid-cols-[1fr_5rem_5rem] items-center border-t border-border px-5 py-4 font-bold sm:grid-cols-[1fr_8rem_8rem]">
              {r}
              <X className="mx-auto h-5 w-5 text-destructive" strokeWidth={3} />
              <Check className="mx-auto h-5 w-5 text-tint-green-foreground" strokeWidth={3} />
            </div>
          ))}
        </div>
      </Band>
      <section className="bg-home-sand px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="space-y-5"><h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[0.98]">A directory gives you names. We give you records.</h2><ContractArtifact /></div>
          <div className="space-y-5 md:pt-16"><EscrowArtifact /><ApprovalArtifact /></div>
        </div>
      </section>
      <Band className="bg-home-plum text-primary-foreground" title="Our principles">
        <CardGrid card="bg-primary-foreground/10" items={[
          ["Money is safe first", "Funds are held before work begins and released only on approval."],
          ["Proof over promises", "Deliverables are tracked live so results are verified, not claimed."],
          ["Fair on both sides", "Creators get clear scope and fast pay; brands get control and accountability."],
        ]} />
      </Band>
      <ClosingCta className="bg-home-sand" button="bg-home-electric text-primary-foreground" title="Work the way deals should work." />
    </MarketingShell>
  );
}
