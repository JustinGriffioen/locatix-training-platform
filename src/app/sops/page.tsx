'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckSquare, Users, Target, FileText, BookOpen, PlayCircle, Calendar, PenTool, Code, Mail, CheckCircle } from 'lucide-react'

// Internal SOPs - For Locatix Team Operations
const internalSops = [
  {
    id: 'mission-vision',
    title: 'Mission & Vision',
    description: 'Company purpose, values, and strategic direction',
    icon: Target,
    color: 'bg-black',
    type: 'documentation',
    href: '/sops/mission-vision'
  },
  {
    id: 'va-operations',
    title: 'VA Operations',
    description: 'Virtual assistant hiring, training, and management',
    icon: Users,
    color: 'bg-gray-800',
    type: 'documentation',
    href: '/sops/va-ops'
  },
  {
    id: 'team-scheduling',
    title: 'Team Scheduling & HR',
    description: 'Global team coordination and HR processes',
    icon: Calendar,
    color: 'bg-gray-700',
    type: 'documentation',
    href: '/sops/schedules-hr'
  },
  {
    id: 'content-development',
    title: 'Content Development',
    description: 'Content creation workflows and copywriting frameworks',
    icon: PenTool,
    color: 'bg-black',
    type: 'documentation',
    href: '/sops/content-dev'
  },
  {
    id: 'seo-video-production',
    title: 'SEO & Video Production',
    description: 'Search optimization and video content creation',
    icon: Code,
    color: 'bg-gray-800',
    type: 'documentation',
    href: '/sops/seo-video'
  },
  {
    id: 'webinar-management',
    title: 'Webinar Management',
    description: 'Event planning, promotion, and execution (shareable with clients)',
    icon: Calendar,
    color: 'bg-gray-700',
    type: 'documentation',
    href: '/sops/webinars'
  },
  {
    id: 'development-sops',
    title: 'Development SOPs',
    description: 'Web development and deployment processes (DFY internal workflows)',
    icon: Code,
    color: 'bg-black',
    type: 'documentation',
    href: '/sops/development'
  },
  {
    id: 'tender-sops',
    title: 'Tender SOPs',
    description: 'Government bid writing and tender management frameworks',
    icon: FileText,
    color: 'bg-gray-800',
    type: 'documentation',
    href: '/sops/tender-sops'
  }
]

// Client SOPs - For Client Delivery & Services (Mix of Templates + Customization)
const clientSops = [
  {
    id: 'icp-mapping',
    title: 'ICP Mapping',
    description: 'Ideal customer profile development and targeting (client-specific)',
    icon: Target,
    color: 'bg-black',
    type: 'documentation',
    templated: false,
    href: '/sops/icp-mapping'
  },
  {
    id: 'crm-operations',
    title: 'CRM Operations',
    description: 'Contact management and client communication protocols',
    icon: FileText,
    color: 'bg-gray-800',
    type: 'documentation',
    templated: true,
    href: '/sops/crm-ops'
  },
  {
    id: 'outbound-sops',
    title: 'Outbound SOPs',
    description: 'Lead generation and appointment setting processes (mostly templated)',
    icon: Mail,
    color: 'bg-gray-700',
    type: 'documentation',
    templated: true,
    href: '/sops/outbound'
  },
  {
    id: 'sales-scripts',
    title: 'Sales Scripts',
    description: 'Discovery calls, demos, and objection handling (templated frameworks)',
    icon: Users,
    color: 'bg-black',
    type: 'documentation',
    templated: true,
    href: '/sops/sales-scripts'
  },
  {
    id: 'service-delivery',
    title: 'Service Delivery',
    description: 'Client onboarding and project management processes',
    icon: CheckCircle,
    color: 'bg-gray-800',
    type: 'documentation',
    templated: true,
    href: '/sops/service-delivery'
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack Overview',
    description: 'Client technology ecosystem and integration requirements',
    icon: Code,
    color: 'bg-gray-700',
    type: 'documentation',
    templated: false,
    href: '/sops/tech-stack'
  }
]

