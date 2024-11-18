import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TakeAttendanceDialog } from "@/components/attendance/take-attendance-dialog"

export default function AttendancePage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Attendance Management</h1>
        <TakeAttendanceDialog />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">95%</p>
            <p className="text-sm text-muted-foreground">285/300 students present</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weekly Average</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">92.5%</p>
            <p className="text-sm text-muted-foreground">Last 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Absent Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-muted-foreground">Requires follow-up</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Classes Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">8 completed</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-4">
          <div className="grid grid-cols-7 gap-4 font-medium">
            <div>Class</div>
            <div>Time</div>
            <div>Teacher</div>
            <div>Present</div>
            <div>Absent</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
        </div>
        <div className="p-4">
          {/* Sample attendance data - will be replaced with real data */}
          {[1, 2, 3].map((entry) => (
            <div key={entry} className="grid grid-cols-7 gap-4 py-3 border-t">
              <div>Mathematics 101</div>
              <div>09:00 AM</div>
              <div>Dr. Jane Smith</div>
              <div>28</div>
              <div>2</div>
              <div>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                  Completed
                </span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">View</Button>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attendance by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Mathematics</p>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "94%" }} />
                  </div>
                </div>
                <span className="text-sm font-medium">94%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Science</p>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "92%" }} />
                  </div>
                </div>
                <span className="text-sm font-medium">92%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">English</p>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "96%" }} />
                  </div>
                </div>
                <span className="text-sm font-medium">96%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Absences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((absence) => (
                <div key={absence} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-muted-foreground">Mathematics - 3 days</p>
                  </div>
                  <Button variant="outline" size="sm">Contact Parent</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
