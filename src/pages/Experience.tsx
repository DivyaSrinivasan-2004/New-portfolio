import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarClock,
  MapPin,
  BadgeCheck,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay }
});

/* 🔥 DATA */
const experiences = [
  {
    company: "Manha Facility Management",
    role: "Full Stack Developer",
    duration: "May 2025 – Mar 2026",
    location: "Chennai · Onsite",
    type: "Full-Time",
    summary:
      "Led development of scalable web apps with optimized UI performance and robust backend APIs.",
    highlights: [
      "Improved UI performance by 25% using optimized React architecture.",
      "Designed REST APIs and integrated them with frontend systems.",
      "Worked in Agile teams with Git workflows and CI/CD pipelines."
    ],
    tech: ["React", "TypeScript", "Django", "Flask", "MySQL", "Tailwind"]
  },
  {
    company: "Manha Facility Management",
    role: "Full Stack Developer Intern",
    duration: "Feb 2025 – Apr 2025",
    location: "Chennai · Hybrid",
    type: "Internship",
    summary:
      "Built production-ready modules and improved API performance across systems.",
    highlights: [
      "Developed full-stack modules using React and Django.",
      "Integrated REST APIs with frontend and backend services.",
      "Enhanced debugging and testing workflows."
    ],
    tech: ["React", "Django", "REST APIs", "MySQL", "Git"]
  },
  {
    company: "Manha Facility Management",
    role: "Full Stack Intern",
    duration: "Jan 2025",
    location: "Chennai · Onsite",
    type: "Internship",
    summary:
      "Supported UI enhancements, documentation, and QA testing in development lifecycle.",
    highlights: [
      "Worked on UI fixes and API integrations.",
      "Documented workflows and onboarding processes.",
      "Assisted QA testing and regression tracking."
    ],
    tech: ["React", "HTML/CSS", "Git", "Django"]
  }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-20">

        {/* HERO */}
        <section className="royal-section text-white py-20 relative overflow-hidden">
          <div className="floating-shape bg-[hsl(var(--gold))] w-72 h-72 top-[-3rem] left-[-3rem]" />
          <div className="floating-shape bg-[hsl(var(--royal-blue-light))] w-96 h-96 bottom-[-5rem] right-[-5rem]" />

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <motion.div {...fadeUp()}>
              <p className="uppercase tracking-[0.25em] text-sm text-white/70">
                Experience
              </p>

              <h1 className="text-5xl font-heading mt-4 leading-tight">
                Building Scalable & High-Performance Systems
              </h1>

              <p className="mt-4 text-white/80 max-w-2xl">
                Focused on crafting efficient user experiences and robust backend systems
                with modern technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 🔥 TIMELINE */}
        <section className="section-gradient py-20">
          <div className="container mx-auto px-6 max-w-5xl">

            {/* Heading */}
            <motion.div {...fadeUp()} className="mb-16">
              <p className="uppercase tracking-widest text-xs text-muted-foreground">
                Career Path
              </p>
              <h2 className="text-3xl font-heading mt-2">
                Professional Experience
              </h2>
            </motion.div>

            {/* Timeline Wrapper */}
            <div className="relative">

              {/* LINE */}
              <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-border" />

              <div className="space-y-14">

                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.1)}
                    className="grid grid-cols-[60px_1fr] gap-4 items-start"
                  >

                    {/* LEFT SIDE (ICON + LINE ALIGNMENT) */}
                    <div className="relative flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-glow">
                        <Briefcase size={16} className="text-white" />
                      </div>
                    </div>

                    {/* RIGHT SIDE (CARD) */}
                    <div className="card-advanced p-6 hover-lift">

                      {/* HEADER */}
                      <div className="flex justify-between flex-wrap gap-4">

                        <div>
                          <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                            {exp.company}
                          </p>

                          <h3 className="text-xl font-semibold mt-1">
                            {exp.role}
                          </h3>

                          <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                            {exp.summary}
                          </p>
                        </div>

                        <div className="text-sm text-muted-foreground text-right space-y-2">
                          <div className="flex items-center gap-2 justify-end">
                            <CalendarClock size={16} className="text-primary" />
                            {exp.duration}
                          </div>

                          <div className="flex items-center gap-2 justify-end">
                            <MapPin size={16} className="text-primary" />
                            {exp.location}
                          </div>

                          <span className="px-3 py-1 text-xs bg-secondary border rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* DIVIDER */}
                      <div className="my-4 h-[1px] bg-border" />

                      {/* BULLETS */}
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {exp.highlights.map((item) => (
                          <li key={item} className="flex gap-2 items-start">
                            <BadgeCheck size={16} className="text-primary mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* TECH STACK */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs rounded-full bg-secondary border hover:border-primary transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background text-center">
          <motion.div {...fadeUp()} className="container mx-auto max-w-3xl px-6">
            <div className="card-advanced p-8">
              <h3 className="text-2xl font-heading">
                Explore My Work
              </h3>

              <p className="text-muted-foreground mt-2">
                Dive deeper into projects that demonstrate my skills and experience.
              </p>

              <Button className="mt-6 hover:bg-accent hover:text-primary" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}