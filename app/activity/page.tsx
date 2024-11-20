"use client"

import { useState } from "react"
import { format } from "date-fns"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  BookOpen,
  Calendar,
  User,
  FileText,
  LogIn,
  Settings,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

// Activity types and their corresponding icons
const ACTIVITY_TYPES = {
  LOGIN: { label: "Login", icon: LogIn, color: "bg-blue-500" },
  GRADE: { label: "Grade Update", icon: FileText, color: "bg-green-500" },
  ATTENDANCE: { label: "Attendance", icon: Calendar, color: "bg-purple-500" },
  COURSE: { label: "Course Activity", icon: BookOpen, color: "bg-orange-500" },
  PROFILE: { label: "Profile Update", icon: User, color: "bg-pink-500" },
  SYSTEM: { label: "System Activity", icon: Settings, color: "bg-gray-500" },
} as const

type ActivityType = keyof typeof ACTIVITY_TYPES

interface SystemActivity {
  id: string
  type: ActivityType
  user: {
    name: string
    role: "Admin" | "Teacher" | "Student" | "Parent"
    avatar?: string
  }
  description: string
  timestamp: Date
  details?: {
    [key: string]: string | number
  }
}

// Sample activities data
const sampleActivities: SystemActivity[] = [
  {
    id: "1",
    type: "LOGIN",
    user: {
      name: "John Smith",
      role: "Teacher",
    },
    description: "Logged into the system",
    timestamp: new Date(2024, 0, 15, 9, 30),
  },
  {
    id: "2",
    type: "GRADE",
    user: {
      name: "Sarah Wilson",
      role: "Teacher",
    },
    description: "Updated grades for Mathematics Class",
    timestamp: new Date(2024, 0, 15, 10, 15),
    details: {
      class: "Mathematics 101",
      students: 25,
    },
  },
  {
    id: "3",
    type: "ATTENDANCE",
    user: {
      name: "Mark Johnson",
      role: "Teacher",
    },
    description: "Marked attendance for Science Class",
    timestamp: new Date(2024, 0, 15, 11, 0),
    details: {
      class: "Science 202",
      present: 28,
      absent: 2,
    },
  },
  {
    id: "4",
    type: "COURSE",
    user: {
      name: "Emily Brown",
      role: "Admin",
    },
    description: "Added new course: Advanced Physics",
    timestamp: new Date(2024, 0, 15, 13, 45),
    details: {
      course: "Advanced Physics",
      code: "PHY301",
    },
  },
  {
    id: "5",
    type: "PROFILE",
    user: {
      name: "Michael Lee",
      role: "Student",
    },
    description: "Updated contact information",
    timestamp: new Date(2024, 0, 15, 14, 30),
  },
  {
    id: "6",
    type: "SYSTEM",
    user: {
      name: "System",
      role: "Admin",
    },
    description: "Automated backup completed",
    timestamp: new Date(2024, 0, 15, 15, 0),
  },
];

function ActivityCard({ activity }: { activity: SystemActivity }) {
  const { icon: Icon, color } = ACTIVITY_TYPES[activity.type]
  
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
      <div className={`${color} p-2 rounded-full`}>
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">{activity.user.name}</p>
            <Badge variant="secondary">{activity.user.role}</Badge>
          </div>
          <time className="text-sm text-muted-foreground">
            {format(activity.timestamp, "MMM d, h:mm a")}
          </time>
        </div>
        <p className="text-sm text-muted-foreground">{activity.description}</p>
        {activity.details && (
          <div className="mt-2 text-sm">
            {Object.entries(activity.details).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2 text-muted-foreground">
                <span className="capitalize">{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ActivityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<ActivityType | "ALL">("ALL")
  const [selectedRole, setSelectedRole] = useState<string>("ALL")
  const [isLoading, setIsLoading] = useState(false)

  const filteredActivities = sampleActivities.filter((activity) => {
    const matchesSearch = searchQuery === "" || 
      activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesType = selectedType === "ALL" || activity.type === selectedType
    const matchesRole = selectedRole === "ALL" || activity.user.role === selectedRole

    return matchesSearch && matchesType && matchesRole
  })

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>System Activity</CardTitle>
        <CardDescription>Monitor and track all system activities</CardDescription>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <Input
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Select
            value={selectedType}
            onValueChange={(value) => setSelectedType(value as ActivityType | "ALL")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Types</SelectItem>
              {Object.entries(ACTIVITY_TYPES).map(([type, { label }]) => (
                <SelectItem key={type} value={type}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={selectedRole}
            onValueChange={setSelectedRole}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Roles</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Teacher">Teacher</SelectItem>
              <SelectItem value="Student">Student</SelectItem>
              <SelectItem value="Parent">Parent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : filteredActivities.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[400px] text-center">
              <Activity className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium">No activities found</p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
