import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bottom-footer reveal">
        <div className="container footer-grid-layout" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
          
          <div className="footer-col brand-info" style={{ flex: '1 1 250px' }}>
            <div className="brand">
              <img src="/skirr.ico" alt="Skirr" />
              <span>skirr</span>
            </div>
            <p data-i18n="footerDesc">Construimos el futuro para tu comunidad.</p>
          </div>
          
          <div className="footer-col" style={{ flex: '1 1 120px' }}>
            <span className="col-head">RECURSOS</span>
            <Link href="/servicios">Servicios</Link>
            <Link href="/portafolio">Portafolio</Link>
            <Link href="/contacto">Contacto</Link>
          </div>

          <div className="footer-col" style={{ flex: '1 1 120px' }}>
            <span className="col-head">EQUIPO</span>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
          </div>
          
          <div className="footer-col" style={{ flex: '1 1 120px' }}>
            <span className="col-head">LEGAL</span>
            <Link href="/terminos">Términos de Servicio</Link>
            <Link href="/privacidad">Política de Privacidad</Link>
          </div>
          
          <div className="footer-col contact-col" style={{ flex: '1 1 200px' }}>
            <span className="col-head">DISPONIBILIDAD</span>
            <a href="mailto:contacto@skirr.dev" style={{ fontWeight: '600' }}>contacto@skirr.dev</a>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.3rem' }}>
              Respuesta: 24–48h
            </span>
            <span className="status-badge" style={{ marginTop: '0.8rem', display: 'inline-flex' }}>
              Aceptando Proyectos
            </span>
          </div>

        </div>
        
        <div className="footer-bottom container">
          <p data-i18n="footerCopyright">© 2026 Skirr. Todos los derechos reservados.</p>
          <div className="socials">
            <Link href="https://discord.gg/rdkDrR7wUB"><i className="ph ph-discord-logo"></i></Link>
            <Link href="https://x.com/Skirrdev"><i className="ph ph-twitter-logo"></i></Link>
            <Link href="https://github.com/skirrdev"><i className="ph ph-github-logo"></i></Link>
          </div>
        </div>
      </footer>

      <div className="progress-bar-aesthetic"><div className="progress-fill"></div></div>
      <button id="back-to-top" className="btn-up-aesthetic"><i className="ph ph-arrow-up"></i></button>
    </>
  );
}