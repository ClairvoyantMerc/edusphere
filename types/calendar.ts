export enum EventCategory {
  TEST = "TEST",
  CLASS = "CLASS",
  MEETING = "MEETING",
  ACTIVITY = "ACTIVITY"
}

export type CalendarEvent = {
  id: string
  title: string
  description?: string
  startTime: Date
  endTime: Date
  location?: string
  category: EventCategory
}

export const EVENT_CATEGORIES = [
  {
    id: EventCategory.TEST,
    name: "Tests & Exams",
    color: "bg-blue-500"
  },
  {
    id: EventCategory.CLASS,
    name: "Classes",
    color: "bg-green-500"
  },
  {
    id: EventCategory.MEETING,
    name: "Meetings",
    color: "bg-purple-500"
  },
  {
    id: EventCategory.ACTIVITY,
    name: "Activities",
    color: "bg-orange-500"
  }
] as const
