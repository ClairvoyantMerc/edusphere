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
import { DollarSign, Receipt, User } from "lucide-react"

interface FeeRecord {
  id: string
  student: {
    id: string
    name: string
    class: string
  }
  type: "tuition" | "transport" | "library" | "laboratory" | "other"
  amount: number
  paymentDate: Date
  dueDate: Date
  status: "paid" | "pending" | "overdue"
  paymentMethod: "cash" | "card" | "upi" | "bank_transfer"
  receiptNo: string
}

const feeRecords: FeeRecord[] = [
  {
    id: "1",
    student: {
      id: "STD001",
      name: "John Smith",
      class: "10A",
    },
    type: "tuition",
    amount: 25000,
    paymentDate: new Date("2024-01-15"),
    dueDate: new Date("2024-01-10"),
    status: "paid",
    paymentMethod: "upi",
    receiptNo: "FEE/2024/001",
  },
  {
    id: "2",
    student: {
      id: "STD002",
      name: "Emma Wilson",
      class: "11B",
    },
    type: "transport",
    amount: 5000,
    paymentDate: new Date("2024-01-05"),
    dueDate: new Date("2024-01-10"),
    status: "paid",
    paymentMethod: "card",
    receiptNo: "FEE/2024/002",
  },
  {
    id: "3",
    student: {
      id: "STD003",
      name: "Michael Brown",
      class: "9C",
    },
    type: "tuition",
    amount: 25000,
    paymentDate: new Date(),
    dueDate: new Date("2024-01-10"),
    status: "overdue",
    paymentMethod: "cash",
    receiptNo: "FEE/2024/003",
  },
]

export function FeesList() {
  const getStatusBadge = (status: FeeRecord["status"]) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-500">Paid</Badge>
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-500 text-white">Pending</Badge>
      case "overdue":
        return <Badge variant="secondary" className="bg-red-500 text-white">Overdue</Badge>
    }
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount)
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Receipt No</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Fee Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {feeRecords.map((record) => (
            <TableRow key={record.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Receipt className="h-4 w-4 text-muted-foreground" />
                  <span>{record.receiptNo}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{record.student.name}</p>
                    <p className="text-sm text-muted-foreground">{record.student.class}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="capitalize">{record.type}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{formatAmount(record.amount)}</span>
                </div>
              </TableCell>
              <TableCell>{format(record.paymentDate, "MMM d, yyyy")}</TableCell>
              <TableCell>{format(record.dueDate, "MMM d, yyyy")}</TableCell>
              <TableCell>{getStatusBadge(record.status)}</TableCell>
              <TableCell className="capitalize">{record.paymentMethod.replace("_", " ")}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Receipt
                  </Button>
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
  )
}
