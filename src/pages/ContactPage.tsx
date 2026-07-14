import { useState } from 'react'
import { Section } from '../components/Section'
import { SEO } from '../components/SEO'
import { siteConfig } from '../data/siteData'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <SEO title="Contact" description="Get in touch with APPLAKE PRIVATE LIMITED for product strategy, engineering, support, and digital transformation consultations." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s discuss your next digital product.</h1>
          <p className="mt-6 text-lg text-zinc-400">Share a few details about what you’re building and we’ll get back with a thoughtful next step.</p>
        </div>
      </section>

      <Section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
            <p className="mt-4 text-zinc-400">Email: <a href={`mailto:${siteConfig.email}`} className="text-pink-300">{siteConfig.email}</a></p>
            <p className="mt-4 text-zinc-400">Location: {siteConfig.location}</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-zinc-300">
                Name
                <input required className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 outline-none ring-0" />
              </label>
              <label className="text-sm text-zinc-300">
                Email
                <input type="email" required className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 outline-none ring-0" />
              </label>
              <label className="text-sm text-zinc-300">
                Company
                <input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 outline-none ring-0" />
              </label>
              <label className="text-sm text-zinc-300">
                Phone
                <input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 outline-none ring-0" />
              </label>
            </div>
            <label className="mt-4 block text-sm text-zinc-300">
              Message
              <textarea required rows={6} className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 outline-none ring-0" />
            </label>
            <button type="submit" className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-pink-500">Send Message</button>
            {submitted && <p className="mt-4 text-sm text-pink-300">Thanks! Your message has been captured.</p>}
          </form>
        </div>
      </Section>
    </div>
  )
}
