"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", mobile: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
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
      <section className="relative py-20  bg-gradient-to-b from-white to-purple-100/80 overflow-hidden rounded-b-[3rem] border-b-4 border-[rgb(120,30,180)]">
        {/* Simple gradient blur */}
        <div className="absolute top-20 right-20 w-64 h-96 bg-[rgb(170,48,232)]/10 rounded-full blur-4xl"></div>
        <div className="absolute bottom-10 left-0 w-64 h-96 bg-[rgb(170,48,232)]/10 rounded-full blur-4xl"></div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="space-y-6">
            <Badge className="w-fit mx-auto bg-[rgb(170,48,232)]/10 text-[rgb(170,48,232)] border-[rgb(170,48,232)]/20">
              Get in Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Contact Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our industrial solutions? Our expert team is
              ready to help you find the perfect product for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Card 1 - Phone */}
            <Card className="bg-white border-border shadow-lg hover:shadow-sm transition-all">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                  <p className="text-lg font-semibold text-accent">
                    +91 8817290970
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Call us during business hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card 2 - Email */}
            <Card className="bg-white border-border shadow-lg hover:shadow-sm transition-all">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                  <p className="text-sm font-semibold text-accent break-all">
                    stlera.info@gmail.com
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We'll respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card 3 - Location */}
            <Card className="bg-white border-border shadow-lg hover:shadow-sm transition-all">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Location
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    668/699 Indira Gandhi Ward SNJ
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Jabalpur, Madhya Pradesh 482003, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Info Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start ">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start p-14">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/Contact Us.jpg" // Replace with your image path
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Business Hours
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Monday - Friday
                      </p>
                      <p className="text-muted-foreground">
                        9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Saturday</p>
                      <p className="text-muted-foreground">
                        9:00 AM - 2:00 PM IST
                      </p>
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
                    <p className="text-sm font-semibold text-accent">
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Why Contact Us
                </h2>
                <ul className="space-y-3">
                  {[
                    "Expert technical consultation",
                    "Custom product solutions",
                    "Quick response times",
                    "Competitive pricing",
                    "Dedicated account management",
                    "Worldwide logistics support",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-foreground"
                    >
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
          <h2 className="text-4xl font-bold mb-4">
            Questions About Our Services?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our team of experts is ready to provide solutions tailored to your
            specific industrial needs.
          </p>
          <p className="text-lg font-semibold">
            Call us at <span className="text-accent">+91 8817290970</span> 
          </p>
        </div>
      </section>
    </div>
  );
}
