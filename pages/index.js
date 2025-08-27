import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogoChicas from "@/components/CatalogoChicas";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "left",
          flexWrap: "wrap",
          gap: "40px"
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
        <div>
          <img src="/chica1.jpg" alt="Chica Foxy Date" style={{ borderRadius: "20px", width: "350px", boxShadow: "0px 0px 20px rgba(255,0,79,0.8)" }} />
        </div>
      </section>

      {/* Catálogo de chicas */}
      <section id="catalogo" style={{ padding: "60px 20px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#ff004f", textAlign: "center" }}>
          Nuestras Chicas 🦊
        </h2>
        <CatalogoChicas />
      </section>

      {/* Paquetes */}
      <section id="planes" className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6">
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

      {/* Footer */}
      <Footer />
    </>
  );
}
