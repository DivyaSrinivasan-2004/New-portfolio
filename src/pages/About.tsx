import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Download, MapPin, Clock, ArrowRight, Zap, ShieldCheck, Sparkles, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Projects", value: "12+", hint: "3 featured case studies plus 9 additional builds" },
  { label: "Core stacks", value: "6+", hint: "React, Django, Python, PostgreSQL and more" },
  { label: "Specialties", value: "API + UI", hint: "Full-stack apps with responsive frontends" },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "API-first",
    desc: "Builds Django REST APIs for billing, record workflows, recipe search, and management systems.",
  },
  {
    icon: Sparkles,
    title: "Polished UI",
    desc: "Creates responsive React interfaces that stay clear, practical, and easy to use.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimizes database design, debugging, and performance for reliable day-to-day usage.",
  },
];

const experience = [
  {
    range: "May 2025 – Mar 2026",
    title: "Full Stack Developer",
    company: "Manha Facility Management, Chennai",
    details: [
      "Built responsive web features using HTML, CSS, JavaScript, and ReactJS.",
      "Assisted in backend development and REST API integration for dynamic data handling.",
      "Collaborated using Git for feature updates, debugging, and improvements.",
    ],
  },
  {
    range: "Feb 2025 – Apr 2025",
    title: "Full Stack Developer Intern",
    company: "Manha Facility Management, Chennai",
    details: [
      "Developed web modules using HTML, CSS, JavaScript, and Django.",
      "Assisted in REST API building and frontend-backend integration.",
      "Participated in debugging, testing, and performance optimization.",
    ],
  },
  {
    range: "Nov 2024 – Dec 2024",
    title: "Web Developer Intern",
    company: "8Queens Pvt Ltd, Chennai",
    details: [
      "Designed and developed responsive web pages using HTML, CSS, and JavaScript.",
      "Implemented UI improvements to improve user experience and accessibility.",
      "Maintained website functionality through bug fixing and frontend optimization.",
    ],
  },
];

const projects = [
  {
    name: "Cafe Billing Software",
    tech: "React, Python, Django, PostgreSQL, REST API",
    impact: "Reduced billing errors by 30% and improved transaction speed and accuracy",
  },
  {
    name: "Lanka Book of Records Website",
    tech: "React, Django, PostgreSQL, REST API, Netlify, Render",
    impact: "National records platform with secure APIs, responsive UI, and admin approval flow",
  },
  {
    name: "Cookbook - Virtual Kitchen Assistant",
    tech: "React, Django, REST API, PostgreSQL",
    impact: "Recipe search, nutrition APIs, filtering, and optimized performance",
  },
];

const tools = [
  "React.js",
  "Tailwind CSS",
  "TypeScript",
  "Django",
  "Flask",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "NeonDB",
  "SQLAlchemy",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Netlify",
  "Render",
  "Git/GitHub",
  "GCP",
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

const About = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--secondary))] to-[hsl(var(--background))]" />
          <div className="absolute -left-24 top-6 w-80 h-80 rounded-full bg-[hsl(var(--gold))]/14 blur-3xl" />
          <div className="absolute right-[-10%] top-24 w-96 h-96 rounded-full bg-[hsl(var(--royal-blue-light))]/16 blur-3xl" />

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-accent text-xm font-semibold uppercase tracking-[0.2em]">
                About Me
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-heading leading-tight text-foreground">
                Full-stack builder for performant, reliable launches.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                I'm Divya S, a full-stack developer building responsive React frontends, Django-based backends, and PostgreSQL-powered applications for real-world products.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">Chennai, India • IST (GMT+5:30)</span>
                <span className="px-3 py-1 rounded-full bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">React / Django / PostgreSQL</span>
                <span className="px-3 py-1 rounded-full bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">Open to opportunities</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="default" size="lg" className="btn-glow bg-[hsl(var(--royal-blue))] text-white hover:bg-[hsl(var(--royal-blue-light))]" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-[hsl(var(--border))] text-foreground" asChild>
                  <Link to="/resume.pdf" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[hsl(var(--border))] bg-white/90 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.08)]"
                  >
                    <p className="text-2xl font-semibold text-[hsl(var(--royal-blue))]">{item.value}</p>
                    <p className="text-sm text-foreground font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.hint}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Profile card */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative rounded-3xl border border-[hsl(var(--border))] bg-white/90 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.12)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--royal-blue))]/8 via-transparent to-[hsl(var(--gold))]/10" />
                <div className="relative z-10 flex flex-col items-center text-center gap-3">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[hsl(var(--royal-blue))] via-[hsl(var(--royal-blue-light))] to-[hsl(var(--gold))] shadow-lg flex items-center justify-center text-white text-3xl font-bold">
                    DS
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Divya S</h3>
                  <p className="text-muted-foreground">Full-Stack Developer</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Chennai, India
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    IST (GMT+5:30)
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 w-full">
                    {pillars.map((p) => (
                      <div key={p.title} className="rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] p-3 flex flex-col items-center gap-2 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(0,0,0,0.08)]">
                        <p.icon className="w-5 h-5 text-[hsl(var(--royal-blue))]" />
                        <span className="text-xs font-semibold text-foreground">{p.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 md:py-20 royal-section text-white">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeIn()} className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-[hsl(var(--gold))] tracking-[0.2em] uppercase">How I work</span>
              <h2 className="text-3xl md:text-4xl font-heading text-white mt-3">API-first, polished, performance-minded.</h2>
              <p className="text-white/80 mt-3 max-w-2xl mx-auto">I pair practical user interfaces with reliable backends, focusing on performance, clean APIs, and maintainable delivery.</p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((item, idx) => (
                <motion.div key={item.title} {...fadeIn(idx * 0.1)} className="card-advanced card-royal p-6">
                  <div className="relative z-10 space-y-3">
                    <item.icon className="w-6 h-6 text-[hsl(var(--gold))]" />
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience teaser */}
        <section className="py-16 md:py-20 section-gradient">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn()} className="text-center mb-10">
              <span className="inline-block text-sm font-semibold text-accent tracking-[0.2em] uppercase">Experience</span>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-3">Where I’ve been</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">A short overview of my recent roles across full-stack and frontend development.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {experience.slice(0, 2).map((role, idx) => (
                <motion.div key={role.title} {...fadeIn(idx * 0.1)} className="card-advanced p-5 bg-white/95">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="px-2 py-1 rounded-full bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] font-semibold text-[hsl(var(--foreground))]">
                      {role.range}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                  <p className="text-sm text-[hsl(var(--royal-blue))] font-semibold mb-2">{role.company}</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {role.details.slice(0, 2).map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--royal-blue))]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="border-[hsl(var(--border))] bg-primary text-white" asChild>
                <Link to="/experience">View full experience</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects summary */}
        <section className="py-16 md:py-20 royal-section text-white">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeIn()} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <span className="inline-block text-sm font-semibold text-[hsl(var(--gold))] tracking-[0.2em] uppercase">Selected work</span>
                <h2 className="text-3xl font-heading text-white mt-2">Recent projects</h2>
                <p className="text-white/80 mt-2 max-w-2xl">A quick glance at shipped products across billing, national records, and recipe search.</p>
              </div>
              <Button variant="outline" className="border-white/30 bg-accent text-white hover:bg-white" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((p, idx) => (
                <motion.div key={p.name} {...fadeIn(idx * 0.1)} className="card-advanced card-royal p-5 border-2">
                  <div className="flex items-center gap-2 text-xs text-white/75 mb-2">
                    <Cpu className="w-4 h-4 text-[hsl(var(--gold))]" />
                    <span>{p.tech}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-white/80">{p.impact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
