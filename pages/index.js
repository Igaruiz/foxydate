import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrusel auto cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "15px 40px",
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <a href="#hero">
          <img src="/logo.webp" alt="Foxy Date Logo" style={{ height: "50px" }} />
        </a>

        {/* Menú escritorio */}
        <nav className="nav-links">
          <a href="#hero">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#planes">Paquetes</a>
          <a href="#extras">Extras</a>
          <a href="#testimonios">Opiniones</a>
          <a href="#contacto">Contacto</a>
          <a href="#hero">⬆️ Top</a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#hero" onClick={() => setMenuOpen(false)}>Inicio</a>
            <a href="#catalogo" onClick={() => setMenuOpen(false)}>Catálogo</a>
            <a href="#planes" onClick={() => setMenuOpen(false)}>Paquetes</a>
            <a href="#extras" onClick={() => setMenuOpen(false)}>Extras</a>
            <a href="#testimonios" onClick={() => setMenuOpen(false)}>Opiniones</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
            <a href="#hero" onClick={() => setMenuOpen(false)}>⬆️ Top</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        style={{
          paddingTop: "100px",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#ff004f", fontWeight: "bold" }}>
          Bienvenido a Foxy Date 🦊
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "600px", margin: "20px auto" }}>
          Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive
          momentos inolvidables con nuestras chicas virtuales.
        </p>
        <a
          href="#catalogo"
          style={{
            backgroundColor: "#ff004f",
            color: "white",
            padding: "15px 30px",
            borderRadius: "30px",
            fontSize: "18px",
            textDecoration: "none",
          }}
        >
          Ver catálogo 🔥
        </a>
      </section>

      {/* Carrusel de galería */}
      <section
        id="galeria"
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", color: "#ff004f", marginBottom: "20px" }}>
          Galería 🖼️
        </h2>
        <div className="carousel">
          {["galeria1.webp", "galeria2.webp", "galeria3.webp", "galeria4.webp", "galeria5.webp"].map(
            (img, index) => (
              <img
                key={index}
                src={`/${img}`}
                alt={`Galería ${index + 1}`}
                loading="lazy"
                style={{
                  display: index === currentSlide ? "block" : "none",
                  margin: "0 auto",
                  borderRadius: "20px",
                  maxWidth: "90%",
                  height: "auto",
                  boxShadow: "0px 0px 20px rgba(255,0,79,0.7)",
                }}
              />
            )
          )}
        </div>
      </section>

      {/* Catálogo de chicas */}
      <section id="catalogo" className="section">
        <h2>Nuestras Chicas 🦊</h2>
        <div className="catalogo-grid">
          <img src="/catalogo1.webp" alt="Chica 1" loading="lazy" />
          <img src="/catalogo2.webp" alt="Chica 2" loading="lazy" />
          <img src="/catalogo3.webp" alt="Chica 3" loading="lazy" />
        </div>
      </section>

      {/* Paquetes */}
      <section id="planes" className="section dark">
        <h2>Nuestros Paquetes 🔥</h2>
        <div className="grid">
          <div className="card">
            <h3>Plan Básico</h3>
            <p>Acceso a chat básico y matches ilimitados. Ideal para empezar.</p>
          </div>
          <div className="card destacado">
            <h3>Plan Premium</h3>
            <p>
              Incluye videollamadas privadas y regalos virtuales. La experiencia completa.
            </p>
          </div>
          <div className="card">
            <h3>Plan VIP</h3>
            <p>
              Acceso exclusivo a perfiles top, soporte 24/7 y eventos privados.
            </p>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section id="extras" className="section">
        <h2>Extras ✨</h2>
        <ul>
          <li>🎁 Regalos virtuales para sorprender a tu pareja.</li>
          <li>💎 Stickers y emojis exclusivos para el chat.</li>
          <li>🔥 Eventos temáticos en vivo.</li>
          <li>🦊 Reacciones rápidas para romper el hielo.</li>
        </ul>
      </section>

      {/* Opiniones */}
      <section id="testimonios" className="section dark">
        <h2>Opiniones 💬</h2>
        <blockquote>
          “Nunca pensé que tendría una cita virtual tan divertida y realista.”
          <footer>— Carlos, 29</footer>
        </blockquote>
        <blockquote>
          “Me encanta el plan Premium, las videollamadas son súper fluidas.”
          <footer>— Sofía, 25</footer>
        </blockquote>
      </section>

      {/* Contacto */}
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
          <textarea name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
          <button type="submit">Enviar por WhatsApp</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Foxy Date 🦊 | Amor virtual, real diversión.</p>
      </footer>
    </>
  );
}
