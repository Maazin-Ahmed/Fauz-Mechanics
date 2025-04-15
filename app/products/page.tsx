"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"
import ProductComparison from "@/components/product-comparison"

const products = [
  {
    id: "digimacks",
    name: "Digimacks",
    category: "Digital Instruments",
    description: "High-precision digital pressure gauge with customizable settings and multi-unit display.",
    image: "/images/products/digimacks.png",
  },
  {
    id: "digisense",
    name: "Digisense",
    category: "Digital Instruments",
    description: "Advanced digital pressure sensor with real-time monitoring and high accuracy readings.",
    image: "/images/products/digisense.png",
  },
  {
    id: "digitrans",
    name: "Digitrans DPT 411",
    category: "Digital Instruments",
    description: "Compact differential pressure transmitter with USB connectivity and data logging capabilities.",
    image: "/images/products/digitrans.png",
  },
  {
    id: "clean-room-monitor",
    name: "Clean Room Monitor",
    category: "Monitoring Systems",
    description: "Multi-parameter monitoring system for controlled environments with alarm functionality.",
    image: "/images/products/clean-room-monitor.png",
  },
  {
    id: "air-nozzles",
    name: "Air Nozzles",
    category: "Flow Control",
    description: "Precision-engineered air nozzles for controlled airflow in critical applications.",
    image: "/images/products/air-nozzle.png",
  },
  {
    id: "acrylic-rotameter",
    name: "Acrylic Body Rotameter",
    category: "Flow Measurement",
    description: "Transparent acrylic rotameter for visual flow measurement with high accuracy.",
    image: "/images/products/rotameter.png",
  },
  {
    id: "glass-tube-manometer",
    name: "Glass Tube Manometer",
    category: "Pressure Measurement",
    description: "Traditional glass tube manometer for reliable pressure measurement in various applications.",
    image: "/images/products/glass-tube-manometer.png",
  },
  {
    id: "acrylic-manometers",
    name: "Acrylic Manometers",
    category: "Pressure Measurement",
    description: "Durable acrylic manometers providing clear visual indication of pressure differences.",
    image: "/images/products/acrylic-manometer.png",
  },
]

const categories = [
  "All",
  "Digital Instruments",
  "Monitoring Systems",
  "Flow Control",
  "Flow Measurement",
  "Pressure Measurement",
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover our comprehensive range of precision instruments designed for accuracy, reliability, and
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="min-w-[100px]"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center p-6">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <Button asChild variant="outline" className="w-full group">
                      <Link href={`/products/${product.id}`}>
                        Know More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Product Comparison Tool */}
          <div className="mt-16 pt-16 border-t">
            <ProductComparison />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Need Help Choosing the Right Product?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Our team of experts is ready to assist you in finding the perfect solution for your specific requirements.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
