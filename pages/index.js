import { useState, useEffect } from "react";

export default function Home() {
  const [flipped, setFlipped] = useState(null);

  useEffect(() => {
    // Animaciones de scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(section => observer.observe(section));
  }, []);

  const chicas = [
    {
      id: 1,
      nombre: "Luna",
      img: "/chica1.jpg",
      descripcion: "Charla divertida y atrevida. 30min x $10",
    },
    {
      id: 2,
      nombre: "Mia",
      img: "/chica2.jpg",
      descripcion: "Experiencia Premium y videollamadas. 30min x $15",
    },
    {
      id: 3,
      nombre: "Sofi",
      img: "/chica3.jpg",
      descripcion: "Rompehielos, emojis y regalos virtuales. 30min x $20",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header>
        <img src="/logo.png" alt="Logo Foxy" style={{ height: "50px" }} />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            backgroundColor: "#ff004f",
            color: "white",
            padding: "10px 20px",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 10px #ff004f",
          }}
        >
          Top ↑
        </button>
      </header>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", gap: "40px" }}>
        <div style={{ maxWidth: "600px", backgroundColor: "rgba(0,0,0,0.6)", padding: "30px", borderRadius: "20px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", color: "#ff004f" }}>Bienvenido a Foxy Date 🦊</h1>
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>
            Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive momentos inolvidables con nuestras chicas virtuales.
          </p>
          <a href="#catalogo" className="button">Ver catálogo 🔥</a>
        </div>
        <div>
          <img src="/chica1.jpg" alt="Chica Foxy Date" style={{ borderRadius: "20px", width: "350px", boxShadow: "0px 0px 20px rgba(255,0,79,0.8)" }} />
        </div>
      </section>

      {/* Catálogo de chicas */}
      <section id="catalogo">
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f", textAlign: "center" }}>Nuestras Chicas 🦊</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          {chicas.map(chica => (
            <div key={chica.id} className="flip-card" onClick={() => setFlipped(flipped === chica.id ? null : chica.id)}>
              <div className={`flip-card-inner ${flipped === chica.id ? "flipped" : ""}`}>
                <div className="flip-card-front">
                  <img src={chica.img} alt={chica.nombre} />
                </div>
                <div className="flip-card-back">
                  <h3>{chica.nombre}</h3>
                  <p>{chica.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Paquetes */}
      <section id="planes">
        <h2 style={{ fontSize: "36px", textAlign: "center", color: "#ff004f", marginBottom: "30px" }}>Nuestros Paquetes 🔥</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "20px", minWidth: "250px" }}>
            <h3 style={{ color: "#ff004f" }}>Plan Básico</h3>
            <p>Acceso a chat básico y matches ilimitados. Ideal para empezar a coquetear.</p>
          </div>
          <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "20px", minWidth: "250px", border: "2px solid #ff004f" }}>
            <h3 style={{ color: "#ff66a3" }}>Plan Premium</h3>
            <p>Incluye videollamadas privadas y regalos virtuales. La experiencia completa.</p>
          </div>
          <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "20px", minWidth: "250px" }}>
            <h3 style={{ color: "#ff004f" }}>Plan VIP</h3>
            <p>Acceso exclusivo a perfiles top, soporte 24/7 y eventos privados.</p>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section id="extras">
        <h2 style={{ fontSize: "36px", textAlign: "center", color: "#ff004f", marginBottom: "30px" }}>Extras ✨</h2>
        <ul style={{ maxWidth: "600px", margin: "0 auto", listStyle: "none", padding: "0" }}>
          <li>🎁 Regalos virtuales para sorprender a tu pareja.</li>
          <li>💎 Stickers y emojis exclusivos para el chat.</li>
          <li>🔥 Eventos temáticos en vivo.</li>
          <li>🦊 Reacciones rápidas para romper el hielo.</li>
        </ul>
      </section>

      {/* Opiniones */}
      <section id="testimonios">
        <h2 style={{ fontSize: "36px", textAlign: "center", color: "#ff004f", marginBottom: "30px" }}>Opiniones de nuestros usuarios 💬</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto" }}>
          <blockquote style={{ backgroundColor: "#111", padding: "20px", borderRadius: "20px" }}>
            <p>“Nunca pensé que tendría una cita virtual tan divertida y realista. Foxy Date me salvó del aburrimiento.”</p>
            <footer>— Carlos, 29</footer>
          </blockquote>
          <blockquote style={{ backgroundColor: "#111", padding: "20px", borderRadius: "20px" }}>
            <p>“Me encanta el plan Premium, las videollamadas son súper fluidas y seguras.”</p>
            <footer>— Sofía, 25</footer>
          </blockquote>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <h2 style={{ fontSize: "36px", textAlign: "center", color: "#ff004f", marginBottom: "30px" }}>Contáctanos 📩</h2>
        <form style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}
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
      <footer>
        <p>© 2025 Foxy Date 🦊 | Amor virtual, real diversión.</p>
      </footer>
    </>
  );
}
