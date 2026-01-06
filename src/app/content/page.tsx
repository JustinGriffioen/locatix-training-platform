'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, PenTool, Video, Type, Share, RotateCcw, FileText, Code } from 'lucide-react'
import Link from 'next/link'

const contentModules = [
  {
    id: 'onboarding',
    title: 'Content Marketing Onboarding',
    description: 'Welcome to the content creation team',
    icon: PenTool,
    color: 'bg-blue-500',
    progress: 100,
    completed: true,
    estimatedTime: '2 hours',
    lessons: [
      'Team structure and roles',
      'Content strategy overview',
      'Brand voice and guidelines',
      'Content management tools',
      'Performance measurement'
    ],
    href: '/content/onboarding'
  },
  {
    id: 'funnel-thinking',
    title: 'Funnel Thinking & Strategy',
    description: 'Understanding ABM, content, and awareness funnels',
    icon: Share,
    color: 'bg-indigo-500',
    progress: 70,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'ABM funnel vs content funnel vs awareness funnel',
      'Customer journey mapping',
      'Content strategy for each funnel stage',
      'Multi-touch attribution',
      'Funnel optimization techniques'
    ],
    href: '/content/funnel-thinking'
  },
  {
    id: 'copywriting',
    title: 'Advanced Copywriting',
    description: 'Craft compelling copy for every channel and funnel stage',
    icon: Type,
    color: 'bg-green-500',
    progress: 50,
    completed: false,
    estimatedTime: '6 hours',
    lessons: [
      'Copywriting fundamentals',
      'ABM-focused copywriting',
      'Headline and hook writing',
      'SEO copywriting techniques',
      'Email marketing copy',
      'Social media copy',
      'Landing page copy',
      'Sales enablement copy'
    ],
    href: '/content/copywriting'
  },
  {
    id: 'sales-assets',
    title: 'Sales Asset Creation',
    description: 'Create sales-enabling content and materials',
    icon: FileText,
    color: 'bg-amber-500',
    progress: 35,
    completed: false,
    estimatedTime: '5 hours',
    lessons: [
      'Understanding sales needs',
      'One-pagers and data sheets',
      'Case studies and testimonials',
      'ROI calculators',
      'Presentation decks',
      'Video sales assets',
      'Sales playbooks',
      'Objection handling guides'
    ],
    href: '/content/sales-assets'
  },
  {
    id: 'video',
    title: 'Video Content Creation',
    description: 'Creating engaging video content for all platforms and funnels',
    icon: Video,
    color: 'bg-red-500',
    progress: 65,
    completed: false,
    estimatedTime: '6 hours',
    lessons: [
      'Video production basics',
      'Script writing for different funnels',
      'Camera and lighting setup',
      'Editing fundamentals',
      'Platform optimization',
      'Video SEO and thumbnails',
      'Series and campaign planning'
    ],
    href: '/content/video'
  },
  {
    id: 'cms-integration',
    title: 'CMS & Web Dev Integration',
    description: 'Communicate effectively with web development team',
    icon: Code,
    color: 'bg-cyan-500',
    progress: 25,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Understanding CMS capabilities',
      'Content management workflows',
      'Technical requirements communication',
      'SEO and performance considerations',
      'Landing page optimization',
      'A/B testing coordination',
      'Content deployment processes'
    ],
    href: '/content/cms-integration'
  },
  {
    id: 'posting',
    title: 'Multi-Channel Distribution',
    description: 'Strategic posting and distribution across all platforms',
    icon: Share,
    color: 'bg-purple-500',
    progress: 30,
    completed: false,
    estimatedTime: '4 hours',
    lessons: [
      'Platform-specific strategies',
      'Content calendar planning',
      'Cross-platform distribution',
      'Engagement optimization',
      'Hashtag and keyword research',
      'Analytics and reporting',
      'Crisis communication'
    ],
    href: '/content/posting'
  },
  {
    id: 'recurring',
    title: 'Recurring Content Training',
    description: 'Ongoing content creation and funnel optimization',
    icon: RotateCcw,
    color: 'bg-orange-500',
    progress: 0,
    completed: false,
    estimatedTime: 'Ongoing',
    lessons: [
      'Weekly content reviews',
      'Monthly funnel analysis',
      'Platform algorithm updates',
      'New format experimentation',
      'Sales team feedback integration',
      'Performance optimization'
    ],
    href: '/content/recurring'
  }
]

export default function ContentPage() {
  const totalProgress = Math.round(
    contentModules.reduce((sum, module) => sum + module.progress, 0) / contentModules.length
  )
  const completedModules = contentModules.filter(m => m.completed).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
              <PenTool className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Content Marketing</h1>
              <p className="text-gray-600 text-lg">Create compelling content across video, copy, and social media</p>
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
              {completedModules}/{contentModules.length} Done
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Program Progress</CardTitle>
          <CardDescription>Your journey to content creation mastery</CardDescription>
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
          {contentModules.map((module) => {
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
          <CardTitle>Content Creator Resources</CardTitle>
          <CardDescription>Essential tools and inspiration for content creation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Video className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Video Templates</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Type className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Copywriting Guide</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Share className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Posting Calendar</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <PenTool className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Brand Assets</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}