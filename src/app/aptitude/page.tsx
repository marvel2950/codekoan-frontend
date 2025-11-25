"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Brain, Zap, Target, Rocket, TrendingUp, Code } from "lucide-react";
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

const aptitudeTopics = [
  {
    category: "Quantitative Aptitude",
    icon: Brain,
    color: "from-blue-500/20 to-cyan-500/20",
    topics: [
      {
        title: "Number System & Percentage",
        tricks: [
          "Convert percentages to fractions for speed",
          "Remember: 25% = 1/4, 33.33% = 1/3, 20% = 1/5",
          "Use approximation when calculations get complex"
        ]
      },
      {
        title: "Algebra & Equations",
        tricks: [
          "Factorization is your best friend",
          "Always check if the equation is a perfect square",
          "Substitution often reveals hidden patterns"
        ]
      },
      {
        title: "Geometry & Mensuration",
        tricks: [
          "Draw the diagram, even if they don't ask for it",
          "Pythagorean theorem solves more than you think",
          "Similar triangles hide in most geometry problems"
        ]
      },
      {
        title: "Time, Speed & Distance",
        tricks: [
          "Relative speed = sum or difference (depends on direction)",
          "Use LCM to find when they meet again",
          "Convert everything to same units before solving"
        ]
      }
    ]
  },
  {
    category: "Logical Reasoning",
    icon: Lightbulb,
    color: "from-purple-500/20 to-pink-500/20",
    topics: [
      {
        title: "Syllogism & Logic",
        tricks: [
          "Draw circles for Venn diagrams—visualization is key",
          "Never assume beyond what's given",
          "All, Some, None—master these keywords"
        ]
      },
      {
        title: "Analogies & Relationships",
        tricks: [
          "Find the exact relationship, not just similarity",
          "Apply the same relationship to the blank pair",
          "Sometimes the trick is recognizing exception patterns"
        ]
      },
      {
        title: "Coding-Decoding",
        tricks: [
          "Look for the pattern in position shifts",
          "Check if it's alphabetical, numerical, or both",
          "Reverse-engineering from answer choices saves time"
        ]
      },
      {
        title: "Blood Relations & Seating",
        tricks: [
          "Use a family tree for complex relationships",
          "For seating: create a simple diagram",
          "Track constraints carefully—one missed detail ruins it"
        ]
      }
    ]
  },
];

const mcqStrategies = [
  {
    name: "Elimination Method",
    emoji: "🎯",
    description: "Remove obviously wrong answers first. Narrows down your choices significantly.",
    steps: [
      "Identify clearly wrong options immediately",
      "Compare remaining options carefully",
      "Choose the best among remaining choices"
    ]
  },
  {
    name: "Time Management",
    emoji: "⏱️",
    description: "2 minutes per question is the magic number. Know when to skip and return.",
    steps: [
      "If unsure after 90 seconds, mark and move on",
      "Return to tough questions with fresh perspective",
      "Easy questions build confidence and momentum"
    ]
  },
  {
    name: "Reverse Engineering",
    emoji: "🔄",
    description: "Work backwards from answer choices. Often faster than solving forward.",
    steps: [
      "Check if answers fit the question pattern",
      "Substitute answer options into the question",
      "See which one makes logical sense"
    ]
  },
  {
    name: "Pattern Recognition",
    emoji: "🧩",
    description: "Spot recurring patterns in questions. Tests often repeat structures.",
    steps: [
      "Study past papers for recurring question types",
      "Learn standard tricks for each pattern",
      "Apply memorized solutions with speed"
    ]
  }
];

export default function AptitudePage() {
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
              Aptitude & Reasoning
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-4 italic">
              This is just the beginning. A humble start.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Master the language of logic. Where quick thinking meets deep understanding, and every puzzle becomes a pathway to clarity.
            </p>
            <p className="text-lg text-amber-500/80 italic mb-8">
              The gateway to placement glory. The MCQ round awaits no one—but it bows to the prepared.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== TOPICS SECTION ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Master the Fundamentals</h2>
          <p className="text-lg text-muted-foreground">Comprehensive coverage with practical shortcuts and proven strategies</p>
        </motion.div>

        <div className="space-y-16">
          {aptitudeTopics.map((section, sectionIdx) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={sectionIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${section.color}`}>
                      <IconComponent className="w-8 h-8 text-foreground" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{section.category}</h2>
                    </div>
                  </div>
                </div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.topics.map((topic, topicIdx) => (
                    <motion.div
                      key={topicIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: topicIdx * 0.03 }}
                      viewport={{ once: true }}
                      className="glass-card border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-all group bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10"
                    >
                      <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-foreground">{topic.title}</h4>
                        <ul className="space-y-2">
                          {topic.tricks.map((trick, trickIdx) => (
                            <li key={trickIdx} className="flex gap-2 text-xs">
                              <span className="text-primary font-bold flex-shrink-0">✦</span>
                              <span className="text-muted-foreground">{trick}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Phase Divider */}
                {sectionIdx < aptitudeTopics.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== MCQ STRATEGIES SECTION ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">MCQ Mastery Strategies</h2>
          <p className="text-lg text-muted-foreground">Essential tactics to conquer the initial screening round</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16"
        >
          {mcqStrategies.map((strategy, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card border border-border/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all"
            >
              <div className="text-5xl mb-4">{strategy.emoji}</div>
              <h3 className="text-2xl font-bold mb-3">{strategy.name}</h3>
              <p className="text-muted-foreground mb-6">{strategy.description}</p>
              <ol className="space-y-3">
                {strategy.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-amber-500 font-bold text-lg">{i + 1}.</span>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </motion.div>
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
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 dark:from-amber-500/20 dark:via-orange-500/20 dark:to-rose-500/20 border border-primary/20 rounded-2xl p-12 text-center">
            <Zap className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">The Path to Mastery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
              Speed without accuracy is chaos. Accuracy without speed is hesitation. Master both, and you become unstoppable. 
              <span className="block mt-4 text-amber-600 font-semibold">
                The MCQ round doesn't test how smart you are. It tests how well you've prepared. And preparation always wins.
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
              description: "The foundation upon which all solutions are built. Master it, and you master creation itself.",
              href: "/dsa",
            },
            {
              title: "Full Stack Development",
              icon: Rocket,
              description: "From pixels to databases. The art of building complete worlds within machines.",
              href: "/full-stack",
            },
            {
              title: "Data Analytics",
              icon: TrendingUp,
              description: "See what others cannot. In every number lies a story waiting to be told.",
              href: "/data-analytics",
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
          <h2 className="text-4xl font-bold mb-6">Ready to Master Aptitude?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join CodeKoan and practice these tricks with guided problems, real mentors, and a community of ambitious learners.
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
