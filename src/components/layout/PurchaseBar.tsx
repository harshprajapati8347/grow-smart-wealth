"use client"

import { useEffect, useState } from "react"
import { offer } from "@/data/site"
import { CtaLink } from "@/components/shared/CtaLink"
import { cn } from "@/lib/utils"

export function PurchaseBar() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const target = document.getElementById("root-cause")
    if (!target) return

    const update = () => {
      setShown(target.getBoundingClientRect().top < window.innerHeight * 0.72)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-pf-line bg-white/95 backdrop-blur-md transition-transform duration-300 motion-reduce:transition-none",
        shown ? "translate-y-0" : "pointer-events-none translate-y-full"
      )}
      aria-hidden={!shown}
      inert={!shown}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <p className="min-w-0 text-sm text-pf-body sm:text-[15px]">
          <span className="font-semibold text-pf-ink">Phantom Flow</span>{" "}
          {offer.price} · {offer.cadence}
        </p>
        <CtaLink className="h-10 shrink-0 px-4 text-sm sm:h-11" />
      </div>
    </div>
  )
}
