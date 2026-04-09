import { Button } from "@/components/ui/button"
import {
  Shield,
  Package,
  Lock,
  Users,
  ArrowRight,
  Zap,
  Award,
  AlertTriangle,
  CheckCircle2,
  Star,
  TrendingUp,
  Clock,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bunkerfy - Arc Raiders Trading Hub | #1 Secure Item Exchange",
  description:
    "Join the largest Arc Raiders trading community. Trade blueprints, mods, salvaged gear & resources safely with escrow protection. 5000+ trades completed. Start trading now!",
  keywords: [
    "Arc Raiders trading",
    "Arc Raiders marketplace",
    "Arc Raiders items",
    "Arc Raiders blueprints",
    "safe trading",
    "escrow protection",
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] rust-texture">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00d9ff]/10 via-transparent to-transparent"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d9ff]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <header>
          <nav className="relative border-b border-[#2a2520]/50 backdrop-blur-sm" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00d9ff] blur-md opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-[#00d9ff] to-[#0891b2] p-2 rounded-lg">
                    <Package className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-bold text-white">bunkerfy.top</span>
                  <p className="text-xs text-slate-400 hidden sm:block">Arc Raiders Trading Hub</p>
                </div>
              </div>
              <Link href="/auth/login">
                <Button className="bg-[#00d9ff] hover:bg-[#00b8d4] text-black font-semibold arc-glow text-sm sm:text-base">
                  Enter Hub
                </Button>
              </Link>
            </div>
          </nav>
        </header>

        <main>
          <section
            className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32"
            aria-labelledby="hero-heading"
          >
            <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/20 text-[#00d9ff] text-xs sm:text-sm">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                <span>Arc Raiders Secure P2P Item Trading</span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight text-balance"
              >
                Arc Raiders Trading Hub <br />
                <span className="bg-gradient-to-r from-[#00d9ff] via-[#22d3ee] to-[#10b981] bg-clip-text text-transparent">
                  Trade Items Safely
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed px-4 text-pretty">
                The <strong>#1 community marketplace</strong> for <strong>Arc Raiders item trading</strong>. Trade
                blueprints, mods, salvaged gear & resources with <strong>escrow protection</strong>. Verified traders,
                secure transactions. No scams - just fair trades between Raiders.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  <span>5,000+ Trades</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  <span>Active Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#00d9ff]" aria-hidden="true" />
                  <span>Escrow Protected</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4">
                <Link href="/auth/login" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full h-12 px-8 bg-[#00d9ff] hover:bg-[#00b8d4] text-black font-semibold arc-glow"
                  >
                    Start Trading Arc Raiders Items
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="#features" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-8 border-slate-700 text-white hover:bg-slate-800 bg-transparent"
                  >
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section
            id="features"
            className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
            aria-labelledby="features-heading"
          >
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Trade Arc Raiders Items on Bunkerfy?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Built by Raiders, for Raiders. Our platform offers the safest way to exchange in-game items.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <article className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#00d9ff]/30 transition-all">
                <div className="bg-[#00d9ff]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="h-6 w-6 text-[#00d9ff]" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Escrow Protection</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Your Arc Raiders items stay in escrow until both parties confirm. Complete security for every
                  blueprint, mod, and gear trade.
                </p>
              </article>

              <article className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all">
                <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Dispute Resolution</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Problems with your Arc Raiders trade? Our escrow agents review evidence and resolve conflicts fairly.
                  Every action logged.
                </p>
              </article>

              <article className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all sm:col-span-2 lg:col-span-1">
                <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-amber-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Reputation System</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Build your trader reputation through successful Arc Raiders trades and reviews. Trust matters in the
                  wasteland.
                </p>
              </article>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24" aria-labelledby="items-heading">
            <div className="text-center mb-12">
              <h2 id="items-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Arc Raiders Items You Can Trade
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Exchange all types of in-game items securely on our marketplace
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Blueprints", icon: "📋", desc: "Weapon & gear blueprints" },
                { name: "Mods", icon: "⚙️", desc: "Equipment modifications" },
                { name: "Salvage", icon: "🔩", desc: "Salvaged materials" },
                { name: "Resources", icon: "📦", desc: "Crafting resources" },
                { name: "Gear", icon: "🎒", desc: "Equipment & armor" },
                { name: "Weapons", icon: "🔫", desc: "Guns & melee weapons" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#00d9ff]/30 transition-all text-center"
                >
                  <span className="text-3xl mb-2 block" role="img" aria-label={item.name}>
                    {item.icon}
                  </span>
                  <h3 className="text-white font-semibold text-sm">{item.name}</h3>
                  <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 bg-slate-900/30"
            aria-labelledby="how-it-works-heading"
          >
            <div className="text-center mb-12">
              <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                How Arc Raiders Trading Works
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Simple, secure, and fast. Start trading in minutes.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Create Account",
                  desc: "Sign up and link your Embark ID to verify your identity",
                  icon: Users,
                },
                {
                  step: "2",
                  title: "List or Browse",
                  desc: "Post your Arc Raiders items for trade or find what you need",
                  icon: Package,
                },
                {
                  step: "3",
                  title: "Secure Trade",
                  desc: "Items are held in escrow until both parties confirm",
                  icon: Lock,
                },
                {
                  step: "4",
                  title: "Complete & Review",
                  desc: "Finish the trade and leave a review to build reputation",
                  icon: Star,
                },
              ].map((item) => (
                <div key={item.step} className="relative p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#00d9ff] flex items-center justify-center text-black font-bold text-sm">
                    {item.step}
                  </div>
                  <item.icon className="h-8 w-8 text-[#00d9ff] mb-4" aria-hidden="true" />
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24" aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="sr-only">
              Platform Statistics
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "5,000+", label: "Trades Completed", icon: TrendingUp },
                { value: "2,000+", label: "Active Raiders", icon: Users },
                { value: "99.5%", label: "Success Rate", icon: CheckCircle2 },
                { value: "<5min", label: "Avg. Trade Time", icon: Clock },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 text-center"
                >
                  <stat.icon className="h-8 w-8 text-[#00d9ff] mx-auto mb-3" aria-hidden="true" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24" aria-labelledby="cta-heading">
            <div className="relative rounded-3xl bg-gradient-to-r from-[#00d9ff]/20 via-[#22d3ee]/10 to-[#10b981]/20 p-8 sm:p-12 overflow-hidden border border-slate-700">
              <div className="relative text-center space-y-4 sm:space-y-6">
                <Users className="h-12 w-12 sm:h-16 sm:w-16 text-[#00d9ff] mx-auto" aria-hidden="true" />
                <h2 id="cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Join the Arc Raiders Trading Community
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4">
                  Thousands of Raiders exchange items daily. Blueprints, mods, salvaged gear - find what you need and
                  trade safely.
                </p>
                <Link href="/auth/login">
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-[#00d9ff] hover:bg-[#00b8d4] text-black font-semibold arc-glow"
                  >
                    Start Trading Now
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Terms Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24" aria-labelledby="terms-heading">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900 p-6 sm:p-8 space-y-6 shadow-lg shadow-cyan-900/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#00d9ff]/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 text-[#00d9ff]" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-200 border border-cyan-500/30">
                        Fan Application Notice
                      </span>
                      <span className="text-[11px] text-slate-400">Community transparency & safety</span>
                    </div>
                    <h2 id="terms-heading" className="text-lg sm:text-xl font-semibold text-white">
                      Terms, Conditions & Responsibility
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                      This community-built Arc Raiders trading hub is not affiliated with Embark Studios or any official
                      Arc Raiders team. Read these conditions carefully before coordinating trades.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-200 border border-amber-500/30">
                    Unofficial & fan-made
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-200 border border-emerald-500/30">
                    No real-money trades
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                    <Shield className="h-4 w-4" aria-hidden="true" /> Community terms to follow
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        Use the Arc Raiders trading hub voluntarily and at your own risk. Real-money transactions are
                        not supported.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        You are responsible for the content you share and for respecting community conduct rules while
                        arranging trades.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        Escrow and dispute tools are provided as-is with no guarantee of uninterrupted availability.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        No data or in-game items are insured by bunkerfy.top, its contributors, or hosting providers.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        References to Arc Raiders assets are solely for identification within this unofficial fan
                        experience.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-amber-100">
                    <AlertTriangle className="h-4 w-4" aria-hidden="true" /> Responsibility & release of liability
                  </p>
                  <p className="text-sm text-amber-50 leading-relaxed">
                    By continuing you acknowledge that this platform is a community fan app for Arc Raiders. You release
                    bunkerfy.top and its contributors from liability for losses, downtime, or misunderstandings that
                    could occur while coordinating trades.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-[11px] text-slate-200">
                      Coordinate responsibly
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-[11px] text-slate-200">
                      Keep partners informed
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-[11px] text-slate-200">
                      Respect community rules
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-800 mt-16 sm:mt-24" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Package className="h-5 w-5 text-[#00d9ff]" aria-hidden="true" />
                  <span className="font-bold text-white">Bunkerfy</span>
                </div>
                <p className="text-slate-400 text-sm">
                  The #1 community marketplace for Arc Raiders item trading with escrow protection.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Trading</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="/dashboard/marketplace" className="hover:text-[#00d9ff]">
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/my-listings/create" className="hover:text-[#00d9ff]">
                      Create Listing
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/transactions" className="hover:text-[#00d9ff]">
                      My Trades
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Support</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="/dashboard/faq" className="hover:text-[#00d9ff]">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/reports" className="hover:text-[#00d9ff]">
                      Report Issues
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Legal</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <span>Terms of Service</span>
                  </li>
                  <li>
                    <span>Privacy Policy</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 space-y-2 text-center">
              <p className="text-slate-500 text-xs sm:text-sm">
                © 2025 bunkerfy.top - Arc Raiders Secure Item Trading Platform
              </p>
              <p className="text-slate-600 text-[11px] sm:text-xs">
                Unofficial fan app made by the community for fellow Arc Raiders. Not affiliated with Embark Studios.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
