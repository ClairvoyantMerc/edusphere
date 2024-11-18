"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeesList } from "@/components/finance/fees-list"
import { ExpensesList } from "@/components/finance/expenses-list"
import { SalaryList } from "@/components/finance/salary-list"
import { AddFeeDialog } from "@/components/finance/add-fee-dialog"
import { AddExpenseDialog } from "@/components/finance/add-expense-dialog"
import { AddSalaryDialog } from "@/components/finance/add-salary-dialog"
import { useState } from "react"
import { DollarSign, TrendingUp, TrendingDown, Wallet } from "lucide-react"

export default function FinancePage() {
  const [addFeeOpen, setAddFeeOpen] = useState(false)
  const [addExpenseOpen, setAddExpenseOpen] = useState(false)
  const [addSalaryOpen, setAddSalaryOpen] = useState(false)

  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Finance Management</h1>
        <div className="flex gap-2">
          <Button onClick={() => setAddFeeOpen(true)}>
            Record Fee Payment
          </Button>
          <Button variant="outline" onClick={() => setAddExpenseOpen(true)}>
            Add Expense
          </Button>
          <Button variant="outline" onClick={() => setAddSalaryOpen(true)}>
            Process Salary
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-full">
            <TrendingUp className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Income</h3>
            <p className="text-2xl font-bold">₹15,43,250</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-red-100 rounded-full">
            <TrendingDown className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Expenses</h3>
            <p className="text-2xl font-bold">₹8,25,630</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Wallet className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Balance</h3>
            <p className="text-2xl font-bold">₹7,17,620</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-3 bg-orange-100 rounded-full">
            <DollarSign className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Pending Fees</h3>
            <p className="text-2xl font-bold">₹2,85,400</p>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="fees" className="space-y-4">
        <TabsList>
          <TabsTrigger value="fees">Fee Records</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="salaries">Salary Records</TabsTrigger>
        </TabsList>
        <TabsContent value="fees">
          <FeesList />
        </TabsContent>
        <TabsContent value="expenses">
          <ExpensesList />
        </TabsContent>
        <TabsContent value="salaries">
          <SalaryList />
        </TabsContent>
      </Tabs>

      <AddFeeDialog
        open={addFeeOpen}
        onOpenChange={setAddFeeOpen}
      />
      <AddExpenseDialog
        open={addExpenseOpen}
        onOpenChange={setAddExpenseOpen}
      />
      <AddSalaryDialog
        open={addSalaryOpen}
        onOpenChange={setAddSalaryOpen}
      />
    </div>
  )
}
