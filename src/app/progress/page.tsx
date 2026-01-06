'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BarChart3, TrendingUp, Award, Target, Users, Code, PenTool, CheckCircle } from 'lucide-react'

const teamProgress = [
  {
    name: 'Sarah Johnson',
    role: 'SDR/BDR',
    avatar: 'SJ',
    progress: 85,
    completedModules: 6,
    totalModules: 7,
    lastActivity: '2 hours ago',
    streak: 12
  },
  {
    name: 'Mike Chen',
    role: 'Web Developer',
    avatar: 'MC',
    progress: 70,
    completedModules: 3,
    totalModules: 8,
    lastActivity: '1 day ago',
    streak: 8
  },
  {
    name: 'Emma Davis',
    role: 'Content Marketing',
    avatar: 'ED',
    progress: 60,
    completedModules: 4,
    totalModules: 8,
    lastActivity: '3 hours ago',
    streak: 15
  },
  {
    name: 'Alex Rodriguez',
    role: 'Content Marketing',
    avatar: 'AR',
    progress: 45,
    completedModules: 3,
    totalModules: 8,
    lastActivity: '1 week ago',
    streak: 0
  }
]

const moduleStats = [
  { name: 'SDR/BDR Training', completed: 6, total: 7, color: 'bg-blue-500' },
  { name: 'Web Development', completed: 3, total: 8, color: 'bg-green-500' },
  { name: 'Content Marketing', completed: 7, total: 16, color: 'bg-purple-500' }
]

export default function ProgressPage() {
  const overallProgress = Math.round(
    moduleStats.reduce((acc, stat) => acc + (stat.completed / stat.total), 0) / moduleStats.length * 100
  )

  const totalTeamMembers = teamProgress.length
  const activeMembers = teamProgress.filter(member => member.streak > 0).length
  const avgProgress = Math.round(teamProgress.reduce((sum, member) => sum + member.progress, 0) / teamProgress.length)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
          <BarChart3 className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-black tracking-tight">Training Progress</h1>
          <p className="text-gray-600 text-lg">Team performance and completion analytics</p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-black" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-black">{overallProgress}%</div>
            <p className="text-sm text-gray-600">Course completion</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-black" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-black">{totalTeamMembers}</div>
            <p className="text-sm text-gray-600">{activeMembers} active this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-black" />
              Average Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-black">{avgProgress}%</div>
            <p className="text-sm text-gray-600">Team average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5 text-black" />
              Top Performer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-black">Sarah J.</div>
            <p className="text-sm text-gray-600">12 day streak</p>
          </CardContent>
        </Card>
      </div>

      {/* Module Completion Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Module Completion Overview</CardTitle>
          <CardDescription>Progress across all training modules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {moduleStats.map((module) => {
              const percentage = Math.round((module.completed / module.total) * 100)
              return (
                <div key={module.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-black">{module.name}</span>
                    <span className="text-sm text-gray-600">{module.completed}/{module.total} completed</span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Team Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Team Progress</CardTitle>
          <CardDescription>Individual team member completion status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamProgress.map((member) => (
              <div key={member.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-semibold">
                    {member.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{member.name}</div>
                    <div className="text-sm text-gray-600">{member.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-semibold text-black">{member.progress}%</div>
                    <div className="text-sm text-gray-600">{member.completedModules}/{member.totalModules} modules</div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-600">Last active</div>
                    <div className="font-medium text-black">{member.lastActivity}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={member.streak > 0 ? "default" : "outline"}>
                      🔥 {member.streak}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Management</CardTitle>
          <CardDescription>Tools for tracking and improving team progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <BarChart3 className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Detailed Reports</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Users className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Team Analytics</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Award className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Certificates</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Target className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Goals & Targets</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}