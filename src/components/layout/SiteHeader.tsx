"use client"

import { Menu } from "lucide-react"
import { navLinks } from "@/data/site"
import { CtaLink } from "@/components/shared/CtaLink"
import { SvgSlot } from "@/components/shared/SvgSlot"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

const linkClass =
  "text-[15px] font-medium text-pf-body transition-colors hover:text-pf-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pf-ink"

function scrollToHash(href: string) {
  if (!href.startsWith("#")) return
  window.setTimeout(() => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }, 50)
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-pf-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-3 px-4 sm:px-6">
        <a href="/" aria-label="Phantom Flow home" className="shrink-0 rounded-lg">
          {/* <SvgSlot
            label="Phantom Flow logo"
            aspect="1 / 1"
            className="size-9 rounded-[8px] border-solid border-pf-line-strong bg-pf-surface"
          /> */}
          <Image src="/logo.png" alt="Phantom Flow logo" width={42} height={42} />
        </a>

        <nav className="ml-6 hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <a href="/login" className={`hidden lg:inline ${linkClass}`}>
            Login
          </a>
          <CtaLink className="h-10 px-4 text-sm sm:h-11 sm:px-5" />
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
                    <a
                      href={link.href}
                      className="rounded-xl px-2 py-3 text-2xl font-semibold tracking-tight text-pf-ink"
                      onClick={() => scrollToHash(link.href)}
                    >
                      {link.label}
                    </a>
                  </DialogClose>
                ))}
                <DialogClose asChild>
                  <a
                    href="/login"
                    className="rounded-xl px-2 py-3 text-2xl font-semibold tracking-tight text-pf-ink"
                  >
                    Login
                  </a>
                </DialogClose>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
