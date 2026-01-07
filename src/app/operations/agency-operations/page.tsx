'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Settings, FileText, Zap, TrendingUp, CheckCircle, Users, Target, AlertTriangle } from 'lucide-react'

const operationsModules = [
  {
    id: 'process-documentation',
    title: 'Process Documentation',
    description: 'Creating and maintaining operational procedures',
    progress: 0,
    completed: false,
    lessons: [
      'SOP creation and formatting',
      'Process mapping techniques',
      'Documentation maintenance',
      'Knowledge base management',
      'Training material development'
    ]
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamlining operations with technology',
    progress: 0,
    completed: false,
    lessons: [
      'Identifying automation opportunities',
      'Tool selection and integration',
      'Zapier and n8n workflows',
      'Quality control in automated processes',
      'Monitoring and optimization'
    ]
  },
  {
    id: 'quality-control',
    title: 'Quality Control & Standards',
    description: 'Maintaining consistent high-quality output',
    progress: 0,
    completed: false,
    lessons: [
      'Quality checkpoints and reviews',
      'Standard operating procedures',
      'Performance benchmarking',
      'Continuous improvement processes',
      'Client feedback integration'
    ]
  },
  {
    id: 'client-onboarding',
    title: 'Client Onboarding Processes',
    description: 'Smooth client integration and setup',
    progress: 0,
    completed: false,
    lessons: [
      'Welcome and orientation processes',
      'Account setup and configuration',
      'Stakeholder introductions',
      'Goal setting and expectations',
      'Success metrics establishment'
    ]
  },
  {
    id: 'scalability-planning',
    title: 'Operational Scalability',
    description: 'Planning for sustainable growth',
    progress: 0,
    completed: false,
    lessons: [
      'Capacity planning and forecasting',
      'Resource allocation strategies',
      'Technology stack evaluation',
      'Process optimization for scale',
      'Team expansion planning'
    ]
  }
]

export default function AgencyOperationsPage() {
  const totalProgress = Math.round(
    operationsModules.reduce((sum, module) => sum + module.progress, 0) / operationsModules.length
  )
  const completedModules = operationsModules.filter(m => m.completed).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-purple-500 flex items-center justify-center">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Agency Operations</h1>
              <p className="text-gray-600 text-lg">Streamline agency processes and workflows</p>
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
              {completedModules}/{operationsModules.length} Done
            </Badge>
          </div>
        </div>
      </div>

      {/* Operations Framework */}
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-900">
            <Target className="h-5 w-5" />
            Agency Operations Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Document</h4>
              <p className="text-purple-800 text-sm">Create clear, comprehensive SOPs for all processes</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Automate</h4>
              <p className="text-purple-800 text-sm">Identify and implement workflow automation opportunities</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Standardize</h4>
              <p className="text-purple-800 text-sm">Establish quality standards and control processes</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Scale</h4>
              <p className="text-purple-800 text-sm">Plan for sustainable growth and expansion</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Training Modules */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Training Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {operationsModules.map((module) => (
            <Card key={module.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${module.progress === 100 ? 'bg-green-500' : 'bg-gray-500'}`}>
                    <Settings className="h-6 w-6 text-white" />
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

      {/* Process Optimization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Process Optimization Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">1</div>
                <div className="text-sm font-medium text-yellow-900">Map Current State</div>
                <div className="text-xs text-yellow-800 mt-1">Document existing processes</div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">2</div>
                <div className="text-sm font-medium text-yellow-900">Identify Bottlenecks</div>
                <div className="text-xs text-yellow-800 mt-1">Find inefficiencies and pain points</div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">3</div>
                <div className="text-sm font-medium text-yellow-900">Design Solutions</div>
                <div className="text-xs text-yellow-800 mt-1">Create improved workflows</div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm font-medium text-blue-900">Test & Implement</div>
                <div className="text-xs text-blue-800 mt-1">Pilot new processes</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-sm font-medium text-blue-900">Measure Results</div>
                <div className="text-xs text-blue-800 mt-1">Track performance metrics</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-sm font-medium text-blue-900">Iterate & Improve</div>
                <div className="text-xs text-blue-800 mt-1">Continuous optimization</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automation Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-500" />
            Common Automation Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Client-Facing Processes</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Automated welcome emails and onboarding sequences
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Contract generation and e-signature workflows
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Invoice creation and payment reminders
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Project status updates and reporting
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Internal Operations</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Task assignment and deadline tracking
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Data entry and CRM updates
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Social media posting and engagement
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Performance reporting and analytics
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quality Control Standards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            Quality Control Standards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Content Quality</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Grammar and spelling checks</li>
                <li>• Brand voice consistency</li>
                <li>• Fact-checking protocols</li>
                <li>• SEO optimization review</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Client Deliverables</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Deadline adherence (100%)</li>
                <li>• Requirement compliance</li>
                <li>• Quality assurance reviews</li>
                <li>• Client approval processes</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Process Standards</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• SOP compliance monitoring</li>
                <li>• Documentation completeness</li>
                <li>• Team communication protocols</li>
                <li>• Performance metric tracking</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scaling Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            Scaling Challenges & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Maintaining Quality During Growth</h4>
              <p className="text-orange-800 text-sm mb-2"><strong>Solution:</strong> Implement scalable quality control processes, standardize training programs, and use technology to maintain consistency.</p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Communication Breakdown</h4>
              <p className="text-red-800 text-sm mb-2"><strong>Solution:</strong> Establish clear communication protocols, use centralized documentation, and implement regular team check-ins.</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Resource Allocation</h4>
              <p className="text-blue-800 text-sm mb-2"><strong>Solution:</strong> Use data-driven capacity planning, implement project management tools, and regularly review resource utilization.</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Knowledge Transfer</h4>
              <p className="text-green-800 text-sm mb-2"><strong>Solution:</strong> Create comprehensive documentation, implement mentorship programs, and use video training for consistent knowledge transfer.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}