import { Section } from '../components/Section'
import { SEO } from '../components/SEO'

export function TermsPage() {
  return (
    <div>
      <SEO title="Terms & Conditions" description="Terms and conditions for SAATHI, including acceptable use, content rules, subscriptions, and liability limitations." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Terms & Conditions</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Terms and Conditions for SAATHI</h1>
          <p className="mt-6 text-lg text-zinc-400">These terms govern your use of the SAATHI platform and related services. By using the application, you agree to these terms.</p>
        </div>
      </section>

      <Section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-zinc-300">
          <div>
            <h2 className="text-xl font-semibold text-white">User Responsibilities</h2>
            <p className="mt-3 text-zinc-400">You are responsible for keeping your account credentials secure and for all activities under your account.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Acceptable Use</h2>
            <p className="mt-3 text-zinc-400">You agree not to misuse the app, post unlawful content, or attempt to interfere with the platform or its users.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Content Rules</h2>
            <p className="mt-3 text-zinc-400">Users must not share misleading, abusive, hateful, or harmful content. We reserve the right to remove content that violates these rules.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Subscription Terms</h2>
            <p className="mt-3 text-zinc-400">Any paid features are subject to the pricing and billing terms described in the app or associated agreements.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
            <p className="mt-3 text-zinc-400">To the extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from use of the service.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Termination</h2>
            <p className="mt-3 text-zinc-400">We may suspend or terminate access for users who violate these terms or engage in abuse of the platform.</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
