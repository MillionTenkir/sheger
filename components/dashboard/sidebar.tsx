"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  BarChart3,
  Users,
  FileText,
  Settings,
  LogOut,
  Home,
  Menu,
  X,
  CreditCard,
  Calendar,
  BookOpen,
  CheckSquare,
  Building,
  UserPlus,
  Briefcase,
  DollarSign,
} from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

// Define sidebar items for different roles
const sidebarItems = {
  superadmin: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Users", href: "/dashboard/users", icon: Users },
    { name: "Branches", href: "/dashboard/branches", icon: Building },
    { name: "Reports", href: "/dashboard/reports", icon: FileText },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ],
  branch_admin: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Members", href: "/dashboard/members", icon: Users },
    { name: "Events", href: "/dashboard/events", icon: Calendar },
    { name: "Reports", href: "/dashboard/reports", icon: FileText },
    { name: "Branch Settings", href: "/dashboard/branch-settings", icon: Settings },
  ],
  kidpreneur: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Projects", href: "/dashboard/projects", icon: Briefcase },
    { name: "Learning", href: "/dashboard/learning", icon: BookOpen },
    { name: "Events", href: "/dashboard/events", icon: Calendar },
    { name: "My Profile", href: "/dashboard/profile", icon: Settings },
  ],
  loan_manager: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Loan Applications", href: "/dashboard/loan-applications", icon: FileText },
    { name: "Disbursements", href: "/dashboard/disbursements", icon: DollarSign },
    { name: "Repayments", href: "/dashboard/repayments", icon: CreditCard },
    { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  ],
  checkin_officer: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Check-ins", href: "/dashboard/checkins", icon: CheckSquare },
    { name: "Members", href: "/dashboard/members", icon: Users },
    { name: "Register New", href: "/dashboard/register", icon: UserPlus },
    { name: "Reports", href: "/dashboard/reports", icon: FileText },
  ],
}

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const { user, logout } = useAuth()
  const pathname = usePathname()

  // Default to kidpreneur if no user or role not found
  const role = user?.role || "kidpreneur"
  const items = sidebarItems[role as keyof typeof sidebarItems] || sidebarItems.kidpreneur

  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="fixed left-4 top-4 z-50 block md:hidden">
        <Button variant="outline" size="icon" onClick={() => setCollapsed(!collapsed)} className="rounded-full">
          {collapsed ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ width: "240px" }}
        animate={{ width: collapsed ? "0px" : "240px" }}
        className={`fixed inset-y-0 left-0 z-40 flex h-full flex-col border-r bg-white shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900 md:relative md:w-64 ${
          collapsed ? "md:w-20" : "md:w-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/dashboard" className="flex items-center">
            {!collapsed && <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Sheger Portal</span>}
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="hidden md:flex">
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </Button>
        </div>

        {/* User info */}
        <div className="flex flex-col items-center p-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg" alt={user?.firstName || "User"} />
            <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              {user?.firstName?.[0]}
              {user?.lastName?.[0]}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="mt-2 text-center">
              <p className="font-medium">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {role.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </p>
            </div>
          )}
        </div>

        <Separator className="my-2" />

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-2 py-4">
          {items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-orange-500 dark:bg-gray-800 dark:text-orange-400"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                }`}
              >
                <item.icon className={`mr-3 h-5 w-5 ${collapsed ? "mr-0" : "mr-3"}`} />
                {!collapsed && <span>{item.name}</span>}
                {isActive && !collapsed && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="ml-auto h-2 w-2 rounded-full bg-orange-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Logout button */}
        <div className="border-t p-4 dark:border-gray-800">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600 dark:text-red-400 dark:hover:bg-gray-800"
            onClick={logout}
          >
            <LogOut className={`mr-3 h-5 w-5 ${collapsed ? "mr-0" : "mr-3"}`} />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </motion.div>
    </>
  )
}
