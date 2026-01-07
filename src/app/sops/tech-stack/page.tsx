'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Cloud, Zap, Shield, Users, CheckCircle, AlertTriangle } from 'lucide-react'

export default function TechStackPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-indigo-500 flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Tech Stack Overview</h1>
              <p className="text-gray-600 text-lg">Client technology ecosystem and integration requirements</p>
            </div>
          </div>
        </div>
        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700">Client-Specific</Badge>
      </div>

      {/* Tech Stack Assessment Framework */}
      <Card className="border-indigo-200 bg-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-900">
            <Code className="h-5 w-5" />
            Tech Stack Assessment Framework
          </CardTitle>
          <CardDescription>
            Comprehensive evaluation of client's technology ecosystem to ensure seamless integration and optimal performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">Infrastructure</h4>
              <p className="text-indigo-800 text-sm">Hosting, cloud providers, and system architecture</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">Applications</h4>
              <p className="text-indigo-800 text-sm">Core business systems and productivity tools</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">Data & Analytics</h4>
              <p className="text-indigo-800 text-sm">Databases, BI tools, and reporting systems</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">Integration</h4>
              <p className="text-indigo-800 text-sm">APIs, middleware, and data flow requirements</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Infrastructure & Hosting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-blue-500" />
            Infrastructure & Hosting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Cloud Providers</h4>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">Primary Cloud</h5>
                <p className="text-sm text-blue-800">AWS, Azure, GCP, or on-premises</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">CDN & Edge</h5>
                <p className="text-sm text-blue-800">CloudFlare, Akamai, Fastly</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">Backup & DR</h5>
                <p className="text-sm text-blue-800">Disaster recovery and backup solutions</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Server & Hosting Details</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">Server Architecture</h5>
                <p className="text-sm text-gray-600">Load balancing, auto-scaling, container orchestration</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">SSL & Security</h5>
                <p className="text-sm text-gray-600">SSL certificates, firewalls, DDoS protection</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Applications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-500" />
            Core Business Applications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Business Systems</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">CRM Platform</h5>
                <p className="text-sm text-green-800">HubSpot, Salesforce, Pipedrive, Zoho</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Marketing Automation</h5>
                <p className="text-sm text-green-800">Lemlist, ActiveCampaign, Klaviyo</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Project Management</h5>
                <p className="text-sm text-green-800">Asana, Monday.com, ClickUp, Jira</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Communication Tools</h5>
                <p className="text-sm text-green-800">Slack, Microsoft Teams, Discord</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Development Tools</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Version Control</h5>
                <p className="text-sm text-green-800">GitHub, GitLab, Bitbucket</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">CI/CD Pipeline</h5>
                <p className="text-sm text-green-800">GitHub Actions, Jenkins, CircleCI</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Monitoring & Logging</h5>
                <p className="text-sm text-green-800">DataDog, New Relic, Sentry</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Testing Tools</h5>
                <p className="text-sm text-green-800">Jest, Cypress, Playwright</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data & Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-purple-500" />
            Data & Analytics Stack
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Databases & Storage</h4>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-900 mb-2">Primary Database</h5>
                <p className="text-sm text-purple-800">PostgreSQL, MySQL, MongoDB</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-900 mb-2">Data Warehouse</h5>
                <p className="text-sm text-purple-800">BigQuery, Snowflake, Redshift</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-900 mb-2">Caching Layer</h5>
                <p className="text-sm text-purple-800">Redis, Memcached</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Analytics & BI</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-900 mb-2">Web Analytics</h5>
                <p className="text-sm text-purple-800">Google Analytics, Mixpanel, Amplitude</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-900 mb-2">Business Intelligence</h5>
                <p className="text-sm text-purple-800">Tableau, Looker, Power BI, Metabase</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-500" />
            Integration Requirements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">API Endpoints</h4>
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <h5 className="font-medium text-orange-900 mb-2">Authentication Methods</h5>
                <p className="text-sm text-orange-800">OAuth, API keys, JWT tokens, SAML</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <h5 className="font-medium text-orange-900 mb-2">Rate Limiting</h5>
                <p className="text-sm text-orange-800">API call limits and throttling requirements</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Data Flow Requirements</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-orange-50 rounded-lg">
                <h5 className="font-medium text-orange-900 mb-2">Real-time Sync</h5>
                <p className="text-sm text-orange-800">Webhooks, streaming, or scheduled batch updates</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <h5 className="font-medium text-orange-900 mb-2">Data Transformation</h5>
                <p className="text-sm text-orange-800">ETL processes, data mapping, validation rules</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security & Compliance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-red-500" />
            Security & Compliance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Security Standards</h4>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-3 bg-red-50 rounded-lg">
                <h5 className="font-medium text-red-900 mb-2">Data Encryption</h5>
                <p className="text-sm text-red-800">At rest and in transit encryption</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <h5 className="font-medium text-red-900 mb-2">Access Control</h5>
                <p className="text-sm text-red-800">RBAC, SSO, multi-factor authentication</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <h5 className="font-medium text-red-900 mb-2">Audit Logging</h5>
                <p className="text-sm text-red-800">Security event monitoring and logging</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Compliance Requirements</h4>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-lg">
                <h5 className="font-medium text-red-900 mb-2">Industry Standards</h5>
                <p className="text-sm text-red-800">GDPR, HIPAA, SOC 2, ISO 27001, industry-specific regulations</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <h5 className="font-medium text-red-900 mb-2">Data Residency</h5>
                <p className="text-sm text-red-800">Geographic data storage requirements and restrictions</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-teal-500" />
            Integration Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Compatibility Matrix</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-teal-50 rounded-lg">
                <h5 className="font-medium text-teal-900 mb-2">Seamless Integration</h5>
                <p className="text-sm text-teal-800">Systems that work together without custom development</p>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg">
                <h5 className="font-medium text-teal-900 mb-2">Custom Integration</h5>
                <p className="text-sm text-teal-800">Systems requiring custom API development or middleware</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Technical Debt Assessment</h4>
            <div className="space-y-3">
              <div className="p-3 bg-teal-50 rounded-lg">
                <h5 className="font-medium text-teal-900 mb-2">Legacy Systems</h5>
                <p className="text-sm text-teal-800">Outdated technologies requiring modernization or workarounds</p>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg">
                <h5 className="font-medium text-teal-900 mb-2">Scalability Concerns</h5>
                <p className="text-sm text-teal-800">Current architecture limitations for growth</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Considerations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            Implementation Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Migration Strategy</h4>
              <p className="text-yellow-800 text-sm mb-2">Phased rollout, data migration, and change management approach</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Training Requirements</h4>
              <p className="text-yellow-800 text-sm mb-2">User adoption, administrator training, and support resources needed</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Timeline & Budget</h4>
              <p className="text-yellow-800 text-sm mb-2">Implementation timeline, resource requirements, and cost estimates</p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Risk Assessment
              </h4>
              <p className="text-red-800 text-sm mb-2">Potential integration challenges, downtime risks, and mitigation strategies</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}