"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Globe,
  Users,
  Zap,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  const featuredProducts = [
    {
      name: "Bellow Seal Gate Valve",
      image: "/Bellow Seal Gate Valve.jpg",
      description:
        "Designed to provide leak-proof sealing and is suitable for high-temperature applications.",
    },
    {
      name: "Rising Stem Gate Valve",
      image: "/Rising Stem Gate Valve.jpg",
      description:
        "Premium ball valve with excellent corrosion resistance and precision engineering.",
    },
    {
      name: "Bronze Gate Valve",
      image: "/Bronze Gate Valve.jpg",
      description:
        "Offers excellent corrosion resistance and is ideal for marine and industrial applications.",
    },
    {
      name: "Cast Steel Globe Valve",
      image: "/Cast Steel Globe Valve.jpg",
      description:
        "Designed for high-pressure and high-temperature service applications.",
    },
    {
      name: "Butterfly Check Valve",
      image: "/Butterfly Check Valve.jpg",
      description:
        "Prevents backflow and is suitable for large diameter pipeline applications.",
    },
    {
      name: "Wafer Check Valve",
      image: "/Wafer Check Valve.jpg",
      description:
        "High-performance valves for precise valve control and automation systems.",
    },
    {
      name: "Stainless Steel Pipes",
      image: "/Stainless Steel Pipes.jpg",
      description:
        "High-grade stainless steel pipes suitable for chemical and pharmaceutical industries.",
    },
  ];

  const featuredProductsByCategory = {
    valves: {
      name: "Duplex Stainless Steel Ball Valve",
      image: "/Duplex Stainless Steel Ball Valve.jpg",
      description:
        "Ball valves, also called shut-off valves are used to control the flow of liquid and gases in a pipeline by means of a rotary ball having a bore. These are manufactured of excellent grade raw material with superior durability and performance.",
      features: [
        "High Durability",
        "Corrosion Resistant",
        "Precision Engineering",
        "Quality Tested",
      ],
    },
    pipes: {
      name: "Stainless Steel Seamless Pipes",
      image: "/Seamless Pipes.jpg",
      description:
        "Premium grade stainless steel seamless pipes designed for high-pressure applications in chemical, pharmaceutical, and food processing industries. Manufactured with precision to ensure optimal performance and longevity.",
      features: [
        "Seamless Construction",
        "High Pressure Rating",
        "Corrosion Resistant",
        "Food Grade Quality",
      ],
    },
    others: {
      name: "Ceramic Balls",
      image: "/Ceramic Balls.jpg",
      description:
        "A Ceramic Ball is a hard, wear-resistant ball made from advanced ceramics, used in valves, bearings, and industrial applications requiring high strength, corrosion resistance, and durability",
      features: [
        "High Torque Output",
        "Energy Efficient",
        "Precise Control",
        "Long Service Life",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen md:min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden -pt-20 -mt-10 py-12 md:py-16 lg:py-20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-accent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                  <Zap className="w-3 h-3 mr-2" />
                  Excellence In Industry
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight">
                  Engineering
                  <span className="block text-accent mt-2">Solutions</span>
                  <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-normal mt-4">
                    for Tomorrow
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Precision-engineered industrial components designed for
                reliability, performance, and sustainability across global
                markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-lg transition-all duration-300 bg-transparent"
                  >
                    Products
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Image (Hidden on mobile) */}
            <div className="hidden lg:block relative h-[500px] xl:h-[600px] rounded-2xl overflow-hidden ">
              <img
                src="/heroSection.png"
                alt="Industrial Solution"
                className="w-full h-full object-cover object-center"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">12+</div>
              <p className="text-white/80">Years of Excellence</p>
              <div className="h-1 w-12 bg-accent mt-4"></div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">28+</div>
              <p className="text-white/80">Countries Worldwide</p>
              <div className="h-1 w-12 bg-accent mt-4"></div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">700+</div>
              <p className="text-white/80">Projects Delivered</p>
              <div className="h-1 w-12 bg-accent mt-4"></div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">98.6%</div>
              <p className="text-white/80">Client Satisfaction</p>
              <div className="h-1 w-12 bg-accent mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 lg:h-[450px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/Engineered for Excellence.jpg"
                alt="Engineered for Excellence"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit bg-accent/10 text-accent border-accent/20">
                  <Shield className="w-3 h-3 mr-2" />
                  About Us
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                  Engineered for Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design and manufacture industrial valves, pipes, and
                  components that set global standards. Our commitment to
                  precision, innovation, and reliability has made us a trusted
                  partner across 50+ countries.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Certified",
                  "Made in India with Global Quality",
                  "Advanced Manufacturing Facility",
                  "24/7 Technical Support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <Link href="/about-us">
                  <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive industrial solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Precision Engineering",
                description:
                  "Engineered to exacting specifications and quality standards",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Latest technology and manufacturing techniques",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Serving industries worldwide with local expertise",
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated technical team available 24/7",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading companies across diverse industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Oil & Gas", icon: "⛽" },
              { name: "Petrochemical", icon: "🏭" },
              { name: "Aerospace", icon: "✈️" },
              { name: "Pharmaceutical", icon: "💊" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white to-muted/20 border border-border rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with our expert team to discuss your industrial requirements
            and find the perfect solution.
          </p>
          <Link href="/contact-us">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg rounded-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-accent transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="hover:text-accent transition-colors"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-accent transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Valves
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Pipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Accessories
                  </a>
                </li>

              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <p href="#" className=" transition-colors">
                  Operating Across Global Markets
                  </p>
                </li>
                <li>
                  <p href="#" className="transition-colors">
                  Accredited Manufacturing
                  </p>
                </li>
                <li>
                  <p href="#" className=" transition-colors">
                  Built on Quality, Precision, and Integrity
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <p>+91 8817290970</p>
                <p>stlera@gmail.com</p>
                <p>668/699 Indira Gandgi eard SNJ</p>
                <p>Jabalpur, Madhya Pradesh, 482003, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Stlera Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeaturedProductSection({ products }: { products: any }) {
  const [selectedCategory, setSelectedCategory] = React.useState("valves");

  const categories = [
    { id: "valves", name: "Valves", icon: "⚙️" },
    { id: "pipes", name: "Pipes", icon: "🔧" },
    { id: "others", name: "Others", icon: "⚡" },
  ];

  const currentProduct = products[selectedCategory];

  return (
    <div className="space-y-12">
      <div className="flex justify-center">
        <div className="flex bg-white rounded-lg p-1.5 shadow-lg border mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={currentProduct.image || "/placeholder.svg"}
            alt={currentProduct.name}
            className="w-[600px] h-[440px] object-cover rounded-lg shadow-lg transition-all duration-500"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">
            {currentProduct.name}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {currentProduct.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {currentProduct.features.map((feature: string, index: number) => (
              <Badge
                key={index}
                className="bg-blue-600 text-white border-blue-600"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {feature}
              </Badge>
            ))}
          </div>
          <div className="pt-4">
            <Link
              href={`/products?category=${selectedCategory}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
