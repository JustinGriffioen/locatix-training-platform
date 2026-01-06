'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Target, List, Mail, Calendar, RotateCcw } from 'lucide-react'
import Link from 'next/link'

const sdrModules = [
  {
    id: 'onboarding',
    title: 'SDR/BDR Onboarding',
    description: 'Essential foundation for outbound success',
    icon: Users,
    color: 'bg-blue-500',
    progress: 100,
    completed: true,
    estimatedTime: '2 hours',
    lessons: [
      'Understanding SDR/BDR roles',
      'Company overview and products',
      'Sales methodology basics',
      'Tools and systems introduction',
      'Communication guidelines'
    ],
    href: '/sdr-bdr/onboarding'
  },
  {
    id: 'hpp-abm',
    title: 'HPP & ABM Fundamentals',
    description: 'High Probability Prospects and Account-Based Marketing',
    icon: Target,
    color: 'bg-emerald-500',
    progress: 85,
    completed: false,
    estimatedTime: '4 hours',
    lessons: [
      'High Probability Prospect (HPP) identification',
      'Account-Based Marketing (ABM) principles',
      'ABM vs traditional outbound',
      'Target account selection',
      'ABM campaign planning',
      'Measuring ABM success'
    ],
    href: '/sdr-bdr/hpp-abm'
  },
  {
    id: 'prospecting',
    title: 'Advanced Prospecting',
    description: 'Strategic prospect identification and research',
    icon: Target,
    color: 'bg-green-500',
    progress: 75,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Ideal Customer Profile (ICP) development',
      'Prospect scoring methodology',
      'Intent data and buying signals',
      'Advanced research techniques',
      'Competitive intelligence gathering'
    ],
    href: '/sdr-bdr/prospecting'
  },
  {
    id: 'list-building',
    title: 'Strategic List Building',
    description: 'Create targeted prospect lists with ABM focus',
    icon: List,
    color: 'bg-purple-500',
    progress: 60,
    completed: false,
    estimatedTime: '2.5 hours',
    lessons: [
      'ABM account list creation',
      'Data sources and enrichment',
      'List building automation tools',
      'Account clustering strategies',
      'List hygiene and maintenance'
    ],
    href: '/sdr-bdr/list-building'
  },
  {
    id: 'outreach',
    title: 'Multi-Channel Outreach',
    description: 'Craft compelling, personalized outreach campaigns',
    icon: Mail,
    color: 'bg-orange-500',
    progress: 40,
    completed: false,
    estimatedTime: '4 hours',
    lessons: [
      'ABM email sequence frameworks',
      'Personalization at scale',
      'Call scripting for ABM targets',
      'LinkedIn and social selling',
      'Multi-touch campaign orchestration'
    ],
    href: '/sdr-bdr/outreach'
  },
  {
    id: 'appointment-setting',
    title: 'Appointment Setting Mastery',
    description: 'Convert prospects into qualified meetings',
    icon: Calendar,
    color: 'bg-red-500',
    progress: 20,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Discovery call frameworks',
      'ABM-specific objection handling',
      'Advanced qualification questions',
      'Demo scheduling best practices',
      'Seamless handover to sales team'
    ],
    href: '/sdr-bdr/appointment-setting'
  },
  {
    id: 'closing-fundamentals',
    title: 'Closing Fundamentals',
    description: 'Optional: Learn closing techniques and deal management',
    icon: CheckCircle,
    color: 'bg-rose-500',
    progress: 0,
    completed: false,
    estimatedTime: '5 hours',
    locked: true,
    lessons: [
      'Understanding the sales process',
      'Closing psychology and techniques',
      'Deal qualification and management',
      'Negotiation fundamentals',
      'Post-sale relationship building'
    ],
    href: '/sdr-bdr/closing-fundamentals'
  },
  {
    id: 'recurring',
    title: 'Recurring Training',
    description: 'Ongoing skill development and ABM refreshers',
    icon: RotateCcw,
    color: 'bg-indigo-500',
    progress: 0,
    completed: false,
    estimatedTime: 'Ongoing',
    lessons: [
      'Weekly ABM campaign reviews',
      'Monthly prospecting challenges',
      'Quarterly role-playing sessions',
      'Industry trend updates',
      'Performance optimization workshops'
    ],
    href: '/sdr-bdr/recurring'
  }
]

export default function SDRBDRPage() {
  const totalProgress = Math.round(
    sdrModules.reduce((sum, module) => sum + module.progress, 0) / sdrModules.length
  )
  const completedModules = sdrModules.filter(m => m.completed).length

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
              <h1 className="text-4xl font-bold text-black tracking-tight">SDR/BDR Training</h1>
              <p className="text-gray-600 text-lg">Master outbound prospecting and appointment setting</p>
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
              {completedModules}/{sdrModules.length} Done
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Program Progress</CardTitle>
          <CardDescription>Your journey to outbound mastery</CardDescription>
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
          {sdrModules.map((module) => {
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
          <CardDescription>Essential tools and resources for SDR/BDR success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <List className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">View SOPs</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Calendar className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Schedule Training</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Mail className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Message Templates</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Target className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Performance Dashboard</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}