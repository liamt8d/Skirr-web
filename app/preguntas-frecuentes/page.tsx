import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function FAQPage() {
  return (
    <main>
      <Navbar />

      <section className="hero reveal" style={{ minHeight: 'auto', paddingTop: '150px', paddingBottom: '40px' }}>
        <div className="container contact-header" style={{ textAlign: 'center' }}>
            <div className="status-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                <i className="ph ph-question"></i>
                <span>SOPORTE</span>
            </div>
            <h1>Preguntas <span>Frecuentes</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                Resolvemos tus dudas antes de dar el siguiente paso. Todo lo que necesitas saber sobre cómo trabajamos.
            </p>
        </div>
      </section>

      <section className="reveal" style={{ paddingTop: '0', paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
            
            <details className="faq-item">
                <summary className="faq-summary">¿Cuánto tiempo tarda el desarrollo de un bot personalizado?</summary>
                <div className="faq-content">
                    Depende de la complejidad. Un bot básico con comandos de moderación y bienvenida puede tomar entre 3 a 5 días hábiles. Sistemas más complejos, como integraciones de economía, tickets avanzados o minijuegos, pueden requerir de 1 a 3 semanas para garantizar un código limpio y sin errores.
                </div>
            </details>

            <details className="faq-item">
                <summary className="faq-summary">¿Qué tecnologías utilizan para programar los bots?</summary>
                <div className="faq-content">
                    Desarrollamos bots robustos y de alto rendimiento utilizando Python. Para el almacenamiento de datos (como economía de usuarios, logs o inventarios), estructuramos bases de datos con MongoDB, lo que nos permite asegurar que el bot responda al instante, sin importar si tu servidor tiene 100 o 10,000 miembros.
                </div>
            </details>

            <details className="faq-item">
                <summary className="faq-summary">¿Ustedes proveen el hosting para los servidores de Minecraft o los bots?</summary>
                <div className="faq-content">
                    No. En Skirr nos especializamos puramente en el desarrollo y la configuración experta. Tú eres dueño de tu infraestructura. Te asesoraremos sobre cuáles son los mejores proveedores de hosting (como VPS o servicios en la nube) según tu presupuesto, y nosotros nos encargaremos de entrar, instalar y dejar todo funcionando a la perfección.
                </div>
            </details>

            <details className="faq-item">
                <summary className="faq-summary">¿Qué pasa si mi bot o servidor falla después de la entrega?</summary>
                <div className="faq-content">
                    Todos nuestros desarrollos a medida incluyen un periodo de garantía de 7 a 14 días (dependiendo del proyecto) para solucionar cualquier "bug" o error directamente relacionado con nuestro código. Pasado ese tiempo, o si hay una actualización gigante de Discord/Minecraft que rompe el sistema, ofrecemos planes de mantenimiento a precios accesibles.
                </div>
            </details>

            <details className="faq-item">
                <summary className="faq-summary">¿Pueden configurar un servidor de Discord que ya está creado?</summary>
                <div className="faq-content">
                    ¡Por supuesto! Hacemos "remodelaciones" completas. Auditamos tu servidor actual, mejoramos los canales, rediseñamos los roles, ajustamos los permisos de seguridad para evitar raideos y dejamos tu comunidad lista para escalar al siguiente nivel.
                </div>
            </details>

            {/* Caja de Contacto Adicional */}
            <div className="glass-panel" style={{ marginTop: '3rem', padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>¿Aún tienes dudas?</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Estamos disponibles para analizar tu caso de forma totalmente gratuita.
                </p>
                <Link href="/contacto" className="btn-aesthetic">
                    Contactar ahora
                </Link>
            </div>

        </div>
      </section>

    </main>
  );
}