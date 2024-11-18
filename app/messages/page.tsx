"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageList } from "@/components/messages/message-list"
import { ComposeMessageDialog } from "@/components/messages/compose-message-dialog"
import { AnnouncementList } from "@/components/messages/announcement-list"
import { ComposeAnnouncementDialog } from "@/components/messages/compose-announcement-dialog"
import { useState } from "react"
import { Search } from "lucide-react"

export default function MessagesPage() {
  const [composeMessageOpen, setComposeMessageOpen] = useState(false)
  const [composeAnnouncementOpen, setComposeAnnouncementOpen] = useState(false)

  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Messages & Announcements</h1>
        <div className="flex gap-2">
          <Button onClick={() => setComposeMessageOpen(true)}>
            New Message
          </Button>
          <Button variant="outline" onClick={() => setComposeAnnouncementOpen(true)}>
            New Announcement
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-1/3">
          <Card className="p-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-8" />
            </div>
            <nav className="mt-4 space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <span className="flex-1 text-left">Inbox</span>
                <span className="ml-2 rounded-full bg-primary px-2 text-xs text-primary-foreground">
                  12
                </span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <span className="flex-1 text-left">Sent</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <span className="flex-1 text-left">Drafts</span>
                <span className="ml-2 rounded-full bg-muted px-2 text-xs">3</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <span className="flex-1 text-left">Archived</span>
              </Button>
            </nav>
          </Card>
        </div>

        <div className="flex-1">
          <Tabs defaultValue="messages" className="space-y-4">
            <TabsList>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="messages">
              <MessageList />
            </TabsContent>
            <TabsContent value="announcements">
              <AnnouncementList />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ComposeMessageDialog
        open={composeMessageOpen}
        onOpenChange={setComposeMessageOpen}
      />
      <ComposeAnnouncementDialog
        open={composeAnnouncementOpen}
        onOpenChange={setComposeAnnouncementOpen}
      />
    </div>
  )
}
