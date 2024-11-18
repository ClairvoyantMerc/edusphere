"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import { Bell, Calendar, Users } from "lucide-react"

interface Announcement {
  id: string
  author: {
    name: string
    avatar?: string
    role: string
  }
  title: string
  content: string
  timestamp: Date
  type: "event" | "notice" | "alert"
  audience: string[]
  date?: Date
}

const announcements: Announcement[] = [
  {
    id: "1",
    author: {
      name: "Admin Office",
      role: "Admin",
    },
    title: "Parent-Teacher Conference Day",
    content: "The annual parent-teacher conference will be held next Friday. Please check the schedule and register for your preferred time slot.",
    timestamp: new Date(2024, 0, 15, 10, 0),
    type: "event",
    audience: ["Parents", "Teachers"],
    date: new Date(2024, 0, 22),
  },
  {
    id: "2",
    author: {
      name: "Principal",
      role: "Admin",
    },
    title: "School Infrastructure Update",
    content: "The renovation of the science laboratory will commence next week. Classes will be temporarily relocated to Room 301.",
    timestamp: new Date(2024, 0, 15, 9, 0),
    type: "notice",
    audience: ["All Staff", "Students"],
  },
  {
    id: "3",
    author: {
      name: "IT Department",
      role: "Staff",
    },
    title: "System Maintenance Notice",
    content: "The school management system will undergo maintenance this Saturday from 10 PM to 2 AM. Some features may be unavailable during this time.",
    timestamp: new Date(2024, 0, 14, 15, 0),
    type: "alert",
    audience: ["All Users"],
  },
]

export function AnnouncementList() {
  const getTypeIcon = (type: Announcement["type"]) => {
    switch (type) {
      case "event":
        return <Calendar className="h-4 w-4" />
      case "alert":
        return <Bell className="h-4 w-4" />
      default:
        return null
    }
  }

  const getTypeBadgeColor = (type: Announcement["type"]) => {
    switch (type) {
      case "event":
        return "bg-blue-500"
      case "alert":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <Card key={announcement.id} className="p-6">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={announcement.author.avatar} />
                  <AvatarFallback>
                    {announcement.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{announcement.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {announcement.author.role}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className={`${getTypeBadgeColor(announcement.type)} text-white`}
                >
                  <span className="flex items-center gap-1">
                    {getTypeIcon(announcement.type)}
                    {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                  </span>
                </Badge>
                <div className="text-sm text-muted-foreground">
                  {formatDistanceToNow(announcement.timestamp, { addSuffix: true })}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">{announcement.title}</h3>
              <p className="mt-2 text-muted-foreground">{announcement.content}</p>
            </div>

            <div className="flex items-center gap-4 pt-2 border-t">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>For: {announcement.audience.join(", ")}</span>
              </div>
              {announcement.date && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {announcement.date.toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
