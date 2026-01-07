'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PenTool, Target, MessageSquare, FileText, Users, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react'

export default function ContentDevPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-pink-500 flex items-center justify-center">
              <PenTool className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Content Development</h1>
              <p className="text-gray-600 text-lg">Strategic content creation and production workflows</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Strategy Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Content & Funnel Strategy</CardTitle>
          <CardDescription>
            Top-of-funnel content focuses on awareness and education, while conversion assets drive qualified leads
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Top-of-Funnel Content</h4>
              <p className="text-blue-800 text-sm">
                SEO-focused content, social media posts, blogs, and educational materials that build awareness and attract potential customers.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Conversion Assets (Middle-of-Funnel)</h4>
              <p className="text-green-800 text-sm">
                Lead magnets, whitepapers, webinars, and gated content that convert awareness into qualified leads and sales opportunities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Software Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Software Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <PenTool className="h-5 w-5 text-pink-500" />
              <div>
                <span className="font-medium">WePost</span>
                <span className="text-gray-600 ml-2">– Content creation & scheduling</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <FileText className="h-5 w-5 text-blue-500" />
              <div>
                <span className="font-medium">Canva</span>
                <span className="text-gray-600 ml-2">– Content creation & design work</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Users className="h-5 w-5 text-purple-500" />
              <div>
                <span className="font-medium">LinkedIn</span>
                <span className="text-gray-600 ml-2">– Engagement & scheduling backup</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CX Marketing Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-500" />
            Customer Experience (CX) Marketing
          </CardTitle>
          <CardDescription>Improving client experience and generating testimonials</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Goal</h4>
            <p className="text-gray-700">
              Improve client's customer experience and generate testimonials, reviews, and content for marketing and lead generation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h5 className="font-semibold text-indigo-900 mb-2">1. Discovery & Audit</h5>
              <ul className="text-sm text-indigo-800 space-y-1">
                <li>• Align on target personas</li>
                <li>• Review existing CX touchpoints</li>
                <li>• Audit current testimonials</li>
                <li>• Analyze competitor reviews</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h5 className="font-semibold text-blue-900 mb-2">2. Testimonial System Setup</h5>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Integrate WePost API</li>
                <li>• Define triggers</li>
                <li>• Create request templates</li>
                <li>• Set up reminders</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h5 className="font-semibold text-green-900 mb-2">3. Client Interviews</h5>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Identify top 3-5 customers</li>
                <li>• Schedule interviews</li>
                <li>• Create case studies</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h5 className="font-semibold text-purple-900 mb-2">4. Content Creation</h5>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Repurpose testimonials</li>
                <li>• Create quote graphics</li>
                <li>• Turn interviews into content</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Copywriting Frameworks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-orange-500" />
            Copywriting Frameworks
          </CardTitle>
          <CardDescription>Proven frameworks for creating consistently high-performing content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Content Styles</h4>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <h5 className="font-semibold text-orange-900 mb-1">Inspire</h5>
                <p className="text-sm text-orange-800">Encourage action or shift in thinking. Use uplifting language, positive emotion, future-focused benefits.</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-900 mb-1">Rival</h5>
                <p className="text-sm text-red-800">Tap into frustration or competition. Challenge status quo, offer better way.</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-900 mb-1">Guide</h5>
                <p className="text-sm text-blue-800">Offer clarity and direction. Perfect for checklists, how-tos, expert advice.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Building Blocks</h4>
            <div className="grid gap-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <span className="font-medium text-gray-900">Pains</span>
                  <span className="text-gray-700 ml-1">– What audience wants to avoid or fix</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <span className="font-medium text-gray-900">Desires</span>
                  <span className="text-gray-700 ml-1">– What they want more of (success, clarity, growth)</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <span className="font-medium text-gray-900">Trust</span>
                  <span className="text-gray-700 ml-1">– What makes them believe you (results, proof, credibility)</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Structure Frameworks</h4>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">AIDA</h5>
                <p className="text-sm text-green-800">Attention, Interest, Desire, Action. Best for ads, emails, conversion-focused content.</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-900 mb-2">PAS</h5>
                <p className="text-sm text-red-800">Problem, Agitation, Solution. Ideal for short-form content with emotional pull.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-purple-900 mb-2">PPPP</h5>
                <p className="text-sm text-purple-800">Picture, Promise, Prove, Push. Great for persuasive storytelling.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">SUCCES (Made to Stick)</h4>
            <p className="text-yellow-800 text-sm mb-2">Always aim for at least 3 elements:</p>
            <ul className="text-sm text-yellow-800 space-y-1 ml-4">
              <li>• <strong>Simple</strong> – Focus on 1 clear idea</li>
              <li>• <strong>Unexpected</strong> – Hook or plot twist with contrast/surprise</li>
              <li>• <strong>Concrete</strong> – Use real examples, facts</li>
              <li>• <strong>Credible</strong> – Add proof, results, quotes</li>
              <li>• <strong>Emotional</strong> – Speak to pains or dreams</li>
              <li>• <strong>Story</strong> – Wrap it in a short story if possible</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Content Creation Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PenTool className="h-5 w-5 text-teal-500" />
            Content Creation Process (WePost)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-3 bg-teal-50 rounded-lg text-center">
                <div className="text-lg font-bold text-teal-600 mb-1">1</div>
                <div className="text-sm text-teal-800">Choose goal + framework</div>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg text-center">
                <div className="text-lg font-bold text-teal-600 mb-1">2</div>
                <div className="text-sm text-teal-800">Write copy in WePost (with AI help)</div>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg text-center">
                <div className="text-lg font-bold text-teal-600 mb-1">3</div>
                <div className="text-sm text-teal-800">Add image from uploads</div>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg text-center">
                <div className="text-lg font-bold text-teal-600 mb-1">4</div>
                <div className="text-sm text-teal-800">Schedule or post</div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Key Elements for Every Post</h4>
              <ul className="text-sm space-y-1">
                <li>• <strong>Hook</strong> = first 1-2 lines = strong callout (ICP, tangible problem or outcome)</li>
                <li>• Clear <strong>CTA</strong> (comment, DM, click, etc.)</li>
                <li>• Image(s) fits the message</li>
                <li>• Caption final + filename set</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Branding for Founders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-500" />
            Personal Branding (For Founders)
          </CardTitle>
          <CardDescription>When ghostwriting for personal brands, ensure posts hit key pillars</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Authenticity</h4>
              <p className="text-indigo-800 text-sm">Personal touch – share real experiences, challenges overcome</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Authority</h4>
              <p className="text-indigo-800 text-sm">Give value & information – position as industry expert</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Proof</h4>
              <p className="text-indigo-800 text-sm">Social proof & results – case studies, metrics, testimonials</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}