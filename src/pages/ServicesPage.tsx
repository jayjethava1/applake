import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import { SEO } from '../components/SEO'
import { serviceDetails } from '../data/siteData'

export function ServicesPage() {
  return (
    <div>
      <SEO title="Services" description="Explore APPLAKE PRIVATE LIMITED services including mobile development, web development, software engineering, cloud solutions, and support." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Enterprise-grade services for building standout digital products.</h1>
          <p className="mt-6 text-lg text-zinc-400">We support teams at every stage from MVP to long-term growth with highly structured delivery and dedicated support.</p>
        </div>
      </section>

      <Section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {serviceDetails.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                  <p className="mt-4 text-zinc-400">{service.overview}</p>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">Benefits</h3>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                      {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-zinc-900/80 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">Technologies</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">{tech}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="mt-8 inline-flex rounded-full bg-pink-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-pink-500">{service.cta}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
