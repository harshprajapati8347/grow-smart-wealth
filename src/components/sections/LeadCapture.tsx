"use client"

import { useState } from "react"
import { leadCapture } from "@/data/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Reveal } from "@/components/shared/Reveal"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LeadCapture() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle")

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = email.trim()

    if (!value) {
      setStatus("idle")
      setError(leadCapture.emptyError)
      return
    }

    if (!emailPattern.test(value)) {
      setStatus("idle")
      setError(leadCapture.invalidError)
      return
    }

    setError("")
    setStatus("sending")
    window.setTimeout(() => setStatus("success"), 350)
  }

  return (
    <section id="contact" className="scroll-mt-24 scroll-mb-20 bg-pf-ink px-4 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="text-[2rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-pf-on-dark sm:text-5xl">
          {leadCapture.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-pf-faint sm:text-lg">
          {leadCapture.subtitle}
        </p>
        <form onSubmit={onSubmit} noValidate className="mt-8 text-left">
          <label htmlFor="breakdown-email" className="text-sm font-medium text-pf-on-dark">
            {leadCapture.label}
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Input
              id="breakdown-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              disabled={status === "sending" || status === "success"}
              aria-invalid={error ? true : undefined}
              aria-describedby="breakdown-hint"
              placeholder="you@email.com"
              onChange={(event) => {
                setEmail(event.target.value)
                if (error) setError("")
              }}
              className="h-12 rounded-full border-white/15 bg-white px-4 text-base text-pf-ink"
            />
            <Button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="h-12 rounded-full bg-white px-6 font-semibold text-pf-ink hover:bg-pf-surface"
            >
              {status === "sending" ? "Sending…" : leadCapture.button}
            </Button>
          </div>
          <p id="breakdown-hint" className="mt-3 text-sm text-pf-quiet">
            {leadCapture.consent}{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-white">
              Privacy policy
            </a>
          </p>
          {error ? (
            <p role="alert" className="mt-3 text-sm text-pf-dot-red">
              {error}
            </p>
          ) : null}
          {status === "success" ? (
            <p role="status" className="mt-3 text-sm text-pf-emerald-softer">
              {leadCapture.success}
            </p>
          ) : null}
        </form>
      </Reveal>
    </section>
  )
}
