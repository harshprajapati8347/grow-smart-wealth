export const bonusDeadline = "2026-12-01";

export const offer = {
  price: "₹6,999",
  cadence: "one-time",
  purchaseLine: "Grow Smart Wealth $149 · one-time",
  aiAnnualValue: "₹11,558.28/yr",
  suiteValue: "₹48,063.17",
  discordValue: "$120/yr",
  totalValue: "$850+/yr",
  othersThreeYear: "$1,440–$2,520",
  othersAnnual: "$40–$70/mo × 12 = $480–$840 every year",
  riskLine: "One bad trade: gone in a single day",
};

export function bonusDateLabel(withYear = false) {
  const [year, month, day] = bonusDeadline.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    ...(withYear ? { year: "numeric" } : {}),
  }).format(new Date(year, month - 1, day));
}

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "#contact" },
] as const;

export const painLines = [
  "You buy... then price pulls back.",
  "You sell... then it keeps going.",
  "You hold... then price drops fast.",
  "You hesitate... then it runs.",
];

export const heroTitles = [
  "Know when to buy. Know when to sell.",
  "Buy and sell areas. Marked on your chart.",
];

export const hero = {
  prompt: "Does this sound like you?",
  title: ["Know when to buy.", "Know when to sell."],
  body: "Grow Smart Wealth shows you the zones that matter — right on your chart. You see the setup. You make the call. Ready in under 2 minutes.",
  cta: "Get Grow Smart Wealth",
};

export const heroDemoSeconds = 6;

export const heroDemos = [
  {
    title: "1 Day Candle",
    description: "1 Day Candle",
    src: "https://ik.imagekit.io/harshprajapati/GSW/1day.mp4",
  },
  {
    title: "1 Week Candle",
    description: "1 Week Candle",
    src: "https://ik.imagekit.io/harshprajapati/GSW/1day.mp4",
  },
  {
    title: "1 Month Candle",
    description: "1 Month Candle",
    src: "https://ik.imagekit.io/harshprajapati/GSW/1day.mp4",
  },
] as const;

export const rootCause = {
  eyebrow: "The root cause",
  title: "It's not your mistake. It's your trading & investing style.",
  subtitle: "It’s not about being smarter or faster. It’s about understanding.",
  cards: [
    {
      index: "01",
      title: "You don’t know where to buy or sell",
      body: "You’re entering trades without a clear reason — so every position feels like a guess. Buy here? Sell there? You’re never quite sure.",
      image: {
        asset: {
          url: "/assets/root-cause-1.svg",
        },
      },
    },
    {
      index: "02",
      title: "Every indicator contradicts the last",
      body: "One says buy, another says sell, a third says wait. You keep adding tools hoping for clarity, but you just get more noise.",
      image: {
        asset: {
          url: "/assets/root-cause-2.svg",
        },
      },
    },
    {
      index: "03",
      title: "No plan — just reacting",
      body: "Every trade is a decision made on the fly. No framework. No checklist. No way to know if what worked once will work again.",
      image: {
        asset: {
          url: "/assets/root-cause-3.svg",
        },
      },
    },
  ],
  decisions: [
    { label: "Buy", tone: "mint" },
    { label: "Sell", tone: "sell" },
    { label: "Wait", tone: "wait" },
  ],
} as const;

export const solution = {
  eyebrow: "The solution",
  title: "What winning traders see that you don’t.",
  subtitle: "The difference isn’t talent. It’s what’s on their chart.",
  cards: [
    {
      index: "01",
      title: "See key price zones",
      body: "Zones drawn from chart data give you clear levels to watch when planning a trade.",
      image: {
        asset: { url: "/assets/the-sollution-1.svg" },
        width: 400,
        height: 170,
      },
    },
    {
      index: "02",
      title: "One clear answer: up or down",
      body: "See whether prices are moving up or down, right on your chart.",
      image: {
        asset: { url: "/assets/the-sollution-2.svg" },
        width: 280,
        height: 150,
      },
    },
    {
      index: "03",
      title: "A repeatable process — with alerts",
      body: "A framework you follow every session, plus notifications when setups appear. Less screen time, more confidence.",
      image: {
        asset: { url: "/assets/the-sollution-3.svg" },
        width: 280,
        height: 150,
      },
    },
  ],
  closing: "That’s exactly what Grow Smart Wealth was built to do.",
  cta: "See It On Your Chart",
};

export const socialProof = {
  eyebrow: "From real traders",
  title: "Thousands of traders use it daily.",
  subtitle: "Here’s what they have to say.",
};

