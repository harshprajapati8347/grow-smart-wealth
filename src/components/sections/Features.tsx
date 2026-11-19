"use client"

import { bonusDateLabel, features, offer } from "@/data/site"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-pf-surface px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader title={features.title} />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.cards.map((card, index) => (
            <Reveal key={card.title} delay={(index % 3) * 0.05}>
              <article className="h-full rounded-[20px] border border-pf-line bg-white p-6 shadow-pf-card">
                <h3 className="text-lg font-semibold tracking-tight text-pf-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-pf-body">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5">
          <article className="rounded-[20px] border border-pf-emerald-softer bg-pf-emerald-soft p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-pf-ink">
                {features.ai.title}
              </h3>
              <span className="rounded-full bg-pf-ink px-3 py-1 text-xs font-medium text-pf-on-dark">
                {features.ai.tag}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-pf-body">{features.ai.intro}</p>
            <p className="mt-2 text-sm font-medium text-pf-emerald-deep">
              Included free until {bonusDateLabel(true)} · {offer.aiAnnualValue} value
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {features.ai.exchanges.map((item) => (
                <div key={item.question} className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-semibold text-pf-ink">{item.question}</p>
                  <p className="mt-2 text-sm leading-6 text-pf-body">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
