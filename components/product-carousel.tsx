"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface Product {
  name: string;
  image: string;
  description: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);

  const extendedProducts = [...products, ...products, ...products];
  const totalProducts = products.length;

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= totalProducts * 2) {
          setTimeout(() => setCurrentIndex(totalProducts), 0);
          return totalProducts;
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalProducts]);

  useEffect(() => {
    setCurrentIndex(totalProducts);
  }, [totalProducts]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= totalProducts * 2) {
        setTimeout(() => setCurrentIndex(totalProducts), 0);
        return totalProducts;
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex < totalProducts) {
        setTimeout(() => setCurrentIndex(totalProducts * 2 - 1), 0);
        return totalProducts * 2 - 1;
      }
      return nextIndex;
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 p-4 md:p-6 lg:p-8 backdrop-blur-sm">
        <div className="relative h-80 md:h-88 lg:h-96">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {extendedProducts.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-1 md:px-2 ${
                  visibleCards === 1
                    ? "w-full"
                    : visibleCards === 2
                    ? "w-1/2"
                    : "w-1/3"
                }`}
              >
                <Card
                  className="group hover:shadow-3xl transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-blue-200/50 h-full"
                  // style={{
                  //   boxShadow:
                  //     "0 -12px 20px -8px rgba(0, 0, 0, 0.15), 0 12px 20px -8px rgba(0, 0, 0, 0.15)",
                  // }}
                >
                  <CardContent className="p-4 md:p-6">
                    {/* <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 md:p-6 mb-4 h-32 md:h-40 lg:h-48 flex items-center justify-center relative overflow-hidden group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-500"> */}
                    <div className="mb-5">
                      <div className=" rounded-2xl p-4 md:p-6 mb-4 h-32 md:h-40 lg:h-48 flex items-center justify-center relative overflow-hidden group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-40 h-40 md:w-28 md:h-28 lg:w-48 lg:h-52 object-contain group-hover:scale-110 transition-all duration-500 ease-out relative z-10"
                        />
                      </div>
                      <div className="bg-gradient-to-br from-blue-100 group-hover:to-indigo-200 rounded-2xl p-4 md:p-6 mb-4 h-32 md:h-40 lg:h-48  group-hover:from-blue-50 to-indigo-100 transition-all duration-500">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight text-center">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 leading-relaxed text-center">
                          {product.description}
                        </p>
                        <div className="flex justify-center">
                          <Link
                            href={`/products/${product.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="inline-flex items-center px-2 md:px-3 py-1 md:py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 font-medium text-xs transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group/btn"
                          >
                            View Details
                            <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white border-0 hover:shadow-2xl hover:scale-110 transition-all duration-300 w-8 h-8 md:w-12 md:h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white border-0 hover:shadow-2xl hover:scale-110 transition-all duration-300 w-8 h-8 md:w-12 md:h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
      </Button>

      <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              currentIndex % totalProducts === index
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/50"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(totalProducts + index)}
          />
        ))}
      </div>
    </div>
  );
}
