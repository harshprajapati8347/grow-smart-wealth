import { howItWorks } from "@/data/site"
import { Reveal } from "@/components/shared/Reveal"

export function HowItWorks() {
  return (
    <section className="bg-pf-surface py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <header className="mb-12 sm:mb-16">
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-pf-emerald uppercase">
              {howItWorks.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-stone-900 md:text-4xl">
              {howItWorks.title}
            </h2>
            <p className="mt-3 text-[15px] leading-normal text-pf-quiet sm:text-base sm:leading-6">
              {howItWorks.subtitle}
            </p>
          </header>
        </Reveal>

        <ol className="grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3 md:gap-4 lg:gap-5">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className="h-full min-w-0">
              <Reveal delay={index * 0.08} className="h-full">
                <div className="group h-full rounded-[16px] border border-stone-200/70 bg-white p-5 transition-[border-color,box-shadow] duration-300 hover:border-stone-300/80 hover:shadow-[0_2px_16px_rgba(0,0,0,0.04)] md:p-6 lg:p-7">
                  <div className="flex items-start gap-4 md:block">
                    <div
                      aria-hidden
                      className="shrink-0 text-[40px] leading-none font-black text-stone-200 select-none transition-colors duration-300 group-hover:text-[#a7f3d0] md:mb-4 md:text-[72px] lg:text-[80px]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0 pt-1 md:pt-0">
                      <h3 className="mb-1 text-[15px] leading-normal font-semibold text-stone-900 md:mb-2 md:text-base md:leading-6 lg:text-lg lg:leading-7">
                        {step.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-pf-quiet lg:text-[14px]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
