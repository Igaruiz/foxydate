import { useEffect, useRef } from "react";

export default function Home() {
  const galeriaRef = useRef(null);

  // Autoplay de la galería cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (galeriaRef.current) {
        const scroll = galeriaRef.current;
        const maxScroll = scroll.scrollWidth - scroll.clientWidth;

        if (scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 10) {
          // 🔄 vuelve al inicio
          scroll.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // 👉 avanza un ancho de imagen (aprox 300px)
          scroll.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 5000); // 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        style={{
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(0,0,0,0.8)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <a href="#hero">
          <img
            src="/logo.png"
            alt="Logo Foxy Date"
            style={{ height: "50px" }}
          />
        </a>
        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#hero">Inicio</a>
          <a href="#galeria">Galería</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#planes">Paquetes</a>
          <a href="#extras">Extras</a>
          <a href="#testimonios">Opiniones</a>
          <a href="#contacto">Contacto</a>
          <a href="#hero">⬆️ Top</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "140px 20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", color: "#ff004f" }}>
            Bienvenido a Foxy Date 🦊
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>
            Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive momentos inolvidables con nuestras chicas virtuales.
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
        </div>
      </section>

      {/* Galería dinámica */}
      <section id="galeria" style={{ padding: "40px 20px" }}>
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "20px",
            color: "#ff004f",
            textAlign: "center",
          }}
        >
          Galería 📸
        </h2>
        <div ref={galeriaRef}>
          <img src="/galeria1.jpg" alt="Galería 1" />
          <img src="/galeria2.jpg" alt="Galería 2" />
          <img src="/galeria3.jpg" alt="Galería 3" />
          <img src="/galeria4.jpg" alt="Galería 4" />
          <img src="/galeria5.jpg" alt="Galería 5" />
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>
          Nuestras Chicas 🦊
        </h2>
        <p>Aquí aparecerán las chicas con sus fotos, descripciones y precios. 🚀</p>
      </section>

      {/* Paquetes */}
      <section id="planes" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>Nuestros Paquetes 🔥</h2>
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          <div style={{ background: "rgba(0,0,0,0.6)", padding: "20px", borderRadius: "15px" }}>
            <h3 style={{ color: "#ff004f" }}>Plan Básico</h3>
            <p>Acceso a chat básico y matches ilimitados. Ideal para empezar a coquetear.</p>
          </div>
          <div style={{ background: "rgba(0,0,0,0.6)", padding: "20px", borderRadius: "15px", border: "2px solid #ff004f" }}>
            <h3 style={{ color: "#ff004f" }}>Plan Premium</h3>
            <p>Incluye videollamadas privadas y regalos virtuales. La experiencia completa.</p>
          </div>
          <div style={{ background: "rgba(0,0,0,0.6)", padding: "20px", borderRadius: "15px" }}>
            <h3 style={{ color: "#ff004f" }}>Plan VIP</h3>
            <p>Acceso exclusivo a perfiles top, soporte 24/7 y eventos privados.</p>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section id="testimonios" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>
          Opiniones de nuestros usuarios 💬
        </h2>
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <blockquote style={{ background: "rgba(0,0,0,0.6)", padding: "20px", borderRadius: "15px" }}>
            <p>“Nunca pensé que tendría una cita virtual tan divertida y realista. Foxy Date me salvó del aburrimiento.”</p>
            <footer style={{ marginTop: "10px", color: "#ff004f", fontWeight: "bold" }}>— Carlos, 29</footer>
          </blockquote>
          <blockquote style={{ background: "rgba(0,0,0,0.6)", padding: "20px", borderRadius: "15px" }}>
            <p>“Me encanta el plan Premium, las videollamadas son súper fluidas y seguras.”</p>
            <footer style={{ marginTop: "10px", color: "#ff004f", fontWeight: "bold" }}>— Sofía, 25</footer>
          </blockquote>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>Contáctanos 📩</h2>
        <form
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "rgba(0,0,0,0.6)",
            padding: "30px",
            borderRadius: "15px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            const nombre = e.target.nombre.value;
            const email = e.target.email.value;
            const mensaje = e.target.mensaje.value;
            const texto = `👋 Hola, soy ${nombre} (${email}).%0A%0A${mensaje}`;
            window.open(`https://wa.me/5491112345678?text=${texto}`, "_blank");
          }}
        >
          <input type="text" name="nombre" placeholder="Tu nombre" required style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />
          <input type="email" name="email" placeholder="Tu correo" required style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />
          <textarea name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required style={{ width: "100%", padding: "10px", marginBottom: "15px" }}></textarea>
          <button type="submit" style={{ width: "100%", background: "#ff004f", padding: "12px", borderRadius: "10px", color: "white", fontWeight: "bold" }}>
            Enviar por WhatsApp
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ background: "rgba(0,0,0,0.8)", textAlign: "center", padding: "20px", marginTop: "40px" }}>
        <p>© 2025 Foxy Date 🦊 | Amor virtual, real diversión.</p>
      </footer>
    </>
  );
}
