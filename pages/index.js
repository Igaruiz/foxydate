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
        <a href="#catalogo" className="button">Ver catálogo 🔥</a>
      </section>

      {/* Carrusel de Galería */}
      <section className="carousel-container">
        <div className="carousel-track" ref={carouselRef}>
          {galeria.map((img, i) => (
            <img key={i} src={img} alt={`Galeria ${i+1}`} />
          ))}
        </div>
      </section>

      {/* Catálogo de Chicas */}
      <section id="catalogo">
        <h2>Nuestras Chicas 🦊</h2>
        <div className="catalogo-container">
          {catalogo.map((chica, i) => (
            <div key={i} className="flip-card" onClick={() => setFlipIndex(flipIndex === i ? null : i)}>
              <div className={`flip-card-inner ${flipIndex === i ? "flipped" : ""}`}>
                <div className="flip-card-front">
                  <img src={chica.imagen} alt={chica.nombre} />
                </div>
                <div className="flip-card-back">
                  <h3>{chica.nombre}</h3>
                  <p>{chica.descripcion}</p>
                  <p>{chica.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planes */}
      <section id="planes">
        <h2>Nuestros Paquetes 🔥</h2>
        <div className="planes-container">
          <div className="plan-card">
            <h3>Plan Básico</h3>
            <p>Acceso a chat básico y matches ilimitados. Ideal para empezar a coquetear.</p>
          </div>
          <div className="plan-card destacado">
            <h3>Plan Premium</h3>
            <p>Incluye videollamadas privadas y regalos virtuales. La experiencia completa.</p>
          </div>
          <div className="plan-card">
            <h3>Plan VIP</h3>
            <p>Acceso exclusivo a perfiles top, soporte 24/7 y eventos privados.</p>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section id="opiniones">
        <h2>Opiniones de nuestros usuarios 💬</h2>
        <div className="opiniones-container">
          <blockquote>
            <p>“Nunca pensé que tendría una cita virtual tan divertida y realista. Foxy Date me salvó del aburrimiento.”</p>
            <footer>— Carlos, 29</footer>
          </blockquote>
          <blockquote>
            <p>“Me encanta el plan Premium, las videollamadas son súper fluidas y seguras.”</p>
            <footer>— Sofía, 25</footer>
          </blockquote>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <h2>Contáctanos 📩</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const nombre = e.target.nombre.value;
          const email = e.target.email.value;
          const mensaje = e.target.mensaje.value;
          const texto = `👋 Hola, soy ${nombre} (${email}).%0A%0A${mensaje}`;
          window.open(`https://wa.me/5491112345678?text=${texto}`, "_blank");
        }}>
          <input type="text" name="nombre" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="tucorreo@email.com" required />
          <textarea name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
          <button type="submit">Enviar por WhatsApp</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Foxy Date 🦊 | Amor virtual, real diversión.</p>
      </footer>
    </>
  );
}
