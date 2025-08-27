import { useState, useEffect } from "react";

export default function Home() {
  const [flipped, setFlipped] = useState(null);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const chicas = [
    { id: 1, nombre: "Luna", edad: 23, descripcion: "Divertida, extrovertida y amante de los juegos virtuales.", precio: "$15 / 30 min", foto: "/chica1.jpg" },
    { id: 2, nombre: "Sofi", edad: 25, descripcion: "Romántica, coqueta y siempre lista para una buena charla.", precio: "$20 / 30 min", foto: "/chica2.jpg" },
    { id: 3, nombre: "Emma", edad: 22, descripcion: "Traviesa, divertida y con energía para aventuras virtuales.", precio: "$18 / 30 min", foto: "/chica3.jpg" },
  ];

  return (
    <>
      {/* Animación global para bounce/shimmer */}
      <style>{`
        @keyframes bounceShimmer {
          0% { transform: translateY(0); box-shadow: 0 0 10px #ff004f; }
          25% { transform: translateY(-5px); box-shadow: 0 0 20px #ff004f, 0 0 10px #ff66a3; }
          50% { transform: translateY(0); box-shadow: 0 0 10px #ff004f; }
          75% { transform: translateY(-3px); box-shadow: 0 0 15px #ff004f, 0 0 8px #ff66a3; }
          100% { transform: translateY(0); box-shadow: 0 0 10px #ff004f; }
        }
      `}</style>

      {/* Navbar fija */}
      <header style={{
        position: "fixed", top: 0, left: 0, width: "100%",
        padding: "20px 40px", display: "flex",
        justifyContent: "space-between", alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)", zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
      }}>
        <img src="/logo.png" alt="Foxy Date Logo" style={{ height: "60px" }} />
        <nav style={{ display: "flex", alignItems: "center" }}>
          <a href="#catalogo" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Catálogo</a>
          <a href="#planes" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Paquetes</a>
          <a href="#contacto" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Contacto</a>

          {showTopButton && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                marginLeft: "15px", padding: "8px 15px", borderRadius: "20px",
                border: "none", backgroundColor: "#ff004f", color: "white",
                cursor: "pointer", fontWeight: "bold",
                transition: "0.3s, box-shadow 0.3s, opacity 0.5s",
                boxShadow: "0 0 10px #ff004f",
                opacity: showTopButton ? 1 : 0,
                pointerEvents: showTopButton ? "auto" : "none",
                animation: showTopButton ? "bounceShimmer 1s ease-in-out" : "none"
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
              Top
            </button>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "100px 40px 40px 40px",
        textAlign: "left", flexWrap: "wrap", gap: "40px"
      }}>
        <div style={{ maxWidth: "600px", backgroundColor: "rgba(0,0,0,0.6)", padding: "30px", borderRadius: "20px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", color: "#ff004f" }}>
            Bienvenido a Foxy Date 🦊
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>
            Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive momentos inolvidables con nuestras chicas virtuales.
          </p>
          <a href="#catalogo" style={{
            backgroundColor: "#ff004f", color: "white", padding: "15px 30px",
            borderRadius: "30px", fontSize: "18px", textDecoration: "none"
          }}>Ver catálogo 🔥</a>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <img src="/chica1.jpg" alt="Chica Foxy Date" style={{ borderRadius: "20px", width: "350px", boxShadow: "0px 0px 20px rgba(255,0,79,0.8)" }} />
        </div>
      </section>

      {/* Catálogo de chicas */}
      <section id="catalogo" style={{ padding: "60px 20px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f", textAlign: "center" }}>Nuestras Chicas 🦊</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          {chicas.map((chica) => (
            <div key={chica.id} onClick={() => setFlipped(flipped === chica.id ? null : chica.id)} style={{ perspective: "1000px", width: "250px", cursor: "pointer" }}>
              <div style={{
                width: "100%", height: "350px", borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.5)", transformStyle: "preserve-3d",
                transition: "transform 0.8s, box-shadow 0.3s",
                transform: flipped === chica.id ? "rotateY(180deg)" : "rotateY(0deg)",
                backgroundColor: "#111", position: "relative"
              }}>
                {/* Front */}
                <div style={{
                  position: "absolute", width: "100%", height: "100%",
                  backfaceVisibility: "hidden", borderRadius: "20px", overflow: "hidden"
                }}>
                  <img src={chica.foto} alt={chica.nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                {/* Back */}
                <div style={{
                  position: "absolute", width: "100%", height: "100%",
                  backfaceVisibility: "hidden", backgroundColor: "rgba(0,0,0,0.9)", color: "white",
                  borderRadius: "20px", transform: "rotateY(180deg)",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  justifyContent: "center", padding: "20px", textAlign: "center"
                }}>
                  <h3 style={{ fontSize: "24px", marginBottom: "10px", color: "#ff004f" }}>{chica.nombre}, {chica.edad}</h3>
                  <p style={{ marginBottom: "15px" }}>{chica.descripcion}</p>
                  <p style={{ fontWeight: "bold", color: "#ff004f" }}>{chica.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#111", color: "white" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f" }}>Contáctanos 📩</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 40px auto" }}>
          ¿Tienes preguntas o quieres una experiencia personalizada? Escríbenos y nos pondremos en contacto contigo.
        </p>
        <form style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "0 auto" }}
          onSubmit={(e) => {
            e.preventDefault();
            const nombre = e.target.nombre.value;
            const email = e.target.email.value;
            const mensaje = e.target.mensaje.value;
            const texto = `👋 Hola, soy ${nombre} (${email}).%0A%0A${mensaje}`;
            window.open(`https://wa.me/5491112345678?text=${texto}`, "_blank");
          }}
        >
          <input type="text" name="nombre" placeholder="Tu nombre" required style={{ padding: "10px", borderRadius: "10px", border: "none", backgroundColor: "#222", color: "white" }} />
          <input type="email" name="email" placeholder="Tu correo" required style={{ padding: "10px", borderRadius: "10px", border: "none", backgroundColor: "#222", color: "white" }} />
          <textarea name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required style={{ padding: "10px", borderRadius: "10px", border: "none", backgroundColor: "#222", color: "white" }} />
          <button type="submit" style={{
            padding: "12px", borderRadius: "25px", border: "none", backgroundColor: "#ff004f",
            color: "white", fontWeight: "bold", cursor: "pointer", boxShadow: "0 0 10px #ff004f",
            transition: "0.3s, box-shadow 0.3s"
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

      {/* Footer */}
      <footer style={{ backgroundColor: "#000", color: "#ccc", padding: "40px", textAlign: "center" }}>
        <p>© 2025 Foxy Date 🦊 | Amor virtual, real diversión.</p>
      </footer>
    </>
  );
}
