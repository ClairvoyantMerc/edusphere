"use client"

import { useState } from "react"
import { format, isAfter, startOfDay } from "date-fns"
import { CalendarComponent } from "@/components/calendar/calendar"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { CalendarEvent, EventCategory, EVENT_CATEGORIES } from "@/types/calendar"
import { MapPin, Clock, } from "lucide-react"
import { cn } from "@/lib/utils"
import { AddEventDialog } from "@/components/calendar/add-event-dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Sample events data - replace with your actual data source
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

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents)

  const selectedDateEvents = selectedDate
    ? events.filter(
        event => format(event.startTime, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
      ).sort((a, b) => a.startTime.getTime() - b.startTime.getTime())
    : []

  const upcomingEvents = events
    .filter(event => isAfter(event.startTime, startOfDay(new Date())))
    .sort((a, b) => a.startTime.getTime() - b.startTime.getTime())
    .slice(0, 5)

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  const handleAddEvent = (newEvent: CalendarEvent) => {
    setEvents([...events, newEvent])
    setIsAddEventOpen(false)
  }

  const getCategoryColor = (category: EventCategory) => {
    const categoryInfo = EVENT_CATEGORIES.find(c => c.id === category)
    return categoryInfo?.color || "bg-gray-500"
  }

  const EventCard = ({ event }: { event: CalendarEvent }) => (
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

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Calendar</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8">
        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="max-w-[300px] mx-auto">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onDateSelect={handleDateSelect}
                  events={events}
                  className="rounded-md"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="min-h-[400px]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Upcoming Events</span>
                <AddEventDialog
                  open={isAddEventOpen}
                  onOpenChange={setIsAddEventOpen}
                  onEventAdd={handleAddEvent}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[300px] text-center">
                    <p className="text-muted-foreground">
                      No upcoming events scheduled
                    </p>
                  </div>
                ) : (
                  upcomingEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {EVENT_CATEGORIES.map(category => (
                  <div key={category.id} className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className={cn("w-2 h-2 rounded-full", category.color)} />
                    <span className="text-sm">{category.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Sheet open={!!selectedDate} onOpenChange={() => setSelectedDate(undefined)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-8">
            {selectedDateEvents.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[300px] text-center">
                <p className="text-muted-foreground">
                  No events scheduled for this day
                </p>
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
