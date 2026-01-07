'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Users, TrendingUp, DollarSign, CheckCircle, AlertTriangle, MapPin, Zap } from 'lucide-react'

export default function GTMStrategyPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-red-600 flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">GTM Strategy</h1>
              <p className="text-gray-600 text-lg">Go-to-market strategy and competitive positioning</p>
            </div>
          </div>
        </div>
        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700">Client-Specific</Badge>
      </div>

      {/* Strategy Framework */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <Target className="h-5 w-5" />
            GTM Strategy Framework
          </CardTitle>
          <CardDescription>
            Comprehensive go-to-market planning customized for each client's unique market position, competitive landscape, and growth objectives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Market Analysis</h4>
              <p className="text-red-800 text-sm">Target market size, growth trends, competitive landscape</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Positioning</h4>
              <p className="text-red-800 text-sm">Unique value proposition, messaging, and differentiation</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Channel Strategy</h4>
              <p className="text-red-800 text-sm">Sales channels, marketing mix, and customer acquisition</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Success Metrics</h4>
              <p className="text-red-800 text-sm">KPIs, ROI targets, and measurement frameworks</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            Market Analysis & Sizing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Total Addressable Market (TAM)</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">Market Size</h5>
                <p className="text-sm text-blue-800">Total market opportunity and growth projections</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">Serviceable Available Market (SAM)</h5>
                <p className="text-sm text-blue-800">Addressable portion with current capabilities</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Competitive Landscape</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">Direct Competitors</h5>
                <p className="text-sm text-gray-600">Companies offering similar solutions in the same market</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">Indirect Competitors</h5>
                <p className="text-sm text-gray-600">Alternative solutions or substitute products</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-2">Competitive Advantages</h5>
                <p className="text-sm text-gray-600">Key differentiators and market gaps to exploit</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Positioning & Messaging */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-500" />
            Positioning & Messaging
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Value Proposition</h4>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Core Value Statement</h5>
                <p className="text-sm text-green-800">Primary benefit delivered to customers</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Proof Points</h5>
                <p className="text-sm text-green-800">Evidence, case studies, and social proof</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Target Personas & Messaging</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Primary Persona</h5>
                <p className="text-sm text-green-800">Main decision-maker profile and pain points</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Secondary Personas</h5>
                <p className="text-sm text-green-800">Influencers and additional stakeholders</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Channel Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-500" />
            Channel Strategy & Tactics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Sales Channels</h4>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600 mb-1">Direct Sales</div>
                <div className="text-xs text-purple-800">Field sales, account executives</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600 mb-1">Channel Partners</div>
                <div className="text-xs text-purple-800">Resellers, integrators, consultants</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600 mb-1">Self-Service</div>
                <div className="text-xs text-purple-800">Website, product-led growth</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Marketing Channels</h4>
            <div className="grid gap-3 md:grid-cols-4">
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600 mb-1">Content Marketing</div>
                <div className="text-xs text-purple-800">Blogs, whitepapers, webinars</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600 mb-1">Paid Advertising</div>
                <div className="text-xs text-purple-800">LinkedIn, Google Ads, industry pubs</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600 mb-1">Events & PR</div>
                <div className="text-xs text-purple-800">Conferences, speaking, media</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600 mb-1">Partnerships</div>
                <div className="text-xs text-purple-800">Strategic alliances, co-marketing</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing & Packaging */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-yellow-500" />
            Pricing Strategy & Packaging
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Pricing Model</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h5 className="font-medium text-yellow-900 mb-2">Base Pricing</h5>
                <p className="text-sm text-yellow-800">Standard pricing structure and tiers</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h5 className="font-medium text-yellow-900 mb-2">Value-Based Pricing</h5>
                <p className="text-sm text-yellow-800">Pricing based on delivered value and ROI</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Service Packaging</h4>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h5 className="font-medium text-yellow-900 mb-2">Core Packages</h5>
                <p className="text-sm text-yellow-800">Standard service offerings and deliverables</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h5 className="font-medium text-yellow-900 mb-2">Add-on Services</h5>
                <p className="text-sm text-yellow-800">Optional enhancements and customizations</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Metrics & KPIs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-indigo-500" />
            Success Metrics & KPIs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Revenue Metrics</h4>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <div className="text-lg font-bold text-indigo-600 mb-1">MRR/ARR Growth</div>
                <div className="text-xs text-indigo-800">Monthly/Annual recurring revenue targets</div>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <div className="text-lg font-bold text-indigo-600 mb-1">Customer LTV</div>
                <div className="text-xs text-indigo-800">Customer lifetime value projections</div>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <div className="text-lg font-bold text-indigo-600 mb-1">CAC Payback</div>
                <div className="text-xs text-indigo-800">Customer acquisition cost recovery time</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Sales & Marketing KPIs</h4>
            <div className="grid gap-3 md:grid-cols-4">
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <div className="text-lg font-bold text-indigo-600 mb-1">Lead Velocity</div>
                <div className="text-xs text-indigo-800">Monthly qualified lead growth</div>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <div className="text-lg font-bold text-indigo-600 mb-1">Conversion Rates</div>
                <div className="text-xs text-indigo-800">Lead to customer conversion</div>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <div className="text-lg font-bold text-indigo-600 mb-1">Sales Cycle</div>
                <div className="text-xs text-indigo-800">Average deal closure time</div>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <div className="text-lg font-bold text-indigo-600 mb-1">Market Share</div>
                <div className="text-xs text-indigo-800">Target market penetration goals</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-teal-500" />
            Implementation Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="p-4 bg-teal-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">Q1</div>
                <div className="text-sm font-medium text-teal-900">Foundation</div>
                <div className="text-xs text-teal-800 mt-1">Market research, positioning, initial campaigns</div>
              </div>
              <div className="p-4 bg-teal-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">Q2</div>
                <div className="text-sm font-medium text-teal-900">Launch</div>
                <div className="text-xs text-teal-800 mt-1">Full campaign execution, sales ramp-up</div>
              </div>
              <div className="p-4 bg-teal-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">Q3</div>
                <div className="text-sm font-medium text-teal-900">Optimize</div>
                <div className="text-xs text-teal-800 mt-1">Performance analysis, channel optimization</div>
              </div>
              <div className="p-4 bg-teal-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">Q4</div>
                <div className="text-sm font-medium text-teal-900">Scale</div>
                <div className="text-xs text-teal-800 mt-1">Team expansion, process automation</div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Critical Success Factors
              </h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Regular strategy reviews and market validation</li>
                <li>• Continuous competitive intelligence monitoring</li>
                <li>• Customer feedback integration into strategy refinement</li>
                <li>• Agile adaptation based on performance data</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}