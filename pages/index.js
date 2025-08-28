import { useState, useEffect } from "react";

export default function Home() {
  // Estado para carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/galeria1.jpg", "/galeria2.jpg", "/galeria3.jpg", "/galeria4.jpg", "/galeria5.jpg"];

  // Auto carrusel cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ✅ Navbar (no se toca) */}
      <header className="navbar">
        <img src="/logo.png" alt="Foxy Date Logo" className="logo" />
        <nav className="nav-links">
          <a href="#hero">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#planes">Planes</a>
          <a href="#extras">Extras</a>
          <a href="#testimonios">Opiniones</a>
          <a href="#contacto">Contacto</a>
          <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>⬆ Top</a>
        </nav>
      </header>

      {/* ✅ Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Foxy Date 🦊</h1>
          <p>
            Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive
            momentos inolvidables con nuestras chicas virtuales.
          </p>
          <a href="#catalogo" className="btn-primary">
            Ver catálogo 🔥
          </a>
        </div>
      </section>

      {/* ✅ Galería Carrusel */}
      <section id="galeria" className="galeria">
        <div className="carousel">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </section>

      {/* ✅ Catálogo */}
      <section id="catalogo" className="section">
        <h2>Nuestras Chicas 🦊</h2>
        <div className="catalogo-grid">
          <div className="card">
            <div className="card-front">
              <img src="/catalogo1.jpg" alt="Chica 1" />
              <h3>Ana</h3>
            </div>
            <div className="card-back">
              <p>Apasionada y divertida. 💃</p>
              <p>Precio: $20/h</p>
            </div>
          </div>
          <div className="card">
            <div className="card-front">
              <img src="/catalogo2.jpg" alt="Chica 2" />
              <h3>Sofía</h3>
            </div>
            <div className="card-back">
              <p>Carismática y misteriosa. 🔥</p>
              <p>Precio: $25/h</p>
            </div>
          </div>
          <div className="card">
            <div className="card-front">
              <img src="/catalogo3.jpg" alt="Chica 3" />
              <h3>Valentina</h3>
            </div>
            <div className="card-back">
              <p>Dulce pero atrevida. 😉</p>
              <p>Precio: $30/h</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Planes */}
      <section id="planes" className="section">
        <h2>Nuestros Paquetes 🔥</h2>
        <div className="grid">
          <div className="plan">Plan Básico: Chat ilimitado 💬</div>
          <div className="plan destacado">Plan Premium: Videollamadas 🎥</div>
          <div className="plan">Plan VIP: Exclusivo 💎</div>
        </div>
      </section>

      {/* ✅ Opiniones */}
      <section id="testimonios" className="section">
        <h2>Opiniones 💬</h2>
        <blockquote>“Foxy Date me salvó del aburrimiento.” — Carlos, 29</blockquote>
        <blockquote>“Las videollamadas son súper fluidas y seguras.” — Sofía, 25</blockquote>
      </section>

      {/* ✅ Contacto */}
      <section id="contacto" className="section">
        <h2>Contáctanos 📩</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const nombre = e.target.nombre.value;
            const email = e.target.email.value;
            const mensaje = e.target.mensaje.value;
            const texto = `👋 Hola, soy ${nombre} (${email}).%0A%0A${mensaje}`;
            window.open(`https://wa.me/5491112345678?text=${texto}`, "_blank");
          }}
        >
          <input type="text" name="nombre" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu correo" required />
          <textarea name="mensaje" placeholder="Escribe tu mensaje..." required></textarea>
          <button type="submit">Enviar por WhatsApp</button>
        </form>
      </section>

      {/* ✅ Footer */}
      <footer className="footer">
        © 2025 Foxy Date 🦊 | Amor virtual, real diversión.
      </footer>
    </>
  );
}
