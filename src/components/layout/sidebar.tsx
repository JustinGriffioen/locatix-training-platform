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
  Home,
  Headphones
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { LocatixLogo } from './locatix-logo'

const navigation = [
  // Dashboard
  { name: 'Dashboard', href: '/', icon: Home },

  // Training Modules Section
  {
    name: '🚀 Training Modules',
    href: '#',
    icon: BookOpen,
    subItems: [
      { name: 'SDR/BDR Training', href: '/sdr-bdr' },
      { name: 'Content Marketing', href: '/content' },
      { name: 'Web Development', href: '/webdev' },
      { name: 'Client Services', href: '/client-services' },
    ]
  },

  // Agency SOPs Section
  {
    name: '📋 Agency SOPs',
    href: '#',
    icon: CheckSquare,
    subItems: [
      { name: 'ICP Mapping & CRM Ops', href: '/sops/icp-crm' },
      { name: 'Sales Scripts & GTM', href: '/sops/sales-gtm' },
      { name: 'Content Development', href: '/sops/content-dev' },
      { name: 'SEO & Video Production', href: '/sops/seo-video' },
      { name: 'Webinar Management', href: '/sops/webinars' },
      { name: 'VA Operations', href: '/sops/va-ops' },
      { name: 'Schedules & HR', href: '/sops/schedules-hr' },
    ]
  },

  // Client Workspaces Section
  {
    name: '🏢 Client Workspaces',
    href: '#',
    icon: Users,
    subItems: [
      { name: 'Client Templates', href: '/clients/templates' },
      { name: 'Active Projects', href: '/clients/projects' },
      { name: 'Custom GTM Strategies', href: '/clients/gtm-strategies' },
      { name: 'ICP Prospecting Guides', href: '/clients/icp-guides' },
      { name: 'Tender SOPs', href: '/clients/tenders' },
    ]
  },

  // Tools & Analytics
  {
    name: '📊 Analytics & Tools',
    href: '#',
    icon: BarChart3,
    subItems: [
      { name: 'Team Progress', href: '/progress' },
      { name: 'Schedule & Planning', href: '/schedule' },
      { name: 'Performance Metrics', href: '/analytics/metrics' },
    ]
  },
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