import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/students"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Students
      </Link>
      <Link
        href="/teachers"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Teachers
      </Link>
      <Link
        href="/courses"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Courses
      </Link>
      <Link
        href="/grades"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Grades
      </Link>
      <Link
        href="/attendance"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Attendance
      </Link>
      <Link
        href="/calendar"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Calendar
      </Link>
      <Link
        href="/reports"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Reports
      </Link>
      <Link
        href="/messages"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Messages
      </Link>
      <Link
        href="/library"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Library
      </Link>
      <Link
        href="/finance"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Finance
      </Link>
    </nav>
  )
}
