"use client"

import { Card } from "@/components/ui/card"
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
import { Book, User } from "lucide-react"
import { format } from "date-fns"

interface IssuedBookType {
  id: string
  bookTitle: string
  student: {
    id: string
    name: string
    class: string
  }
  issuedDate: Date
  dueDate: Date
  status: "on-time" | "overdue"
}

const issuedBooks: IssuedBookType[] = [
  {
    id: "1",
    bookTitle: "To Kill a Mockingbird",
    student: {
      id: "STD001",
      name: "John Smith",
      class: "10A",
    },
    issuedDate: new Date("2024-01-15"),
    dueDate: new Date("2024-01-29"),
    status: "on-time",
  },
  {
    id: "2",
    bookTitle: "1984",
    student: {
      id: "STD002",
      name: "Emma Wilson",
      class: "11B",
    },
    issuedDate: new Date("2024-01-10"),
    dueDate: new Date("2024-01-24"),
    status: "overdue",
  },
]

interface IssuedBooksListProps {
  type: "issued" | "overdue"
}

export function IssuedBooksList({ type }: IssuedBooksListProps) {
  const filteredBooks = type === "overdue" 
    ? issuedBooks.filter(book => book.status === "overdue")
    : issuedBooks

  const getStatusBadge = (status: IssuedBookType["status"]) => {
    switch (status) {
      case "on-time":
        return <Badge className="bg-green-500">On Time</Badge>
      case "overdue":
        return <Badge variant="secondary" className="bg-red-500 text-white">Overdue</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Book Title</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Issued Date</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBooks.map((book) => (
            <TableRow key={book.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Book className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{book.bookTitle}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{book.student.name}</span>
                </div>
              </TableCell>
              <TableCell>{book.student.class}</TableCell>
              <TableCell>{format(book.issuedDate, "MMM d, yyyy")}</TableCell>
              <TableCell>{format(book.dueDate, "MMM d, yyyy")}</TableCell>
              <TableCell>{getStatusBadge(book.status)}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Return
                  </Button>
                  <Button size="sm" variant="outline">
                    Extend
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
