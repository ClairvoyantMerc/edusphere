"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

interface Message {
  id: string
  sender: {
    name: string
    avatar?: string
    role: string
  }
  subject: string
  preview: string
  timestamp: Date
  unread: boolean
  labels?: string[]
}

const messages: Message[] = [
  {
    id: "1",
    sender: {
      name: "John Smith",
      role: "Teacher",
    },
    subject: "Class Schedule Update",
    preview: "The mathematics class schedule has been updated for next week...",
    timestamp: new Date(2024, 0, 15, 9, 30),
    unread: true,
    labels: ["Important"],
  },
  {
    id: "2",
    sender: {
      name: "Sarah Johnson",
      role: "Parent",
    },
    subject: "Student Progress Discussion",
    preview: "I would like to discuss my child's progress in science class...",
    timestamp: new Date(2024, 0, 15, 8, 45),
    unread: true,
  },
  {
    id: "3",
    sender: {
      name: "Admin Office",
      role: "Admin",
    },
    subject: "Staff Meeting Reminder",
    preview: "This is a reminder about tomorrow's staff meeting at 3 PM...",
    timestamp: new Date(2024, 0, 14, 15, 20),
    unread: false,
    labels: ["Meeting"],
  },
]

export function MessageList() {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card
          key={message.id}
          className={`p-4 cursor-pointer hover:bg-accent transition-colors ${
            message.unread ? "bg-accent/50" : ""
          }`}
        >
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={message.sender.avatar} />
              <AvatarFallback>
                {message.sender.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{message.sender.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {message.sender.role}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                </div>
              </div>
              <div className="font-medium">{message.subject}</div>
              <div className="text-sm text-muted-foreground line-clamp-2">
                {message.preview}
              </div>
              {message.labels && message.labels.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {message.labels.map((label) => (
                    <Badge key={label} variant="secondary">
                      {label}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
