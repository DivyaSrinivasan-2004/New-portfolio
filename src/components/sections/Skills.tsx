import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    gradient: "linear-gradient(135deg, hsl(var(--royal-blue)) 0%, hsl(var(--royal-blue-light)) 50%, hsl(var(--gold)) 100%)",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "HTML5", level: 94 },
      { name: "CSS3", level: 92 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    gradient: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--royal-blue-light)) 100%)",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "Vite", level: 88 },
      { name: "Responsive Design", level: 94 },
    ],
  },
  {
    id: "backend",
    title: "Backend / APIs",
    icon: Server,
    gradient: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--royal-blue)) 70%)",
    skills: [
      { name: "Django", level: 90 },
      { name: "Flask", level: 84 },
      { name: "FastAPI", level: 82 },
      { name: "Django REST Framework", level: 90 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    id: "database",
    title: "Databases & Methodologies",
    icon: Database,
    gradient: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--royal-blue)) 100%)",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 86 },
      { name: "NeonDB", level: 78 },
      { name: "SQL (RDBMS)", level: 88 },
      { name: "Database Design", level: 86 },
      { name: "Debugging", level: 87 },
      { name: "Performance Optimization", level: 84 },
    ],
  },
  {
    id: "libraries",
    title: "Libraries & Deployment",
    icon: Wrench,
    gradient: "linear-gradient(135deg, hsl(var(--royal-blue)) 0%, hsl(var(--gold)) 90%)",
    skills: [
      { name: "Pandas / NumPy", level: 82 },
      { name: "Matplotlib", level: 78 },
      { name: "SQLAlchemy", level: 82 },
      { name: "OpenAPI", level: 80 },
      { name: "Netlify / Render / Cloud", level: 80 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    gradient: "linear-gradient(135deg, hsl(var(--royal-blue-light)) 0%, hsl(var(--royal-blue)) 80%)",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Google Cloud Platform", level: 78 },
      { name: "VS Code", level: 92 },
      { name: "PyCharm", level: 86 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const currentCategory = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section className="pt-24 pb-16 relative overflow-hidden bg-[hsl(var(--background))]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--secondary))] to-[hsl(var(--background))]" />
      <div className="absolute -left-24 top-10 w-72 h-72 rounded-full bg-[hsl(var(--gold))]/14 blur-3xl" />
      <div className="absolute right-[-10%] top-1/3 w-96 h-96 rounded-full bg-[hsl(var(--royal-blue-light))]/18 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsla(var(--royal-blue)/0.08),transparent_40%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-[hsl(var(--gold))] mb-3 tracking-[0.22em] uppercase">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
            Technology toolbox
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to build responsive frontends, reliable APIs, and optimized data layers.
          </p>
        </motion.div>

        {/* Category Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 p-2 bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-[hsl(var(--navy))]" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 rounded-xl"
                      style={{ backgroundImage: category.gradient }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? "text-[hsl(var(--navy))]" : ""}`} />
                  <span className="relative z-10 hidden sm:inline">{category.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-[hsl(var(--border))] hover:shadow-lg transition-all duration-300">
                    {/* Skill name */}
                    <span className="w-40 text-sm font-semibold text-foreground">
                      {skill.name}
                    </span>

                    {/* Progress bar container */}
                    <div className="flex-1 h-3 bg-[hsl(var(--muted))] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full relative"
                        style={{ backgroundImage: currentCategory.gradient }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1 + 0.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Level indicator */}
                    <span className="w-12 text-right text-sm font-semibold text-[hsl(var(--royal-blue))]">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Visual skill dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex justify-center gap-3"
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[hsl(var(--royal-blue))] scale-125"
                    : "bg-[hsl(var(--muted))] hover:bg-[hsl(var(--muted-foreground))]/40"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />
    </section>
  );
}
