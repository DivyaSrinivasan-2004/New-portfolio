import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Workflow, Activity } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

const pillars = [
  { icon: Sparkles, label: "Polished UI", desc: "React + Tailwind with accessibility, motion, and type discipline." },
  { icon: ShieldCheck, label: "API-first", desc: "Django/Flask REST APIs with auth, validation, and observability." },
  { icon: Workflow, label: "Agile delivery", desc: "Ship in sprints with Git, reviews, and quick rollback lanes." },
  { icon: Activity, label: "Performance", desc: "Cut page/billing errors, speed up queries, tune DB indices." },
];

export function AboutPreview() {
  const terminalLines = [
    "name: Divya S...",
    "role: Full-Stack Developer (1+ yr)...",
    "stack: React, TypeScript, Django, REST...",
    "db: Postgres, MySQL | ui: Tailwind...",
    "recent: Cafe Billing | Records | Cookbook...",
    "focus: performant releases + calm UX...",
  ];

  // precompute sequential typing timings so each line types after the previous finishes
  const lineTimings = terminalLines.reduce<{ start: number; duration: number; len: number }[]>((acc, line) => {
    const speedPerChar = 0.06; // seconds per character
    const gapAfterLine = 0.35; // pause after a line finishes
    const duration = Math.max(0.6, line.length * speedPerChar); // avoid too fast on short lines
    const start = acc.length === 0 ? 0 : acc[acc.length - 1].start + acc[acc.length - 1].duration + gapAfterLine;
    acc.push({ start, duration, len: line.length });
    return acc;
  }, []);

  return (
    <section className="relative overflow-hidden py-20 bg-[hsl(var(--royal-blue))]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-blue))] via-[hsl(var(--royal-blue-dark))] to-[hsl(var(--navy))] opacity-95" />
      <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-[hsl(var(--gold))]/20 blur-3xl" />
      <div className="absolute -right-24 -bottom-32 w-[520px] h-[520px] rounded-full bg-[hsl(var(--royal-blue-light))]/18 blur-[140px]" />

      <div className="container mx-auto px-6 relative z-10 grid xl:grid-cols-[1.05fr,0.95fr] gap-12 items-center">
        {/* Left: animated terminal vibe */}
        <motion.div {...fadeUp()}>
          <div
            className="relative w-full max-w-2xl rounded-3xl shadow-xl border overflow-hidden bg-[hsl(var(--primary))]"
            style={{
              borderColor: "hsla(var(--royal-blue)/0.3)",
            }}
          >
            <div
              className="px-4 py-3 flex items-center justify-between bg-[hsl(var(--primary))]"
              style={{
                borderBottom: "1px solid hsla(var(--royal-blue)/0.2)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f87171]" />
                <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                <span className="w-3 h-3 rounded-full bg-[#60a5fa]" />
              </div>
              <span className="text-xs text-[hsl(var(--primary-foreground))] font-mono">My Terminal</span>
            </div>

            <div className="px-5 py-6 font-mono text-[13px] sm:text-sm leading-7 text-[hsl(var(--foreground))] min-h-[360px] bg-[hsl(var(--background))] space-y-3 overflow-hidden relative rounded-b-3xl">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--background))]/40" />
              {terminalLines.map((line, idx) => {
                const { start, duration, len } = lineTimings[idx];
                return (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: start }}
                    className="flex items-start gap-2 overflow-hidden whitespace-nowrap relative"
                  >
                    <span className="text-[hsl(var(--primary))]">$</span>
                    <span
                      className="typing-line text-foreground/80"
                      style={{
                        // @ts-ignore
                        "--tw": `${len}ch`,
                        width: "0ch",
                        animation: `typing ${duration}s steps(${len}, end) forwards ${start}s, blink-caret 0.9s steps(1) infinite`,
                      }}
                    >
                      {line}
                    </span>
                  </motion.div>
                );
              })}

              {(() => {
                const last = lineTimings[lineTimings.length - 1];
                const start = last.start + last.duration + 0.35;
                const duration = 1.1;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: start }}
                    className="flex items-start gap-2 mt-2 overflow-hidden whitespace-nowrap"
                  >
                    <span className="text-[hsl(var(--primary))]">$</span>
                    <span
                      className="text-[hsl(var(--gold))] typing-line"
                      style={{
                        // @ts-ignore
                        "--tw": "18ch",
                        width: "0ch",
                        animation: `typing ${duration}s steps(18, end) forwards ${start}s, blink-caret 0.9s steps(1) infinite`,
                      }}
                    >
                      
                    </span>
                  </motion.div>
                );
              })()}
            </div>
          </div>
        </motion.div>

        {/* Right: narrative + pillars */}
        <motion.div {...fadeUp(0.05)}>
          <span className="eyebrow text-[hsl(var(--gold))] mb-4 inline-block tracking-[0.22em]">
            About Me
          </span>
          <h2 className="heading-section text-4xl lg:text-5xl mb-4 leading-tight text-[hsl(var(--cream))] font-heading">
            Full-stack builder for performant, reliable launches.
          </h2>
          <p className="text-body-large text-white/80 max-w-3xl leading-relaxed text-lg">
            I'm a full-stack developer (1+ year) shipping responsive React frontends and Django/Flask REST APIs.
            I integrate PostgreSQL/MySQL, tune performance, and keep Agile delivery smooth with Git-driven workflows.
            Recent builds: cafe billing system, national records platform, and a virtual kitchen assistant.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button variant="default" asChild className="shadow-glow bg-accent text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--gold-light))]">
              <Link to="/about">Dive into the full story</Link>
            </Button>
            <Button variant="outline" asChild className="hover:-translate-y-0.5 transition-transform border-white/30 text-navy">
              <Link to="/experience">See how I deliver</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {pillars.map((item, idx) => (
              <motion.div
                key={item.label}
                {...fadeUp(0.05 * idx)}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[hsl(var(--gold))]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/15 text-white grid place-items-center shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-white text-lg">{item.label}</p>
                </div>
                <p className="text-sm text-white/80 relative z-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
