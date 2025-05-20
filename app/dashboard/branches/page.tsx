"use client"

import { useState } from "react"
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, MapPin, Phone, Users } from "lucide-react"
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

// Mock branch data
const branches = [
  {
    id: 1,
    name: "Headquarters",
    location: "Addis Ababa",
    manager: "John Doe",
    managerEmail: "admin@example.com",
    phone: "+251-111-234-567",
    members: 120,
    status: "active",
    established: "Jan 15, 2020",
  },
  {
    id: 2,
    name: "Addis Ababa Branch",
    location: "Bole, Addis Ababa",
    manager: "Sarah Johnson",
    managerEmail: "branch@example.com",
    phone: "+251-111-345-678",
    members: 85,
    status: "active",
    established: "Mar 10, 2021",
  },
  {
    id: 3,
    name: "Bahir Dar Branch",
    location: "Bahir Dar",
    manager: "David Wilson",
    managerEmail: "bahirdar@example.com",
    phone: "+251-111-456-789",
    members: 42,
    status: "active",
    established: "Jun 5, 2022",
  },
  {
    id: 4,
    name: "Hawassa Branch",
    location: "Hawassa",
    manager: "Lisa Martinez",
    managerEmail: "hawassa@example.com",
    phone: "+251-111-567-890",
    members: 38,
    status: "active",
    established: "Sep 20, 2022",
  },
  {
    id: 5,
    name: "Adama Branch",
    location: "Adama",
    manager: "Jennifer Anderson",
    managerEmail: "adama@example.com",
    phone: "+251-111-678-901",
    members: 35,
    status: "active",
    established: "Jan 15, 2023",
  },
  {
    id: 6,
    name: "Mekelle Branch",
    location: "Mekelle",
    manager: "Robert Taylor",
    managerEmail: "mekelle@example.com",
    phone: "+251-111-789-012",
    members: 30,
    status: "active",
    established: "Apr 8, 2023",
  },
  {
    id: 7,
    name: "Dire Dawa Branch",
    location: "Dire Dawa",
    manager: "Unassigned",
    managerEmail: "",
    phone: "+251-111-890-123",
    members: 0,
    status: "inactive",
    established: "Jul 1, 2023",
  },
]

export default function BranchesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddBranchOpen, setIsAddBranchOpen] = useState(false)

  // Filter branches based on search term and filters
  const filteredBranches = branches.filter((branch) => {
    const matchesSearch =
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.manager.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || branch.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Branch Management</h2>
        <Dialog open={isAddBranchOpen} onOpenChange={setIsAddBranchOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Branch
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Add New Branch</DialogTitle>
              <DialogDescription>Create a new branch office for Sheger Entrepreneurs Association.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="branch-name" className="text-right">
                  Branch Name
                </Label>
                <Input id="branch-name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input id="location" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="manager" className="text-right">
                  Branch Manager
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="unassigned">Unassigned</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input id="phone" type="tel" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="address" className="text-right pt-2">
                  Address
                </Label>
                <Textarea id="address" className="col-span-3" rows={3} />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddBranchOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddBranchOpen(false)}>Create Branch</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Branches</CardTitle>
          <CardDescription>Manage branch offices and their operations.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search branches..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Branch</TableHead>
                  <TableHead>Manager</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Established</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBranches.length > 0 ? (
                  filteredBranches.map((branch) => (
                    <TableRow key={branch.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <div className="font-medium">{branch.name}</div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="mr-1 h-3 w-3" /> {branch.location}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {branch.manager !== "Unassigned" ? (
                          <div className="flex flex-col">
                            <div>{branch.manager}</div>
                            <div className="text-sm text-gray-500">{branch.managerEmail}</div>
                          </div>
                        ) : (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            Unassigned
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-500" />
                          {branch.members}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              branch.status === "active" ? "bg-green-500" : "bg-gray-300"
                            }`}
                          ></div>
                          <span className="capitalize">{branch.status}</span>
                        </div>
                      </TableCell>
                      <TableCell>{branch.established}</TableCell>
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
                              <Edit className="h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Users className="h-4 w-4" /> View Members
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Phone className="h-4 w-4" /> Contact
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                              <Trash2 className="h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No branches found.
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
