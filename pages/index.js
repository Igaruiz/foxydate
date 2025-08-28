import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flipIndex, setFlipIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const catalogo = [
    { nombre: "Chica 1", descripcion: "Divertida y coqueta.", imagen: "/catalogo1.jpg", precio: "$10" },
    { nombre: "Chica 2", descripcion: "Simpática y atrevida.", imagen: "/catalogo2.jpg", precio: "$15" },
    { nombre: "Chica 3", descripcion: "Romántica y dulce.", imagen: "/catalogo3.jpg", precio: "$20" }
  ];

  const galeria = [
    "/galeria1.jpg",
    "/galeria2.jpg",
    "/galeria3.jpg",
    "/galeria4.jpg",
    "/galeria5.jpg"
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % galeria.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${carouselIndex * 100}%)`;
    }
  }, [carouselIndex]);

  return (
    <>
      {/* Navbar */}
      <header>
        <img src="/logo.png" alt="Logo" />
        <nav className={menuOpen ? "nav open" : "nav"}>
          <button className="nav-btn" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}>Top</button>
          <button className="nav-btn" onClick={() => { document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Chicas</button>
          <button className="nav-btn" onClick={() => { document.getElementById("planes").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Paquetes</button>
          <button className="nav-btn" onClick={() => { document.getElementById("opiniones").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Opiniones</button>
          <button className="nav-btn" onClick={() => { document.getElementById("contacto").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Contacto</button>
        </nav>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </header>

      {/* Hero */}
      <section className="hero-container">
        <h1>Bienvenido a Foxy Date 🦊</h1>
        <p>Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive momentos inolvidables.</p>
