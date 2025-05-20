"use client"

import { Briefcase, BookOpen, Calendar, Award, ArrowUpRight, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function KidpreneurDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Kidpreneur Dashboard</h2>

      {/* Overview Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">My Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>1 new this month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
            <BookOpen className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>2 this week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="flex items-center text-sm text-green-500">
              <Star className="mr-1 h-4 w-4 text-yellow-500" />
              <span>3 badges earned</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different data views */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Journey</CardTitle>
              <CardDescription>Track your entrepreneurial journey and progress</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center bg-gray-50 dark:bg-gray-800">
              <p className="text-gray-500">Journey timeline will be displayed here</p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Current Projects</CardTitle>
                <CardDescription>Your active entrepreneurial projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Eco-Friendly Crafts", "Digital Art Shop", "Neighborhood Helper"].map((project, i) => (
                    <div key={i} className="flex items-center">
                      <div className="mr-4 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Briefcase className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{project}</p>
                        <div className="mt-1 flex items-center">
                          <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                            <div className="h-2 rounded-full bg-blue-600" style={{ width: `${80 - i * 20}%` }}></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-500">{`${80 - i * 20}%`}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events you're registered for</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Young Entrepreneurs Workshop", "Pitch Practice", "Business Basics", "Creative Thinking"].map(
                    (event, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                          <p className="text-sm font-medium">{event}</p>
                        </div>
                        <p className="text-xs text-gray-500">{`May ${15 + i}, 2025`}</p>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Projects</CardTitle>
              <CardDescription>Manage and track your entrepreneurial projects</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800">
              <p className="text-gray-500">Projects dashboard will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Center</CardTitle>
              <CardDescription>Access educational resources and courses</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800">
              <p className="text-gray-500">Learning content will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Events Calendar</CardTitle>
              <CardDescription>Browse and register for upcoming events</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800">
              <p className="text-gray-500">Events calendar will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
