'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, UserPlus, Calendar, Settings, TrendingUp, RotateCcw } from 'lucide-react'
import Link from 'next/link'

const operationsModules = [
  {
    id: 'va-management',
    title: 'VA Management & Onboarding',
    description: 'Hire, train, and manage virtual assistants effectively',
    icon: UserPlus,
    color: 'bg-blue-500',
    progress: 0,
    completed: false,
    estimatedTime: '4 hours',
    lessons: [
      'VA hiring strategies and platforms',
      'Interview and selection process',
      'Onboarding and training protocols',
      'Performance management and KPIs',
      'Tools and workflow optimization',
      'Communication and feedback systems'
    ],
    href: '/operations/va-management'
  },
  {
    id: 'team-scheduling',
    title: 'Team Scheduling & Coordination',
    description: 'Master team coordination across time zones',
    icon: Calendar,
    color: 'bg-green-500',
    progress: 0,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Time zone management best practices',
      'Scheduling tools and automation',
      'Meeting coordination protocols',
      'Workload distribution strategies',
      'Availability and capacity planning',
      'Conflict resolution and prioritization'
    ],
    href: '/operations/team-scheduling'
  },
  {
    id: 'agency-operations',
    title: 'Agency Operations',
    description: 'Streamline agency processes and workflows',
    icon: Settings,
    color: 'bg-purple-500',
    progress: 0,
    completed: false,
    estimatedTime: '5 hours',
    lessons: [
      'Process documentation and SOPs',
      'Workflow automation strategies',
      'Quality control and standards',
      'Client onboarding processes',
      'Project management frameworks',
      'Operational scalability planning'
    ],
    href: '/operations/agency-operations'
  },
  {
    id: 'performance-management',
    title: 'Performance Management',
    description: 'Track, measure, and improve team performance',
    icon: TrendingUp,
    color: 'bg-orange-500',
    progress: 0,
    completed: false,
    estimatedTime: '4 hours',
    lessons: [
      'KPI setting and measurement',
      'Performance review processes',
      'Feedback and coaching techniques',
      'Motivation and engagement strategies',
      'Performance improvement plans',
      'Recognition and reward systems'
    ],
    href: '/operations/performance-management'
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization',
    description: 'Identify and eliminate operational inefficiencies',
    icon: RotateCcw,
    color: 'bg-red-500',
    progress: 0,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Process mapping and analysis',
      'Bottleneck identification techniques',
      'Automation opportunities',
      'Workflow redesign principles',
      'Change management strategies',
      'Continuous improvement frameworks'
    ],
    href: '/operations/process-optimization'
  },
  {
    id: 'hr-best-practices',
    title: 'HR Best Practices',
    description: 'Essential HR policies and procedures',
    icon: Users,
    color: 'bg-teal-500',
    progress: 0,
    completed: false,
    estimatedTime: '4 hours',
    lessons: [
      'Employee handbook creation',
      'Compliance and legal requirements',
      'Professional development planning',
      'Workplace culture building',
      'Conflict resolution techniques',
      'Termination and offboarding processes'
    ],
    href: '/operations/hr-best-practices'
  }
]

export default function OperationsPage() {
  const totalProgress = Math.round(
    operationsModules.reduce((sum, module) => sum + module.progress, 0) / operationsModules.length
  )
  const completedModules = operationsModules.filter(m => m.completed).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Operations & HR</h1>
              <p className="text-gray-600 text-lg">Master team management and operational excellence</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-slate-900">{totalProgress}%</div>
            <div className="text-sm text-slate-500">Complete</div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
              <CheckCircle className="h-4 w-4" />
              {completedModules}/{operationsModules.length} Done
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Program Progress</CardTitle>
          <CardDescription>Your journey to operational mastery</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Completion</span>
              <span>{totalProgress}%</span>
            </div>
            <Progress value={totalProgress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Module Grid */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Training Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {operationsModules.map((module) => {
            const Icon = module.icon

            return (
              <Card key={module.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${module.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      {module.completed && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      <Badge variant={module.progress === 100 ? "default" : "secondary"}>
                        {module.progress}%
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Estimated time: {module.estimatedTime}</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Key Topics:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {module.lessons.slice(0, 3).map((lesson, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            {lesson}
                          </li>
                        ))}
                        {module.lessons.length > 3 && (
                          <li className="text-gray-500">
                            +{module.lessons.length - 3} more topics...
                          </li>
                        )}
                      </ul>
                    </div>

                    <Link href={module.href}>
                      <Button className="w-full" variant={module.completed ? "outline" : "default"}>
                        {module.completed ? 'Review Module' : 'Start Module'}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Essential tools and resources for operations success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <UserPlus className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">VA Management</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Calendar className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Team Scheduling</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <TrendingUp className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Performance Dashboard</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Settings className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Process Templates</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}