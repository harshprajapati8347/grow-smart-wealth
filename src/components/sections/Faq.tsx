"use client"

import { faq } from "@/data/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeader } from "@/components/shared/SectionHeader"

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-pf-page px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <SectionHeader
            eyebrow={faq.eyebrow}
            title={faq.title}
            subtitle={faq.subtitle}
          />
        </Reveal>
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="rounded-[20px] border-pf-line bg-white shadow-pf-card">
            {faq.items.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="px-5 py-4 text-base font-medium text-pf-ink hover:no-underline focus-visible:ring-3 focus-visible:ring-ring/40">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 text-[15px] leading-7 text-pf-body">
                  {item.answer.split("\n\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
