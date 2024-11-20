"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, CheckCircle2, XCircle, Clock } from "lucide-react"
import { AddTeacherDialog } from "@/components/teachers/add-teacher-dialog"
import { ViewTeacherDialog } from "@/components/teachers/view-teacher-dialog"
import { EditTeacherDialog } from "@/components/teachers/edit-teacher-dialog"
import { Badge } from "@/components/ui/badge"
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

// Sample data - replace with real data later
const initialTeachers: Teacher[] = [
  { id: 'TCH1001', name: 'Dr. Jane Smith', department: 'Mathematics', classes: 4, students: 120, status: 'active' },
  { 
    id: 'TCH1002', 
    name: 'Prof. John Doe', 
    department: 'Science', 
    classes: 3, 
    students: 90, 
    status: 'sick',
    relievingOfficer: {
      name: 'Dr. Michael Chen',
      id: 'TCH1005',
      department: 'Science'
    }
  },
  { id: 'TCH1003', name: 'Mrs. Sarah Wilson', department: 'English', classes: 5, students: 150, status: 'active' },
  { 
    id: 'TCH1004', 
    name: 'Mr. James Brown', 
    department: 'History', 
    classes: 4, 
    students: 110, 
    status: 'leave',
    relievingOfficer: {
      name: 'Ms. Emily Parker',
      id: 'TCH1006',
      department: 'History'
    }
  },
];

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const activeTeachers = teachers.filter(t => t.status === 'active');
  const sickTeachers = teachers.filter(t => t.status === 'sick');
  const onLeaveTeachers = teachers.filter(t => t.status === 'leave');

  const handleEditTeacher = (updatedTeacher: Teacher) => {
    setTeachers(teachers.map(t => t.id === updatedTeacher.id ? updatedTeacher : t));
  };

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

  const TeacherList = ({ teachers }: { teachers: Teacher[] }) => (
    <div className="rounded-lg border bg-card">
      <div className="p-4">
        <div className="grid grid-cols-8 gap-4 font-medium">
          <div>Name</div>
          <div>ID</div>
          <div>Department</div>
          <div>Classes</div>
          <div>Students</div>
          <div>Status</div>
          <div>Relieving Officer</div>
          <div>Actions</div>
        </div>
      </div>
      <div className="p-4">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="grid grid-cols-8 gap-4 py-3 border-t">
            <div>{teacher.name}</div>
            <div>{teacher.id}</div>
            <div>{teacher.department}</div>
            <div>{teacher.classes}</div>
            <div>{teacher.students}</div>
            <div>{getStatusBadge(teacher.status)}</div>
            <div>{teacher.relievingOfficer ? `${teacher.relievingOfficer.name} (${teacher.relievingOfficer.id})` : '-'}</div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setSelectedTeacher(teacher);
                  setViewDialogOpen(true);
                }}
              >
                View
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setSelectedTeacher(teacher);
                  setEditDialogOpen(true);
                }}
              >
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container space-y-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Teachers</h1>
        <AddTeacherDialog />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{teachers.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{activeTeachers.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>On Sick Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{sickTeachers.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>On Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{onLeaveTeachers.length}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Teachers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="sick">Sick Leave</TabsTrigger>
          <TabsTrigger value="leave">On Leave</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <TeacherList teachers={teachers} />
        </TabsContent>
        <TabsContent value="active">
          <TeacherList teachers={activeTeachers} />
        </TabsContent>
        <TabsContent value="sick">
          <TeacherList teachers={sickTeachers} />
        </TabsContent>
        <TabsContent value="leave">
          <TeacherList teachers={onLeaveTeachers} />
        </TabsContent>
      </Tabs>

      {selectedTeacher && (
        <>
          <ViewTeacherDialog
            teacher={selectedTeacher}
            open={viewDialogOpen}
            onOpenChange={setViewDialogOpen}
          />
          <EditTeacherDialog
            teacher={selectedTeacher}
            open={editDialogOpen}
            onOpenChange={setEditDialogOpen}
            onSave={handleEditTeacher}
          />
        </>
      )}
    </div>
  )
}
