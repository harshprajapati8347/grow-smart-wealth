import { footer } from "@/data/site"

async function copyrightYear() {
  "use cache"
  return new Date().getFullYear()
}

export async function SiteFooter() {
  const year = await copyrightYear()

  return (
    <footer className="bg-pf-ink pb-24 text-pf-on-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {footer.groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="text-sm font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={`${group.title}-${link.label}`}>
                  <a
                    href={link.href}
                    className="text-sm text-pf-faint transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto max-w-6xl border-t border-white/10 px-4 py-8 sm:px-6">
        <p className="max-w-3xl text-sm leading-6 text-pf-faint">
          <span className="font-medium text-pf-on-dark">Disclaimer: </span>
          {footer.disclaimer}
        </p>
        <p className="mt-6 text-sm text-pf-quiet">
          Phantom Flow · {footer.address}
        </p>
        <p className="mt-2 text-sm text-pf-quiet">
          © {year} Phantom Flow. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