// Training Modules - For Team Development (Future: Video-based with backend tracking)
const trainingModules = [
  {
    id: 'sdr-bdr-training',
    title: 'SDR/BDR Training',
    description: 'Outbound sales prospecting and appointment setting',
    icon: Users,
    color: 'bg-black',
    type: 'training',
    progress: 45,
    modules: 8,
    href: '/sdr-bdr'
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing Training',
    description: 'Strategic content creation and sales enablement',
    icon: PenTool,
    color: 'bg-gray-800',
    type: 'training',
    progress: 35,
    modules: 6,
    href: '/content'
  },
  {
    id: 'web-development',
    title: 'Web Development Training',
    description: 'Full-stack development and deployment workflows',
    icon: Code,
    color: 'bg-gray-700',
    type: 'training',
    progress: 60,
    modules: 6,
    href: '/webdev'
  },
  {
    id: 'client-services',
    title: 'Client Services Training',
    description: 'Customer success and account management',
    icon: CheckCircle,
    color: 'bg-black',
    type: 'training',
    progress: 50,
    modules: 6,
    href: '/client-services'
  },
  {
    id: 'operations-hr',
    title: 'Operations & HR Training',
    description: 'Team management and operational excellence',
    icon: Users,
    color: 'bg-gray-800',
    type: 'training',
    progress: 0,
    modules: 6,
    href: '/operations'
  }
]

