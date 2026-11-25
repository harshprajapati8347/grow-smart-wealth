"use client"

import { Menu } from "lucide-react"
import { navLinks } from "@/data/site"
import { AppLink } from "@/components/shared/AppLink"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function scrollToHash(href: string) {
  if (!href.startsWith("#")) return
  window.setTimeout(() => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }, 50)
}

export function MobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="inset-0 top-0 left-0 flex h-dvh w-screen max-w-none translate-x-0 translate-y-0 flex-col rounded-none sm:max-w-none"
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) => (
            <DialogClose asChild key={link.href}>
              <AppLink
                href={link.href}
                className="rounded-xl px-2 py-3 text-2xl font-semibold tracking-tight text-pf-ink"
                onClick={() => scrollToHash(link.href)}
              >
                {link.label}
              </AppLink>
            </DialogClose>
          ))}
          <DialogClose asChild>
            <AppLink
              href="/login"
              className="rounded-xl px-2 py-3 text-2xl font-semibold tracking-tight text-pf-ink"
            >
              Login
            </AppLink>
          </DialogClose>
        </nav>
      </DialogContent>
    </Dialog>
  )
}
