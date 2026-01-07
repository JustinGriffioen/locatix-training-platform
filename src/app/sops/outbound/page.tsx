'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Users, MessageSquare, Phone, Calendar, Target, AlertTriangle, CheckCircle } from 'lucide-react'

export default function OutboundPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-orange-500 flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Outbound SOPs</h1>
              <p className="text-gray-600 text-lg">Lead generation and appointment setting processes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Outbound Lead Gen & Appointment Setting</CardTitle>
          <CardDescription>
            This document describes the outbound lead gen, DM/appointment setting process with a major focus on Locatix's own outbound.
            For appointment setting workflows past the initial message, and for clients, check the appointment setting SOP.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1. Lead Gen</div>
              <div className="text-sm text-blue-800">Finding Ideal Prospects</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">2. Outreach</div>
              <div className="text-sm text-green-800">Initial Messaging</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">3. Follow-up</div>
              <div className="text-sm text-purple-800">Booking Calls</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lead Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            1. Lead Generation – Finding Ideal Prospects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Tools & Methods</h4>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="font-medium">Lemlist</span>
                  <span className="text-gray-600 ml-2">– Extract verified contacts & setting up campaigns</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="font-medium">Apollo & Lead Scrapers</span>
                  <span className="text-gray-600 ml-2">– Extract verified contacts + decision-makers</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="font-medium">Communities</span>
                  <span className="text-gray-600 ml-2">– Join discussions, identify leads (LI, X, Slack, Discord, Skool)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Target className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="font-medium">ChatGPT + Web Search</span>
                  <span className="text-gray-600 ml-2">– Research companies, decision-makers, trends</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="font-medium">Company Websites</span>
                  <span className="text-gray-600 ml-2">– Scrape team pages, blogs, contacts</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="font-medium">Industry Directories & Events</span>
                  <span className="text-gray-600 ml-2">– Use trade shows & association lists</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Data to Capture in CRM/Airtable</h4>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Name</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Company</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Role</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Email</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>LinkedIn Profile</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Website</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded md:col-span-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Notes</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Initial Message */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-500" />
            2. Initial Message (Manual)
          </CardTitle>
          <CardDescription>Only use this for manual outreach, for full flows check the appointment setting SOP</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Template:</p>
            <div className="font-mono text-sm bg-white p-3 rounded border">
              Hey {'{name}'},<br/><br/>
              Thanks for connecting // As a {'{job title}'} at {'{company}'}, you'll likely know about {'{pain point & how that can lead to bad outcome}'} //<br/><br/>
              At Quarticle, we help people {'{get desired outcome}'}.<br/><br/>
              For example, {'{example project relevant to this prospect}'}.<br/><br/>
              Curious - have you ever thought about doing {'{XYZ}'}? // Would something like this be worth discussing for any of your projects at the moment?
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact Form Submission Template</h4>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="font-mono text-sm">
                Hey (Company name) team! This is (your name), sales representative at Locatix. We're helping geospatial companies like yours generate more sales meetings through our proven appointment setting strategies. A few examples are on our website: locatix.io.<br/><br/>
                Would anyone on the team be available later this week for this? I would love to discuss it further.
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">4 Message Variants</h4>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-green-600 mb-1">Variant 1</div>
                <div className="text-sm">Hey team! This is Dan, sales representative at Locatix. We're helping geospatial companies like yours generate more sales meetings through our proven systems. A few examples are on our website: locatix.io. Would anyone on the team be available later this week for this? I would love to discuss it further.</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-green-600 mb-1">Variant 2</div>
                <div className="text-sm">Hey team! This is Dan, sales representative at Locatix. We're helping geospatial companies like yours generate more sales meetings through our proven traffic & conversion systems. A few examples are on our website: locatix.io. Would anyone on the team be available later this week for this? I would love to discuss it further.</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-green-600 mb-1">Variant 3</div>
                <div className="text-sm">Hey team! This is Dan, sales representative at Locatix. We're helping geospatial companies like yours generate more sales meetings through our own proven build & release systems. A few examples are on our website: locatix.io. Would anyone on the team be available later this week for this? I would love to discuss it further.</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-green-600 mb-1">Variant 4 (EMS Focus)</div>
                <div className="text-sm">Hey Team, Saw you're in the route optimization technology industry as well. Many similar companies we speak with struggle to break into enterprise accounts, as sales relies mostly on founders & RFPs are tough to win. That's why I am reaching out from Locatix today - our business development agency. We help geospatial, logistics, & tech companies land enterprise deals on a consistent basis through a few proven playbooks & systems. Would you be open to a quick call this week, so our founder can walk you through what we've done for other companies in the same space?</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conversational Flow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-purple-500" />
            4. Conversational Flow with Leads
          </CardTitle>
          <CardDescription>Use this structure when engaging with leads to keep conversations natural, value-driven, and conversion-focused</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                1. Personalize the Opening
              </h4>
              <p className="text-sm text-gray-600">
                Start with a friendly, casual opener. Make it sound like a regular conversation. Avoid being overly formal or sounding like a cold pitch.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Target className="h-4 w-4 text-orange-500" />
                2. Surface Inefficiencies
              </h4>
              <p className="text-sm text-gray-600">
                Ask questions that uncover pain points or inefficiencies: What does their client acquisition look like? What's their typical deal size? How many demos are they booking right now?
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                3. Share a Resource + Ask Yes/No
              </h4>
              <p className="text-sm text-gray-600">
                Once you've uncovered a need, send a relevant resource (like from locatix.io/cases) and follow it up with a simple yes/no question to move the conversation forward.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-500" />
                4. Send Booking Link (if they say yes)
              </h4>
              <p className="text-sm text-gray-600">
                If they express interest, send your booking link to schedule a discovery or walkthrough call.
              </p>
            </div>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">Follow-up Schedule</h4>
            <div className="text-sm text-yellow-800 space-y-1">
              <div><strong>+30 minutes:</strong> "Managed to find a slot?"</div>
              <div><strong>+24 hours:</strong> "Let me know if I can help you book a moment."</div>
              <div><strong>+48 hours:</strong> Send a friendly GIF reminder.</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CRM Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-indigo-500" />
            8. CRM Tracking & Status Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-3 bg-indigo-50 rounded-lg text-center">
              <div className="font-medium text-indigo-900">Name</div>
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg text-center">
              <div className="font-medium text-indigo-900">Email</div>
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg text-center">
              <div className="font-medium text-indigo-900">LinkedIn</div>
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg text-center">
              <div className="font-medium text-indigo-900">Status</div>
              <div className="text-xs text-indigo-700 mt-1">Cold/Warm/Booked/Lost</div>
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg text-center">
              <div className="font-medium text-indigo-900">Connection Sent</div>
              <div className="text-xs text-indigo-700 mt-1">Yes/No</div>
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg text-center">
              <div className="font-medium text-indigo-900">Reached Out</div>
              <div className="text-xs text-indigo-700 mt-1">Yes/No</div>
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg text-center">
              <div className="font-medium text-indigo-900">Followed Up</div>
              <div className="text-xs text-indigo-700 mt-1">Yes/No</div>
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg text-center">
              <div className="font-medium text-indigo-900">Notes</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              TIPS TO AVOID BEING RESTRICTED
            </h4>
            <div className="space-y-2 text-sm text-red-800">
              <div><strong>EMAIL:</strong> Send messages 1 by 1, use personalized first names, avoid salesy words like "Free", "Guaranteed", "Limited time offer"</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quarterly Reactivation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-teal-500" />
            Quarterly Reactivation Campaign
          </CardTitle>
          <CardDescription>Reactivate previous prospects during quarter transitions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-900 mb-2">Timing</h4>
              <p className="text-teal-800">During months of September, December, March, June (quarterly)</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-900 mb-2">Optional Newsletter</h5>
                <p className="text-blue-800 text-sm">Send quarterly newsletter edition "Locatix Insiders?" for all previous clients & bookings, reflecting on what we did last quarter, and a soft pitch with urgency/scarcity.</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">Personal Outreach</h5>
                <p className="text-green-800 text-sm">Do personal outreach to all previous clients & bookings with urgency & scarcity.</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Outreach Template</h4>
              <div className="font-mono text-sm bg-white p-3 rounded border">
                Hey {'{name}'},<br/><br/>
                Just checking in if you're still looking for support in client acquisition.<br/><br/>
                We'll be onboarding a small set of companies in October for (Q4), so we wanted to reach out to you first - would that be worth discussing for {'{your company}'} or shall we check back in next quarter?
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}