import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function TerminosPage() {
  return (
    <main>
      <Navbar />

      <section className="hero reveal" style={{ minHeight: 'auto', paddingTop: '150px', paddingBottom: '40px' }}>
        <div className="container contact-header" style={{ textAlign: 'left' }}>
            <div className="status-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                <i className="ph ph-scroll"></i>
                <span>LEGAL</span>
            </div>
            <h1>Términos de <span>Servicio</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '600px' }}>
                Última actualización: Marzo de 2026. Las reglas claras que protegen nuestra colaboración y tu proyecto.
            </p>
        </div>
      </section>

      <section className="reveal" style={{ paddingTop: '0', paddingBottom: '5rem' }}>
        <div className="container">
            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                
                <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem', marginTop: '0' }}>1. Aceptación de los Términos</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Al contratar los servicios de Skirr (desarrollo, configuración, moderación o asesoría), aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo, no podrás acceder a nuestros servicios.
                    </p>

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>2. Servicios de Desarrollo y Configuración</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Nos especializamos en la creación y configuración de ecosistemas digitales, <strong>pero no somos proveedores de alojamiento (hosting)</strong>.
                    </p>
                    <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                        <li><strong>Bots de Discord:</strong> Nos comprometemos a entregar bots funcionales según las especificaciones acordadas. El cliente es responsable de proveer el entorno de alojamiento (VPS, nube) para mantener el bot en línea.</li>
                        <li><strong>Servidores de Minecraft:</strong> Brindamos servicios de instalación, optimización de plugins y configuración de redes. El rendimiento, el uptime (tiempo en línea) y la seguridad de la máquina física dependen enteramente del proveedor de hosting que elijas contratar. No nos hacemos responsables por caídas del servidor ajenas a nuestro código o configuración.</li>
                    </ul>

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>3. Pagos, Reembolsos y Mantenimiento</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        Los proyectos de desarrollo a medida requieren un pago inicial no reembolsable antes de comenzar. Cualquier cambio drástico en la API de Discord o actualizaciones mayores de Minecraft que rompan el funcionamiento de lo entregado fuera del periodo de garantía requerirá un nuevo presupuesto de mantenimiento. Debido a la naturaleza del trabajo, no ofrecemos reembolsos una vez que el servicio ha sido entregado o la configuración completada.
                    </p>

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>4. Propiedad Intelectual</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        Al desarrollar sistemas personalizados (como scripts en Python), el cliente adquiere una licencia de uso perpetuo sobre el producto final. Sin embargo, Skirr retiene la propiedad intelectual sobre las bases de código estructurales internas, las cuales no pueden ser revendidas a terceros sin nuestro consentimiento.
                    </p>

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>5. Cumplimiento con Plataformas de Terceros</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        El cliente es el único responsable de asegurar que el uso de nuestros desarrollos cumpla con los <strong>Términos de Servicio de Discord</strong> y el <strong>EULA de Minecraft</strong>. Skirr se reserva el derecho de rechazar proyectos que fomenten actividades ilegales, raideos, doxing, o violaciones a las normas de dichas plataformas.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '3rem 0' }} />

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>¿Dudas sobre tus términos?</h3>
                    <p>
                        Estamos aquí para tener relaciones comerciales transparentes. Si algo no está claro antes de iniciar tu proyecto, hablemos:
                    </p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid var(--primary-purple)', padding: '0.8rem 1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <i className="ph-fill ph-discord-logo" style={{ color: 'var(--primary-purple)', fontSize: '1.2rem' }}></i>
                        <Link href="/contacto" style={{ color: 'white', fontWeight: '600', textDecoration: 'none' }}>Solicitar una aclaración legal</Link>
                    </div>

                </div>

            </div>
        </div>
      </section>

    </main>
  );
}