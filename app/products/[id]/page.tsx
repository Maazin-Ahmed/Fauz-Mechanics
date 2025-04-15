"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import ProductViewer360 from "@/components/product-viewer-360"
import { ErrorBoundary } from "@/components/error-boundary"

// Mock product data
const productsData = {
  digimacks: {
    name: "Digimacks",
    description:
      "High-precision digital pressure gauge with customizable settings and multi-unit display. The Digimacks series offers exceptional accuracy and reliability for critical pressure measurement applications.",
    image: "/images/products/digimacks.png",
    features: [
      "High accuracy: ±0.5% of full scale",
      "4-digit LED display with 14mm digit height",
      "Multiple pressure units: Pa, mmWc",
      "Programmable range and calibration",
      "Panel mount design with IP65 protection",
      "24V DC power supply",
      "4-20mA output signal",
      "Operating temperature: -10°C to 60°C",
    ],
    applications: [
      "Pharmaceutical clean rooms",
      "HVAC systems",
      "Filter monitoring",
      "Process control",
      "Laboratory environments",
    ],
    specifications: {
      accuracy: "±0.5% of full scale",
      display: "4-digit LED",
      powerSupply: "24V DC",
      outputSignal: "4-20mA",
      dimensions: "Ø100mm × 60mm",
      mountingType: "Panel mount",
      protection: "IP65",
      operatingTemp: "-10°C to 60°C",
    },
    // For 360 viewer - in a real app, these would be actual product images
    images360: Array(12)
      .fill(0)
      .map((_, i) => `/images/products/digimacks.png`),
  },
  digisense: {
    name: "Digisense",
    description:
      "Advanced digital pressure sensor with real-time monitoring and high accuracy readings. The Digisense provides reliable pressure measurement with enhanced features for critical applications.",
    image: "/images/products/digisense.png",
    features: [
      "High accuracy: ±0.25% of full scale",
      "4-digit LED display",
      "Multiple pressure units: Pa, mmWc",
      "Programmable range and calibration",
      "Panel mount design with IP65 protection",
      "24V DC power supply",
      "4-20mA / 0-10V output signal",
      "Operating temperature: -10°C to 70°C",
    ],
    applications: [
      "Pharmaceutical clean rooms",
      "Semiconductor manufacturing",
      "Medical equipment",
      "Process control",
      "Laboratory environments",
    ],
    specifications: {
      accuracy: "±0.25% of full scale",
      display: "4-digit LED",
      powerSupply: "24V DC",
      outputSignal: "4-20mA / 0-10V",
      dimensions: "Ø100mm × 55mm",
      mountingType: "Panel mount",
      protection: "IP65",
      operatingTemp: "-10°C to 70°C",
    },
    images360: Array(12)
      .fill(0)
      .map((_, i) => `/images/products/digisense.png`),
  },
  // Add other products similarly
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      if (productId && productsData[productId as keyof typeof productsData]) {
        setProduct(productsData[productId as keyof typeof productsData])
        setLoading(false)
      } else {
        setError("Product not found")
        setLoading(false)
      }
    }, 500)
  }, [productId])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card>
          <CardContent className="p-6">
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
              <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div>
          <ErrorBoundary>
            <ProductViewer360 images={product.images360} productName={product.name} />
          </ErrorBoundary>
          <div className="flex justify-end mt-4 gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Datasheet
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>

          <Tabs defaultValue="features">
            <TabsList className="mb-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="space-y-4">
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="applications" className="space-y-4">
              <ul className="space-y-2">
                {product.applications.map((application: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]: [string, any]) => (
                  <div key={key} className="border-b pb-2">
                    <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={`/contact?product=${productId}`}>Request Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t pt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(productsData)
            .filter(([id]) => id !== productId)
            .slice(0, 3)
            .map(([id, relatedProduct]: [string, any]) => (
              <Card key={id} className="overflow-hidden hover-lift">
                <div className="h-48 bg-gray-100 flex items-center justify-center p-6">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={200}
                    height={200}
                    className="object-contain max-h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/products/${id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
