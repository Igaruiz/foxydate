import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="about" className="min-h-screen flex items-center justify-center bg-dark text-white">
        <h1 className="text-5xl font-bold text-foxyred">No es solo un chat… es una experiencia.</h1>
      </section>
      <section id="planes" className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-3xl">Nuestros Planes</h2>
      </section>
      <section id="extras" className="min-h-screen flex items-center justify-center bg-dark text-white">
        <h2 className="text-3xl">Contenido Extra</h2>
      </section>
      <section id="testimonios" className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-3xl">Experiencias</h2>
      </section>
      <footer className="p-6 text-center bg-dark text-white">
        © 2025 Foxy Date. Todos los derechos reservados.
      </footer>
    </div>
  )
}
