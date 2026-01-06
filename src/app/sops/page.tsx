'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckSquare, Clock, Calendar, AlertTriangle, CheckCircle, Users, Code, PenTool } from 'lucide-react'

const sopCategories = [
  {
    id: 'sdr',
    title: 'SDR/BDR SOPs',
    icon: Users,
    color: 'bg-blue-500',
    tasks: [
      {
        id: 1,
        title: 'Daily Prospecting Routine',
        description: 'Complete 50 prospecting activities per day',
        completed: true,
        deadline: 'Daily',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'LinkedIn prospecting (20)', completed: true },
          { id: 2, title: 'Email outreach (20)', completed: true },
          { id: 3, title: 'Call attempts (10)', completed: false }
        ]
      },
      {
        id: 2,
        title: 'List Building',
        description: 'Update and maintain prospect lists',
        completed: false,
        deadline: 'Weekly',
        priority: 'medium',
        subtasks: [
          { id: 1, title: 'Clean inactive contacts', completed: true },
          { id: 2, title: 'Add 100 new prospects', completed: false },
          { id: 3, title: 'Update company data', completed: false }
        ]
      },
      {
        id: 3,
        title: 'Weekly Performance Review',
        description: 'Review metrics and adjust strategy',
        completed: false,
        deadline: 'Friday',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Analyze response rates', completed: false },
          { id: 2, title: 'Update messaging', completed: false },
          { id: 3, title: 'Plan next week strategy', completed: false }
        ]
      }
    ]
  },
  {
    id: 'webdev',
    title: 'Web Development SOPs',
    icon: Code,
    color: 'bg-green-500',
    tasks: [
      {
        id: 1,
        title: 'Code Review Process',
        description: 'Complete code reviews for team PRs',
        completed: true,
        deadline: 'Daily',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Review assigned PRs', completed: true },
          { id: 2, title: 'Provide constructive feedback', completed: true },
          { id: 3, title: 'Approve ready PRs', completed: true }
        ]
      },
      {
        id: 2,
        title: 'Deployment Checklist',
        description: 'Follow deployment procedures',
        completed: false,
        deadline: 'Before deployment',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Run test suite', completed: true },
          { id: 2, title: 'Update documentation', completed: false },
          { id: 3, title: 'Backup database', completed: false },
          { id: 4, title: 'Notify team', completed: false }
        ]
      }
    ]
  },
  {
    id: 'content',
    title: 'Content Marketing SOPs',
    icon: PenTool,
    color: 'bg-purple-500',
    tasks: [
      {
        id: 1,
        title: 'Content Calendar Updates',
        description: 'Plan and schedule content for the week',
        completed: false,
        deadline: 'Monday',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Review analytics', completed: true },
          { id: 2, title: 'Plan content themes', completed: false },
          { id: 3, title: 'Schedule posts', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Video Production',
        description: 'Complete weekly video content',
        completed: false,
        deadline: 'Wednesday',
        priority: 'medium',
        subtasks: [
          { id: 1, title: 'Script writing', completed: true },
          { id: 2, title: 'Recording session', completed: false },
          { id: 3, title: 'Editing and post-production', completed: false }
        ]
      }
    ]
  }
]

export default function SOPsPage() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertTriangle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
              <CheckSquare className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">SOPs & Timetable</h1>
              <p className="text-gray-600 text-lg">Standard operating procedures and scheduled tasks</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
            <Calendar className="h-4 w-4" />
            Updated Today
          </Badge>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Completed Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">12</div>
            <p className="text-sm text-gray-600">tasks completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              Due Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">5</div>
            <p className="text-sm text-gray-600">tasks remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Overdue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">2</div>
            <p className="text-sm text-gray-600">need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* SOP Categories */}
      <div className="space-y-6">
        {sopCategories.map((category) => {
          const Icon = category.icon
          const totalTasks = category.tasks.length
          const completedTasks = category.tasks.filter(task => task.completed).length
          const progress = (completedTasks / totalTasks) * 100

          return (
            <Card key={category.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{completedTasks} of {totalTasks} tasks completed</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{Math.round(progress)}% Complete</Badge>
                </div>
                <Progress value={progress} className="mt-4" />
              </CardHeader>

              <CardContent className="space-y-4">
                {category.tasks.map((task) => {
                  const completedSubtasks = task.subtasks.filter(st => st.completed).length
                  const totalSubtasks = task.subtasks.length

                  return (
                    <Card key={task.id} className={`border-l-4 ${task.completed ? 'border-l-green-500 bg-green-50' : 'border-l-gray-300'}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <div className={`w-4 h-4 rounded border-2 mt-1 ${task.completed ? 'bg-black border-black' : 'border-gray-300'}`}>
                              {task.completed && (
                                <svg className="w-3 h-3 text-white mt-0.5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                  {task.title}
                                </h4>
                                <Badge className={getPriorityColor(task.priority)}>
                                  {getPriorityIcon(task.priority)}
                                  <span className="ml-1">{task.priority}</span>
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  Due: {task.deadline}
                                </span>
                                <span>{completedSubtasks}/{totalSubtasks} subtasks</span>
                              </div>

                              {/* Subtasks */}
                              <div className="space-y-2">
                                {task.subtasks.map((subtask) => (
                                  <div key={subtask.id} className="flex items-center gap-2 text-sm">
                                    <div className={`w-3 h-3 rounded border ${subtask.completed ? 'bg-black border-black' : 'border-gray-300'}`}>
                                      {subtask.completed && (
                                        <svg className="w-2 h-2 text-white mt-0.5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                      )}
                                    </div>
                                    <span className={subtask.completed ? 'line-through text-gray-500' : 'text-gray-700'}>
                                      {subtask.title}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Badge variant={task.completed ? 'default' : 'outline'} className="text-xs">
                            {task.completed ? 'Completed' : 'Pending'}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your SOPs and schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <CheckSquare className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Bulk Update</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Calendar className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Schedule Tasks</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <AlertTriangle className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">View Overdue</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <CheckCircle className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Generate Report</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}