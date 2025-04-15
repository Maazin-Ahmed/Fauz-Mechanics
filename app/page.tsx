import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Gauge, Award, Zap, Users } from "lucide-react"
import ProductCard from "@/components/product-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import MapSection from "@/components/map-section"
import ScrollReveal from "@/components/scroll-reveal"

const featuredProducts = [
  {
    id: "digimacks",
    name: "Digimacks",
    description: "High-precision digital pressure gauge with customizable settings and multi-unit display.",
    image: "/images/products/digimacks.png",
  },
  {
    id: "digisense",
    name: "Digisense",
    description: "Advanced digital pressure sensor with real-time monitoring and high accuracy readings.",
    image: "/images/products/digisense.png",
  },
  {
    id: "digitrans",
    name: "Digitrans DPT 411",
    description: "Compact differential pressure transmitter with USB connectivity and data logging capabilities.",
    image: "/images/products/digitrans.png",
  },
  {
    id: "clean-room-monitor",
    name: "Clean Room Monitor",
    description: "Multi-parameter monitoring system for controlled environments with alarm functionality.",
    image: "/images/products/clean-room-monitor.png",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Engineering Precision for <span className="text-blue-400">Innovative Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in animation-delay-200">
              Delivering cutting-edge instrumentation and monitoring solutions since 2006. Precision engineering that
              empowers industries to achieve excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-400">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Pioneering Excellence in <span className="text-blue-600">Instrumentation</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-lg text-gray-700 mb-6">
                  Since 2006, FAUZ MECHANICS has been at the forefront of innovation in pressure measurement and
                  monitoring technology. What began as a specialized service for pharmaceutical clients has evolved into
                  a comprehensive suite of precision instruments trusted by industries worldwide.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-gray-700 mb-8">
                  Our team of dedicated engineers combines technical expertise with a deep understanding of industry
                  needs, delivering solutions that enhance efficiency, accuracy, and reliability.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Button asChild className="group">
                  <Link href="/about">
                    Learn More About Us
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="absolute -inset-4 bg-blue-50 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fauz Mechanics Facility"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-blue-600">15+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                    <p className="text-gray-600">Clients Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Products</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our range of precision instruments designed to deliver accurate measurements and reliable
                monitoring for your critical applications.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ScrollReveal key={product.id}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="group">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Fauz Mechanics</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with a commitment to quality, delivering solutions that exceed
                expectations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow hover-lift">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Gauge className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Precision Engineering</h3>
                  <p className="text-gray-600">
                    Our instruments are designed and manufactured to deliver exceptional accuracy and reliability in
                    every measurement.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow hover-lift">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Every product undergoes rigorous testing to ensure it meets our high standards and your specific
                    requirements.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow hover-lift">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
                  <p className="text-gray-600">
                    We continuously invest in research and development to create solutions that address evolving
                    industry challenges.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow hover-lift">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                  <p className="text-gray-600">
                    Our dedicated team provides comprehensive support from initial consultation through installation and
                    beyond.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ScrollReveal>
        <TestimonialCarousel />
      </ScrollReveal>

      {/* Map Section */}
      <ScrollReveal>
        <MapSection />
      </ScrollReveal>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Measurement Capabilities?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your specific requirements and discover how our precision instruments
              can benefit your operations.
            </p>
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ScrollReveal delay={200}>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
