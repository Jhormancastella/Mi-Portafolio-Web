"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Mi Portafolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black">
              Inicio
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-black">
              Portafolio
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-black">
              Sobre Mí
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-black">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-black" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-black" onClick={() => setIsMenuOpen(false)}>
              Portafolio
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-black" onClick={() => setIsMenuOpen(false)}>
              Sobre Mí
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-black" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

