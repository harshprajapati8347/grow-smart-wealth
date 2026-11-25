"use client"

import { useId, type FormEvent } from "react"
import { contact } from "@/data/site"
import { Reveal } from "@/components/shared/Reveal"

const fieldClass =
  "pf-contact-field min-h-12 w-full rounded-xl border border-stone-200/70 bg-stone-50 px-4 text-base text-stone-900 placeholder:text-stone-400 focus-visible:border-stone-900 focus-visible:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"

const emailPattern = "[^\\s@]+@[^\\s@]+\\.[^\\s@]+"

function isField(target: EventTarget | null): target is HTMLInputElement | HTMLTextAreaElement {
  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement
}

function showError(field: HTMLInputElement | HTMLTextAreaElement, reveal: boolean) {
  const errorId = field.dataset.error
  const invalid = reveal && !field.checkValidity()
  field.classList.toggle("user-invalid-fallback", invalid)
  field.setAttribute("aria-invalid", invalid ? "true" : "false")
  if (field.type === "radio") {
    field.closest(".pf-interest")?.classList.toggle("user-invalid-fallback", invalid)
  }
  if (!errorId) return
  const ids = (field.getAttribute("aria-describedby") || "")
    .split(/\s+/)
    .filter((id) => id && id !== errorId)
  if (invalid) ids.push(errorId)
  if (ids.length) field.setAttribute("aria-describedby", ids.join(" "))
  else field.removeAttribute("aria-describedby")
}

export function Contact() {
  const baseId = useId()
  const titleId = `${baseId}-title`
  const action = `https://formcarry.com/s/${contact.formcarryId}`

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget
    const fields = [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(".pf-contact-field, .pf-contact-choice")]
    const firstInvalid = fields.find((field) => !field.checkValidity())
    if (!firstInvalid) return
    event.preventDefault()
    for (const field of fields) showError(field, !field.checkValidity())
    firstInvalid.focus()
  }

  function onBlur(event: FormEvent<HTMLFormElement>) {
    const field = event.target
    if (!isField(field) || field.dataset.dirty !== "true") return
    showError(field, true)
  }

  function onInput(event: FormEvent<HTMLFormElement>) {
    const field = event.target
    if (!isField(field)) return
    field.dataset.dirty = "true"
    if (field.checkValidity()) showError(field, false)
  }

  return (
    <section id="contact" aria-labelledby={titleId} className="scroll-mt-24 bg-pf-surface px-5 py-20 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <header className="mb-10 sm:mb-14">
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
              {contact.eyebrow}
            </p>
            <h2 id={titleId} className="text-3xl leading-[1.05] font-bold tracking-[-0.035em] text-stone-900 md:text-4xl lg:text-[2.75rem]">
              {contact.title}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] font-normal text-stone-500 sm:text-base">
              {contact.subtitle}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            action={action}
            method="POST"
            encType="multipart/form-data"
            noValidate
            aria-labelledby={titleId}
            onSubmit={onSubmit}
            onBlur={onBlur}
            onInput={onInput}
            className="pf-quote-stage max-w-3xl space-y-5 rounded-2xl border border-stone-200/80 bg-white p-7 sm:p-9"
          >
            <input type="hidden" name="_gotcha" tabIndex={-1} autoComplete="off" />

            <div className="space-y-2">
              <label htmlFor={`${baseId}-name`} className="text-sm font-medium text-stone-500">
                {contact.nameLabel}
              </label>
              <input
                id={`${baseId}-name`}
                name="name"
                type="text"
                required
                minLength={2}
                autoComplete="name"
                enterKeyHint="next"
                placeholder={contact.namePlaceholder}
                aria-invalid="false"
                data-error={`${baseId}-name-error`}
                className={fieldClass}
              />
              <p id={`${baseId}-name-error`} className="pf-contact-error text-sm font-medium text-destructive">
                {contact.nameError}
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor={`${baseId}-email`} className="text-sm font-medium text-stone-500">
                {contact.emailLabel}
              </label>
              <input
                id={`${baseId}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                enterKeyHint="next"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                pattern={emailPattern}
                placeholder={contact.emailPlaceholder}
                aria-invalid="false"
                data-error={`${baseId}-email-error`}
                className={fieldClass}
              />
              <p id={`${baseId}-email-error`} className="pf-contact-error text-sm font-medium text-destructive">
                {contact.emailError}
              </p>
            </div>

            <fieldset className="pf-interest pf-contact-field min-w-0 space-y-2 border-0 p-0">
              <legend className="text-sm font-medium text-stone-500">{contact.interestLabel}</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {contact.interests.map((interest) => (
                  <label
                    key={interest}
                    className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-stone-200/60 bg-stone-50 px-4 text-sm font-medium text-stone-700 has-[:checked]:border-stone-900 has-[:checked]:bg-stone-900 has-[:checked]:text-white"
                  >
                    <input
                      type="radio"
                      name="interestedIn"
                      value={interest}
                      required
                      data-error={`${baseId}-interest-error`}
                      aria-invalid="false"
                      className="pf-contact-choice size-4 accent-current"
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </fieldset>
            <p id={`${baseId}-interest-error`} className="pf-contact-error -mt-3 text-sm font-medium text-destructive">
              {contact.interestError}
            </p>

            <div className="space-y-2">
              <label htmlFor={`${baseId}-message`} className="text-sm font-medium text-stone-500">
                {contact.messageLabel}
              </label>
              <textarea
                id={`${baseId}-message`}
                name="message"
                required
                minLength={10}
                rows={5}
                enterKeyHint="send"
                placeholder={contact.messagePlaceholder}
                aria-invalid="false"
                data-error={`${baseId}-message-error`}
                className={`${fieldClass} min-h-32 resize-y py-3`}
              />
              <p id={`${baseId}-message-error`} className="pf-contact-error text-sm font-medium text-destructive">
                {contact.messageError}
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-stone-900 px-4 text-sm font-semibold text-white hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              {contact.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
