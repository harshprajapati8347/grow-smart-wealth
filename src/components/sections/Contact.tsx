import { contact } from "@/data/site"
import { ContactForm } from "@/components/sections/ContactForm"
import { Reveal } from "@/components/shared/Reveal"

const titleId = "contact-title"

export function Contact() {
  const action = `https://formcarry.com/s/${contact.formcarryId}`

  return (
    <section id="contact" aria-labelledby={titleId} className="scroll-mt-24 bg-white px-5 py-20 sm:px-6 sm:py-24 md:py-32">
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
          <ContactForm action={action} titleId={titleId} />
        </Reveal>
      </div>
    </section>
  )
}
