export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-600 py-6 text-center text-sm md:text-base">
        <p className="mb-2">&copy; 2025 Safe Location</p>
        <nav className="space-x-4">
          <a className="hover:text-gray-900 transition-colors duration-300">
            Sobre
          </a>
          <span className="text-gray-400">|</span>
          <a className="hover:text-gray-900 transition-colors duration-300">
            Política de Privacidade
          </a>
        </nav>
      </footer>
    )
  }
  