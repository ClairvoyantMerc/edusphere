"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookList } from "@/components/library/book-list"
import { IssuedBooksList } from "@/components/library/issued-books-list"
import { AddBookDialog } from "@/components/library/add-book-dialog"
import { IssueBookDialog } from "@/components/library/issue-book-dialog"
import { useState } from "react"
import { Search, Book, BookOpen, Users, Clock } from "lucide-react"

export default function LibraryPage() {
  const [addBookOpen, setAddBookOpen] = useState(false)
  const [issueBookOpen, setIssueBookOpen] = useState(false)

  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Library Management</h1>
        <div className="flex gap-2">
          <Button onClick={() => setAddBookOpen(true)}>
            Add New Book
          </Button>
          <Button variant="outline" onClick={() => setIssueBookOpen(true)}>
            Issue Book
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Book className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Books</h3>
            <p className="text-2xl font-bold">2,543</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-full">
            <BookOpen className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Available</h3>
            <p className="text-2xl font-bold">2,128</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-orange-100 rounded-full">
            <Users className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Issued</h3>
            <p className="text-2xl font-bold">415</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-red-100 rounded-full">
            <Clock className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Overdue</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
        </Card>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search books by title, author, or ISBN..." className="pl-8" />
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Books</TabsTrigger>
              <TabsTrigger value="issued">Issued Books</TabsTrigger>
              <TabsTrigger value="overdue">Overdue Books</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <BookList />
            </TabsContent>
            <TabsContent value="issued">
              <IssuedBooksList type="issued" />
            </TabsContent>
            <TabsContent value="overdue">
              <IssuedBooksList type="overdue" />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <AddBookDialog
        open={addBookOpen}
        onOpenChange={setAddBookOpen}
      />
      <IssueBookDialog
        open={issueBookOpen}
        onOpenChange={setIssueBookOpen}
      />
    </div>
  )
}
