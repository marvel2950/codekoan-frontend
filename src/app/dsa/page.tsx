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

const dsaCurriculum = [
  {
    phase: "Foundation",
    icon: GitBranch,
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Learn the language of logic. Where every symbol is a thought, and every thought is a pattern.",
    topics: [
      { num: 1, title: "Flowchart" },
      { num: 2, title: "Operators, Variable and Loops" },
      { num: 3, title: "Pattern" },
      { num: 4, title: "Mirror and number pattern" },
      { num: 5, title: "Basic Maths, Pascal Triangle and Fibonacci Prime GCD" },
      { num: 6, title: "Number System, Datatypes and Typecasting" },
      { num: 7, title: "Function" },
    ]
  },
  {
    phase: "Arrays & Search",
    icon: Code,
    color: "from-purple-500/20 to-pink-500/20",
    description: "Master the foundation of data. Where collections become algorithms, and algorithms become art.",
    topics: [
      { num: 8, title: "Array Basic" },
      { num: 9, title: "Reversal Algorithm and Prefix-Suffix" },
      { num: 10, title: "Sorting and Kadane's Algorithm" },
      { num: 11, title: "Binary Search" },
      { num: 12, title: "Time and Space Complexity" },
      { num: 13, title: "2D Array- Part A" },
      { num: 13, title: "2D Array and Moore Vaoting - Part B" },
      { num: 14, title: "Advance Binary Search" },
      { num: 15, title: "String" },
      { num: 16, title: "Wrapper Class and Array List" },
      { num: 17, title: "Problem Solving Class on Array" },
      { num: 18, title: "Sliding window" },
    ]
  },
  {
    phase: "Recursion & Backtracking",
    icon: GitBranch,
    color: "from-orange-500/20 to-red-500/20",
    description: "Dive into the self-referencing mind. Where recursion is meditation, and backtracking is wisdom.",
    topics: [
      { num: 19, title: "Recursion-1" },
      { num: 20, title: "Recursion- 2" },
      { num: 21, title: "Recursion 3" },
      { num: 22, title: "Recursion 4" },
      { num: 23, title: "Recursion and backtracking-1" },
      { num: 24, title: "Recursion and backtracking-2" },
      { num: 25, title: "Recursion and backtracking-3" },
      { num: 26, title: "Recursion and backtracking -4" },
      { num: 27, title: "Prime Sieve Axis Orbit" },
      { num: 28, title: "Divide & Conquer" },
      { num: 29, title: "Recurrence Relation" },
    ]
  },
  {
    phase: "Object-Oriented Programming",
    icon: Code,
    color: "from-green-500/20 to-emerald-500/20",
    description: "The art of abstraction. Where code becomes structure, and structure becomes elegance.",
    topics: [
      { num: 30, title: "OOPS" },
      { num: 31, title: "OOPS-2 & Stack" },
      { num: 32, title: "Stack QPS and Queue 1st" },
      { num: 33, title: "Monotonic Stack QPS" },
      { num: 34, title: "Histogram and Dequeue" },
      { num: 35, title: "Inheritance and Dynamic Stack and Queue" },
    ]
  },
  {
    phase: "Linear Data Structures",
    icon: BookOpen,
    color: "from-indigo-500/20 to-blue-500/20",
    description: "Sequential wisdom. Where nodes connect and chains form bridges of logic.",
    topics: [
      { num: 36, title: "Linkedlist" },
      { num: 37, title: "Linkedlist QPS" },
    ]
  },
  {
    phase: "Trees & Hierarchies",
    icon: GitBranch,
    color: "from-pink-500/20 to-rose-500/20",
    description: "The structure of knowledge. Where roots run deep and branches reach infinite heights.",
    topics: [
      { num: 38, title: "Binary Tree" },
      { num: 39, title: "Tree Question" },
      { num: 40, title: "Binary Search Tree QPS" },
      { num: 41, title: "Binary Search Tree QPS 2" },
      { num: 42, title: "Binary Search Tree Question and OOPS - 2" },
      { num: 43, title: "Comparable and Comparator" },
      { num: 44, title: "Priority Queue & Heap" },
    ]
  },
  {
    phase: "Hashing & Collections",
    icon: Code,
    color: "from-teal-500/20 to-cyan-500/20",
    description: "The art of fast retrieval. Where hashing turns chaos into order, instant access into reality.",
    topics: [
      { num: 45, title: "HashMap and Hashset" },
      { num: 46, title: "HashMap Implementation" },
    ]
  },
  {
    phase: "Graphs & Network",
    icon: GitBranch,
    color: "from-yellow-500/20 to-orange-500/20",
    description: "Connect the universe. Where nodes become communities, and edges become relationships.",
    topics: [
      { num: 47, title: "Graph BFS and DFS" },
      { num: 48, title: "Graphs 2 MST Bipartite" },
      { num: 49, title: "Dijkstra and Bellman Ford" },
      { num: 50, title: "Topological sort and Trie" },
    ]
  },
  {
    phase: "Advanced Techniques",
    icon: Lightbulb,
    color: "from-violet-500/20 to-purple-500/20",
    description: "The summit of mastery. Where optimization becomes intuition, and efficiency becomes art.",
    topics: [
      { num: 51, title: "Dynamic programming-1" },
      { num: 52, title: "Dynamic programming-2" },
      { num: 53, title: "Dynamic programming-3" },
      { num: 54, title: "Dynamic programming-4" },
      { num: 55, title: "Bit Masking" },
    ]
  }
];

export default function DSAPage() {
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
              Data Structures & Algorithms
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-4 italic">
              This is just the beginning. A humble start.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              The foundations of every great system. Master the principles that power the world.
            </p>
            <p className="text-lg text-primary/80 italic mb-8">
              This is not just code. This is the architecture of thought itself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CURRICULUM PHASES ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="space-y-20">
          {dsaCurriculum.map((phase, phaseIdx) => {
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
                {phaseIdx < dsaCurriculum.length - 1 && (
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
            <h2 className="text-3xl font-bold mb-6">The Journey of Mastery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
              DSA is not about memorizing solutions. It's about understanding the dance between time and space, between efficiency and elegance.
              <span className="block mt-4 text-primary font-semibold">
                Every algorithm is a story. Learn to read them, and you will write your own.
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
              title: "Full Stack Development",
              icon: Rocket,
              description: "Build the entire web. Frontend elegance meets backend power. Where creation flows without boundaries.",
              href: "/full-stack",
            },
            {
              title: "Data Analytics",
              icon: TrendingUp,
              description: "Numbers whisper secrets only the patient can hear. Turn data into wisdom, chaos into clarity.",
              href: "/data-analytics",
            },
            {
              title: "Aptitude & Reasoning",
              icon: Brain,
              description: "Logic is meditation. Speed without wisdom is futility. Master both, become unstoppable.",
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
          <h2 className="text-4xl font-bold mb-6">Begin Your DSA Mastery</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community and master the structure of thought. From flowcharts to bit masking, from foundations to the summit.
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
