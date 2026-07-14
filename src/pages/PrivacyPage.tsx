import { Section } from '../components/Section'
import { SEO } from '../components/SEO'

export function PrivacyPage() {
  return (
    <div>
      <SEO title="Privacy Policy" description="Privacy policy for SAATHI, including information collection, user data, cookies, security, user rights, and account deletion." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Privacy Policy</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Privacy Policy for SAATHI</h1>
          <p className="mt-6 text-lg text-zinc-400">This Privacy Policy describes how SAATHI collects, uses, stores, and protects user information in accordance with applicable privacy and Google Play requirements.</p>
        </div>
      </section>

      <Section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-zinc-300">
          <div>
            <h2 className="text-xl font-semibold text-white">Information Collection</h2>
            <p className="mt-3 text-zinc-400">We collect account information, profile data, device and usage information, and communications needed to operate the SAATHI experience responsibly.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">User Data</h2>
            <p className="mt-3 text-zinc-400">User data is used to provide matchmaking, chat, profile management, and account functionality. We do not sell personal data to third parties.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Cookies</h2>
            <p className="mt-3 text-zinc-400">We may use analytics and session cookies to improve performance, remember user preferences, and maintain secure sessions.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Security</h2>
            <p className="mt-3 text-zinc-400">We use reasonable administrative, technical, and physical safeguards to protect personal data from unauthorized access or disclosure.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">User Rights</h2>
            <p className="mt-3 text-zinc-400">Users can request access, correction, or deletion of their data, and may manage notification and privacy preferences within the app.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Account Deletion</h2>
            <p className="mt-3 text-zinc-400">Users may request account deletion by contacting us. We will process such requests in a reasonable timeframe.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-3 text-zinc-400">For privacy requests, please contact us at techflakespvtltd@gmail.com.</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
