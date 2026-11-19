import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CtaLinkProps = {
  href?: string
  children?: React.ReactNode
  showArrow?: boolean
  tone?: "dark" | "light"
  className?: string
}

export function CtaLink({
  href = "#pricing",
  children = "Get Phantom Flow",
  showArrow = false,
  tone = "dark",
  className,
}: CtaLinkProps) {
  return (
    <Button
      asChild
      className={cn(
        "h-12 rounded-full px-6 text-[15px] font-semibold",
        tone === "dark"
          ? "bg-pf-ink text-pf-on-dark hover:bg-pf-ink-hover"
          : "bg-white text-pf-ink hover:bg-pf-surface",
        className
      )}
    >
      <a href={href}>
        {children}
        {showArrow ? <ArrowRight /> : null}
      </a>
    </Button>
  )
}
