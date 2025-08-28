import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [flip, setFlip] = useState([false, false, false]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselImages = [
    "/galeria1.jpg",
    "/galeria2.jpg",
    "/galeria3.jpg",
    "/galeria4.jpg",
    "/galeria5.jpg"
  ];

  const catalogoChicas = [
    { nombre: "Chica 1", edad: 22, precio: "$30", img: "/catalogo1.jpg", desc: "Extrovertida y divertida." },
    { nombre: "Chica 2", edad: 25, precio: "$40", img: "/catalogo2.jpg", desc: "Romántica y aventurera." },
    { nombre: "Chica 3", edad: 28, precio: "$50", img: "/catalogo3.jpg", desc: "Misteriosa y encantadora." }
  ];

  const planes = [
    { titulo: "Plan Básico", desc: "Acceso a chat básico y matches ilimitados. Ideal para empezar a coquetear.", destacado: false },
    { titulo: "Plan Premium", desc: "Incluye videollamadas privadas y regalos virtuales. La experiencia completa.", destacado: true },
    { titulo: "Plan VIP", desc: "Acceso exclusivo a perfiles top, soporte 24/7 y eventos privados.", destacado: false }
  ];

  const opiniones = [
    { nombre: "Carlos, 29", texto: "Nunca pensé que tendría una cita virtual tan divertida y realista. Foxy Date me salvó del aburrimiento." },
    { nombre: "Sofía, 25", texto: "Me encanta el plan Premium, las videollamadas son súper fluidas y seguras." }
  ];

  const carouselRef = useRef();

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = id => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Navbar */}
      <header>
        <img src="/logo.png" alt="Logo" onClick={() => scrollTo("hero")} />
        <nav>
          <button className="nav-btn" onClick={() => scrollTo("hero")}>Inicio</button>
          <button className="nav-btn" onClick={() => scrollTo("catalogo")}>Chicas</button>
          <button className="nav-btn" onClick={() => scrollTo("planes")}>Planes</button>
          <button className="nav-btn" onClick={() => scrollTo("opiniones")}>Opiniones</button>
          <button className="nav-btn" onClick={() => scrollTo("contacto")}>Contacto</button>
          <button className="nav-btn" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>Top</button>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="hero-container">
        <h1>Bienvenido a Foxy Date 🦊</h1>
        <p>Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive momentos inolvidables.</p>
        <a className="button" href="#catalogo">Ver catálogo 🔥</a>
      </section>

      {/* Carrusel Galería */}
      <section className="carousel-container">
        <div
          className="carousel-track"
          ref={carouselRef}
          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
        >
          {carouselImages.map((img, idx) => (
            <img key={idx} src={img} alt={`Galería ${idx+1}`} />
          ))}
        </div>
      </section>

      {/* Catálogo Chicas */}
      <section id="catalogo">
        <h2>Nuestras Chicas 🦊</h2>
        <div className="catalogo-container">
          {catalogoChicas.map((chica, idx) => (
            <div key={idx} className="flip-card" onClick={() => {
              const newFlip = [...flip];
              newFlip[idx] = !newFlip[idx];
              setFlip(newFlip);
            }}>
              <div className={`flip-card-inner ${flip[idx] ? "flipped" : ""}`}>
                <div className="flip-card-front">
                  <img src={chica.img} alt={chica.nombre} />
                </div>
                <div className="flip-card-back">
                  <h3>{chica.nombre}, {chica.edad}</h3>
                  <p>{chica.desc}</p>
                  <p>{chica.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planes */}
      <section id="planes">
        <h2>Nuestros Planes 🔥</h2>
        <div className="planes-container">
          {planes.map((plan, idx) => (
            <div key={idx} className={`plan-card ${plan.destacado ? "destacado" : ""}`}>
              <h3>{plan.titulo}</h3>
              <p>{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Opiniones */}
      <section id="opiniones">
        <h2>Opiniones 💬</h2>
        <div className="opiniones-container">
          {opiniones.map((o, idx) => (
            <blockquote key={idx}>
              <p>“{o.texto}”</p>
              <footer>— {o.nombre}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
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
          <textarea name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required />
          <button type="submit">Enviar por WhatsApp</button>
        </form>
      </section>

      {/* Footer */}
      <footer>© 2025 Foxy Date 🦊 | Amor virtual, real diversión.</footer>
    </>
  );
}
