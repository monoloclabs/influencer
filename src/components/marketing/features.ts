import type { StageItem } from "./MarketingKit";

export type FeatureLayout = "chat" | "rules" | "ledger" | "queue" | "kit" | "calendar";

export type Feature = {
  slug: string;
  name: string;
  short: string;
  tag: string;
  layout: FeatureLayout;
  bg: string;
  accent: string;
  headline: string;
  copy: string;
  stages: StageItem[];
  facts: [string, string][];
  faq: [string, string][];
};

/* All figures are illustrative sample data for the marketing site. */
export const features: Feature[] = [
  {
    slug: "ai-assistant", name: "AI Assistant", short: "Price deals, draft replies", tag: "Your always-on deal desk", layout: "chat",
    bg: "bg-home-lilac", accent: "bg-creator-violet",
    headline: "Ask it what a deal is worth. It answers with numbers.",
    copy: "The Assistant reads your rates, past deals and the brief in front of you, then prices the offer, drafts the reply and summarises your month. Brands get the same desk for pricing briefs and tracking spend.",
    stages: [
      { pill: "Price a brief", title: "Know your number before you reply", copy: "Paste a brief and get a fair rate with usage, exclusivity and whitelisting priced in.", points: ["Usage rights surcharges", "Exclusivity windows", "Counter-offer draft"], device: "phone-half", tint: "bg-home-yellow" },
      { pill: "Draft replies", title: "Replies that hold your rate", copy: "It writes the counter, the follow-up and the polite no, in your tone.", points: ["Counter-offers", "Scope clarifications", "Deadline nudges"], device: "phone-half", tint: "bg-home-sky" },
      { pill: "Month summary", title: "Your month in one answer", copy: "Earned, pending, in escrow and what is due next week.", points: ["Cleared vs pending", "Upcoming deliverables", "Top-paying brands"], device: "phone-half", tint: "bg-home-pink" },
    ],
    facts: [["Creators", "Rate checks, captions, contract questions"], ["Brands", "Brief pricing, monthly spend, deadline tracking"], ["Credits", "Each answer uses a small number of AI credits"]],
    faq: [["Does it send messages for me?", "No. It drafts; you approve and send."], ["Is it on the free plan?", "Yes, with a starter allowance of AI credits you can top up anytime."]],
  },
  {
    slug: "instructions", name: "Instructions", short: "Standing rules that run for you", tag: "Set it once. It runs every time.", layout: "rules",
    bg: "bg-home-sand", accent: "bg-home-electric",
    headline: "Write the rule once. Never answer that email again.",
    copy: "Instructions are standing rules. Auto-decline offers under your floor, refuse perpetual usage, block shoots with less than five days notice. Brands auto-approve qualifying deliverables and flag creators outside their niche.",
    stages: [
      { pill: "Creators", title: "Guard your rate and your time", copy: "Rules check every offer the moment it lands.", points: ["Decline under your minimum", "Reject perpetual usage", "Require 50% upfront"], device: "screenshot", tint: "bg-home-lilac" },
      { pill: "Brands", title: "Approve faster, stay on brief", copy: "Rules sort deliverables and applicants before you look.", points: ["Auto-approve on checklist pass", "Flag off-niche creators", "Decline under-budget pitches"], device: "screenshot", tint: "bg-home-yellow" },
    ],
    facts: [["Triggers", "On new offer, on submission, on schedule"], ["Actions", "Decline, approve, flag or notify"], ["Control", "Toggle any rule off in one tap"]],
    faq: [["Can a rule overrule me?", "No. Every rule can be paused, and declined offers stay visible in your history."]],
  },
  {
    slug: "escrow", name: "Escrow & payouts", short: "Paid on approval, never chased", tag: "Money moves on proof", layout: "ledger",
    bg: "bg-home-lime", accent: "bg-home-ink",
    headline: "The money is locked before you film a second.",
    copy: "Brands fund each milestone into escrow up front. When a deliverable is approved, that milestone is released to the creator's wallet. Every movement shows on one timeline: green in, red out, gray still pending.",
    stages: [
      { pill: "Funded", title: "Escrow before work begins", copy: "The brand funds the milestone when the offer is accepted.", points: ["Upfront deposit", "Visible to both sides", "No work starts unfunded"], device: "phone-half", tint: "bg-home-yellow" },
      { pill: "Released", title: "Approval releases payment", copy: "One tap from the brand moves money to the wallet.", points: ["Milestone release", "Receipt for both sides", "No invoice chasing"], device: "phone-half", tint: "bg-home-sky" },
      { pill: "Timeline", title: "Every dollar on one line", copy: "Green for inflow, red for outflow, gray for pending.", points: ["Cleared vs upcoming", "Filter by brand", "Export statements"], device: "phone-half", tint: "bg-home-pink" },
    ],
    facts: [["Deposit", "Held per milestone"], ["Release", "On brand approval"], ["Record", "Timestamped on both sides"]],
    faq: [["What if a brand never approves?", "Deliverables have review windows; disputes keep funds held until resolved."]],
  },
  {
    slug: "approvals", name: "Approvals", short: "Approve, inspect or decline", tag: "One queue, no lost threads", layout: "queue",
    bg: "bg-home-sky", accent: "bg-primary",
    headline: "Drafts in. Decisions out. Nothing lost in DMs.",
    copy: "Creators submit drafts and raw files to one queue. Brands open each item, check it against the brief, and approve, inspect or decline with notes. Every revision is kept.",
    stages: [
      { pill: "Submit", title: "Upload once", copy: "Drafts, captions and raw files go up together.", points: ["9:16 and 1:1 files", "Caption and tags", "Deadline attached"], device: "screenshot", tint: "bg-home-yellow" },
      { pill: "Inspect", title: "Check against the brief", copy: "A checklist, the brief and the file side by side.", points: ["Brief checklist", "Timestamped notes", "Revision history"], device: "screenshot", tint: "bg-home-lilac" },
      { pill: "Decide", title: "Approve and pay in one tap", copy: "Approval releases the milestone automatically.", points: ["Approve", "Request changes", "Decline with reason"], device: "screenshot", tint: "bg-home-pink" },
    ],
    facts: [["Queue", "Every pending item in one place"], ["Notes", "Pinned to the exact draft"], ["Payment", "Released on approval"]],
    faq: [["How many revisions?", "Set in the offer, so both sides know before work starts."]],
  },
  {
    slug: "media-kit", name: "Media kit & rates", short: "Live stats, research-backed rates", tag: "Your pitch, always current", layout: "kit",
    bg: "bg-home-pink", accent: "bg-home-ink",
    headline: "A media kit that updates itself.",
    copy: "Connect your accounts and your kit shows live audience, reach and past brand work. Rate Research compares your prices with creators of similar size and niche, so you quote with confidence.",
    stages: [
      { pill: "Kit", title: "Share one link", copy: "Audience, reach and brand work on one page.", points: ["Live follower counts", "Audience breakdown", "Past brand logos"], device: "phone-half", tint: "bg-home-yellow" },
      { pill: "Rates", title: "Rates you can defend", copy: "See ranges for creators like you.", points: ["Per-platform ranges", "Usage add-ons", "Bundle pricing"], device: "phone-half", tint: "bg-home-sky" },
    ],
    facts: [["Platforms", "TikTok, Instagram, YouTube, X"], ["Updates", "Synced from connected accounts"], ["Sharing", "One public link"]],
    faq: [["Do brands see my private numbers?", "Only what you choose to show on your kit."]],
  },
  {
    slug: "campaigns", name: "Campaigns & calendar", short: "Every brand, every date", tag: "The whole relationship, in order", layout: "calendar",
    bg: "bg-home-yellow", accent: "bg-home-ink",
    headline: "Every shoot, deadline and post on one calendar.",
    copy: "Campaigns 360 keeps the full history with each brand: offers, activations, payments and totals. The calendar lines up shoots, drafts and posting dates across platforms.",
    stages: [
      { pill: "Campaign 360", title: "The whole history per brand", copy: "Deals, amounts paid and what is ongoing.", points: ["Lifetime income per brand", "Active activations", "Past deals"], device: "phone-half", tint: "bg-home-lilac" },
      { pill: "Calendar", title: "Dates that never clash", copy: "Shoots, draft dues and posts in one view.", points: ["Shoot call sheets", "Draft due dates", "Posting schedule"], device: "phone-half", tint: "bg-home-sky" },
      { pill: "Shoots", title: "Call sheets built in", copy: "Location, crew and shot list per shoot.", points: ["Location and time", "Crew list", "Brand logo tags"], device: "phone-half", tint: "bg-home-pink" },
    ],
    facts: [["Brands", "One timeline each"], ["Dates", "Shoots, drafts, posts"], ["Totals", "Paid and ongoing"]],
    faq: [["Does it sync with my phone calendar?", "Calendar sync is planned; for now everything lives in the app."]],
  },
];

export const getFeature = (slug: string) => features.find((f) => f.slug === slug);
