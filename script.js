// Elementos DOM
const themeToggle = document.getElementById("theme-toggle")
const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")
const currentYearElement = document.getElementById("current-year")
const mobileMenuLinks = mobileMenu.querySelectorAll(".nav-link")

// Establecer el año actual en el footer
currentYearElement.textContent = new Date().getFullYear()

// Función para cambiar el tema
function toggleTheme() {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme")
    document.body.classList.add("light-theme")
    localStorage.setItem("theme", "light")
  } else {
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme")
    localStorage.setItem("theme", "dark")
  }
}

// Función para mostrar/ocultar el menú móvil
function toggleMobileMenu() {
  mobileMenu.classList.toggle("active")
}

// Cerrar el menú móvil al hacer clic en un enlace
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
  })
})

// Event listeners
themeToggle.addEventListener("click", toggleTheme)
menuToggle.addEventListener("click", toggleMobileMenu)

// Cargar el tema guardado o usar el tema oscuro por defecto
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "light") {
    document.body.classList.remove("dark-theme")
    document.body.classList.add("light-theme")
  } else {
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme")
  }
})

// Formulario de contacto (simulación)
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("¡Gracias por tu mensaje! Te responderé lo antes posible.")
    contactForm.reset()
  })
}

