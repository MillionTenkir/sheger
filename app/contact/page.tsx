"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
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
                  Get in Touch
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                Contact <span className="text-blue-600 dark:text-blue-400">Us</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-xl text-gray-600 dark:text-gray-300"
              >
                Have questions or want to get involved? We'd love to hear from you. Reach out to our team using the
                contact information below or fill out the form.
              </motion.p>
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
                    alt="Contact Us"
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

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 lg:col-span-1"
            >
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                  Contact Information
                </h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                  Feel free to reach out to us using any of the following contact methods. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <Card className="overflow-hidden dark:border-gray-800 dark:bg-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Our Location</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          123 Entrepreneurship Avenue
                          <br />
                          Addis Ababa, Ethiopia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden dark:border-gray-800 dark:bg-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Phone Number</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          +251 123 456 789
                          <br />
                          +251 987 654 321
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden dark:border-gray-800 dark:bg-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Email Address</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          info@shegerentrepreneurs.org
                          <br />
                          support@shegerentrepreneurs.org
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden dark:border-gray-800 dark:bg-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Working Hours</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Monday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          Saturday: 10:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="overflow-hidden dark:border-gray-800 dark:bg-gray-900">
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                    Send Us a Message
                  </h2>
                  <p className="mb-8 text-gray-600 dark:text-gray-300">
                    Have a question or want to get involved? Fill out the form below and we'll get back to you as soon
                    as possible.
                  </p>

                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+251 123 456 789" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help you?" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Write your message here..." rows={6} />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Find Us</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Visit our office to learn more about our programs and services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <div className="relative h-[400px] w-full">
              <Image src="/placeholder.svg?height=400&width=1200" alt="Map" fill className="object-cover" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <MapPin className="h-8 w-8" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Find answers to common questions about our organization and programs
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How can I become a member of Sheger Entrepreneurs Association?",
                  answer:
                    "To become a member, you can fill out the membership application form on our website or visit our office. Membership is open to entrepreneurs, aspiring entrepreneurs, and individuals interested in supporting entrepreneurship.",
                },
                {
                  question: "What programs do you offer for entrepreneurs?",
                  answer:
                    "We offer a variety of programs including mentorship, workshops, networking events, funding opportunities, and access to resources and facilities. Our Handhurass Program provides comprehensive support for entrepreneurs at different stages of their journey.",
                },
                {
                  question: "How can I volunteer or become a mentor?",
                  answer:
                    "If you're interested in volunteering or becoming a mentor, please fill out the volunteer/mentor application form on our website or contact us directly. We're always looking for experienced professionals to share their knowledge and expertise.",
                },
                {
                  question: "Do you provide funding for startups?",
                  answer:
                    "While we don't directly provide funding, we connect entrepreneurs with potential investors, help them prepare for funding opportunities, and provide information about grants and other financial resources available for startups.",
                },
                {
                  question: "Are your programs only for tech startups?",
                  answer:
                    "No, our programs are designed to support entrepreneurs across various industries and sectors. We believe in fostering innovation and entrepreneurship in all areas that contribute to economic growth and development.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Connect With Us?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Whether you have questions, want to get involved, or need support for your entrepreneurial journey, we're
              here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              >
                Contact Us Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700 dark:border-gray-300 dark:text-gray-300"
              >
                Join Our Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
