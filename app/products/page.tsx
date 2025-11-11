"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const valves = [
  {
    name: "Deluge Valve",
    image: "/Deluge Valve.jpg",
    description:
      "Bellow Seal Gate Valve is designed to provide leak-proof sealing and is suitable for high-temperature applications.",
  },
  {
    name: "Bronze Gate Valve",
    image: "/Bronze Gate Valve.jpg",
    description:
      "Bronze Gate Valve offers excellent corrosion resistance and is ideal for marine and industrial applications.",
  },
  {
    name: "Ductile Iron Globe Valve",
    image: "/Ductile Iron Globe Valve.jpg",
    description: "Ductile Iron Globe Valve offers superior strength and is suitable for water and steam applications.",
  },
  {
    name: "Cast Steel Gate Valve",
    image: "/Cast Steel Gate Valve.jpg",
    description:
      "Cast Steel Gate Valve is suitable for high-pressure and high-temperature applications in various industries.",
  },
  {
    name: "OS Gate Valve",
    image: "/OS Gate Valve.jpg",
    description:
      "OS Gate Valve is suitable for outside screw and yoke design, providing easy maintenance and operation.",
  },
  {
    name: "Forged Steel Gate Valve",
    image: "/Forged Steel Gate Valve.jpg",
    description:
      "Forged Steel Gate Valve is designed for use in high-pressure applications and offers superior strength.",
  },
  {
    name: "Manual Knife Gate Valve",
    image: "/Manual Knife Gate Valve.jpg",
    description: "Manual Knife Gate Valve is ideal for applications with thick fluids, slurries, and powders.",
  },
  {
    name: "Parallel Slide Gate Valve",
    image: "/Parallel Slide Gate Valve.jpg",
    description: "Parallel Slide Gate Valve is suitable for bi-directional flow control and provides tight shut-off.",
  },
  {
    name: "Pneumatic Knife Gate Valve",
    image: "/Pneumatic Knife Gate Valve.jpg",
    description:
      "Pneumatic Knife Gate Valve offers automated operation and is suitable for remote control applications.",
  },
  {
    name: "Rising Stem Gate Valve",
    image: "/Rising Stem Gate Valve.jpg",
    description:
      "Rising Stem Gate Valve provides visual indication of valve position and is suitable for various applications.",
  },
  {
    name: "Through Conduit Gate Valve",
    image: "/Through Conduit Gate Valve.jpg",
    description: "Through Conduit Gate Valve allows full bore flow and is suitable for pipeline applications.",
  },
  {
    name: "Angle Globe Valve",
    image: "/Angle Globe Valve.jpg",
    description:
      "Angle Globe Valve provides excellent throttling control and is suitable for steam and liquid applications.",
  },
  {
    name: "Bellow Seal Globe Valve",
    image: "/Bellow Seal Globe Valve.jpg",
    description: "Bellow Seal Globe Valve offers leak-proof sealing and is ideal for hazardous fluid applications.",
  },
  {
    name: "Bronze Angle Globe Valve",
    image: "/Bronze Angle Globe Valve.jpg",
    description: "Bronze Angle Globe Valve provides excellent corrosion resistance and precise flow control.",
  },
  {
    name: "Cast Steel Globe Valve",
    image: "/Cast Steel Globe Valve.jpg",
    description: "Cast Steel Globe Valve is designed for high-pressure and high-temperature service applications.",
  },
  {
    name: "Cryogenic Globe Valve",
    image: "/Cryogenic Globe Valve.jpg",
    description: "Cryogenic Globe Valve is specially designed for extremely low temperature applications.",
  },
  {
    name: "OS Globe Valve",
    image: "/OS Globe Valve.jpg",
    description: "OS Globe Valve features outside screw and yoke design for easy maintenance and operation.",
  },
  {
    name: "Pneumatic Angle Gate Valve",
    image: "/Pneumatic Angle Gate Valve.jpg",
    description: "Pneumatic Angle Gate Valve provides automated operation and precise flow control.",
  },
  {
    name: "Y Pattern Globe Valve",
    image: "/Y Pattern Globe Valve.jpg",
    description: "Y Pattern Globe Valve offers reduced pressure drop and is suitable for high-flow applications.",
  },
  {
    name: "Butterfly Check Valve",
    image: "/Butterfly Check Valve.jpg",
    description: "Butterfly Check Valve prevents backflow and is suitable for large diameter pipeline applications.",
  },
  {
    name: "Wafer Check Valve",
    image: "/Wafer Check Valve.jpg",
    description: "Wafer Check Valve provides compact design and is ideal for space-constrained installations.",
  },
  {
    name: "Tilting Disc Swing Check Valve",
    image: "/Tilting Disc Swing Check Valve.jpg",
    description: "Tilting Disc Swing Check Valve offers low pressure drop and quick closure to prevent backflow.",
  },
  {
    name: "Dual Plate Wafer Check Valve",
    image: "/Dual Plate Wafer Check Valve.jpg",
    description: "Dual Plate Wafer Check Valve provides compact design and reliable backflow prevention.",
  },
  {
    name: "Forged Steel Check Valve",
    image: "/Forged Steel Check Valve.jpg",
    description: "Forged Steel Check Valve is designed for high-pressure applications and offers superior strength.",
  },
  {
    name: "Lift Check Valve",
    image: "/Lift Check Valve.jpg",
    description: "Lift Check Valve provides reliable backflow prevention and is suitable for horizontal installations.",
  },
  {
    name: "Cast Iron Gate Valve",
    image: "/Cast Iron Gate Valve.jpg",
    description:
      "Cast Iron Gate Valve provides reliable shut-off service for water, oil, gas, and other non-corrosive fluids.",
  },
  {
    name: "Cryogenic Gate Valve",
    image: "/Cryogenic Gate Valve.jpg",
    description:
      "Cryogenic Gate Valve is designed for extremely low temperature applications and provides excellent sealing.",
  },
]

