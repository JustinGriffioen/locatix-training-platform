'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Target, TrendingUp, Users, Settings, Download } from 'lucide-react'

const clientTemplates = [
  {
    category: 'GTM Strategy',
    icon: TrendingUp,
    templates: [
      {
        name: 'Go-To-Market Strategy Template',
        description: 'Comprehensive GTM plan framework customized per client',
        includes: ['Market analysis', 'Target segmentation', 'Channel strategy', 'Timeline & milestones'],
        status: 'available'
      },
      {
        name: 'Competitive Positioning Framework',
        description: 'Positioning strategy against key competitors',
        includes: ['Competitor analysis', 'Value proposition', 'Messaging framework', 'Differentiation tactics'],
        status: 'available'
      },
      {
        name: 'Channel Mix Optimization',
        description: 'Optimal channel allocation based on client goals',
        includes: ['Channel performance analysis', 'Budget allocation', 'Integration strategy', 'Measurement plan'],
        status: 'available'
      }
    ]
  },
  {
    category: 'ICP & Prospecting',
    icon: Target,
    templates: [
      {
        name: 'ICP Development Workbook',
        description: 'Structured process for defining ideal customer profiles',
        includes: ['Market research framework', 'Buyer persona templates', 'Qualification criteria', 'Scoring matrix'],
        status: 'available'
      },
      {
        name: 'Prospecting Playbook',
        description: 'Multi-channel prospecting strategy templates',
        includes: ['Outreach sequences', 'Channel prioritization', 'Messaging frameworks', 'Follow-up protocols'],
        status: 'available'
      },
      {
        name: 'Lead Nurturing Campaigns',
        description: 'Automated nurturing sequences for different buyer stages',
        includes: ['Content mapping', 'Email sequences', 'Scoring automation', 'Hand-off procedures'],
        status: 'available'
      }
    ]
  },
  {
    category: 'Account Management',
    icon: Users,
    templates: [
      {
        name: 'Account Planning Template',
        description: 'Strategic account planning and growth framework',
        includes: ['Account assessment', 'Growth opportunities', 'Relationship mapping', 'Success metrics'],
        status: 'available'
      },
      {
        name: 'Quarterly Business Review',
        description: 'QBR presentation and discussion framework',
        includes: ['Performance analysis', 'Goal setting', 'Action items', 'ROI measurement'],
        status: 'available'
      },
      {
        name: 'Client Success Metrics Dashboard',
        description: 'Key metrics and KPIs tracking framework',
        includes: ['Metric definitions', 'Dashboard layouts', 'Reporting cadence', 'Alert thresholds'],
        status: 'available'
      }
    ]
  },
  {
    category: 'Operations',
    icon: Settings,
    templates: [
      {
        name: 'Project Management Framework',
        description: 'End-to-end project delivery and management',
        includes: ['Project phases', 'Milestone tracking', 'Resource allocation', 'Risk management'],
        status: 'available'
      },
      {
        name: 'Client Communication Protocol',
        description: 'Structured communication framework with clients',
        includes: ['Meeting cadences', 'Reporting schedules', 'Escalation procedures', 'Feedback loops'],
        status: 'available'
      },
      {
        name: 'Change Management Process',
        description: 'Managing scope changes and client expectations',
        includes: ['Change request process', 'Impact assessment', 'Approval workflows', 'Documentation'],
        status: 'available'
      }
    ]
  }
]

export default function ClientTemplatesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-black tracking-tight">Client Templates & SOPs</h1>
          <p className="text-gray-600 text-lg">Standardized frameworks and processes for client engagements</p>
        </div>
      </div>

      {/* Template Categories */}
      <div className="space-y-8">
        {clientTemplates.map((category, categoryIndex) => {
          const Icon = category.icon
          return (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-black flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  {category.category}
                </CardTitle>
                <CardDescription>
                  Standardized templates and processes for {category.category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.templates.map((template, templateIndex) => (
                    <Card key={templateIndex} className="border-gray-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base">{template.name}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {template.status}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm">
                          {template.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-medium text-gray-700 mb-2">Includes:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {template.includes.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button className="w-full bg-black hover:bg-gray-800" size="sm">
                            <Download className="h-3 w-3 mr-2" />
                            Use Template
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Template Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use Client Templates</CardTitle>
          <CardDescription>Best practices for implementing templates in client engagements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-black mb-3">Implementation Process</h4>
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center mt-0.5">1</div>
                  <span>Assess client needs and customize template accordingly</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center mt-0.5">2</div>
                  <span>Collaborate with client to validate assumptions and requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center mt-0.5">3</div>
                  <span>Implement template with client-specific data and branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center mt-0.5">4</div>
                  <span>Present to client and iterate based on feedback</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3">Customization Guidelines</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
                  <span>Always include client-specific data, goals, and branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
                  <span>Adapt industry terminology and examples to client context</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
                  <span>Validate assumptions with client stakeholders</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
                  <span>Document customizations for future reference</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}