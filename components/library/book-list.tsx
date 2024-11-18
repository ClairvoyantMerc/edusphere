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
import { Book } from "lucide-react"

interface BookType {
  id: string
  title: string
  author: string
  isbn: string
  category: string
  copies: {
    total: number
    available: number
  }
  location: string
  status: "available" | "low" | "unavailable"
}

const books: BookType[] = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0446310789",
    category: "Fiction",
    copies: {
      total: 5,
      available: 3,
    },
    location: "Section A, Shelf 2",
    status: "available",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    category: "Fiction",
    copies: {
      total: 4,
      available: 1,
    },
    location: "Section A, Shelf 3",
    status: "low",
  },
  {
    id: "3",
    title: "Chemistry: Concepts and Problems",
    author: "Clifford C. Houk",
    isbn: "978-0471121206",
    category: "Science",
    copies: {
      total: 3,
      available: 0,
    },
    location: "Section B, Shelf 1",
    status: "unavailable",
  },
]

export function BookList() {
  const getStatusBadge = (status: BookType["status"]) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500">Available</Badge>
      case "low":
        return <Badge variant="secondary" className="bg-yellow-500 text-white">Low Stock</Badge>
      case "unavailable":
        return <Badge variant="secondary" className="bg-red-500 text-white">Unavailable</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Book className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{book.title}</span>
                </div>
              </TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.category}</TableCell>
              <TableCell>
                <span className="font-medium">{book.copies.available}</span>
                {" / "}
                <span className="text-muted-foreground">{book.copies.total}</span>
              </TableCell>
              <TableCell>{book.location}</TableCell>
              <TableCell>{getStatusBadge(book.status)}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View
                  </Button>
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
