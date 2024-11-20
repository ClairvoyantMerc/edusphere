'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Calendar, MessageSquare, BarChart3, GraduationCap } from "lucide-react"
import { MotionDiv } from "@/components/motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-background to-sky-50 dark:from-emerald-950/20 dark:via-background dark:to-sky-950/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container relative pt-24 pb-32 md:pt-32 md:pb-40"
          >
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-400 dark:to-sky-400">
                Transform Your School Management
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl max-w-[42rem] leading-relaxed">
                Streamline administration, enhance learning experiences, and connect your entire school community with our comprehensive management system.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 dark:from-emerald-600 dark:to-emerald-800 dark:hover:from-emerald-500 dark:hover:to-emerald-700 text-white rounded-full px-8">
                  <Link href="/login">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-2 dark:border-emerald-800 dark:hover:bg-emerald-800/20">
                  <Link href="/register">
                    Create Account
                  </Link>
                </Button>
              </div>
            </div>
          </MotionDiv>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-b from-background to-emerald-50/50 dark:to-emerald-950/20">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <MotionDiv 
                {...fadeIn}
                className="text-center space-y-2"
              >
                <h3 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">10k+</h3>
                <p className="text-muted-foreground">Active Students</p>
              </MotionDiv>
              <MotionDiv 
                {...fadeIn}
                className="text-center space-y-2"
              >
                <h3 className="text-4xl font-bold text-sky-600 dark:text-sky-400">500+</h3>
                <p className="text-muted-foreground">Schools</p>
              </MotionDiv>
              <MotionDiv 
                {...fadeIn}
                className="text-center space-y-2"
              >
                <h3 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">95%</h3>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </MotionDiv>
              <MotionDiv 
                {...fadeIn}
                className="text-center space-y-2"
              >
                <h3 className="text-4xl font-bold text-sky-600 dark:text-sky-400">24/7</h3>
                <p className="text-muted-foreground">Support</p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="container py-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-400 dark:to-sky-400">
              Powerful Features for Modern Education
            </h2>
            <p className="text-muted-foreground text-xl max-w-[900px] mx-auto">
              Everything you need to manage your educational institution effectively
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <MotionDiv 
              {...fadeIn}
              className="group relative overflow-hidden rounded-2xl border-2 border-muted bg-card hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-lg transition-all"
            >
              <div className="space-y-4 p-8">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-600 dark:text-emerald-400">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Student Management</h3>
                <p className="text-muted-foreground">
                  Comprehensive student profiles, attendance tracking, and grade management.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv 
              {...fadeIn}
              className="group relative overflow-hidden rounded-2xl border-2 border-muted bg-card hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-lg transition-all"
            >
              <div className="space-y-4 p-8">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-600 dark:text-emerald-400">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Teacher Portal</h3>
                <p className="text-muted-foreground">
                  Course management, attendance records, and grade submission tools.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv 
              {...fadeIn}
              className="group relative overflow-hidden rounded-2xl border-2 border-muted bg-card hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-lg transition-all"
            >
              <div className="space-y-4 p-8">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-600 dark:text-emerald-400">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Admin Dashboard</h3>
                <p className="text-muted-foreground">
                  School-wide analytics, user management, and system configuration.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv 
              {...fadeIn}
              className="group relative overflow-hidden rounded-2xl border-2 border-muted bg-card hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-lg transition-all"
            >
              <div className="space-y-4 p-8">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-600 dark:text-emerald-400">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Communication Hub</h3>
                <p className="text-muted-foreground">
                  Integrated messaging, announcements, and parent communication tools.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv 
              {...fadeIn}
              className="group relative overflow-hidden rounded-2xl border-2 border-muted bg-card hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-lg transition-all"
            >
              <div className="space-y-4 p-8">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-600 dark:text-emerald-400">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Financial Management</h3>
                <p className="text-muted-foreground">
                  Fee tracking, payment processing, and financial reporting tools.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv 
              {...fadeIn}
              className="group relative overflow-hidden rounded-2xl border-2 border-muted bg-card hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-lg transition-all"
            >
              <div className="space-y-4 p-8">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-900/50 p-3 text-emerald-600 dark:text-emerald-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Resource Library</h3>
                <p className="text-muted-foreground">
                  Digital content management and sharing platform for learning materials.
                </p>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 bg-gradient-to-br from-emerald-50/50 to-sky-50/50 dark:from-emerald-950/20 dark:to-sky-950/20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-400 dark:to-sky-400">
                How EduSphere Works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <MotionDiv 
                {...fadeIn}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-muted-foreground">Create your school account and set up your administration panel</p>
              </MotionDiv>
              <MotionDiv 
                {...fadeIn}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold">Customize</h3>
                <p className="text-muted-foreground">Configure your school's settings and invite staff members</p>
              </MotionDiv>
              <MotionDiv 
                {...fadeIn}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold">Start Managing</h3>
                <p className="text-muted-foreground">Begin using the platform to streamline your school operations</p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-400 dark:to-sky-400 mb-16">
              What Our Users Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <MotionDiv 
                {...fadeIn}
                className="bg-gradient-to-br from-emerald-50/50 to-sky-50/50 dark:from-emerald-950/10 dark:to-sky-950/10 rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "EduSphere has revolutionized how we manage our school. The interface is intuitive and the features are comprehensive."
                </p>
                <div className="border-t border-muted pt-4">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">School Principal</div>
                </div>
              </MotionDiv>
              <MotionDiv 
                {...fadeIn}
                className="bg-gradient-to-br from-emerald-50/50 to-sky-50/50 dark:from-emerald-950/10 dark:to-sky-950/10 rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "As a teacher, I love how easy it is to track attendance and manage grades. It saves me hours of work every week."
                </p>
                <div className="border-t border-muted pt-4">
                  <div className="font-semibold">Mark Thompson</div>
                  <div className="text-sm text-muted-foreground">High School Teacher</div>
                </div>
              </MotionDiv>
              <MotionDiv 
                {...fadeIn}
                className="bg-gradient-to-br from-emerald-50/50 to-sky-50/50 dark:from-emerald-950/10 dark:to-sky-950/10 rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "The parent communication features have greatly improved our engagement with families. Everything is streamlined and efficient."
                </p>
                <div className="border-t border-muted pt-4">
                  <div className="font-semibold">Lisa Chen</div>
                  <div className="text-sm text-muted-foreground">Parent Coordinator</div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-br from-emerald-50/50 to-sky-50/50 dark:from-emerald-950/20 dark:to-sky-950/20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-400 dark:to-sky-400">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <MotionDiv 
                {...fadeIn}
                className="bg-card rounded-lg p-6 shadow-sm border border-muted"
              >
                <h3 className="text-lg font-semibold mb-2">How secure is EduSphere?</h3>
                <p className="text-muted-foreground">We implement industry-standard security measures including data encryption, regular backups, and strict access controls to ensure your school's data is safe.</p>
              </MotionDiv>
              <MotionDiv 
                {...fadeIn}
                className="bg-card rounded-lg p-6 shadow-sm border border-muted"
              >
                <h3 className="text-lg font-semibold mb-2">Can I try EduSphere before purchasing?</h3>
                <p className="text-muted-foreground">Yes! We offer a 30-day free trial with full access to all features, allowing you to experience the platform's capabilities firsthand.</p>
              </MotionDiv>
              <MotionDiv 
                {...fadeIn}
                className="bg-card rounded-lg p-6 shadow-sm border border-muted"
              >
                <h3 className="text-lg font-semibold mb-2">What support do you provide?</h3>
                <p className="text-muted-foreground">We offer 24/7 customer support through chat, email, and phone. Our team is always ready to help you with any questions or technical issues.</p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-700 dark:to-sky-700">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
                Ready to Transform Your School?
              </h2>
              <p className="text-xl text-white/90">
                Join thousands of schools already using EduSphere to streamline their operations
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 rounded-full px-8">
                  <Link href="/login">
                    Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-2 border-white text-white hover:bg-white/10 dark:border-white/50 dark:hover:border-white">
                  <Link href="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-muted bg-muted/50">
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
                <li><Link href="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted text-center text-muted-foreground">
            <p> 2024 EduSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
