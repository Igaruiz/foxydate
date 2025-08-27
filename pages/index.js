import { useState, useEffect } from "react";

export default function Home() {
  const [flipped, setFlipped] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(section => observer.observe(section));

    // Parallax hero
    const heroImg = document.querySelector(".hero-container img");
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if(heroImg) heroImg.style.transform = `translateY(${offset * 0.2}px)`;
    };
    window.addEventListener("scroll", handleScroll);

    // Carrusel automático
    let index = 0;
    const track = document.querySelector(".carousel-track");
    const total = track?.children.length || 0;
    const interval = setInterval(() => {
      if(track && total>0){
        index = (index + 1) % total;
        track.style.transform = `translateX(-${index*100}%)`;
      }
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    }
  }, []);

  const chicas = [
    { id:1, nombre:"Luna", img:"/chica1.jpg", descripcion:"Charla divertida y atrevida. 30min x $10" },
    { id:2, nombre:"Mia", img:"/chica2.jpg", descripcion:"Experiencia Premium y videollamadas. 30min x $15" },
    { id:3, nombre:"Sofi", img:"/chica3.jpg", descripcion:"Rompehielos, emojis y regalos virtuales. 30min x $20" },
  ];

  const scrollTo = (id) => {
    const yOffset = -90; // altura navbar
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  }

  const handleNext = () => {
    const track = document.querySelector(".carousel-track");
    const total = track?.children.length || 0;
    if(!track || total===0) return;
    let current = parseInt(track.dataset.index || 0);
    current = (current + 1) % total;
    track.dataset.index = current;
    track.style.transform = `translateX(-${current*100}%)`;
  }

  const handlePrev = () => {
    const track = document.querySelector(".carousel-track");
    const total = track?.children.length || 0;
    if(!track || total===0) return;
    let current = parseInt(track.dataset.index || 0);
    current = (current - 1 + total) % total;
    track.dataset.index = current;
    track.style.transform = `translateX(-${current*100}%)`;
  }

  return (
    <>
      {/* Navbar */}
      <header>
        <img src="/logo.png" alt="Logo Foxy" />
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <div></div><div></div><div></div>
        </div>
        <nav className={menuOpen?"open":""}>
          <button className="nav-btn" onClick={()=>scrollTo("galeria")}>Galería</button>
          <button className="nav-btn" onClick={()=>scrollTo("catalogo")}>Chicas</button>
          <button className="nav-btn" onClick={()=>scrollTo("planes")}>Paquetes</button>
          <button className="nav-btn" onClick={()=>scrollTo("extras")}>Extras</button>
          <button className="nav-btn" onClick={()=>scrollTo("testimonios")}>Opiniones</button>
          <button className="nav-btn" onClick={()=>scrollTo("contacto")}>Contacto</button>
          <button className="nav-btn" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>Top ↑</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-container">
        <div style={{maxWidth:"700px",backgroundColor:"rgba(0,0,0,0.6)",padding:"30px",borderRadius:"25px",marginBottom:"20px",boxShadow:"0px 0px 20px rgba(255,0,79,0.6)"}}>
          <h1>Bienvenido a Foxy Date 🦊</h1>
          <p>Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive momentos inolvidables con nuestras chicas virtuales.</p>
          <a href="#catalogo" className="button">Ver catálogo 🔥</a>
        </div>
        <img src="/chica1.jpg" alt="Hero Chica"/>
      </section>

      {/* Galería / Carrusel */}
      <section id="galeria">
        <h2>Galería 📸</h2>
        <div style={{position:"relative", width:"90%", maxWidth:"900px", overflow:"hidden", borderRadius:"20px"}}>
          <div className="carousel-track" data-index="0">
            <img src="/galeria1.jpg" alt="" />
            <img src="/galeria2.jpg" alt="" />
            <img src="/galeria3.jpg" alt="" />
          </div>
          <button className="carousel-prev" onClick={handlePrev}>‹</button>
          <button className="carousel-next" onClick={handleNext}>›</button>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo">
        <h2>Nuestras Chicas 🦊</h2>
        <div style={{display:"flex",justifyContent:"center",gap:"30px",flexWrap:"wrap"}}>
          {chicas.map(c =>
            <div key={c.id} className="flip-card" onClick={()=>setFlipped(flipped===c.id?null:c.id)}>
              <div className={`flip-card-inner ${flipped===c.id?"flipped":""}`}>
                <div className="flip-card-front"><img src={c.img} alt={c.nombre}/></div>
                <div className="flip-card-back"><h3>{c.nombre}</h3><p>{c.descripcion}</p></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Paquetes */}
      <section id="planes">
        <h2>Nuestros Paquetes 🔥</h2>
        <div style={{display:"flex",justifyContent:"center",gap:"30px",flexWrap:"wrap"}}>
          <div style={{backgroundColor:"#111",padding:"25px",borderRadius:"20px",minWidth:"250px"}}><h3 style={{color:"#ff004f"}}>Plan Básico</h3><p>Acceso a chat básico y matches ilimitados. Ideal para empezar a coquetear.</p></div>
          <div style={{backgroundColor:"#111",padding:"25px",borderRadius:"20px",minWidth:"250px",border:"2px solid #ff004f"}}><h3 style={{color:"#ff66a3"}}>Plan Premium</h3><p>Incluye videollamadas privadas y regalos virtuales. La experiencia completa.</p></div>
          <div style={{backgroundColor:"#111",padding:"25px",borderRadius:"20px",minWidth:"250px"}}><h3 style={{color:"#ff004f"}}>Plan VIP</h3><p>Acceso exclusivo a perfiles top, soporte 24/7 y eventos privados.</p></div>
        </div>
      </section>

      {/* Extras */}
      <section id="extras">
        <h2>Extras ✨</h2>
        <ul style={{maxWidth:"600px",margin:"0 auto",listStyle:"none",padding:"0"}}>
          <li>🎁 Regalos virtuales para sorprender a tu pareja.</li>
          <li>💎 Stickers y emojis exclusivos para el chat.</li>
          <li>🔥 Eventos temáticos en vivo.</li>
          <li>🦊 Reacciones rápidas para romper el hielo.</li>
        </ul>
      </section>

      {/* Testimonios */}
      <section id="testimonios">
        <h2>Opiniones 💬</h2>
        <div style={{display:"flex",justifyContent:"center",gap:"30px",flexWrap:"wrap",maxWidth:"900px",margin:"0 auto"}}>
          <blockquote style={{backgroundColor:"#111",padding:"20px",borderRadius:"20px"}}>“Nunca pensé que tendría una cita virtual tan divertida y realista. Foxy Date me salvó del aburrimiento.”<footer>— Carlos, 29</footer></blockquote>
          <blockquote style={{backgroundColor:"#111",padding:"20px",borderRadius:"20px"}}>“Me encanta el plan Premium, las videollamadas son súper fluidas y seguras.”<footer>— Sofía, 25</footer></blockquote>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <h2>Contáctanos 📩</h2>
        <form style={{maxWidth:"600px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"15px"}}
          onSubmit={e=>{
            e.preventDefault();
            const nombre = e.target.nombre.value;
            const email = e.target.email.value;
            const mensaje = e.target.mensaje.value;
            window.open(`https://wa.me/5491112345678?text=👋 Hola, soy ${nombre} (${email}).%0A%0A${mensaje}`,"_blank");
          }}
        >
          <input type="text" name="nombre" placeholder="Tu nombre" required/>
          <input type="email" name="email" placeholder="Tu correo" required/>
          <textarea name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
          <button type="submit">Enviar por WhatsApp</button>
        </form>
      </section>

      {/* Footer */}
      <footer>© 2025 Foxy Date 🦊 | Amor virtual, real diversión.</footer>
    </>
  )
}
