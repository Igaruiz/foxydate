import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foxyred cursor-pointer">
          Foxy Date
        </h1>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="cursor-pointer hover:text-neonpink" onClick={() => scrollTo("about")}>Inicio</li>
          <li className="cursor-pointer hover:text-neonpink" onClick={() => scrollTo("planes")}>Planes</li>
          <li className="cursor-pointer hover:text-neonpink" onClick={() => scrollTo("extras")}>Extras</li>
          <li className="cursor-pointer hover:text-neonpink" onClick={() => scrollTo("testimonios")}>Testimonios</li>
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 px-6 py-4 space-y-4 text-white text-lg font-medium">
          <p className="cursor-pointer hover:text-neonpink" onClick={() => scrollTo("about")}>Inicio</p>
          <p className="cursor-pointer hover:text-neonpink" onClick={() => scrollTo("planes")}>Planes</p>
          <p className="cursor-pointer hover:text-neonpink" onClick={() => scrollTo("extras")}>Extras</p>
          <p className="cursor-pointer hover:text-neonpink" onClick={() => scrollTo("testimonios")}>Testimonios</p>
        </div>
      )}
    </nav>
  );
}
