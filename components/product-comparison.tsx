"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import Image from "next/image"

// Product data with specifications
const productData = {
  digimacks: {
    name: "Digimacks",
    image: "/images/products/digimacks.png",
    specs: {
      accuracy: "±0.5% of full scale",
      display: "4-digit LED",
      powerSupply: "24V DC",
      outputSignal: "4-20mA",
      dimensions: "Ø100mm × 60mm",
      mountingType: "Panel mount",
      protection: "IP65",
      operatingTemp: "-10°C to 60°C",
    },
  },
  digisense: {
    name: "Digisense",
    image: "/images/products/digisense.png",
    specs: {
      accuracy: "±0.25% of full scale",
      display: "4-digit LED",
      powerSupply: "24V DC",
      outputSignal: "4-20mA / 0-10V",
      dimensions: "Ø100mm × 55mm",
      mountingType: "Panel mount",
      protection: "IP65",
      operatingTemp: "-10°C to 70°C",
    },
  },
  digitrans: {
    name: "Digitrans DPT 411",
    image: "/images/products/digitrans.png",
    specs: {
      accuracy: "±0.1% of full scale",
      display: "None (Transmitter)",
      powerSupply: "12-24V DC",
      outputSignal: "4-20mA / RS485",
      dimensions: "80mm × 80mm × 40mm",
      mountingType: "Wall mount",
      protection: "IP67",
      operatingTemp: "-20°C to 80°C",
    },
  },
  "clean-room-monitor": {
    name: "Clean Room Monitor",
    image: "/images/products/clean-room-monitor.png",
    specs: {
      accuracy: "±1% of full scale",
      display: "Multi-parameter LED",
      powerSupply: "110-240V AC",
      outputSignal: "4-20mA / Relay",
      dimensions: "144mm × 144mm × 60mm",
      mountingType: "Panel mount",
      protection: "IP54",
      operatingTemp: "0°C to 50°C",
    },
  },
  "air-nozzles": {
    name: "Air Nozzles",
    image: "/images/products/air-nozzle.png",
    specs: {
      accuracy: "N/A",
      display: "None",
      powerSupply: "N/A",
      outputSignal: "N/A",
      dimensions: "Varies by model",
      mountingType: "Threaded connection",
      protection: "IP68",
      operatingTemp: "-30°C to 120°C",
    },
  },
  "acrylic-rotameter": {
    name: "Acrylic Body Rotameter",
    image: "/images/products/rotameter.png",
    specs: {
      accuracy: "±2% of full scale",
      display: "Visual scale",
      powerSupply: "N/A",
      outputSignal: "N/A",
      dimensions: "Varies by flow range",
      mountingType: "In-line",
      protection: "IP54",
      operatingTemp: "0°C to 60°C",
    },
  },
  "glass-tube-manometer": {
    name: "Glass Tube Manometer",
    image: "/images/products/glass-tube-manometer.png",
    specs: {
      accuracy: "±1.5% of full scale",
      display: "Visual scale",
      powerSupply: "N/A",
      outputSignal: "N/A",
      dimensions: "Varies by range",
      mountingType: "Wall mount",
      protection: "IP40",
      operatingTemp: "5°C to 50°C",
    },
  },
  "acrylic-manometers": {
    name: "Acrylic Manometers",
    image: "/images/products/acrylic-manometer.png",
    specs: {
      accuracy: "±2% of full scale",
      display: "Visual scale",
      powerSupply: "N/A",
      outputSignal: "N/A",
      dimensions: "Varies by range",
      mountingType: "Wall mount",
      protection: "IP54",
      operatingTemp: "0°C to 60°C",
    },
  },
}

type ProductId = keyof typeof productData

export default function ProductComparison() {
  const [selectedProducts, setSelectedProducts] = useState<ProductId[]>([])
  const [productToAdd, setProductToAdd] = useState<ProductId | null>(null)

  const addProduct = () => {
    if (productToAdd && !selectedProducts.includes(productToAdd) && selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, productToAdd])
      setProductToAdd(null)
    }
  }

  const removeProduct = (id: ProductId) => {
    setSelectedProducts(selectedProducts.filter((p) => p !== id))
  }

  const availableProducts = Object.keys(productData).filter(
    (id) => !selectedProducts.includes(id as ProductId),
  ) as ProductId[]

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Product Comparison</h2>
        <p className="text-muted-foreground mb-4">
          Compare up to 3 products to find the perfect solution for your needs.
        </p>

        <div className="flex flex-wrap gap-4 items-end">
          <div className="w-full sm:w-auto">
            <Select value={productToAdd || ""} onValueChange={(value) => setProductToAdd(value as ProductId)}>
              <SelectTrigger className="w-full sm:w-[250px]">
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                {availableProducts.map((id) => (
                  <SelectItem key={id} value={id}>
                    {productData[id].name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={addProduct} disabled={!productToAdd || selectedProducts.length >= 3}>
            Add to Compare
          </Button>
        </div>
      </div>

      {selectedProducts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-medium">Specification</th>
                {selectedProducts.map((id) => (
                  <th key={id} className="p-3 text-left font-medium min-w-[200px]">
                    <div className="flex justify-between items-center">
                      <span>{productData[id].name}</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeProduct(id)}>
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove {productData[id].name}</span>
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b">Image</td>
                {selectedProducts.map((id) => (
                  <td key={`${id}-image`} className="p-3 border-b">
                    <div className="flex justify-center">
                      <Image
                        src={productData[id].image || "/placeholder.svg"}
                        alt={productData[id].name}
                        width={100}
                        height={100}
                        className="object-contain h-24"
                      />
                    </div>
                  </td>
                ))}
              </tr>
              {Object.entries(productData[selectedProducts[0]].specs).map(([key, _]) => (
                <tr key={key}>
                  <td className="p-3 border-b font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</td>
                  {selectedProducts.map((id) => (
                    <td key={`${id}-${key}`} className="p-3 border-b">
                      {productData[id].specs[key as keyof (typeof productData)[typeof id]["specs"]]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <p>Select products to compare their specifications.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
