import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/students"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/students" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Students
      </Link>
      <Link
        href="/teachers"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/teachers" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Teachers
      </Link>
      <Link
        href="/courses"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/courses" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Courses
      </Link>
      <Link
        href="/grades"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/grades" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Grades
      </Link>
      <Link
        href="/attendance"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/attendance" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Attendance
      </Link>
      <Link
        href="/calendar"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/calendar" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Calendar
      </Link>
      <Link
        href="/activity"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/activity" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Activity
      </Link>
      <Link
        href="/reports"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/reports" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Reports
      </Link>
      <Link
        href="/messages"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/messages" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Messages
      </Link>
      <Link
        href="/library"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/library" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Library
      </Link>
      <Link
        href="/finance"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/finance" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Finance
      </Link>
    </nav>
  )
}
