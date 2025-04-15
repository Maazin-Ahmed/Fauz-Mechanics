"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "Fauz Mechanics' pressure instruments have significantly improved our manufacturing process accuracy. Their technical support team is exceptional.",
    author: "Rajesh Kumar",
    position: "Production Manager, Pharma Solutions Ltd.",
  },
  {
    id: 2,
    quote:
      "We've been using Digimacks in our clean room facilities for over three years now. The accuracy and reliability of these instruments have been crucial for maintaining our quality standards.",
    author: "Priya Sharma",
    position: "Quality Control Director, BioTech Industries",
  },
  {
    id: 3,
    quote:
      "The technical expertise and customization capabilities of Fauz Mechanics set them apart. They understood our unique requirements and delivered a solution that exceeded our expectations.",
    author: "Vikram Singh",
    position: "Chief Engineer, Process Automation Inc.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why leading companies trust Fauz Mechanics for their instrumentation needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-blue-100 mb-6" />
              <div className="min-h-[160px]">
                <p className="text-xl md:text-2xl text-gray-700 italic mb-6">{testimonials[current].quote}</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonials[current].author}</p>
                  <p className="text-gray-500">{testimonials[current].position}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full" aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
