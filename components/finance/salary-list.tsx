"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { format } from "date-fns"
import { DollarSign, FileText, User, Search, Plus, Filter, Calendar } from "lucide-react"
import { ViewSalarySlipDialog } from "./view-salary-slip-dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SalaryRecord {
  id: string
  employee: {
    id: string
    name: string
    department: string
    designation: string
  }
  month: string
  basic: number
  allowances: number
  deductions: number
  netSalary: number
  paymentDate: Date
  status: "paid" | "pending" | "processing"
  paymentMethod: "bank_transfer" | "check"
  transactionId: string
}

const salaryRecords: SalaryRecord[] = [
  {
    id: "1",
    employee: {
      id: "EMP001",
      name: "Sarah Johnson",
      department: "Science",
      designation: "Senior Teacher",
    },
    month: "January 2024",
    basic: 45000,
    allowances: 15000,
    deductions: 8000,
    netSalary: 52000,
    paymentDate: new Date("2024-01-31"),
    status: "paid",
    paymentMethod: "bank_transfer",
    transactionId: "SAL/2024/001",
  },
  {
    id: "2",
    employee: {
      id: "EMP002",
      name: "Michael Chen",
      department: "Mathematics",
      designation: "Teacher",
    },
    month: "January 2024",
    basic: 40000,
    allowances: 12000,
    deductions: 7000,
    netSalary: 45000,
    paymentDate: new Date("2024-01-31"),
    status: "processing",
    paymentMethod: "bank_transfer",
    transactionId: "SAL/2024/002",
  },
  {
    id: "3",
    employee: {
      id: "EMP003",
      name: "David Wilson",
      department: "English",
      designation: "Teacher",
    },
    month: "January 2024",
    basic: 40000,
    allowances: 12000,
    deductions: 7000,
    netSalary: 45000,
    paymentDate: new Date("2024-01-31"),
    status: "pending",
    paymentMethod: "check",
    transactionId: "SAL/2024/003",
  },
]

export function SalaryList() {
  const getStatusBadge = (status: SalaryRecord["status"]) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-500 hover:bg-green-600">Paid</Badge>
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-white">Pending</Badge>
      case "processing":
        return <Badge variant="secondary" className="bg-blue-500 hover:bg-blue-600 text-white">Processing</Badge>
    }
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount)
  }

  const totalSalaries = salaryRecords.reduce((sum, record) => sum + record.netSalary, 0)
  const pendingSalaries = salaryRecords.filter(record => record.status === "pending").length
  const processingSalaries = salaryRecords.filter(record => record.status === "processing").length

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Salaries</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatAmount(totalSalaries)}</div>
            <p className="text-xs text-muted-foreground">
              For {salaryRecords[0].month}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingSalaries}</div>
            <p className="text-xs text-muted-foreground">
              {pendingSalaries} payments pending
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{processingSalaries}</div>
            <p className="text-xs text-muted-foreground">
              {processingSalaries} payments in process
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex w-full sm:w-auto gap-4">
          <div className="relative w-full sm:w-[300px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search employees..." className="pl-8" />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Process New Salary
        </Button>
      </div>

      {/* Table Section */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Transaction ID</TableHead>
              <TableHead>Employee</TableHead>
              <TableHead>Month</TableHead>
              <TableHead className="text-right">Basic</TableHead>
              <TableHead className="text-right">Allowances</TableHead>
              <TableHead className="text-right">Deductions</TableHead>
              <TableHead className="text-right">Net Salary</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salaryRecords.map((record) => (
              <TableRow key={record.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>{record.transactionId}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{record.employee.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {record.employee.designation} - {record.employee.department}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {record.month}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>{formatAmount(record.basic)}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{formatAmount(record.allowances)}</TableCell>
                <TableCell className="text-right">{formatAmount(record.deductions)}</TableCell>
                <TableCell className="text-right">
                  <span className="font-medium">{formatAmount(record.netSalary)}</span>
                </TableCell>
                <TableCell>{getStatusBadge(record.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <ViewSalarySlipDialog salary={record} />
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
