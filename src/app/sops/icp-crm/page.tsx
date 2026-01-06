'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Target, Database, Users, Search, FileText } from 'lucide-react'

const icpSteps = [
  {
    title: 'Market Research & Analysis',
    description: 'Research industry trends, competitor analysis, and market sizing',
    icon: Search,
    items: [
      'Industry reports and market data analysis',
      'Competitor landscape mapping',
      'Technology adoption trends',
      'Geospatial industry focus areas'
    ]
  },
  {
    title: 'Company Profiling',
    description: 'Define company characteristics and qualification criteria',
    icon: Target,
    items: [
      'Company size (revenue, employees)',
      'Geographic location and market focus',
      'Technology stack and infrastructure',
      'Growth stage and funding status'
    ]
  },
  {
    title: 'Buyer Persona Development',
    description: 'Create detailed profiles of decision-makers and influencers',
    icon: Users,
    items: [
      'Job titles and roles',
      'Pain points and challenges',
      'Buying process and timeline',
      'Success metrics and KPIs'
    ]
  },
  {
    title: 'Qualification Framework',
    description: 'Establish scoring system for lead qualification',
    icon: CheckCircle,
    items: [
      'Budget qualification criteria',
      'Authority and decision-making power',
      'Need and urgency assessment',
      'Timeline and implementation readiness'
    ]
  }
]

const crmProcesses = [
  {
    title: 'Lead Management',
    description: 'Systematic lead capture, scoring, and nurturing',
    processes: [
      'Lead source tracking and attribution',
      'Automated lead scoring and routing',
      'Lead nurturing campaign setup',
      'Lead-to-opportunity conversion tracking'
    ]
  },
  {
    title: 'Account Segmentation',
    description: 'Strategic account grouping for targeted outreach',
    processes: [
      'ICP-based account categorization',
      'Account tier assignment (A/B/C accounts)',
      'Geographic and industry segmentation',
      'Engagement level classification'
    ]
  },
  {
    title: 'Data Hygiene & Maintenance',
    description: 'Ensuring data accuracy and completeness',
    processes: [
      'Regular contact information validation',
      'Account data enrichment processes',
      'Duplicate record identification and merging',
      'Data quality audit procedures'
    ]
  },
  {
    title: 'Reporting & Analytics',
    description: 'Performance tracking and optimization insights',
    processes: [
      'Lead generation metrics dashboard',
      'Conversion funnel analysis',
      'Campaign performance reporting',
      'ROI and attribution modeling'
    ]
  }
]

export default function IcpCrmPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
          <Database className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-black tracking-tight">ICP Mapping & CRM Operations</h1>
          <p className="text-gray-600 text-lg">Target profile development and lead management systems</p>
        </div>
      </div>

      {/* ICP Development Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-black" />
            ICP Development Process
          </CardTitle>
          <CardDescription>Systematic approach to defining and qualifying ideal customer profiles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {icpSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-black rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* CRM Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-black" />
            CRM Operations Framework
          </CardTitle>
          <CardDescription>Standardized processes for lead management and customer data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {crmProcesses.map((process, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                  <CardDescription>{process.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {process.processes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Tools & Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-black" />
            Tools & Resources
          </CardTitle>
          <CardDescription>Essential tools and templates for ICP and CRM operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-black mb-2">ICP Development Template</h4>
              <p className="text-sm text-gray-600">Structured template for creating ideal customer profiles</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-black mb-2">Lead Scoring Matrix</h4>
              <p className="text-sm text-gray-600">Automated scoring system for lead qualification</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-black mb-2">CRM Data Hygiene Checklist</h4>
              <p className="text-sm text-gray-600">Regular maintenance procedures for data quality</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-black mb-2">Account Segmentation Guide</h4>
              <p className="text-sm text-gray-600">Framework for categorizing and prioritizing accounts</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-black mb-2">Market Research Toolkit</h4>
              <p className="text-sm text-gray-600">Resources for industry analysis and competitive intelligence</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-black mb-2">Reporting Dashboard Templates</h4>
              <p className="text-sm text-gray-600">Standardized reporting formats for client deliverables</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}