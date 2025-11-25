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

const dataAnalyticsCurriculum = [
  {
    phase: "Foundation & Statistics",
    icon: BookOpen,
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Build the mathematical foundation. Where numbers tell stories, and statistics reveal truth.",
    topics: [
      { num: 1, title: "Data Fundamentals & Types" },
      { num: 2, title: "Descriptive Statistics" },
      { num: 3, title: "Probability Distributions" },
      { num: 4, title: "Hypothesis Testing" },
      { num: 5, title: "Inferential Statistics" },
      { num: 6, title: "Statistical Significance" },
      { num: 7, title: "Correlation & Causation" },
    ]
  },
  {
    phase: "Python for Analytics",
    icon: Code,
    color: "from-yellow-500/20 to-orange-500/20",
    description: "Master the language of data. Where Python becomes your analytical superpower.",
    topics: [
      { num: 8, title: "Python Fundamentals" },
      { num: 9, title: "NumPy Arrays & Operations" },
      { num: 10, title: "Pandas DataFrames Essentials" },
      { num: 11, title: "Data Cleaning & Preparation" },
      { num: 12, title: "Data Manipulation & Transformation" },
      { num: 13, title: "Pandas Groupby & Aggregation" },
      { num: 14, title: "Time Series Analysis" },
      { num: 15, title: "Handling Missing Data" },
      { num: 16, title: "Data Validation & Quality" },
    ]
  },
  {
    phase: "Data Visualization",
    icon: Code,
    color: "from-purple-500/20 to-pink-500/20",
    description: "Make data speak. Where visualizations transform insights into understanding.",
    topics: [
      { num: 17, title: "Matplotlib Fundamentals" },
      { num: 18, title: "Seaborn for Statistical Plots" },
      { num: 19, title: "Plotly Interactive Visualizations" },
      { num: 20, title: "Tableau Basics & Dashboards" },
      { num: 21, title: "Chart Types & Best Practices" },
      { num: 22, title: "Color Theory & Design Principles" },
      { num: 23, title: "Storytelling with Data" },
      { num: 24, title: "Interactive Dashboards" },
    ]
  },
  {
    phase: "Data Collection & SQL",
    icon: GitBranch,
    color: "from-green-500/20 to-emerald-500/20",
    description: "Unlock the vault of data. Where SQL queries reveal insights hidden in databases.",
    topics: [
      { num: 25, title: "SQL Fundamentals (SELECT, WHERE)" },
      { num: 26, title: "JOINs & Complex Queries" },
      { num: 27, title: "Aggregation & GROUP BY" },
      { num: 28, title: "Window Functions" },
      { num: 29, title: "Database Design & Optimization" },
      { num: 30, title: "Subqueries & CTEs" },
      { num: 31, title: "Data API Integration" },
      { num: 32, title: "Web Scraping Basics" },
    ]
  },
  {
    phase: "Exploratory Data Analysis (EDA)",
    icon: Code,
    color: "from-indigo-500/20 to-blue-500/20",
    description: "Discover the hidden patterns. Where curiosity meets methodology.",
    topics: [
      { num: 33, title: "EDA Workflow & Techniques" },
      { num: 34, title: "Univariate Analysis" },
      { num: 35, title: "Bivariate & Multivariate Analysis" },
      { num: 36, title: "Outlier Detection & Treatment" },
      { num: 37, title: "Feature Correlation Analysis" },
      { num: 38, title: "Distribution Analysis" },
      { num: 39, title: "Data Profiling & Summary Statistics" },
      { num: 40, title: "Hypothesis Formulation from EDA" },
    ]
  },
  {
    phase: "Machine Learning Basics",
    icon: Lightbulb,
    color: "from-orange-500/20 to-red-500/20",
    description: "Teach machines to learn. Where algorithms discover patterns humans cannot see.",
    topics: [
      { num: 41, title: "ML Fundamentals & Types" },
      { num: 42, title: "Supervised vs Unsupervised Learning" },
      { num: 43, title: "Train-Test Split & Validation" },
      { num: 44, title: "Feature Scaling & Normalization" },
      { num: 45, title: "Linear Regression" },
      { num: 46, title: "Logistic Regression & Classification" },
      { num: 47, title: "Decision Trees & Ensemble Methods" },
      { num: 48, title: "K-Means Clustering" },
      { num: 49, title: "Model Evaluation Metrics" },
      { num: 50, title: "Overfitting & Regularization" },
    ]
  },
  {
    phase: "Advanced ML & Deep Learning",
    icon: Lightbulb,
    color: "from-pink-500/20 to-rose-500/20",
    description: "Push the boundaries of intelligence. Where neural networks achieve superhuman feats.",
    topics: [
      { num: 51, title: "Feature Engineering & Selection" },
      { num: 52, title: "Random Forests & Gradient Boosting" },
      { num: 53, title: "Support Vector Machines (SVM)" },
      { num: 54, title: "Neural Networks Fundamentals" },
      { num: 55, title: "Deep Learning with TensorFlow/Keras" },
      { num: 56, title: "Convolutional Neural Networks (CNN)" },
      { num: 57, title: "Recurrent Neural Networks (RNN)" },
      { num: 58, title: "Natural Language Processing (NLP)" },
      { num: 59, title: "Model Hyperparameter Tuning" },
      { num: 60, title: "Transfer Learning" },
    ]
  },
  {
    phase: "Business Analytics & A/B Testing",
    icon: Code,
    color: "from-cyan-500/20 to-blue-500/20",
    description: "Analytics that drive business. Where data meets strategy.",
    topics: [
      { num: 61, title: "Business Metrics & KPIs" },
      { num: 62, title: "Cohort Analysis" },
      { num: 63, title: "Funnel Analysis" },
      { num: 64, title: "Retention & Churn Analysis" },
      { num: 65, title: "A/B Testing Framework" },
      { num: 66, title: "Statistical Significance in A/B Tests" },
      { num: 67, title: "Customer Lifetime Value (CLV)" },
      { num: 68, title: "Revenue & Profit Analysis" },
    ]
  },
  {
    phase: "Big Data & Production",
    icon: GitBranch,
    color: "from-teal-500/20 to-cyan-500/20",
    description: "Scale to infinity. Where big data becomes insights, and insights become action.",
    topics: [
      { num: 69, title: "Big Data Concepts & Challenges" },
      { num: 70, title: "Hadoop & MapReduce Basics" },
      { num: 71, title: "Apache Spark Fundamentals" },
      { num: 72, title: "Data Pipelines & ETL" },
      { num: 73, title: "Distributed Computing" },
      { num: 74, title: "Cloud Data Warehouses (Snowflake, BigQuery)" },
      { num: 75, title: "Model Deployment & Serving" },
      { num: 76, title: "Monitoring & Model Drift Detection" },
      { num: 77, title: "Data Engineering for Analytics" },
      { num: 78, title: "Real-time Analytics" },
    ]
  },
  {
    phase: "Advanced Topics & Specializations",
    icon: Lightbulb,
    color: "from-violet-500/20 to-purple-500/20",
    description: "The frontier of analytics. Where innovation meets application.",
    topics: [
      { num: 79, title: "Time Series Forecasting" },
      { num: 80, title: "Anomaly Detection" },
      { num: 81, title: "Recommendation Systems" },
      { num: 82, title: "Causal Inference" },
      { num: 83, title: "Bayesian Analytics" },
      { num: 84, title: "Graph Analytics" },
      { num: 85, title: "Computer Vision Applications" },
      { num: 86, title: "Generative AI & LLMs" },
      { num: 87, title: "Ethical AI & Data Privacy" },
      { num: 88, title: "Storytelling & Communication" },
    ]
  }
];

