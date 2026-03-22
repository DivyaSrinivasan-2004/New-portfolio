import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Zap, text: "Fast turnaround" },
  { icon: Clock, text: "Flexible hours" },
  { icon: Briefcase, text: "Project-based" },
];

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-12 pb-24 relative overflow-hidden bg-[hsl(var(--royal-blue))]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-blue))] via-[hsl(var(--royal-blue-dark))] to-[hsl(var(--navy))]" />
      <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-[hsl(var(--gold))]/18 blur-3xl" />
      <div className="absolute right-[-12%] top-10 w-80 h-80 rounded-full bg-[hsl(var(--royal-blue-light))]/18 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl"
        >
          {/* Decorative Pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsla(0,0%,100%,0.8) 1px, transparent 0)`,
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[hsl(var(--gold))]/8 via-transparent to-[hsl(var(--royal-blue-light))]/10" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Content */}
            <div className="max-w-xl text-white">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block text-[hsl(var(--gold))] text-sm font-semibold mb-4 tracking-[0.2em] uppercase"
              >
                Open for Opportunities
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight mb-4"
              >
                Let's build something exceptional together.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white/80 text-lg mb-6"
              >
                Full-stack partner for React frontends and Django/Flask REST backends—fast delivery, calm releases, and clear communication.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <benefit.icon className="w-4 h-4 text-[hsl(var(--gold))]" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              <Button
                variant="default"
                size="xl"
                asChild
                className="bg-accent text-navy hover:bg-primary hover:text-white border-0 shadow-lg"
              >
                <Link to="/contact" className="group flex items-center gap-2">
                  Hire Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <p className="text-white/70 text-sm text-center">
                Response within 24 hours
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
