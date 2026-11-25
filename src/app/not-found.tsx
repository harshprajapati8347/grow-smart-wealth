import { AppLink } from "@/components/shared/AppLink"

export default function NotFound() {
  return (
    <main id="content" className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-pf-emerald uppercase">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-pf-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-base text-pf-body">
        That page doesn’t exist or may have moved.
      </p>
      <AppLink
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-pf-ink px-6 text-[15px] font-semibold text-pf-on-dark"
      >
        Back home
      </AppLink>
    </main>
  )
}
