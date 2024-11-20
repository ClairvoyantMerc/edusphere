"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

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

interface EditTeacherDialogProps {
  teacher: Teacher;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (updatedTeacher: Teacher) => void;
}

export function EditTeacherDialog({ teacher, open, onOpenChange, onSave }: EditTeacherDialogProps) {
  const [formData, setFormData] = useState<Teacher>(teacher);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Teacher</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="department" className="text-right">
                Department
              </Label>
              <Select
                value={formData.department}
                onValueChange={(value) => setFormData({ ...formData, department: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Mathematics">Mathematics</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="History">History</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="classes" className="text-right">
                Classes
              </Label>
              <Input
                id="classes"
                type="number"
                value={formData.classes}
                onChange={(e) => setFormData({ ...formData, classes: parseInt(e.target.value) })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="students" className="text-right">
                Students
              </Label>
              <Input
                id="students"
                type="number"
                value={formData.students}
                onChange={(e) => setFormData({ ...formData, students: parseInt(e.target.value) })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value: Teacher['status']) => {
                  if (value === 'active') {
                    // Remove relieving officer when status changes to active
                    const { relievingOfficer, ...rest } = formData;
                    setFormData({ ...rest, status: value });
                  } else {
                    setFormData({ ...formData, status: value });
                  }
                }}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="sick">Sick Leave</SelectItem>
                  <SelectItem value="leave">On Leave</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {(formData.status === 'sick' || formData.status === 'leave') && (
              <div className="space-y-4 border-t pt-4">
                <h3 className="font-semibold">Relieving Officer Details</h3>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="relievingName" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="relievingName"
                    value={formData.relievingOfficer?.name || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      relievingOfficer: {
                        ...formData.relievingOfficer,
                        name: e.target.value,
                        id: formData.relievingOfficer?.id || '',
                        department: formData.relievingOfficer?.department || ''
                      }
                    })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="relievingId" className="text-right">
                    ID
                  </Label>
                  <Input
                    id="relievingId"
                    value={formData.relievingOfficer?.id || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      relievingOfficer: {
                        ...formData.relievingOfficer,
                        id: e.target.value,
                        name: formData.relievingOfficer?.name || '',
                        department: formData.relievingOfficer?.department || ''
                      }
                    })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="relievingDepartment" className="text-right">
                    Department
                  </Label>
                  <Select
                    value={formData.relievingOfficer?.department || ''}
                    onValueChange={(value) => setFormData({
                      ...formData,
                      relievingOfficer: {
                        ...formData.relievingOfficer,
                        department: value,
                        name: formData.relievingOfficer?.name || '',
                        id: formData.relievingOfficer?.id || ''
                      }
                    })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                      <SelectItem value="Science">Science</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="History">History</SelectItem>
                      <SelectItem value="Computer Science">Computer Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
