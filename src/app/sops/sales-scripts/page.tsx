'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Target, MessageSquare, TrendingUp, CheckCircle, AlertTriangle, DollarSign } from 'lucide-react'

export default function SalesScriptsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-red-500 flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Sales Scripts</h1>
              <p className="text-gray-600 text-lg">Discovery calls, demos, and objection handling frameworks</p>
            </div>
          </div>
        </div>
        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">Templated</Badge>
      </div>

      {/* Main Sales Script */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-red-500" />
            Main Sales Script
          </CardTitle>
          <CardDescription>Core outbound sales script for Locatix</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="font-mono text-sm space-y-2">
              <div><strong>Building Rapport:</strong> Hey {'{name}'} how's it going? // Where are you calling from? // Thank you for hopping on the call! // Can you briefly tell me about the business & what you personally do in it?</div>
              <br/>
              <div><strong>Preframe:</strong> What I'd like to do on this call is ask you a few questions to understand your current marketing efforts, and then if we find room for improvement anywhere, I'll get into how we could help. That okay?</div>
              <br/>
              <div><strong>Discovery (current situation):</strong></div>
              <div className="ml-4">
                <div>• Clarify: What caught your attention? What made you hop on the call today?</div>
                <div>• How are you currently about client acquisition?</div>
                <div>• Is there an agency or sales & marketing department already?</div>
                <div>• Acquisition channels? (Ads, Content, Outbound, Referrals, Events)</div>
                <div>• Do they generate a lot of leads? (Or is it moreso RFPs?)</div>
                <div>• Do you know the close rates?</div>
                <div>• (Average deal size or annual customer value on that?)</div>
              </div>
              <br/>
              <div><strong>Label the problem:</strong> So it sounds like you're {'{experiencing problem}'}. Is that right?</div>
              <br/>
              <div><strong>Overview the past:</strong></div>
              <div className="ml-4">
                <div>• What have you tried so far as far as {'{solving problem}'}?</div>
                <div>• What worked? What did not work?</div>
                <div>• What does your sales process look like? (Calls, Demos, Trials, Pilots, RFPs)</div>
              </div>
              <br/>
              <div><strong>Objective (desired situation):</strong></div>
              <div className="ml-4">
                <div>• Sell the vacation: Do you have a particular goal (for the end of the year)?</div>
                <div>• What would be the next steps from there? (delegation, hiring, more markets, fundraising)</div>
              </div>
              <br/>
              <div><strong>Transition:</strong> Alright, so currently you're {'{describe situation at the moment, goal, trajectory}'}. Let's say instead we would start doing {'{more outbound sales / content funnel / doing RFPs}'} — do you think that would do the job?</div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Pitch Structure</h4>
            <div className="font-mono text-sm space-y-2">
              <div><strong>Pitch:</strong> Okay - based on what you've shared I see some key areas where we can help.</div>
              <div>If you don't mind, I'll share my screen and briefly present how we typically work:</div>
              <div>https://docs.google.com/presentation/d/15N2geu3Z8f5w3rl0EA3rZaodHFK95amKb74PJ_Zcu1w/edit?slide=id.p#slide=id.p</div>
              <div>https://miro.com/app/board/uXjVLpz-Dig=/</div>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Close</h4>
            <div className="font-mono text-sm space-y-2">
              <div><strong>Explain away the concerns:</strong></div>
              <div className="ml-4">
                <div>• What is your main concern?</div>
                <div>• Would you be opposed to moving forward from here?</div>
                <div>• Cool, then the next step would be for me to send over the proposal / agreement / term sheet, so we can get started - sounds good?</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pre-Sales Intelligence */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-purple-500" />
            Pre-Sales Intelligence Gathering
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Company Intelligence (3 min)</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Core Solutions & ICP</li>
                <li>• Recent Moves: Funding, partnerships, launches</li>
                <li>• Leadership Backgrounds</li>
                <li>• Positioning: Niche, differentiators</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Growth & Leadflow Analysis (5 min)</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Outbound Signals: SDR hiring, LinkedIn activity</li>
                <li>• Content Activity: Blog cadence, webinars</li>
                <li>• SEO Snapshot: Rankings, organic visibility</li>
                <li>• CRO Check: CTAs, copy, demo pages</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Competitive Context (2 min)</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Identify 1-2 similar players</li>
                <li>• Gaps: Faster site, stronger copy</li>
                <li>• Trend alignment in geospatial</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GTM Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            Go-To-Market Strategy Framework
          </CardTitle>
          <CardDescription>STP Framework for defining ICPs and market positioning</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Segmentation (S)
              </h4>
              <p className="text-sm text-orange-800">
                Group market into high-leverage segments, each becoming its own ICP.
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Targeting (T)
              </h4>
              <p className="text-sm text-orange-800">
                Select 1-3 high-probability ICPs per segment based on geography, demographics, psychographics, and behavioral factors.
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Positioning (P)
              </h4>
              <p className="text-sm text-orange-800">
                Define desired outcomes, pain points, unique angles, urgency, and social proof for each ICP.
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-3">Campaign Launch Timeline</h4>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">Day 1-3</div>
                <div className="text-sm text-gray-600">ICP Definition</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">Day 3-30</div>
                <div className="text-sm text-gray-600">Campaign Launch</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">Day 30-60</div>
                <div className="text-sm text-gray-600">Iteration</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Messaging Template */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-indigo-500" />
            Messaging Template Framework
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">++ More Good</h4>
              <p className="text-sm text-green-800">Outcome-based: Show desirable future state, speed up workflow, save $</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">-- Less Bad</h4>
              <p className="text-sm text-red-800">Pain-based: Solve/remove friction, cost time or $</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">+- Good Can Decrease</h4>
              <p className="text-sm text-yellow-800">FOMO/Scarcity: You're losing something valuable</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">-+ Bad Can Increase</h4>
              <p className="text-sm text-purple-800">Risk escalation: Costs of inaction rise</p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-3">Example Angles</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-white rounded border">
                <div className="text-xs text-gray-500 mb-1">More Good Example</div>
                <div className="text-sm">"Accelerate your sales cycle by 60% with our proven appointment setting system"</div>
              </div>
              <div className="p-3 bg-white rounded border">
                <div className="text-xs text-gray-500 mb-1">Less Bad Example</div>
                <div className="text-sm">"Stop wasting months on unqualified leads that never convert"</div>
              </div>
              <div className="p-3 bg-white rounded border">
                <div className="text-xs text-gray-500 mb-1">FOMO Example</div>
                <div className="text-sm">"Don't miss out on the enterprise deals your competitors are closing"</div>
              </div>
              <div className="p-3 bg-white rounded border">
                <div className="text-xs text-gray-500 mb-1">Risk Example</div>
                <div className="text-sm">"Without systematic outbound, your pipeline will dry up this quarter"</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Objection Handling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Objection Handling
          </CardTitle>
          <CardDescription>Common objections and how to address them with value-first responses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Key Principle</h4>
              <p className="text-red-800">
                When you get any type of objection from prospects, always try to use a specific resource to handle it.
                We want to lead with value rather than trying to just argue. We have lots of specific objections being handled in our resources.
              </p>
              <div className="mt-3 flex gap-2">
                <Badge variant="outline">locatix.io/cases</Badge>
                <Badge variant="outline">locatix.io/resources</Badge>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">"Not interested"</h5>
                <p className="text-sm text-gray-600">Got it—you can follow our LinkedIn Page to stay in the loop & get some insights in case things may change later.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">"We already have a process"</h5>
                <p className="text-sm text-gray-600">For all services? Or just [Specific Area]? Any room to optimize?</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">"Bad timing"</h5>
                <p className="text-sm text-gray-600">No problem—what would make it a priority?</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">Extreme rejection</h5>
                <p className="text-sm text-gray-600">Worst idea ever to [Get Benefit]? 😆</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}