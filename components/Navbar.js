import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          onClick={() => scrollTo("about")}
          className="text-2xl font-extrabold text-foxyred cursor-pointer"
        >
          🦊 Foxy Date
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li
            onClick={() => scrollTo("about")}
            className="cursor-pointer hover:text-neonpink transition"
          >
            Inicio
          </li>
          <li
            onClick={() => scrollTo("planes")}
            className="cursor-pointer hover:text-neonpink transition"
          >
            Paquetes
          </li>
          <li
            onClick={() => scrollTo("extras")}
            className="cursor-pointer hover:text-neonpink transition"
          >
            Extras
          </li>
          <li
            onClick={() => scrollTo("testimonios")}
            className="cursor-pointer hover:text-neonpink transition"
          >
            Experiencias
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-foxyred"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black bg-opacity-95 px-6 py-4 space-y-4 text-center">
          <li
            onClick={() => scrollTo("about")}
            className="cursor-pointer hover:text-neonpink transition"
          >
            Inicio
          </li>
          <li
            onClick={() => scrollTo("planes")}
            className="cursor-pointer hover:text-neonpink transition"
          >
            Paquetes
          </li>
          <li
            onClick={() => scrollTo("extras")}
            className="cursor-pointer hover:text-neonpink transition"
          >
            Experiencias
          </li>
          <li
            onClick={() => scrollTo("testimonios")}
            className="cursor-pointer hover:text-neonpink transition"
          >
            Opiniones
          </li>
        </ul>
      )}
    </nav>
  );
}
