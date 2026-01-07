'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, UserPlus, MessageSquare, Calendar, TrendingUp, CheckCircle, AlertTriangle, Clock } from 'lucide-react'

export default function VAOpsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-cyan-500 flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">VA Operations</h1>
              <p className="text-gray-600 text-lg">Virtual assistant hiring, training, and management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why VAs Are Essential */}
      <Card className="border-cyan-200 bg-cyan-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyan-900">
            <CheckCircle className="h-5 w-5" />
            Why VAs Are Essential
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">Removes Owner Workload</h4>
              <p className="text-cyan-800 text-sm">Focus shifts to closing deals, not manual outreach</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">Scalable Lead Gen</h4>
              <p className="text-cyan-800 text-sm">Automates lead generation & supports high-volume operations</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">Cost Effective</h4>
              <p className="text-cyan-800 text-sm">$2-8/hour labor generating measurable throughput</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2">Sustainable Scaling</h4>
              <p className="text-cyan-800 text-sm">Add more VAs without complexity once system works</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* VA Roles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-blue-500" />
            VA Roles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Setters</h4>
              <p className="text-blue-800 text-sm">Automate lead generation, allowing businesses to scale rapidly.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Marketers</h4>
              <p className="text-green-800 text-sm">Manage social media content channels & ads.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hiring Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-green-500" />
            1. Hiring Process
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Where to Find VAs</h4>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <span className="font-medium">Existing Network</span>
                  <span className="text-gray-600 ml-2">– Always the first choice</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="font-medium">Onlinejobs.ph</span>
                  <span className="text-gray-600 ml-2">– Hire affordable, skilled VAs</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Hiring Workflow</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <span className="font-medium">Post Job & Get Applications</span>
                  <p className="text-sm text-blue-800 mt-1">Create job post specifying role (e.g., Instagram B2B Lead Generation). Expect 100+ applicants.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <span className="font-medium">Loom Video Screening</span>
                  <p className="text-sm text-green-800 mt-1">Send standard message asking all candidates to submit Loom video introduction. Only 50% respond initially.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <span className="font-medium">Shortlist & Group Interviews</span>
                  <p className="text-sm text-orange-800 mt-1">Out of respondents, only 5-10 will be potential candidates. Conduct group interviews to walk through expectations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <span className="font-medium">Final Selection</span>
                  <p className="text-sm text-red-800 mt-1">Choose 1-2 VAs who demonstrate skill & commitment. Proceed to 30-min 1-on-1 interviews.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Onboarding Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-purple-500" />
            2. Onboarding Process
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <div className="text-xl font-bold text-purple-600 mb-2">1</div>
              <div className="text-sm font-medium text-purple-900">Expectation Setting Call</div>
              <div className="text-xs text-purple-800 mt-1">Explain role, tasks, goals</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <div className="text-xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-sm font-medium text-blue-900">Orientation Call</div>
              <div className="text-xs text-blue-800 mt-1">Introduce tools and workflow</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <div className="text-xl font-bold text-green-600 mb-2">3</div>
              <div className="text-sm font-medium text-green-900">Loom SOP Videos</div>
              <div className="text-xs text-green-800 mt-1">Self-train on key workflows</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Key Software for VA Operations</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MessageSquare className="h-5 w-5 text-indigo-500" />
                <div>
                  <span className="font-medium">Discord</span>
                  <span className="text-gray-600 ml-2">– Internal team communication</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="font-medium">Cal</span>
                  <span className="text-gray-600 ml-2">– Booking sales calls</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <span className="font-medium">Airtable</span>
                  <span className="text-gray-600 ml-2">– Tracking outreach and results</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                <div>
                  <span className="font-medium">Canva</span>
                  <span className="text-gray-600 ml-2">– Creating creatives</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Workflow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            3. Daily Workflow Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Start of Day (SOD) Check-in</h4>
            <p className="text-sm text-gray-600 mb-3">VAs report daily tasks in Slack/Discord</p>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-mono">09:00–09:05 Discord Check-In & Prep</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-mono">09:05–12:00 Inbound Reply Handling & Campaign Check-ups</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-mono">12:00–16:55 n8n Workflow Automation / New Campaign Setup / Web Dev</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-mono">16:55–17:00 End-of-Day Report</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">DM Outreach System</h4>
            <div className="space-y-3">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-600">200-300 DMs/day per VA</div>
                <div className="text-sm text-green-800">10% reply rate = 10-20 warm leads daily per VA</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600">Goal: Convert to booked calls</div>
                <div className="text-sm text-blue-800">Focus on quality outreach that drives engagement</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow-ups</h4>
            <p className="text-sm text-gray-600">Essential for increasing booking rates and maintaining engagement</p>
          </div>
        </CardContent>
      </Card>

      {/* Scaling VA Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-teal-500" />
            4. Scaling VA Operations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-teal-50 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-600 mb-2">Volume</div>
              <p className="text-sm text-teal-800">Increase lead volume by hiring more VAs</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-600 mb-2">Accounts</div>
              <p className="text-sm text-teal-800">Add multiple Instagram/LinkedIn accounts</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-600 mb-2">Tasks</div>
              <p className="text-sm text-teal-800">Train for higher-level tasks</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-600 mb-2">Analytics</div>
              <p className="text-sm text-teal-800">Track data & refine processes</p>
            </div>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Scaling Considerations
            </h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Systematize data tracking & analytics to refine processes</li>
              <li>• Maintain quality standards as volume increases</li>
              <li>• Ensure clear communication channels for larger teams</li>
              <li>• Regular performance reviews and feedback loops</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Lead Generation Funnel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-indigo-500" />
            Lead Generation Funnel with VAs
          </CardTitle>
          <CardDescription>Example workflow for VA-powered lead generation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-indigo-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">2 VAs</div>
                <div className="text-sm text-indigo-800">$500/month each</div>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">200 DMs/day</div>
                <div className="text-sm text-indigo-800">600 total responses/month</div>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">10% booking rate</div>
                <div className="text-sm text-indigo-800">90 booked calls monthly</div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-center">
                <div className="text-xl font-bold text-green-600 mb-1">45 qualified prospects</div>
                <div className="text-sm text-green-800">50% qualified rate × 90 booked calls</div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600 mb-1">~36 sales meetings</div>
                <div className="text-sm text-blue-800">80% show-up rate × 45 qualified prospects</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}