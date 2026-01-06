'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Code, Zap, GitBranch, Cloud, Server, Upload, Globe, Search, RotateCcw } from 'lucide-react'
import Link from 'next/link'

const webdevModules = [
  {
    id: 'onboarding',
    title: 'WebDev Onboarding',
    description: 'Welcome to the development team and workflow',
    icon: Code,
    color: 'bg-blue-500',
    progress: 100,
    completed: true,
    estimatedTime: '2 hours',
    lessons: [
      'Team structure and roles',
      'Development environment setup',
      'Code standards and best practices',
      'Project management tools',
      'Communication protocols'
    ],
    href: '/webdev/onboarding'
  },
  {
    id: 'nextjs',
    title: 'Next.js Framework',
    description: 'Building modern React applications',
    icon: Zap,
    color: 'bg-black',
    progress: 100,
    completed: true,
    estimatedTime: '8 hours',
    lessons: [
      'Next.js fundamentals',
      'App Router vs Pages Router',
      'Server Components',
      'API Routes',
      'Deployment strategies'
    ],
    href: '/webdev/nextjs'
  },
  {
    id: 'cursor',
    title: 'Cursor IDE',
    description: 'AI-powered development environment',
    icon: Code,
    color: 'bg-purple-500',
    progress: 80,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Cursor setup and configuration',
      'AI-assisted coding',
      'Code generation and refactoring',
      'Debugging with AI help',
      'Productivity workflows'
    ],
    href: '/webdev/cursor'
  },
  {
    id: 'git',
    title: 'Git & Version Control',
    description: 'Collaborative development workflows',
    icon: GitBranch,
    color: 'bg-orange-500',
    progress: 100,
    completed: true,
    estimatedTime: '4 hours',
    lessons: [
      'Git fundamentals',
      'Branching strategies',
      'Pull requests and code reviews',
      'Conflict resolution',
      'Git workflows for teams'
    ],
    href: '/webdev/git'
  },
  {
    id: 'vercel',
    title: 'Vercel Deployment',
    description: 'Cloud deployment and hosting',
    icon: Cloud,
    color: 'bg-gray-900',
    progress: 45,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Vercel account setup',
      'Deployment basics',
      'Environment variables',
      'Custom domains',
      'Performance monitoring'
    ],
    href: '/webdev/vercel'
  },
  {
    id: 'backend',
    title: 'Backend & Environment',
    description: 'Server-side development and APIs',
    icon: Server,
    color: 'bg-green-500',
    progress: 30,
    completed: false,
    estimatedTime: '6 hours',
    lessons: [
      'API design principles',
      'Database integration',
      'Authentication systems',
      'Error handling',
      'Security best practices'
    ],
    href: '/webdev/backend'
  },
  {
    id: 'deployments',
    title: 'Advanced Deployments',
    description: 'CI/CD and automated workflows',
    icon: Upload,
    color: 'bg-indigo-500',
    progress: 20,
    completed: false,
    estimatedTime: '4 hours',
    lessons: [
      'CI/CD pipelines',
      'Automated testing',
      'Environment management',
      'Rollback strategies',
      'Monitoring and alerts'
    ],
    href: '/webdev/deployments'
  },
  {
    id: 'domains-seo',
    title: 'Domains & SEO',
    description: 'Domain management and search optimization',
    icon: Globe,
    color: 'bg-cyan-500',
    progress: 15,
    completed: false,
    estimatedTime: '3 hours',
    lessons: [
      'Domain registration',
      'DNS configuration',
      'SSL certificates',
      'SEO fundamentals',
      'Performance optimization'
    ],
    href: '/webdev/domains-seo'
  },
  {
    id: 'recurring',
    title: 'Recurring Training',
    description: 'Ongoing technical skill development',
    icon: RotateCcw,
    color: 'bg-red-500',
    progress: 0,
    completed: false,
    estimatedTime: 'Ongoing',
    lessons: [
      'Weekly tech updates',
      'Monthly deep dives',
      'Code review sessions',
      'New technology exploration',
      'Performance optimization'
    ],
    href: '/webdev/recurring'
  }
]

export default function WebDevPage() {
  const totalProgress = Math.round(
    webdevModules.reduce((sum, module) => sum + module.progress, 0) / webdevModules.length
  )
  const completedModules = webdevModules.filter(m => m.completed).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Web Development</h1>
              <p className="text-gray-600 text-lg">Complete development workflow from code to deployment</p>
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
              {completedModules}/{webdevModules.length} Done
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Program Progress</CardTitle>
          <CardDescription>Your journey to full-stack development mastery</CardDescription>
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
          {webdevModules.map((module) => {
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
          <CardTitle>Developer Resources</CardTitle>
          <CardDescription>Essential tools and documentation for web development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <GitBranch className="h-6 w-6" />
              <span className="text-sm">Git Workflow</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Cloud className="h-6 w-6" />
              <span className="text-sm">Deploy Guide</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Search className="h-6 w-6" />
              <span className="text-sm">SEO Checklist</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Server className="h-6 w-6" />
              <span className="text-sm">API Docs</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}