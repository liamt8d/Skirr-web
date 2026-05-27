import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function ArticuloModeracion() {
    return (
        <main>
            <Navbar />
            
            <article className="reveal" style={{ paddingTop: '150px', paddingBottom: '60px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    
                    <Link href="/blog" className="btn-dashboard" style={{ display: 'inline-flex', marginBottom: '2rem', padding: '0.6rem 1.2rem' }}>
                        <i className="ph ph-arrow-left"></i>
                        <span>Volver al Blog</span>
                    </Link>

                    <span className="blog-minimal-tag" style={{ marginTop: '2rem', display: 'block', width: 'fit-content' }}>BOTS & SEGURIDAD</span>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                        El impacto de la moderación automatizada en la retención de usuarios
                    </h1>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', marginBottom: '3rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
                        <span>31 Marzo, 2026</span>
                        <span>•</span>
                        <span>Skirr Research Team</span>
                    </div>

                    <div style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '2', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        
                        <p>
                            En el ecosistema de comunidades digitales, la seguridad ya no es solo una medida de protección, sino un factor determinante en la retención de usuarios. Un análisis reciente en servidores de Discord con más de 50,000 miembros demuestra que el tiempo de respuesta ante incidentes tóxicos o ataques de spam está directamente correlacionado con la actividad diaria de la comunidad.
                        </p>

                        <p>
                            Los datos indican que las comunidades que dependen exclusivamente de moderación humana experimentan una tasa de abandono un 35% mayor durante ataques de incursión (raids). Esto ocurre porque el daño a la experiencia del usuario (pings masivos, contenido malicioso) se inflige en los primeros 15 segundos del ataque.
                        </p>

                        <div className="glass-panel" style={{ padding: '2rem', margin: '1.5rem 0', borderLeft: '4px solid var(--primary-purple)' }}>
                            <p style={{ margin: 0, fontStyle: 'italic', color: 'white', fontSize: '1.2rem', lineHeight: '1.6' }}>
                                La implementación de sistemas de Auto-Mod basados en algoritmos de procesamiento de lenguaje natural (NLP) y detección de patrones de unión reduce el tiempo de mitigación a menos de 5 segundos.
                            </p>
                        </div>

                        <p>
                            Arquitectónicamente, lograr esta velocidad requiere abandonar las bases de datos relacionales tradicionales para el registro de eventos en tiempo real. Al utilizar bases de datos NoSQL alojadas en memoria o clústeres optimizados, los bots personalizados pueden evaluar el historial de confianza de una cuenta entrante, escanear la entropía de su nombre de usuario y aplicar restricciones preventivas sin generar cuellos de botella en el Event Loop del bot.
                        </p>

                        <p>
                            La conclusión técnica y estratégica es clara: invertir en infraestructura de moderación automatizada y bots robustos programados a medida no solo previene crisis de relaciones públicas dentro de tu servidor, sino que garantiza un entorno donde los usuarios legítimos deciden invertir su tiempo a largo plazo.
                        </p>

                    </div>

                </div>
            </article>

            <section className="reveal" style={{ paddingBottom: '100px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ 
                        border: '1px solid var(--glass-border)', 
                        background: 'rgba(5, 5, 8, 0.6)', 
                        padding: '3rem', 
                        borderRadius: '16px',
                        marginTop: '2rem'
                    }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>
                            Skirr:
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            Si buscas un equipo de desarrollo técnico que entienda las necesidades reales de tu comunidad, Skirr puede ayudarte. Nos especializamos en crear bots personalizados en Python, optimizar servidores de Minecraft para máximo rendimiento y diseñar estrategias de moderación automatizada. Trabajamos con proyectos que quieren destacar, ofreciendo código limpio, bases de datos eficientes y soporte profesional. Contáctanos para evaluar tu infraestructura actual y descubre cómo podemos llevar tu servidor al siguiente nivel.
                        </p>
                        <Link href="mailto:contacto.skirr.dev" className="btn-cta">
                            Iniciar Proyecto con Skirr
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}