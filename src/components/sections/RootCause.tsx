"use client";

import { rootCause } from "@/data/site";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SvgSlot } from "@/components/shared/SvgSlot";
import { cn } from "@/lib/utils";
import Image from "next/image";

const cardClass =
  "rounded-[20px] border border-pf-line bg-white p-6 shadow-pf-card sm:p-7";

const pillTone = {
  mint: "bg-pf-emerald-soft text-pf-emerald-deep",
  sell: "bg-pf-sell text-pf-copy",
  wait: "bg-pf-wait text-pf-copy",
} as const;

export function RootCause() {
  const [first, second, third] = rootCause.cards;

  return (
    <section
      id="root-cause"
      className="scroll-mt-24 bg-pf-surface px-4 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1040px]">
        <Reveal>
          <SectionHeader
            eyebrow={rootCause.eyebrow}
            title={rootCause.title}
            subtitle={rootCause.subtitle}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article
              className={cn(
                cardClass,
                "flex min-h-64 items-center justify-center",
              )}
            >
              <div className="relative w-full max-w-sm pb-4">
                <Image
                  src={first.image.asset.url}
                  alt="Candle row"
                  width={100}
                  height={100}
                />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className={cardClass}>
              <p className="text-xs font-medium text-pf-faint">{first.index}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-pf-ink">
                {first.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-pf-body">
                {first.body}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.04}>
            <article className={cardClass}>
              <ul className="space-y-2">
                <Image
                  src={second.image.asset.url}
                  alt="Unclear decision"
                  width={100}
                  height={100}
                />
              </ul>
              <p className="mt-6 text-xs font-medium text-pf-faint">
                {second.index}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-pf-ink">
                {second.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-pf-body">
                {second.body}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className={cardClass}>
              <Image
                src={third.image.asset.url}
                alt="Price swinging without a plan"
                width={100}
                height={100}
              />
              <p className="mt-6 text-xs font-medium text-pf-faint">
                {third.index}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-pf-ink">
                {third.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-pf-body">
                {third.body}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
