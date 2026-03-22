import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/lib/projectsData";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  LayoutGrid,
  Sparkles,
  TrendingUp
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay }
});

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section className="royal-section relative overflow-hidden text-white pb-28 pt-24">
          <div className="floating-shape bg-[hsl(var(--gold))] w-72 h-72 top-10 left-[-3rem]" />
          <div className="floating-shape bg-[hsl(var(--royal-blue-light))] w-96 h-96 bottom-[-6rem] right-[-4rem]" />

          <div className="container mx-auto px-6 max-w-6xl relative">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <Link
                to="/projects"
                className="flex items-center gap-2 text-sm text-white/80 link-hover"
              >
                <ArrowLeft size={16} />
                Back to projects
              </Link>

              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-white/70">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  {project.sector} · {project.role}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  {project.duration ?? "4 month build"}
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.2fr,0.9fr] gap-12 items-center">
              {/* LEFT */}
              <motion.div {...fadeUp()}>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
                  <span className="inline-block w-8 h-[1px] bg-white/50" />
                  Case Study
                </p>
                <h1 className="text-5xl lg:text-6xl font-heading mt-4 leading-tight drop-shadow-sm">
                  {project.title}
                </h1>

                <p className="mt-6 text-lg text-white/85 max-w-2xl">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span key={tech} className="pill bg-white/10 border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <Button className="hover:bg-white hover:text-primary" asChild>
                    <Link to="/contact">
                      Book Walkthrough
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>

                  <Button variant="outline" className="bg-accent text-primary hover:bg-primary hover:text-white" asChild>
                    <Link to="/experience">Delivery Playbook</Link>
                  </Button>
                </div>

                <div className="mt-10 grid sm:grid-cols-3 gap-4">
                  {project.metrics.slice(0, 3).map((m) => (
                    <div
                      key={m.label}
                      className="card-advanced card-royal p-4 rounded-2xl text-center border border-white/20"
                    >
                      <p className="text-xs text-white/70 uppercase">{m.label}</p>
                      <p className="text-2xl font-semibold mt-1">{m.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT KPI PANEL */}
              <motion.div {...fadeUp(0.15)}>
                <div className="card-advanced bg-white/5 border-white/15 rounded-3xl p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-sm text-primary">Design Language</p>
                      <p className="text-lg font-semibold text-primary">{project.palette}</p>
                    </div>
                    <Sparkles className="text-[hsl(var(--gold))]" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="card-advanced p-4 rounded-2xl bg-white/10 border-white/15">
                        <p className="text-xs text-accent uppercase">{m.label}</p>
                        <p className="text-2xl font-semibold text-primary">{m.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between text-sm text-primary">
                      <span>Design system maturity</span>
                      <span className="font-semibold">A+</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[86%] bg-[hsl(var(--gold))]" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-primary">
                      <LayoutGrid size={16} />
                      Component coverage: 43 atoms · 27 molecules · 12 templates
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CHALLENGE + SOLUTION */}
        <section className="py-24">
          <div className="container mx-auto px-6 grid xl:grid-cols-[1.1fr,0.9fr] gap-16">
            <motion.div {...fadeUp()}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-primary" />
                <p className="uppercase tracking-[0.15em] text-sm text-muted-foreground">
                  Problem Space
                </p>
              </div>
              <h2 className="text-3xl font-heading mb-6">Challenges decoded</h2>
              <div className="space-y-4">
                {project.challenges.map((c, i) => (
                  <div key={i} className="card-advanced p-5 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-semibold text-primary">
                      0{i + 1}
                    </div>
                    <p className="text-muted-foreground">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-primary" />
                <p className="uppercase tracking-[0.15em] text-sm text-muted-foreground">
                  Strategic Bets
                </p>
              </div>
              <h2 className="text-3xl font-heading mb-6">Solution architecture</h2>
              <div className="space-y-6">
                {project.solutions.map((s, i) => (
                  <div key={i} className="card-advanced p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs uppercase text-muted-foreground">Path {i + 1}</p>
                        <p className="font-semibold">Impact lane</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                        +{8 + i * 4}% lift
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{s}</p>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${68 + i * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="section-gradient py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div {...fadeUp()} className="text-center mb-14">
              <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground">Delivery</p>
              <h2 className="text-3xl font-heading mt-2">Timeline</h2>
              <p className="text-muted-foreground mt-3">
                A crisp view of how we shipped, validated, and iterated.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-border hidden sm:block" />
              <div className="space-y-10">
                {project.timeline.map((p, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.08)} className="relative pl-12 sm:pl-16">
                    <div className="absolute left-3 sm:left-3 top-3 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_8px_rgba(255,255,255,0.6)] sm:shadow-none" />
                    <div className="card-advanced p-6">
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <p className="text-sm text-muted-foreground">{p.phase}</p>
                        <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                          Week {i + 1}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mt-1">{p.focus}</h3>
                      <p className="mt-3 text-muted-foreground">{p.result}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS + GALLERY */}
        <section className="py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-[1fr,1.05fr] gap-14 items-start">
            <motion.div {...fadeUp()}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-primary" />
                <p className="uppercase tracking-[0.15em] text-sm text-muted-foreground">
                  Wins
                </p>
              </div>
              <h2 className="text-3xl font-heading mb-6">Key highlights</h2>
              <div className="space-y-4">
                {project.highlights.map((h, i) => (
                  <div key={i} className="card-advanced p-5 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                      <TrendingUp className="text-primary" />
                    </div>
                    <p>{h}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-primary" />
                <p className="uppercase tracking-[0.15em] text-sm text-muted-foreground">
                  Screens
                </p>
              </div>
              <h2 className="text-3xl font-heading mb-6">Experience slices</h2>
              <div className="space-y-6">
                {project.gallery.map((g, i) => (
                  <div key={i} className="card-advanced p-5">
                    <div className="flex gap-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="h-28 bg-secondary rounded-xl mb-4 flex items-center justify-center text-muted-foreground text-sm">
                      High-fidelity placeholder
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{g.label}</p>
                        <p className="text-sm text-muted-foreground">{g.description}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                        {project.sector}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* STACK */}
        <section className="section-gradient py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading text-center mb-4">Technology Stack</h2>
            <p className="text-center text-muted-foreground mb-12">
              Hand-picked components that powered the delivery.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {project.stack.map((tech) => (
                <motion.div key={tech} variants={fadeUp()} className="card-advanced p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" />
                    <div>
                      <p className="font-semibold">{tech}</p>
                      <p className="text-sm text-muted-foreground">Used in this project</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="royal-section py-20 text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-heading">Want a deeper walkthrough?</h2>
            <p className="mt-4 text-white/80 text-balance">
              I can explain architecture, performance strategy, and system design used in this project.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button className="hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Schedule Call</Link>
              </Button>
              <Button variant="outline" className="text-primary bg-accent hover:bg-primary hover:text-white" asChild>
                <Link to="/experience">View Experience</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
