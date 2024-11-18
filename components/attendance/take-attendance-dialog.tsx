"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { PlusCircle } from "lucide-react"

type Student = {
  id: string
  name: string
  present: boolean
}

export function TakeAttendanceDialog() {
  const [students, setStudents] = useState<Student[]>([
    { id: "1", name: "John Smith", present: true },
    { id: "2", name: "Jane Doe", present: true },
    { id: "3", name: "Bob Wilson", present: true },
    { id: "4", name: "Alice Brown", present: true },
    { id: "5", name: "Charlie Davis", present: true },
  ])

  const toggleAttendance = (studentId: string) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, present: !student.present }
        : student
    ))
  }

  const presentCount = students.filter(s => s.present).length
  const totalCount = students.length

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Take Attendance
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Take Class Attendance</DialogTitle>
          <DialogDescription>
            Mark attendance for today&apos;s class session.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="class" className="text-right">
              Class
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math101">Mathematics 101</SelectItem>
                <SelectItem value="sci101">Science 101</SelectItem>
                <SelectItem value="eng101">English 101</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input
              id="date"
              type="date"
              className="col-span-3"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time
            </Label>
            <Input
              id="time"
              type="time"
              className="col-span-3"
            />
          </div>
          
          <div className="border rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h4 className="font-medium">Student List</h4>
              <p className="text-sm text-muted-foreground">
                Present: {presentCount}/{totalCount}
              </p>
            </div>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`student-${student.id}`}
                      checked={student.present}
                      onCheckedChange={() => toggleAttendance(student.id)}
                    />
                    <label
                      htmlFor={`student-${student.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {student.name}
                    </label>
                  </div>
                  <span className={`text-sm ${student.present ? 'text-green-600' : 'text-red-600'}`}>
                    {student.present ? 'Present' : 'Absent'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Notes
            </Label>
            <Input
              id="notes"
              placeholder="Optional class notes"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Attendance</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
