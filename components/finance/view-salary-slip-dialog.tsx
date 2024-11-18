"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { format } from "date-fns"
import { 
  DollarSign, 
  FileText, 
  User, 
  Calendar, 
  Building,
  Briefcase,
  Eye,
  Download,
  Mail,
  Phone,
  CreditCard,
  Plus,
  Minus,
  Calculator,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

interface ViewSalarySlipDialogProps {
  salary: SalaryRecord
}

export function ViewSalarySlipDialog({ salary }: ViewSalarySlipDialogProps) {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount)
  }

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

  // Example earnings and deductions breakdown
  const earnings = [
    { description: "Basic Salary", amount: salary.basic },
    { description: "House Rent Allowance", amount: salary.allowances * 0.4 },
    { description: "Transport Allowance", amount: salary.allowances * 0.3 },
    { description: "Medical Allowance", amount: salary.allowances * 0.3 },
  ]

  const deductions = [
    { description: "Provident Fund", amount: salary.deductions * 0.4 },
    { description: "Professional Tax", amount: salary.deductions * 0.3 },
    { description: "Income Tax", amount: salary.deductions * 0.3 },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="gap-2">
          <Eye className="h-4 w-4" /> View Slip
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl font-semibold">Salary Slip</DialogTitle>
              <DialogDescription className="mt-1.5">
                For the month of {salary.month}
              </DialogDescription>
            </div>
            {getStatusBadge(salary.status)}
          </div>
        </DialogHeader>

        <Separator className="my-4" />

        <div className="space-y-6">
          {/* Employee Information */}
          <Card className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>Employee Details</span>
                </div>
                <p className="font-medium">{salary.employee.name}</p>
                <p className="text-sm text-muted-foreground">{salary.employee.id}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>Department</span>
                </div>
                <p className="font-medium">{salary.employee.department}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>Designation</span>
                </div>
                <p className="font-medium">{salary.employee.designation}</p>
              </div>
            </div>
          </Card>

          {/* Salary Breakdown */}
          <Card className="p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Calculator className="h-4 w-4" />
                <span>Salary Breakdown</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Earnings */}
                <div>
                  <h4 className="text-sm font-medium flex items-center gap-2 mb-3">
                    <Plus className="h-4 w-4 text-green-500" />
                    Earnings
                  </h4>
                  <Table>
                    <TableBody>
                      {earnings.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="text-sm">{item.description}</TableCell>
                          <TableCell className="text-right font-medium">
                            {formatAmount(item.amount)}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="text-sm font-medium">Total Earnings</TableCell>
                        <TableCell className="text-right font-medium text-green-600">
                          {formatAmount(salary.basic + salary.allowances)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Deductions */}
                <div>
                  <h4 className="text-sm font-medium flex items-center gap-2 mb-3">
                    <Minus className="h-4 w-4 text-red-500" />
                    Deductions
                  </h4>
                  <Table>
                    <TableBody>
                      {deductions.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="text-sm">{item.description}</TableCell>
                          <TableCell className="text-right font-medium">
                            {formatAmount(item.amount)}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="text-sm font-medium">Total Deductions</TableCell>
                        <TableCell className="text-right font-medium text-red-600">
                          {formatAmount(salary.deductions)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </Card>

          {/* Net Salary */}
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>Net Salary</span>
                </div>
                <p className="text-2xl font-bold">{formatAmount(salary.netSalary)}</p>
              </div>
              <div className="text-right space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-end">
                  <Calendar className="h-4 w-4" />
                  <span>Payment Date</span>
                </div>
                <p className="font-medium">{format(salary.paymentDate, "PPP")}</p>
              </div>
            </div>
          </Card>

          {/* Payment Details */}
          <Card className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>Transaction ID</span>
                </div>
                <p className="font-medium">{salary.transactionId}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  <span>Payment Method</span>
                </div>
                <p className="font-medium capitalize">{salary.paymentMethod.replace("_", " ")}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Month</span>
                </div>
                <p className="font-medium">{salary.month}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <Button className="gap-2">
            <Mail className="h-4 w-4" />
            Email Slip
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
