'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Eye, Heart, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export default function MissionVisionPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-purple-500 flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Mission & Vision</h1>
              <p className="text-gray-600 text-lg">Our purpose, values, and strategic direction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-purple-500" />
            Mission
          </CardTitle>
          <CardDescription>Why Locatix exists and what we aim to achieve</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg text-gray-700 leading-relaxed">
            Locatix was founded to bridge the gap between powerful geospatial technologies and effective marketing execution. We saw that many geospatial software companies had excellent products, but often lacked the marketing knowledge & systems to scale. Combining industry knowledge with performance marketing expertise, Locatix helps geospatial businesses grow faster with smarter outreach, better positioning, and scalable client acquisition.
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Origin Story</h4>
            <p className="text-purple-800">
              We identified a critical market gap: geospatial companies excel at technology but struggle with marketing execution. Our solution combines deep industry expertise with proven growth systems to accelerate client acquisition and revenue scaling.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Core Beliefs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Core Beliefs
          </CardTitle>
          <CardDescription>The fundamental principles that guide our work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-medium">Discipline &gt; Motivation</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-medium">Autonomy &gt; Security</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-medium">Execution &gt; Perfection</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-medium">Leverage & Scale &gt; Hard Work</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-medium">Direct Results &gt; Vanity Metrics</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What We Avoid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-500" />
            What We Avoid
          </CardTitle>
          <CardDescription>Common pitfalls and inefficient practices we steer clear of</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <span>Inefficient marketing systems</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <span>Time-wasting meetings & bureaucracy</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <span>Leads that don't convert</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <span>Unscalable workflows</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <span>Fluff over substance</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strengths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Strengths
          </CardTitle>
          <CardDescription>What we do exceptionally well</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Industry-Specific Marketing Expertise</h4>
              <p className="text-green-800">Deep knowledge of geospatial & location tech markets</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Proven Systems</h4>
              <p className="text-green-800">Tested frameworks for outbound, content, and lead conversion</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Fast Execution</h4>
              <p className="text-green-800">Measurable results on outbound with high-quality delivery</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Technical Buyer Understanding</h4>
              <p className="text-green-800">Expertise in GIS, remote sensing, and location analytics buyers</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vision */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-500" />
            Vision
          </CardTitle>
          <CardDescription>Our strategic direction and long-term goals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Strategy</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Reach out to geospatial & B2B/B2G software clients who sell enterprise level software at an ACV of $50k+</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Sell them Build & Release Growth Infrastructures for Account-based marketing (shorter term), Tender support (longer term), Build a DIY AI-powered platform for both (longest term)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Help each generate an additional $1M revenue each year</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Service Delivery for Growth Infrastructures</h4>
            <p className="text-gray-600 italic">Comprehensive growth solutions framework to be developed</p>
          </div>
        </CardContent>
      </Card>

      {/* Flaws We're Fixing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Flaws We're Fixing
          </CardTitle>
          <CardDescription>Areas we're actively improving</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <span>Always improving communication clarity</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <span>Avoiding over-optimization—done is better than perfect</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <span>Streamlining processes to serve more clients, faster</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}