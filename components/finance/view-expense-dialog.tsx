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
  CreditCard, 
  CheckCircle, 
  FileDown,
  Eye,
  Clock,
  Building,
  Tag,
  Receipt
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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

interface ViewExpenseDialogProps {
  expense: ExpenseRecord
}

export function ViewExpenseDialog({ expense }: ViewExpenseDialogProps) {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount)
  }

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

  const getCategoryIcon = (category: ExpenseRecord["category"]) => {
    switch (category) {
      case "utilities":
        return <Building className="h-4 w-4" />
      case "supplies":
        return <Tag className="h-4 w-4" />
      case "maintenance":
        return <Receipt className="h-4 w-4" />
      case "equipment":
        return <DollarSign className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="gap-2">
          <Eye className="h-4 w-4" /> View
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl font-semibold">Expense Details</DialogTitle>
              <DialogDescription className="mt-1.5">
                Expense record {expense.voucherNo}
              </DialogDescription>
            </div>
            {getStatusBadge(expense.status)}
          </div>
        </DialogHeader>

        <Separator className="my-4" />

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>Basic Information</span>
            </div>
            <div className="space-y-2">
              <TooltipProvider>
                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm text-muted-foreground">Voucher No</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Unique identifier for this expense</p>
                    </TooltipContent>
                  </Tooltip>
                  <span className="font-medium">{expense.voucherNo}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm text-muted-foreground">Category</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Type of expense</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(expense.category)}
                    <span className="font-medium capitalize">{expense.category}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm text-muted-foreground">Description</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Details about the expense</p>
                    </TooltipContent>
                  </Tooltip>
                  <span className="font-medium">{expense.description}</span>
                </div>
              </TooltipProvider>
            </div>
          </Card>

          <Card className="p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span>Financial Details</span>
            </div>
            <div className="space-y-2">
              <TooltipProvider>
                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm text-muted-foreground">Amount</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Total expense amount</p>
                    </TooltipContent>
                  </Tooltip>
                  <span className="font-medium">{formatAmount(expense.amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm text-muted-foreground">Payment Method</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Method of payment used</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span className="font-medium capitalize">{expense.paymentMethod.replace("_", " ")}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm text-muted-foreground">Date</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Date of expense</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{format(expense.date, "PPP")}</span>
                  </div>
                </div>
              </TooltipProvider>
            </div>
          </Card>
        </div>

        <Card className="mt-4 p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Expense Timeline</span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Expense Created</p>
                  <p className="text-sm text-muted-foreground">{format(expense.date, "PPP")}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Approved by {expense.approvedBy}</p>
                  <p className="text-sm text-muted-foreground">{format(expense.date, "PPP")}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Payment Processed</p>
                  <p className="text-sm text-muted-foreground">{format(expense.date, "PPP")}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" className="gap-2">
            <FileDown className="h-4 w-4" />
            Download Receipt
          </Button>
          <Button className="gap-2">
            <CheckCircle className="h-4 w-4" />
            Approve Expense
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
