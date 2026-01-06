'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Clock, Target, TrendingUp, CheckCircle, MessageSquare } from 'lucide-react'

const vaRoles = [
  {
    title: 'Lead Generation VA',
    description: 'Outbound prospecting and lead qualification',
    responsibilities: [
      'LinkedIn and email outreach campaigns',
      'Lead research and prospect profiling',
      'CRM data entry and management',
      'Follow-up sequences and nurturing',
      'Meeting scheduling and coordination'
    ],
    dailyTargets: '50-100 personalized outreach messages',
    tools: ['LinkedIn Sales Navigator', 'HubSpot CRM', 'Lemlist', 'Zoom']
  },
  {
    title: 'Content Creation VA',
    description: 'Social media management and content production',
    responsibilities: [
      'Social media posting and engagement',
      'Content calendar management',
      'Graphic design and video editing',
      'Community management and responses',
      'Analytics reporting and insights'
    ],
    dailyTargets: '5-10 social media posts, 20+ engagement actions',
    tools: ['Canva', 'WePost', 'Buffer', 'Hootsuite']
  },
  {
    title: 'Administrative VA',
    description: 'Operations support and administrative tasks',
    responsibilities: [
      'Email management and inbox organization',
      'Calendar scheduling and meeting coordination',
      'Document creation and formatting',
      'Data entry and research tasks',
      'Client onboarding support'
    ],
    dailyTargets: '20-30 administrative tasks completed',
    tools: ['Google Workspace', 'Microsoft Office', 'Trello', 'Asana']
  }
]

const hiringProcess = [
  {
    step: 'Platform Selection',
    description: 'Use Onlinejobs.ph for Filipino VAs with proven track record',
    duration: '1-2 days'
  },
  {
    step: 'Job Posting',
    description: 'Create detailed job description with specific requirements and expectations',
    duration: '1 day'
  },
  {
    step: 'Initial Screening',
    description: 'Review applications and request video introductions from top candidates',
    duration: '2-3 days'
  },
  {
    step: 'Technical Assessment',
    description: 'Test candidates on required tools and basic skills evaluation',
    duration: '1-2 days'
  },
  {
    step: 'Interviews',
    description: 'Conduct 1-on-1 interviews focusing on communication and work ethic',
    duration: '2-3 days'
  },
  {
    step: 'Reference Checks',
    description: 'Contact previous employers and verify work history',
    duration: '1 day'
  },
  {
    step: 'Offer & Onboarding',
    description: 'Extend offer and begin comprehensive onboarding process',
    duration: '3-5 days'
  }
]

const onboardingSteps = [
  {
    phase: 'Pre-Start Preparation',
    duration: '1 week before start',
    activities: [
      'Send welcome package with company overview',
      'Share employee handbook and policies',
      'Set up all required accounts and tools',
      'Schedule orientation and training sessions'
    ]
  },
  {
    phase: 'First Week',
    duration: 'Days 1-3',
    activities: [
      'Company culture and values introduction',
      'Tool and software training sessions',
      'Process documentation walkthrough',
      'Shadowing experienced team members'
    ]
  },
  {
    phase: 'Skill Development',
    duration: 'Weeks 2-4',
    activities: [
      'Role-specific training modules',
      'Hands-on practice with real tasks',
      'Performance feedback and coaching',
      'Gradual increase in responsibilities'
    ]
  },
  {
    phase: 'Full Integration',
    duration: 'Ongoing',
    activities: [
      'Independent task execution',
      'Quality assurance and review process',
      'Performance tracking and optimization',
      'Career development planning'
    ]
  }
]

const performanceMetrics = [
  {
    category: 'Productivity',
    metrics: [
      'Tasks completed per day/week',
      'Response time to requests',
      'Project completion rate',
      'Quality score on deliverables'
    ]
  },
  {
    category: 'Quality',
    metrics: [
      'Error rate and accuracy',
      'Client satisfaction scores',
      'Adherence to SOPs',
      'Communication effectiveness'
    ]
  },
  {
    category: 'Efficiency',
    metrics: [
      'Time to complete standard tasks',
      'Resource utilization',
      'Process improvement suggestions',
      'Learning and adaptation speed'
    ]
  }
]

export default function VAOpsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
          <Users className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-black tracking-tight">VA Operations</h1>
          <p className="text-gray-600 text-lg">Virtual assistant hiring, onboarding, and management</p>
        </div>
      </div>

      {/* VA Roles Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-black" />
            VA Role Categories
          </CardTitle>
          <CardDescription>Common VA roles and responsibilities in BD agency operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vaRoles.map((role, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Key Responsibilities:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {role.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Daily Target:</p>
                      <p className="text-sm text-gray-600">{role.dailyTargets}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Key Tools:</p>
                      <div className="flex flex-wrap gap-1">
                        {role.tools.map((tool, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hiring Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-black" />
            VA Hiring Process
          </CardTitle>
          <CardDescription>Structured approach to finding and hiring qualified virtual assistants</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hiringProcess.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-black">{step.step}</h4>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Onboarding Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-black" />
            VA Onboarding Framework
          </CardTitle>
          <CardDescription>Comprehensive 30-90 day onboarding process for new VAs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {onboardingSteps.map((phase, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-black" />
            Performance Management
          </CardTitle>
          <CardDescription>Key metrics and KPIs for VA performance tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {performanceMetrics.map((category, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-black" />
            VA Management Best Practices
          </CardTitle>
          <CardDescription>Key principles for successful VA partnerships</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-black mb-3">Communication</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Clear expectations and regular feedback</li>
                <li>• Structured daily check-ins and reporting</li>
                <li>• Cultural sensitivity and time zone awareness</li>
                <li>• Written documentation for all processes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3">Operations</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Gradual task complexity increase</li>
                <li>• Quality assurance checkpoints</li>
                <li>• Backup plans for absences</li>
                <li>• Regular performance reviews</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}