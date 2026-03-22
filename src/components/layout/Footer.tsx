import { Link } from "react-router-dom";
import { Code2, Github, Linkedin, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@divyas.dev", label: "Email" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[hsl(var(--background))] text-foreground border-t border-[hsl(var(--border))]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--secondary))] to-[hsl(var(--background))]" />
      <div className="absolute -left-24 top-[-80px] w-72 h-72 rounded-full bg-[hsl(var(--gold))]/12 blur-3xl" />
      <div className="absolute right-[-8%] bottom-[-60px] w-80 h-80 rounded-full bg-[hsl(var(--royal-blue-light))]/14 blur-3xl" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,hsla(var(--royal-blue)/0.08),transparent_45%)]" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr,1.1fr] items-start">
          {/* Brand + intro */}
          <div className="space-y-4 max-w-md">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--royal-blue))] flex items-center justify-center shadow-lg shadow-[hsla(var(--royal-blue)/0.25)] group-hover:shadow-[0_10px_30px_rgba(30,64,175,0.25)] transition-shadow">
                <Code2 className="w-5 h-5 text-[hsl(var(--primary-foreground))]" />
              </div>
              <div className="leading-tight">
                <p className="font-bold text-lg tracking-tight group-hover:text-[hsl(var(--royal-blue))] transition-colors">Divya S</p>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              I build responsive React frontends and Django/Flask REST backends—shipped with polish, performance, and calm delivery.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--royal-blue))] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">24h response</span>
              <span className="px-3 py-1 rounded-full bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">Remote-friendly</span>
              <span className="px-3 py-1 rounded-full bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">Performance-first</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground tracking-tight">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-muted-foreground hover:text-[hsl(var(--royal-blue))] transition-all text-sm"
                  >
                    <span className="h-[1px] w-0 bg-[hsl(var(--royal-blue))] group-hover:w-4 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact card */}
          <div className="max-w-sm w-full">
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-white/90 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[hsl(var(--royal-blue))]">Availability</span>
                
              </div>
              <p className="text-muted-foreground text-sm">
                Ready to start your next build. Drop a line and I’ll reply within 24 hours.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Chennai, India (remote-friendly)
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                IST (GMT+5:30)
              </div>
              <a
                href="mailto:hello@divyas.dev"
                className="inline-flex items-center gap-2 text-[hsl(var(--royal-blue))] hover:text-[hsl(var(--royal-blue-light))] font-semibold transition-transform hover:translate-x-1"
              >
                hello@divyas.dev
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[hsl(var(--border))] flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p className="leading-tight">© {new Date().getFullYear()} Divya S. All rights reserved.</p>
          <p className="leading-tight">Built with React, TypeScript and Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
