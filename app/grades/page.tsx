import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AddGradeDialog } from "@/components/grades/add-grade-dialog"

export default function GradesPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Grades Management</h1>
        <AddGradeDialog />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Average Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">85.5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Assessments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">245</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">28</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-4">
          <div className="grid grid-cols-7 gap-4 font-medium">
            <div>Student</div>
            <div>Course</div>
            <div>Assessment</div>
            <div>Grade</div>
            <div>Date</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
        </div>
        <div className="p-4">
          {/* Sample grade data - will be replaced with real data */}
          {[1, 2, 3].map((grade) => (
            <div key={grade} className="grid grid-cols-7 gap-4 py-3 border-t">
              <div>John Smith</div>
              <div>Mathematics</div>
              <div>Mid-term Exam</div>
              <div>85%</div>
              <div>2024-01-15</div>
              <div>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                  Published
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
    </div>
  )
}
