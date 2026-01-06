'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Code, PenTool, BookOpen, CheckCircle, Clock, TrendingUp, FileText, Target } from 'lucide-react'
import Link from 'next/link'

const trainingModules = [
  {
    id: 'sdr-bdr',
    title: 'SDR/BDR Training',
    description: 'Master outbound prospecting, ABM, and appointment setting',
    icon: Users,
    color: 'bg-blue-500',
    modules: [
      { name: 'Onboarding', completed: true, progress: 100 },
      { name: 'HPP & ABM', completed: false, progress: 85 },
      { name: 'Prospecting', completed: false, progress: 75 },
      { name: 'List Building', completed: false, progress: 60 },
      { name: 'Outreach', completed: false, progress: 40 },
      { name: 'Appointment Setting', completed: false, progress: 20 },
      { name: 'Closing Fundamentals', completed: false, progress: 0, locked: true },
    ],
    href: '/sdr-bdr'
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Complete development workflow from code to deployment',
    icon: Code,
    color: 'bg-green-500',
    modules: [
      { name: 'Onboarding', completed: true, progress: 100 },
      { name: 'Next.js', completed: true, progress: 100 },
      { name: 'Cursor', completed: false, progress: 80 },
      { name: 'Git', completed: true, progress: 100 },
      { name: 'Vercel', completed: false, progress: 45 },
    ],
    href: '/webdev'
  },
  {
    id: 'content',
    title: 'Content Marketing',
    description: 'Strategic content creation across funnels and channels',
    icon: PenTool,
    color: 'bg-purple-500',
    modules: [
      { name: 'Onboarding', completed: true, progress: 100 },
      { name: 'Funnel Thinking', completed: false, progress: 70 },
      { name: 'Copywriting', completed: false, progress: 50 },
      { name: 'Sales Assets', completed: false, progress: 35 },
      { name: 'Video Creation', completed: false, progress: 65 },
      { name: 'CMS Integration', completed: false, progress: 25 },
      { name: 'Distribution', completed: false, progress: 30 },
    ],
    href: '/content'
  }
]

const upcomingSessions = [
  { title: 'Weekly SDR Outreach Review', time: 'Today, 2:00 PM', type: 'recurring' },
  { title: 'Git Best Practices Workshop', time: 'Tomorrow, 10:00 AM', type: 'training' },
  { title: 'Content Calendar Planning', time: 'Friday, 3:00 PM', type: 'planning' },
]

export default function Dashboard() {
  const totalProgress = Math.round(
    trainingModules.reduce((acc, module) => {
      const moduleProgress = module.modules.reduce((sum, m) => sum + m.progress, 0) / module.modules.length
      return acc + moduleProgress
    }, 0) / trainingModules.length
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-black tracking-tight">Welcome to Locatix Academy</h1>
          <p className="text-gray-600 mt-2 text-lg">Your internal training platform for continuous growth</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-2xl font-bold text-black">{totalProgress}%</div>
            <div className="text-sm text-gray-500">Complete</div>
          </div>
          <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="h-5 w-5 text-black" />
            Training Progress
          </CardTitle>
          <CardDescription className="text-gray-600">Your journey to mastery across all training tracks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Overall Completion</span>
              <span className="text-2xl font-bold text-black">{totalProgress}%</span>
            </div>
            <Progress value={totalProgress} className="h-3 bg-gray-100" />
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-lg font-bold text-black">2</div>
                <div className="text-xs text-gray-500">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-black">7</div>
                <div className="text-xs text-gray-500">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-black">4</div>
                <div className="text-xs text-gray-500">Remaining</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Training Modules */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 w-12 bg-black rounded-full"></div>
          <h2 className="text-3xl font-bold text-black">Training Modules</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainingModules.map((module) => {
            const Icon = module.icon
            const completedCount = module.modules.filter(m => m.completed).length
            const moduleProgress = Math.round(
              module.modules.reduce((sum, m) => sum + m.progress, 0) / module.modules.length
            )

            return (
              <Card key={module.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${module.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant={moduleProgress === 100 ? "default" : "secondary"}>
                      {moduleProgress}% Complete
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{completedCount} of {module.modules.length} completed</span>
                    </div>
                    <Progress value={moduleProgress} className="h-2" />
                    <div className="flex flex-wrap gap-1">
                      {module.modules.slice(0, 3).map((subModule, index) => (
                        <Badge
                          key={index}
                          variant={subModule.completed ? "default" : "outline"}
                          className="text-xs"
                        >
                          {subModule.completed && <CheckCircle className="h-3 w-3 mr-1" />}
                          {subModule.name}
                        </Badge>
                      ))}
                      {module.modules.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{module.modules.length - 3} more
                        </Badge>
                      )}
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

      {/* Upcoming Sessions */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Clock className="h-5 w-5 text-black" />
            Upcoming Sessions
          </CardTitle>
          <CardDescription className="text-gray-600">Don't miss your scheduled training sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-black mb-1">{session.title}</p>
                  <p className="text-sm text-gray-600">{session.time}</p>
                </div>
                <Badge
                  variant={session.type === 'recurring' ? 'default' : session.type === 'training' ? 'secondary' : 'outline'}
                  className="ml-4"
                >
                  {session.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
