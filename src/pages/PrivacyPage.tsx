import { Section } from '../components/Section'
import { SEO } from '../components/SEO'
import { useCallback } from 'react'

export function PrivacyPage() {
  const scrollToId = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div>
      <SEO
        title="Privacy Policy | SAATHI"
        description="Privacy policy for APPLAKE PRIVATE LIMITED SAATHI platform covering data collection, user controls, safety tools, account deletion, and security."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Privacy Policy</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">SAATHI Privacy Policy</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            APPLAKE PRIVATE LIMITED operates the SAATHI matrimonial and relationship platform with a focus on trust, safety, and transparent handling of personal information.
          </p>
        </div>
      </section>

      <Section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <aside className="hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 text-zinc-300 lg:block lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-4">
            <div className="mb-8 rounded-3xl bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Contents</p>
              <nav className="mt-6 space-y-3 text-sm leading-7 text-zinc-300">
                  <a href="#introduction" onClick={(e) => scrollToId(e, 'introduction')} className="block hover:text-white">Introduction</a>
                  <a href="#information" onClick={(e) => scrollToId(e, 'information')} className="block hover:text-white">Information We Collect</a>
                  <a href="#how-we-use" onClick={(e) => scrollToId(e, 'how-we-use')} className="block hover:text-white">How We Use Information</a>
                  <a href="#profile-visibility" onClick={(e) => scrollToId(e, 'profile-visibility')} className="block hover:text-white">Profile Visibility</a>
                  <a href="#user-photos" onClick={(e) => scrollToId(e, 'user-photos')} className="block hover:text-white">User Photos</a>
                  <a href="#data-sharing" onClick={(e) => scrollToId(e, 'data-sharing')} className="block hover:text-white">Data Sharing</a>
                  <a href="#data-retention" onClick={(e) => scrollToId(e, 'data-retention')} className="block hover:text-white">Data Retention</a>
                  <a href="#account-deletion" onClick={(e) => scrollToId(e, 'account-deletion')} className="block hover:text-white">Account Deletion</a>
                  <a href="#security" onClick={(e) => scrollToId(e, 'security')} className="block hover:text-white">Security</a>
                  <a href="#children" onClick={(e) => scrollToId(e, 'children')} className="block hover:text-white">Children's Privacy</a>
                  <a href="#third-party" onClick={(e) => scrollToId(e, 'third-party')} className="block hover:text-white">Third-Party Services</a>
                  <a href="#additional-practices" onClick={(e) => scrollToId(e, 'additional-practices')} className="block hover:text-white">Additional Privacy Practices</a>
                  <a href="#changes" onClick={(e) => scrollToId(e, 'changes')} className="block hover:text-white">Changes To This Policy</a>
                  <a href="#safety" onClick={(e) => scrollToId(e, 'safety')} className="block hover:text-white">Safety & Reporting</a>
                  <a href="#contact" onClick={(e) => scrollToId(e, 'contact')} className="block hover:text-white">Contact Information</a>
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
            <section id="introduction" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Introduction</h2>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED operates SAATHI, a matrimonial and relationship platform designed for adults seeking meaningful connections. This Privacy Policy explains how we collect, use, disclose, and protect personal information when people use the SAATHI website and mobile application.
              </p>
              <p className="text-zinc-400 leading-8">
                We are committed to giving users clear control over their data, maintaining secure platform operations, and supporting safe interactions across profile discovery, matchmaking, and communication tools.
              </p>
            </section>

            <section id="information" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
              <p className="text-zinc-400 leading-8">
                SAATHI collects information needed to create profiles, deliver matchmaking services, operate features, and keep the platform secure.
              </p>

              <div className="space-y-5 rounded-3xl bg-zinc-950/80 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">Account Information</h3>
                  <ul className="mt-4 space-y-2 text-zinc-400">
                    <li>Name</li>
                    <li>Gender</li>
                    <li>Date of Birth</li>
                    <li>Profile Information</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Photos uploaded by users</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Profile Information</h3>
                  <ul className="mt-4 space-y-2 text-zinc-400">
                    <li>Bio and personal introduction</li>
                    <li>Preferences for relationships and matchmaking</li>
                    <li>Relationship and matrimonial details</li>
                    <li>Location details voluntarily provided by users</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Usage Information</h3>
                  <ul className="mt-4 space-y-2 text-zinc-400">
                    <li>App interactions and feature usage</li>
                    <li>Device model, operating system, and app version</li>
                    <li>Log data and diagnostic information</li>
                    <li>Errors, performance metrics, and security events</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="how-we-use" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">How We Use Information</h2>
              <p className="text-zinc-400 leading-8">
                We use information to operate SAATHI, improve the experience, protect the community, and communicate updates.
              </p>
              <ul className="mt-4 space-y-3 text-zinc-400">
                <li>Create and manage user accounts.</li>
                <li>Provide matchmaking functionality and profile recommendations.</li>
                <li>Improve user experience through product updates and feature development.</li>
                <li>Maintain platform security and prevent abuse.</li>
                <li>Detect fraud, fake accounts, spam, and suspicious activity.</li>
                <li>Communicate service updates, safety notices, and support replies.</li>
                <li>Provide customer support and respond to moderation requests.</li>
              </ul>
            </section>

            <section id="profile-visibility" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Profile Visibility</h2>
              <p className="text-zinc-400 leading-8">
                Certain profile information may be visible to other users in SAATHI’s discovery and matchmaking views. Users control most profile fields and may choose which details to share publicly.
              </p>
              <p className="text-zinc-400 leading-8">
                Avoid sharing sensitive personal information in profile fields or public profile content. Information visible to other members should be limited to what is necessary for authentic and respectful connection building.
              </p>
            </section>

            <section id="user-photos" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">User Photos</h2>
              <p className="text-zinc-400 leading-8">
                Photos uploaded by users are stored and processed to support core platform functionality such as profile creation and identity verification features.
              </p>
              <p className="text-zinc-400 leading-8">
                Users retain ownership of their uploaded content. Photos can be removed through account settings, and we will delete or disable access to those files when an account is closed or when the user requests removal.</p>
            </section>

            <section id="data-sharing" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Data Sharing</h2>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED does not sell personal information.
              </p>
              <p className="text-zinc-400 leading-8">
                We may share information only when necessary to operate SAATHI, to comply with legal obligations, or to protect safety and security.
              </p>
              <ul className="mt-4 space-y-3 text-zinc-400">
                <li>With service providers necessary to operate the platform.</li>
                <li>To comply with law, regulation, or valid legal process.</li>
                <li>To protect platform safety, investigate abuse, and enforce platform policies.</li>
              </ul>
            </section>

            <section id="data-retention" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Data Retention</h2>
              <p className="text-zinc-400 leading-8">
                We retain personal data for as long as necessary to provide the SAATHI services, maintain account security, protect the community, and comply with applicable legal and operational requirements.
              </p>
              <p className="text-zinc-400 leading-8">
                If an account becomes inactive, we may notify the user and, after a reasonable period of inactivity, deactivate the account. If the account is not reactivated within the stated period, we may delete or anonymize the account data, unless we are required to keep certain records for legal, fraud-prevention, dispute-resolution, or security purposes.
              </p>
            </section>

            <section id="account-deletion" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Account Deletion</h2>
              <p className="text-zinc-400 leading-8">
                Users may request account deletion at any time by emailing <a href="mailto:techflakespvtltd@gmail.com" className="text-pink-300 hover:text-pink-200">techflakespvtltd@gmail.com</a>.
              </p>
              <p className="text-zinc-400 leading-8">
                We will begin processing verified deletion requests promptly and, where no legal or security exception applies, complete deletion or anonymization within a reasonable period after confirmation, typically within 30 days. For inactive accounts, we may also deactivate the account after extended inactivity and later remove or anonymize data if the account is not reactivated.
              </p>
            </section>

            <section id="security" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Security</h2>
              <p className="text-zinc-400 leading-8">
                We use reasonable technical and organizational measures to protect user information from unauthorized access, disclosure, or misuse.
              </p>
              <p className="text-zinc-400 leading-8">
                No system is completely secure, and while we work to safeguard data, users should also protect their account credentials and report suspicious activity immediately.
              </p>
            </section>

            <section id="children" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Children's Privacy</h2>
              <p className="text-zinc-400 leading-8">
                SAATHI is intended only for adults and is not directed to children under 18 years of age.
              </p>
              <p className="text-zinc-400 leading-8">
                We do not knowingly collect personal information from children under 18. If we learn that a child has provided information without parental consent, we will take steps to delete that information promptly.</p>
            </section>

            <section id="third-party" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Third-Party Services</h2>
              <p className="text-zinc-400 leading-8">
                SAATHI may use third-party services such as hosting providers, analytics providers, and cloud infrastructure providers.
              </p>
              <p className="text-zinc-400 leading-8">
                These service providers process data only as needed to support the platform and operate under their own privacy practices.
              </p>
            </section>

            <section id="additional-practices" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Additional Privacy and Safety Practices</h2>
              <div className="space-y-5 rounded-3xl bg-zinc-950/80 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">Data Portability and User Rights</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    Users may request access to their personal information, request correction of inaccurate information, request deletion of their account, or ask for information about how their data is processed. We will respond to such requests in accordance with applicable law.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Cross-Border Data Processing</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    User information may be processed and stored on servers located in different countries depending on our infrastructure, service providers, and operational needs. Such transfers are carried out in accordance with applicable privacy requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Cookies and Similar Technologies</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    The website may use essential cookies, security cookies, and analytics or functionality cookies to support secure access, performance monitoring, and user experience improvements. Users may manage browser settings related to cookies where supported.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Security Incident Notification</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    In the event of a significant security incident affecting user information, APPLAKE PRIVATE LIMITED may notify affected users and take appropriate corrective measures as required by applicable law.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Law Enforcement and Legal Requests</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    We may disclose user information when required by law, court order, legal process, or governmental authority, or where necessary to protect the rights, safety, or property of users or the platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Automated Moderation and Abuse Detection</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    The platform may use automated systems and review tools to detect spam, fraud, fake profiles, abusive behavior, or violations of platform policies. These systems support safety and moderation efforts but do not replace human review where necessary.
                  </p>
                </div>
              </div>
            </section>

            <section id="safety" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Safety, Reporting, and Platform Conduct</h2>
              <p className="text-zinc-400 leading-8">
                SAATHI provides tools to help users report inappropriate content, harassment, fake accounts, fraud, or suspicious behavior. Reports may be reviewed by authorized administrators or moderators to maintain platform safety.</p>

              <div className="space-y-5 rounded-3xl bg-zinc-950/80 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">Reporting and Safety Features</h3>
                  <ul className="mt-4 space-y-2 text-zinc-400">
                    <li>Report inappropriate profiles.</li>
                    <li>Report harassment, abuse, or fake accounts.</li>
                    <li>Report fraudulent or suspicious activity.</li>
                    <li>Report content that violates platform rules.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">User Blocking</h3>
                  <ul className="mt-4 space-y-2 text-zinc-400">
                    <li>Users may block other users at any time.</li>
                    <li>Blocking may restrict communication between accounts.</li>
                    <li>Blocked users may lose access to certain profile information.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Fraud Prevention and Abuse Detection</h3>
                  <ul className="mt-4 space-y-2 text-zinc-400">
                    <li>Detect fake accounts, spam, impersonation, and suspicious behavior.</li>
                    <li>Investigate reports and enforce platform policies.</li>
                    <li>Use automated systems and manual review to identify potential abuse.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">User Generated Content</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    Users are responsible for content they upload, including profile information, photos, messages, and other shared content. Avoid sharing sensitive personal information publicly.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Moderation</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    SAATHI may review, restrict, remove, or take action against content or accounts that violate platform rules, involve harassment, promote illegal activity, mislead others, or threaten platform safety.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Verification Features</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    Where verification features are offered, submitted information may be reviewed solely for verification and security purposes. Verification does not guarantee authenticity, intentions, or conduct, and users should exercise judgment.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Messaging and Communications</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    Messages exchanged between users may be processed and stored to deliver platform functionality, investigate abuse reports, prevent spam, and maintain security. Private communications are not sold to third parties.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">User Responsibilities</h3>
                  <ul className="mt-4 space-y-2 text-zinc-400">
                    <li>Maintain account security and protect login credentials.</li>
                    <li>Provide accurate information.</li>
                    <li>Respect other users and comply with applicable laws.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Safety Disclaimer</h3>
                  <p className="mt-4 text-zinc-400 leading-7">
                    While SAATHI provides reporting, blocking, moderation, and account controls, no online platform can guarantee the conduct or intentions of users. Exercise caution when sharing personal information or meeting people in person.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Community Standards</h3>
                  <ul className="mt-4 space-y-2 text-zinc-400">
                    <li>Do not harass other users.</li>
                    <li>Do not share abusive or unlawful content.</li>
                    <li>Do not create fake profiles or impersonate others.</li>
                    <li>Do not engage in fraudulent activity.</li>
                  </ul>
                  <p className="mt-4 text-zinc-400 leading-7">
                    Violations may result in warnings, restrictions, suspension, or permanent account termination.</p>
                </div>
              </div>
            </section>

            <section id="changes" className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Changes To This Policy</h2>
              <p className="text-zinc-400 leading-8">
                We may update this policy from time to time. The latest version will always be available at https://applake.in and within the SAATHI application.
              </p>
              <p className="text-zinc-400 leading-8">
                When changes are material, we will notify users through the app or by email when practicable.
              </p>
            </section>

            <section id="contact" className="space-y-4 rounded-3xl border border-pink-500/20 bg-zinc-950/80 p-6">
              <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
              <p className="text-zinc-400 leading-8">
                APPLAKE PRIVATE LIMITED
              </p>
              <p className="text-zinc-400 leading-8">
                Email: <a href="mailto:techflakespvtltd@gmail.com" className="text-pink-300 hover:text-pink-200">techflakespvtltd@gmail.com</a>
              </p>
              <p className="text-zinc-400 leading-8">
                Website: <a href="https://applake.in" className="text-pink-300 hover:text-pink-200">https://applake.in</a>
              </p>
              <p className="text-zinc-400 leading-8">
                For privacy, safety, account deletion, or legal requests, please contact us at the email address above.
              </p>
            </section>
          </article>
        </div>
      </Section>
    </div>
  )
}
