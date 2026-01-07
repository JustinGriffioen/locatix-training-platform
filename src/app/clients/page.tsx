'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Users,
  Building,
  TrendingUp,
  Target,
  Calendar,
  ArrowRight,
  Plus
} from 'lucide-react'
import Link from 'next/link'

// Mock client data
const clients = [
  {
    id: 'acme-corp',
    name: 'Acme Corp',
    industry: 'Manufacturing',
    description: 'Leading manufacturer of industrial equipment and machinery',
    status: 'active',
    projects: 3,
    activeProjects: 2,
    totalRevenue: '$250,000',
    lastActivity: '2024-01-10',
    team: ['John', 'Sarah', 'Mike']
  },
  {
    id: 'techstart-inc',
    name: 'TechStart Inc',
    industry: 'SaaS',
    description: 'Project management and collaboration platform for teams',
    status: 'active',
    projects: 2,
    activeProjects: 1,
    totalRevenue: '$180,000',
    lastActivity: '2024-01-12',
    team: ['Lisa', 'Tom']
  },
  {
    id: 'fitlife-app',
    name: 'FitLife App',
    industry: 'Health & Fitness',
    description: 'Mobile fitness tracking and coaching application',
    status: 'on-hold',
    projects: 1,
    activeProjects: 0,
    totalRevenue: '$95,000',
    lastActivity: '2024-01-09',
    team: ['Chris', 'Anna', 'Ryan']
  },
  {
    id: 'locatix-internal',
    name: 'Locatix (Internal)',
    industry: 'Agency Operations',
    description: 'Internal projects and operational improvements',
    status: 'active',
    projects: 4,
    activeProjects: 2,
    totalRevenue: 'N/A',
    lastActivity: '2024-01-11',
    team: ['Alex', 'Emma', 'David']
  }
]

const statusConfig = {
  active: { color: 'bg-green-100 text-green-800', label: 'Active' },
  'on-hold': { color: 'bg-orange-100 text-orange-800', label: 'On Hold' },
  inactive: { color: 'bg-gray-100 text-gray-800', label: 'Inactive' }
}

export default function ClientsPage() {
  const stats = {
    total: clients.length,
    active: clients.filter(c => c.status === 'active').length,
    totalProjects: clients.reduce((sum, c) => sum + c.projects, 0),
    activeProjects: clients.reduce((sum, c) => sum + c.activeProjects, 0)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-black tracking-tight">Client Workspaces</h1>
          <p className="text-gray-600 mt-2 text-lg">Manage projects and track progress for each client</p>
        </div>
        <Button className="bg-black hover:bg-gray-800">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Building className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Clients</p>
                <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalProjects}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeProjects}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Clients Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => {
          const projectProgress = client.projects > 0 ? (client.activeProjects / client.projects) * 100 : 0

          return (
            <Card key={client.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{client.name}</CardTitle>
                    <CardDescription className="mt-1">{client.industry}</CardDescription>
                  </div>
                  <Badge className={statusConfig[client.status as keyof typeof statusConfig].color}>
                    {statusConfig[client.status as keyof typeof statusConfig].label}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{client.description}</p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Projects</p>
                      <p className="text-lg font-bold text-gray-900">
                        {client.activeProjects}/{client.projects} active
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Revenue</p>
                      <p className="text-lg font-bold text-gray-900">{client.totalRevenue}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Project Completion</span>
                      <span className="text-gray-900">{Math.round(projectProgress)}%</span>
                    </div>
                    <Progress value={projectProgress} className="h-2" />
                  </div>

                  {/* Team */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Team ({client.team.length})</p>
                    <div className="flex -space-x-2">
                      {client.team.slice(0, 4).map((member, index) => (
                        <div
                          key={index}
                          className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-sm font-medium"
                          title={member}
                        >
                          {member[0]}
                        </div>
                      ))}
                      {client.team.length > 4 && (
                        <div className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm font-medium">
                          +{client.team.length - 4}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Last Activity */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    Last activity: {new Date(client.lastActivity).toLocaleDateString()}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Link href={`/clients/${client.id}/projects`} className="flex-1">
                      <Button className="w-full bg-black hover:bg-gray-800">
                        View Projects
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common client management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Plus className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Add New Client</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Target className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Create Project</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <TrendingUp className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">View Analytics</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Users className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Team Overview</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}