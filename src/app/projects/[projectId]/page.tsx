'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ArrowLeft,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  AlertTriangle,
  Target,
  TrendingUp,
  Edit,
  Plus,
  MoreHorizontal,
  MessageSquare,
  Paperclip,
  User
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Mock project data - in real app this would be fetched based on projectId
const getProjectData = (projectId: string) => {
  const projects = {
    '1': {
      id: '1',
      name: 'Website Redesign - Acme Corp',
      client: 'Acme Corp',
      clientId: 'acme-corp',
      description: 'Complete website overhaul with new branding and improved UX. This project involves redesigning the entire corporate website with modern design principles, improved user experience, and better conversion optimization.',
      status: 'active',
      priority: 'high',
      progress: 65,
      dueDate: '2024-02-15',
      startDate: '2024-01-01',
      budget: '$45,000',
      team: [
        { id: '1', name: 'John Smith', role: 'Project Manager', avatar: 'J' },
        { id: '2', name: 'Sarah Johnson', role: 'UI/UX Designer', avatar: 'S' },
        { id: '3', name: 'Mike Chen', role: 'Frontend Developer', avatar: 'M' },
      ],
      tasks: [
        {
          id: 't1',
          title: 'Design mockups',
          description: 'Create high-fidelity mockups for homepage and key pages',
          completed: true,
          assignee: 'Sarah Johnson',
          assigneeId: '2',
          dueDate: '2024-01-15',
          priority: 'high',
          createdAt: '2024-01-01'
        },
        {
          id: 't2',
          title: 'Frontend development',
          description: 'Implement responsive frontend components',
          completed: false,
          assignee: 'John Smith',
          assigneeId: '1',
          dueDate: '2024-02-01',
          priority: 'high',
          createdAt: '2024-01-10'
        },
        {
          id: 't3',
          title: 'Backend API integration',
          description: 'Connect frontend to existing backend systems',
          completed: false,
          assignee: 'Mike Chen',
          assigneeId: '3',
          dueDate: '2024-02-10',
          priority: 'medium',
          createdAt: '2024-01-12'
        },
        {
          id: 't4',
          title: 'Testing & QA',
          description: 'Comprehensive testing across devices and browsers',
          completed: false,
          assignee: 'Sarah Johnson',
          assigneeId: '2',
          dueDate: '2024-02-12',
          priority: 'high',
          createdAt: '2024-01-15'
        },
      ],
      milestones: [
        { id: 'm1', title: 'Design Phase Complete', completed: true, dueDate: '2024-01-15' },
        { id: 'm2', title: 'Development Phase Complete', completed: false, dueDate: '2024-02-01' },
        { id: 'm3', title: 'Testing Phase Complete', completed: false, dueDate: '2024-02-12' },
        { id: 'm4', title: 'Launch', completed: false, dueDate: '2024-02-15' },
      ],
      createdAt: '2024-01-01',
      updatedAt: '2024-01-10'
    }
  }

  return projects[projectId as keyof typeof projects] || null
}

const statusConfig = {
  planning: { color: 'bg-yellow-100 text-yellow-800', icon: Clock, label: 'Planning' },
  active: { color: 'bg-green-100 text-green-800', icon: TrendingUp, label: 'Active' },
  'on-hold': { color: 'bg-orange-100 text-orange-800', icon: AlertTriangle, label: 'On Hold' },
  completed: { color: 'bg-blue-100 text-blue-800', icon: CheckCircle, label: 'Completed' }
}

const priorityConfig = {
  low: 'bg-gray-100 text-gray-800',
  medium: 'bg-blue-100 text-blue-800',
  high: 'bg-red-100 text-red-800'
}

const taskPriorityConfig = {
  low: 'text-gray-600',
  medium: 'text-blue-600',
  high: 'text-red-600'
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.projectId as string
  const project = getProjectData(projectId)

  const [tasks, setTasks] = useState(project?.tasks || [])

  if (!project) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Project not found</h3>
          <Link href="/projects">
            <Button variant="outline">Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  const StatusIcon = statusConfig[project.status as keyof typeof statusConfig].icon
  const completedTasks = tasks.filter(t => t.completed).length
  const totalTasks = tasks.length
  const completedMilestones = project.milestones.filter(m => m.completed).length
  const totalMilestones = project.milestones.length

  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/projects">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-black tracking-tight">{project.name}</h1>
            <p className="text-gray-600 mt-2 text-lg">{project.client}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit Project
          </Button>
          <Button className="bg-black hover:bg-gray-800">
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>
      </div>

      {/* Project Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <StatusIcon className="h-5 w-5" />
                  <Badge className={statusConfig[project.status as keyof typeof statusConfig].color}>
                    {statusConfig[project.status as keyof typeof statusConfig].label}
                  </Badge>
                  <Badge className={priorityConfig[project.priority as keyof typeof priorityConfig]}>
                    {project.priority} priority
                  </Badge>
                </div>
                <span className="text-2xl font-bold text-gray-900">{project.progress}%</span>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={project.progress} className="h-3 mb-4" />
              <p className="text-gray-600">{project.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div>
                  <p className="text-sm font-medium text-gray-600">Start Date</p>
                  <p className="text-sm text-gray-900">{new Date(project.startDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Due Date</p>
                  <p className="text-sm text-gray-900">{new Date(project.dueDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Budget</p>
                  <p className="text-sm text-gray-900">{project.budget}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Team Size</p>
                  <p className="text-sm text-gray-900">{project.team.length} members</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Milestones */}
          <Card>
            <CardHeader>
              <CardTitle>Milestones</CardTitle>
              <CardDescription>Key project checkpoints and deliverables</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${milestone.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`} />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${milestone.completed ? 'text-gray-600 line-through' : 'text-gray-900'}`}>
                        {milestone.title}
                      </p>
                      <p className="text-xs text-gray-500">Due: {new Date(milestone.dueDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Team Members */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team ({project.team.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {project.team.map((member) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Progress Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tasks Completed</span>
                    <span>{completedTasks}/{totalTasks}</span>
                  </div>
                  <Progress value={(completedTasks / totalTasks) * 100} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Milestones</span>
                    <span>{completedMilestones}/{totalMilestones}</span>
                  </div>
                  <Progress value={(completedMilestones / totalMilestones) * 100} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Overall Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tasks Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Tasks</CardTitle>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </div>
          <CardDescription>Track individual tasks and their completion status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => handleTaskToggle(task.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                      {task.title}
                    </h4>
                    <Badge className={taskPriorityConfig[task.priority as keyof typeof taskPriorityConfig]}>
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {task.assignee}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}