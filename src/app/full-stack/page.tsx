"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Code, GitBranch, BookOpen, Lightbulb, Zap, Rocket, TrendingUp, Brain } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fullStackCurriculum = [
  {
    phase: "Frontend Foundations",
    icon: Code,
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Master the art of user interfaces. Where design meets functionality, and pixels become experiences.",
    topics: [
      { num: 1, title: "HTML Basics & Semantic Markup" },
      { num: 2, title: "CSS Fundamentals & Flexbox" },
      { num: 3, title: "CSS Grid & Responsive Design" },
      { num: 4, title: "JavaScript ES6+ Fundamentals" },
      { num: 5, title: "DOM Manipulation & Events" },
      { num: 6, title: "Async JavaScript & Promises" },
      { num: 7, title: "API Integration & Fetch" },
    ]
  },
  {
    phase: "Frontend - React",
    icon: Code,
    color: "from-cyan-500/20 to-blue-500/20",
    description: "Build dynamic interfaces with React. Where components become building blocks of modern web applications.",
    topics: [
      { num: 8, title: "React Basics & JSX" },
      { num: 9, title: "Components & Props" },
      { num: 10, title: "State & Hooks (useState, useEffect)" },
      { num: 11, title: "Custom Hooks & Context API" },
      { num: 12, title: "Forms & Form Handling" },
      { num: 13, title: "Routing with React Router" },
      { num: 14, title: "State Management (Redux/Zustand)" },
      { num: 15, title: "React Performance Optimization" },
      { num: 16, title: "Testing React Components" },
    ]
  },
  {
    phase: "Frontend - Angular",
    icon: Code,
    color: "from-red-500/20 to-pink-500/20",
    description: "Enterprise-grade frontend architecture. Where TypeScript meets dependency injection, and decorators define elegance.",
    topics: [
      { num: 8, title: "Angular Setup & Architecture" },
      { num: 9, title: "Components & Templates" },
      { num: 10, title: "Services & Dependency Injection" },
      { num: 11, title: "RxJS & Observables" },
      { num: 12, title: "Forms (Template & Reactive)" },
      { num: 13, title: "Routing & Navigation" },
      { num: 14, title: "HTTP Client & Data Services" },
      { num: 15, title: "State Management (NgRx)" },
      { num: 16, title: "Testing & Directives" },
    ]
  },
  {
    phase: "Backend - Flask",
    icon: GitBranch,
    color: "from-green-500/20 to-emerald-500/20",
    description: "Lightweight Python web framework. Where simplicity meets power, and rapid development becomes reality.",
    topics: [
      { num: 17, title: "Flask Setup & Application Factory" },
      { num: 18, title: "Routing & URL Building" },
      { num: 19, title: "Request/Response Handling" },
      { num: 20, title: "Templates & Jinja2" },
      { num: 21, title: "Static Files & Assets" },
      { num: 22, title: "Database Integration (SQLAlchemy)" },
      { num: 23, title: "Authentication & Sessions" },
      { num: 24, title: "RESTful API Development" },
      { num: 25, title: "Error Handling & Logging" },
      { num: 26, title: "Testing Flask Applications" },
      { num: 27, title: "Deployment & Production Setup" },
    ]
  },
  {
    phase: "Backend - Spring",
    icon: GitBranch,
    color: "from-orange-500/20 to-red-500/20",
    description: "Enterprise Java framework. Where annotations become magic, and dependency injection defines architecture.",
    topics: [
      { num: 17, title: "Spring Boot Setup & Configuration" },
      { num: 18, title: "Spring MVC & Controllers" },
      { num: 19, title: "Request Mapping & Content Negotiation" },
      { num: 20, title: "Spring Data JPA & Repositories" },
      { num: 21, title: "Database Integration & Transactions" },
      { num: 22, title: "Security & Authentication (Spring Security)" },
      { num: 23, title: "RESTful API Development" },
      { num: 24, title: "Error Handling & Exception Handling" },
      { num: 25, title: "Validation & Constraints" },
      { num: 26, title: "Testing with JUnit & Mockito" },
      { num: 27, title: "Deployment & Containerization" },
    ]
  },
  {
    phase: "Databases & ORMs",
    icon: BookOpen,
    color: "from-purple-500/20 to-pink-500/20",
    description: "The heart of data persistence. Where schemas become models, and queries become conversations with data.",
    topics: [
      { num: 28, title: "SQL Fundamentals" },
      { num: 29, title: "Database Design & Normalization" },
      { num: 30, title: "Indexes & Query Optimization" },
      { num: 31, title: "Joins & Complex Queries" },
      { num: 32, title: "Transactions & ACID Properties" },
      { num: 33, title: "NoSQL Databases (MongoDB)" },
      { num: 34, title: "ORM Concepts & Relationships" },
    ]
  },
  {
    phase: "Full Stack Integration",
    icon: Code,
    color: "from-indigo-500/20 to-blue-500/20",
    description: "Bringing it all together. Where frontend and backend dance in perfect harmony.",
    topics: [
      { num: 35, title: "API Design & Best Practices" },
      { num: 36, title: "CORS & Security Headers" },
      { num: 37, title: "Authentication Flows (JWT, OAuth)" },
      { num: 38, title: "File Upload & Handling" },
      { num: 39, title: "WebSockets & Real-time Communication" },
      { num: 40, title: "Caching Strategies" },
    ]
  },
  {
    phase: "DevOps & Deployment",
    icon: GitBranch,
    color: "from-yellow-500/20 to-orange-500/20",
    description: "From development to production. Where code becomes service, and deployment becomes art.",
    topics: [
      { num: 41, title: "Version Control (Git)" },
      { num: 42, title: "Docker & Containerization" },
      { num: 43, title: "Docker Compose & Multi-container Apps" },
      { num: 44, title: "CI/CD Pipelines (GitHub Actions, Jenkins)" },
      { num: 45, title: "Cloud Platforms (AWS, Azure, GCP)" },
      { num: 46, title: "Monitoring & Logging" },
    ]
  },
  {
    phase: "Advanced Topics",
    icon: Lightbulb,
    color: "from-violet-500/20 to-purple-500/20",
    description: "The summit of full stack mastery. Where optimization meets innovation.",
    topics: [
      { num: 47, title: "Microservices Architecture" },
      { num: 48, title: "GraphQL APIs" },
      { num: 49, title: "Performance Optimization" },
      { num: 50, title: "Scalability & Load Balancing" },
      { num: 51, title: "Message Queues & Event Streaming" },
      { num: 52, title: "Advanced Security Concepts" },
    ]
  }
];

