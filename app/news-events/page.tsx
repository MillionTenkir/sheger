"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewsEventsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Stay Updated
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                News & <span className="text-blue-600 dark:text-blue-400">Events</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-xl text-gray-600 dark:text-gray-300"
              >
                Stay informed about the latest news, events, and opportunities in the entrepreneurship ecosystem.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <div className="relative w-full max-w-md">
                  <Input type="text" placeholder="Search news and events..." className="pr-10" />
                  <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[400px] w-full md:h-[500px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="News and Events"
                    fill
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white dark:text-gray-800">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* News & Events Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Tabs defaultValue="news" className="mx-auto max-w-6xl">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="news" className="text-lg">
                  Latest News
                </TabsTrigger>
                <TabsTrigger value="events" className="text-lg">
                  Upcoming Events
                </TabsTrigger>
              </TabsList>

              {/* News Tab */}
              <TabsContent value="news" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full overflow-hidden dark:border-gray-800 dark:bg-gray-900">
                        <div className="relative h-48 w-full">
                          <Image
                            src={`/placeholder.svg?height=200&width=400`}
                            alt={`News ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {
                                [
                                  "May 10, 2025",
                                  "May 5, 2025",
                                  "April 28, 2025",
                                  "April 20, 2025",
                                  "April 15, 2025",
                                  "April 10, 2025",
                                ][index]
                              }
                            </span>
                            <span>•</span>
                            <User className="h-4 w-4" />
                            <span>Admin</span>
                          </div>
                          <CardTitle className="text-xl font-bold">
                            {
                              [
                                "Sheger Entrepreneurs Launches New Funding Initiative",
                                "Local Startups Showcase Innovation at Annual Expo",
                                "Government Announces Support for Entrepreneurship Programs",
                                "Success Story: How One Entrepreneur Transformed the Market",
                                "New Partnership to Boost Entrepreneurship Education",
                                "Entrepreneurship Trends to Watch in 2025",
                              ][index]
                            }
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                            {
                              [
                                "Sheger Entrepreneurs Association announces a new funding initiative to support early-stage startups in the technology sector.",
                                "Local startups showcase their innovative products and services at the annual Entrepreneurship Expo, attracting investors and partners.",
                                "The government announces new policies and programs to support entrepreneurship and small business development.",
                                "Learn how one entrepreneur overcame challenges to build a successful business that is transforming the market.",
                                "Sheger Entrepreneurs partners with leading educational institutions to enhance entrepreneurship education and training.",
                                "Explore the emerging trends in entrepreneurship that are shaping the business landscape in 2025.",
                              ][index]
                            }
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <Link
                            href="#"
                            className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400"
                          >
                            Read more
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    View All News
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  {[1, 2, 3, 4].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full overflow-hidden dark:border-gray-800 dark:bg-gray-900">
                        <div className="relative h-48 w-full">
                          <Image
                            src={`/placeholder.svg?height=200&width=400`}
                            alt={`Event ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute left-4 top-4 rounded-lg bg-blue-600 p-3 text-center text-white">
                            <div className="text-xl font-bold">{["15", "22", "05", "18"][index]}</div>
                            <div className="text-xs">{["May", "May", "Jun", "Jun"][index]}</div>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl font-bold">
                            {
                              [
                                "Entrepreneurship Workshop: From Idea to Business",
                                "Networking Event: Connect with Investors",
                                "Annual Entrepreneurship Conference",
                                "Pitch Competition: Showcase Your Startup",
                              ][index]
                            }
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-4 space-y-2">
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                              <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>
                                {
                                  ["9:00 AM - 4:00 PM", "6:00 PM - 9:00 PM", "9:00 AM - 5:00 PM", "2:00 PM - 6:00 PM"][
                                    index
                                  ]
                                }
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                              <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span>
                                {
                                  [
                                    "Sheger Entrepreneurs Hub",
                                    "Hilton Hotel, Addis Ababa",
                                    "Convention Center, Addis Ababa",
                                    "Innovation Center, Addis Ababa",
                                  ][index]
                                }
                              </span>
                            </div>
                          </div>
                          <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                            {
                              [
                                "Learn the essential steps to transform your business idea into a viable enterprise. This workshop covers business planning, market research, and funding strategies.",
                                "Connect with potential investors and partners at our exclusive networking event. Present your business and explore collaboration opportunities.",
                                "Join us for our annual conference featuring keynote speakers, panel discussions, and workshops on entrepreneurship and innovation.",
                                "Showcase your startup at our pitch competition and get a chance to win funding and mentorship opportunities.",
                              ][index]
                            }
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                            Register Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800"
          >
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Subscribe to Our Newsletter</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Stay updated with the latest news, events, and opportunities from Sheger Entrepreneurs Association.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Subscribe
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-12 text-center text-white shadow-xl dark:from-blue-700 dark:to-blue-900"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Want to Host an Event with Us?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Partner with Sheger Entrepreneurs Association to host workshops, seminars, or networking events for
              entrepreneurs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              >
                Propose an Event
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700 dark:border-gray-300 dark:text-gray-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
