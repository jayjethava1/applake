import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Section } from '../components/Section'
import { SEO } from '../components/SEO'
import { processSteps, reasons, services, siteConfig, techBadges } from '../data/siteData'

export function HomePage() {
  return (
    <div>
      <SEO title="Home" description="APPLAKE PRIVATE LIMITED builds scalable mobile applications, web platforms, SaaS products, and enterprise software solutions." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-sm text-pink-200">
            <Sparkles size={16} /> {siteConfig.tagline}
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Transforming Ideas Into Powerful Digital Products
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            We build scalable mobile applications, web platforms, SaaS products, and enterprise software solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3 font-medium text-white transition hover:bg-pink-500">
              Get Started <ArrowRight size={16} />
            </a>
            <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 font-medium text-zinc-200 transition hover:border-pink-500/40 hover:text-white">
              View Services
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-pink-500/30 via-transparent to-cyan-500/20 blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
              <p className="text-sm text-zinc-400">Delivery Focus</p>
              <p className="mt-3 text-2xl font-semibold text-white">Discovery, Planning, Development, Support</p>
              <div className="mt-8 grid gap-3">
                {['Discovery', 'Planning', 'Development', 'Launch & Support'].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="text-sm text-zinc-300">{item}</span>
                    <span className="text-xs text-zinc-500">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-3">
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap text-sm text-zinc-400">
            {techBadges.concat(techBadges).map((tech, index) => (
              <span key={`${tech}-${index}`} className="mr-10">{tech}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="services">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Focused digital services for modern teams</h2>
          </div>
          <p className="max-w-2xl text-zinc-400">We help businesses turn ideas into reliable digital products with modern engineering and long-term support.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <motion.article key={service.title} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/15 text-pink-300">
                <Sparkles size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{service.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-pink-400" />{benefit}</li>
                ))}
              </ul>
              <a href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-pink-300">Learn More <ArrowRight size={15} /></a>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Why Businesses Choose Modern Software Solutions</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Practical engineering for scalable digital products</h2>
              <p className="mt-4 max-w-xl text-zinc-400">The focus is on clear architecture, reliable implementation, and long-term product support.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-pink-500/20 bg-pink-500/10 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Featured Product</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">SAATHI</h2>
              <p className="mt-4 text-zinc-300">Status: Active Development</p>
              <p className="mt-4 text-zinc-400">A modern matrimonial and relationship platform focused on profile authenticity, privacy, communication, and intelligent matchmaking.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Verified Profiles', 'Smart Match Suggestions', 'Real-Time Chat', 'Privacy Controls'].map((feature) => (
                  <span key={feature} className="rounded-full border border-pink-500/20 bg-zinc-900/70 px-3 py-1 text-sm text-zinc-300">{feature}</span>
                ))}
              </div>
              <a href="/products" className="mt-8 inline-flex items-center gap-2 rounded-full border border-pink-500/40 px-5 py-3 text-sm font-medium text-pink-200 transition hover:bg-pink-500/20">Learn More <ArrowRight size={15} /></a>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-zinc-900/80 p-8">
              <div className="h-56 rounded-[1.25rem] border border-dashed border-white/15 bg-gradient-to-br from-zinc-800 to-zinc-950" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Process</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A disciplined path from idea to launch and support</h2>
          </div>
          <p className="max-w-2xl text-zinc-400">Every engagement is structured around discovery, planning, design, development, testing, and launch support.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-pink-300">0{index + 1}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">{step}</h3>
              <p className="mt-2 text-sm text-zinc-400">A clear milestone for dependable delivery and ongoing support.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-pink-500/20 bg-gradient-to-r from-pink-600/20 to-zinc-900 px-8 py-16 text-center lg:px-16">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Let’s build</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ready To Build Your Next Digital Product?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">Share your goals and we’ll help shape a reliable product path from concept to delivery.</p>
          <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 font-medium text-white transition hover:bg-pink-500">Contact Us <ArrowRight size={16} /></a>
        </div>
      </Section>
    </div>
  )
}
