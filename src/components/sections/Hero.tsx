import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Database, Globe, Terminal, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingIcons = [
  { Icon: Code2, delay: 0, x: 20, y: 30 },
  { Icon: Database, delay: 0.5, x: 80, y: 60 },
  { Icon: Globe, delay: 1, x: 40, y: 85 },
  { Icon: Terminal, delay: 1.5, x: 70, y: 20 },
  { Icon: Cpu, delay: 2, x: 15, y: 70 },
  { Icon: Layers, delay: 2.5, x: 85, y: 45 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 bg-[hsl(var(--background))] text-foreground">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-glow opacity-80" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `linear-gradient(hsla(var(--border) / 0.4) 1px, transparent 1px),
                         linear-gradient(90deg, hsla(var(--border) / 0.4) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Floating accent shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[hsl(var(--primary))]/40"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))]/35"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[hsl(var(--secondary))] text-[hsl(var(--royal-blue))] shadow-sm border border-[hsl(var(--border))] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--gold))]" />
              <span className="text-sm font-semibold">Building polished, real-world web experiences</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6 leading-tight mb-6 font-heading gradient-text drop-shadow-lg"
            >
              Crafting Digital Experiences
              <br />
              That Feel Premium & Alive
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mb-10 text-balance leading-relaxed"
            >
              Full-stack developer focused on expressive interfaces, reliable backends, and practical user experiences.
              I build with clarity, responsiveness, and clean implementation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button variant="default" size="xl" className="bg-primary text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--royal-blue-light))]" asChild>
                <Link to="/projects" className="group font-semibold flex items-center gap-2">
                  Explore Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className=" border-accent text-accent hover:bg-accent" asChild>
                <Link to="/contact" className="font-semibold">Contact Me</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex gap-10"
            >
              {[
                { value: "1", label: "Years crafting colorful UI + UX" },
                { value: "10+", label: "Projects built across web and mobile" },
                { value: "100%", label: "Hands-on frontend and backend work" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-3xl font-semibold text-[hsl(var(--royal-blue))]">{stat.value}</div>
                  <div className="mt-1 text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Visual */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circular container */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[hsl(var(--royal-blue-light))]/20 via-[hsl(var(--background))] to-[hsl(var(--secondary))] border border-[hsl(var(--border))]" />
              
              {/* Rotating ring */}
              <motion.div 
                className="absolute inset-4 rounded-full border border-dashed border-[hsl(var(--primary))]/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsing glow */}
              <motion.div 
                className="absolute inset-12 rounded-full bg-[hsl(var(--primary))]/8"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Center code block visual */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="glass-card backdrop-blur-sm p-6 max-w-[240px] border border-[hsl(var(--border))]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--royal-blue-light))]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--gold))]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--primary))]" />
                  </div>
                  <div className="space-y-3 font-mono text-xs text-foreground">
                    <motion.div 
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <span className="text-[hsl(var(--royal-blue))]">const</span>
                      <span className="text-foreground">dev</span>
                      <span className="text-[hsl(var(--gold))]">=</span>
                    </motion.div>
                    <motion.div 
                      className="pl-2 text-[hsl(var(--primary))]"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      {"{ creative: true }"}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating tech icons */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  className="absolute w-10 h-10 rounded-xl bg-card border border-[hsl(var(--border))] shadow-md flex items-center justify-center glass-card"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -8, 0]
                  }}
                  transition={{ 
                    opacity: { delay: delay + 0.5, duration: 0.3 },
                    scale: { delay: delay + 0.5, duration: 0.3 },
                    y: { delay: delay + 0.8, duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                </motion.div>
              ))}

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="30%" y1="35%" x2="50%" y2="50%"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                />
                <motion.line
                  x1="70%" y1="25%" x2="50%" y2="50%"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.7, duration: 1 }}
                />
                <motion.line
                  x1="85%" y1="60%" x2="55%" y2="50%"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.9, duration: 1 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
}
