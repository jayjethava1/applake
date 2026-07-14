import { Section } from '../components/Section'
import { SEO } from '../components/SEO'
import { futureProducts } from '../data/siteData'

export function ProductsPage() {
  return (
    <div>
      <SEO title="Products" description="SAATHI is APPLAKE PRIVATE LIMITED’s flagship product, currently in active development." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Products</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Focused product work for modern digital experiences.</h1>
          <p className="mt-6 text-lg text-zinc-400">The current flagship product is SAATHI, with future products to be shared as they are introduced.</p>
        </div>
      </section>

      <Section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-pink-500/20 bg-pink-500/10 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white">SAATHI</h2>
              <p className="mt-4 text-zinc-300">Status: Active Development</p>
              <p className="mt-4 text-zinc-400">A modern matrimonial and relationship platform designed to help people build meaningful connections through technology.</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                <li>• Verified Profiles</li>
                <li>• Smart Match Suggestions</li>
                <li>• Real-Time Chat</li>
                <li>• Privacy Controls</li>
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-zinc-900/80 p-8">
              <div className="h-56 rounded-[1.25rem] border border-dashed border-white/15 bg-gradient-to-br from-zinc-800 to-zinc-950" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Future Products</h2>
          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-zinc-400">
            {futureProducts[0]}
          </div>
        </div>
      </Section>
    </div>
  )
}
