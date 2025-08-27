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

    const heroImg = document.querySelector(".hero-container img");
    const handleScroll = () => {
      const offset = window.pageYOffset;
      heroImg.style.transform = `translateY(${offset * 0.2}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const chicas = [
    { id:1, nombre:"Luna", img:"/chica1.jpg", descripcion:"Charla divertida y atrevida. 30min x $10" },
    { id:2, nombre:"Mia", img:"/chica2.jpg", descripcion:"Experiencia Premium y videollamadas. 30min x $15" },
    { id:3, nombre:"Sofi", img:"/chica3.jpg", descripcion:"Rompehielos, emojis y regalos virtuales. 30min x $20" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
    setMenuOpen(false); // cierra menú en móviles
  }

  return (
    <>
      <header>
        <img src="/logo.png" alt="Logo Foxy" />
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={menuOpen?"open":""}>
          <button className="nav-btn" onClick={()=>scrollTo("catalogo")}>Chicas</button>
          <button className="nav-btn" onClick={()=>scrollTo("planes")}>Paquetes</button>
          <button className="nav-btn" onClick={()=>scrollTo("extras")}>Extras</button>
          <button className="nav-btn" onClick={()=>scrollTo("testimonios")}>Opiniones</button>
          <button className="nav-btn" onClick={()=>scrollTo("contacto")}>Contacto</button>
          <button className="nav-btn" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>Top ↑</button>
        </nav>
      </header>

      <section className="hero-container">
        <div style={{maxWidth:"700px",backgroundColor:"rgba(0,0,0,0.6)",padding:"50px",borderRadius:"25px"}}>
          <h1 style={{fontSize:"60px",color:"#ff004f",marginBottom:"30px"}}>Bienvenido a Foxy Date 🦊</h1>
          <p style={{fontSize:"24px",marginBottom:"30px"}}>Tu experiencia virtual de citas más atrevida. Conoce, chatea y vive momentos inolvidables con nuestras chicas virtuales.</p>
          <a href="#catalogo" className="button">Ver catálogo 🔥</a>
        </div>
        <img src="/chica1.jpg" alt="Chica Foxy"/>
      </section>

      <section id="catalogo">
        <h2 style={{fontSize:"40px",color:"#ff004f",textAlign:"center",marginBottom:"40px"}}>Nuestras Chicas 🦊</h2>
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

      <section id="planes">
        <h2 style={{fontSize:"36px",color:"#ff004f",textAlign:"center",marginBottom:"30px"}}>Nuestros Paquetes 🔥</h2>
        <div style={{display:"flex",justifyContent:"center",gap:"30px",flexWrap:"wrap"}}>
          <div style={{backgroundColor:"#111",padding:"25px",borderRadius:"20px",minWidth:"250px"}}><h3 style={{color:"#ff004f"}}>Plan Básico</h3><p>Acceso a chat básico y matches ilimitados. Ideal para empezar a coquetear.</p></div>
          <div style={{backgroundColor:"#111",padding:"25px",borderRadius:"20px",minWidth:"250px",border:"2px solid #ff004f"}}><h3 style={{color:"#ff66a3"}}>Plan Premium</h3><p>Incluye videollamadas privadas y regalos virtuales. La experiencia completa.</p></div>
          <div style={{backgroundColor:"#111",padding:"25px",borderRadius:"20px",minWidth:"250px"}}><h3 style={{color:"#ff004f"}}>Plan VIP</h3><p>Acceso exclusivo a perfiles top, soporte 24/7 y eventos privados.</p></div>
        </div>
      </section>

      <section id="extras">
        <h2 style={{fontSize:"36px",color:"#ff004f",textAlign:"center",marginBottom:"30px"}}>Extras ✨</h2>
        <ul style={{maxWidth:"600px",margin:"0 auto",listStyle:"none",padding:"0"}}>
          <li>🎁 Regalos virtuales para sorprender a tu pareja.</li>
          <li>💎 Stickers y emojis exclusivos para el chat.</li>
          <li>🔥 Eventos temáticos en vivo.</li>
          <li>🦊 Reacciones rápidas para romper el hielo.</li>
        </ul>
      </section>

      <section id="testimonios">
        <h2 style={{fontSize:"36px",color:"#ff004f",textAlign:"center",marginBottom:"30px"}}>Opiniones 💬</h2>
        <div style={{display:"flex",justifyContent:"center",gap:"30px",flexWrap:"wrap",maxWidth:"900px",margin:"0 auto"}}>
          <blockquote style={{backgroundColor:"#111",padding:"20px",borderRadius:"20px"}}>“Nunca pensé que tendría una cita virtual tan divertida y realista. Foxy Date me salvó del aburrimiento.”<footer>— Carlos, 29</footer></blockquote>
          <blockquote style={{backgroundColor:"#111",padding:"20px",borderRadius:"20px"}}>“Me encanta el plan Premium, las videollamadas son súper fluidas y seguras.”<footer>— Sofía, 25</footer></blockquote>
        </div>
      </section>

      <section id="contacto">
        <h2 style={{fontSize:"36px",color:"#ff004f",textAlign:"center",marginBottom:"30px"}}>Contáctanos 📩</h2>
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

      <footer>© 2025 Foxy Date 🦊 | Amor virtual, real diversión.</footer>
    </>
  )
}
