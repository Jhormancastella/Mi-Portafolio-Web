import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <p className="text-gray-600 mb-2">Desarrollador, Fotógrafo, Técnico en Sistemas</p>
          <h1 className="text-5xl font-bold mb-4">Freelance</h1>
          <h2 className="text-4xl font-bold text-primary mb-4">Jhorman Jesus Castellanos Morales</h2>
          <p className="text-gray-600 mb-6">
            Desarrollador Web semi junior, estoy en constante aprendizaje para fortalecer conocimientos y experiencias.
          </p>
          <div className="flex gap-4 mb-6">
            <Link
              href="#portfolio"
              className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-2 px-6 rounded-full"
            >
              Mi Portafolio
            </Link>
            <Link
              href="https://github.com/Jhormancastella"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 hover:text-black"
            >
              <Github size={20} />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jhorman-jesus-castellanos-morales-245b97261"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 hover:text-black"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-XFiRsasFm1wGt52SWs7WLY-qGAOnS5QxeP9A6gBkY94uHhTnCJSFZ.webp"
            alt="Ilustración de desarrollador"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">Mi Portafolio</h2>
          <p className="text-center text-gray-600 mb-12">Trabajos y proyectos realizados</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Link
                href="https://github.com/Jhormancastella/DesafIo-5-Configuracion-de-Juegos-por-Plataforma"
                target="_blank"
              >
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Configuración de Juegos por Plataforma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Configuración de Juegos por Plataforma</h3>
                  <p className="text-gray-600">
                    Aplicación que permite configurar y gestionar juegos según diferentes plataformas, facilitando la
                    organización de bibliotecas de videojuegos.
                  </p>
                </div>
              </Link>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Link href="https://github.com/Jhormancastella/ListaDeTareas" target="_blank">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Lista de Tareas"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lista de Tareas</h3>
                  <p className="text-gray-600">
                    Aplicación web para gestionar tareas diarias, permitiendo crear, editar, marcar como completadas y
                    eliminar tareas de manera intuitiva.
                  </p>
                </div>
              </Link>
            </div>

            {/* Proyecto 3 (Puedes agregar más proyectos o dejarlo como espacio para futuros proyectos) */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Fotografía Profesional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fotografía Profesional</h3>
                <p className="text-gray-600">
                  Servicios de fotografía profesional para eventos, retratos y productos. Capturando momentos especiales
                  con un enfoque artístico y técnico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Mí</h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Soy Jhorman Jesus Castellanos Morales, un desarrollador web semi junior apasionado por la tecnología y la
              fotografía. Como técnico en sistemas, tengo una sólida base en el funcionamiento de hardware y software.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Mi objetivo es seguir creciendo profesionalmente, aprendiendo nuevas tecnologías y metodologías que me
              permitan crear soluciones innovadoras y eficientes.
            </p>
            <p className="text-lg text-gray-700">
              Estoy abierto a colaboraciones y nuevos proyectos que me permitan expandir mis habilidades y aportar valor
              con mi experiencia técnica y creativa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>

          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-2 px-6 rounded-md"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

