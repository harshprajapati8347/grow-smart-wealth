"use client";

import { useEffect, useRef } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import { pricing } from "@/data/site";
import { Reveal } from "@/components/shared/Reveal";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { selectService, useSelectedService } from "@/lib/selected-service";

type PricingPlan = (typeof pricing.plans)[number];

function MoneyRange({ low, high }: { low: string; high: string }) {
  return (
    <span dir="ltr" className="inline-block tabular-nums">
      <span className="whitespace-nowrap">
        <bdi>{low}</bdi>–
      </span>
      <wbr />
      <bdi className="whitespace-nowrap">{high}</bdi>
    </span>
  );
}

function revealSelectedTab(list: HTMLElement) {
  const tab = list.querySelector<HTMLElement>('[data-state="active"]');
  if (!tab) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = reduce ? "auto" : "smooth";
  const listRect = list.getBoundingClientRect();
  const tabRect = tab.getBoundingClientRect();
  const start = tabRect.left - listRect.left;
  const end = tabRect.right - listRect.right;

  if (start < 0) list.scrollBy({ left: start, behavior });
  else if (end > 0) list.scrollBy({ left: end, behavior });
}

function PricingPlanView({ plan }: { plan: PricingPlan }) {
  const coreShare = `${(plan.coreAmount / plan.comparisonHigh) * 100}%`;

  return (
    <>
      <div className="text-center">
        <p className="text-xs font-semibold tracking-[0.16em] text-pf-quiet uppercase sm:text-sm">
          {plan.comparisonTitle}
        </p>
        <p className="mt-3 text-[2rem] leading-[1.02] font-bold tracking-[-0.045em] text-pf-ink tabular-nums sm:text-5xl md:text-6xl">
          <MoneyRange low={plan.othersLow} high={plan.othersHigh} />
        </p>
        <p className="mt-2 text-base font-medium text-pretty text-pf-body sm:text-lg">
          {plan.comparisonCaption}
        </p>
        <p className="mt-3 text-[13px] text-pretty text-pf-quiet sm:text-sm">
          <span className="inline-block">
            <MoneyRange low={plan.monthlyLow} high={plan.monthlyHigh} />
            /mo
          </span>
          {" × 12 = "}
          <MoneyRange low={plan.yearlyLow} high={plan.yearlyHigh} />
          {" every year"}
        </p>
      </div>

      <div className="mt-8 space-y-4 sm:mt-10">
        <div>
          <p className="text-[13px] text-pf-quiet sm:text-sm">
            {plan.comparisonTitle}
          </p>
          <div
            className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-stone-100"
            aria-hidden
          >
            <div className="h-full w-full rounded-full bg-stone-400" />
          </div>
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-[13px] font-semibold text-pf-ink sm:text-sm">
              {plan.coreName}
            </span>
            <span className="text-base font-semibold whitespace-nowrap text-pf-ink tabular-nums sm:text-lg">
              <bdi>{plan.corePrice}</bdi>{" "}
              <span className="text-[13px] font-normal text-pf-quiet sm:text-sm">
                {plan.cadence}
              </span>
            </span>
          </div>
          <div
            className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-stone-100"
            aria-hidden
          >
            <div
              className="h-full rounded-full bg-pf-ink"
              style={{ width: coreShare }}
            />
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-[13px] text-pretty text-pf-quiet sm:text-sm">
        <span className="font-semibold text-pf-ink">{plan.riskLead}</span>{" "}
        <bdi className="font-semibold text-pf-ink tabular-nums">
          {plan.riskAmount}
        </bdi>{" "}
        {plan.riskNote}
      </p>

      <div className="mx-auto mt-10 max-w-md sm:mt-12">
        <ul className="space-y-3">
          {plan.items.map((item) => (
            <li key={item.name}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <Check
                    className="size-3.5 shrink-0 text-pf-emerald"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span className="text-[13px] leading-snug text-pretty text-pf-body sm:text-[14px]">
                    {item.name}
                  </span>
                </div>
                <span className="text-[13px] whitespace-nowrap text-pf-faint tabular-nums sm:text-[14px]">
                  {item.value}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 border-t border-pf-line pt-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[13px] font-semibold text-stone-700 sm:text-[14px]">
              {plan.totalLabel}
            </span>
            <span className="text-[13px] font-semibold text-stone-700 tabular-nums sm:text-[14px]">
              {plan.totalValue}
            </span>
          </div>
          <p className="mt-3 text-center text-sm font-semibold text-pretty text-pf-emerald sm:text-base">
            {plan.youPay}
          </p>
        </div>
      </div>

      <div className="mt-10 sm:mt-12">
        <AppLink
          href="#contact"
          className="group flex min-h-14 w-full items-center justify-center rounded-full bg-pf-ink px-6 py-4 text-[15px] font-semibold text-white shadow-[0_1px_2px_rgba(28,25,23,0.18),0_6px_12px_rgba(28,25,23,0.14),0_18px_36px_rgba(28,25,23,0.16),inset_0_1px_0_rgba(255,255,255,0.18)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-pf-ink-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pf-ink motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:text-base"
        >
          <span className="inline-flex items-center gap-2">
            {plan.cta}
            <span
              className="inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden
            >
              →
            </span>
          </span>
        </AppLink>
        <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5">
          <ShieldCheck
            className="size-4 shrink-0 text-pf-emerald/60"
            aria-hidden
          />
          <p className="text-[12px] text-pretty text-pf-faint sm:text-[13px]">
            {plan.checkoutNote}
          </p>
        </div>
      </div>
    </>
  );
}

export function Pricing() {
  const selectedId = useSelectedService();
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    revealSelectedTab(listRef.current);
  }, [selectedId]);

  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-28 md:py-36"
    >
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        <Reveal>
          <h2 className="mx-auto mb-10 max-w-2xl text-center text-2xl leading-tight font-bold tracking-[-0.03em] text-balance text-pf-ink sm:mb-12 sm:text-3xl md:text-4xl">
            {pricing.title}
          </h2>
        </Reveal>

        <Tabs
          value={selectedId}
          onValueChange={selectService}
          className="gap-0"
        >
          <Reveal>
            <TabsList
              ref={listRef}
              aria-label="Services"
              className="pricing-tablist mx-auto mb-10 flex h-auto! w-fit max-w-full items-center justify-start gap-0.5 overflow-x-auto scroll-px-1 rounded-full bg-stone-100 p-1 sm:mb-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {pricing.plans.map((plan) => (
                <TabsTrigger
                  key={plan.id}
                  value={plan.id}
                  className="pricing-tab h-9 flex-none rounded-full border-0 bg-transparent px-3.5 text-[13px] font-medium text-pf-quiet shadow-none after:hidden hover:text-pf-ink data-active:bg-white data-active:text-pf-ink data-active:shadow-[0_1px_2px_rgba(28,25,23,0.06),0_1px_1px_rgba(28,25,23,0.05)] focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-pf-ink sm:px-4 sm:text-sm dark:text-pf-quiet dark:hover:text-pf-ink dark:data-active:border-transparent dark:data-active:bg-white dark:data-active:text-pf-ink"
                >
                  {plan.tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>

          {pricing.plans.map((plan) => (
            <TabsContent key={plan.id} value={plan.id}>
              <PricingPlanView plan={plan} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
