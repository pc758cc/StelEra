"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", mobile: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="space-y-6">
            <Badge className="w-fit mx-auto bg-accent/10 text-accent border-accent/20">Get in Touch</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary">Contact Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about our industrial solutions? Our expert team is ready to help you find the perfect
              product for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Card 1 - Phone */}
            <Card className="bg-white border-border hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                  <p className="text-lg font-semibold text-accent">+91 8269922916</p>
                  <p className="text-sm text-muted-foreground mt-2">Call us during business hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card 2 - Email */}
            <Card className="bg-white border-border hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                  <p className="text-sm font-semibold text-accent break-all">blackspec.engineering@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card 3 - Location */}
            <Card className="bg-white border-border hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">Sector 28, Naya Raipur</p>
                  <p className="text-sm text-muted-foreground">Chhattisgarh 492002, India</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Info Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Vector Art Section */}
            <div className="flex justify-center lg:justify-start">
              <svg className="w-64 h-64" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="var(--color-accent)"
                  opacity="0.1"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />

                {/* Left Person */}
                <circle cx="120" cy="80" r="20" fill="var(--color-primary)" />
                <path d="M 100 110 Q 120 100 140 110 L 140 160 Q 120 170 100 160 Z" fill="var(--color-primary)" />
                <rect x="95" y="160" width="15" height="40" fill="var(--color-primary)" rx="3" />
                <rect x="130" y="160" width="15" height="40" fill="var(--color-primary)" rx="3" />
                <rect x="100" y="200" width="12" height="35" fill="var(--color-accent)" rx="2" />
                <rect x="128" y="200" width="12" height="35" fill="var(--color-accent)" rx="2" />

                {/* Center Person (Taller) */}
                <circle cx="200" cy="60" r="22" fill="var(--color-accent)" />
                <path d="M 175 95 Q 200 82 225 95 L 225 160 Q 200 175 175 160 Z" fill="var(--color-accent)" />
                <rect x="168" y="160" width="16" height="50" fill="var(--color-accent)" rx="3" />
                <rect x="216" y="160" width="16" height="50" fill="var(--color-accent)" rx="3" />
                <rect x="173" y="210" width="13" height="40" fill="var(--color-primary)" rx="2" />
                <rect x="214" y="210" width="13" height="40" fill="var(--color-primary)" rx="2" />

                {/* Right Person */}
                <circle cx="280" cy="85" r="19" fill="var(--color-primary)" />
                <path d="M 262 115 Q 280 105 298 115 L 298 165 Q 280 175 262 165 Z" fill="var(--color-primary)" />
                <rect x="258" y="165" width="14" height="38" fill="var(--color-primary)" rx="3" />
                <rect x="288" y="165" width="14" height="38" fill="var(--color-primary)" rx="3" />
                <rect x="263" y="203" width="11" height="32" fill="var(--color-accent)" rx="2" />
                <rect x="291" y="203" width="11" height="32" fill="var(--color-accent)" rx="2" />

                {/* Communication Lines */}
                <path
                  d="M 140 100 Q 170 70 260 105"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                  opacity="0.6"
                />
                <circle cx="155" cy="85" r="4" fill="var(--color-accent)" opacity="0.6" />
                <circle cx="245" cy="98" r="4" fill="var(--color-accent)" opacity="0.6" />

                {/* Chat Bubbles */}
                <rect x="80" y="250" width="80" height="40" rx="8" fill="var(--color-primary)" opacity="0.9" />
                <text x="120" y="275" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  Questions?
                </text>

                <rect x="240" y="260" width="80" height="35" rx="8" fill="var(--color-accent)" opacity="0.9" />
                <text x="280" y="282" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  We Help!
                </text>

                {/* Decorative Elements */}
                <circle cx="60" cy="320" r="6" fill="var(--color-accent)" opacity="0.5" />
                <circle cx="340" cy="310" r="8" fill="var(--color-primary)" opacity="0.4" />
              </svg>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Business Hours</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Monday - Friday</p>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Saturday</p>
                      <p className="text-muted-foreground">9:00 AM - 2:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Sunday</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-4">
                    <p className="text-sm font-semibold text-accent">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Why Contact Us</h2>
                <ul className="space-y-3">
                  {[
                    "Expert technical consultation",
                    "Custom product solutions",
                    "Quick response times",
                    "Competitive pricing",
                    "Dedicated account management",
                    "Worldwide logistics support",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Questions About Our Services?</h2>
          <p className="text-lg text-white/90 mb-8">
            Our team of experts is ready to provide solutions tailored to your specific industrial needs.
          </p>
          <p className="text-lg font-semibold">
            Call us at <span className="text-accent">+91 8269922916</span> or fill out the form above
          </p>
        </div>
      </section>
    </div>
  )
}