const sopModules = [
  {
    id: 'icp-mapping',
    title: 'ICP Mapping',
    icon: Target,
    color: 'bg-black',
    tasks: [
      {
        id: 1,
        title: 'Geographic Targeting Review',
        description: 'Review target geographic markets',
        completed: true,
        deadline: 'Monthly',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'North America focus', completed: true },
          { id: 2, title: 'Europe expansion', completed: true },
          { id: 3, title: 'Gulf States opportunities', completed: true }
        ]
      },
      {
        id: 2,
        title: 'Demographic Analysis',
        description: 'Review target demographics and verticals',
        completed: false,
        deadline: 'Monthly',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Geospatial SaaS focus', completed: true },
          { id: 2, title: 'Insurtech integration', completed: false },
          { id: 3, title: 'Logistics optimization', completed: false }
        ]
      }
    ]
  },
  {
    id: 'crm-ops',
    title: 'CRM Operations',
    icon: FileText,
    color: 'bg-gray-800',
    tasks: [
      {
        id: 1,
        title: 'Contact Management',
        description: 'Maintain accurate contact database',
        completed: true,
        deadline: 'Daily',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Update contact information', completed: true },
          { id: 2, title: 'Clean duplicate entries', completed: true },
          { id: 3, title: 'Verify email addresses', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Client Communication Setup',
        description: 'Configure communication channels',
        completed: false,
        deadline: 'Weekly',
        priority: 'medium',
        subtasks: [
          { id: 1, title: 'Slack integration', completed: true },
          { id: 2, title: 'Google Chat setup', completed: false },
          { id: 3, title: 'Discord automation', completed: false }
        ]
      }
    ]
  },
  {
    id: 'outbound',
    title: 'Outbound SOPs',
    icon: Mail,
    color: 'bg-gray-700',
    tasks: [
      {
        id: 1,
        title: 'Lead Generation',
        description: 'Generate and qualify new prospects',
        completed: true,
        deadline: 'Daily',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Lemlist campaigns', completed: true },
          { id: 2, title: 'Apollo research', completed: true },
          { id: 3, title: 'Community engagement', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Initial Outreach',
        description: 'Execute first-touch messaging campaigns',
        completed: false,
        deadline: 'Daily',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Manual messaging', completed: true },
          { id: 2, title: 'Contact form responses', completed: false },
          { id: 3, title: 'LinkedIn connection requests', completed: false }
        ]
      },
      {
        id: 3,
        title: 'Follow-up Sequences',
        description: 'Maintain engagement with prospects',
        completed: false,
        deadline: 'Daily',
        priority: 'medium',
        subtasks: [
          { id: 1, title: '24-48h follow-ups', completed: true },
          { id: 2, title: '4-5 day sequences', completed: false },
          { id: 3, title: 'GIF reminders', completed: false }
        ]
      }
    ]
  },
  {
    id: 'sales-scripts',
    title: 'Sales Scripts & GTM',
    icon: Users,
    color: 'bg-black',
    tasks: [
      {
        id: 1,
        title: 'Main Sales Script Review',
        description: 'Master the core outbound sales script',
        completed: false,
        deadline: 'Weekly',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Script memorization', completed: false },
          { id: 2, title: 'Role-playing practice', completed: false },
          { id: 3, title: 'Objection handling', completed: false }
        ]
      },
      {
        id: 2,
        title: 'GTM Strategy Implementation',
        description: 'Execute go-to-market strategies',
        completed: false,
        deadline: 'Monthly',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'ICP definition', completed: true },
          { id: 2, title: 'Messaging alignment', completed: false },
          { id: 3, title: 'Campaign planning', completed: false }
        ]
      }
    ]
  },
  {
    id: 'content-dev',
    title: 'Content Development',
    icon: PenTool,
    color: 'bg-gray-800',
    tasks: [
      {
        id: 1,
        title: 'Content Calendar Planning',
        description: 'Plan and schedule content creation',
        completed: false,
        deadline: 'Weekly',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'WePost scheduling', completed: true },
          { id: 2, title: 'Canva design prep', completed: false },
          { id: 3, title: 'Topic ideation', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Copywriting Frameworks',
        description: 'Apply proven copywriting techniques',
        completed: false,
        deadline: 'Weekly',
        priority: 'medium',
        subtasks: [
          { id: 1, title: 'AIDA structure', completed: true },
          { id: 2, title: 'PAS framework', completed: false },
          { id: 3, title: 'SUCCES principles', completed: false }
        ]
      }
    ]
  },
  {
    id: 'seo-video',
    title: 'SEO & Video Production',
    icon: Code,
    color: 'bg-gray-700',
    tasks: [
      {
        id: 1,
        title: 'SEO Strategy Implementation',
        description: 'Execute SEO best practices using Semrush',
        completed: false,
        deadline: 'Weekly',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Keyword research', completed: false },
          { id: 2, title: 'Content optimization', completed: false },
          { id: 3, title: 'Position tracking', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Video Content Production',
        description: 'Create promotional and educational videos',
        completed: false,
        deadline: 'Monthly',
        priority: 'medium',
        subtasks: [
          { id: 1, title: 'Script development', completed: false },
          { id: 2, title: 'Recording sessions', completed: false },
          { id: 3, title: 'Post-production editing', completed: false }
        ]
      }
    ]
  },
  {
    id: 'webinars',
    title: 'Webinar Management',
    icon: Calendar,
    color: 'bg-black',
    tasks: [
      {
        id: 1,
        title: 'Pre-Event Planning',
        description: 'Plan and promote webinar events',
        completed: false,
        deadline: 'Weekly',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Invite CRM subset', completed: false },
          { id: 2, title: 'LinkedIn promotion', completed: false },
          { id: 3, title: 'Reminder sequences', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Event Execution',
        description: 'Manage live webinar delivery',
        completed: false,
        deadline: 'Event Day',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Strong CTA preparation', completed: false },
          { id: 2, title: 'Technical setup', completed: false },
          { id: 3, title: 'Q&A management', completed: false }
        ]
      }
    ]
  },
  {
    id: 'va-ops',
    title: 'VA Operations',
    icon: Users,
    color: 'bg-gray-800',
    tasks: [
      {
        id: 1,
        title: 'VA Hiring Process',
        description: 'Recruit and onboard virtual assistants',
        completed: false,
        deadline: 'Monthly',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Onlinejobs.ph sourcing', completed: false },
          { id: 2, title: 'Loom video screening', completed: false },
          { id: 3, title: 'Group interviews', completed: false }
        ]
      },
      {
        id: 2,
        title: 'VA Onboarding & Training',
        description: 'Train VAs on processes and tools',
        completed: false,
        deadline: 'Weekly',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Expectation setting', completed: false },
          { id: 2, title: 'Tool orientation', completed: false },
          { id: 3, title: 'Loom SOP videos', completed: false }
        ]
      },
      {
        id: 3,
        title: 'Daily Workflow Management',
        description: 'Monitor and optimize VA performance',
        completed: false,
        deadline: 'Daily',
        priority: 'medium',
        subtasks: [
          { id: 1, title: 'Start-of-day check-ins', completed: false },
          { id: 2, title: 'Progress tracking', completed: false },
          { id: 3, title: 'End-of-day reports', completed: false }
        ]
      }
    ]
  },
  {
    id: 'schedules-hr',
    title: 'Schedules & HR',
    icon: Calendar,
    color: 'bg-gray-700',
    tasks: [
      {
        id: 1,
        title: 'Team Scheduling',
        description: 'Manage team schedules and coordination',
        completed: false,
        deadline: 'Daily',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Time zone coordination', completed: true },
          { id: 2, title: 'Task assignments', completed: false },
          { id: 3, title: 'Availability updates', completed: false }
        ]
      },
      {
        id: 2,
        title: 'HR Processes',
        description: 'Handle human resources and team development',
        completed: false,
        deadline: 'Monthly',
        priority: 'medium',
        subtasks: [
          { id: 1, title: 'Performance reviews', completed: false },
          { id: 2, title: 'Professional development', completed: false },
          { id: 3, title: 'Team building activities', completed: false }
        ]
      }
    ]
  },
  {
    id: 'sdr',
    title: 'SDR/BDR SOPs',
    icon: Users,
    color: 'bg-black',
    tasks: [
      {
        id: 1,
        title: 'Daily Prospecting Routine',
        description: 'Complete 50 prospecting activities per day',
        completed: true,
        deadline: 'Daily',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'LinkedIn prospecting (20)', completed: true },
          { id: 2, title: 'Email outreach (20)', completed: true },
          { id: 3, title: 'Call attempts (10)', completed: false }
        ]
      },
      {
        id: 2,
        title: 'List Building',
        description: 'Update and maintain prospect lists',
        completed: false,
        deadline: 'Weekly',
        priority: 'medium',
        subtasks: [
          { id: 1, title: 'Clean inactive contacts', completed: true },
          { id: 2, title: 'Add 100 new prospects', completed: false },
          { id: 3, title: 'Update company data', completed: false }
        ]
      },
      {
        id: 3,
        title: 'Weekly Performance Review',
        description: 'Review metrics and adjust strategy',
        completed: false,
        deadline: 'Friday',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Analyze response rates', completed: false },
          { id: 2, title: 'Update messaging', completed: false },
          { id: 3, title: 'Plan next week strategy', completed: false }
        ]
      }
    ]
  },
  {
    id: 'webdev',
    title: 'Web Development SOPs',
    icon: Code,
    color: 'bg-gray-800',
    tasks: [
      {
        id: 1,
        title: 'Code Review Process',
        description: 'Complete code reviews for team PRs',
        completed: true,
        deadline: 'Daily',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Review assigned PRs', completed: true },
          { id: 2, title: 'Provide constructive feedback', completed: true },
          { id: 3, title: 'Approve ready PRs', completed: true }
        ]
      },
      {
        id: 2,
        title: 'Deployment Checklist',
        description: 'Follow deployment procedures',
        completed: false,
        deadline: 'Before deployment',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Run test suite', completed: true },
          { id: 2, title: 'Update documentation', completed: false },
          { id: 3, title: 'Backup database', completed: false },
          { id: 4, title: 'Notify team', completed: false }
        ]
      }
    ]
  },
  {
    id: 'content',
    title: 'Content Marketing SOPs',
    icon: PenTool,
    color: 'bg-gray-700',
    tasks: [
      {
        id: 1,
        title: 'Content Calendar Updates',
        description: 'Plan and schedule content for the week',
        completed: false,
        deadline: 'Monday',
        priority: 'high',
        subtasks: [
          { id: 1, title: 'Review analytics', completed: true },
          { id: 2, title: 'Plan content themes', completed: false },
          { id: 3, title: 'Schedule posts', completed: false }
        ]
      },
      {
        id: 2,
        title: 'Video Production',
        description: 'Complete weekly video content',
        completed: false,
        deadline: 'Wednesday',
        priority: 'medium',
        subtasks: [
          { id: 1, title: 'Script writing', completed: true },
          { id: 2, title: 'Recording session', completed: false },
          { id: 3, title: 'Editing and post-production', completed: false }
        ]
      }
    ]
  }
]

