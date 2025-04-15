"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { RotateCw, RotateCcw, Maximize, Minimize, Play, Pause } from "lucide-react"

interface ProductViewer360Props {
  images: string[]
  productName: string
}

export default function ProductViewer360({ images, productName }: ProductViewer360Props) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Handle animation
  useEffect(() => {
    if (isPlaying) {
      let lastTime = 0
      const animate = (time: number) => {
        if (time - lastTime > 100) {
          // Change frame every 100ms
          setCurrentFrame((prev) => (prev + 1) % images.length)
          lastTime = time
        }
        animationRef.current = requestAnimationFrame(animate)
      }
      animationRef.current = requestAnimationFrame(animate)
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, images.length])

  // Handle mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    if (isPlaying) {
      setIsPlaying(false)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - startX
    if (Math.abs(deltaX) > 5) {
      // Determine direction and change frame
      const direction = deltaX > 0 ? 1 : -1
      setCurrentFrame((prev) => {
        let newFrame = prev - direction
        if (newFrame < 0) newFrame = images.length - 1
        if (newFrame >= images.length) newFrame = 0
        return newFrame
      })
      setStartX(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    if (isPlaying) {
      setIsPlaying(false)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const deltaX = e.touches[0].clientX - startX
    if (Math.abs(deltaX) > 5) {
      // Determine direction and change frame
      const direction = deltaX > 0 ? 1 : -1
      setCurrentFrame((prev) => {
        let newFrame = prev - direction
        if (newFrame < 0) newFrame = images.length - 1
        if (newFrame >= images.length) newFrame = 0
        return newFrame
      })
      setStartX(e.touches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={containerRef}
      className={`relative rounded-lg overflow-hidden bg-gray-100 ${
        isFullscreen ? "w-screen h-screen flex items-center justify-center" : "w-full aspect-square"
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src || "/placeholder.svg"}
            alt={`${productName} - View ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-100 ${
              currentFrame === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:bg-white/20"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentFrame((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1))}
              className="text-white hover:bg-white/20"
            >
              <RotateCcw className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentFrame((prev) => (prev + 1) % images.length)}
              className="text-white hover:bg-white/20"
            >
              <RotateCw className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-white hover:bg-white/20">
            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
          </Button>
        </div>
        <div className="px-2">
          <Slider
            value={[currentFrame]}
            min={0}
            max={images.length - 1}
            step={1}
            onValueChange={(value) => setCurrentFrame(value[0])}
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
        <p className="text-center">
          Drag to rotate | Frame: {currentFrame + 1}/{images.length}
        </p>
      </div>
    </div>
  )
}
