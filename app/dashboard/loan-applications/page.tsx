"use client"

import { useState } from "react"
import { Plus, Search, Filter, MoreHorizontal, Eye, Download, CheckCircle, XCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock loan application data
const loanApplications = [
  {
    id: "LA-1001",
    applicant: "Michael Brown",
    email: "michael@example.com",
    amount: 5000,
    purpose: "Business Expansion",
    status: "approved",
    submittedDate: "May 5, 2025",
    reviewedDate: "May 8, 2025",
    reviewedBy: "Emily Davis",
  },
  {
    id: "LA-1002",
    applicant: "Sarah Johnson",
    email: "sarah@example.com",
    amount: 3000,
    purpose: "Equipment Purchase",
    status: "pending",
    submittedDate: "May 7, 2025",
    reviewedDate: "",
    reviewedBy: "",
  },
  {
    id: "LA-1003",
    applicant: "David Wilson",
    email: "david@example.com",
    amount: 7500,
    purpose: "Working Capital",
    status: "pending",
    submittedDate: "May 8, 2025",
    reviewedDate: "",
    reviewedBy: "",
  },
  {
    id: "LA-1004",
    applicant: "Jennifer Anderson",
    email: "jennifer@example.com",
    amount: 2000,
    purpose: "Inventory",
    status: "rejected",
    submittedDate: "May 3, 2025",
    reviewedDate: "May 6, 2025",
    reviewedBy: "Emily Davis",
  },
  {
    id: "LA-1005",
    applicant: "Robert Taylor",
    email: "robert@example.com",
    amount: 10000,
    purpose: "Business Startup",
    status: "approved",
    submittedDate: "May 1, 2025",
    reviewedDate: "May 4, 2025",
    reviewedBy: "Emily Davis",
  },
  {
    id: "LA-1006",
    applicant: "Lisa Martinez",
    email: "lisa@example.com",
    amount: 4500,
    purpose: "Marketing Campaign",
    status: "pending",
    submittedDate: "May 9, 2025",
    reviewedDate: "",
    reviewedBy: "",
  },
  {
    id: "LA-1007",
    applicant: "James Johnson",
    email: "james@example.com",
    amount: 6000,
    purpose: "Equipment Upgrade",
    status: "pending",
    submittedDate: "May 10, 2025",
    reviewedDate: "",
    reviewedBy: "",
  },
]

export default function LoanApplicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [purposeFilter, setPurposeFilter] = useState("all")
  const [isNewApplicationOpen, setIsNewApplicationOpen] = useState(false)

  // Filter applications based on search term and filters
  const filteredApplications = loanApplications.filter((application) => {
    const matchesSearch =
      application.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || application.status === statusFilter
    const matchesPurpose = purposeFilter === "all" || application.purpose === purposeFilter

    return matchesSearch && matchesStatus && matchesPurpose
  })

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200">
            <CheckCircle className="mr-1 h-3 w-3" /> Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge className="bg-red-100 text-red-800 border-red-200">
            <XCircle className="mr-1 h-3 w-3" /> Rejected
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
            <Clock className="mr-1 h-3 w-3" /> Pending
          </Badge>
        )
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">{status}</Badge>
    }
  }

  // Get unique purposes for filter
  const purposes = Array.from(new Set(loanApplications.map((app) => app.purpose)))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Loan Applications</h2>
        <Dialog open={isNewApplicationOpen} onOpenChange={setIsNewApplicationOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Application
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Submit Loan Application</DialogTitle>
              <DialogDescription>Fill out the form below to apply for a business loan.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Loan Amount
                </Label>
                <div className="col-span-3 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                  <Input id="amount" type="number" className="pl-7" />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="purpose" className="text-right">
                  Loan Purpose
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Business Startup</SelectItem>
                    <SelectItem value="expansion">Business Expansion</SelectItem>
                    <SelectItem value="equipment">Equipment Purchase</SelectItem>
                    <SelectItem value="inventory">Inventory</SelectItem>
                    <SelectItem value="working">Working Capital</SelectItem>
                    <SelectItem value="marketing">Marketing Campaign</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea
                  id="description"
                  className="col-span-3"
                  rows={3}
                  placeholder="Describe how you plan to use the loan"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">
                  Loan Duration
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 months</SelectItem>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="18">18 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="collateral" className="text-right pt-2">
                  Collateral
                </Label>
                <Textarea
                  id="collateral"
                  className="col-span-3"
                  rows={2}
                  placeholder="Describe any collateral you can provide (if applicable)"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsNewApplicationOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsNewApplicationOpen(false)}>Submit Application</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Loan Applications</CardTitle>
          <CardDescription>Review and manage loan applications from entrepreneurs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search applications..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={purposeFilter} onValueChange={setPurposeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Purposes</SelectItem>
                  {purposes.map((purpose, index) => (
                    <SelectItem key={index} value={purpose}>
                      {purpose}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">{application.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={application.applicant} />
                            <AvatarFallback>
                              {application.applicant
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{application.applicant}</div>
                            <div className="text-xs text-gray-500">{application.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>${application.amount.toLocaleString()}</TableCell>
                      <TableCell>{application.purpose}</TableCell>
                      <TableCell>{getStatusBadge(application.status)}</TableCell>
                      <TableCell>{application.submittedDate}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Eye className="h-4 w-4" /> View Details
                            </DropdownMenuItem>
                            {application.status === "pending" && (
                              <>
                                <DropdownMenuItem className="flex items-center gap-2 text-green-600">
                                  <CheckCircle className="h-4 w-4" /> Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                  <XCircle className="h-4 w-4" /> Reject
                                </DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Download className="h-4 w-4" /> Download PDF
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No applications found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