export const features = {
  title: "Everything you need. Nothing you don’t.",
  cards: [
    {
      title: "Trend Shift Signals",
      body: "See when the indicator changes from an upward trend to a downward trend, or back again, right on your chart.",
      icon: "/assets/trend.svg",
    },
    {
      title: "Buy & Sell Zones",
      body: "The indicator highlights potential buy and sell zones calculated from chart data. These zones show up right on your chart.",
      icon: "/assets/zones.svg",
    },
    {
      title: "Buy & Sell Signals",
      body: "Clear arrows on your chart. Green for buy, red for sell.",
      icon: "/assets/signals.svg",
    },
    {
      title: "Smart Alerts",
      body: "Get notified when there’s a trade setup. Check your chart, confirm, and enter.",
      icon: "/assets/alerts.svg",
    },
    {
      title: "Works on Any Market",
      body: "Forex, crypto, stocks, indices — any chart on TradingView. Any timeframe. Nothing to download.",
      icon: "/assets/any-market.svg",
    },
    {
      title: "Private Discord",
      body: "Get direct help, share setups, and access exclusive resources — all inside a private Discord with traders running the same edge.",
      icon: "/assets/private.svg",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "Set up in under 2 minutes.",
  subtitle: "No coding. No downloads. No experience needed.",
  steps: [
    {
      title: "Get Grow Smart Wealth",
      body: "One payment. Instant access. No hidden fees.",
    },
    {
      title: "Add it to your chart",
      body: "You get the indicator with simple instructions. Add it to TradingView in under a minute — no tech skills needed.",
    },
    {
      title: "Follow the signals",
      body: "Buy zones, sell zones, and trend changes — all painted on your chart with real-time alerts.",
    },
  ],
};

export const pricing = {
  title: "One investment. Yours for life.",
  comparisonTitle: "Other indicators",
  comparisonCaption: "over 3 years",
  othersLow: "₹140,400",
  othersHigh: "₹241,200",
  comparisonHigh: 241200,
  monthlyLow: "₹3,900",
  monthlyHigh: "₹6,700",
  yearlyLow: "₹46,800",
  yearlyHigh: "₹80,400",
  coreName: "Grow Smart Wealth Core",
  corePrice: "₹6,999",
  coreAmount: 6999,
  cadence: "one-time",
  riskLead: "One bad trade:",
  riskAmount: "₹192,637.95+",
  riskNote: "gone in a single day",
  items: [
    {
      name: "Private Discord Community",
      value: "₹5,000/yr value",
    },
  ],
  totalLabel: "Total value",
  totalValue: "₹59,621.45/yr",
  youPay: "You pay ₹6,999 once",
  checkoutNote: "Secure checkout via Stripe · Instant delivery",
  cta: "Get Grow Smart Wealth",
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions?",
  subtitle: "Everything you need to know.",
  items: [
    {
      question: "What do I need to use this?",
      answer:
        "Just a free TradingView account — anyone can sign up in 30 seconds. No paid plan needed. No downloads, no extra software. You add the indicator and you’re ready to go.",
    },
    {
      question: "How do I get access after buying?",
      answer:
        "After checkout, you’ll get instant access with simple setup instructions. Add the indicator to TradingView — takes under a minute. No tech skills needed.",
    },
    {
      question: "I’m a beginner. Will I understand it?",
      answer:
        "Yes. The indicator gives you clear buy and sell signals with color-coded zones. You also get a video guide, documentation, and a Discord community to ask questions.",
    },
    {
      question: "What kind of support do I get?",
      answer:
        "Private Discord community, direct email support at support@getgrowsmartwealth.com, video guides, and full documentation.",
    },
    {
      question: "Is there a free trial or demo?",
      answer:
        "There’s no free trial, but you can watch the demo video above to see exactly how it looks and works on a live chart. You’ll see every signal, zone, and alert before you buy.",
    },
    {
      question: "Is this a subscription?",
      answer:
        "No. Grow Smart Wealth Core is a one-time purchase. Most trading indicators charge $40–70 per month — you pay once and own it.",
    },
    {
      question: "If it works so well, why sell it?",
      answer:
        "Because an indicator doesn’t trade. Traders do.\n\nGive ten people the same chart and you’ll get ten different results. The ones who do well see the market clearly and act with discipline. Grow Smart Wealth gives you the first part: trend, structure and momentum on one clean chart, every session. The discipline is yours.\n\nThat’s why sharing it takes nothing from us, and why it’s worth so much to the trader using it. Pay once, and it stays on your chart for good.",
    },
  ],
};

export const contact = {
  // The id in https://formcarry.com/s/{id}. Paste yours here.
  formcarryId:
    process.env.NEXT_PUBLIC_FORMCARRY_ID || process.env.FORMCARRY_ID || "",
  eyebrow: "Contact",
  title: "Contact us",
  subtitle: "Send a note and we’ll get back to you.",
  nameLabel: "Name",
  namePlaceholder: "Your name",
  nameError: "Name must be at least 2 characters",
  emailLabel: "Email",
  emailPlaceholder: "you@email.com",
  emailError: "Please enter a valid email address",
  interestLabel: "Interested in",
  interestError: "Choose what you’re interested in.",
  interests: ["Grow Smart Wealth", "Partnership", "Something else"],
  messageLabel: "Message",
  messagePlaceholder: "Tell us how we can help...",
  messageError: "Message must be at least 10 characters",
  submit: "Send message",
};

export const footer = {
  socials: [
    {
      label: "@getgrowsmartwealth on Instagram",
      href: "https://instagram.com/getgrowsmartwealth",
      icon: "instagram",
    },
    {
      label: "@getgrowsmartwealth on X",
      href: "https://x.com/getgrowsmartwealth",
      icon: "x",
    },
    {
      label: "@getgrowsmartwealth on YouTube",
      href: "https://youtube.com/@getgrowsmartwealth",
      icon: "youtube",
    },
  ],
  disclaimer:
    "Grow Smart Wealth is a trading tool designed to support your own analysis and decision-making. We do not provide financial advice, and results are not guaranteed. Trading involves risk. Always do your own research.",
  address: "131 Continental Dr, Newark, DE 19713, US",
  groups: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Support", href: "#contact" },
        { label: "About us", href: "/about" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
};
