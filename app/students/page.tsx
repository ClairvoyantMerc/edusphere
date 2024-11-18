"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentList } from "@/components/students/student-list"
import { AddStudentDialog } from "@/components/students/add-student-dialog"
import { Users, UserCheck, Clock, GraduationCap } from "lucide-react"

export default function StudentsPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Students</h1>
        <AddStudentDialog />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Users className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Students</h3>
            <p className="text-2xl font-bold">1,234</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-full">
            <UserCheck className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Active Students</h3>
            <p className="text-2xl font-bold">1,180</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-yellow-100 rounded-full">
            <Clock className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Average Attendance</h3>
            <p className="text-2xl font-bold">92%</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-full">
            <GraduationCap className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Average Grade</h3>
            <p className="text-2xl font-bold">B+</p>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Students</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="alumni">Alumni</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <StudentList />
        </TabsContent>
        <TabsContent value="active">
          <StudentList />
        </TabsContent>
        <TabsContent value="inactive">
          <StudentList />
        </TabsContent>
        <TabsContent value="alumni">
          <StudentList />
        </TabsContent>
      </Tabs>
    </div>
  )
}
