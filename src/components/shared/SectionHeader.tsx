import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  tone?: "light" | "dark"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark"

  return (
    <header className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] text-pf-emerald uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-[2rem] leading-[1.05] font-extrabold tracking-[-0.035em] sm:text-5xl",
          eyebrow && "mt-3",
          dark ? "text-pf-on-dark" : "text-pf-ink"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mx-auto mt-4 max-w-xl text-base leading-7 sm:text-lg",
            dark ? "text-pf-faint" : "text-pf-body"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  )
}
