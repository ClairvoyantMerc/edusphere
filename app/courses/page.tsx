import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AddCourseDialog } from "@/components/courses/add-course-dialog"
import { PlusCircle } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Courses</h1>
        <AddCourseDialog />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">156</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">142</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Departments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">8</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Class Size</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">25</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-4">
          <div className="grid grid-cols-6 gap-4 font-medium">
            <div>Course Name</div>
            <div>Code</div>
            <div>Department</div>
            <div>Teacher</div>
            <div>Students</div>
            <div>Actions</div>
          </div>
        </div>
        <div className="p-4">
          {/* Sample course data - will be replaced with real data */}
          {[1, 2, 3].map((course) => (
            <div key={course} className="grid grid-cols-6 gap-4 py-3 border-t">
              <div>Advanced Mathematics</div>
              <div>MTH{1000 + course}</div>
              <div>Mathematics</div>
              <div>Dr. Jane Smith</div>
              <div>28</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">View</Button>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
