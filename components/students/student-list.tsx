"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Search, User, GraduationCap, Calendar, Clock } from "lucide-react"
import { StudentProfileDialog } from "./student-profile-dialog"

interface Student {
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

const students: Student[] = [
  {
    id: "STU1001",
    name: "John Smith",
    class: "10A",
    rollNumber: "1001",
    gender: "Male",
    dateOfBirth: "2008-05-15",
    contactNumber: "+91 98765 43210",
    email: "john.smith@example.com",
    address: "123 Main Street, City",
    guardianName: "Robert Smith",
    attendance: 95,
    grade: "A",
    status: "active",
  },
  {
    id: "STU1002",
    name: "Emma Wilson",
    class: "11B",
    rollNumber: "1102",
    gender: "Female",
    dateOfBirth: "2007-08-22",
    contactNumber: "+91 98765 43211",
    email: "emma.wilson@example.com",
    address: "456 Oak Avenue, City",
    guardianName: "Sarah Wilson",
    attendance: 92,
    grade: "A+",
    status: "active",
  },
  {
    id: "STU1003",
    name: "Michael Brown",
    class: "9C",
    rollNumber: "903",
    gender: "Male",
    dateOfBirth: "2009-03-10",
    contactNumber: "+91 98765 43212",
    email: "michael.brown@example.com",
    address: "789 Pine Road, City",
    guardianName: "James Brown",
    attendance: 88,
    grade: "B+",
    status: "active",
  },
]

export function StudentList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [classFilter, setClassFilter] = useState("all")

  const getStatusBadge = (status: Student["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "inactive":
        return <Badge variant="secondary" className="bg-yellow-500 text-white">Inactive</Badge>
      case "alumni":
        return <Badge variant="secondary" className="bg-blue-500 text-white">Alumni</Badge>
    }
  }

  const getAttendanceBadge = (attendance: number) => {
    if (attendance >= 90) {
      return <Badge className="bg-green-500">{attendance}%</Badge>
    } else if (attendance >= 80) {
      return <Badge variant="secondary" className="bg-yellow-500 text-white">{attendance}%</Badge>
    } else {
      return <Badge variant="secondary" className="bg-red-500 text-white">{attendance}%</Badge>
    }
  }

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesClass = classFilter === "all" || student.class === classFilter
    return matchesSearch && matchesClass
  })

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students by name or ID..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={classFilter} onValueChange={setClassFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            <SelectItem value="10A">Class 10A</SelectItem>
            <SelectItem value="11B">Class 11B</SelectItem>
            <SelectItem value="9C">Class 9C</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Roll Number</TableHead>
            <TableHead>Guardian</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStudents.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.id}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span>{student.class}</span>
                </div>
              </TableCell>
              <TableCell>{student.rollNumber}</TableCell>
              <TableCell>{student.guardianName}</TableCell>
              <TableCell>
                <div>
                  <p>{student.contactNumber}</p>
                  <p className="text-sm text-muted-foreground">{student.email}</p>
                </div>
              </TableCell>
              <TableCell>{getAttendanceBadge(student.attendance)}</TableCell>
              <TableCell>
                <Badge variant="outline">{student.grade}</Badge>
              </TableCell>
              <TableCell>{getStatusBadge(student.status)}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <StudentProfileDialog student={student} />
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
