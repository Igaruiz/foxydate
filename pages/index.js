import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-dark text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-foxyred mb-6">
          Foxy Date 🦊
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
          La experiencia de <span className="text-neonpink">citas virtuales</span> más
          atrevida de internet. Conecta, charla y disfruta de compañía cuando quieras.
        </p>
        <button className="mt-8 bg-foxyred hover:bg-neonpink text-white px-8 py-3 rounded-2xl font-semibold transition">
          ¡Empieza tu cita ahora!
        </button>
      </section>

      {/* Planes */}
      <section
        id="planes"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6"
      >
        <h2 className="text-4xl font-bold text-neonpink mb-10">Nuestros Planes 🔥</h2>
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

      {/* Testimonios */}
      <section
        id="testimonios"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6"
      >
        <h2 className="text-4xl font-bold text-neonpink mb-10">Lo que dicen nuestros usuarios 💬</h2>
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

      {/* Footer */}
      <footer className="p-6 text-center bg-dark text-gray-400">
        © 2025 Foxy Date 🦊 | Amor virtual, real diversión.
      </footer>
    </div>
  )
}
