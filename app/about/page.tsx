"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Award, TrendingUp, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
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
                  Our Story
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                About <span className="text-blue-600 dark:text-blue-400">Sheger Entrepreneurs</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-xl text-gray-600 dark:text-gray-300"
              >
                Empowering entrepreneurs to build successful businesses and create positive economic impact since 2015.
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
                  Our Mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                >
                  Join Us
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
                    alt="About Sheger Entrepreneurs"
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

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full overflow-hidden rounded-lg md:h-[500px]"
            >
              <Image src="/placeholder.svg?height=500&width=500" alt="Our Story" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-6"
            >
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">How It All Started</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Sheger Entrepreneurs Association was founded in 2015 by a group of passionate entrepreneurs who
                recognized the need for a supportive ecosystem for startups and small businesses in Ethiopia.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                What began as a small community of like-minded individuals has grown into a comprehensive support
                network for entrepreneurs at all stages of their journey. Our commitment to fostering innovation,
                providing resources, and creating opportunities has helped hundreds of entrepreneurs turn their ideas
                into successful businesses.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Today, we continue to expand our reach and impact, working with partners, mentors, and donors to create
                a thriving entrepreneurial ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Mission, Vision & Values
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              The guiding principles that drive our work and impact
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Target className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
                title: "Our Mission",
                description:
                  "To empower entrepreneurs with the resources, knowledge, and support they need to build successful and sustainable businesses that contribute to economic growth and social development.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-orange-500 dark:text-orange-400" />,
                title: "Our Vision",
                description:
                  "To create a thriving entrepreneurial ecosystem where innovation flourishes, businesses grow, and entrepreneurs lead the way in addressing economic and social challenges.",
              },
              {
                icon: <Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
                title: "Our Values",
                description:
                  "Innovation, Integrity, Collaboration, Excellence, and Impact. These core values guide our approach to supporting entrepreneurs and building a strong community.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                  <CardHeader>
                    <div className="mb-4">{item.icon}</div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Our Impact</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              The difference we've made in the entrepreneurial ecosystem
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "500+",
                label: "Entrepreneurs Supported",
                description: "We've helped over 500 entrepreneurs start and grow their businesses.",
              },
              {
                number: "200+",
                label: "Successful Startups",
                description: "More than 200 startups have successfully launched with our support.",
              },
              {
                number: "50+",
                label: "Mentors & Experts",
                description: "Our network includes over 50 experienced mentors and industry experts.",
              },
              {
                number: "$2M+",
                label: "Funding Facilitated",
                description: "We've helped entrepreneurs secure over $2 million in funding.",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-800"
              >
                <div className="mb-4 text-4xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{stat.label}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Meet Our Team</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              The dedicated individuals who work tirelessly to support entrepreneurs
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Team Member ${index + 1}`}
                    width={200}
                    height={200}
                    className="mx-auto h-48 w-48 object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  {["John Doe", "Jane Smith", "David Johnson", "Sarah Williams"][index]}
                </h3>
                <p className="mb-3 text-blue-600 dark:text-blue-400">
                  {["Executive Director", "Program Manager", "Operations Director", "Community Manager"][index]}
                </p>
                <p className="mx-auto max-w-xs text-gray-600 dark:text-gray-400">
                  {
                    [
                      "Passionate about entrepreneurship and economic development with over 15 years of experience.",
                      "Dedicated to creating impactful programs that help entrepreneurs succeed.",
                      "Ensures smooth operations and efficient resource allocation for maximum impact.",
                      "Builds and nurtures our community of entrepreneurs, mentors, and partners.",
                    ][index]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Our Partners</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Organizations that collaborate with us to support entrepreneurs
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
              >
                <Image
                  src={`/placeholder.svg?height=100&width=200`}
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Join Our Mission to Empower Entrepreneurs</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Whether you're an entrepreneur, mentor, donor, or partner, there are many ways to get involved and make a
              difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              >
                Get Involved
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
