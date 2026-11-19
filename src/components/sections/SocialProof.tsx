"use client"

import { socialProof } from "@/data/site"
import { testimonials } from "@/data/testimonials"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"

export function SocialProof() {
  return (
    <section className="bg-pf-page px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow={socialProof.eyebrow}
            title={socialProof.title}
            subtitle={socialProof.subtitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.handle} delay={(index % 3) * 0.05}>
              <figure className="flex h-full flex-col rounded-[20px] border border-pf-line bg-white p-6 shadow-pf-card">
                <blockquote className="text-[15px] leading-7 text-pf-copy">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-pf-quiet">
                  <cite className="font-medium text-pf-ink not-italic">{item.handle}</cite>
                  {" — "}
                  {item.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
