"use client"

import { useAuth } from "@/components/auth-provider"
import SuperAdminDashboard from "@/components/dashboards/superadmin-dashboard"
import BranchAdminDashboard from "@/components/dashboards/branch-admin-dashboard"
import KidpreneurDashboard from "@/components/dashboards/kidpreneur-dashboard"
import LoanManagerDashboard from "@/components/dashboards/loan-manager-dashboard"
import CheckinOfficerDashboard from "@/components/dashboards/checkin-officer-dashboard"

export default function DashboardPage() {
  const { user } = useAuth()
  console.log("user", user	)

  // Render the appropriate dashboard based on user role
  const renderDashboard = () => {
    switch (user?.role?.id) {
      case "4a8ca44c-9650-4fb6-b90e-c05fa2a88ad6": // superadmin
        return <SuperAdminDashboard />
      case "branch_admin":
        return <BranchAdminDashboard />
      case "kidpreneur":
        return <KidpreneurDashboard />
      case "loan_manager":
        return <LoanManagerDashboard />
      case "checkin_officer":
        return <CheckinOfficerDashboard />
      default:
        return <KidpreneurDashboard /> // Default dashboard
    }
  }

  return <div>{renderDashboard()}</div>
}
