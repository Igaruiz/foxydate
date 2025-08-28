import { useState, useRef } from "react";

export default function Home() {
  const [flipped, setFlipped] = useState([false, false, false]);
  const carouselRef = useRef(null);

  const flipCard = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const nextSlide = () => {
    const track = carouselRef.current;
    track.appendChild(track.firstElementChild);
  };

  const prevSlide = () => {
    const track = carouselRef.current;
    track.insertBefore(track.lastElementChild, track.firstElementChild);
  };

  return (
    <>
      {/* Navbar */}
      <header>
        <img src="/logo.png" alt="Logo" />
        <nav>
          <button className="nav-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Top
          </button>
          <button className="nav-btn" onClick={() => document.getElementById("catalogo").scrollIntoView({behavior:"smooth"})}>
            Chicas
          </button>
          <button className="nav-btn" onClick={() => document.getElementById("planes").scrollIntoView({behavior:"smooth"})}>
            Paquetes
          </button>
          <button className="nav-btn" onClick={() => document.getElementById("opiniones").scrollIntoView({behavior:"smooth"})}>
            Opiniones
          </button>
          <button className="nav-btn" onClick={() => document.getElementById("contacto").scrollIntoView({behavior:"smooth"})}>
            Contacto
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-container">
        <h1>Bienvenido a Foxy Date 🦊</h1>
        <p>Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive momentos inolvidables con nuestras chicas virtuales.</p>
        <a href="#catalogo" className="button">Ver catálogo 🔥</a>
      </section>

      {/* Carrusel */}
      <section className="carousel-container">
        <div className="carousel-track" ref={carouselRef}>
          <img src="/galeria1.jpg" alt="Galería 1" />
          <img src="/galeria2.jpg" alt="Galería 2" />
          <img src="/galeria3.jpg" alt="Galería 3" />
          <img src="/galeria4.jpg" alt="Galería 4" />
          <img src="/galeria5.jpg" alt="Galería 5" />
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button className="nav-btn" onClick={prevSlide}>◀</button>
          <button className="nav-btn" onClick={nextSlide}>▶</button>
        </div>
      </section>

      {/* Catálogo de chicas */}
      <section id="catalogo" style={{ padding: "60px 20px" }}>
        <h2>Nuestras Chicas 🦊</h2>
        <div className="catalogo-container">
          {[1, 2, 3].map((num, idx) => (
            <div key={idx} className="flip-card" onClick={() => flipCard(idx)}>
              <div className={`flip-card-inner ${flipped[idx] ? "flipped" : ""}`}>
                <div className="flip-card-front">
                  <img src={`/catalogo${num}.jpg`} alt={`Chica ${num}`} />
                </div>
                <div className="flip-card-back">
                  <h3>Chica {num}</h3>
                  <p>Descripción breve de la chica {num}. Precio: $XXX</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planes */}
      <section id="planes" style={{ padding: "60px 20px" }}>
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
      <section id="opiniones" style={{ padding: "60px 20px" }}>
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
      <section id="contacto" style={{ padding: "60px 20px" }}>
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
      <footer>
        <p>© 2025 Foxy Date 🦊 | Amor virtual, real diversión.</p>
      </footer>
    </>
  );
}
