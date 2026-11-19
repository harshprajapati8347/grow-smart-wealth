import { features } from "@/data/site"
import { Reveal } from "@/components/shared/Reveal"

const split = features.title.indexOf(". ")
const headline = features.title.slice(0, split + 1)
const muted = features.title.slice(split + 2)

export function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <h2 className="mb-12 text-3xl font-bold tracking-[-0.02em] text-stone-900 sm:mb-16 md:text-4xl">
            {headline} <span className="text-stone-400">{muted}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.cards.map((card, index) => (
            <Reveal key={card.title} delay={(index % 3) * 0.05} className="h-full">
              <article className="group h-full rounded-[16px] border border-stone-200/70 bg-stone-50 p-6 transition-[border-color,box-shadow] duration-300 hover:border-stone-300 hover:shadow-[0_2px_16px_rgba(0,0,0,0.04)] motion-reduce:transition-none sm:p-7">
                <img
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="mb-4 block aspect-square size-8 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <h3 className="mb-2 text-[15px] leading-[1.5] font-semibold text-stone-900 sm:text-base sm:leading-6">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-stone-500 sm:text-sm sm:leading-5">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
