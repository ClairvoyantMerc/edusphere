"use client"

import { useEffect, useState } from "react"
import { format, } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarComponent } from "@/components/calendar/calendar"
import { Bell, Activity, TrendingUp, Users, GraduationCap, BookOpen, Clock, MapPin } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { CalendarEvent, EventCategory, EVENT_CATEGORIES } from "@/types/calendar"
import { cn } from "@/lib/utils"

// Sample events data
const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Math Test",
    description: "Chapter 5: Algebra",
    startTime: new Date(2024, 0, 15, 10, 0),
    endTime: new Date(2024, 0, 15, 11, 30),
    category: EventCategory.TEST,
    location: "Room 101"
  },
  {
    id: "2",
    title: "Science Class",
    startTime: new Date(2024, 0, 15, 13, 0),
    endTime: new Date(2024, 0, 15, 14, 30),
    category: EventCategory.CLASS,
    location: "Lab 3"
  }
]

// Initial analytics state
const initialAnalytics = {
  totalStudents: 1234,
  totalTeachers: 89,
  activeCourses: 156,
  upcomingEvents: 12,
}

// Mock real-time data - replace with actual API calls
const fetchAnalytics = () => ({
  totalStudents: Math.floor(Math.random() * 2000) + 1000,
  totalTeachers: Math.floor(Math.random() * 100) + 80,
  activeCourses: Math.floor(Math.random() * 200) + 100,
  upcomingEvents: Math.floor(Math.random() * 20) + 5,
})

const mockActivities = [
  { id: 1, type: "login", user: "John Smith", role: "Teacher", time: "2 minutes ago" },
  { id: 2, type: "grade", user: "Sarah Wilson", role: "Teacher", time: "5 minutes ago" },
  { id: 3, type: "attendance", user: "Mark Johnson", role: "Teacher", time: "10 minutes ago" },
  { id: 4, type: "submission", user: "Emily Brown", role: "Student", time: "15 minutes ago" },
]

const mockNotifications = [
  { id: 1, message: "New assignment submission", type: "info", time: "1 minute ago" },
  { id: 2, message: "Staff meeting at 2 PM", type: "warning", time: "30 minutes ago" },
  { id: 3, message: "System maintenance scheduled", type: "error", time: "1 hour ago" },
]

const EventCard = ({ event }: { event: CalendarEvent }) => {
  const getCategoryColor = (category: EventCategory) => {
    const categoryInfo = EVENT_CATEGORIES.find(c => c.id === category)
    return categoryInfo?.color || "bg-gray-500"
  }

  return (
    <div className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
      <div className="flex items-start gap-3">
        <div className={cn(
          "w-2 h-2 rounded-full mt-2",
          getCategoryColor(event.category)
        )} />
        <div className="flex-1">
          <h3 className="font-medium">{event.title}</h3>
          {event.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {event.description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>
                {format(event.startTime, 'MMM d, h:mm a')}
              </span>
            </div>
            {event.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const [analytics, setAnalytics] = useState(initialAnalytics)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [events] = useState<CalendarEvent[]>(sampleEvents)
  const [isEventSheetOpen, setIsEventSheetOpen] = useState(false)

  // Simulating real-time updates only on the client side
  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics(fetchAnalytics())
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const selectedDateEvents = selectedDate
    ? events.filter(
        event => format(event.startTime, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
      ).sort((a, b) => a.startTime.getTime() - b.startTime.getTime())
    : []

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setIsEventSheetOpen(true)
  }

  return (
    <div className="container space-y-8 py-8">
      {/* Analytics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalStudents}</div>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+20% from last month</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalTeachers}</div>
            <Progress value={65} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+5% from last month</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.activeCourses}</div>
            <Progress value={82} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.upcomingEvents}</div>
            <Progress value={45} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+2 new today</p>
          </CardContent>
        </Card>
      </div>

      {/* Calendar and Activity Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Calendar Widget */}
        <Card className="col-span-4 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Schedule and upcoming events</CardDescription>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onDateSelect={handleDateSelect}
              events={events}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Activity Log */}
        <Card className="col-span-3 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-4">
                {mockActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{activity.user}</span>
                        <Badge variant="secondary">{activity.role}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground block">{activity.type}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Notifications */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            <div className="space-y-4">
              {mockNotifications.map((notification) => (
                <div key={notification.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{notification.message}</span>
                      <Badge variant={notification.type as "default" | "secondary" | "destructive"}>
                        {notification.type}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground block">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Events Sheet */}
      <Sheet open={isEventSheetOpen} onOpenChange={setIsEventSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Events for {format(selectedDate, 'MMMM d, yyyy')}</SheetTitle>
          </SheetHeader>
          <div className="mt-8">
            {selectedDateEvents.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[200px] text-center">
                <p className="text-muted-foreground">No events scheduled for this day</p>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedDateEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
