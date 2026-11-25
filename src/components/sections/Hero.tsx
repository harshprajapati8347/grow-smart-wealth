"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { hero, heroDemos, painLines } from "@/data/site";
import { CtaLink } from "@/components/shared/CtaLink";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { Reveal } from "@/components/shared/Reveal";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [demoIndex, setDemoIndex] = useState(0);
  const [demoLocked, setDemoLocked] = useState(false);
  const [demoStatus, setDemoStatus] = useState("");
  const demoAnnounced = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % painLines.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (demoLocked) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setDemoIndex((current) => (current + 1) % heroDemos.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [demoLocked]);

  useEffect(() => {
    if (!demoAnnounced.current) {
      demoAnnounced.current = true;
      return;
    }

    setDemoStatus(`Showing ${heroDemos[demoIndex].title}`);
  }, [demoIndex]);

  function selectDemo(next: number) {
    setDemoLocked(true);
    setDemoIndex(next);
  }

  return (
    <section className="bg-pf-page px-4 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <motion.div
        className="mx-auto flex max-w-[720px] flex-col items-center text-center"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <p className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-pf-line bg-white px-4 py-2 text-sm text-pf-body shadow-pf-card">
            <span>{hero.prompt}</span>
            <span
              className="size-1.5 shrink-0 rounded-full bg-pf-emerald"
              aria-hidden
            />
            <span className="relative inline-grid h-5 min-w-[15.5rem] overflow-hidden text-left font-medium text-pf-ink sm:min-w-[18rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={painLines[index]}
                  className="col-start-1 row-start-1 whitespace-nowrap"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  {painLines[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-[40px] leading-[0.98] font-extrabold tracking-[-0.045em] text-pf-ink sm:text-[72px]"
        >
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-7 text-pf-body sm:text-lg"
        >
          {hero.body}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <CtaLink showArrow className="h-14 px-8 text-base" />
        </motion.div>
      </motion.div>

      <Reveal className="mx-auto mt-14 w-full max-w-[1100px] sm:mt-16">
        <section aria-roledescription="carousel" aria-label="Chart demos">
          <div className="mb-3 grid grid-cols-1 gap-3 sm:mb-4 sm:grid-cols-3">
            {heroDemos.map((demo, demoPosition) => {
              const active = demoPosition === demoIndex;

              return (
                <button
                  key={demo.title}
                  type="button"
                  aria-current={active ? "true" : undefined}
                  onClick={() => selectDemo(demoPosition)}
                  className={cn(
                    "rounded-[16px] border-2 bg-white px-4 py-4 text-left text-sm font-semibold text-pf-ink shadow-pf-card transition-[border-color,box-shadow] duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pf-ink",
                    active
                      ? "border-pf-emerald shadow-[0_0_0_1px_#059669,0_0_22px_rgb(5_150_105/0.45)]"
                      : "border-pf-line hover:border-pf-line-strong",
                  )}
                >
                  <p className="text-sm font-semibold text-pf-ink">{demo.title}</p>
                  <p className="text-xs text-pf-body">{demo.description}</p>
                </button>
              );
            })}
          </div>
          <p className="sr-only" role="status" aria-live="polite">
            {demoStatus}
          </p>
          <LiveDemo activeIndex={demoIndex} />
        </section>
      </Reveal>
    </section>
  );
}
