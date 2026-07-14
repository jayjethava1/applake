import { Section } from '../components/Section'
import { SEO } from '../components/SEO'

export function TermsPage() {
  return (
    <div>
      <SEO
        title="Terms & Conditions | SAATHI"
        description="Terms and conditions for SAATHI by APPLAKE PRIVATE LIMITED covering eligibility, account use, content rules, safety, subscriptions, liability, and dispute resolution."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Terms & Conditions</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">SAATHI Terms & Conditions</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            These Terms govern your use of SAATHI, the matrimonial and relationship platform operated by APPLAKE PRIVATE LIMITED. If you do not agree with these Terms, do not use the service.
          </p>
        </div>
      </section>

      <Section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <aside className="hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 text-zinc-300 lg:block lg:sticky lg:top-24">
            <div className="mb-8 rounded-3xl bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Contents</p>
              <nav className="mt-6 space-y-3 text-sm leading-7 text-zinc-300">
                <a href="#acceptance" className="block hover:text-white">Acceptance of Terms</a>
                <a href="#eligibility" className="block hover:text-white">Eligibility</a>
                <a href="#registration" className="block hover:text-white">Account Registration</a>
                <a href="#profiles" className="block hover:text-white">User Profiles</a>
                <a href="#conduct" className="block hover:text-white">User Conduct</a>
                <a href="#reporting" className="block hover:text-white">Reporting & Blocking</a>
                <a href="#safety" className="block hover:text-white">Safety & Responsibility</a>
                <a href="#offline-meetings" className="block hover:text-white">Offline Meetings</a>
                <a href="#outcomes" className="block hover:text-white">Matches & Outcomes</a>
                <a href="#messaging" className="block hover:text-white">Messaging & Communications</a>
                <a href="#ownership" className="block hover:text-white">Content Ownership</a>
                <a href="#intellectual-property" className="block hover:text-white">Intellectual Property</a>
                <a href="#subscriptions" className="block hover:text-white">Subscription & Paid Features</a>
                <a href="#force-majeure" className="block hover:text-white">Force Majeure</a>
                <a href="#data-scraping" className="block hover:text-white">Data Scraping</a>
                <a href="#profile-removal" className="block hover:text-white">Profile Removal</a>
                <a href="#feature-changes" className="block hover:text-white">Feature Changes</a>
                <a href="#inactive-accounts" className="block hover:text-white">Inactive Accounts</a>
                <a href="#termination" className="block hover:text-white">Suspension & Termination</a>
                <a href="#deletion" className="block hover:text-white">Account Deletion</a>
                <a href="#availability" className="block hover:text-white">Platform Availability</a>
                <a href="#third-party" className="block hover:text-white">Third-Party Services</a>
                <a href="#liability" className="block hover:text-white">Limitation of Liability</a>
                <a href="#indemnification" className="block hover:text-white">Indemnification</a>
                <a href="#privacy" className="block hover:text-white">Privacy Policy</a>
                <a href="#changes" className="block hover:text-white">Changes to Terms</a>
                <a href="#law" className="block hover:text-white">Governing Law</a>
                <a href="#contact" className="block hover:text-white">Contact Information</a>
              </nav>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Published by</p>
              <p className="mt-4 text-base font-semibold text-white">APPLAKE PRIVATE LIMITED</p>
              <p className="mt-3 text-sm text-zinc-400">Website: applake.in</p>
              <p className="mt-1 text-sm text-zinc-400">Email: techflakespvtltd@gmail.com</p>
            </div>
          </aside>

          <article className="space-y-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-zinc-300 shadow-2xl shadow-black/20 lg:p-10">
            <section id="acceptance" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
              <p className="text-zinc-400 leading-8">
                By accessing or using SAATHI, you agree to these Terms & Conditions and any updates we publish. If you do not agree with these Terms, you must stop using the service immediately.
              </p>
            </section>

            <section id="eligibility" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Eligibility</h2>
              <p className="text-zinc-400 leading-8">
                SAATHI is available only to individuals who are at least 18 years old and have legal capacity to enter into binding agreements. Users under 18 are strictly prohibited from using the platform.
              </p>
              <p className="text-zinc-400 leading-8">
                You must provide accurate and complete registration information and keep your account details current.</p>
            </section>

            <section id="registration" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Account Registration</h2>
              <p className="text-zinc-400 leading-8">
                You are responsible for maintaining accurate account information, protecting your login credentials, and updating your profile when necessary. All activity under your account is your responsibility.
              </p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <li>Maintain accurate registration and profile information.</li>
                <li>Keep login credentials secure and confidential.</li>
                <li>Update information if it changes or becomes inaccurate.</li>
                <li>Be liable for actions taken through your account.</li>
              </ul>
              <p className="text-zinc-400 leading-8">
                You may not create accounts on behalf of another person without proper authorization.</p>
            </section>

            <section id="profiles" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. User Profiles</h2>
              <p className="text-zinc-400 leading-8">
                You are responsible for the accuracy of the information you publish on your profile. SAATHI is designed for authentic connections, and misleading or false profiles undermine community trust.
              </p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <li>Do not create fake profiles.</li>
                <li>Do not misrepresent your identity.</li>
                <li>Do not use misleading personal information.</li>
                <li>Do not upload unauthorized or misleading photos.</li>
                <li>Do not impersonate another person.</li>
              </ul>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED reserves the right to remove profiles that violate these platform rules.</p>
            </section>

            <section id="conduct" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. User Conduct</h2>
              <p className="text-zinc-400 leading-8">
                Users must engage respectfully and avoid conduct that harms others or disrupts SAATHI’s operations.</p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <li>Do not harass, threaten, stalk, or abuse other users.</li>
                <li>Do not share hateful, abusive, or unlawful content.</li>
                <li>Do not create fake profiles, impersonate others, or misrepresent your identity.</li>
                <li>Do not promote matrimonial fraud, romance scams, financial scams, or any deceptive schemes.</li>
                <li>Do not send spam, bulk unsolicited messages, unauthorized advertising, or commercial solicitations.</li>
                <li>Do not use automated bots, scripts, data scraping, or reverse engineering to access or interact with SAATHI.</li>
                <li>Do not operate multiple fake accounts or attempt to evade account restrictions.</li>
                <li>Do not upload illegal, unauthorized, or misleading photos or content.</li>
                <li>Do not attempt to bypass platform filters, restrictions, or security measures.</li>
              </ul>
              <p className="text-zinc-400 leading-8">
                Violations may result in warnings, temporary suspension, permanent termination, or reporting to appropriate authorities when required to protect users or the platform.</p>
            </section>

            <section id="reporting" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Reporting and Blocking</h2>
              <p className="text-zinc-400 leading-8">
                SAATHI provides reporting and blocking tools so users can flag inappropriate behavior and protect themselves.</p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <li>Report inappropriate users or profiles.</li>
                <li>Report fake accounts, impersonation, harassment, and abuse.</li>
                <li>Report suspected matrimonial fraud, romance scams, or financial scams.</li>
                <li>Report unauthorized advertising, spam, or suspicious behavior.</li>
                <li>Block users who violate your privacy or safety.</li>
              </ul>
              <p className="text-zinc-400 leading-8">
                Reported activity may be reviewed by administrators, and APPLAKE PRIVATE LIMITED reserves the right to investigate and take action as needed, including suspension, account removal, or referral to authorities.</p>
            </section>

            <section id="safety" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Safety and User Responsibility</h2>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED does not conduct background checks unless explicitly stated in the service. Verification features are only supplemental and do not guarantee identity, intentions, or conduct.</p>
              <p className="text-zinc-400 leading-8">
                Users should exercise caution when sharing personal information, communicating with others, or meeting in person. SAATHI cannot guarantee the actions or intentions of other users.</p>
            </section>

            <section id="offline-meetings" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7.1 Offline Meetings and User Interactions</h2>
              <p className="text-zinc-400 leading-8">
                SAATHI is an online platform designed to facilitate introductions, communication, and connections between users. Any interaction, relationship, meeting, travel arrangement, financial transaction, gift exchange, or other activity that occurs outside the platform is solely between the involved users.
              </p>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED is not a party to any relationship, agreement, engagement, marriage, or arrangement between users and does not guarantee identity, intentions, character, conduct, compatibility, marital status, financial status, employment, education, family background, or the accuracy of any information provided by any user.
              </p>
              <p className="text-zinc-400 leading-8">
                Users are solely responsible for conducting their own due diligence before communicating with, meeting, or entering into any relationship or arrangement with another user. We strongly recommend verifying information independently, meeting in safe public locations, informing trusted people before in-person meetings, avoiding the sharing of sensitive financial or confidential information, and exercising caution if any user requests money, gifts, investments, travel assistance, or other financial support.
              </p>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED shall not be responsible for actions, conduct, misrepresentations, fraud, financial losses, emotional distress, personal disputes, relationship disputes, marriage outcomes, injury, property damage, or criminal activity arising from user interactions, whether online or offline.
              </p>
              <p className="text-zinc-400 leading-8">
                The platform provides reporting, blocking, moderation, and verification features to support safety, but these features do not constitute a guarantee of authenticity, safety, or user conduct.
              </p>
              <div className="rounded-3xl bg-zinc-950/80 p-6">
                <h3 className="text-xl font-semibold text-white">Financial Scam Warning</h3>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li>Never send money to another user.</li>
                  <li>Never share banking credentials, OTPs, UPI PINs, passwords, or financial information.</li>
                  <li>APPLAKE PRIVATE LIMITED is not responsible for losses arising from financial transactions between users.</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-zinc-950/80 p-6">
                <h3 className="text-xl font-semibold text-white">Background Verification Disclaimer</h3>
                <p className="mt-4 text-zinc-400 leading-7">
                  Profile verification confirms only the specific verification process offered by the platform. Verification is not a guarantee of identity, character, intentions, criminal history, marital status, employment, education, or financial standing.
                </p>
              </div>
            </section>

            <section id="outcomes" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Matches, Relationships, and Outcomes</h2>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED does not guarantee successful matches, relationships, engagements, marriages, compatibility, or any particular outcome between users. The platform only facilitates connections and communications.
              </p>
              <p className="text-zinc-400 leading-8">
                Information available on the platform does not constitute legal, financial, psychological, relationship, matrimonial, or professional advice.
              </p>
            </section>

            <section id="messaging" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">9. Messaging and Communications</h2>
              <p className="text-zinc-400 leading-8">
                You are responsible for the messages you send through SAATHI. Respectful communication is required at all times.</p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <li>Do not harass other users through messages.</li>
                <li>Do not send offensive, unlawful, or abusive content.</li>
                <li>Do not send unsolicited or spam messages.</li>
              </ul>
              <p className="text-zinc-400 leading-8">
                The platform may review communications when necessary for safety, abuse prevention, or compliance with legal obligations.</p>
            </section>

            <section id="ownership" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">10. Content Ownership</h2>
              <p className="text-zinc-400 leading-8">
                Users retain ownership of the content they upload, including profile details, photos, and messages.</p>
              <p className="text-zinc-400 leading-8">
                By uploading content, you grant SAATHI a limited license to display, store, and process that content to provide platform functionality.</p>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED does not claim ownership of user-generated content.</p>
            </section>

            <section id="intellectual-property" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">11. Intellectual Property</h2>
              <p className="text-zinc-400 leading-8">
                All platform assets remain the property of APPLAKE PRIVATE LIMITED, including logos, branding, software, design, source code, and website content.</p>
              <p className="text-zinc-400 leading-8">
                You may not copy, distribute, reverse engineer, or otherwise exploit platform assets without explicit permission.</p>
            </section>

            <section id="subscriptions" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">12. Subscription and Paid Features</h2>
              <p className="text-zinc-400 leading-8">
                Some SAATHI features may require payment or a subscription. Subscription terms, pricing, and billing details will be displayed before purchase.</p>
              <p className="text-zinc-400 leading-8">
                Pricing may change, and refunds are governed by applicable laws and the payment policies of the platform used to complete the purchase.</p>
            </section>

            <section id="force-majeure" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">13. Force Majeure</h2>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED shall not be liable for delays or failures in performance caused by events beyond our reasonable control, including natural disasters, government restrictions, internet outages, cyber incidents, infrastructure failures, or other force majeure events.
              </p>
            </section>

            <section id="data-scraping" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">14. Data Scraping and Automated Access</h2>
              <p className="text-zinc-400 leading-8">
                Users may not scrape, crawl, collect, or store profile information or other platform data using automated means, bots, scripts, or external tools. Unauthorized collection of user data or platform content is prohibited.
              </p>
            </section>

            <section id="profile-removal" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">15. Profile Content Removal Rights</h2>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED reserves the right to remove, restrict, or hide usernames, profile photos, content, or other information that violates platform policies, community standards, or legal requirements.
              </p>
            </section>

            <section id="feature-changes" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">16. Platform Feature Changes</h2>
              <p className="text-zinc-400 leading-8">
                Features, services, subscriptions, and platform functionality may be modified, suspended, or discontinued at any time, with or without notice, in our discretion.
              </p>
            </section>

            <section id="inactive-accounts" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">17. Inactive Accounts</h2>
              <p className="text-zinc-400 leading-8">
                Accounts that remain inactive for an extended period may be archived, restricted, or removed, subject to applicable law and platform policies.
              </p>
            </section>

            <section id="termination" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">18. Account Suspension and Termination</h2>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED may suspend or terminate accounts for fraud, harassment, abuse, fake profiles, spam, illegal activity, or other violations of these Terms.</p>
              <p className="text-zinc-400 leading-8">
                Termination may occur without prior notice when necessary to protect users or the platform.</p>
            </section>

            <section id="deletion" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">19. Account Deletion</h2>
              <p className="text-zinc-400 leading-8">
                Users may request account deletion by emailing <a href="mailto:techflakespvtltd@gmail.com" className="text-pink-300 hover:text-pink-200">techflakespvtltd@gmail.com</a>.</p>
              <p className="text-zinc-400 leading-8">
                Certain records may be retained where required by law, for security, or for fraud prevention purposes.</p>
            </section>

            <section id="availability" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">20. Platform Availability</h2>
              <p className="text-zinc-400 leading-8">
                SAATHI is provided on an "as available" basis. We do not guarantee uninterrupted service, error-free operation, or continuous availability.</p>
              <p className="text-zinc-400 leading-8">
                Maintenance, updates, or technical interruptions may occur from time to time.</p>
            </section>

            <section id="third-party" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">21. Third-Party Services</h2>
              <p className="text-zinc-400 leading-8">
                SAATHI may rely on third-party cloud hosting, analytics services, communication providers, and infrastructure vendors.</p>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED is not responsible for the availability, policies, or practices of third-party service providers.</p>
            </section>

            <section id="liability" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">22. Limitation of Liability</h2>
              <p className="text-zinc-400 leading-8">
                To the maximum extent permitted by law, APPLAKE PRIVATE LIMITED will not be liable for losses resulting from user conduct, user interactions, meetings between users, indirect damages, consequential damages, lost profits, or data loss.</p>
              <p className="text-zinc-400 leading-8">
                This limitation applies even if we have been advised of the possibility of such damages.</p>
            </section>

            <section id="indemnification" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">23. Indemnification</h2>
              <p className="text-zinc-400 leading-8">
                You agree to indemnify and hold APPLAKE PRIVATE LIMITED harmless from claims arising from your violation of these Terms, illegal conduct, user-generated content, or misuse of the platform.</p>
            </section>

            <section id="privacy" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">24. Privacy Policy</h2>
              <p className="text-zinc-400 leading-8">
                Your use of SAATHI is also governed by our Privacy Policy. Please review the Privacy Policy for details on how we collect, use, and protect personal information.</p>
            </section>

            <section id="changes" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">25. Changes to Terms</h2>
              <p className="text-zinc-400 leading-8">
                We may update these Terms periodically. Continued use of SAATHI after changes indicates acceptance of the revised Terms.</p>
            </section>

            <section id="law" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">26. Governing Law</h2>
              <p className="text-zinc-400 leading-8">
                These Terms are governed by the laws of India. Any disputes will be subject to the applicable courts and legal jurisdiction in India.</p>
            </section>

            <section id="contact" className="space-y-4 rounded-3xl border border-pink-500/20 bg-zinc-950/80 p-6">
              <h2 className="text-2xl font-semibold text-white">27. Contact Information</h2>
              <p className="text-zinc-400 leading-8">APPLAKE PRIVATE LIMITED</p>
              <p className="text-zinc-400 leading-8">Website: <a href="https://applake.in" className="text-pink-300 hover:text-pink-200">https://applake.in</a></p>
              <p className="text-zinc-400 leading-8">Email: <a href="mailto:techflakespvtltd@gmail.com" className="text-pink-300 hover:text-pink-200">techflakespvtltd@gmail.com</a></p>
              <p className="text-zinc-400 leading-8">For questions related to these Terms, safety concerns, or account management, please use the contact details above.</p>
            </section>
          </article>
        </div>
      </Section>
    </div>
  )
}
