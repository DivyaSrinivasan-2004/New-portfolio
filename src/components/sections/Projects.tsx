import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
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

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[hsl(var(--royal-blue))] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-blue))] via-[hsl(var(--royal-blue-dark))]/85 to-[hsl(var(--navy))]" />
      <div className="absolute -left-16 -top-24 w-64 h-64 rounded-full bg-[hsl(var(--gold))]/18 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-[hsl(var(--royal-blue-light))]/16 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
        >
          <div>
            <span className="inline-block text-sm font-semibold text-[hsl(var(--gold))] mb-3 tracking-[0.2em] uppercase">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[hsl(var(--cream))] mb-3">
              Projects that deliver
            </h2>
            <p className="text-[hsl(var(--cream))]/80 max-w-xl">
              Real products shipped with responsive React frontends, Django REST APIs, and optimized databases.
            </p>
          </div>
          <Button variant="outline" size="lg" className="border-white/40 bg-accent text-navy hover:bg-white" asChild>
            <Link to="/projects" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--royal-blue))]/70 via-transparent to-transparent" />

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--navy))] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--navy))] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-[hsl(var(--gold))]/20 text-[hsl(var(--gold))] border border-[hsl(var(--gold))]/40">
                    {index + 1}
                  </span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
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

                {/* Impact */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-white/80 text-sm">
                  <span>↗ {project.impact}</span>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
