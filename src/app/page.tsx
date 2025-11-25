"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Target,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Github,
  Code,
  Info,
  Zap,
  BookOpen,
  Users,
  Lightbulb,
  Rocket,
  Heart,
  Brain,
} from "lucide-react";
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

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 pointer-events-none" />

      {/* Floating orbs animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/30 dark:bg-cyan-500/20 rounded-full blur-3xl"
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold gradient-glow bg-clip-text text-transparent">
              CodeKoan
            </span>
          </motion.div>

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
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              This is just the beginning.{" "}
              <span className="gradient-glow bg-clip-text text-transparent">
                A humble start.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed italic"
          >
            Coding is not just about syntax, it is about <span className="font-semibold text-primary not-italic">freedom.</span> Creativity is the greatest rebellion — and today, innovation in technology is our rebellion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Link href="/login">
              <Button
                size="lg"
                variant="gradient"
                className="text-lg px-8 py-6 group"
              >
                For Students: Login
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/college">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                For Colleges: Partner With Us
              </Button>
            </Link>
          </motion.div>


        </div>
      </section>

      {/* ===== WHY CODEKOAN SECTION ===== */}
      <section id="why-codekoan" className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Why CodeKoan?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are not a typical EdTech. We build culture, not just curriculum.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              icon: Rocket,
              title: "Placement Ready",
              description:
                "AI-powered interview prep, resume refinement, and company-specific guidance. Your path to your dream job.",
              color: "from-blue-500/20 to-cyan-500/20",
            },
            {
              icon: BookOpen,
              title: "Master Your Craft",
              description:
                "Learn DSA, Full Stack Development, and Data Analytics from industry mentors who have shipped real products.",
              color: "from-purple-500/20 to-pink-500/20",
            },
            {
              icon: Users,
              title: "Build Culture",
              description:
                "Create a thriving coding community at your college with hackathons, projects, and real peer learning.",
              color: "from-orange-500/20 to-red-500/20",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`glass-card rounded-2xl p-8 text-center group cursor-pointer bg-gradient-to-br ${feature.color} border border-primary/20 hover:border-primary/50 transition-colors backdrop-blur-sm`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== MENTORS SECTION ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every path is a journey. The destination is freedom — freedom to create, to innovate, to belong.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              title: "Data Structures & Algorithms",
              icon: Zap,
              description:
                "Where logic sharpens the mind. Master the fundamentals that power every great system.",
              href: "/dsa",
            },
            {
              title: "Full Stack Development",
              icon: Rocket,
              description:
                "Where imagination flows into creation. Build web applications that solve real problems.",
              href: "/full-stack",
            },
            {
              title: "Data Analytics",
              icon: TrendingUp,
              description:
                "Where patterns reveal hidden truths. Turn data into decisions that matter.",
              href: "/data-analytics",
            },
            {
              title: "Aptitude & Reasoning",
              icon: Brain,
              description:
                "Master logic and speed. Conquer the MCQ round with tricks, patterns, and wit.",
              href: "/aptitude",
            },
          ].map((path, index) => (
            <Link key={index} href={path.href} className="h-full">
              <motion.div
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all group cursor-pointer h-full flex flex-col bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                  <path.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{path.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{path.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about-section" className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">About CodeKoan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming college coding education through intelligence and community.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Heart,
              title: "Our Mission",
              points: [
                "Spark curiosity in young minds",
                "Turn classrooms into playgrounds of creativity",
                "Guide students from syntax to spirit",
                "From code to creation",
              ],
            },
            {
              icon: Sparkles,
              title: "Our Approach",
              points: [
                "AI-powered personalized learning",
                "Real industry mentorship",
                "Community-driven culture building",
                "Placement-first curriculum design",
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 border border-primary/20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== MENTORS SECTION ===== */}
      <section id="mentors-section" className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Meet Your Mentors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
            Learn from builders, creators, and innovators who have walked the path you're about to take.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {[
            {
              name: "Krishna Madan",
              role: "CEO & Founder, Data Scientist",
              specialty: "Data Science & Analytics",
              bio: "Ex-Data Scientist at Geekster. Transforms raw data into insights. Makes complex concepts simple and intuitive.",
              image: "https://media.licdn.com/dms/image/v2/D5603AQHrxnTxmV9Bzg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726165411902?e=1765411200&v=beta&t=IKX-ZNKIl_CqAEllaqoQ6PuwW9k7Y-qoz5juDj1-U0M",
              color: "from-purple-500/20 to-pink-500/20",
            },
            {
              name: "Tanisha Agarwal",
              role: "Marketting Specialist & Trainer",
              specialty: "Personal Development & AI",
              bio: "Builder at heart, dreamer by nature. Created CodeKoan to spark revolution in coding education.",
              image: "/images/mentors/tanisha.jpg",
              color: "from-blue-500/20 to-cyan-500/20",
            },
            {
              name: "Rahul Gupta",
              role: "Full Stack Developer",
              specialty: "Web Development",
              bio: "Built 20+ products. Passionate about teaching how to ship code that matters to the world.",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
              color: "from-orange-500/20 to-red-500/20",
            },
            {
              name: "Neha Verma",
              role: "Data Analytics Lead",
              specialty: "Data Science",
              bio: "Transforming data into decisions. Shows students how patterns reveal the stories numbers tell.",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
              color: "from-green-500/20 to-emerald-500/20",
            },
          ].map((mentor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`glass-card rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all group flex flex-col bg-gradient-to-br from-background/80 to-background/60 dark:from-background/40 dark:to-background/20`}
            >
              <div className={`bg-gradient-to-br ${mentor.color} aspect-square flex items-center justify-center overflow-hidden relative w-full`}>
                <motion.img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-1">{mentor.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{mentor.role}</p>
                <p className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-full inline-block mb-3">
                  {mentor.specialty}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                  "{mentor.bio}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto italic">
            The path to mastery runs through your college. They hold the keys to your transformation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/college">
              <Button
                size="lg"
                variant="gradient"
                className="text-lg px-8 py-6 group"
              >
                Ask Your College
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Already Have Access?
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 border-t border-primary/10 bg-gradient-to-b from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 backdrop-blur-md mt-20">
        <div className="container mx-auto px-6 py-20">
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold gradient-glow bg-clip-text text-transparent">CodeKoan</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transforming college coding education through AI and community.
                </p>
              </div>

              {/* Learning Paths */}
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Paths</h4>
                <ul className="space-y-2">
                  <li><Link href="/dsa" className="text-sm text-muted-foreground hover:text-primary transition-colors">DSA</Link></li>
                  <li><Link href="/full-stack" className="text-sm text-muted-foreground hover:text-primary transition-colors">Full Stack</Link></li>
                  <li><Link href="/data-analytics" className="text-sm text-muted-foreground hover:text-primary transition-colors">Data Analytics</Link></li>
                  <li><Link href="/aptitude" className="text-sm text-muted-foreground hover:text-primary transition-colors">Aptitude</Link></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Community</h4>
                <ul className="space-y-2">
                  <li><a href="#about-section" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
                  <li><a href="#mentors-section" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mentors</a></li>
                  <li><a href="/college" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partner With Us</a></li>
                  <li><a href="/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sign In</a></li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Get Started</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ask your college to unlock CodeKoan.
                  </p>
                </div>
                <Link href="/college">
                  <Button size="sm" variant="gradient" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent max-w-6xl mx-auto mb-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground italic">
                This is just the beginning. A humble start.
              </p>
              <p className="text-sm text-muted-foreground">
                Made with <span className="text-primary font-semibold">❤️</span> by <span className="font-semibold text-foreground">CodeKoan</span>
              </p>
              <p className="text-xs text-muted-foreground">
                No © copyright issues. Feel free to copy. If you need any help, <span className="text-primary font-semibold">ping us!</span>
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
