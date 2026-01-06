'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Calendar, Users, Target, Heart, TrendingUp } from 'lucide-react'

const teamSchedules = [
  {
    role: 'Lead Generation SDR',
    schedule: 'Monday - Friday, 9:00 AM - 5:00 PM PHT',
    timezone: 'PHT (+8 GMT)',
    responsibilities: [
      'Cold outbound prospecting',
      'CRM data management',
      'Lead qualification calls',
      'Meeting scheduling'
    ],
    breaks: '30-60 minutes total breaks',
    communication: 'Discord for daily updates, Slack for client comms'
  },
  {
    role: 'Content Creator',
    schedule: 'Monday - Friday, 10:00 AM - 6:00 PM PHT',
    timezone: 'PHT (+8 GMT)',
    responsibilities: [
      'Social media content creation',
      'Blog post writing and editing',
      'Graphic design and video editing',
      'Content calendar management'
    ],
    breaks: '30-60 minutes total breaks',
    communication: 'Discord for team updates, Trello for task tracking'
  },
  {
    role: 'Web Developer',
    schedule: 'Monday - Friday, 9:00 AM - 5:00 PM PHT',
    timezone: 'PHT (+8 GMT)',
    responsibilities: [
      'Website development and maintenance',
      'Landing page optimization',
      'Technical SEO implementation',
      'Performance monitoring'
    ],
    breaks: '30-60 minutes total breaks',
    communication: 'Discord for technical discussions, GitHub for code reviews'
  },
  {
    role: 'Client Services',
    schedule: 'Monday - Friday, 9:00 AM - 5:00 PM CET',
    timezone: 'CET (+1 GMT)',
    responsibilities: [
      'Client relationship management',
      'Project coordination',
      'Success metrics tracking',
      'Client onboarding and training'
    ],
    breaks: '30-60 minutes total breaks',
    communication: 'Slack for client communications, HubSpot for CRM'
  }
]

const dailyWorkflow = [
  {
    time: '09:00 - 09:15',
    activity: 'Daily Standup & Planning',
    description: 'Team check-in, priority setting, blocker identification'
  },
  {
    time: '09:15 - 12:00',
    activity: 'Deep Work Session 1',
    description: 'Focused work on primary responsibilities, minimal interruptions'
  },
  {
    time: '12:00 - 13:00',
    activity: 'Lunch & Break',
    description: 'Rest and recharge, team social time'
  },
  {
    time: '13:00 - 15:30',
    activity: 'Deep Work Session 2',
    description: 'Continued focused work, progress reviews'
  },
  {
    time: '15:30 - 16:00',
    activity: 'Collaboration & Meetings',
    description: 'Client calls, team meetings, cross-functional work'
  },
  {
    time: '16:00 - 16:45',
    activity: 'Administrative Tasks',
    description: 'Email management, reporting, task organization'
  },
  {
    time: '16:45 - 17:00',
    activity: 'End of Day Review',
    description: 'Progress summary, tomorrow planning, sign-off'
  }
]

const performanceFramework = [
  {
    category: 'Productivity Metrics',
    metrics: [
      { name: 'Tasks Completed', target: 'Daily goals met', measurement: 'Task completion rate' },
      { name: 'Response Time', target: '< 2 hours', measurement: 'Average response time' },
      { name: 'Project Delivery', target: 'On-time delivery', measurement: 'Delivery schedule adherence' }
    ]
  },
  {
    category: 'Quality Metrics',
    metrics: [
      { name: 'Error Rate', target: '< 5%', measurement: 'Quality assurance checks' },
      { name: 'Client Satisfaction', target: '> 4.5/5', measurement: 'Client feedback surveys' },
      { name: 'Process Adherence', target: '> 95%', measurement: 'SOP compliance rate' }
    ]
  },
  {
    category: 'Growth Metrics',
    metrics: [
      { name: 'Skill Development', target: 'Monthly progress', measurement: 'Training completion' },
      { name: 'Knowledge Sharing', target: 'Weekly contributions', measurement: 'Team knowledge base updates' },
      { name: 'Process Improvements', target: 'Monthly suggestions', measurement: 'Efficiency enhancement proposals' }
    ]
  }
]

const communicationProtocols = [
  {
    channel: 'Discord',
    purpose: 'Internal team communication',
    usage: 'Daily updates, technical discussions, quick questions',
    responseTime: '< 2 hours during work hours'
  },
  {
    channel: 'Slack',
    purpose: 'Client communication',
    usage: 'Client meetings, project updates, formal communications',
    responseTime: '< 4 hours during work hours'
  },
  {
    channel: 'Email',
    purpose: 'External formal communication',
    usage: 'Client proposals, official correspondence, external partners',
    responseTime: '< 24 hours'
  },
  {
    channel: 'Trello/Asana',
    purpose: 'Project management',
    usage: 'Task assignment, progress tracking, deadline management',
    responseTime: 'Daily updates required'
  }
]

export default function SchedulesHRPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
          <Clock className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-black tracking-tight">Schedules & HR</h1>
          <p className="text-gray-600 text-lg">Team coordination, performance management, and HR processes</p>
        </div>
      </div>

      {/* Team Schedules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-black" />
            Team Work Schedules
          </CardTitle>
          <CardDescription>Standard working hours and time zones for team coordination</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {teamSchedules.map((schedule, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{schedule.role}</CardTitle>
                    <Badge variant="outline">{schedule.timezone}</Badge>
                  </div>
                  <CardDescription className="text-sm">{schedule.schedule}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Key Responsibilities:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {schedule.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-black rounded-full" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        <strong>Breaks:</strong> {schedule.breaks}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        <strong>Communication:</strong> {schedule.communication}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Workflow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-black" />
            Standard Daily Workflow
          </CardTitle>
          <CardDescription>Optimized daily routine for maximum productivity and work-life balance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dailyWorkflow.map((block, index) => (
              <div key={index} className="flex items-start gap-4 p-3 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-gray-700">
                  {block.time}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-black">{block.activity}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-black" />
            Performance Management Framework
          </CardTitle>
          <CardDescription>Key metrics and targets for team performance tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {performanceFramework.map((category, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.metrics.map((metric, idx) => (
                      <div key={idx} className="pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium text-black">{metric.name}</p>
                          <Badge variant="outline" className="text-xs">{metric.target}</Badge>
                        </div>
                        <p className="text-xs text-gray-600">{metric.measurement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Communication Protocols */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-black" />
            Communication Protocols
          </CardTitle>
          <CardDescription>Standard channels and response times for effective team communication</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {communicationProtocols.map((protocol, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">{protocol.channel}</CardTitle>
                  <CardDescription>{protocol.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-600">
                        <strong>Usage:</strong> {protocol.usage}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <Badge variant="outline" className="text-xs">
                        Response: {protocol.responseTime}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* HR Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-black" />
            HR Best Practices
          </CardTitle>
          <CardDescription>Guidelines for team management and professional development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-black mb-3">Team Development</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Regular one-on-one meetings for feedback</li>
                <li>• Quarterly performance reviews with goal setting</li>
                <li>• Professional development budget allocation</li>
                <li>• Cross-training opportunities between roles</li>
                <li>• Recognition and rewards for achievements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3">Work-Life Balance</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Flexible working hours within core hours</li>
                <li>• Mandatory time off and vacation policy</li>
                <li>• Mental health days and support resources</li>
                <li>• Clear boundaries between work and personal time</li>
                <li>• Remote work options and equipment support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}