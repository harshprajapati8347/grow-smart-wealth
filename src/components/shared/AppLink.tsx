import Link from "next/link"
import { forwardRef, type ComponentPropsWithoutRef } from "react"

type AppLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string
}

function isExternal(href: string) {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  function AppLink({ href, ...props }, ref) {
    if (isExternal(href)) {
      return <a ref={ref} href={href} {...props} />
    }

    return <Link ref={ref} href={href} {...props} />
  }
)
