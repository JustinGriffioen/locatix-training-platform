'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, MapPin, Users, Brain, DollarSign, TrendingUp } from 'lucide-react'

export default function IcpMappingPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-green-500 flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">ICP Mapping</h1>
              <p className="text-gray-600 text-lg">Ideal Customer Profile for Locatix</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <Card className="border-gray-200 bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Target className="h-5 w-5" />
            Ideal Customer Profile: Locatix
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-800">
            Our ideal customers are enterprise-level geospatial software companies seeking to accelerate their growth through proven marketing and sales systems. They value data-driven results, performance-based pricing, and strategic partnerships over ad-hoc marketing tactics.
          </p>
        </CardContent>
      </Card>

      {/* Geographic */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            1. Geographic
          </CardTitle>
          <CardDescription>Target markets and regions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">North America</h4>
              <p className="text-gray-700">≈ 60% of enterprise GIS spend</p>
              <Badge className="mt-2 bg-gray-200 text-gray-800">Primary Market</Badge>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Europe</h4>
              <p className="text-gray-700">≈ 25% market share</p>
              <Badge className="mt-2 bg-gray-200 text-gray-800">Secondary Market</Badge>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Gulf States</h4>
              <p className="text-gray-700">Rapid smart-city adoption</p>
              <Badge className="mt-2 bg-gray-200 text-gray-800">Emerging Market</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Demographic */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-500" />
            2. Demographic
          </CardTitle>
          <CardDescription>Company characteristics and verticals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Verticals</h4>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span>Geospatial & location-analytics SaaS</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span>Insurtech leveraging spatial data</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span>Logistics & supply-chain optimization</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span>Asset-management platforms</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Company Size & Value</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Employee Range</h5>
                <p className="text-gray-700">10–500 employees (can also be a department)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Annual Contract Value</h5>
                <p className="text-gray-700">ACV ≥ $50K</p>
                <Badge className="mt-2 bg-gray-200 text-gray-800">Enterprise Focus</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Psychographic */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-orange-500" />
            3. Psychographic
          </CardTitle>
          <CardDescription>Mindset, behaviors, and decision-making patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Key Roles</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-1">Decision-makers</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• CEO, VP/Head of Sales or Marketing</li>
                </ul>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-1">Technical Champions</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• CTO/CPO</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Mindset & KPIs</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Data-driven:</span>
                  <span className="text-gray-700 ml-1">demands A/B testing, ≥ 10% outbound reply rate, ≥ 1% meeting rate</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Users className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Partnership-oriented:</span>
                  <span className="text-gray-700 ml-1">prefers performance-based fees (5% ACV on outbound; 10–15% on demos/closures)</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <DollarSign className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Complex enterprise deals:</span>
                  <span className="text-gray-700 ml-1">align with Locatix's specialization in seven-figure pipelines. Their integration and onboarding challenges match Locatix's demo-and-close expertise.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Target className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Scalability focus:</span>
                  <span className="text-gray-700 ml-1">seeks repeatable, process-driven growth over ad-hoc tactics.</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card className="border-gray-200 bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Target className="h-5 w-5" />
            Key ICP Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Market Maturity</h4>
              <p className="text-gray-700 text-sm">
                These companies understand their market deeply but struggle with marketing execution. They need proven systems, not experimentation.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Buying Behavior</h4>
              <p className="text-gray-700 text-sm">
                Enterprise buyers in this space require extensive validation, case studies, and proof of ROI before committing to marketing partnerships.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Decision Timeline</h4>
              <p className="text-gray-700 text-sm">
                Enterprise deals typically take 3-6 months from initial contact to close, requiring persistent, value-driven follow-up.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Success Metrics</h4>
              <p className="text-gray-700 text-sm">
                Focus on qualified meetings booked, pipeline generated, and revenue impact rather than vanity metrics like impressions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}