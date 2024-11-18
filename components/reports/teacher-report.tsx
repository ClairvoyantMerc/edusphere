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

export function TeacherReport() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Teacher Performance Report
          </h2>
          <p className="text-sm text-muted-foreground">
            Analysis of teaching effectiveness and student outcomes
          </p>
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="english">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Teaching Effectiveness Metrics</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Student Achievement</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "85%" }} />
                </div>
              </div>
              <span className="text-sm">85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Class Management</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "90%" }} />
                </div>
              </div>
              <span className="text-sm">90%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Student Engagement</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "88%" }} />
                </div>
              </div>
              <span className="text-sm">88%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Professional Development</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "82%" }} />
                </div>
              </div>
              <span className="text-sm">82%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Student Feedback Analysis</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Teaching Quality</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-purple-500" style={{ width: "92%" }} />
                  </div>
                </div>
                <span className="text-sm">4.6/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Clarity of Instruction</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-purple-500" style={{ width: "88%" }} />
                  </div>
                </div>
                <span className="text-sm">4.4/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Availability</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-purple-500" style={{ width: "90%" }} />
                  </div>
                </div>
                <span className="text-sm">4.5/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Fairness</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-purple-500" style={{ width: "94%" }} />
                  </div>
                </div>
                <span className="text-sm">4.7/5</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Teacher</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Classes</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Pass Rate</TableHead>
              <TableHead>Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                name: "John Smith",
                department: "Mathematics",
                classes: "3",
                students: "90",
                passRate: "92%",
                rating: "4.6/5",
              },
              {
                name: "Sarah Johnson",
                department: "Science",
                classes: "4",
                students: "120",
                passRate: "88%",
                rating: "4.5/5",
              },
              {
                name: "Michael Brown",
                department: "English",
                classes: "3",
                students: "85",
                passRate: "95%",
                rating: "4.8/5",
              },
            ].map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.classes}</TableCell>
                <TableCell>{row.students}</TableCell>
                <TableCell>{row.passRate}</TableCell>
                <TableCell>{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
