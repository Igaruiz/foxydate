import { useState } from "react";

export default function Home() {
  const [flipped, setFlipped] = useState(null);

  const chicas = [
    {
      id: 1,
      nombre: "Luna",
      edad: 22,
      descripcion: "Encantadora y divertida, lista para una conversación atrevida.",
      precio: "$25 / chat",
      foto: "/chica1.jpg",
    },
    {
      id: 2,
      nombre: "Sofía",
      edad: 25,
      descripcion: "Súper carismática y coqueta, ideal para momentos inolvidables.",
      precio: "$35 / chat",
      foto: "/chica2.jpg",
    },
    {
      id: 3,
      nombre: "Valeria",
      edad: 23,
      descripcion: "Divertida y espontánea, la mejor compañía virtual.",
      precio: "$30 / chat",
      foto: "/chica3.jpg",
    },
  ];

  return (
    <>
      {/* Navbar simple */}
      <header
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
  }}
>
  {/* Logo */}
  <img src="/logo.png" alt="Foxy Date Logo" style={{ height: "60px" }} />

  {/* Navegación */}
  <nav>
    <a href="#catalogo" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Catálogo</a>
    <a href="#planes" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Paquetes</a>
    <a href="#contacto" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Contacto</a>
  </nav>
</header>

      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "100px 40px 40px 40px", // <- 100px arriba para navbar fija
      textAlign: "left",
      flexWrap: "wrap",
      gap: "40px"
        }}
      >
        <div style={{ maxWidth: "600px", backgroundColor: "rgba(0,0,0,0.6)", padding: "30px", borderRadius: "20px" }}>
          <img src="/logo.png" alt="Foxy Date Logo" style={{ height: "60px", marginBottom: "20px" }} />
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
              textDecoration: "none"
            }}
          >
            Ver catálogo 🔥
          </a>
        </div>

        <div>
          <img src="/chica.jpg" alt="Chica Foxy Date" style={{ borderRadius: "20px", width: "350px", boxShadow: "0px 0px 20px rgba(255,0,79,0.8)" }} />
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" style={{ padding: "60px 20px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f", textAlign: "center" }}>
          Nuestras Chicas 🦊
        </h2>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "40px" }}>
          {chicas.map((chica) => (
            <div
  key={chica.id}
  onClick={() => setFlipped(flipped === chica.id ? null : chica.id)}
  style={{ perspective: "1000px", width: "250px", cursor: "pointer" }}
>
  <div
    className="flip-card"
    style={{
      width: "100%",
      height: "350px",
      borderRadius: "20px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
      transformStyle: "preserve-3d",
      transition: "transform 0.8s, box-shadow 0.3s",
      transform: flipped === chica.id ? "rotateY(180deg)" : "rotateY(0deg)",
      backgroundColor: "#111",
      position: "relative",
    }}
  >
    {/* Front */}
    <div style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      borderRadius: "20px",
      overflow: "hidden",
    }}>
      <img src={chica.foto} alt={chica.nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>

    {/* Back */}
    <div style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      backgroundColor: "rgba(0,0,0,0.9)",
      color: "white",
      borderRadius: "20px",
      transform: "rotateY(180deg)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      textAlign: "center",
    }}>
      <h3 style={{ fontSize: "24px", marginBottom: "10px", color: "#ff004f" }}>
        {chica.nombre}, {chica.edad}
      </h3>
      <p style={{ marginBottom: "15px" }}>{chica.descripcion}</p>
      <p style={{ fontWeight: "bold", color: "#ff004f" }}>{chica.precio}</p>
    </div>
  </div>
</div>

          ))}
        </div>
      </section>

      {/* Paquetes */}
      <section id="planes" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>Nuestros Paquetes 🔥</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
          <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "20px", width: "250px" }}>
            <h3 style={{ fontSize: "24px", color: "#ff004f", marginBottom: "10px" }}>Plan Básico</h3>
            <p>Acceso a chat básico y matches ilimitados. Ideal para empezar a coquetear.</p>
          </div>
          <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "20px", width: "250px", border: "2px solid #ff004f" }}>
            <h3 style={{ fontSize: "24px", color: "#ff004f", marginBottom: "10px" }}>Plan Premium</h3>
            <p>Incluye videollamadas privadas y regalos virtuales. La experiencia completa.</p>
          </div>
          <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "20px", width: "250px" }}>
            <h3 style={{ fontSize: "24px", color: "#ff004f", marginBottom: "10px" }}>Plan VIP</h3>
            <p>Acceso exclusivo a perfiles top, soporte 24/7 y eventos privados.</p>
          </div>
        </div>
      </section>

{/* Contacto */}
<section
  id="contacto"
  style={{
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#111",
    color: "white"
  }}
>
  <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>
    Contáctanos 📩
  </h2>
  <p style={{ maxWidth: "600px", margin: "0 auto 40px auto" }}>
    ¿Tienes preguntas o quieres una experiencia personalizada?  
    Escríbenos y nos pondremos en contacto contigo.
  </p>

  <form
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      maxWidth: "500px",
      margin: "0 auto"
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
      style={{
        padding: "15px",
        borderRadius: "15px",
        border: "none",
        backgroundColor: "#222",
        color: "white",
        fontSize: "16px"
      }}
    />
    <input
      type="email"
      name="email"
      placeholder="Tu correo"
      required
      style={{
        padding: "15px",
        borderRadius: "15px",
        border: "none",
        backgroundColor: "#222",
        color: "white",
        fontSize: "16px"
      }}
    />
    <textarea
      name="mensaje"
      rows="5"
      placeholder="Escribe tu mensaje..."
      required
      style={{
        padding: "15px",
        borderRadius: "15px",
        border: "none",
        backgroundColor: "#222",
        color: "white",
        fontSize: "16px",
        resize: "none"
      }}
    ></textarea>
    <button
  type="submit"
  style={{
    padding: "15px",
    borderRadius: "30px",
    backgroundColor: "#ff004f",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s, box-shadow 0.3s",
    boxShadow: "0 0 10px #ff004f"
  }}
  onMouseOver={e => {
    e.currentTarget.style.backgroundColor = "#ff66a3";
    e.currentTarget.style.boxShadow = "0 0 20px #ff004f, 0 0 40px #ff66a3";
  }}
  onMouseOut={e => {
    e.currentTarget.style.backgroundColor = "#ff004f";
    e.currentTarget.style.boxShadow = "0 0 10px #ff004f";
  }}
>
  Enviar por WhatsApp
</button>

  </form>
</section>

      {/* Footer simple */}
      <footer style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "#111", color: "white" }}>
        © 2025 Foxy Date 🦊 | Amor virtual, real diversión.
      </footer>
    </>
  );
}
