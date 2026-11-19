"use client"

import { howItWorks } from "@/data/site"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"

export function HowItWorks() {
  return (
    <section className="bg-pf-page px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow={howItWorks.eyebrow}
            title={howItWorks.title}
            subtitle={howItWorks.subtitle}
          />
        </Reveal>
        <div className="relative mt-14">
          <div
            className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-pf-line md:block"
            aria-hidden
          />
          <ol className="grid gap-10 md:grid-cols-3">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className="relative">
              <Reveal delay={index * 0.08}>
                <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-full border border-pf-line bg-white text-2xl font-semibold text-pf-ink">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-pf-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-pf-body">{step.body}</p>
              </Reveal>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
