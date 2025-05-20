"use client"

import { CheckSquare, Users, UserPlus, Calendar, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CheckinOfficerDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Check-in Officer Dashboard</h2>

      {/* Overview Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Check-ins</CardTitle>
            <CheckSquare className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>12 more than yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>15 new this month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Registrations</CardTitle>
            <UserPlus className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>3 today</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Events</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>Ongoing now</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different data views */}
      <Tabs defaultValue="checkins" className="space-y-4">
        <TabsList>
          <TabsTrigger value="checkins">Check-ins</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="register">Register New</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="checkins" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Check-ins</CardTitle>
              <CardDescription>Record and manage member check-ins</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">Name</div>
                  <div className="font-medium">Time</div>
                  <div className="font-medium">Event/Program</div>
                  <div className="font-medium">Status</div>
                </div>

                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 h-8 w-8 rounded-full bg-gray-200"></div>
                      <div>
                        <p className="text-sm font-medium">{`Member ${i}`}</p>
                        <p className="text-xs text-gray-500">{`ID: ${1000 + i}`}</p>
                      </div>
                    </div>
                    <div className="text-sm">{`${8 + i}:${i * 10 < 10 ? "0" + i * 10 : i * 10} AM`}</div>
                    <div className="text-sm">{i % 3 === 0 ? "Workshop" : i % 3 === 1 ? "Training" : "Meeting"}</div>
                    <div className={`rounded-full px-2 py-1 text-xs ${"bg-green-100 text-green-800"}`}>Checked In</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Member Directory</CardTitle>
              <CardDescription>Browse and manage member information</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800">
              <p className="text-gray-500">Member directory will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="register" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Register New Member</CardTitle>
              <CardDescription>Add new members to the system</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800">
              <p className="text-gray-500">Registration form will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Check-in Reports</CardTitle>
              <CardDescription>Generate and view check-in reports</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800">
              <p className="text-gray-500">Reports will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
