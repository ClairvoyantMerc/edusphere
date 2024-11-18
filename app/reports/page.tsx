import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AcademicReportCard } from "@/components/reports/academic-report-card"
import { AttendanceReport } from "@/components/reports/attendance-report"
import { TeacherReport } from "@/components/reports/teacher-report"
import { DownloadIcon, PrinterIcon, Share2Icon } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <PrinterIcon className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Share2Icon className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Average GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3.45</p>
            <p className="text-sm text-muted-foreground">+0.15 from last semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Attendance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">92.8%</p>
            <p className="text-sm text-muted-foreground">School-wide average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pass Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">88.5%</p>
            <p className="text-sm text-muted-foreground">All courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Teacher Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">4.2/5.0</p>
            <p className="text-sm text-muted-foreground">Average rating</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="academic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="academic">Academic Performance</TabsTrigger>
          <TabsTrigger value="attendance">Attendance Analysis</TabsTrigger>
          <TabsTrigger value="teacher">Teacher Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="academic" className="space-y-4">
          <AcademicReportCard />
        </TabsContent>
        <TabsContent value="attendance" className="space-y-4">
          <AttendanceReport />
        </TabsContent>
        <TabsContent value="teacher" className="space-y-4">
          <TeacherReport />
        </TabsContent>
      </Tabs>
    </div>
  )
}
