"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Gift, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MentorsDonorsPage() {
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
                  Our Community
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                Meet Our <span className="text-blue-600 dark:text-blue-400">Mentors & Donors</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-xl text-gray-600 dark:text-gray-300"
              >
                The dedicated individuals and organizations who make our work possible through their expertise, time,
                and generous support.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Become a Mentor
                  <Users className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
                >
                  Make a Donation
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
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
                    alt="Mentors and Donors"
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

      {/* Mentors & Donors Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <Tabs defaultValue="mentors" className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mentors" className="text-lg">
                  <Users className="mr-2 h-5 w-5" /> Our Mentors
                </TabsTrigger>
                <TabsTrigger value="donors" className="text-lg">
                  <Gift className="mr-2 h-5 w-5" /> Our Donors
                </TabsTrigger>
              </TabsList>

              {/* Mentors Tab */}
              <TabsContent value="mentors" className="mt-8">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Expert Mentors</h2>
                  <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                    Our mentors bring years of experience and expertise to help guide entrepreneurs on their journey.
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full overflow-hidden dark:border-gray-800 dark:bg-gray-900">
                        <div className="relative h-64 w-full">
                          <Image
                            src={`/placeholder.svg?height=300&width=300`}
                            alt={`Mentor ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl font-bold">
                            {
                              [
                                "John Doe",
                                "Jane Smith",
                                "David Johnson",
                                "Sarah Williams",
                                "Michael Brown",
                                "Emily Davis",
                              ][index]
                            }
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-blue-600 dark:text-blue-400">
                            {
                              [
                                "Tech Entrepreneur",
                                "Marketing Expert",
                                "Finance Specialist",
                                "Business Strategist",
                                "Product Development",
                                "Social Enterprise Advisor",
                              ][index]
                            }
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-400">
                            {
                              [
                                "Founder of multiple tech startups with expertise in scaling businesses and securing funding.",
                                "Marketing professional with over 15 years of experience in brand development and digital marketing.",
                                "Financial advisor specializing in startup funding, investment strategies, and financial planning.",
                                "Business strategist with expertise in market analysis, business planning, and growth strategies.",
                                "Product development expert with experience in bringing innovative products to market.",
                                "Social enterprise advisor with a focus on creating sustainable impact through business.",
                              ][index]
                            }
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Link
                            href="#"
                            className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400"
                          >
                            View Profile
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    View All Mentors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              {/* Donors Tab */}
              <TabsContent value="donors" className="mt-8">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                    Our Generous Donors
                  </h2>
                  <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                    These organizations and individuals provide the financial support that makes our work possible.
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full overflow-hidden dark:border-gray-800 dark:bg-gray-900">
                        <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
                          <div className="flex h-full items-center justify-center">
                            <Image
                              src={`/placeholder.svg?height=150&width=150`}
                              alt={`Donor ${index + 1}`}
                              width={150}
                              height={150}
                              className="h-24 w-auto object-contain"
                            />
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl font-bold">
                            {
                              [
                                "ABC Foundation",
                                "XYZ Corporation",
                                "Global Initiatives",
                                "Tech Innovators Fund",
                                "Community Trust",
                                "Future Leaders Foundation",
                              ][index]
                            }
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-orange-500 dark:text-orange-400">
                            {
                              ["Platinum Donor", "Gold Donor", "Silver Donor", "Bronze Donor", "Partner", "Supporter"][
                                index
                              ]
                            }
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-400">
                            {
                              [
                                "Supporting entrepreneurship initiatives and providing grants for innovative startups.",
                                "Investing in the future of business through mentorship programs and financial support.",
                                "Committed to fostering economic growth through entrepreneurship development.",
                                "Providing resources and funding for technology-focused startups and innovations.",
                                "Supporting community-based entrepreneurship initiatives and local business development.",
                                "Investing in the next generation of entrepreneurs through education and resources.",
                              ][index]
                            }
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Link
                            href="#"
                            className="inline-flex items-center text-orange-500 hover:underline dark:text-orange-400"
                          >
                            Learn More
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                    View All Donors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Become a Mentor/Donor */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Become a Mentor */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Become a Mentor</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Share your expertise and experience with aspiring entrepreneurs. Help shape the next generation of
                business leaders.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                    1
                  </span>
                  <span>Share your knowledge and expertise</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                    2
                  </span>
                  <span>Guide entrepreneurs through challenges</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                  <span>Build your professional network</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Apply to Become a Mentor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Become a Donor */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Make a Donation</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Support our mission to empower entrepreneurs and create economic opportunities through your generous
                donation.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                    1
                  </span>
                  <span>Fund entrepreneurship programs</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                    2
                  </span>
                  <span>Support business development resources</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                    3
                  </span>
                  <span>Create opportunities for growth</span>
                </li>
              </ul>
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                Make a Donation
                <Heart className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">What People Say</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Hear from entrepreneurs who have benefited from our mentors and donors
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800"
              >
                <div className="mb-6 flex items-center space-x-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=100&width=100`}
                      alt={`Testimonial ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {["Alex Johnson", "Maria Garcia", "Samuel Lee"][index]}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {["Founder, TechStart", "CEO, EcoSolutions", "Director, HealthInnovate"][index]}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {
                    [
                      "The mentorship I received through Sheger Entrepreneurs Association was invaluable. My mentor provided guidance that helped me navigate challenges and grow my business.",
                      "Thanks to the funding and support from Sheger Entrepreneurs Association, we were able to expand our operations and reach new markets. Their belief in our mission made all the difference.",
                      "The network and resources provided by Sheger Entrepreneurs Association helped turn my idea into a successful business. I'm grateful for their continued support.",
                    ][index]
                  }
                </p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Join Our Community of Mentors and Donors</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Make a difference in the lives of entrepreneurs and contribute to economic growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              >
                Become a Mentor
                <Users className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700 dark:border-gray-300 dark:text-gray-300"
              >
                Make a Donation
                <Heart className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