export default function SOPsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
              <CheckSquare className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">SOPs & Training Hub</h1>
              <p className="text-gray-600 text-lg">Documentation, procedures, and team development resources</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
            <BookOpen className="h-4 w-4" />
            {internalSops.length + clientSops.length} SOPs
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
            <PlayCircle className="h-4 w-4" />
            {trainingModules.length} Training Tracks
          </Badge>
        </div>
      </div>

      {/* Internal SOPs Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Internal SOPs</h2>
          <Badge variant="secondary">{internalSops.length} documents</Badge>
        </div>
        <p className="text-gray-600">Standard operating procedures for Locatix internal operations and team management</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {internalSops.map((sop) => {
            const Icon = sop.icon
            return (
              <Card key={sop.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${sop.color}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">Internal</Badge>
                  </div>
                  <CardTitle className="text-lg">{sop.title}</CardTitle>
                  <CardDescription className="text-sm">{sop.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={sop.href}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center block transition-colors"
                  >
                    View SOP
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Client SOPs Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
            <Target className="h-4 w-4 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Client SOPs</h2>
          <Badge variant="secondary">{clientSops.length} documents</Badge>
        </div>
        <p className="text-gray-600">Standard operating procedures for client delivery, sales, and service processes (mix of templates + client-specific customization)</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clientSops.map((sop) => {
            const Icon = sop.icon
            const getTemplatedBadge = () => {
              if (sop.templated === true) return <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">Templated</Badge>
              if (sop.templated === false) return <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700">Client-Specific</Badge>
              if (sop.templated === 'mixed') return <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700">Mixed</Badge>
              return <Badge variant="outline" className="text-xs">Client</Badge>
            }

            return (
              <Card key={sop.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${sop.color}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    {getTemplatedBadge()}
                  </div>
                  <CardTitle className="text-lg">{sop.title}</CardTitle>
                  <CardDescription className="text-sm">{sop.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={sop.href}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-center block transition-colors"
                  >
                    View SOP
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Training Modules Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
            <PlayCircle className="h-4 w-4 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Training Modules</h2>
          <Badge variant="secondary">{trainingModules.length} tracks</Badge>
        </div>
        <p className="text-gray-600">Interactive training programs for team skill development (future: video-based with progress tracking)</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trainingModules.map((module) => {
            const Icon = module.icon
            return (
              <Card key={module.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${module.color}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs mb-1">Training</Badge>
                      <div className="text-sm text-gray-600">{module.progress}% complete</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription className="text-sm">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{module.modules} modules</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <a
                    href={module.href}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded text-center block transition-colors"
                  >
                    Start Training
                  </a>
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
          <CardDescription>Access key resources and management tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg hover:border-blue-300 transition-colors">
              <FileText className="h-6 w-6 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">New SOP Template</span>
              <span className="text-xs text-gray-500">Create documentation</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg hover:border-green-300 transition-colors">
              <PlayCircle className="h-6 w-6 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Training Dashboard</span>
              <span className="text-xs text-gray-500">Track progress</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg hover:border-purple-300 transition-colors">
              <Users className="h-6 w-6 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Team Onboarding</span>
              <span className="text-xs text-gray-500">New hire resources</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg hover:border-orange-300 transition-colors">
              <CheckCircle className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Process Audit</span>
              <span className="text-xs text-gray-500">Review compliance</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}