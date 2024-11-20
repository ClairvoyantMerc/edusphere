import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
          <div className="container relative pt-20 pb-24 md:pt-28 md:pb-32">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your School Management
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-[42rem] leading-normal">
                Streamline administration, enhance learning experiences, and connect your entire school community with our comprehensive management system.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/login">
                    Get Started
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/register">
                    Create Account
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="container py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features for Modern Education
            </h2>
            <p className="text-muted-foreground text-lg max-w-[900px] mx-auto">
              Everything you need to manage your educational institution effectively
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Student Management</h3>
                <p className="text-muted-foreground">
                  Comprehensive student profiles, attendance tracking, and grade management.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Teacher Portal</h3>
                <p className="text-muted-foreground">
                  Course management, attendance records, and grade submission tools.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Admin Dashboard</h3>
                <p className="text-muted-foreground">
                  School-wide analytics, user management, and system configuration.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Communication Hub</h3>
                <p className="text-muted-foreground">
                  Integrated messaging, announcements, and parent communication tools.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Resource Library</h3>
                <p className="text-muted-foreground">
                  Digital content management and sharing platform for learning materials.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Financial Management</h3>
                <p className="text-muted-foreground">
                  Fee tracking, payment processing, and financial reporting tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-16">
              What Our Users Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <p className="text-muted-foreground mb-4">
                  "EduSphere has revolutionized how we manage our school. The interface is intuitive and the features are comprehensive."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">School Principal</div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <p className="text-muted-foreground mb-4">
                  "As a teacher, I love how easy it is to track attendance and manage grades. It saves me hours of work every week."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold">Mark Thompson</div>
                  <div className="text-sm text-muted-foreground">High School Teacher</div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <p className="text-muted-foreground mb-4">
                  "The parent communication features have greatly improved our engagement with families. Everything is streamlined and efficient."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold">Lisa Chen</div>
                  <div className="text-sm text-muted-foreground">Parent Coordinator</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/demo" className="text-muted-foreground hover:text-foreground transition-colors">Request Demo</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p> 2024 EduSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
