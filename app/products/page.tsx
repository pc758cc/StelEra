"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const valves = [
  {
    name: "Rapid-Flow Response Valve",
    image: "/Rapid-Flow Response Valve.jpg",
    description:
      "An instant-activation safety valve engineered for emergency flow release in critical fire and utility systems.",
  },
  {
    name: "Marine-Grade Bronze Shut Valve",
    image: "/Marine-Grade Bronze Shut Valve.jpg",
    description:
      "Crafted from corrosion-resistant bronze, ideal for saltwater, shipboard systems, and harsh industrial use.",
  },
  {
    name: "Heavy-Duty Ductile Control Valve",
    image: "/Heavy-Duty Ductile Control Valve.jpg",
    description:
      "Built for durability, this valve delivers stable flow regulation in water distribution and thermal systems.",
  },
  {
    name: "High-Pressure Steel Isolation Valve",
    image: "/High-Pressure Steel Isolation Valve.jpg",
    description:
      "Designed for demanding duty cycles, offering reliable shut-off in high-pressure and elevated-temperature pipelines.",
  },
  {
    name: "External Yoke Slide Valve",
    image: "/External Yoke Slide Valve.jpg",
    description:
      "A rugged outside-screw model built for easy servicing and dependable linear motion control.",
  },
  // {
  //   name: "Forged Pressure-Seal Gate Unit",
  //   image: "/Forged Pressure-Seal Gate Unit.jpg",
  //   description:
  //     "Made from forged steel, providing exceptional structural strength for high-pressure networks.",
  // },
  // {
  //   name: "Manual Slurry Blade Valve",
  //   image: "/Manual Slurry Blade Valve.jpg",
  //   description:
  //     "A robust knife-edge valve engineered for dense media such as slurries, powders, and viscous fluids.",
  // },
  // {
  //   name: "Parallel-Track Shut-Off Valve",
  //   image: "/Parallel-Track Shut-Off Valve.jpg",
  //   description:
  //     "Offers bidirectional sealing and minimal seat wear, ideal for low-pressure-drop applications.",
  // },
  // {
  //   name: "Air-Actuated Slurry Knife Valve",
  //   image: "/Air-Actuated Slurry Knife Valve.jpg",
  //   description:
  //     "Pneumatically powered for remote operation, suited for abrasive, solid-laden, or fiber-rich flow streams.",
  // },
  // {
  //   name: "Indicator Stem Shut Valve",
  //   image: "/Indicator Stem Shut Valve.jpg",
  //   description:
  //     "Features a rising stem mechanism that provides direct visual confirmation of valve position.",
  // },
  // {
  //   name: "Full-Port Conduit Passage Valve",
  //   image: "/Full-Port Conduit Passage Valve.jpg",
  //   description:
  //     "Ensures unobstructed full-bore flow, making it ideal for pipeline pigging and long-distance transport systems.",
  // },
  // {
  //   name: "Right-Angle Flow Control Valve",
  //   image: "/Right-Angle Flow Control Valve.jpg",
  //   description:
  //     "A 90-degree configuration valve offering precise throttling for liquids, steam, and process media.",
  // },
  // {
  //   name: "Leak-Safe Bellows Control Valve",
  //   image: "/Leak-Safe Bellows Control Valve.jpg",
  //   description:
  //     "A hermetic sealing design preventing fugitive emissions, suitable for hazardous fluid service.",
  // },
  // {
  //   name: "Bronze Angle Regulation Valve",
  //   image: "/Bronze Angle Regulation Valve.jpg",
  //   description:
  //     "Provides smooth flow control with enhanced corrosion resistance—ideal for marine and industrial usage.",
  // },
  // {
  //   name: "Cast Steel Regulating Valve",
  //   image: "/Cast Steel Regulating Valve.jpg",
  //   description:
  //     "Engineered for tough service environments that require reliable modulation under high pressure or temperature.",
  // },
  // {
  //   name: "Ultra-Low Temperature Globe Valve",
  //   image: "/Ultra-Low Temperature Globe Valve.jpg",
  //   description:
  //     "Specially developed for cryogenic services, maintaining sealing integrity at extremely low temperatures.",
  // },
  // {
  //   name: "External Yoke Flow Valve",
  //   image: "/External Yoke Flow Valve.jpg",
  //   description:
  //     "Built with an outside screw and yoke for simplified inspection and continuous operational control.",
  // },
  // {
  //   name: "Pneumatic Angle-Control Valve",
  //   image: "/Pneumatic Angle-Control Valve.jpg",
  //   description:
  //     "Air-driven control valve for automated performance in angle-flow configurations.",
  // },
  // {
  //   name: "Y-Channel Efficiency Valve",
  //   image: "/Y-Channel Efficiency Valve.jpg",
  //   description:
  //     "Features a Y-pattern design to reduce pressure loss while maintaining excellent throttling capability.",
  // },
  // {
  //   name: "Disc-Pivot Check Barrier",
  //   image: "/Disc-Pivot Check Barrier.jpg",
  //   description:
  //     "A pivoting disc mechanism ensuring quick closure and smooth operation in large diameter lines.",
  // },
  // {
  //   name: "Slim-Fit Wafer Check Mechanism",
  //   image: "/Slim-Fit Wafer Check Mechanism.jpg",
  //   description:
  //     "Compact wafer design for efficient backflow prevention in limited-space installations.",
  // },
  // {
  //   name: "Tilt-Disc Return Blocker",
  //   image: "/Tilt-Disc Return Blocker.jpg",
  //   description:
  //     "Provides rapid shutoff with minimal pressure drop, helping prevent reverse flow effectively.",
  // },
  // {
  //   name: "Dual-Plate Wafer Retention Valve",
  //   image: "/Dual-Plate Wafer Retention Valve.jpg",
  //   description:
  //     "A lightweight check valve offering quick response and dependable reverse-flow protection.",
  // },
  // {
  //   name: "Forged Steel Non-Return Valve",
  //   image: "/Forged Steel Non-Return Valve.jpg",
  //   description:
  //     "Constructed for high-pressure systems, giving exceptional resistance to mechanical stress.",
  // },
  // {
  //   name: "Vertical-Lift Return Stop Valve",
  //   image: "/Vertical-Lift Return Stop Valve.jpg",
  //   description:
  //     "Operates on a vertical lift mechanism and excels in maintaining one-directional flow in horizontal lines.",
  // },
  // {
  //   name: "Cast Iron Fluid Shut Valve",
  //   image: "/Cast Iron Fluid Shut Valve.jpg",
  //   description:
  //     "A durable shut-off valve suited for water, gas, oil, and general utility services.",
  // },
  // {
  //   name: "Cryogenic Isolation Gate Valve",
  //   image: "/Cryogenic Isolation Gate Valve.jpg",
  //   description:
  //     "Engineered to perform at ultra-low temperatures, offering secure sealing for cryogenic media.",
  // },
];

