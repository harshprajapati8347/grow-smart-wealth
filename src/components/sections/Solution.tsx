"use client"

import { solution } from "@/data/site"
import { CtaLink } from "@/components/shared/CtaLink"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"

export function Solution() {
  return (
    <section className="bg-pf-ink px-4 py-20 text-pf-on-dark sm:py-28">
      <div className="mx-auto max-w-[1040px]">
        <Reveal>
          <SectionHeader
            eyebrow={solution.eyebrow}
            title={solution.title}
            subtitle={solution.subtitle}
            tone="dark"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solution.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <article className="h-full rounded-[20px] border border-white/10 bg-white p-6 text-pf-copy shadow-pf-card">
                <h3 className="text-lg font-semibold tracking-tight text-pf-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-pf-body">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-6 text-center">
          <p className="max-w-xl text-base text-pf-faint">{solution.closing}</p>
          <CtaLink tone="light">{solution.cta}</CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
