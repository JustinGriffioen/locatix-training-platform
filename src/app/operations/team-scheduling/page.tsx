'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Users, Globe, CheckCircle, AlertTriangle, TrendingUp, MessageSquare } from 'lucide-react'

const schedulingModules = [
  {
    id: 'time-zone-management',
    title: 'Time Zone Coordination',
    description: 'Managing teams across different time zones effectively',
    progress: 0,
    completed: false,
    lessons: [
      'Understanding global time zones and work patterns',
      'Scheduling overlapping work hours',
      'Async communication strategies',
      'Meeting coordination best practices',
      'Emergency response protocols'
    ]
  },
  {
    id: 'capacity-planning',
    title: 'Workload Distribution',
    description: 'Balancing team capacity and project demands',
    progress: 0,
    completed: false,
    lessons: [
      'Team capacity assessment',
      'Workload forecasting and planning',
      'Resource allocation strategies',
      'Priority setting and conflict resolution',
      'Capacity reporting and adjustments'
    ]
  },
  {
    id: 'meeting-management',
    title: 'Meeting Coordination',
    description: 'Running effective meetings and managing calendars',
    progress: 0,
    completed: false,
    lessons: [
      'Meeting purpose and agenda setting',
      'Calendar management systems',
      'Meeting facilitation techniques',
      'Action item tracking and follow-up',
      'Meeting culture and norms'
    ]
  },
  {
    id: 'communication-protocols',
    title: 'Communication Protocols',
    description: 'Establishing clear communication guidelines',
    progress: 0,
    completed: false,
    lessons: [
      'Response time expectations',
      'Preferred communication channels',
      'Documentation standards',
      'Escalation procedures',
      'Communication during off-hours'
    ]
  }
]

export default function TeamSchedulingPage() {
  const totalProgress = Math.round(
    schedulingModules.reduce((sum, module) => sum + module.progress, 0) / schedulingModules.length
  )
  const completedModules = schedulingModules.filter(m => m.completed).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-green-500 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Team Scheduling & Coordination</h1>
              <p className="text-gray-600 text-lg">Master team coordination across time zones</p>
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
              {completedModules}/{schedulingModules.length} Done
            </Badge>
          </div>
        </div>
      </div>

      {/* Time Zone Challenges */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Globe className="h-5 w-5" />
            The Global Team Challenge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Communication Gaps</h4>
              <p className="text-green-800 text-sm">Ensuring smooth information flow across time zones</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Meeting Coordination</h4>
              <p className="text-green-800 text-sm">Finding mutually convenient times for collaboration</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Response Times</h4>
              <p className="text-green-800 text-sm">Managing expectations for replies and deliverables</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Work-Life Balance</h4>
              <p className="text-green-800 text-sm">Preventing burnout from extended working hours</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Training Modules */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Training Modules</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {schedulingModules.map((module) => (
            <Card key={module.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${module.progress === 100 ? 'bg-green-500' : 'bg-gray-500'}`}>
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant={module.progress === 100 ? "default" : "secondary"}>
                    {module.progress}%
                  </Badge>
                </div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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

                  <button className="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded">
                    {module.completed ? 'Review Module' : 'Start Module'}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            Scheduling Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Time Zone Management
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Identify 2-3 hour overlaps for daily stand-ups
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Use scheduling tools like World Time Buddy
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Rotate meeting times to share the inconvenience
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Record important meetings for absent team members
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Communication Protocols
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Set clear response time expectations (e.g., 24 hours)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Use async tools like Slack, Notion, and Loom
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Establish communication windows and quiet hours
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Document everything in writing for clarity
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools & Technology */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-500" />
            Essential Tools for Team Coordination
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Calendar Management</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Google Calendar / Outlook</li>
                <li>• Calendly for external meetings</li>
                <li>• World Time Buddy for time zones</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Communication</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Slack / Microsoft Teams</li>
                <li>• Discord for team chat</li>
                <li>• Zoom / Google Meet for calls</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Project Management</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Asana / Trello / Monday.com</li>
                <li>• Notion for documentation</li>
                <li>• Jira for complex workflows</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Time Tracking</h4>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Toggl / Harvest</li>
                <li>• Clockify for team tracking</li>
                <li>• RescueTime for productivity</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Async Tools</h4>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Loom for video messages</li>
                <li>• Google Docs for collaboration</li>
                <li>• Miro for visual planning</li>
              </ul>
            </div>

            <div className="p-4 bg-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-900 mb-2">Scheduling</h4>
              <ul className="text-sm text-teal-800 space-y-1">
                <li>• Acuity Scheduling</li>
                <li>• YouCanBook.me</li>
                <li>• Doodle for polls</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Common Scheduling Pitfalls & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Over-scheduling</h4>
              <p className="text-red-800 text-sm mb-2"><strong>Solution:</strong> Block focus time on calendars, limit meetings to essential only, and respect time zones when scheduling.</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Communication Breakdown</h4>
              <p className="text-orange-800 text-sm mb-2"><strong>Solution:</strong> Establish clear protocols, use multiple channels, and always follow up important communications in writing.</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Burnout from Always-On Culture</h4>
              <p className="text-yellow-800 text-sm mb-2"><strong>Solution:</strong> Set clear boundaries, respect off-hours, and encourage work-life balance across all time zones.</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Double-Booked Resources</h4>
              <p className="text-blue-800 text-sm mb-2"><strong>Solution:</strong> Use centralized booking systems, maintain capacity visibility, and implement approval workflows for major commitments.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}