export default function DataAnalyticsPage() {
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
              Data Analytics
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-4 italic">
              From data to insights. From insights to impact.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Master the art and science of turning raw data into actionable insights. Harness the power of statistics, machine learning, and data visualization.
            </p>
            <p className="text-lg text-primary/80 italic mb-8">
              In data we trust. In analytics we grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CURRICULUM PHASES ===== */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="space-y-20">
          {dataAnalyticsCurriculum.map((phase, phaseIdx) => {
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
                {phaseIdx < dataAnalyticsCurriculum.length - 1 && (
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
            <h2 className="text-3xl font-bold mb-6">The Power of Data-Driven Decisions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
              Data analytics is not about numbers. It's about understanding the world through numbers. It's about asking the right questions, finding patterns, and telling compelling stories that drive change.
              <span className="block mt-4 text-primary font-semibold">
                Master data analytics, and you master the future. Every insight is a decision, every decision shapes the world.
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
              description: "The root of all solutions. Where logic becomes poetry and complexity becomes beauty.",
              href: "/dsa",
            },
            {
              title: "Full Stack Development",
              icon: Rocket,
              description: "Dream it, build it, deploy it. Where imagination meets reality in the form of code.",
              href: "/full-stack",
            },
            {
              title: "Aptitude & Reasoning",
              icon: Brain,
              description: "The gateway to opportunity. Where quick thinking meets wisdom, pressure becomes clarity.",
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
          <h2 className="text-4xl font-bold mb-6">Start Your Data Analytics Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community and become a data analyst. From statistics to machine learning, from visualization to big data, master the complete analytics stack.
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
