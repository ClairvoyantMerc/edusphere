"use client"

import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function AttendanceReport() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Attendance Analysis Report
          </h2>
          <p className="text-sm text-muted-foreground">
            Comprehensive overview of student attendance patterns
          </p>
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="semester">This Semester</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Daily Attendance Pattern</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Monday</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "95%" }} />
                </div>
              </div>
              <span className="text-sm">95%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Tuesday</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "93%" }} />
                </div>
              </div>
              <span className="text-sm">93%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Wednesday</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "94%" }} />
                </div>
              </div>
              <span className="text-sm">94%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Thursday</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "92%" }} />
                </div>
              </div>
              <span className="text-sm">92%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Friday</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "90%" }} />
                </div>
              </div>
              <span className="text-sm">90%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Absence Categories</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Medical</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-red-500" style={{ width: "45%" }} />
                  </div>
                </div>
                <span className="text-sm">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Family</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-red-500" style={{ width: "25%" }} />
                  </div>
                </div>
                <span className="text-sm">25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Transportation</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-red-500" style={{ width: "15%" }} />
                  </div>
                </div>
                <span className="text-sm">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Other</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-red-500" style={{ width: "15%" }} />
                  </div>
                </div>
                <span className="text-sm">15%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Class</TableHead>
              <TableHead>Total Students</TableHead>
              <TableHead>Average Attendance</TableHead>
              <TableHead>Chronic Absences</TableHead>
              <TableHead>Perfect Attendance</TableHead>
              <TableHead>Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                class: "Mathematics 101",
                total: "30",
                average: "94%",
                chronic: "2",
                perfect: "15",
                trend: "↗",
              },
              {
                class: "Science 101",
                total: "28",
                average: "92%",
                chronic: "1",
                perfect: "12",
                trend: "→",
              },
              {
                class: "English 101",
                total: "32",
                average: "95%",
                chronic: "0",
                perfect: "18",
                trend: "↗",
              },
            ].map((row) => (
              <TableRow key={row.class}>
                <TableCell className="font-medium">{row.class}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.average}</TableCell>
                <TableCell>{row.chronic}</TableCell>
                <TableCell>{row.perfect}</TableCell>
                <TableCell>{row.trend}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
