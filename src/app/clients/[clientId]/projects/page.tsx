'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Plus,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  AlertTriangle,
  Target,
  TrendingUp,
  ArrowLeft,
  MoreHorizontal,
  Edit,
  Trash2
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Mock data for client projects - in real app this would be fetched based on clientId
const getClientProjects = (clientId: string) => {
  const allProjects = [
    {
      id: '1',
      name: 'Website Redesign - Acme Corp',
      client: 'Acme Corp',
      clientId: 'acme-corp',
      description: 'Complete website overhaul with new branding and improved UX',
      status: 'active',
      priority: 'high',
      progress: 65,
      dueDate: '2024-02-15',
      team: ['John', 'Sarah', 'Mike'],
      tasks: [
        { id: 't1', title: 'Design mockups', completed: true, assignee: 'Sarah' },
        { id: 't2', title: 'Frontend development', completed: false, assignee: 'John' },
        { id: 't3', title: 'Backend API integration', completed: false, assignee: 'Mike' },
        { id: 't4', title: 'Testing & QA', completed: false, assignee: 'Sarah' },
      ],
      createdAt: '2024-01-01',
      updatedAt: '2024-01-10'
    },
    {
      id: '2',
      name: 'Internal CRM System',
      client: 'Locatix (Internal)',
      clientId: 'locatix-internal',
      description: 'Build internal CRM for team management and client tracking',
      status: 'planning',
      priority: 'medium',
      progress: 20,
      dueDate: '2024-03-30',
      team: ['Alex', 'Emma', 'David'],
      tasks: [
        { id: 't5', title: 'Requirements gathering', completed: true, assignee: 'Emma' },
        { id: 't6', title: 'Database design', completed: false, assignee: 'David' },
        { id: 't7', title: 'UI/UX design', completed: false, assignee: 'Alex' },
      ],
      createdAt: '2024-01-05',
      updatedAt: '2024-01-08'
    },
    {
      id: '3',
      name: 'Content Marketing Strategy - TechStart',
      client: 'TechStart Inc',
      clientId: 'techstart-inc',
      description: 'Develop comprehensive content strategy and editorial calendar',
      status: 'active',
      priority: 'medium',
      progress: 40,
      dueDate: '2024-02-28',
      team: ['Lisa', 'Tom'],
      tasks: [
        { id: 't8', title: 'Audience research', completed: true, assignee: 'Lisa' },
        { id: 't9', title: 'Content calendar creation', completed: false, assignee: 'Tom' },
        { id: 't10', title: 'SEO keyword research', completed: false, assignee: 'Lisa' },
      ],
      createdAt: '2024-01-03',
      updatedAt: '2024-01-12'
    },
    {
      id: '4',
      name: 'Mobile App Development - FitLife',
      client: 'FitLife App',
      clientId: 'fitlife-app',
      description: 'Native mobile app for fitness tracking and coaching',
      status: 'on-hold',
      priority: 'high',
      progress: 15,
      dueDate: '2024-04-15',
      team: ['Chris', 'Anna', 'Ryan'],
      tasks: [
        { id: 't11', title: 'Wireframing', completed: true, assignee: 'Anna' },
        { id: 't12', title: 'API development', completed: false, assignee: 'Chris' },
        { id: 't13', title: 'iOS development', completed: false, assignee: 'Ryan' },
      ],
      createdAt: '2024-01-02',
      updatedAt: '2024-01-09'
    }
  ]

  return allProjects.filter(project => project.clientId === clientId)
}

const statusConfig = {
  planning: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
  active: { color: 'bg-green-100 text-green-800', icon: TrendingUp },
  'on-hold': { color: 'bg-orange-100 text-orange-800', icon: AlertTriangle },
  completed: { color: 'bg-blue-100 text-blue-800', icon: CheckCircle }
}

const priorityConfig = {
  low: 'bg-gray-100 text-gray-800',
  medium: 'bg-blue-100 text-blue-800',
  high: 'bg-red-100 text-red-800'
}

export default function ClientProjectsPage() {
  const params = useParams()
  const clientId = params.clientId as string

  // Mock client data - in real app this would be fetched
  const clientData = {
    'acme-corp': { name: 'Acme Corp', description: 'Manufacturing company specializing in industrial equipment' },
    'techstart-inc': { name: 'TechStart Inc', description: 'SaaS startup focused on project management tools' },
    'fitlife-app': { name: 'FitLife App', description: 'Health and fitness mobile application' },
    'locatix-internal': { name: 'Locatix (Internal)', description: 'Internal team projects and tools' }
  }

  const client = clientData[clientId as keyof typeof clientData] || { name: clientId, description: '' }
  const projects = getClientProjects(clientId)

  const stats = {
    total: projects.length,
    active: projects.filter(p => p.status === 'active').length,
    completed: projects.filter(p => p.status === 'completed').length,
    overdue: projects.filter(p => new Date(p.dueDate) < new Date() && p.status !== 'completed').length
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/clients">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Clients
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-black tracking-tight">{client.name} Projects</h1>
            <p className="text-gray-600 mt-2 text-lg">{client.description}</p>
          </div>
        </div>
        <Button className="bg-black hover:bg-gray-800">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Overdue</p>
                <p className="text-2xl font-bold text-gray-900">{stats.overdue}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const StatusIcon = statusConfig[project.status as keyof typeof statusConfig].icon
          const completedTasks = project.tasks.filter(t => t.completed).length
          const totalTasks = project.tasks.length

          return (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">{project.name}</CardTitle>
                    <CardDescription className="mt-1">{project.client}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Badge className={priorityConfig[project.priority]}>
                      {project.priority}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>

                  {/* Status and Progress */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <StatusIcon className="h-4 w-4" />
                      <Badge className={statusConfig[project.status as keyof typeof statusConfig].color}>
                        {project.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{project.progress}%</span>
                  </div>

                  <Progress value={project.progress} className="h-2" />

                  {/* Tasks Summary */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Tasks: {completedTasks}/{totalTasks} completed
                    </span>
                    <div className="flex -space-x-1">
                      {project.team.slice(0, 3).map((member, index) => (
                        <div
                          key={index}
                          className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium"
                        >
                          {member[0]}
                        </div>
                      ))}
                      {project.team.length > 3 && (
                        <div className="h-6 w-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
                          +{project.team.length - 3}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Due Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    Due: {new Date(project.dueDate).toLocaleDateString()}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Link href={`/projects/${project.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {projects.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-4">This client doesn't have any projects yet.</p>
            <Button className="bg-black hover:bg-gray-800">
              <Plus className="h-4 w-4 mr-2" />
              Create First Project
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}