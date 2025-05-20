"use client"

import { useState } from "react"
import {
  CheckSquare,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Clock,
  User,
  MapPin,
  QrCode,
  XCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock check-in data
const checkIns = [
  {
    id: 1,
    member: "Michael Brown",
    memberId: "M1003",
    event: "Entrepreneurship Workshop",
    location: "Main Hall",
    checkInTime: "09:15 AM",
    checkInDate: "May 12, 2025",
    status: "checked-in",
  },
  {
    id: 2,
    member: "Sarah Johnson",
    memberId: "M1002",
    event: "Entrepreneurship Workshop",
    location: "Main Hall",
    checkInTime: "09:22 AM",
    checkInDate: "May 12, 2025",
    status: "checked-in",
  },
  {
    id: 3,
    member: "David Wilson",
    memberId: "M1005",
    event: "Entrepreneurship Workshop",
    location: "Main Hall",
    checkInTime: "09:30 AM",
    checkInDate: "May 12, 2025",
    status: "checked-in",
  },
  {
    id: 4,
    member: "Jennifer Anderson",
    memberId: "M1008",
    event: "Entrepreneurship Workshop",
    location: "Main Hall",
    checkInTime: "09:45 AM",
    checkInDate: "May 12, 2025",
    status: "checked-in",
  },
  {
    id: 5,
    member: "Robert Taylor",
    memberId: "M1007",
    event: "Mentorship Session",
    location: "Conference Room B",
    checkInTime: "10:15 AM",
    checkInDate: "May 12, 2025",
    status: "checked-in",
  },
  {
    id: 6,
    member: "Lisa Martinez",
    memberId: "M1006",
    event: "Mentorship Session",
    location: "Conference Room B",
    checkInTime: "10:30 AM",
    checkInDate: "May 12, 2025",
    status: "checked-in",
  },
  {
    id: 7,
    member: "James Johnson",
    memberId: "M1010",
    event: "Business Planning",
    location: "Conference Room A",
    checkInTime: "11:00 AM",
    checkInDate: "May 12, 2025",
    status: "checked-in",
  },
  {
    id: 8,
    member: "Emily Davis",
    memberId: "M1004",
    event: "Business Planning",
    location: "Conference Room A",
    checkInTime: "11:10 AM",
    checkInDate: "May 12, 2025",
    status: "checked-in",
  },
]

// Mock events data
const events = [
  {
    id: 1,
    name: "Entrepreneurship Workshop",
    location: "Main Hall",
    date: "May 12, 2025",
    time: "09:00 AM - 12:00 PM",
    attendees: 25,
    capacity: 30,
    status: "in-progress",
  },
  {
    id: 2,
    name: "Mentorship Session",
    location: "Conference Room B",
    date: "May 12, 2025",
    time: "10:00 AM - 11:30 AM",
    attendees: 12,
    capacity: 15,
    status: "in-progress",
  },
  {
    id: 3,
    name: "Business Planning",
    location: "Conference Room A",
    date: "May 12, 2025",
    time: "11:00 AM - 01:00 PM",
    attendees: 18,
    capacity: 20,
    status: "in-progress",
  },
  {
    id: 4,
    name: "Pitch Practice",
    location: "Main Hall",
    date: "May 12, 2025",
    time: "02:00 PM - 04:00 PM",
    attendees: 0,
    capacity: 25,
    status: "upcoming",
  },
  {
    id: 5,
    name: "Networking Event",
    location: "Cafeteria",
    date: "May 12, 2025",
    time: "05:00 PM - 07:00 PM",
    attendees: 0,
    capacity: 50,
    status: "upcoming",
  },
]

export default function CheckinsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [eventFilter, setEventFilter] = useState("all")
  const [isManualCheckInOpen, setIsManualCheckInOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("today")

  // Filter check-ins based on search term and filters
  const filteredCheckIns = checkIns.filter((checkIn) => {
    const matchesSearch =
      checkIn.member.toLowerCase().includes(searchTerm.toLowerCase()) ||
      checkIn.memberId.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesEvent = eventFilter === "all" || checkIn.event === eventFilter

    return matchesSearch && matchesEvent
  })

  // Get unique events for filter
  const uniqueEvents = Array.from(new Set(checkIns.map((checkIn) => checkIn.event)))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Check-ins</h2>
        <div className="flex gap-2">
          <Dialog open={isManualCheckInOpen} onOpenChange={setIsManualCheckInOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Manual Check-in
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Manual Check-in</DialogTitle>
                <DialogDescription>
                  Check in a member manually by entering their ID or searching for them.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="member-id" className="text-right">
                    Member ID
                  </Label>
                  <Input id="member-id" placeholder="e.g. M1001" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="event" className="text-right">
                    Event
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select event" />
                    </SelectTrigger>
                    <SelectContent>
                      {events.map((event) => (
                        <SelectItem key={event.id} value={event.name}>
                          {event.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="notes" className="text-right">
                    Notes
                  </Label>
                  <Input id="notes" placeholder="Optional" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsManualCheckInOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsManualCheckInOpen(false)}>Check In</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button className="flex items-center gap-2">
            <QrCode className="h-4 w-4" />
            Scan QR Code
          </Button>
        </div>
      </div>

      <Tabs defaultValue="today" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Today's Check-ins</TabsTrigger>
          <TabsTrigger value="events">Today's Events</TabsTrigger>
          <TabsTrigger value="history">Check-in History</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Check-ins</CardTitle>
              <CardDescription>Manage and track member check-ins for today's events.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    placeholder="Search members..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <Select value={eventFilter} onValueChange={setEventFilter}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Filter by event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Events</SelectItem>
                      {uniqueEvents.map((event, index) => (
                        <SelectItem key={index} value={event}>
                          {event}
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
                      <TableHead>Member</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Check-in Time</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCheckIns.length > 0 ? (
                      filteredCheckIns.map((checkIn) => (
                        <TableRow key={checkIn.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={checkIn.member} />
                                <AvatarFallback>
                                  {checkIn.member
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{checkIn.member}</div>
                                <div className="text-xs text-gray-500">{checkIn.memberId}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{checkIn.event}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-gray-500" />
                              {checkIn.location}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-gray-500" />
                              {checkIn.checkInTime}
                            </div>
                          </TableCell>
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
                                  <User className="h-4 w-4" /> View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                  <XCircle className="h-4 w-4" /> Remove Check-in
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="h-24 text-center">
                          No check-ins found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Events</CardTitle>
              <CardDescription>View and manage today's events and their attendance.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Badge
                          className={
                            event.status === "in-progress"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-blue-100 text-blue-800 border-blue-200"
                          }
                        >
                          {event.status === "in-progress" ? "In Progress" : "Upcoming"}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{event.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="pt-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Attendance</span>
                            <span>
                              {event.attendees}/{event.capacity}
                            </span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                            <div
                              className="h-2 rounded-full bg-blue-600"
                              style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button
                            className="w-full"
                            variant={event.status === "in-progress" ? "default" : "outline"}
                            disabled={event.status !== "in-progress"}
                          >
                            <CheckSquare className="mr-2 h-4 w-4" />
                            {event.status === "in-progress" ? "Check In Members" : "Not Started Yet"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Check-in History</CardTitle>
              <CardDescription>View past check-ins and attendance records.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-gray-500">Check-in history will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
