import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight } from "lucide-react"

const industries = [
  {
    name: "Oil & Gas",
    image: "/Oil & Gas.jpg",
    description:
      "Providing high-quality valves for upstream, midstream, and downstream oil & gas operations with advanced sealing technology.",
  },
  {
    name: "Power Generation",
    image: "/Oil & Gas.jpg",
    description:
      "Specialized valves for thermal, nuclear, and renewable energy power generation facilities with precision control.",
  },
  {
    name: "Chemical & Petrochemical",
    image: "/Petrochemical.jpg",
    description:
      "Corrosion-resistant valves designed for harsh chemical processing environments requiring reliability.",
  },
  {
    name: "Water Treatment",
    image: "/Water Treatment.jpg",
    description:
      "Reliable valve solutions for municipal and industrial water treatment applications with certified quality.",
  },
]

export default function IndustriesPage() {
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
            <span className="text-foreground font-medium">Industries</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Modern minimal design */}
      <section className="relative py-20 bg-gradient-to-r from-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="space-y-6">
            <Badge className="w-fit mx-auto bg-accent/10 text-accent border-accent/20">Industries</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary">Industries We Serve</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Providing specialized, precision-engineered solutions across diverse industrial sectors with over 20 years
              of demonstrated expertise and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid - Enhanced card design */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-white border-border hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-xl h-full flex flex-col"
              >
                <CardContent className="p-0 space-y-0 h-full flex flex-col">
                  {/* Industry Image */}
                  <div className="relative h-40 bg-muted/50 overflow-hidden">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Industry Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Why Partner With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading expertise and commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry-Specific Solutions",
                description: "Customized valve designs and materials for each sector's unique requirements.",
              },
              {
                title: "Global Compliance",
                description: "Full adherence to international standards and regulatory requirements worldwide.",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing protocols ensuring superior performance and durability.",
              },
              {
                title: "Expert Support",
                description: "Dedicated technical team providing 24/7 support and after-sales service.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold">20+</div>
              <p className="text-lg text-white/80">Years of Experience</p>
              <div className="h-1 w-12 bg-accent mx-auto mt-4"></div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold">50+</div>
              <p className="text-lg text-white/80">Countries Served</p>
              <div className="h-1 w-12 bg-accent mx-auto mt-4"></div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold">3000+</div>
              <p className="text-lg text-white/80">Satisfied Clients</p>
              <div className="h-1 w-12 bg-accent mx-auto mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Comprehensive Industry Solutions</h2>
              <div className="space-y-6">
                {[
                  "Precision-engineered components for critical operations",
                  "Advanced materials selection for extreme environments",
                  "Full technical documentation and compliance certificates",
                  "Customization options for specialized requirements",
                  "Competitive pricing with volume discounts available",
                  "Fast delivery and logistics support worldwide",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Connect with our expert team to discuss your industry-specific requirements and discover how our
                solutions can enhance your operations.
              </p>
              <Link href="/contact-us" className="inline-block">
                <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
