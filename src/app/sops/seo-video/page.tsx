'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, PlayCircle, TrendingUp, Search, Video, CheckCircle, AlertTriangle } from 'lucide-react'

export default function SeoVideoPage() {
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
              <h1 className="text-4xl font-bold text-black tracking-tight">SEO & Video Production</h1>
              <p className="text-gray-600 text-lg">Search optimization and promotional video creation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Videos Matter */}
      <Card className="border-indigo-200 bg-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-900">
            <Video className="h-5 w-5" />
            Why Videos Matter for Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">80-85% Conversion Lift</h4>
              <p className="text-indigo-800 text-sm">Videos increase landing page conversion rates dramatically</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">Trust & Credibility</h4>
              <p className="text-indigo-800 text-sm">Build social proof and demonstrate expertise</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">Multi-Channel Reuse</h4>
              <p className="text-indigo-800 text-sm">Repurpose clips across social media and marketing assets</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">Evergreen Content</h4>
              <p className="text-indigo-800 text-sm">Timeless videos that continue generating leads</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-blue-500" />
            SEO Strategy & Implementation
          </CardTitle>
          <CardDescription>Long-term search engine optimization using SEMrush</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">SEMrush Project Setup</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <span className="font-medium">Create Project</span>
                  <p className="text-sm text-blue-800 mt-1">Navigate to SEMrush Projects → Create Project → Enter website URL</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <span className="font-medium">Enable Position Tracking</span>
                  <p className="text-sm text-green-800 mt-1">Set up tracking for primary keywords, daily updates, target location and devices</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <span className="font-medium">Competitor Research</span>
                  <p className="text-sm text-orange-800 mt-1">Use Organic Research → Competitors to identify top competitors and shared keywords</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Keyword Research Process</h4>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-purple-900 mb-2">Keyword Gap Tool</h5>
                <p className="text-sm text-purple-800">Input domain and competitor domains, filter for missing and shared keywords</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h5 className="font-semibold text-indigo-900 mb-2">Keyword Magic Tool</h5>
                <p className="text-sm text-indigo-800">Enter primary keywords, analyze search volume, difficulty, and CPC</p>
              </div>
              <div className="p-4 bg-teal-50 rounded-lg">
                <h5 className="font-semibold text-teal-900 mb-2">Strategy Builder</h5>
                <p className="text-sm text-teal-800">Import keywords, categorize into clusters, identify high-opportunity content</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Creation from Keywords */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Content Creation from SEO Research
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <div className="text-lg font-bold text-green-600 mb-1">1</div>
                <div className="text-sm text-green-800">Integrate targeted keywords into content</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <div className="text-lg font-bold text-green-600 mb-1">2</div>
                <div className="text-sm text-green-800">Create dedicated landing pages</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <div className="text-lg font-bold text-green-600 mb-1">3</div>
                <div className="text-sm text-green-800">Use proper H1, H2, structured headings</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <div className="text-lg font-bold text-green-600 mb-1">4</div>
                <div className="text-sm text-green-800">Optimize for readability and SEO best practices</div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">SEMrush Content Assistant</h4>
              <p className="text-yellow-800 text-sm">
                Use the content writer assistant (Pro plan) to optimize content for target keywords, improve readability, and enhance SEO performance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Production Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-red-500" />
            Video Production SOP
          </CardTitle>
          <CardDescription>10-step process for creating high-converting promotional videos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="p-3 bg-red-50 rounded-lg text-center">
              <div className="text-xl font-bold text-red-600 mb-1">1</div>
              <div className="text-sm text-red-800">Schedule scripting call with client</div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg text-center">
              <div className="text-xl font-bold text-red-600 mb-1">2</div>
              <div className="text-sm text-red-800">Research client website and assets</div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg text-center">
              <div className="text-xl font-bold text-red-600 mb-1">3</div>
              <div className="text-sm text-red-800">Co-create storyline using STP & ICP</div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg text-center">
              <div className="text-xl font-bold text-red-600 mb-1">4</div>
              <div className="text-sm text-red-800">Create storyboard in Canva</div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg text-center">
              <div className="text-xl font-bold text-red-600 mb-1">5</div>
              <div className="text-sm text-red-800">Send draft to client for review</div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="p-3 bg-blue-50 rounded-lg text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">6</div>
              <div className="text-sm text-blue-800">Make v1 with animations</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">7</div>
              <div className="text-sm text-blue-800">Send draft 2 for iteration</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">8</div>
              <div className="text-sm text-blue-800">Add final animations</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">9</div>
              <div className="text-sm text-blue-800">Send final draft for approval</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">10</div>
              <div className="text-sm text-blue-800">Deliver video in requested format</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-purple-500" />
            Video Content Types
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Product Videos</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Demo videos showcasing solutions</li>
                <li>• Explainer videos for complex features</li>
                <li>• Case study videos with client testimonials</li>
                <li>• Tutorial videos for user onboarding</li>
              </ul>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Promotional Videos</h4>
              <ul className="text-sm text-indigo-800 space-y-1">
                <li>• Company overview and value proposition</li>
                <li>• Service explanation videos</li>
                <li>• Team introduction videos</li>
                <li>• Industry thought leadership content</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            SEO & Video Success Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">SEO Metrics</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Keyword ranking improvements (target: top 10 positions)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Organic traffic growth (target: 20-50% increase)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Conversion rate improvements from SEO pages
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Domain authority and backlink growth
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Video Metrics</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  View-through rate (target: 70%+ completion)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Conversion lift on landing pages (target: 80-85%)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Social shares and engagement rates
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Lead generation from video content
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools & Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            Tools & Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">SEO Tools</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• SEMrush (primary)</li>
                <li>• Ahrefs</li>
                <li>• Google Search Console</li>
                <li>• Google Analytics</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Video Production</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Canva (storyboarding)</li>
                <li>• Adobe Premiere/CapCut</li>
                <li>• Stock footage libraries</li>
                <li>• Voice-over artists</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Content Creation</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Jasper/ChatGPT</li>
                <li>• Descript (editing)</li>
                <li>• Epidemic Sound</li>
                <li>• Pexels/Unsplash</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Analytics</h4>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Google Analytics 4</li>
                <li>• Hotjar recordings</li>
                <li>• YouTube Analytics</li>
                <li>• Social media insights</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}