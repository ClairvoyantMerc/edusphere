import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import { AddTeacherDialog } from "@/components/teachers/add-teacher-dialog"

export default function TeachersPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Teachers</h1>
        <AddTeacherDialog />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">89</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">85</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Classes Taught</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">156</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">4.8/5</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-4">
          <div className="grid grid-cols-6 gap-4 font-medium">
            <div>Name</div>
            <div>ID</div>
            <div>Department</div>
            <div>Classes</div>
            <div>Students</div>
            <div>Actions</div>
          </div>
        </div>
        <div className="p-4">
          {/* Sample teacher data - will be replaced with real data */}
          {[1, 2, 3].map((teacher) => (
            <div key={teacher} className="grid grid-cols-6 gap-4 py-3 border-t">
              <div>Dr. Jane Smith</div>
              <div>TCH{1000 + teacher}</div>
              <div>Mathematics</div>
              <div>4</div>
              <div>120</div>
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
