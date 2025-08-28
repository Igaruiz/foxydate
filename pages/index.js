import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar fija */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(10px)",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a href="#hero">
          <img
            src="/logo.png"
            alt="Foxy Date Logo"
            style={{ height: "40px" }}
          />
        </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "block",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer",
          }}
          className="md:hidden"
        >
          ☰
        </button>

        {/* Links */}
        <nav
          style={{
            display: menuOpen ? "block" : "flex",
            gap: "20px",
            position: menuOpen ? "absolute" : "static",
            top: menuOpen ? "60px" : "auto",
            right: menuOpen ? "20px" : "auto",
            background: menuOpen ? "rgba(0,0,0,0.9)" : "transparent",
            padding: menuOpen ? "20px" : 0,
            borderRadius: "10px",
          }}
        >
          <a href="#hero" style={{ color: "white", textDecoration: "none" }}>Inicio</a>
          <a href="#catalogo" style={{ color: "white", textDecoration: "none" }}>Catálogo</a>
          <a href="#galeria" style={{ color: "white", textDecoration: "none" }}>Galería</a>
          <a href="#planes" style={{ color: "white", textDecoration: "none" }}>Planes</a>
          <a href="#opiniones" style={{ color: "white", textDecoration: "none" }}>Opiniones</a>
          <a href="#contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
          <a
            href="#hero"
            style={{
              background: "#ff004f",
              padding: "6px 12px",
              borderRadius: "8px",
              color: "white",
              textDecoration: "none",
            }}
          >
            ⬆ Top
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="hero"
        style={{
          padding: "100px 20px 40px", // 🔥 reducido el espacio inferior
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#ff004f",
            marginBottom: "20px",
          }}
        >
          Bienvenido a Foxy Date 🦊
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto 20px" }}>
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

      {/* Galería */}
      <section
        id="galeria"
        style={{
          padding: "40px 20px", // 🔥 reducido el espacio superior
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "30px",
            color: "#ff004f",
            textAlign: "center",
          }}
        >
          Galería 📸
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            overflowX: "auto",
            padding: "10px",
          }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={num}
              src={`/galeria${num}.jpg`}
              alt={`Galería ${num}`}
              style={{
                height: "250px",
                borderRadius: "15px",
                boxShadow: "0px 0px 15px rgba(0,0,0,0.6)",
              }}
            />
          ))}
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>
          Nuestras Chicas 🦊
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              style={{
                perspective: "1000px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "350px",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                }}
                className="card"
              >
                {/* Front */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={`/catalogo${num}.jpg`}
                    alt={`Chica ${num}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                </div>
                {/* Back */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    background: "rgba(0,0,0,0.85)",
                    color: "white",
                    borderRadius: "15px",
                    transform: "rotateY(180deg)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                    Foxy {num}
                  </h3>
                  <p style={{ fontSize: "16px", marginBottom: "15px" }}>
                    Chica encantadora lista para conversar y divertirse contigo.
                  </p>
                  <span style={{ color: "#ff004f", fontWeight: "bold" }}>
                    $20 / sesión
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planes */}
      <section
        id="planes"
        style={{ padding: "60px 20px", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>
          Nuestros Paquetes 🔥
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div style={{ background: "#111", padding: "20px", borderRadius: "15px" }}>
            <h3 style={{ color: "#ff004f", marginBottom: "10px" }}>Plan Básico</h3>
            <p>Acceso a chat básico y matches ilimitados.</p>
          </div>
          <div style={{ background: "#111", padding: "20px", borderRadius: "15px" }}>
            <h3 style={{ color: "#ff004f", marginBottom: "10px" }}>Plan Premium</h3>
            <p>Incluye videollamadas privadas y regalos virtuales.</p>
          </div>
          <div style={{ background: "#111", padding: "20px", borderRadius: "15px" }}>
            <h3 style={{ color: "#ff004f", marginBottom: "10px" }}>Plan VIP</h3>
            <p>Acceso exclusivo a perfiles top y eventos privados.</p>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section
        id="opiniones"
        style={{ padding: "60px 20px", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>
          Opiniones 💬
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <blockquote style={{ background: "#111", padding: "20px", borderRadius: "15px" }}>
            “Una experiencia increíble, divertida y realista.”
          </blockquote>
          <blockquote style={{ background: "#111", padding: "20px", borderRadius: "15px" }}>
            “Me encanta el plan Premium, superó mis expectativas.”
          </blockquote>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        style={{ padding: "60px 20px", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>
          Contáctanos 📩
        </h2>
        <form
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "15px",
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
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
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            required
            style={{ padding: "10px", borderRadius: "8px", border: "none" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            style={{ padding: "10px", borderRadius: "8px", border: "none" }}
          />
          <textarea
            name="mensaje"
            rows="4"
            placeholder="Escribe tu mensaje..."
            required
            style={{ padding: "10px", borderRadius: "8px", border: "none" }}
          />
          <button
            type="submit"
            style={{
              background: "#ff004f",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Enviar por WhatsApp
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ background: "#000", padding: "30px", textAlign: "center" }}>
        <p style={{ color: "#aaa" }}>
          © 2025 Foxy Date 🦊 | Amor virtual, real diversión.
        </p>
      </footer>
    </>
  );
}
