import Link from "next/link";
import { TrendingUp, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Thales",
  description:
    "Thales Terms of Service. Read the terms governing your use of the Thales financial platform.",
};

const LAST_UPDATED = "February 24, 2025";
const CONTACT_EMAIL = "legal@mythales.co";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "description", title: "2. Description of Services" },
  { id: "eligibility", title: "3. Eligibility" },
  { id: "account", title: "4. Account Registration and Security" },
  { id: "financial-data", title: "5. Financial Data and Plaid Integration" },
  { id: "acceptable-use", title: "6. Acceptable Use" },
  { id: "ip", title: "7. Intellectual Property" },
  { id: "disclaimers", title: "8. Disclaimers" },
  { id: "liability", title: "9. Limitation of Liability" },
  { id: "indemnification", title: "10. Indemnification" },
  { id: "termination", title: "11. Termination" },
  { id: "governing-law", title: "12. Governing Law and Dispute Resolution" },
  { id: "changes", title: "13. Changes to These Terms" },
  { id: "contact", title: "14. Contact Us" },
];

export default function TermsPage() {
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
                Terms of Service
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
              <Section id="acceptance" title="1. Acceptance of Terms">
                <p>
                  These Terms of Service (&quot;Terms&quot;) constitute a
                  legally binding agreement between you (&quot;User,&quot;
                  &quot;you,&quot; or &quot;your&quot;) and Thales
                  (&quot;Thales,&quot; &quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;) governing your access to and use of the
                  Thales platform, website, and related services (collectively,
                  the &quot;Services&quot;).
                </p>
                <p>
                  By creating an account, accessing, or using the Services in
                  any manner, you acknowledge that you have read, understood,
                  and agree to be bound by these Terms and our{" "}
                  <Link
                    href="/privacy"
                    className="text-primary underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  , which is incorporated herein by reference. If you do not
                  agree to these Terms, you must not access or use the Services.
                </p>
              </Section>

              {/* 2 */}
              <Section id="description" title="2. Description of Services">
                <p>
                  Thales is a personal finance management platform that
                  leverages artificial intelligence to provide users with:
                </p>
                <ul>
                  <li>
                    Personalized financial insights derived from connected
                    account data
                  </li>
                  <li>Spending analytics, budget summaries, and net worth tracking</li>
                  <li>
                    AI-generated recommendations to help users achieve stated
                    financial goals
                  </li>
                  <li>
                    Alerts and notifications related to account activity and
                    financial health
                  </li>
                </ul>
                <p>
                  The Services are intended for personal, non-commercial use.
                  The financial information, insights, and recommendations
                  provided by Thales are{" "}
                  <strong>
                    for informational and educational purposes only and do not
                    constitute financial, investment, tax, or legal advice.
                  </strong>{" "}
                  You should consult a qualified financial professional before
                  making any financial decisions.
                </p>
              </Section>

              {/* 3 */}
              <Section id="eligibility" title="3. Eligibility">
                <p>
                  To use the Services, you must:
                </p>
                <ul>
                  <li>
                    Be at least 18 years of age or the legal age of majority in
                    your jurisdiction, whichever is greater
                  </li>
                  <li>
                    Reside in the United States or a jurisdiction where the
                    Services are legally available
                  </li>
                  <li>
                    Have the legal capacity to enter into a binding agreement
                  </li>
                  <li>
                    Not have been previously suspended or removed from the
                    Services for violation of these Terms
                  </li>
                </ul>
              </Section>

              {/* 4 */}
              <Section
                id="account"
                title="4. Account Registration and Security"
              >
                <p>
                  To access the Services, you must register for an account. You
                  agree to provide accurate, complete, and current information
                  during registration and to update such information to keep it
                  accurate.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities that occur
                  under your account. You agree to notify us immediately at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  of any unauthorized use of your account or any other breach of
                  security. Thales will not be liable for any loss or damage
                  arising from your failure to safeguard your credentials.
                </p>
                <p>
                  You may not share your account credentials with any third
                  party or create accounts using automated methods without our
                  prior written consent.
                </p>
              </Section>

              {/* 5 */}
              <Section
                id="financial-data"
                title="5. Financial Data and Plaid Integration"
              >
                <p>
                  The Services use Plaid Technologies, Inc. (&quot;Plaid&quot;)
                  to facilitate read-only access to your financial account data.
                  By connecting a financial account through the Services, you
                  expressly authorize Thales and Plaid to access your financial
                  account data solely for the purposes described in these Terms
                  and our Privacy Policy.
                </p>
                <Callout>
                  <strong>
                    Thales has read-only access to your financial data. We
                    cannot and will never initiate transactions, move funds,
                    modify account settings, or take any action within your
                    financial accounts.
                  </strong>{" "}
                  Your bank credentials are never transmitted to or stored by
                  Thales.
                </Callout>
                <p>
                  By connecting your financial accounts, you also agree to
                  Plaid&apos;s{" "}
                  <a
                    href="https://plaid.com/legal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    End User Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://plaid.com/legal/#terms-of-use"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    Terms of Use
                  </a>
                  .
                </p>
                <p>
                  You may disconnect any financial account at any time within
                  the Services or through Plaid&apos;s user portal at{" "}
                  <a
                    href="https://my.plaid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    my.plaid.com
                  </a>
                  . Disconnecting an account will terminate our access to new
                  data from that account.
                </p>
                <p>
                  You represent and warrant that you are the authorized owner or
                  authorized representative of any financial account you connect
                  to the Services and that you have the legal right to grant us
                  access to the data therein.
                </p>
              </Section>

              {/* 6 */}
              <Section id="acceptable-use" title="6. Acceptable Use">
                <p>
                  You agree to use the Services only for lawful purposes and in
                  accordance with these Terms. You agree not to:
                </p>
                <ul>
                  <li>
                    Use the Services for any fraudulent, deceptive, or unlawful
                    purpose
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any portion of the
                    Services or its related systems
                  </li>
                  <li>
                    Reverse engineer, decompile, or disassemble any part of the
                    Services
                  </li>
                  <li>
                    Introduce malicious code, viruses, or any other harmful
                    material into the Services
                  </li>
                  <li>
                    Use automated scripts or bots to access, scrape, or extract
                    data from the Services
                  </li>
                  <li>
                    Impersonate any person or entity or misrepresent your
                    affiliation with any person or entity
                  </li>
                  <li>
                    Use the Services in any manner that could damage, disable,
                    overburden, or impair our systems
                  </li>
                  <li>
                    Share or sublicense your account access to third parties
                  </li>
                </ul>
              </Section>

              {/* 7 */}
              <Section id="ip" title="7. Intellectual Property">
                <p>
                  The Services, including all content, features, functionality,
                  software, design, text, graphics, logos, and other materials
                  (collectively, &quot;Content&quot;), are owned by Thales and
                  are protected by applicable copyright, trademark, patent, and
                  other intellectual property laws.
                </p>
                <p>
                  Subject to your compliance with these Terms, Thales grants you
                  a limited, non-exclusive, non-transferable, revocable license
                  to access and use the Services for your personal,
                  non-commercial purposes. You may not reproduce, distribute,
                  modify, create derivative works of, or publicly display any
                  Content without our prior written consent.
                </p>
                <p>
                  You retain all rights to the data you provide to us, including
                  your financial account data. You grant us a limited license to
                  process such data solely to provide the Services as described
                  in these Terms.
                </p>
              </Section>

              {/* 8 */}
              <Section id="disclaimers" title="8. Disclaimers">
                <p>
                  THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  NON-INFRINGEMENT, OR ACCURACY OF INFORMATION.
                </p>
                <p>
                  THALES DOES NOT WARRANT THAT THE SERVICES WILL BE
                  UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS
                  WILL BE CORRECTED. WE DO NOT WARRANT THE ACCURACY,
                  COMPLETENESS, OR RELIABILITY OF ANY FINANCIAL DATA,
                  INSIGHTS, OR RECOMMENDATIONS PROVIDED THROUGH THE SERVICES.
                </p>
                <p>
                  The financial insights and recommendations provided by Thales
                  are generated by AI models and are{" "}
                  <strong>not a substitute for professional financial advice.</strong>{" "}
                  Thales is not a registered investment advisor, broker-dealer,
                  financial planner, or tax advisor. You should consult with a
                  qualified professional before making any financial decision.
                </p>
              </Section>

              {/* 9 */}
              <Section id="liability" title="9. Limitation of Liability">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THALES,
                  ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                  SUPPLIERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY
                  DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE,
                  DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR
                  IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE
                  SERVICES.
                </p>
                <p>
                  IN NO EVENT SHALL THALES&apos;S AGGREGATE LIABILITY FOR ALL
                  CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE
                  SERVICES EXCEED THE GREATER OF (A) THE AMOUNTS YOU HAVE PAID
                  TO THALES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR
                  (B) ONE HUNDRED DOLLARS ($100.00).
                </p>
                <p>
                  Some jurisdictions do not allow the exclusion of certain
                  warranties or the limitation of liability for consequential or
                  incidental damages, so the above limitations may not apply to
                  you in their entirety.
                </p>
              </Section>

              {/* 10 */}
              <Section id="indemnification" title="10. Indemnification">
                <p>
                  You agree to defend, indemnify, and hold harmless Thales and
                  its affiliates, officers, directors, employees, and agents
                  from and against any claims, liabilities, damages, judgments,
                  awards, losses, costs, expenses, or fees (including reasonable
                  attorneys&apos; fees) arising out of or relating to your
                  violation of these Terms, your use of the Services, or your
                  connection of financial accounts to which you do not have
                  authorized access.
                </p>
              </Section>

              {/* 11 */}
              <Section id="termination" title="11. Termination">
                <p>
                  We may suspend or terminate your access to the Services at
                  any time, with or without cause or notice, including for
                  violation of these Terms. Upon termination, your right to use
                  the Services immediately ceases.
                </p>
                <p>
                  You may terminate your account at any time by contacting us
                  at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  . Upon account deletion, we will handle your data in
                  accordance with our{" "}
                  <Link
                    href="/privacy"
                    className="text-primary underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p>
                  Provisions that by their nature should survive termination
                  will survive, including Sections 7, 8, 9, 10, and 12.
                </p>
              </Section>

              {/* 12 */}
              <Section
                id="governing-law"
                title="12. Governing Law and Dispute Resolution"
              >
                <p>
                  These Terms are governed by and construed in accordance with
                  the laws of the United States and the State of Delaware,
                  without regard to conflict of law principles.
                </p>
                <p>
                  Any dispute arising out of or relating to these Terms or the
                  Services shall first be attempted to be resolved through
                  good-faith negotiation. If not resolved within 30 days, the
                  dispute shall be resolved by binding arbitration administered
                  by the American Arbitration Association under its Consumer
                  Arbitration Rules, except that either party may seek
                  injunctive or other equitable relief in a court of competent
                  jurisdiction.
                </p>
                <p>
                  You agree to resolve disputes on an individual basis and waive
                  any right to participate in a class action lawsuit or
                  class-wide arbitration.
                </p>
              </Section>

              {/* 13 */}
              <Section id="changes" title="13. Changes to These Terms">
                <p>
                  We reserve the right to modify these Terms at any time. We
                  will provide notice of material changes by updating the
                  &quot;Effective date&quot; at the top of this page and, where
                  appropriate, by notifying you via email. Your continued use of
                  the Services after such changes constitutes your acceptance of
                  the revised Terms.
                </p>
                <p>
                  If you do not agree to the revised Terms, you must stop using
                  the Services and may request account deletion as described in
                  Section 11.
                </p>
              </Section>

              {/* 14 */}
              <Section id="contact" title="14. Contact Us">
                <p>
                  If you have any questions about these Terms, please contact
                  us at:
                </p>
                <div className="mt-4 p-5 rounded-xl border border-border bg-muted/50 text-sm leading-loose">
                  <strong className="text-foreground">Thales</strong>
                  <br />
                  Attn: Legal
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
                href="/privacy"
                className="text-sm text-primary hover:underline underline-offset-2"
              >
                Read our Privacy Policy →
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
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-foreground font-medium">
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 pl-4 border-l-2 border-primary bg-primary/5 rounded-r-lg py-3 pr-4 text-sm text-foreground leading-relaxed">
      {children}
    </div>
  );
}