const pipes = [
  {
    name: "Stainless Steel Pipes",
    image: "/Stainless Steel Pipes.jpg",
    description:
      "High-grade stainless steel pipes suitable for chemical and pharmaceutical industries with excellent corrosion resistance.",
  },
  {
    name: "Carbon Steel Pipes",
    image: "/Carbon Steel Pipes.jpg",
    description: "Durable carbon steel pipes designed for high-pressure applications in oil and gas industries.",
  },
  {
    name: "Alloy Steel Pipes",
    image: "/Alloy Steel Pipes.jpg",
    description: "Premium alloy steel pipes engineered for extreme temperature and pressure conditions.",
  },
  {
    name: "Seamless Pipes",
    image: "/Seamless Pipes.jpg",
    description:
      "Precision seamless pipes manufactured for critical applications requiring superior strength and reliability.",
  },
  {
    name: "Welded Pipes",
    image: "/Welded Pipes.jpg",
    description:
      "Cost-effective welded pipes suitable for general industrial applications and infrastructure projects.",
  },
  {
    name: "Duplex Steel Pipes",
    image: "/Duplex Steel Pipes.jpg",
    description: "Advanced duplex steel pipes offering superior corrosion resistance and mechanical properties.",
  },
]

const others = [
  {
    name: "Silencer",
    image: "/Silencer.jpg",
    description:
      "A Vent Silencer is equipment used to reduce noise produced by high-pressure gas or steam release into the atmosphere.",
  },
  {
    name: "Pipe And Fittings",
    image: "/Pipe & Fittings.jpg",
    description:
      "Pipes and fittings of various materials and sizes are manufactured for diverse industrial applications.",
  },
  {
    name: "Ceramic Balls",
    image: "/Ceramic Balls.jpg",
    description:
      "A Ceramic Ball is a hard, wear-resistant ball made from advanced ceramics, used in valves, bearings, and industrial applications requiring high strength, corrosion resistance, and durability",
  },
  {
    name: "Chemicals",
    image: "/Chemicals.jpg",
    description:
      "Wide range of industrial chemicals supplied for applications across manufacturing, processing, and treatment industries.",
  },
]

const allProducts = [...valves, ...pipes, ...others]

const categories = [
  { id: "all", name: "ALL PRODUCTS", products: allProducts },
  { id: "valves", name: "VALVES", products: valves },
  { id: "pipes", name: "PIPES", products: pipes },
  { id: "others", name: "ACCESSORIES", products: others },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("valves")
  const searchParams = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categories.some((cat) => cat.id === categoryParam)) {
      setSelectedCategory(categoryParam)
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [searchParams])

  const currentCategory = categories.find((cat) => cat.id === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-4">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home / Products
            </Link>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary">{currentCategory?.name}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Discover our comprehensive range of precision-engineered industrial components, engineered for reliability
              and performance across global applications.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="mb-16">
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg hover:shadow-xl"
                    : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.name}
                  <Badge
                    className={
                      selectedCategory === category.id ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                    }
                  >
                    {category.products.length}
                  </Badge>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCategory?.products.map((product, index) => (
            <Link key={index} href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <Card className="h-full bg-white border-border hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden rounded-xl">
                <CardContent className="p-0 space-y-0 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-48 bg-muted/50 flex items-center justify-center overflow-hidden border-b border-border">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300 p-4"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accent font-semibold pt-4 mt-4 border-t border-border group-hover:translate-x-1 transition-transform">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {currentCategory?.products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team can help you find the perfect product for your specific requirements.
          </p>
          <Link href="/contact-us">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto">
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
