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

export function AcademicReportCard() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Academic Performance Report
          </h2>
          <p className="text-sm text-muted-foreground">
            Detailed analysis of student academic performance across all subjects
          </p>
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="math101">Mathematics 101</SelectItem>
              <SelectItem value="sci101">Science 101</SelectItem>
              <SelectItem value="eng101">English 101</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semester1">Semester 1</SelectItem>
              <SelectItem value="semester2">Semester 2</SelectItem>
              <SelectItem value="final">Final</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Grade Distribution</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">A (90-100%)</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "30%" }} />
                </div>
              </div>
              <span className="text-sm">30%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">B (80-89%)</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "35%" }} />
                </div>
              </div>
              <span className="text-sm">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">C (70-79%)</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-yellow-500" style={{ width: "20%" }} />
                </div>
              </div>
              <span className="text-sm">20%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">D (60-69%)</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-orange-500" style={{ width: "10%" }} />
                </div>
              </div>
              <span className="text-sm">10%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">F (Below 60%)</span>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-red-500" style={{ width: "5%" }} />
                </div>
              </div>
              <span className="text-sm">5%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Performance Trends</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Average Score by Assessment Type</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Assignments</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-purple-500" style={{ width: "85%" }} />
                    </div>
                  </div>
                  <span className="text-sm">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Quizzes</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-purple-500" style={{ width: "78%" }} />
                    </div>
                  </div>
                  <span className="text-sm">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mid-terms</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-purple-500" style={{ width: "82%" }} />
                    </div>
                  </div>
                  <span className="text-sm">82%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Finals</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-purple-500" style={{ width: "80%" }} />
                    </div>
                  </div>
                  <span className="text-sm">80%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Average Score</TableHead>
              <TableHead>Highest Score</TableHead>
              <TableHead>Lowest Score</TableHead>
              <TableHead>Pass Rate</TableHead>
              <TableHead>Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                subject: "Mathematics",
                average: "82%",
                highest: "98%",
                lowest: "65%",
                passRate: "92%",
                trend: "↗",
              },
              {
                subject: "Science",
                average: "78%",
                highest: "96%",
                lowest: "62%",
                passRate: "88%",
                trend: "→",
              },
              {
                subject: "English",
                average: "85%",
                highest: "99%",
                lowest: "70%",
                passRate: "95%",
                trend: "↗",
              },
            ].map((row) => (
              <TableRow key={row.subject}>
                <TableCell className="font-medium">{row.subject}</TableCell>
                <TableCell>{row.average}</TableCell>
                <TableCell>{row.highest}</TableCell>
                <TableCell>{row.lowest}</TableCell>
                <TableCell>{row.passRate}</TableCell>
                <TableCell>{row.trend}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
