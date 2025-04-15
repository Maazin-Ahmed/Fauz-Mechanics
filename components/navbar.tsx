"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"

const products = [
  { name: "Digimacks", href: "/products/digimacks" },
  { name: "Digisense", href: "/products/digisense" },
  { name: "Digitrans DPT 411", href: "/products/digitrans" },
  { name: "Clean Room Monitor", href: "/products/clean-room-monitor" },
  { name: "Air Nozzles", href: "/products/air-nozzles" },
  { name: "Acrylic Body Rotameter", href: "/products/acrylic-rotameter" },
  { name: "Glass Tube Manometer", href: "/products/glass-tube-manometer" },
  { name: "Acrylic Manometers", href: "/products/acrylic-manometers" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Fauz Mechanics Logo" width={40} height={40} className="h-10 w-10" />
          <span className="hidden font-bold text-xl sm:inline-block">Fauz Mechanics</span>
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {isOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 p-4 border-t">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <div className="relative">
                    <button
                      className="text-gray-700 hover:text-blue-600 transition-colors w-full text-left flex justify-between items-center"
                      onClick={(e) => {
                        e.preventDefault()
                        const submenu = e.currentTarget.nextElementSibling
                        if (submenu) {
                          submenu.classList.toggle("hidden")
                        }
                      }}
                    >
                      Products <span>+</span>
                    </button>
                    <div className="hidden pl-4 mt-2 space-y-2">
                      {products.map((product) => (
                        <Link
                          key={product.href}
                          href={product.href}
                          className="block text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {products.map((product) => (
                        <li key={product.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={product.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{product.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </header>
  )
}
