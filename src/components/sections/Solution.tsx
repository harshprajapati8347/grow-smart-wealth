import { readFileSync } from "node:fs"
import { join } from "node:path"
import { solution } from "@/data/site"
import { AppLink } from "@/components/shared/AppLink"
import { Reveal } from "@/components/shared/Reveal"

const cardChrome =
  "group overflow-clip rounded-[16px] border border-[#e7e5e4]/70 bg-[#fafaf9] transition-[border-color,box-shadow] duration-300 hover:border-[#a7f3d0] hover:shadow-[0_2px_16px_rgba(16,185,129,0.06)]"

const indexClass =
  "mb-3 block text-xs font-semibold tracking-wider text-[#10b981] uppercase"

const titleClass = "mb-2 text-xl font-semibold text-[#1c1917] md:text-2xl"

const bodyClass =
  "text-base leading-[26px] text-[#78716c] md:text-lg md:leading-7"

function Illustration({
  src,
  width,
  height,
}: {
  src: string
  width: number
  height: number
}) {
  const file = src.replace(/^\/assets\//, "")
  const markup = readFileSync(join(process.cwd(), "public/assets", file), "utf8")
    .replace(/\sclass="[^"]*"/, "")
    .replace(
      "<svg ",
      `<svg class="block h-auto w-full" style="aspect-ratio: ${width} / ${height}" `
    )

  return (
    <div
      className="w-full [&_svg]:block"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  )
}

export function Solution() {
  const [first, second, third] = solution.cards

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <header className="mb-16 text-center">
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-[#059669] uppercase">
              {solution.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1c1917] md:text-4xl lg:text-5xl">
              {solution.title}
            </h2>
            <p className="text-lg text-[#78716c] md:text-xl">{solution.subtitle}</p>
          </header>
        </Reveal>

        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <article className={cardChrome}>
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center bg-white p-6 md:w-[55%] md:p-8">
                  <Illustration
                    src={first.image.asset.url}
                    width={first.image.width}
                    height={first.image.height}
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:w-[45%] md:p-8">
                  <span className={indexClass}>{first.index}</span>
                  <h3 className={titleClass}>{first.title}</h3>
                  <p className={bodyClass}>{first.body}</p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06} className="h-full">
            <article className={`${cardChrome} h-full`}>
              <div className="flex items-center justify-center bg-white p-6">
                <Illustration
                  src={second.image.asset.url}
                  width={second.image.width}
                  height={second.image.height}
                />
              </div>
              <div className="p-6">
                <span className={indexClass}>{second.index}</span>
                <h3 className={titleClass}>{second.title}</h3>
                <p className={bodyClass}>{second.body}</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <article className={`${cardChrome} h-full`}>
              <div className="flex items-center justify-center bg-white p-6">
                <Illustration
                  src={third.image.asset.url}
                  width={third.image.width}
                  height={third.image.height}
                />
              </div>
              <div className="p-6">
                <span className={indexClass}>{third.index}</span>
                <h3 className={titleClass}>{third.title}</h3>
                <p className={bodyClass}>{third.body}</p>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal className="text-center">
          <p className="mb-5 text-2xl font-bold text-[#1c1917] md:text-3xl">
            {solution.closing}
          </p>
          <AppLink
            href="#pricing"
            className="inline-block rounded-full bg-[#1c1917] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#292524] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1917]"
          >
            {solution.cta}
          </AppLink>
        </Reveal>
      </div>
    </section>
  )
}
