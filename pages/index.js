import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/fondo.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        color: "white"
      }}
    >
      <Navbar />

      {/* Hero */}
      <section 
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "left"
        }}
      >
        {/* Contenedor con logo + texto */}
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

        {/* Imagen de la chica al costado */}
        <div style={{ marginLeft: "40px" }}>
          <img src="/chica1.jpg" alt="Chica Foxy Date" style={{ borderRadius: "20px", width: "350px", boxShadow: "0px 0px 20px rgba(255,0,79,0.8)" }} />
        </div>
      </section>

      {/* Catálogo de chicas */}
      <section id="catalogo" style={{ padding: "60px 20px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f", textAlign: "center" }}>
          Nuestras Chicas 🦊
        </h2>

        <p style={{ textAlign: "center" }}>
          Aquí aparecerán las chicas con sus fotos, descripciones y precios. 🚀
        </p>
      </section>

      <Footer />
    </div>
  )
}

      {/* Paquetes */}
      <section
        id="planes"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6"
      >
        <h2 className="text-4xl font-bold text-neonpink mb-10">Nuestros Paquetes 🔥</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-dark p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-foxyred mb-4">Plan Básico</h3>
            <p className="text-gray-300">
              Acceso a chat básico y matches ilimitados. Ideal para empezar a coquetear.
            </p>
          </div>
          <div className="bg-dark p-6 rounded-2xl shadow-lg border-2 border-neonpink">
            <h3 className="text-2xl font-bold text-neonpink mb-4">Plan Premium</h3>
            <p className="text-gray-300">
              Incluye videollamadas privadas y regalos virtuales. La experiencia completa.
            </p>
          </div>
          <div className="bg-dark p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-foxyred mb-4">Plan VIP</h3>
            <p className="text-gray-300">
              Acceso exclusivo a perfiles top, soporte 24/7 y eventos privados.
            </p>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section
        id="extras"
        className="min-h-screen flex flex-col items-center justify-center bg-dark text-center px-6"
      >
        <h2 className="text-4xl font-bold text-foxyred mb-10">Extras ✨</h2>
        <ul className="space-y-4 text-lg text-gray-300">
          <li>🎁 Regalos virtuales para sorprender a tu pareja.</li>
          <li>💎 Stickers y emojis exclusivos para el chat.</li>
          <li>🔥 Eventos temáticos en vivo.</li>
          <li>🦊 Reacciones rápidas para romper el hielo.</li>
        </ul>
      </section>

      {/* Opiniones */}
      <section
        id="testimonios"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6"
      >
        <h2 className="text-4xl font-bold text-neonpink mb-10">Opiniones de nuestros usuarios 💬</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <blockquote className="bg-dark p-6 rounded-2xl shadow">
            <p className="text-gray-300 italic">
              “Nunca pensé que tendría una cita virtual tan divertida y realista.
              Foxy Date me salvó del aburrimiento.”
            </p>
            <footer className="mt-4 text-foxyred font-semibold">— Carlos, 29</footer>
          </blockquote>
          <blockquote className="bg-dark p-6 rounded-2xl shadow">
            <p className="text-gray-300 italic">
              “Me encanta el plan Premium, las videollamadas son súper fluidas y seguras.”
            </p>
            <footer className="mt-4 text-foxyred font-semibold">— Sofía, 25</footer>
          </blockquote>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="min-h-screen flex flex-col items-center justify-center bg-dark text-center px-6"
      >
        <h2 className="text-4xl font-bold text-foxyred mb-10">Contáctanos 📩</h2>
        <p className="text-gray-300 mb-8 max-w-xl">
          ¿Tienes preguntas o quieres una experiencia personalizada?  
          Escríbenos y nos pondremos en contacto contigo.
        </p>

        <form
          className="bg-black p-8 rounded-2xl shadow-lg max-w-lg w-full space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const nombre = e.target.nombre.value;
            const email = e.target.email.value;
            const mensaje = e.target.mensaje.value;

            const texto = `👋 Hola, soy ${nombre} (${email}).%0A%0A${mensaje}`;
            window.open(`https://wa.me/5491112345678?text=${texto}`, "_blank");
          }}
        >
          {/* Nombre */}
          <div className="flex flex-col text-left">
            <label className="text-gray-400 mb-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              className="p-3 rounded-lg bg-dark text-white border border-gray-700 focus:border-neonpink outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col text-left">
            <label className="text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="tucorreo@email.com"
              required
              className="p-3 rounded-lg bg-dark text-white border border-gray-700 focus:border-neonpink outline-none"
            />
          </div>

          {/* Mensaje */}
          <div className="flex flex-col text-left">
            <label className="text-gray-400 mb-2">Mensaje</label>
            <textarea
              rows="4"
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              required
              className="p-3 rounded-lg bg-dark text-white border border-gray-700 focus:border-neonpink outline-none"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-foxyred hover:bg-neonpink text-white font-semibold py-3 rounded-xl transition"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Marca */}
          <div>
            <h3 className="text-2xl font-bold text-foxyred mb-3">🦊 Foxy Date</h3>
            <p className="text-sm text-gray-400">
              La experiencia de citas virtuales más atrevida de internet.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-3">Navegación</h4>
            <ul className="space-y-2">
              <li className="hover:text-neonpink cursor-pointer" onClick={() => document.getElementById("about").scrollIntoView({behavior:"smooth"})}>Inicio</li>
              <li className="hover:text-neonpink cursor-pointer" onClick={() => document.getElementById("planes").scrollIntoView({behavior:"smooth"})}>Paquetes</li>
              <li className="hover:text-neonpink cursor-pointer" onClick={() => document.getElementById("extras").scrollIntoView({behavior:"smooth"})}>Experiencias</li>
              <li className="hover:text-neonpink cursor-pointer" onClick={() => document.getElementById("testimonios").scrollIntoView({behavior:"smooth"})}>Opiniones</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-semibold text-white mb-3">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://instagram.com" target="_blank" className="hover:text-neonpink transition">📸 Instagram</a>
              <a href="https://tiktok.com" target="_blank" className="hover:text-neonpink transition">🎵 TikTok</a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2025 Foxy Date 🦊 | Amor virtual, real diversión.
        </div>
      </footer>
    </div>
  )
}
