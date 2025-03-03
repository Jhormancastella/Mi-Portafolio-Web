import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Jhorman Jesus Castellanos Morales</h3>
            <p className="text-gray-400">Desarrollador Web | Fotógrafo | Técnico en Sistemas</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/Jhormancastella"
              target="_blank"
              className="hover:text-yellow-300 transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jhorman-jesus-castellanos-morales-245b97261"
              target="_blank"
              className="hover:text-yellow-300 transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:contacto@example.com" className="hover:text-yellow-300 transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jhorman Jesus Castellanos Morales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

