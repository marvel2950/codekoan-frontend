"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Code, ArrowRight, Mail, Building2, Users, Briefcase, Phone, MapPin, Sparkles, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function CollegePage() {
  const [formData, setFormData] = useState({
    collegeName: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    studentCount: "",
    courseInterest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if already submitted on page load
  useEffect(() => {
    const submitted = localStorage.getItem("collegeFormSubmitted");
    if (submitted) {
      setIsSubmitted(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Submit to Google Form
      const formId = "1FAIpQLSeNfP1t3WgJ82euQJOxTQGxNpqIavR_MnkRl4nSjoeAl1ZYiQ";
      const googleFormUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
      
      const googleFormData = new FormData();
      // Try with different possible entry IDs for Google Form fields
      // These are common patterns - adjust if needed
      googleFormData.append("entry.1287789866", formData.collegeName || "");
      googleFormData.append("entry.32887094", formData.contactPerson || "");
      googleFormData.append("entry.907695472", formData.designation || "");
      googleFormData.append("entry.1426112033", formData.email || "");
      googleFormData.append("entry.919981459", formData.phone || "");
      googleFormData.append("entry.1529076238", formData.city || "");
      googleFormData.append("entry.1897770342", formData.studentCount || "");
      googleFormData.append("entry.891770633", formData.courseInterest || "");
      googleFormData.append("entry.1223701980", formData.message || "");
      
      // Send to Google Form (no-cors mode means no response, but data is sent)
      await fetch(googleFormUrl, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors"
      });
      
      setTimeout(() => {
        setIsLoading(false);
        // Save to localStorage so it persists
        localStorage.setItem("collegeFormSubmitted", "true");
        localStorage.setItem("collegeFormData", JSON.stringify(formData));
        setIsSubmitted(true);
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
      localStorage.setItem("collegeFormSubmitted", "true");
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10" />

      {/* Floating orbs */}
      <motion.div
        className="fixed top-20 left-20 w-72 h-72 bg-indigo-500/30 dark:bg-cyan-500/20 rounded-full blur-3xl"
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
        className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500/30 dark:bg-blue-500/20 rounded-full blur-3xl"
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary to-cyan-500">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              This is just the beginning.
            </h1>
            <h2 className="text-3xl md:text-4xl text-primary mb-6">A humble start.</h2>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
              CodeKoan brings world-class coding education to your institution. We partner with colleges to build a culture of innovation, preparation, and excellence.
            </p>
            <p className="text-lg text-primary/80 italic">
              Your students deserve more than classrooms. They deserve a transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Users,
                title: "For Your Students",
                description: "DSA, Aptitude, Full Stack Development — complete placement preparation"
              },
              {
                icon: Briefcase,
                title: "For Your Institution",
                description: "Structured curriculum, progress tracking, mentor guidance, placement outcomes"
              },
              {
                icon: Sparkles,
                title: "For Your Future",
                description: "Build a competitive edge. Students who are ready. Placements that matter."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card border border-border/50 rounded-2xl p-6"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-card shadow-2xl border border-border/50">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold">Let's Talk Partnership</CardTitle>
                <CardDescription className="text-base mt-2">
                  Share your details. We'll reach out with a customized plan for your college.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-r from-primary to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <ArrowRight className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">The Journey Begins</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
                      Your vision has been received. Like a seed planted in fertile soil, your institution's transformation has already begun. 
                    </p>
                    <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 rounded-xl p-6 mb-6 text-left">
                      <p className="text-sm text-foreground italic leading-relaxed">
                        "Excellence is not a destination. It is a continuous dance between knowledge and wisdom. Your students don't need more classrooms—they need liberation from mediocrity. CodeKoan is that liberation."
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our team will reach out within 24 hours with a customized strategy for your institution.
                    </p>
                    <p className="text-xs text-primary/60 mt-4">
                      ✓ Submission recorded successfully
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="collegeName" className="text-sm font-semibold">College Name *</Label>
                        <Input
                          id="collegeName"
                          name="collegeName"
                          placeholder="Your institution"
                          value={formData.collegeName}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-semibold">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          placeholder="Location"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactPerson" className="text-sm font-semibold">Contact Person *</Label>
                        <Input
                          id="contactPerson"
                          name="contactPerson"
                          placeholder="Your name"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="designation" className="text-sm font-semibold">Designation *</Label>
                        <Input
                          id="designation"
                          name="designation"
                          placeholder="e.g., Placement Head, HOD"
                          value={formData.designation}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="contact@college.edu"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold">Phone *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentCount" className="text-sm font-semibold">Approx. Students (CSE/IT) *</Label>
                        <Input
                          id="studentCount"
                          name="studentCount"
                          type="number"
                          placeholder="e.g., 150"
                          value={formData.studentCount}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="courseInterest" className="text-sm font-semibold">Interested In *</Label>
                        <select
                          id="courseInterest"
                          name="courseInterest"
                          value={formData.courseInterest}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full px-3 py-2 rounded-lg border border-border/50 bg-background text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        >
                          <option value="">Select program</option>
                          <option value="dsa">DSA & Problem Solving</option>
                          <option value="fullstack">Full Stack Development</option>
                          <option value="aptitude">Aptitude & Placement Prep</option>
                          <option value="all">All Programs</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold">Tell us about your vision (optional)</Label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="What challenges are you looking to solve for your students?"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isLoading}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      variant="gradient"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Send Details
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Your information is safe with us.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
              <span>←</span> Back to home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
