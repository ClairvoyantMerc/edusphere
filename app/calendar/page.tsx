import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CalendarComponent } from "@/components/calendar/calendar"
import { AddEventDialog } from "@/components/calendar/add-event-dialog"

export default function CalendarPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <AddEventDialog />
      </div>
      
      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <Card className="p-4">
          <CalendarComponent />
        </Card>
        
        <div className="space-y-6">
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {/* Sample events - will be replaced with real data */}
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-medium">Mathematics Test</p>
                <p className="text-sm text-muted-foreground">Today, 10:00 AM</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-medium">Science Lab</p>
                <p className="text-sm text-muted-foreground">Tomorrow, 2:00 PM</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-medium">Parent Meeting</p>
                <p className="text-sm text-muted-foreground">Friday, 3:30 PM</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Event Categories</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                <span>Tests & Exams</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                <span>Classes</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
                <span>Meetings</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                <span>Activities</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
