import Navbar from '../components/Navbar';

export default function NosotrosPage() {
  return (
    <main>
      <Navbar />

      <div style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '100px' }}>
        
        <section className="reveal" style={{ paddingBottom: '3rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="status-badge" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
                    <i className="ph ph-users"></i>
                    <span>NUESTRA AGENCIA</span>
                </div>
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Acerca de <span className="highlight-purple" style={{ fontStyle: 'italic' }}>Skirr</span></h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Somos un equipo de desarrolladores de servidores apasionados por ayudar a las comunidades a establecer su presencia. Ya seas un pequeño servidor de amigos o una red masiva de Minecraft, creemos que todo proyecto merece una infraestructura técnica que realmente lo represente y lo ayude a escalar sin límites.
                </p>
            </div>
        </section>

        <section className="reveal" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Cómo <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Comenzamos</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                    Todo comenzó cuando notamos la gran cantidad de servidores de Discord y Minecraft que sufrían de lag, mala configuración y falta de personalización. Nuestra pasión por el desarrollo de bots en Python y la automatización nos llevó a crear Skirr, una equipo dedicado a hacer que la infraestructura profesional sea accesible para todos los fundadores de comunidades.
                </p>

                <div className="stats-grid">
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                        <i className="ph ph-calendar-blank" style={{ fontSize: '1.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}></i>
                        <h3 style={{ fontSize: '1.5rem', margin: '0' }}>2025</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0' }}>Fundación</p>
                    </div>
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                        <i className="ph ph-code" style={{ fontSize: '1.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}></i>
                        <h3 style={{ fontSize: '1.5rem', margin: '0' }}>10+</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0' }}>Bots Creados</p>
                    </div>
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                        <i className="ph ph-users-three" style={{ fontSize: '1.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}></i>
                        <h3 style={{ fontSize: '1.5rem', margin: '0' }}>100%</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0' }}>Satisfacción</p>
                    </div>
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                        <i className="ph ph-clock" style={{ fontSize: '1.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}></i>
                        <h3 style={{ fontSize: '1.5rem', margin: '0' }}>24/7</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0' }}>Soporte Técnico</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="reveal" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Por Qué <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Elegirnos</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem' }}>Lo que nos hace diferentes no es solo lo que construimos, es cómo abordamos cada proyecto.</p>
                
                <div className="services-bento-grid">
                    <div className="glass-panel">
                        <i className="ph ph-target icon-purple" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}></i>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Enfoque en Rendimiento</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0' }}>Construimos códigos optimizados desde el inicio para que tu bot no tenga demoras.</p>
                    </div>
                    <div className="glass-panel">
                        <i className="ph ph-chats-circle icon-purple" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}></i>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Comunicación Directa</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0' }}>Trabajas directamente con los desarrolladores, sin intermediarios, para evitar confusiones.</p>
                    </div>
                    <div className="glass-panel">
                        <i className="ph ph-check-square-offset icon-purple" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}></i>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Calidad en Cada Etapa</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0' }}>Sometemos cada sistema a pruebas de estrés antes de entregarlo a tu comunidad.</p>
                    </div>
                    <div className="glass-panel">
                        <i className="ph ph-lightning icon-purple" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}></i>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Soluciones Completas</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0' }}>Desde la arquitectura del servidor hasta el código de moderación automatizada, cubrimos todo.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="reveal" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Nuestros <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Valores</span></h2>
                
                <div className="timeline-container">
                    <div className="timeline-item">
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Claridad</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>El código debe ser limpio y escalable. Cada decisión que tomamos busca mantener un ecosistema digital organizado.</p>
                    </div>
                    <div className="timeline-item">
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Propósito</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>No instalamos plugins por instalar. Diseñamos con intención para que cada comando apoye a tu comunidad.</p>
                    </div>
                    <div className="timeline-item">
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Rendimiento</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Un servidor solo está completo cuando funciona sin lag. Construimos redes rápidas, fluidas y confiables.</p>
                    </div>
                    <div className="timeline-item">
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Precisión</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Cada detalle importa. Desde la configuración de permisos hasta la economía, la precisión define cómo trabajamos.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="reveal" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="glass-panel" style={{ padding: '3rem 2rem', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Nuestro <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Compromiso</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', margin: '0' }}>
                        Estamos comprometidos a entregar código de calidad y mantener comunicación abierta durante cada proyecto. Buscamos construir relaciones a largo plazo que ayuden a que tu comunidad o negocio despegue con seguridad.
                    </p>
                </div>
            </div>
        </section>

        <section className="reveal" style={{ paddingTop: '2rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Nuestro <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Equipo</span></h2>
                
                <div className="team-grid">
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                        <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Liam</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0' }}>Fundador & Lead Developer</p>
                    </div>
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                        <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Lester</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0' }}>Financiero & Co-Founder</p>
                    </div>
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                        <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Soporte Técnico</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0' }}>Asistencia y mantenimiento</p>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                        <i className="ph ph-map-pin" style={{ marginRight: '5px' }}></i> Ubicación
                    </p>
                    <div className="location-badges">
                        <span className="badge-location">Colombia</span>
                        <span className="badge-location" style={{ border: 'none' }}>•</span>
                        <span className="badge-location">El Salvador</span>
                        <span className="badge-location" style={{ border: 'none' }}>•</span>
                        <span className="badge-location"><i className="ph ph-globe"></i> Remoto</span>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}