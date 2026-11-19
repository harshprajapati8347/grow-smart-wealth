"use client"

import { bonusDateLabel, offer, pricing } from "@/data/site"
import { CtaLink } from "@/components/shared/CtaLink"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"

const valueLines = [
  `Phantom Flow Indicator Suite — ${offer.suiteValue} value`,
  `Private Discord Community — ${offer.discordValue} value`,
  "Smart Alerts + Any Market — Included",
  `Phantom AI — 24/7 AI Trading Coach ${offer.aiAnnualValue} value`,
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-pf-surface px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader title={pricing.title} />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[20px] border border-pf-line bg-white p-7 shadow-pf-card sm:p-8">
              <p className="text-sm font-medium text-pf-quiet">{pricing.comparisonTitle}</p>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-pf-ink sm:text-5xl">
                {offer.othersThreeYear}
              </p>
              <p className="mt-2 text-sm text-pf-body">{pricing.comparisonCaption}</p>
              <p className="mt-4 text-sm text-pf-body">{offer.othersAnnual}</p>
              <p className="mt-4 text-sm font-medium text-pf-copy">{offer.riskLine}</p>
              <ul className="mt-8 space-y-3">
                {pricing.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm text-pf-copy">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-pf-emerald" aria-hidden />
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-[20px] border border-pf-ink bg-pf-ink p-7 text-pf-on-dark shadow-pf-frame sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-pf-emerald-softer uppercase">
                Limited time bonus
              </p>
              <ul className="mt-5 space-y-3">
                {valueLines.map((line) => (
                  <li key={line} className="text-sm leading-6 text-pf-faint">
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-pf-emerald-softer">
                Phantom AI bonus included free until {bonusDateLabel(true)}
              </p>
              <p className="mt-6 text-sm text-pf-quiet">Total value {offer.totalValue}</p>
              <p className="mt-2 text-sm text-pf-faint">You pay</p>
              <p className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                {offer.price}{" "}
                <span className="text-lg font-medium text-pf-quiet">{offer.cadence}</span>
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink tone="light" className="sm:flex-1">
                  {pricing.cta}
                </CtaLink>
                <CtaLink tone="light" className="bg-transparent text-white ring-1 ring-white/20 hover:bg-white/10 sm:flex-1">
                  {pricing.cta}
                </CtaLink>
              </div>
              <p className="mt-4 text-center text-xs text-pf-quiet sm:text-left">
                {pricing.checkoutNote}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
