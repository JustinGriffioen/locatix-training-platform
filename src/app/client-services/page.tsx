'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Headphones, Heart, Shield, TrendingUp, Users, RotateCcw } from 'lucide-react'
import Link from 'next/link'

const clientServicesModules = [
  {
    id: 'onboarding',
    title: 'Client Services Onboarding',
    description: 'Welcome to the client success team',
    icon: Headphones,
    color: 'bg-black',
    progress: 100,
    completed: true,
    estimatedTime: '2 hours',
    lessons: [
      'Team structure and client lifecycle',
      'Customer success mindset',
      'Tools and systems overview',
      'Communication protocols',
      'Success metrics and KPIs'
    ],
    href: '/client-services/onboarding'
  },
  {
    id: 'customer-success',
    title: 'Customer Success Fundamentals',
    description: 'Building long-term client relationships and value',
    icon: Heart,
    color: 'bg-black',
    progress: 80,
    completed: false,
    estimatedTime: '4 hours',
    lessons: [
      'Customer journey mapping',
      'Health score creation',
      'Success planning frameworks',
      'Value realization tracking',
      'Proactive engagement strategies'
    ],
    href: '/client-services/customer-success'
  },
  {
    id: 'account-management',
    title: 'Account Management Excellence',
    description: 'Strategic account planning and growth',
    icon: Users,
    color: 'bg-black',
    progress: 60,
    completed: false,
    estimatedTime: '3.5 hours',
    lessons: [
      'Account planning frameworks',
      'Stakeholder mapping',
      'Executive relationship building',
      'Account reviews and QBRs',
      'Cross-sell and upsell strategies'
    ],
    href: '/client-services/account-management'
  },
  {
    id: 'support',
    title: 'Support Excellence',
    description: 'Delivering exceptional customer support',
    icon: Shield,
    color: 'bg-black',
    progress: 45,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Support best practices',
      'Ticket management workflows',
      'Escalation procedures',
      'Knowledge base utilization',
      'Customer feedback systems'
    ],
    href: '/client-services/support'
  },
  {
    id: 'relationships',
    title: 'Relationship Building',
    description: 'Advanced relationship management techniques',
    icon: Heart,
    color: 'bg-black',
    progress: 70,
    completed: false,
    estimatedTime: '2.5 hours',
    lessons: [
      'Trust building techniques',
      'Emotional intelligence in client relationships',
      'Communication styles',
      'Conflict resolution',
      'Long-term partnership development'
    ],
    href: '/client-services/relationships'
  },
  {
    id: 'retention',
    title: 'Retention & Expansion',
    description: 'Keeping clients and growing accounts',
    icon: TrendingUp,
    color: 'bg-black',
    progress: 35,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Churn prevention strategies',
      'Renewal forecasting',
      'Expansion opportunity identification',
      'Competitive displacement tactics',
      'Client advocacy programs'
    ],
    href: '/client-services/retention'
  },
  {
    id: 'recurring',
    title: 'Recurring Training',
    description: 'Ongoing client services skill development',
    icon: RotateCcw,
    color: 'bg-black',
    progress: 0,
    completed: false,
    estimatedTime: 'Ongoing',
    lessons: [
      'Monthly client success reviews',
      'Quarterly account strategy sessions',
      'Industry trend updates',
      'Customer feedback analysis',
      'Performance optimization workshops'
    ],
    href: '/client-services/recurring'
  }
]

export default function ClientServicesPage() {
  const totalProgress = Math.round(
    clientServicesModules.reduce((sum, module) => sum + module.progress, 0) / clientServicesModules.length
  )
  const completedModules = clientServicesModules.filter(m => m.completed).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
              <Headphones className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Client Services</h1>
              <p className="text-gray-600 text-lg">Customer success, account management, and support excellence</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-black">{totalProgress}%</div>
            <div className="text-sm text-gray-500">Complete</div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
              <CheckCircle className="h-4 w-4" />
              {completedModules}/{clientServicesModules.length} Done
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Headphones className="h-5 w-5 text-black" />
            Client Services Training Program
          </CardTitle>
          <CardDescription className="text-gray-600">Master customer success and account management</CardDescription>
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
        <h2 className="text-2xl font-semibold text-black mb-6">Training Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientServicesModules.map((module) => {
            const Icon = module.icon

            return (
              <Card key={module.id} className="hover:shadow-lg transition-shadow border-gray-200">
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

                    <div className="w-full">
                      <div className="text-center py-2 text-sm text-gray-600 border-t mt-4">
                        View Module
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle>Client Services Resources</CardTitle>
          <CardDescription>Essential tools and processes for client success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Heart className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Health Scores</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Users className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Account Plans</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Shield className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Support Playbooks</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <TrendingUp className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Retention Tools</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}