'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Play, FileText, Users, Target, Award, Clock } from 'lucide-react'

const onboardingLessons = [
  {
    id: 1,
    title: 'Welcome to Locatix SDR/BDR Team',
    type: 'video',
    duration: '15 min',
    completed: true,
    description: 'Introduction to the team, culture, and your role'
  },
  {
    id: 2,
    title: 'Understanding SDR/BDR Roles',
    type: 'reading',
    duration: '20 min',
    completed: true,
    description: 'Key responsibilities, expectations, and success metrics'
  },
  {
    id: 3,
    title: 'Locatix Products & Solutions',
    type: 'video',
    duration: '25 min',
    completed: true,
    description: 'Deep dive into our product offerings and value propositions'
  },
  {
    id: 4,
    title: 'Sales Methodology Overview',
    type: 'interactive',
    duration: '30 min',
    completed: true,
    description: 'Our proven sales process and qualification framework'
  },
  {
    id: 5,
    title: 'Tools & Systems Training',
    type: 'video',
    duration: '35 min',
    completed: true,
    description: 'CRM, outreach tools, and internal systems walkthrough'
  },
  {
    id: 6,
    title: 'Communication Guidelines',
    type: 'reading',
    duration: '15 min',
    completed: true,
    description: 'Internal communication standards and best practices'
  }
]

const keyTakeaways = [
  'Clear understanding of SDR/BDR role and responsibilities',
  'Familiarity with Locatix products and value propositions',
  'Knowledge of sales methodology and qualification process',
  'Proficiency with required tools and systems',
  'Understanding of internal communication standards'
]

export default function SDROnboardingPage() {
  const completedLessons = onboardingLessons.filter(lesson => lesson.completed).length
  const totalProgress = (completedLessons / onboardingLessons.length) * 100

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">SDR/BDR Onboarding</h1>
          <p className="text-gray-600 mt-1">Essential foundation for outbound success</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="default" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Completed
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            2 hours total
          </Badge>
        </div>
      </div>

      {/* Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Module Progress</CardTitle>
          <CardDescription>{completedLessons} of {onboardingLessons.length} lessons completed</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={totalProgress} className="h-3" />
        </CardContent>
      </Card>

      {/* Lessons */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Course Content</h2>
        <div className="space-y-4">
          {onboardingLessons.map((lesson) => (
            <Card key={lesson.id} className={lesson.completed ? 'border-green-200 bg-green-50' : ''}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${lesson.completed ? 'bg-green-500' : 'bg-gray-500'}`}>
                      {lesson.type === 'video' && <Play className="h-5 w-5 text-white" />}
                      {lesson.type === 'reading' && <FileText className="h-5 w-5 text-white" />}
                      {lesson.type === 'interactive' && <Users className="h-5 w-5 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                      <p className="text-sm text-gray-600">{lesson.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {lesson.type}
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {lesson.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {lesson.completed && (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    )}
                    <Badge variant={lesson.completed ? "default" : "outline"} className="text-xs">
                      {lesson.completed ? 'Completed' : 'Available'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Key Takeaways
          </CardTitle>
          <CardDescription>What you'll learn in this module</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{takeaway}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Next Steps
          </CardTitle>
          <CardDescription>Continue your SDR/BDR training journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="w-full h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Target className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Next: High Probability Prospecting</span>
              <span className="text-xs text-gray-500">Learn to identify ideal prospects</span>
            </div>
            <div className="w-full h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Award className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Download Certificate</span>
              <span className="text-xs text-gray-500">Get your completion certificate</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}