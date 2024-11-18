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
import { DollarSign, FileText, User, Filter, Search, Plus } from "lucide-react"
import { ViewExpenseDialog } from "./view-expense-dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExpenseRecord {
  id: string
  description: string
  category: "utilities" | "supplies" | "maintenance" | "equipment" | "other"
  amount: number
  date: Date
  approvedBy: string
  status: "approved" | "pending" | "rejected"
  paymentMethod: "cash" | "card" | "bank_transfer"
  voucherNo: string
}

const expenseRecords: ExpenseRecord[] = [
  {
    id: "1",
    description: "Electricity Bill - January 2024",
    category: "utilities",
    amount: 45000,
    date: new Date("2024-01-15"),
    approvedBy: "Sarah Johnson",
    status: "approved",
    paymentMethod: "bank_transfer",
    voucherNo: "EXP/2024/001",
  },
  {
    id: "2",
    description: "Laboratory Equipment",
    category: "equipment",
    amount: 125000,
    date: new Date("2024-01-10"),
    approvedBy: "Michael Chen",
    status: "approved",
    paymentMethod: "card",
    voucherNo: "EXP/2024/002",
  },
  {
    id: "3",
    description: "Building Maintenance",
    category: "maintenance",
    amount: 35000,
    date: new Date("2024-01-20"),
    approvedBy: "David Wilson",
    status: "pending",
    paymentMethod: "cash",
    voucherNo: "EXP/2024/003",
  },
]

export function ExpensesList() {
  const getStatusBadge = (status: ExpenseRecord["status"]) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500 hover:bg-green-600">Approved</Badge>
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-white">Pending</Badge>
      case "rejected":
        return <Badge variant="secondary" className="bg-red-500 hover:bg-red-600 text-white">Rejected</Badge>
    }
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount)
  }

  const totalExpenses = expenseRecords.reduce((sum, record) => sum + record.amount, 0)
  const pendingExpenses = expenseRecords.filter(record => record.status === "pending").length
  const approvedExpenses = expenseRecords.filter(record => record.status === "approved").length

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatAmount(totalExpenses)}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingExpenses}</div>
            <p className="text-xs text-muted-foreground">
              {pendingExpenses} expenses awaiting approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved This Month</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvedExpenses}</div>
            <p className="text-xs text-muted-foreground">
              {approvedExpenses} expenses approved
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex w-full sm:w-auto gap-4">
          <div className="relative w-full sm:w-[300px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search expenses..." className="pl-8" />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Add New Expense
        </Button>
      </div>

      {/* Table Section */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Voucher No</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Approved By</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenseRecords.map((record) => (
              <TableRow key={record.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>{record.voucherNo}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-medium">{record.description}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {record.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{formatAmount(record.amount)}</span>
                  </div>
                </TableCell>
                <TableCell>{format(record.date, "MMM d, yyyy")}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{record.approvedBy}</span>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(record.status)}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="capitalize">
                    {record.paymentMethod.replace("_", " ")}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <ViewExpenseDialog expense={record} />
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
