import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function PrivacidadPage() {
  return (
    <main>
      <Navbar />

      <section className="hero reveal" style={{ minHeight: 'auto', paddingTop: '150px', paddingBottom: '40px' }}>
        <div className="container contact-header" style={{ textAlign: 'left' }}>
            <div className="status-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                <i className="ph ph-shield-check"></i>
                <span>LEGAL</span>
            </div>
            <h1>Política de <span>Privacidad</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '600px' }}>
                Última actualización: Marzo de 2026. Transparencia total sobre cómo protegemos los datos de tu comunidad.
            </p>
        </div>
      </section>

      <section className="reveal" style={{ paddingTop: '0', paddingBottom: '5rem' }}>
        <div className="container">
            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                
                <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem', marginTop: '0' }}>1. Información que Recopilamos</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        En Skirr, recopilamos la información estrictamente necesaria para ofrecer nuestros servicios de desarrollo y gestión. Esto incluye:
                    </p>
                    <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                        <li><strong>Información de contacto:</strong> Nombre, correo electrónico y usuario de Discord al solicitar una consulta.</li>
                        <li><strong>Datos técnicos:</strong> IDs de servidores de Discord, IDs de usuarios (solo para funciones específicas de bots) y credenciales de acceso temporal a tu proveedor de hosting (para poder configurar tus servidores de Minecraft).</li>
                        <li><strong>Información del proyecto:</strong> Detalles, estrategias y presupuestos compartidos durante nuestras asesorías.</li>
                    </ul>

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>2. Uso de la Información</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Utilizamos tus datos exclusivamente para:
                    </p>
                    <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                        <li>Desarrollar y configurar tus bots de Discord y servidores de Minecraft en tu propia infraestructura.</li>
                        <li>Responder a tus consultas y enviar actualizaciones sobre el estado de tu proyecto.</li>
                        <li>Implementar sistemas de moderación eficientes.</li>
                    </ul>

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>3. Protección de Datos y Discord API</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        Todos los bots desarrollados por Skirr cumplen estrictamente con los Términos de Servicio (ToS) y las Políticas de Desarrolladores de Discord. No almacenamos mensajes de usuarios ni datos personales de tu comunidad a menos que sea una función explícitamente solicitada y aprobada por los sistemas de verificación de Discord.
                    </p>

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>4. Proveedores Externos e Infraestructura</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        <strong>Skirr es una agencia de configuración y desarrollo, no un proveedor de hosting.</strong> No alojamos tus servidores de Minecraft ni las bases de datos de tu comunidad, los datos generados por tu comunidad se almacenarán en el proveedor de hosting en la nube que tú elijas contratar, y estarán sujetos a las políticas de privacidad de dicho proveedor.
                    </p>

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>5. Tus Derechos</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        Tienes derecho a solicitar el acceso, modificación o eliminación completa de tus datos de contacto de nuestros registros en cualquier momento. Al finalizar la configuración de tu servidor, recomendamos revocar nuestros accesos técnicos a tu panel de control por seguridad.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '3rem 0' }} />

                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Contacto</h3>
                    <p>
                        Si tienes alguna pregunta sobre esta Política de Privacidad o el manejo de tus datos, puedes contactarnos en:
                    </p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid var(--primary-purple)', padding: '0.8rem 1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <i className="ph-fill ph-envelope-simple" style={{ color: 'var(--primary-purple)', fontSize: '1.2rem' }}></i>
                        <a href="/contacto" style={{ color: 'white', fontWeight: '600', textDecoration: 'none' }}>Contacto</a>
                    </div>

                </div>

            </div>
        </div>
      </section>

    </main>
  );
}