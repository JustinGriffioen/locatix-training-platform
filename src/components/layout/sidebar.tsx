'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Users,
  Code,
  PenTool,
  BookOpen,
  CheckSquare,
  Calendar,
  BarChart3,
  Home
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { LocatixLogo } from './locatix-logo'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  {
    name: 'SDR/BDR Training',
    href: '/sdr-bdr',
    icon: Users,
    subItems: [
      { name: 'Onboarding', href: '/sdr-bdr/onboarding' },
      { name: 'HPP & ABM', href: '/sdr-bdr/hpp-abm' },
      { name: 'Prospecting', href: '/sdr-bdr/prospecting' },
      { name: 'List Building', href: '/sdr-bdr/list-building' },
      { name: 'Outreach', href: '/sdr-bdr/outreach' },
      { name: 'Appointment Setting', href: '/sdr-bdr/appointment-setting' },
      { name: 'Closing Fundamentals', href: '/sdr-bdr/closing-fundamentals' },
      { name: 'Recurring Training', href: '/sdr-bdr/recurring' },
    ]
  },
  {
    name: 'Web Development',
    href: '/webdev',
    icon: Code,
    subItems: [
      { name: 'Onboarding', href: '/webdev/onboarding' },
      { name: 'Next.js', href: '/webdev/nextjs' },
      { name: 'Cursor', href: '/webdev/cursor' },
      { name: 'Git', href: '/webdev/git' },
      { name: 'Vercel', href: '/webdev/vercel' },
      { name: 'Backend & Environment', href: '/webdev/backend' },
      { name: 'Deployments', href: '/webdev/deployments' },
      { name: 'Domains & SEO', href: '/webdev/domains-seo' },
      { name: 'Recurring Training', href: '/webdev/recurring' },
    ]
  },
  {
    name: 'Content Marketing',
    href: '/content',
    icon: PenTool,
    subItems: [
      { name: 'Onboarding', href: '/content/onboarding' },
      { name: 'Funnel Thinking', href: '/content/funnel-thinking' },
      { name: 'Copywriting', href: '/content/copywriting' },
      { name: 'Sales Assets', href: '/content/sales-assets' },
      { name: 'Video Creation', href: '/content/video' },
      { name: 'CMS Integration', href: '/content/cms-integration' },
      { name: 'Distribution', href: '/content/posting' },
      { name: 'Recurring Training', href: '/content/recurring' },
    ]
  },
  { name: 'SOPs & Timetable', href: '/sops', icon: CheckSquare },
  { name: 'Schedule', href: '/schedule', icon: Calendar },
  { name: 'Progress', href: '/progress', icon: BarChart3 },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200 text-gray-900">
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <div className="flex items-center gap-3">
          <LocatixLogo size={32} />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-black">Locatix</h1>
            <p className="text-xs text-gray-600 font-medium">Academy</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const hasActiveSubItem = item.subItems?.some(subItem => pathname === subItem.href)

          return (
            <div key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  'group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive || hasActiveSubItem
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>

              {item.subItems && (isActive || hasActiveSubItem) && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className={cn(
                        'block rounded-lg px-3 py-1.5 text-sm transition-colors',
                        pathname === subItem.href
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                      )}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}