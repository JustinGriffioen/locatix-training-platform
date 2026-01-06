'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Code, PenTool, BookOpen, CheckCircle, Clock, TrendingUp, FileText, Target } from 'lucide-react'
import Link from 'next/link'

const departmentOverview = [
  {
    id: 'sdr-bdr',
    title: 'SDR/BDR Team',
    description: 'Outbound sales prospecting and revenue generation',
    icon: Users,
    color: 'bg-black',
    trainings: [
      { name: 'ABM & HPP Fundamentals', completed: 85, total: 100 },
      { name: 'Prospecting Mastery', completed: 75, total: 100 },
      { name: 'List Building Strategies', completed: 60, total: 100 },
      { name: 'Multi-Channel Outreach', completed: 40, total: 100 },
      { name: 'Appointment Setting', completed: 20, total: 100 },
      { name: 'Closing Fundamentals', completed: 0, total: 100, locked: true },
    ],
    sops: [
      'Daily Prospecting Routine',
      'List Building & Maintenance',
      'Weekly Performance Review',
      'CRM Data Management'
    ],
    href: '/sdr-bdr'
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Full-stack development and deployment workflows',
    icon: Code,
    color: 'bg-black',
    trainings: [
      { name: 'Next.js Framework', completed: 100, total: 100 },
      { name: 'Git & Version Control', completed: 100, total: 100 },
      { name: 'Cursor IDE Mastery', completed: 80, total: 100 },
      { name: 'Vercel Deployment', completed: 45, total: 100 },
      { name: 'Backend & APIs', completed: 0, total: 100 },
      { name: 'Domains & SEO', completed: 0, total: 100 },
    ],
    sops: [
      'Code Review Process',
      'Deployment Checklist',
      'Git Workflow Standards',
      'Security Best Practices'
    ],
    href: '/webdev'
  },
  {
    id: 'content',
    title: 'Content Marketing',
    description: 'Strategic content creation and sales enablement',
    icon: PenTool,
    color: 'bg-black',
    trainings: [
      { name: 'Funnel Thinking & Strategy', completed: 70, total: 100 },
      { name: 'Advanced Copywriting', completed: 50, total: 100 },
      { name: 'Sales Asset Creation', completed: 35, total: 100 },
      { name: 'Video Content Production', completed: 65, total: 100 },
      { name: 'CMS & Web Integration', completed: 25, total: 100 },
      { name: 'Multi-Channel Distribution', completed: 30, total: 100 },
    ],
    sops: [
      'Content Calendar Management',
      'Brand Voice Guidelines',
      'Performance Tracking',
      'Cross-Team Collaboration'
    ],
    href: '/content'
  }
]


export default function Dashboard() {
  const totalProgress = Math.round(
    departmentOverview.reduce((acc, dept) => {
      const deptProgress = dept.trainings.reduce((sum, t) => sum + (t.completed / t.total), 0) / dept.trainings.length
      return acc + deptProgress
    }, 0) / departmentOverview.length * 100
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
                <div className="text-lg font-bold text-black">3</div>
                <div className="text-xs text-gray-500">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-black">18</div>
                <div className="text-xs text-gray-500">Training Modules</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-black">12</div>
                <div className="text-xs text-gray-500">Active SOPs</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Department Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departmentOverview.map((dept) => {
          const Icon = dept.icon
          const completedTrainings = dept.trainings.filter(t => !t.locked && t.completed === t.total).length
          const totalTrainings = dept.trainings.filter(t => !t.locked).length
          const deptProgress = Math.round(
            dept.trainings.reduce((sum, t) => sum + (t.completed / t.total), 0) / dept.trainings.length * 100
          )

          return (
            <Card key={dept.id} className="border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${dept.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {deptProgress}% Complete
                  </Badge>
                </div>
                <CardTitle className="text-lg">{dept.title}</CardTitle>
                <CardDescription className="text-gray-600">{dept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Training Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-700">Training Progress</span>
                      <span className="text-gray-600">{completedTrainings}/{totalTrainings} completed</span>
                    </div>
                    <Progress value={deptProgress} className="h-2" />
                  </div>

                  {/* Key Trainings */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Trainings:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {dept.trainings.slice(0, 3).map((training, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${training.completed === training.total ? 'bg-green-500' : 'bg-gray-300'}`} />
                          {training.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SOPs */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Active SOPs:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {dept.sops.slice(0, 2).map((sop, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-black" />
                          {sop}
                        </li>
                      ))}
                      {dept.sops.length > 2 && (
                        <li className="text-gray-500">+{dept.sops.length - 2} more SOPs</li>
                      )}
                    </ul>
                  </div>

                  <Link href={dept.href}>
                    <Button className="w-full bg-black hover:bg-gray-800" variant="default">
                      View Department
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
