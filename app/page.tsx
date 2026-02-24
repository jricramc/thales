"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  Brain,
  Lock,
  Shield,
  Target,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Zap,
  Eye,
  X,
  Menu,
} from "lucide-react";

// ─── Animation variants ────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// ─── Navbar ─────────────────────────────────────────────────────────────────

function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 20));
  }, [scrollY]);

  const links = ["Features", "Security", "Waitlist"];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-700 tracking-tight text-foreground">
            Thales
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get early access
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg w-fit"
              >
                Get early access
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, color-mix(in oklab, var(--color-primary) 12%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/80 backdrop-blur-sm text-xs text-muted-foreground mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Powered by Plaid · Bank-grade security
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          animate="show"
          className="font-display text-5xl sm:text-6xl md:text-7xl font-800 leading-[1.08] tracking-tight text-foreground mb-6"
        >
          <motion.span variants={fadeUp} className="block">
            Your finances,
          </motion.span>
          <motion.span
            variants={fadeUp}
            className="block"
            style={{ color: "var(--color-primary)" }}
          >
            finally understood.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.45 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Thales connects to your bank accounts through Plaid to deliver
          personalized insights, real-time analytics, and AI-driven
          recommendations — so you can make smarter financial decisions with
          confidence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={staggerContainer(0.1, 0.6)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.a
            variants={fadeUp}
            href="#waitlist"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-7 py-3.5 rounded-xl text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Get early access
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            variants={fadeUp}
            href="#features"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 border border-border bg-background text-foreground font-medium px-7 py-3.5 rounded-xl text-base hover:bg-muted transition-colors"
          >
            Learn more
            <ChevronDown className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Social proof hint */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.9 }}
          className="mt-8 text-xs text-muted-foreground"
        >
          Join thousands managing their finances smarter
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Features ────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Brain,
    title: "Personalized Insights",
    description:
      "AI models trained on your financial patterns surface insights tailored to your spending habits, income cycles, and goals — not generic advice.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Visualize your cash flow, net worth evolution, and spending categories with live data pulled securely from your connected accounts.",
  },
  {
    icon: Target,
    title: "Goal-Driven Recommendations",
    description:
      "Set savings targets, debt payoff timelines, or investment goals. Thales crafts an actionable plan and keeps you on track automatically.",
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description:
      "Get notified about unusual spending, upcoming bills, low balances, and opportunities to optimize — before they become problems.",
  },
  {
    icon: Eye,
    title: "Full Visibility",
    description:
      "See every account, card, and investment in one place. No more switching between apps or losing track of where your money actually goes.",
  },
  {
    icon: TrendingUp,
    title: "Financial Trajectory",
    description:
      "Understand not just where you are today, but where you're heading. Thales projects your financial future based on current patterns.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-3"
          >
            What Thales does
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-700 text-foreground mb-4 leading-tight"
          >
            Everything you need to
            <br />
            understand your money
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            One platform. Complete financial clarity.
          </motion.p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-base">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Security ────────────────────────────────────────────────────────────────

const trustItems = [
  {
    icon: Shield,
    label: "Plaid-powered connection",
    desc: "Industry-standard, read-only bank access. We never see your credentials.",
  },
  {
    icon: Lock,
    label: "Data never sold or shared",
    desc: "Your financial data is used only to power the app — nothing else, ever.",
  },
  {
    icon: Eye,
    label: "Transparent access",
    desc: "Access is limited to authorized systems with full audit trails.",
  },
  {
    icon: CheckCircle2,
    label: "Industry-standard encryption",
    desc: "Data in transit and at rest is encrypted following security best practices.",
  },
];

function SecuritySection() {
  return (
    <section
      id="security"
      className="py-28 px-6 border-y border-border"
      style={{ background: "var(--color-muted)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-3"
          >
            Privacy & Security
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-700 text-foreground mb-6 leading-tight"
          >
            Built on trust,
            <br />
            secured by design.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg leading-relaxed mb-8"
          >
            Thales accesses your financial data exclusively through Plaid — the
            same infrastructure trusted by thousands of financial apps. Your
            data powers only your experience. We don&apos;t sell, share, or
            misuse it.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="https://plaid.com/safety/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
          >
            Learn about Plaid security
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>

        {/* Right: trust badges */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="p-5 rounded-2xl bg-background border border-border"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Waitlist ─────────────────────────────────────────────────────────────────

function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="waitlist" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "var(--color-primary)" }}
        >
          {/* Decorative background pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 py-20 px-8 sm:px-16 text-center">
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium uppercase tracking-widest mb-4 opacity-70"
              style={{ color: "var(--color-primary-foreground)" }}
            >
              Early access
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl font-700 leading-tight mb-4"
              style={{ color: "var(--color-primary-foreground)" }}
            >
              Be first to take control
              <br />
              of your finances.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg mb-10 max-w-lg mx-auto opacity-80"
              style={{ color: "var(--color-primary-foreground)" }}
            >
              Join the waitlist and get notified the moment Thales is ready for
              you.
            </motion.p>

            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-sm text-foreground bg-background/95 border border-white/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-background text-foreground hover:bg-background/90 transition-colors whitespace-nowrap"
              >
                Join waitlist
              </motion.button>
            </motion.form>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-sm flex items-center justify-center gap-1.5 opacity-90"
                  style={{ color: "var(--color-primary-foreground)" }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-sm opacity-90"
                  style={{ color: "var(--color-primary-foreground)" }}
                >
                  Please enter a valid email address.
                </motion.p>
              )}
            </AnimatePresence>

            <motion.p
              variants={fadeIn}
              className="mt-6 text-xs opacity-50"
              style={{ color: "var(--color-primary-foreground)" }}
            >
              No spam. Unsubscribe anytime.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-700 tracking-tight text-foreground">
            Thales
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <a href="mailto:hello@mythales.co" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Thales. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
