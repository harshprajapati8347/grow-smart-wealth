import Image from "next/image";
import { navLinks } from "@/data/site";
import { MobileNav } from "@/components/layout/MobileNav";
import { AppLink } from "@/components/shared/AppLink";
import { CtaLink } from "@/components/shared/CtaLink";

const linkClass =
  "text-[15px] font-medium text-pf-body transition-colors hover:text-pf-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pf-ink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-pf-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-3 px-4 sm:px-6">
        <AppLink
          href="/"
          aria-label="Grow Smart Wealth home"
          className="shrink-0 rounded-lg"
        >
          <Image
            src="/logo.png"
            alt="Grow Smart Wealth logo"
            width={42}
            height={42}
            priority
          />
        </AppLink>

        <nav
          className="ml-6 hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <AppLink key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </AppLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <CtaLink className="h-10 px-4 text-sm sm:h-11 sm:px-5" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
