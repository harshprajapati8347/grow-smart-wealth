"use client"

import { BadgeCheck } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { socialProof } from "@/data/site"
import { testimonials, type Testimonial } from "@/data/testimonials"
import { Reveal } from "@/components/shared/Reveal"
import { cn } from "@/lib/utils"

const ROTATE_MS = 4000
let focusGroupPolyfilled = false

function Portrait({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  return (
    <Image src={src} alt="" width={36} height={36} className={className} />
  )
}

function QuoteBody({ item }: { item: Testimonial }) {
  return (
    <>
      <blockquote className="text-lg leading-[1.65] font-medium tracking-[-0.015em] text-stone-800 sm:text-xl md:text-[1.35rem]">
        “{item.quote}”
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <Portrait
          src={item.avatar}
          className="h-9 w-9 rounded-full bg-stone-100"
        />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-stone-900">{item.handle}</span>
            <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
          </div>
          <span className="text-[12px] font-normal text-stone-400 sm:text-xs">{item.role}</span>
        </div>
      </div>
    </>
  )
}

export function SocialProof() {
  const baseId = useId()
  const sectionRef = useRef<HTMLElement>(null)
  const onscreenRef = useRef(false)
  const startRef = useRef<() => void>(() => {})
  const activeRef = useRef(0)
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  const go = useCallback((next: number) => {
    const count = testimonials.length
    const index = ((next % count) + count) % count
    activeRef.current = index
    setActive(index)
    if (onscreenRef.current) startRef.current()
  }, [])

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    let timer: number | null = null
    const stop = () => {
      if (timer != null) window.clearInterval(timer)
      timer = null
    }
    const start = () => {
      stop()
      timer = window.setInterval(() => {
        go(activeRef.current + 1)
      }, ROTATE_MS)
    }
    startRef.current = start

    const observer = new IntersectionObserver(
      ([entry]) => {
        onscreenRef.current = entry.isIntersecting
        if (entry.isIntersecting) start()
        else stop()
      },
      { threshold: 0.1 }
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      stop()
      startRef.current = () => {}
    }
  }, [go])

  useEffect(() => {
    if (focusGroupPolyfilled || Object.hasOwn(HTMLElement.prototype, "focusGroup")) return
    focusGroupPolyfilled = true
    void import("@microsoft/focusgroup-polyfill").then(({ polyfill }) => {
      polyfill(document.body)
    })
  }, [])

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const panels = [...node.querySelectorAll<HTMLElement>("[data-testimonial-panel]")]
    const onBeforeMatch = (event: Event) => {
      const index = Number((event.currentTarget as HTMLElement).dataset.index)
      if (Number.isFinite(index)) go(index)
    }
    for (const panel of panels) panel.addEventListener("beforematch", onBeforeMatch)
    return () => {
      for (const panel of panels) panel.removeEventListener("beforematch", onBeforeMatch)
    }
  }, [go, active])

  return (
    <section ref={sectionRef} className="bg-pf-surface py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Reveal>
          <header className="mb-10 sm:mb-14">
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
              {socialProof.eyebrow}
            </p>
            <h2 className="text-3xl leading-[1.05] font-bold tracking-[-0.035em] text-stone-900 md:text-4xl lg:text-[2.75rem]">
              {socialProof.title}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] font-normal text-stone-500 sm:text-base">
              {socialProof.subtitle}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-[1fr_240px]">
            <div className="pf-quote-stage flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-7 sm:p-9">
              <div className="grid h-full flex-1">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.handle}
                    role="tabpanel"
                    id={`${baseId}-panel-${active}`}
                    aria-labelledby={`${baseId}-tab-${active}`}
                    tabIndex={0}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="col-start-1 row-start-1 flex h-full flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                  >
                    <QuoteBody item={current} />
                  </motion.div>
                </AnimatePresence>
                {testimonials.map((item, index) =>
                  index === active ? null : (
                    <div
                      key={item.handle}
                      role="tabpanel"
                      id={`${baseId}-search-${index}`}
                      aria-labelledby={`${baseId}-tab-${index}`}
                      hidden={true as boolean}
                      data-testimonial-panel=""
                      data-index={index}
                      className="col-start-1 row-start-1"
                    >
                      <QuoteBody item={item} />
                    </div>
                  )
                )}
              </div>
            </div>

            <div
              role="tablist"
              aria-label="Trader testimonials"
              className="space-y-1.5"
              {...({ focusgroup: "tablist nomemory" } as Record<string, string>)}
            >
              {testimonials.map((item, index) => {
                const selected = index === active
                return (
                  <button
                    key={item.handle}
                    type="button"
                    id={`${baseId}-tab-${index}`}
                    role="tab"
                    aria-controls={selected ? `${baseId}-panel-${index}` : `${baseId}-search-${index}`}
                    className="testimonial-tab group relative w-full touch-manipulation rounded-xl border px-4 py-3 text-start transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 aria-selected:border-stone-900 aria-selected:bg-stone-900 aria-selected:text-white aria-[selected=false]:border-stone-200/60 aria-[selected=false]:bg-stone-50 aria-[selected=false]:text-stone-600 aria-[selected=false]:hover:bg-stone-100"
                    aria-selected={selected}
                    onClick={() => go(index)}
                    onFocus={() => go(index)}
                    {...(selected
                      ? ({ focusgroupstart: "" } as Record<string, string>)
                      : {})}
                  >
                    <span className="flex items-center gap-3">
                      <Portrait
                        src={item.avatar}
                        className={cn(
                          "h-7 w-7 shrink-0 rounded-full ring-1",
                          selected ? "ring-white/20" : "ring-stone-200/60"
                        )}
                      />
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block truncate text-[13px] font-medium sm:text-sm",
                            selected ? "text-white" : "text-stone-700"
                          )}
                        >
                          {item.handle}
                        </span>
                        <span
                          className={cn(
                            "block text-[11px] font-normal",
                            selected ? "text-white/50" : "text-stone-400"
                          )}
                        >
                          {item.role}
                        </span>
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
