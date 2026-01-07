'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Users, MessageSquare, Database, CheckCircle, AlertTriangle } from 'lucide-react'

export default function CrmOpsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">CRM Operations</h1>
              <p className="text-gray-600 text-lg">Contact management and client communication protocols</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>CRM Operations Overview</CardTitle>
          <CardDescription>
            All CRM operations are conducted in HubSpot, synced with Lemlist. Client communications flow through Slack or Google Chat/Discord.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600 mb-2">HubSpot</div>
              <div className="text-sm text-blue-800">Primary CRM platform</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600 mb-2">Lemlist</div>
              <div className="text-sm text-green-800">Outbound email campaigns</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600 mb-2">Zapier</div>
              <div className="text-sm text-purple-800">Automation workflows</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-green-500" />
            Contact Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Contact Ownership</h4>
            <p className="text-gray-700 mb-3">
              Contacts are currently held and updated by Justin to maintain data quality and prevent duplication.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Data Fields</h4>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Name</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Company</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Email</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Phone</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>LinkedIn Profile</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Job Title & Role</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Source & Lead Status</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded md:col-span-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Notes & Communication History</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communication Protocols */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            Communication Protocols
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Client Communications</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <span className="font-medium">Primary Channels</span>
                  <p className="text-sm text-blue-800 mt-1">Slack or Google Chat / Discord for all client communications</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <Users className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <span className="font-medium">Response Times</span>
                  <p className="text-sm text-green-800 mt-1">24 hours for emails, 4 hours for urgent Slack messages</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Zapier Automation</h4>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-800 mb-2">
                Zapier agent in Discord channel #locatix-crm supports general operations:
              </p>
              <div className="font-mono text-sm bg-white p-2 rounded border text-purple-700">
                https://agents.zapier.com/bots/4b707386-b4e0-44a4-8371-7f44fa5fa79e/settings
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Quality Standards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Data Quality Standards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Contact Data</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Verify email addresses before adding to CRM
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Include company domain for business contacts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Update contact information quarterly
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Remove bounced email addresses immediately
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Communication Logs</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Log all client interactions in CRM notes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Include date, time, and key outcomes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Tag communications by type (call, email, meeting)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Update contact status after interactions
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CRM Maintenance Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-orange-500" />
            CRM Maintenance Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-orange-50 rounded-lg text-center">
              <div className="text-xl font-bold text-orange-600 mb-2">Daily</div>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Update contact status</li>
                <li>• Log communications</li>
                <li>• Review urgent tasks</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <div className="text-xl font-bold text-blue-600 mb-2">Weekly</div>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Clean duplicate contacts</li>
                <li>• Update lead scores</li>
                <li>• Review pipeline health</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg text-center">
              <div className="text-xl font-bold text-green-600 mb-2">Monthly</div>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Audit data quality</li>
                <li>• Update company information</li>
                <li>• Review inactive contacts</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <div className="text-xl font-bold text-purple-600 mb-2">Quarterly</div>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Full CRM audit</li>
                <li>• Process optimization</li>
                <li>• Training refresh</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Points */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-500" />
            Integration Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Outbound Integration</h4>
              <p className="text-indigo-800 text-sm">
                CRM contacts sync with Lemlist for outbound campaigns. Lead status updates automatically flow back to maintain data consistency.
              </p>
            </div>

            <div className="p-4 bg-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-900 mb-2">Client Services Sync</h4>
              <p className="text-teal-800 text-sm">
                Client onboarding and project updates automatically create CRM entries and maintain communication history.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}