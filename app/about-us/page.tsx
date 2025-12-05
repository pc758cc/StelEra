import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Award, Target, Zap, ArrowRight } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-r from-primary/20 to-accent/500 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="space-y-6">
            <Badge className="w-fit mx-auto bg-accent/10 text-accent border-accent/20">
              Our Story
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary">
              Engineered Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Over two decades of precision engineering, innovation, and
              unwavering commitment to delivering world-class industrial
              solutions.
            </p>
          </div>
        </div>
      </section> */}

      <section className="relative py-20  bg-gradient-to-b from-white to-purple-100/80 overflow-hidden rounded-b-[3rem] border-b-4 border-[rgb(120,30,180)]">
        {/* Simple gradient blur */}
        <div className="absolute top-20 right-20 w-64 h-96 bg-[rgb(170,48,232)]/10 rounded-full blur-4xl"></div>
        <div className="absolute bottom-10 left-0 w-64 h-96 bg-[rgb(170,48,232)]/10 rounded-full blur-4xl"></div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="space-y-6">
            <Badge className="w-fit mx-auto bg-[rgb(170,48,232)]/10 text-[rgb(170,48,232)] border-[rgb(170,48,232)]/20">
              Our Story
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Engineered Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Over two decades of precision engineering, innovation, and
              unwavering commitment to delivering world-class industrial
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                  About Our Company
                </h2>
                <div className="h-1 w-16 bg-accent rounded"></div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2001 and based in Raipur, Chhattisgarh, India, we
                have established ourselves as a leading manufacturer and
                supplier of premium industrial products serving global markets.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary mb-2">
                    Our Foundation
                  </p>
                  <p className="text-muted-foreground">
                    Built on principles of quality, integrity, and innovation,
                    inspired by visionary leaders who understood the value of
                    long-term excellence and smart decision-making.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-primary mb-2">
                    Our Approach
                  </p>
                  <p className="text-muted-foreground">
                    We understand that every client has unique needs. Our team
                    of skilled engineers and technicians works closely with
                    clients to provide customized solutions that exceed
                    expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/About Our Company.jpg"
                alt="About Our Company"
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div> */}
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-primary/5 to-transparent border-border hover:shadow-lg transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold text-primary">
                    Our Purpose
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional industrial products and services that
                  adapt to changing market demands. We uphold technical mastery,
                  rigorous quality standards, and outstanding client support
                  while driving sustainable growth and maintaining a leading
                  position in the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-transparent border-border hover:shadow-lg transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">
                    Our Inspiration
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become a global leader in industrial manufacturing by
                  delivering innovative, durable, and efficient solutions. We
                  focus on long-term value, smart decision-making, and
                  continuous improvement across all operations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Core Strengths
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What sets us apart in the industrial manufacturing landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "ISO Certified",
                  description:
                    "Certified commitment to quality and international standards",
                },
                {
                  icon: CheckCircle2,
                  title: "12+ Years Experience",
                  description:
                    "Proven track record serving industries worldwide",
                },
                {
                  icon: Target,
                  title: "Quality Assured",
                  description:
                    "All products tested and certified for superior performance",
                },
                {
                  icon: Zap,
                  title: "Innovation Focused",
                  description:
                    "Continuous improvement and technological advancement",
                },
              ].map((strength, idx) => {
                const Icon = strength.icon;
                return (
                  <Card
                    key={idx}
                    className="bg-white border-border hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-6 space-y-4 text-center">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <h3 className="font-bold text-primary">
                        {strength.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {strength.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Manufacturing Capabilities */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-border mb-20">
            <CardContent className="p-12 space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-primary mb-2">
                  Facility
                </h2>
                <p className="text-muted-foreground">
                  Advanced engineering center and integrated manufacturing unit
                </p>
              </div>

              <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our facility is built to optimize workflow, precision, and
                production speed. Over the years, we’ve established a strong
                presence in the industry by crafting a diverse range of
                high-performance industrial components and delivering reliable
                solutions to clients across global markets.
              </p>

              <div className="border-l-4 border-accent pl-6">
                <p className="text-lg text-foreground italic mb-2">
                  {
                    "“The strongest business choices are those grounded in integrity, long-term value, and uncompromising quality. We strive to create products built to perform reliably for years to come.”"
                  }
                </p>
                {/* <p className="text-sm text-muted-foreground">
                  — Inspired by principles of business excellence
                </p> */}
              </div>
            </CardContent>
          </Card>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { number: "12+", label: "Years Experience" },
              { number: "28+", label: "Countries Served" },
              { number: "700+", label: "Satisfied Clients" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
                <div className="h-1 w-12 bg-accent mx-auto mt-4 rounded"></div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted/30 rounded-2xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "ISO certified company with proven quality management systems",
                "Team of experienced engineers and dedicated technicians",
                "Rigorous testing and certification for all products",
                "Custom solutions tailored to your specific requirements",
                "Global supply capabilities with reliable logistics",
                "24/7 technical support and after-sales service",
                "Competitive pricing with volume discounts available",
                "Commitment to sustainability and industry standards",
              ].map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how our industrial solutions can enhance your operations
              and drive growth.
            </p>
            <Link href="/contact-us">
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
