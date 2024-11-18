"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { useState } from "react"
import { addDays, format } from "date-fns"

interface IssueBookDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function IssueBookDialog({ open, onOpenChange }: IssueBookDialogProps) {
  const [formData, setFormData] = useState({
    bookId: "",
    studentId: "",
    issueDuration: "14", // Default 14 days
  })

  const issueDate = new Date()
  const dueDate = addDays(issueDate, parseInt(formData.issueDuration))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement book issuing logic
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Issue Book</DialogTitle>
            <DialogDescription>
              Enter the details to issue a book to a student.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="bookId">Book</Label>
              <Select
                value={formData.bookId}
                onValueChange={(value) =>
                  setFormData({ ...formData, bookId: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select book" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">To Kill a Mockingbird</SelectItem>
                  <SelectItem value="2">1984</SelectItem>
                  <SelectItem value="3">Chemistry: Concepts and Problems</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="studentId">Student</Label>
              <Select
                value={formData.studentId}
                onValueChange={(value) =>
                  setFormData({ ...formData, studentId: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select student" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="STD001">John Smith (10A)</SelectItem>
                  <SelectItem value="STD002">Emma Wilson (11B)</SelectItem>
                  <SelectItem value="STD003">Michael Brown (9C)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="issueDuration">Issue Duration (Days)</Label>
              <Select
                value={formData.issueDuration}
                onValueChange={(value) =>
                  setFormData({ ...formData, issueDuration: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 Days</SelectItem>
                  <SelectItem value="14">14 Days</SelectItem>
                  <SelectItem value="21">21 Days</SelectItem>
                  <SelectItem value="28">28 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Issue Date</Label>
                <div className="p-2 border rounded-md text-sm">
                  {format(issueDate, "MMM d, yyyy")}
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Due Date</Label>
                <div className="p-2 border rounded-md text-sm">
                  {format(dueDate, "MMM d, yyyy")}
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Issue Book</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