const pipes = [
  {
    name: "Premium Stainless Flow Tubes",
    image: "/Premium Stainless Flow Tubes.jpg",
    description:
      "High-purity stainless tubes engineered for chemical, food-grade, and pharmaceutical handling with superior corrosion resistance.",
  },
  {
    name: "Industrial Carbon Line Pipes",
    image: "/Industrial Carbon Line Pipes.jpg",
    description:
      "Robust carbon-steel pipelines designed to withstand high pressure in energy, refinery, and utility services.",
  },
  {
    name: "Enhanced Alloy Performance Tubing",
    image: "/Enhanced Alloy Performance Tubing.jpg",
    description:
      "Heat- and stress-resistant alloy pipes crafted for extreme operating environments and thermal variations.",
  },
  {
    name: "Precision Seamless Flow Conduit",
    image: "/Precision Seamless Flow Conduit.jpg",
    description:
      "Seamless construction offering superior uniformity, ideal for critical projects requiring maximum structural integrity.",
  },
  // {
  //   name: "Fusion-Weld Structural Pipes",
  //   image: "/Fusion-Weld Structural Pipes.jpg",
  //   description:
  //     "Economical welded piping suitable for general fabrication, water transport, and industrial frameworks.",
  // },
  // {
  //   name: "Corrosion-Shield Duplex Tubing",
  //   image: "/Corrosion-Shield Duplex Tubing.jpg",
  //   description:
  //     "Duplex pipes combining high strength with outstanding chloride-resistant properties for aggressive applications.",
  // },
];

const others = [
  {
    name: "Acoustic Discharge Silencer",
    image: "/Acoustic Discharge Silencer.jpg",
    description:
      "A high-efficiency vent silencer engineered to suppress noise generated during high-pressure steam or gas release events.",
  },
  {
    name: "Pipeline Connectors & Assemblies",
    image: "/Pipeline Connectors & Assemblies.jpg",
    description:
      "A complete range of pipes and precision fittings designed to support diverse industrial flow and structural setups.",
  },
  {
    name: "Advanced Ceramic Spheres",
    image: "/Advanced Ceramic Spheres.jpg",
    description:
      "Extremely hard ceramic spheres used in high-precision valves, bearings, and demanding industrial applications.",
  },
  {
    name: "Industrial Processing Chemicals",
    image: "/Industrial Processing Chemicals.jpg",
    description:
      "A versatile selection of chemicals supplied for manufacturing, treatment, and formulation across multiple industries.",
  },
  {
    name: "Much More...",
    image: "/more.png",
    description: "Other Solutions aswell on demand.",
  },
];

const allProducts = [...valves, ...pipes, ...others];

const categories = [
  { id: "all", name: "Your Items", products: allProducts },
  // { id: "valves", name: "VALVES", products: valves },
  // { id: "pipes", name: "PIPES", products: pipes },
  // { id: "others", name: "ACCESSORIES", products: others },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.some((cat) => cat.id === categoryParam)) {
      setSelectedCategory(categoryParam);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchParams]);

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home / Products
            </Link>
            {/* <h1 className="text-5xl lg:text-6xl font-bold text-primary">{currentCategory?.name}</h1> */}
            <h1 className="text-5xl lg:text-6xl font-bold text-primary">
              We Deliver
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Discover our comprehensive range of precision-engineered
              industrial components, engineered for reliability and performance
              across global applications.
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
                      selectedCategory === category.id
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    }
                  >
                    {/* {category.products.length} */}
                  </Badge>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCategory?.products.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <Card className="h-full bg-white border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden rounded-xl">
                <CardContent className="p-0 space-y-0 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-48 bg-white flex items-center justify-center overflow-hidden border-b border-border">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300 p-0"
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
                    {/* <div className="flex items-center gap-2 text-accent font-semibold pt-4 mt-4 border-t border-border group-hover:translate-x-1 transition-transform">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {currentCategory?.products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team can help you find the perfect product for your
            specific requirements.
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
  );
}
