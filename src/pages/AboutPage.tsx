import { Section } from '../components/Section'
import { SEO } from '../components/SEO'
import { expertiseAreas, siteConfig } from '../data/siteData'

export function AboutPage() {
  return (
    <div>
      <SEO title="About" description="About APPLAKE PRIVATE LIMITED, including mission, vision, values, technology expertise, and development approach." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">About</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Building dependable digital products with clarity and care.</h1>
          <p className="mt-6 text-lg text-zinc-400">{siteConfig.companyName} is a technology company focused on building scalable mobile applications, web platforms, SaaS products, and enterprise software solutions.</p>
        </div>
      </section>

      <Section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Company Overview</h2>
            <p className="mt-4 text-zinc-400">We help startups and businesses transform ideas into reliable digital products through modern engineering practices, cloud technologies, and long-term technical support.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Mission</h2>
            <p className="mt-4 text-zinc-400">Empower businesses and individuals through innovative, scalable, and user-focused digital solutions.</p>
            <h2 className="mt-8 text-2xl font-semibold text-white">Vision</h2>
            <p className="mt-4 text-zinc-400">To become a globally trusted technology company known for building impactful digital platforms that improve everyday life.</p>
          </div>
        </div>
      </Section>

      <Section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Core Values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {['Innovation', 'Quality', 'Transparency', 'Reliability', 'Customer Success', 'Continuous Learning'].map((value) => (
            <div key={value} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{value}</h3>
              <p className="mt-3 text-sm text-zinc-400">A guiding principle behind how we design, build, and support digital products.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Technology Expertise</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {expertiseAreas.map((area) => (
            <div key={area.title} className="rounded-[1.5rem] border border-white/10 bg-zinc-900/80 p-6">
              <h3 className="text-lg font-semibold text-white">{area.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-white">Development Approach</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Launch & Support'].map((step) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{step}</h3>
                <p className="mt-3 text-sm text-zinc-400">A clear phase for understanding goals, shaping architecture, and moving products forward with confidence.</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
