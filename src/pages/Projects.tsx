import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Clock4, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/lib/projectsData";

const smallProjects = [
  {
    id: 1,
    name: "Cafe Billing Software",
    description: "Full-stack café billing system with REST APIs, product/transaction models, and speed-focused UX.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop",
    tags: ["React", "Django", "PostgreSQL", "REST"],
    impact: "Reduced billing errors by 30% & sped up transactions.",
  },
  {
    id: 2,
    name: "Lanka Book of Records",
    description: "National records platform with secure REST APIs, responsive UI, and admin workflows.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&auto=format&fit=crop",
    tags: ["React", "Django", "PostgreSQL", "Netlify"],
    impact: "Launched with optimized performance on Netlify/Render.",
  },
  {
    id: 3,
    name: "Cookbook – Virtual Kitchen Assistant",
    description: "Recipe search + nutrition preferences with feature flags and performant API layer.",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&auto=format&fit=crop",
    tags: ["React", "Django", "REST", "PostgreSQL"],
    impact: "Improved query speed and user personalization.",
  },
];

const ProjectsPage = () => {
  const smallRef = useRef(null);
  const smallInView = useInView(smallRef, { once: true, margin: "-120px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="floating-shape w-[400px] h-[400px] bg-primary/5 -top-20 -right-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-sm font-medium text-accent mb-4 tracking-wide uppercase">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Featured <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Three deep builds across IoT, fintech, and AI media. Each tile opens into a long-form narrative with
              constraints, trade-offs, and measurable outcomes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="pill">Progressive delivery</span>
              <span className="pill">Offline UX</span>
              <span className="pill">Policy gates</span>
              <span className="pill ghost">LLM copilots</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid gap-10">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-xl shadow-xl grid grid-cols-1 lg:grid-cols-[1.08fr,0.92fr] ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image / metrics */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} relative`}>
                  <div className="relative h-full min-h-[360px] overflow-hidden">
                    <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover transition-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-transparent to-black/20 pointer-events-none" />

                    <div className="absolute inset-x-6 bottom-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl bg-white/85 text-foreground shadow-md border border-white/60 px-4 py-3 backdrop-blur-lg"
                        >
                          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{metric.label}</p>
                          <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                          {metric.detail && <p className="text-xs text-muted-foreground">{metric.detail}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} p-8 lg:p-10 space-y-4 relative z-10`}>
                  <span className="inline-flex px-3 py-1 text-xs font-semibold bg-[hsl(var(--gold))]/15 text-[hsl(var(--royal-blue))] rounded-full">
                    {project.role} · {project.sector}
                  </span>
                  <h2 className="text-3xl font-bold text-foreground leading-tight">{project.title}</h2>
                  <p className="text-lg text-accent">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.summary}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="status-line">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <p className="status-text">Highlights</p>
                      <span className="status-chip">{project.highlights.length}</span>
                    </div>
                    <div className="status-line">
                      <Layers className="w-5 h-5 text-primary" />
                      <p className="status-text">{project.stack.slice(0, 3).join(" · ")}</p>
                      <span className="status-chip">Stack</span>
                    </div>
                    <div className="status-line">
                      <Clock4 className="w-5 h-5 text-primary" />
                      <p className="status-text">{project.timeframe}</p>
                      <span className="status-chip">Timeline</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((tag) => (
                      <span key={tag} className="pill-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button variant="hero" className="border-rounded hover:bg-accent" asChild>
                      <Link to={`/projects/${project.slug}`}>
                        View case study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Projects */}
      <section className="py-24 bg-[hsl(var(--royal-blue))] relative overflow-hidden" ref={smallRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-blue))] via-[hsl(var(--royal-blue-dark))]/85 to-[hsl(var(--navy))]" />
        <div className="absolute -left-16 -top-24 w-64 h-64 rounded-full bg-[hsl(var(--gold))]/18 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-[hsl(var(--royal-blue-light))]/16 blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={smallInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
          >
            <div>
              <span className="inline-block text-sm font-semibold text-[hsl(var(--gold))] mb-3 tracking-[0.2em] uppercase">
                Other Small Works
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-[hsl(var(--cream))] mb-3">Projects that deliver</h2>
              <p className="text-[hsl(var(--cream))]/80 max-w-xl">
                Real products shipped with responsive React frontends, Django REST APIs, and optimized databases.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate={smallInView ? "visible" : "hidden"}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {smallProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--royal-blue))]/70 via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <span className="text-[11px] px-2 py-1 rounded-full bg-[hsl(var(--gold))]/20 text-[hsl(var(--gold))] border border-[hsl(var(--gold))]/40">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-white/10 text-white border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10 text-white/80 text-sm">↗ {project.impact}</div>

                  <div className="flex items-center gap-3 pt-3">
                    <Button variant="secondary" className="text-[hsl(var(--navy))] bg-white hover:bg-white/90 rounded-full" asChild>
                      <Link
                        to={`/projects/${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                      >
                        View case study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;