export default function FullStackPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 pointer-events-none" />

      {/* Floating orbs animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 dark:bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 dark:bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -5 }}
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Full Stack Development
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-4 italic">
              Master both sides of the web.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              From beautiful user interfaces to robust server architectures. Learn the complete stack that powers modern web applications.
            </p>
            <p className="text-lg text-primary/80 italic mb-8">
              Build the entire web. Frontend elegance meets backend power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CURRICULUM PHASES ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="space-y-20">
          {fullStackCurriculum.map((phase, phaseIdx) => {
            const PhaseIcon = phase.icon;
            return (
              <motion.div
                key={phaseIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: phaseIdx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Phase Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${phase.color}`}>
                      <PhaseIcon className="w-8 h-8 text-foreground" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{phase.phase}</h2>
                      <p className="text-muted-foreground italic mt-1">{phase.description}</p>
                    </div>
                  </div>
                </div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.topics.map((topic, topicIdx) => (
                    <motion.div
                      key={topicIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: topicIdx * 0.03 }}
                      viewport={{ once: true }}
                      className="glass-card border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-all group bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-lg font-bold text-primary bg-primary/10 px-3 py-1 rounded-md flex-shrink-0">
                          {topic.num}
                        </span>
                        <p className="text-sm leading-relaxed group-hover:text-foreground transition-colors">
                          {topic.title}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Phase Divider */}
                {phaseIdx < fullStackCurriculum.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== WISDOM SECTION ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 border border-primary/20 rounded-2xl p-12 text-center">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">The Full Stack Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
              Full stack development is not about knowing everything. It's about understanding how every layer connects, how frontend delights users, how backend empowers functionality, and how they dance together.
              <span className="block mt-4 text-primary font-semibold">
                Master the full stack, and you master the art of creating complete digital experiences.
              </span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== EXPLORE OTHER PATHS ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Explore Other Learning Paths</h2>
          <p className="text-lg text-muted-foreground">
            Master multiple skills to become unstoppable.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        >
          {[
            {
              title: "Data Structures & Algorithms",
              icon: Zap,
              description: "Every master was once a beginner. DSA is the discipline that sharpens the mind and reveals hidden patterns.",
              href: "/dsa",
            },
            {
              title: "Data Analytics",
              icon: TrendingUp,
              description: "In the ocean of data lies the island of truth. Learn to navigate and find your treasure.",
              href: "/data-analytics",
            },
            {
              title: "Aptitude & Reasoning",
              icon: Brain,
              description: "The mind is the temple. Aptitude is its prayer. Where speed becomes rhythm, chaos becomes dance.",
              href: "/aptitude",
            },
          ].map((path, index) => (
            <Link key={index} href={path.href} className="h-full">
              <motion.div
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all group cursor-pointer h-full flex flex-col bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                  <path.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{path.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{path.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Begin Your Full Stack Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community and become a full stack developer. From React and Angular to Flask and Spring, master the entire web stack.
          </p>
          <Link href="/college">
            <Button size="lg" variant="gradient">
              Ask Your College
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* ===== BACK TO HOME BUTTON ===== */}
      <section className="relative z-10 container mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
