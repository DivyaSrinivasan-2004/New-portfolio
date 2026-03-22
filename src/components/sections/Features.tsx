import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Pixel-precise React + TypeScript with motion, accessibility, and responsive layouts that stay fast.",
    chips: ["React / TS", "Tailwind", "Framer Motion"],
    aura: "shadow-[0_30px_120px_rgba(33,85,180,0.25)]",
    gradient: "linear-gradient(135deg, hsl(var(--royal-blue)) 0%, hsl(var(--royal-blue-light)) 60%, hsl(var(--gold)) 100%)",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Django/Flask REST APIs with auth, caching, logging, and rollback lanes for calm releases.",
    chips: ["Python / Django", "REST", "Auth & Caching"],
    aura: "shadow-[0_30px_120px_rgba(12,25,60,0.25)]",
    gradient: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--royal-blue)) 70%)",
  },
  {
    icon: Database,
    title: "Data Layer",
    description: "Schema-first design, tuned indexes, safe migrations, and caching across PostgreSQL / MySQL.",
    chips: ["PostgreSQL", "MySQL", "Redis"],
    aura: "shadow-[0_30px_120px_rgba(217,164,32,0.28)]",
    gradient: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--royal-blue)) 100%)",
  },
  {
    icon: Rocket,
    title: "Ship & Operate",
    description: "CI/CD, feature flags, health checks, and SLO-aware monitoring to keep launches predictable.",
    chips: ["CI/CD", "Feature Flags", "SLOs + Alerts"],
    aura: "shadow-[0_30px_120px_rgba(33,85,180,0.22)]",
    gradient: "linear-gradient(135deg, hsl(var(--royal-blue)) 0%, hsl(var(--royal-blue-light)) 90%)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden bg-[hsl(var(--background))]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--secondary))] to-[hsl(var(--background))] pointer-events-none" />
      <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-[hsl(var(--gold))]/16 blur-3xl" />
      <div className="absolute right-10 bottom-0 w-72 h-72 rounded-full bg-[hsl(var(--royal-blue-light))]/18 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,hsla(var(--royal-blue)/0.12),transparent_45%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="eyebrow text-[hsl(var(--gold))] tracking-[0.24em] uppercase">
            Core Expertise
          </span>
          <h2 className="heading-section mt-3 text-4xl md:text-5xl font-heading gradient-text">
            What I bring to every build
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-lg">
            Full-stack depth with a calm, premium product layer—paired with delivery rails that keep launches smooth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.01, rotateX: 0.6, rotateY: -0.6 }}
              className="group relative overflow-hidden p-6 rounded-2xl bg-[hsl(var(--card))]/90 backdrop-blur-xl border border-[hsl(var(--border))]/70 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: feature.gradient }}
              />
              <div className={`absolute inset-0 pointer-events-none rounded-2xl ${feature.aura ?? ""} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md"
                  style={{ background: feature.gradient }}
                >
                  <feature.icon className="w-6 h-6 text-[hsl(var(--primary-foreground))]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {feature.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom info strip */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            { label: "Design + engineering + delivery aligned", tag: "Integrated" },
            { label: "Ship calm: rollout guards, flags, observability", tag: "Calm" },
            { label: "Accessible, performant, premium experiences", tag: "Premium" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-[hsl(var(--card))]/85 backdrop-blur-xl shadow-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--gold))]" />
              <p className="text-sm text-foreground/90 flex-1">{item.label}</p>
              <span className="px-2 py-1 rounded-full text-[11px] bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
