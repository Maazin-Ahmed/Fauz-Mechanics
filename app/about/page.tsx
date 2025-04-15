import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Users, Zap, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 to-blue-700 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/about-bg.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Fauz Mechanics</h1>
            <p className="text-xl text-blue-100 mb-8">Pioneering precision instrumentation since 2006</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
                <p className="text-gray-700 text-lg">
                  At FAUZ MECHANICS, innovation drives everything we do. We face industry challenges with smart
                  engineering and cutting-edge technology, delivering simplified sensing solutions that empower our
                  customers to achieve precision and efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
                <p className="text-gray-700 text-lg">
                  Founded in 2006, FAUZ MECHANICS began by providing conventional pressure measuring instruments to
                  established pharmaceutical clients. Over the years, we've expanded our expertise to develop and
                  manufacture a comprehensive range of electronic instruments known for unparalleled quality and
                  accuracy.
                </p>
                <p className="text-gray-700 text-lg mt-4">
                  Our team of dedicated engineers and technicians continuously pushes boundaries to address complex
                  challenges in the instrumentation sector. Through consistent excellence and innovation, FAUZ MECHANICS
                  has established itself as the premier manufacturer of monitoring and controlling instruments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, discover the story of Fauz Mechanics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="rounded-full bg-blue-100 p-6 h-24 w-24 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">2006</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Foundation</h3>
                  <p className="text-gray-700">
                    Fauz Mechanics was established with a focus on providing conventional pressure measuring instruments
                    to pharmaceutical clients. Our commitment to quality and precision was evident from day one.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="rounded-full bg-blue-100 p-6 h-24 w-24 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">2010</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Expansion</h3>
                  <p className="text-gray-700">
                    Expanded our product range to include electronic monitoring instruments, responding to growing
                    industry demand for digital solutions with enhanced accuracy and data capabilities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="rounded-full bg-blue-100 p-6 h-24 w-24 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">2015</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Innovation</h3>
                  <p className="text-gray-700">
                    Launched our flagship Digimacks and Digisense product lines, setting new standards for precision and
                    reliability in digital pressure measurement and monitoring.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="rounded-full bg-blue-100 p-6 h-24 w-24 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">Today</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Industry Leadership</h3>
                  <p className="text-gray-700">
                    Today, Fauz Mechanics stands as a recognized leader in instrumentation, serving diverse industries
                    with cutting-edge solutions that combine precision engineering with innovative technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Leadership</h2>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Naeemuddin Farooqui</h3>
              <p className="text-gray-500 mb-4">Proprietor | Call: +91 98204 53878</p>
              <p className="text-gray-700 mb-6">
                With over 20 years of experience in instrumentation engineering, Naeemuddin Farooqui founded FAUZ
                MECHANICS with a vision to revolutionize how industries approach measurement and monitoring. His
                technical expertise combined with a customer-first philosophy has guided the company through years of
                innovation and growth.
              </p>
              <p className="text-gray-700 mb-6">
                Mr. Farooqui maintains a hands-on approach to leadership, personally ensuring that each product meets
                the company's rigorous standards of quality and precision. His commitment to excellence and continuous
                improvement has established Fauz Mechanics as a trusted name in the instrumentation industry.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Contact Directly <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Naeemuddin Farooqui"
                  width={500}
                  height={500}
                  className="relative rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our approach to instrumentation excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to excellence in every aspect of our business, from product design and manufacturing
                  to customer service and support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  We continuously explore new technologies and approaches to solve complex challenges and enhance the
                  capabilities of our instrumentation solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Customer Focus</h3>
                <p className="text-gray-600">
                  We prioritize understanding and addressing our customers' needs, building long-term relationships
                  based on trust, reliability, and mutual success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our precision instruments can transform your measurement and monitoring capabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
