'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Users, Code, PenTool, Video, CheckCircle, AlertCircle } from 'lucide-react'

const scheduleItems = [
  {
    id: 1,
    title: 'Weekly SDR Outreach Review',
    type: 'recurring',
    category: 'sdr',
    date: 'Today',
    time: '2:00 PM - 3:00 PM',
    location: 'Virtual',
    instructor: 'Sarah Johnson',
    status: 'upcoming',
    attendees: 8,
    description: 'Review this week\'s outreach performance and optimize messaging'
  },
  {
    id: 2,
    title: 'Git Best Practices Workshop',
    type: 'training',
    category: 'webdev',
    date: 'Tomorrow',
    time: '10:00 AM - 11:30 AM',
    location: 'Conference Room A',
    instructor: 'Mike Chen',
    status: 'upcoming',
    attendees: 12,
    description: 'Advanced Git workflows and collaboration techniques'
  },
  {
    id: 3,
    title: 'Content Calendar Planning',
    type: 'planning',
    category: 'content',
    date: 'Friday',
    time: '3:00 PM - 4:00 PM',
    location: 'Virtual',
    instructor: 'Emma Davis',
    status: 'upcoming',
    attendees: 6,
    description: 'Plan next month\'s content strategy and assign responsibilities'
  },
  {
    id: 4,
    title: 'Monthly Team Standup',
    type: 'meeting',
    category: 'all',
    date: 'Next Monday',
    time: '9:00 AM - 10:00 AM',
    location: 'Main Conference Room',
    instructor: 'Team Leads',
    status: 'scheduled',
    attendees: 25,
    description: 'Monthly alignment meeting for all teams'
  },
  {
    id: 5,
    title: 'Video Production Training',
    type: 'training',
    category: 'content',
    date: 'Next Tuesday',
    time: '1:00 PM - 3:00 PM',
    location: 'Studio',
    instructor: 'Alex Rodriguez',
    status: 'scheduled',
    attendees: 4,
    description: 'Hands-on video production workshop'
  },
  {
    id: 6,
    title: 'Code Review Session',
    type: 'recurring',
    category: 'webdev',
    date: 'Next Wednesday',
    time: '11:00 AM - 12:00 PM',
    location: 'Virtual',
    instructor: 'Dev Team',
    status: 'scheduled',
    attendees: 8,
    description: 'Weekly code review and feedback session'
  }
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'sdr': return Users
    case 'webdev': return Code
    case 'content': return PenTool
    default: return Calendar
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'sdr': return 'bg-blue-500'
    case 'webdev': return 'bg-green-500'
    case 'content': return 'bg-purple-500'
    default: return 'bg-gray-500'
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'upcoming':
      return <Badge className="bg-orange-100 text-orange-800">Upcoming</Badge>
    case 'scheduled':
      return <Badge variant="outline">Scheduled</Badge>
    case 'completed':
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function SchedulePage() {
  const todaySessions = scheduleItems.filter(item => item.date === 'Today')
  const thisWeekSessions = scheduleItems.filter(item => ['Tomorrow', 'Friday'].includes(item.date))
  const nextWeekSessions = scheduleItems.filter(item => item.date.includes('Next'))

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black tracking-tight">Training Schedule</h1>
              <p className="text-gray-600 text-lg">Upcoming training sessions and deadlines</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
            <Calendar className="h-4 w-4" />
            {scheduleItems.length} Sessions
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
            <Calendar className="h-4 w-4" />
            {scheduleItems.length} Sessions
          </Badge>
        </div>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            Today
          </CardTitle>
          <CardDescription>Your schedule for today</CardDescription>
        </CardHeader>
        <CardContent>
          {todaySessions.length > 0 ? (
            <div className="space-y-4">
              {todaySessions.map((item) => {
                const Icon = getCategoryIcon(item.category)
                return (
                  <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50">
                    <div className={`p-2 rounded-lg ${getCategoryColor(item.category)}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {getStatusBadge(item.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.time}
                        </span>
                        <span>{item.location}</span>
                        <span>{item.attendees} attendees</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Scheduled</Badge>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No sessions scheduled for today</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* This Week */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            This Week
          </CardTitle>
          <CardDescription>Remaining sessions this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {thisWeekSessions.map((item) => {
              const Icon = getCategoryIcon(item.category)
              return (
                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className={`p-2 rounded-lg ${getCategoryColor(item.category)}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <Badge variant="outline">{item.date}</Badge>
                      {getStatusBadge(item.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </span>
                      <span>{item.location}</span>
                      <span>{item.attendees} attendees</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Instructor: {item.instructor}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Available</Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Next Week */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-500" />
            Next Week
          </CardTitle>
          <CardDescription>Upcoming training sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {nextWeekSessions.map((item) => {
              const Icon = getCategoryIcon(item.category)
              return (
                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className={`p-2 rounded-lg ${getCategoryColor(item.category)}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <Badge variant="outline">{item.date}</Badge>
                      {getStatusBadge(item.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </span>
                      <span>{item.location}</span>
                      <span>{item.attendees} attendees</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Instructor: {item.instructor}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Available</Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Schedule Management</CardTitle>
          <CardDescription>Tools for managing your training schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Calendar className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Sync Calendar</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Clock className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Set Reminders</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <Users className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Team Schedule</span>
            </div>
            <div className="h-auto p-4 flex flex-col items-center gap-2 text-center border rounded-lg">
              <CheckCircle className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Attendance</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}