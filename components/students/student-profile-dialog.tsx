"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, MapPin, Calendar, GraduationCap, Users, Clock } from "lucide-react"

interface StudentProfileProps {
  student: {
    id: string
    name: string
    class: string
    rollNumber: string
    gender: string
    dateOfBirth: string
    contactNumber: string
    email: string
    address: string
    guardianName: string
    attendance: number
    grade: string
    status: "active" | "inactive" | "alumni"
  }
}

export function StudentProfileDialog({ student }: StudentProfileProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">View Profile</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Student Profile</DialogTitle>
          <DialogDescription>View detailed information about {student.name}</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Card className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>Personal Information</span>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold">{student.name}</p>
                  <p className="text-sm text-muted-foreground">ID: {student.id}</p>
                  <p className="text-sm">Gender: {student.gender}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>DOB: {student.dateOfBirth}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>Contact Information</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>{student.contactNumber}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>{student.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{student.address}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Guardian Information</span>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold">{student.guardianName}</p>
                  <p className="text-sm text-muted-foreground">Primary Guardian</p>
                </div>
              </Card>

              <Card className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span>Academic Information</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Class:</span>
                    <Badge variant="outline">{student.class}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Roll Number:</span>
                    <Badge variant="outline">{student.rollNumber}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Status:</span>
                    <Badge className={
                      student.status === "active" ? "bg-green-500" :
                      student.status === "inactive" ? "bg-yellow-500" :
                      "bg-blue-500"
                    }>{student.status}</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="academic" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Current Performance</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Overall Grade</span>
                    <Badge variant="outline">{student.grade}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Class Rank</span>
                    <Badge variant="outline">5th</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Subject Grades</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Mathematics</span>
                    <Badge variant="outline">A+</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Science</span>
                    <Badge variant="outline">A</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <Badge variant="outline">A-</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Attendance Overview</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Overall Attendance</span>
                    <Badge className={
                      student.attendance >= 90 ? "bg-green-500" :
                      student.attendance >= 80 ? "bg-yellow-500" :
                      "bg-red-500"
                    }>{student.attendance}%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Days Present</span>
                    <span>180</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Days Absent</span>
                    <span>20</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Recent Attendance</h3>
                <div className="space-y-2">
                  {[
                    { date: "2024-01-15", status: "present" },
                    { date: "2024-01-14", status: "present" },
                    { date: "2024-01-13", status: "absent" },
                    { date: "2024-01-12", status: "present" },
                    { date: "2024-01-11", status: "present" },
                  ].map((day) => (
                    <div key={day.date} className="flex justify-between items-center">
                      <span>{day.date}</span>
                      <Badge variant={day.status === "present" ? "default" : "destructive"}>
                        {day.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
