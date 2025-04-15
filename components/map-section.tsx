"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MapSection() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Find Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visit our facility or get in touch with our team to learn more about our products and services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <Card className="md:col-span-1">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-600" />
                  <span> 227, Nirman industrial Estate, Chincholi Bunder Road, New Link Rd, Malad West, Mumbai, Maharashtra 400064</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <span>+91 98204 53878</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <span>info@fauzmechanics.com</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-0.5 text-blue-600" />
                  <div>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="md:col-span-2 h-[400px] bg-gray-100 rounded-lg overflow-hidden relative">
            <iframe
              src="https://maps.app.goo.gl/V17iQ2VFCM69Ruq1A?g_st=aw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
              className={`transition-opacity duration-500 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
              onError={() => {
                setMapError(true)
                setMapLoaded(true)
              }}
            ></iframe>
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}
            {mapError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center p-4">
                  <p className="text-gray-700 mb-2">Unable to load map</p>
                  <Button
                    size="sm"
                    onClick={() => window.open("https://maps.app.goo.gl/V17iQ2VFCM69Ruq1A?g_st=aw", "_blank")}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
