'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, UserPlus, MessageSquare, Calendar, TrendingUp, Users, Clock, Target } from 'lucide-react'

const vaModules = [
  {
    id: 'hiring-process',
    title: 'VA Hiring Strategies',
    description: 'Finding and selecting the right virtual assistants',
    progress: 0,
    completed: false,
    lessons: [
      'Platform selection (Onlinejobs.ph, Upwork, etc.)',
      'Job posting optimization',
      'Screening and interview techniques',
      'Reference checking and background verification',
      'Contract and agreement setup'
    ]
  },
  {
    id: 'onboarding-training',
    title: 'Onboarding & Training',
    description: 'Getting VAs up to speed quickly and effectively',
    progress: 0,
    completed: false,
    lessons: [
      'Welcome process and expectation setting',
      'Tool and software training',
      'Process documentation and SOPs',
      'Loom video creation for training',
      'Performance milestone setting'
    ]
  },
  {
    id: 'performance-management',
    title: 'Performance Management',
    description: 'Monitoring, coaching, and optimizing VA performance',
    progress: 0,
    completed: false,
    lessons: [
      'KPI setting and measurement',
      'Daily reporting systems',
      'Feedback and coaching techniques',
      'Performance improvement plans',
      'Motivation and retention strategies'
    ]
  },
  {
    id: 'scaling-strategies',
    title: 'Scaling VA Operations',
    description: 'Growing your VA team effectively',
    progress: 0,
    completed: false,
    lessons: [
      'Team expansion planning',
      'Process standardization',
      'Quality control systems',
      'Communication protocols for larger teams',
      'Cost optimization strategies'
    ]
  }
]

export default function VAManagementPage() {
  const totalProgress = Math.round(
    vaModules.reduce((sum, module) => sum + module.progress, 0) / vaModules.length
  )
  const completedModules = vaModules.filter(m => m.completed).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center">
              <UserPlus className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">VA Management & Onboarding</h1>
              <p className="text-gray-600 text-lg">Hire, train, and manage virtual assistants effectively</p>
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
              {completedModules}/{vaModules.length} Done
            </Badge>
          </div>
        </div>
      </div>

      {/* Why VAs Matter */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Target className="h-5 w-5" />
            Why VA Management Matters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Cost Effective</h4>
              <p className="text-blue-800 text-sm">$2-8/hour labor generating measurable ROI</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Scalable Operations</h4>
              <p className="text-blue-800 text-sm">Add capacity without geographical limitations</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">24/7 Coverage</h4>
              <p className="text-blue-800 text-sm">Global time zones enable continuous operations</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Focus on Core Work</h4>
              <p className="text-blue-800 text-sm">Free up time for strategic, high-value activities</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Training Modules */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Training Modules</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {vaModules.map((module) => (
            <Card key={module.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${module.progress === 100 ? 'bg-green-500' : 'bg-gray-500'}`}>
                    <UserPlus className="h-6 w-6 text-white" />
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
            <CheckCircle className="h-5 w-5 text-green-500" />
            VA Management Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Hiring</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Use video introductions for initial screening
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Test for communication skills and reliability
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Start with trial periods before full commitment
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Check references and previous work samples
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Management</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Set clear expectations and KPIs from day one
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Use structured daily check-ins and reporting
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Provide regular feedback and coaching
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Document processes thoroughly for consistency
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            Common VA Management Challenges & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Time Zone Differences</h4>
              <p className="text-orange-800 text-sm mb-2"><strong>Solution:</strong> Establish overlapping hours for check-ins, use async communication tools, and set clear response time expectations.</p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Quality Control</h4>
              <p className="text-red-800 text-sm mb-2"><strong>Solution:</strong> Implement regular quality checks, provide detailed feedback, create style guides, and use approval workflows for critical tasks.</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Communication Barriers</h4>
              <p className="text-blue-800 text-sm mb-2"><strong>Solution:</strong> Use video calls for complex discussions, document everything in writing, and establish preferred communication channels.</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Retention & Motivation</h4>
              <p className="text-green-800 text-sm mb-2"><strong>Solution:</strong> Provide competitive rates, opportunities for growth, recognition for good work, and clear career progression paths.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}