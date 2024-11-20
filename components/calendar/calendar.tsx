"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayClickEventHandler, DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CalendarEvent } from "@/types/calendar"
import { format } from "date-fns"

export type CalendarProps = Omit<React.ComponentProps<typeof DayPicker>, 'components' | 'classNames'> & {
  events?: CalendarEvent[];
  onDateSelect?: (date: Date) => void;
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events = [],
  selected,
  onDateSelect,
  ...props
}: CalendarProps) {
  const getEventsForDay = (day: Date) => {
    return events.filter(event => 
      format(event.startTime, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
    )
  }

  const handleDayClick: DayClickEventHandler = (day) => {
    onDateSelect?.(day)
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 w-full flex justify-center", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-full",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          Button,
          "h-7 w-7 bg-transparent p-0 text-muted-foreground hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex w-full",
        head_cell: cn(
          "text-muted-foreground rounded-md w-10 font-normal text-[0.8rem] h-10 flex items-center justify-center"
        ),
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
          "h-10 w-10 flex items-center justify-center"
        ),
        day: cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors",
          "flex items-center justify-center cursor-pointer"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: cn(
          "text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
        ),
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Day: ({ date, ...dayProps }) => {
          const dayEvents = getEventsForDay(date)
          const isSelected = selected instanceof Date && format(date, 'yyyy-MM-dd') === format(selected, 'yyyy-MM-dd')
          
          return (
            <div 
              role="button"
              onClick={() => handleDayClick(date)}
              className={cn(
                "relative h-9 w-9 p-0 font-normal rounded-md flex items-center justify-center cursor-pointer",
                isSelected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                !isSelected && "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <span>{format(date, 'd')}</span>
              {dayEvents.length > 0 && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                  {dayEvents.slice(0, 3).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-1 h-1 rounded-full",
                        isSelected ? "bg-primary-foreground" : "bg-primary"
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        },
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      onDayClick={handleDayClick}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar as CalendarComponent }
