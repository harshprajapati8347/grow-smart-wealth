import { Reveal } from "@/components/shared/Reveal"
import { SvgSlot } from "@/components/shared/SvgSlot"

export function LiveDemo() {
  return (
    <Reveal className="mx-auto mt-14 w-full max-w-[1100px] sm:mt-16">
      <div className="overflow-hidden rounded-[20px] border border-pf-line bg-white shadow-pf-frame">
        <div className="relative flex h-12 items-center border-b border-pf-line px-4">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-pf-dot-red" />
            <span className="size-2.5 rounded-full bg-pf-dot-yellow" />
            <span className="size-2.5 rounded-full bg-pf-dot-green" />
          </div>
          <p className="absolute left-1/2 -translate-x-1/2 rounded-full bg-muted px-3 py-1 text-xs text-pf-quiet">
            Live demo
          </p>
        </div>
        <div className="p-3 sm:p-4">
          <SvgSlot label="Live chart demo" aspect="16 / 10" className="rounded-lg" />
        </div>
      </div>
    </Reveal>
  )
}
