import { rootCause } from "@/data/site";
import { Reveal } from "@/components/shared/Reveal";
import Image from "next/image";

const cardChrome =
  "overflow-hidden rounded-2xl border border-stone-200/70 bg-white";

const indexClass =
  "mb-3 text-xs font-semibold uppercase tracking-wider text-stone-300";

const titleClass =
  "text-lg font-semibold tracking-tight text-pf-ink @min-[720px]:text-xl";

const bodyClass = "mt-2 text-[15px] leading-relaxed text-stone-500";

function Illustration({
  src,
  width,
  height,
  label,
}: {
  src: string;
  width: number;
  height: number;
  label: string;
}) {
  return (
    <Image
      src={src}
      alt={label}
      width={width}
      height={height}
      unoptimized
      className="block w-full"
      style={{
        width: "100%",
        height: "auto",
        aspectRatio: `${width} / ${height}`,
      }}
    />
  );
}

export function RootCause() {
  const [first, second, third] = rootCause.cards;

  return (
    <section
      id="root-cause"
      className="scroll-mt-24 bg-pf-surface px-4 py-20 sm:px-6 md:py-28"
    >
      <div className="@container mx-auto w-full max-w-[813px]">
        <Reveal>
          <header className="mb-10 text-center @min-[720px]:mb-14">
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-pf-emerald uppercase">
              {rootCause.eyebrow}
            </p>
            <h2 className="text-[1.75rem] leading-[1.15] font-bold tracking-[-0.03em] text-pf-ink @min-[720px]:text-[2.5rem] @min-[720px]:leading-[1.12]">
              {rootCause.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-500 @min-[720px]:text-lg">
              {rootCause.subtitle}
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 @min-[720px]:grid-cols-2">
          <Reveal className="@min-[720px]:col-span-2">
            <article className={cardChrome}>
              <div className="flex min-w-0 flex-col @min-[720px]:flex-row @min-[720px]:items-stretch">
                <div className="flex min-w-0 items-center justify-center px-6 py-7 @min-[720px]:flex-[0_0_55%] @min-[720px]:px-8 @min-[720px]:py-8">
                  <Illustration
                    src={first.image.asset.url}
                    width={400}
                    height={170}
                    label="Candlestick chart with no clear buy or sell point"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center px-6 py-6 @min-[720px]:flex-[0_0_45%] @min-[720px]:px-8 @min-[720px]:py-8">
                  <p className={indexClass}>{first.index}</p>
                  <h3 className={titleClass}>{first.title}</h3>
                  <p className={bodyClass}>{first.body}</p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06} className="h-full">
            <article className={`${cardChrome} flex h-full flex-col`}>
              <div className="flex items-center justify-center px-8 py-8">
                <Illustration
                  src={second.image.asset.url}
                  width={280}
                  height={160}
                  label="Buy, sell, and wait signals shown together"
                />
              </div>
              <div className="flex flex-col justify-center px-6 pt-5 pb-6">
                <p className={indexClass}>{second.index}</p>
                <h3 className={titleClass}>{second.title}</h3>
                <p className={bodyClass}>{second.body}</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <article className={`${cardChrome} flex h-full flex-col`}>
              <div className="flex items-center justify-center px-8 py-8">
                <Illustration
                  src={third.image.asset.url}
                  width={280}
                  height={160}
                  label="Price swinging up and down without a plan"
                />
              </div>
              <div className="flex flex-col justify-center px-6 pt-5 pb-6">
                <p className={indexClass}>{third.index}</p>
                <h3 className={titleClass}>{third.title}</h3>
                <p className={bodyClass}>{third.body}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
