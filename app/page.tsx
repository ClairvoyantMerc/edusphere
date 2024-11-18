import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to EduSphere
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A modern school management system built with Next.js 14, featuring powerful tools for students, teachers, and administrators.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Student Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive student profiles, attendance tracking, and grade management.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Teacher Portal</h3>
                  <p className="text-sm text-muted-foreground">
                    Course management, attendance records, and grade submission tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Admin Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    School-wide analytics, user management, and system configuration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a href="#" className="font-medium underline underline-offset-4">
              EduSphere Team
            </a>
            . The source code is available on{" "}
            <a href="#" className="font-medium underline underline-offset-4">
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
