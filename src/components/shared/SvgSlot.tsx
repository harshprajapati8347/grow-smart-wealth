import { cn } from "@/lib/utils"

type SvgSlotProps = {
  label: string
  aspect?: string
  className?: string
}

export function SvgSlot({ label, aspect = "16 / 10", className }: SvgSlotProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "w-full rounded-xl border border-dashed border-pf-line-strong bg-muted",
        className
      )}
      style={{ aspectRatio: aspect }}
    />
  )
}
