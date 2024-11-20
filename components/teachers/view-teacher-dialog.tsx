"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock } from "lucide-react"

interface Teacher {
  id: string;
  name: string;
  department: string;
  classes: number;
  students: number;
  status: 'active' | 'sick' | 'leave';
  relievingOfficer?: {
    name: string;
    id: string;
    department: string;
  };
}

interface ViewTeacherDialogProps {
  teacher: Teacher;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ViewTeacherDialog({ teacher, open, onOpenChange }: ViewTeacherDialogProps) {
  const getStatusIcon = (status: Teacher['status']) => {
    switch (status) {
      case 'active': return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'sick': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'leave': return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getStatusBadge = (status: Teacher['status']) => {
    const variants = {
      active: 'bg-green-100 text-green-800',
      sick: 'bg-red-100 text-red-800',
      leave: 'bg-yellow-100 text-yellow-800'
    };
    const labels = {
      active: 'Active',
      sick: 'Sick Leave',
      leave: 'On Leave'
    };
    return (
      <Badge className={variants[status]}>
        <span className="flex items-center gap-1">
          {getStatusIcon(status)}
          {labels[status]}
        </span>
      </Badge>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Teacher Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">Name:</span>
            <span className="col-span-2">{teacher.name}</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">ID:</span>
            <span className="col-span-2">{teacher.id}</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">Department:</span>
            <span className="col-span-2">{teacher.department}</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">Classes:</span>
            <span className="col-span-2">{teacher.classes}</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">Students:</span>
            <span className="col-span-2">{teacher.students}</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">Status:</span>
            <span className="col-span-2">{getStatusBadge(teacher.status)}</span>
          </div>
          {(teacher.status === 'sick' || teacher.status === 'leave') && teacher.relievingOfficer && (
            <div className="space-y-3 border-t pt-3">
              <h3 className="font-semibold">Relieving Officer Details</h3>
              <div className="grid grid-cols-3 items-center gap-4">
                <span className="font-medium">Name:</span>
                <span className="col-span-2">{teacher.relievingOfficer.name}</span>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <span className="font-medium">ID:</span>
                <span className="col-span-2">{teacher.relievingOfficer.id}</span>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <span className="font-medium">Department:</span>
                <span className="col-span-2">{teacher.relievingOfficer.department}</span>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
