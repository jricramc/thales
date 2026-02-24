import Link from "next/link";
import { TrendingUp, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Thales",
  description:
    "Thales Privacy Policy. Learn how we collect, use, and protect your financial data.",
};

const LAST_UPDATED = "February 24, 2025";
const CONTACT_EMAIL = "privacy@mythales.co";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "how-we-do-not-use", title: "4. What We Do Not Do With Your Data" },
  { id: "plaid", title: "5. Plaid and Financial Data Access" },
  { id: "data-security", title: "6. Data Security" },
  { id: "data-retention", title: "7. Data Retention" },
  { id: "your-rights", title: "8. Your Rights and Choices" },
  { id: "children", title: "9. Children's Privacy" },
  { id: "third-parties", title: "10. Third-Party Links and Services" },
  { id: "changes", title: "11. Changes to This Policy" },
  { id: "contact", title: "12. Contact Us" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Thales
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">
          {/* Sidebar table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Contents
              </p>
              <nav className="flex flex-col gap-1.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5 leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="min-w-0">
            {/* Title block */}
            <div className="mb-12 pb-8 border-b border-border">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                Legal
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-sm">
                Effective date:{" "}
                <span className="text-foreground font-medium">
                  {LAST_UPDATED}
                </span>
              </p>
            </div>

            <div className="prose-legal">
              {/* 1 */}
              <Section id="introduction" title="1. Introduction">
                <p>
                  Thales (&quot;Thales,&quot; &quot;we,&quot; &quot;us,&quot;
                  or &quot;our&quot;) operates a personal finance management
                  platform that provides users with personalized financial
                  insights, analytics, and recommendations. This Privacy Policy
                  describes how we collect, use, disclose, and safeguard your
                  information when you use our services (the
                  &quot;Services&quot;).
                </p>
                <p>
                  By using our Services, you agree to the collection and use of
                  information in accordance with this policy. If you do not
                  agree with the terms of this policy, please do not access the
                  Services.
                </p>
                <p>
                  Our core principle is simple:{" "}
                  <strong>
                    your financial data belongs to you and is used only to
                    deliver the functionality you explicitly request.
                  </strong>{" "}
                  We do not sell your data, use it for advertising, or share it
                  with any third party for commercial purposes.
                </p>
              </Section>

              {/* 2 */}
              <Section
                id="information-we-collect"
                title="2. Information We Collect"
              >
                <Subheading>a. Information You Provide Directly</Subheading>
                <p>
                  When you create an account, we collect information such as
                  your name, email address, and any preferences you configure
                  within the Services (e.g., financial goals, budget
                  categories).
                </p>

                <Subheading>
                  b. Financial Data Accessed Through Plaid
                </Subheading>
                <p>
                  To provide financial insights, we integrate with Plaid
                  Technologies, Inc. (&quot;Plaid&quot;), a leading financial
                  data infrastructure provider. Through Plaid, we may receive
                  the following categories of financial data from your connected
                  accounts:
                </p>
                <ul>
                  <li>
                    Account balances and account identifiers (e.g., last four
                    digits of account numbers)
                  </li>
                  <li>Transaction history, including amount, date, and merchant</li>
                  <li>Account type and institution name</li>
                  <li>
                    Income and payroll data (only if you explicitly enable such
                    features)
                  </li>
                </ul>
                <Callout>
                  <strong>
                    Thales never receives, stores, or has access to your bank
                    login credentials (username, password, or security
                    questions).
                  </strong>{" "}
                  All authentication with your financial institution is handled
                  exclusively by Plaid through their secure, encrypted
                  infrastructure.
                </Callout>

                <Subheading>c. Usage and Technical Data</Subheading>
                <p>
                  We may automatically collect certain technical information
                  when you interact with the Services, including:
                </p>
                <ul>
                  <li>IP address and approximate geographic location</li>
                  <li>Browser type, operating system, and device identifiers</li>
                  <li>Pages visited, features used, and interaction timestamps</li>
                  <li>
                    Error logs and crash reports to improve Service reliability
                  </li>
                </ul>
              </Section>

              {/* 3 */}
              <Section id="how-we-use" title="3. How We Use Your Information">
                <p>
                  We use the information we collect solely to provide, maintain,
                  and improve the Services you have requested. Specifically, we
                  use your information to:
                </p>
                <ul>
                  <li>
                    Generate personalized financial insights, spending summaries,
                    and budget analytics
                  </li>
                  <li>
                    Deliver AI-driven recommendations relevant to your stated
                    financial goals
                  </li>
                  <li>
                    Send account-related notifications and alerts (e.g., unusual
                    spending, low balances)
                  </li>
                  <li>
                    Authenticate your identity and manage your account security
                  </li>
                  <li>
                    Diagnose technical issues and improve Service performance
                  </li>
                  <li>Comply with applicable laws and legal obligations</li>
                </ul>
                <p>
                  We process your financial data only to the minimum extent
                  necessary to provide the features you use.
                </p>
              </Section>

              {/* 4 */}
              <Section
                id="how-we-do-not-use"
                title="4. What We Do Not Do With Your Data"
              >
                <p>
                  We want to be unambiguous about the limits on how your data is
                  used. Thales expressly commits to the following:
                </p>
                <ul>
                  <li>
                    <strong>We do not sell your personal or financial data</strong>{" "}
                    to any third party under any circumstances.
                  </li>
                  <li>
                    <strong>
                      We do not share your data with advertisers or data brokers.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      We do not use your financial data for targeted advertising,
                    </strong>{" "}
                    behavioral profiling, or any commercial purpose other than
                    delivering the Services.
                  </li>
                  <li>
                    <strong>
                      We do not train general-purpose AI models on your personal
                      financial data
                    </strong>{" "}
                    without your explicit, informed consent.
                  </li>
                  <li>
                    <strong>
                      We do not access your full account numbers, routing numbers,
                      or login credentials.
                    </strong>{" "}
                    This information is never transmitted to Thales systems.
                  </li>
                </ul>
              </Section>

              {/* 5 */}
              <Section
                id="plaid"
                title="5. Plaid and Financial Data Access"
              >
                <p>
                  Thales uses Plaid to establish a read-only connection to your
                  financial accounts. &quot;Read-only&quot; means that Thales
                  and Plaid can retrieve account information and transaction
                  data on your behalf, but{" "}
                  <strong>
                    cannot initiate transactions, move funds, or modify your
                    accounts in any way.
                  </strong>
                </p>
                <p>
                  When you connect a financial account through Thales, you are
                  subject to Plaid&apos;s End User Privacy Policy, available at{" "}
                  <a
                    href="https://plaid.com/legal/#end-user-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    plaid.com/legal
                  </a>
                  . Plaid maintains independent security certifications and
                  operates under its own privacy framework.
                </p>
                <Callout>
                  You may revoke Thales&apos;s access to your financial accounts
                  at any time by disconnecting your accounts within the
                  application or directly through your Plaid portal at{" "}
                  <a
                    href="https://my.plaid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    my.plaid.com
                  </a>
                  . Upon revocation, we will cease retrieving new data from the
                  disconnected account.
                </Callout>
              </Section>

              {/* 6 */}
              <Section id="data-security" title="6. Data Security">
                <p>
                  We implement and maintain industry-standard technical and
                  organizational measures designed to protect your information
                  against unauthorized access, alteration, disclosure, or
                  destruction. These measures include:
                </p>
                <ul>
                  <li>
                    Encryption of data in transit using TLS 1.2 or higher
                  </li>
                  <li>
                    Encryption of sensitive data at rest using AES-256 or
                    equivalent standards
                  </li>
                  <li>
                    Role-based access controls limiting data access to
                    authorized personnel with a documented business need
                  </li>
                  <li>
                    Regular security assessments and vulnerability management
                    practices
                  </li>
                  <li>
                    Audit logging of data access to detect and investigate
                    anomalous activity
                  </li>
                </ul>
                <p>
                  No method of electronic storage or transmission over the
                  internet is 100% secure. While we employ commercially
                  reasonable security practices, we cannot guarantee absolute
                  security. In the event of a data breach that affects your
                  rights, we will notify you as required by applicable law.
                </p>
              </Section>

              {/* 7 */}
              <Section id="data-retention" title="7. Data Retention">
                <p>
                  We retain your personal and financial data for as long as your
                  account remains active or as necessary to provide the
                  Services. Upon account deletion:
                </p>
                <ul>
                  <li>
                    We will delete or anonymize your personal information within
                    30 days of your deletion request, except where retention is
                    required by law.
                  </li>
                  <li>
                    Aggregated, non-identifiable analytics data may be retained
                    for internal product analysis.
                  </li>
                  <li>
                    Backup copies may persist for up to 90 days in encrypted
                    storage before permanent deletion.
                  </li>
                </ul>
                <p>
                  To request deletion of your account and associated data,
                  contact us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </Section>

              {/* 8 */}
              <Section id="your-rights" title="8. Your Rights and Choices">
                <p>
                  Depending on your state of residence, you may have certain
                  rights with respect to your personal information under
                  applicable US privacy laws (including the California Consumer
                  Privacy Act, as amended by the CPRA). These rights may
                  include:
                </p>
                <ul>
                  <li>
                    <strong>Right to Access:</strong> The right to request a
                    copy of the personal information we hold about you.
                  </li>
                  <li>
                    <strong>Right to Deletion:</strong> The right to request
                    that we delete your personal information, subject to certain
                    legal exceptions.
                  </li>
                  <li>
                    <strong>Right to Correction:</strong> The right to request
                    that we correct inaccurate personal information.
                  </li>
                  <li>
                    <strong>Right to Opt-Out of Sale:</strong> We do not sell
                    your personal information. This right is therefore
                    inapplicable, but we honor it categorically.
                  </li>
                  <li>
                    <strong>Right to Non-Discrimination:</strong> We will not
                    discriminate against you for exercising your privacy rights.
                  </li>
                </ul>
                <p>
                  To exercise any of the above rights, please contact us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  . We will respond within 45 days as required by applicable
                  law.
                </p>
              </Section>

              {/* 9 */}
              <Section id="children" title="9. Children's Privacy">
                <p>
                  The Services are not directed to individuals under the age of
                  18. We do not knowingly collect personal information from
                  children under 18. If we become aware that we have
                  inadvertently collected information from a minor, we will take
                  prompt steps to delete such information. If you believe a
                  minor has provided us with personal information, please
                  contact us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </Section>

              {/* 10 */}
              <Section
                id="third-parties"
                title="10. Third-Party Links and Services"
              >
                <p>
                  The Services may contain links to third-party websites or
                  integrate with services other than Plaid (e.g., authentication
                  providers). This Privacy Policy does not apply to those
                  third-party services. We encourage you to review the privacy
                  policies of any third-party services you access through or in
                  connection with the Services.
                </p>
                <p>
                  We are not responsible for the privacy practices of
                  third-party services and do not control how those services
                  collect or use your information.
                </p>
              </Section>

              {/* 11 */}
              <Section id="changes" title="11. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, or legal requirements.
                  We will provide notice of material changes by updating the
                  &quot;Effective date&quot; at the top of this page and, where
                  required by law, by sending you an email notification.
                </p>
                <p>
                  Your continued use of the Services after any modification to
                  this Privacy Policy constitutes your acceptance of the updated
                  terms.
                </p>
              </Section>

              {/* 12 */}
              <Section id="contact" title="12. Contact Us">
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us
                  at:
                </p>
                <div className="mt-4 p-5 rounded-xl border border-border bg-muted/50 text-sm leading-loose">
                  <strong className="text-foreground">Thales</strong>
                  <br />
                  Attn: Privacy
                  <br />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </Section>
            </div>

            {/* Bottom nav */}
            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to home
              </Link>
              <Link
                href="/terms"
                className="text-sm text-primary hover:underline underline-offset-2"
              >
                Read our Terms of Service →
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-display text-base font-semibold text-foreground">
              Thales
            </span>
          </div>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link href="/privacy" className="text-foreground font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Thales. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="font-display text-2xl font-bold text-foreground mb-5 leading-snug">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] text-muted-foreground leading-[1.8]">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
      {children}
    </h3>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 pl-4 border-l-2 border-primary bg-primary/5 rounded-r-lg py-3 pr-4 text-sm text-foreground leading-relaxed">
      {children}
    </div>
  );
}
