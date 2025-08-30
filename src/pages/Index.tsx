import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Twitter, Send, Globe, Download, ChevronRight } from "lucide-react";

// --- Tokenomics Data ---
const data = [
  { name: "Community & Liquidity", value: 50 },
  { name: "Marketing & Memes", value: 20 },
  { name: "Ecosystem Development", value: 15 },
  { name: "Team & Advisors", value: 10 },
  { name: "Charity & Causes", value: 5 },
];

const COLORS = ["#ff007f", "#ffae00", "#00d4ff", "#7b61ff", "#30d158"];

export default function JugularSite() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-fuchsia-100 via-amber-100 to-sky-100 text-gray-900">
      {/* Floating colorful blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -top-20 -left-20 h-96 w-96 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle at 30% 30%, #ff6b6b, transparent 60%)" }}
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle at 70% 70%, #00d4ff, transparent 60%)" }}
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-white/40 border-b border-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-amber-600 to-sky-600">
            JUGULAR TOKEN
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="rounded-2xl">About</Button>
            <Button variant="ghost" className="rounded-2xl">Utilities</Button>
            <Button variant="ghost" className="rounded-2xl">Tokenomics</Button>
            <Button variant="ghost" className="rounded-2xl">Roadmap</Button>
            <Button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 via-amber-500 to-sky-500 text-white shadow-lg hover:opacity-90">
              Buy $JUG
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative px-6 pt-16 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-700 via-amber-700 to-sky-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The Colorful Meme Token That Goes For The <span className="underline decoration-wavy decoration-fuchsia-500">Jugular</span>
            </motion.h1>
            <p className="mt-6 text-lg/7 text-gray-700 max-w-prose">
              $JUG blends blazing meme energy with real community utilities — decentralized chat and DAO governance — wrapped in a vibrant, feel-good brand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 via-rose-500 to-orange-400 text-white shadow-lg hover:opacity-90">
                Launch App <ChevronRight className="ml-1 h-4 w-4"/>
              </Button>
              <Button variant="outline" className="rounded-2xl border-2 bg-amber-300">
               <a href="/jugular-whitepaper.pdf"> <Download className="mr-2 h-4 w-4"/> Whitepaper</a>
              </Button>
            </div>
          </div>

          {/* Coin badge placeholder */}
          <motion.div
            className="mx-auto flex h-72 w-72 md:h-96 md:w-96 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 shadow-2xl ring-8 ring-white/60"
            initial={{ scale: 0.9, rotate: -6, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <div className="grid place-items-center text-center">
              <div className="text-white/90 text-4xl font-black tracking-widest drop-shadow">JUG</div>
              <div className="mt-2 text-white/80 text-sm">Jugular Token</div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600">About</h2>
          <p className="mx-auto max-w-3xl text-center text-gray-700">
            Jugular Token is a community-first meme coin with purpose. We celebrate internet culture while building tools that empower holders to connect and decide together.
          </p>
        </div>
      </section>

      {/* UTILITIES */}
      <section className="px-6 py-16 bg-white/70 backdrop-blur border-y border-white/60">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600">Utilities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-fuchsia-50 to-rose-50 border-fuchsia-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Social Media Chat — <span className="text-fuchsia-700">Jugular Chat dApp</span></h3>
                <p className="text-gray-700">
                  A decentralized chat platform where $JUG holders connect, share memes, and build culture — with token-gated channels and on-chain identity.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-sky-50 to-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Governance — <span className="text-emerald-700">Jugular DAO</span></h3>
                <p className="text-gray-700">
                  $JUG holders propose and vote on meme campaigns, partnerships, and donations, steering the ecosystem with transparent, on-chain decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-pink-600 to-violet-600">Tokenomics</h2>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="space-y-3">
              {data.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base">
                  <span className="h-4 w-4 rounded" style={{ background: COLORS[i] }} />
                  <span className="font-semibold">{item.name}</span>
                  <span className="ml-auto text-gray-700">{item.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-6 py-16 bg-white/70 backdrop-blur border-y border-white/60">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-amber-600 to-lime-600">Roadmap</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { phase: "Phase 1", title: "Launch & Community", desc: "Fair launch, socials, meme contests." },
              { phase: "Phase 2", title: "Growth & Ecosystem", desc: "Jugular Chat beta, DAO testing, staking." },
              { phase: "Phase 3", title: "Expansion", desc: "Chat full release, DAO active, partnerships." },
              { phase: "Phase 4", title: "Domination", desc: "CEX listings, merch, global meme events." },
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl shadow-md bg-gradient-to-br from-white to-neutral-50">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gray-500">{item.phase}</p>
                  <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-cyan-600 to-emerald-600">Join the Jugular Army</h2>
          <p className="text-gray-700 mb-8">Follow, share, and help shape the future of $JUG.</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="rounded-2xl bg-amber-300"><Twitter className="mr-2 h-4 w-4"/> Twitter</Button>
            <Button variant="outline" className="rounded-2xl bg-amber-300"><Send className="mr-2 h-4 w-4"/> Telegram</Button>
            <Button variant="outline" className="rounded-2xl bg-amber-300"><Globe className="mr-2 h-4 w-4"/> Docs</Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Jugular Jugular Token — Built with love, memes, and vibrant gradients.
      </footer>
    </div>
  );
}
