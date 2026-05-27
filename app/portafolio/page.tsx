import Link from 'next/link';
import Navbar from '../components/Navbar';
import { portfolioProjects } from '../lib/portafolioData';

export default function PortfolioPage() {
    return (
        <main>
            <Navbar />
            
            <div style={{ textAlign: 'center', paddingTop: '120px', paddingBottom: '40px', paddingInline: '1rem' }}>
                
                <div className="status-badge" style={{ marginBottom: '1rem', display: 'inline-flex', background: 'var(--primary-purple-faint)', color: 'var(--primary-purple)' }}>
                    <i className="ph ph-stack" style={{ fontSize: '1rem', marginRight: '8px', display: 'flex', alignItems: 'center' }}></i>
                    <span data-i18n="footerColumnResources">PROYECTOS</span>
                </div>
                
                {/* Usamos clamp() para que el título se achique en celular automáticamente */}
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '1rem' }}>
                    Nuestro <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Trabajo</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    Productos que estamos construyendo.
                </p>
            </div>

            <section className="reveal" style={{ paddingBottom: '80px' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
                        <i className="ph ph-rocket" style={{ color: 'var(--primary-purple)', fontSize: '1.2rem', display: 'flex', lineHeight: 1 }}></i>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', margin: 0 }}>Proyectos Propios</h2>
                    </div>

                    {/* Magia responsiva: auto-fit y minmax crean columnas dinámicas */}
                    <div className="blog-grid" style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
                        gap: '1.5rem' 
                    }}>
                        
                        <article className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#1A1A1D', color: '#8B8C8D', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem' }}>
                                En Desarrollo
                            </div>
                            <div style={{ width: '50px', height: '50px', background: '#1A1A1D', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}>
                                <i className="ph ph-code icon-purple" style={{ fontSize: '1.5rem', lineHeight: 1, display: 'flex', margin: 0 }}></i>
                            </div>
                            <span className="blog-minimal-tag" style={{ border: 'none', background: 'transparent', padding: 0, marginBottom: '0.5rem', display: 'block', color: 'var(--primary-purple)' }}>
                                Bot / Discord
                            </span>
                            <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', marginBottom: '1rem', flexGrow: 0 }}>IXORA TICKETS </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', margin: 0, flexGrow: 1 }}>
                                Ixora es un bot que estamos desarrollando para ofrecer un sistema de tickets avanzado.
                            </p>
                        </article>

                        <article className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#1A1A1D', color: '#8B8C8D', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem' }}>
                                Beta Privada
                            </div>
                            <div style={{ width: '50px', height: '50px', background: '#1A1A1D', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}>
                                <i className="ph ph-cpu icon-purple" style={{ fontSize: '1.5rem', lineHeight: 1, display: 'flex', margin: 0 }}></i>
                            </div>
                            <span className="blog-minimal-tag" style={{ border: 'none', background: 'transparent', padding: 0, marginBottom: '0.5rem', display: 'block', color: 'var(--primary-purple)' }}>
                                Bot / Moderación
                            </span>
                            <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', marginBottom: '1rem', flexGrow: 0 }}>Michi Moderación</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', margin: 0, flexGrow: 1 }}>
                                Michi es una herramienta de moderación automatizada que estamos probando en servidores seleccionados.
                            </p>
                        </article>

                        <article className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#1A1A1D', color: '#8B8C8D', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem' }}>
                                Lanzado
                            </div>
                            <div style={{ width: '50px', height: '50px', background: '#1A1A1D', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}>
                                <i className="ph ph-terminal-window icon-purple" style={{ fontSize: '1.5rem', lineHeight: 1, display: 'flex', margin: 0 }}></i>
                            </div>
                            <span className="blog-minimal-tag" style={{ border: 'none', background: 'transparent', padding: 0, marginBottom: '0.5rem', display: 'block', color: 'var(--primary-purple)' }}>
                                Bot / Automod   
                            </span>
                            <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', marginBottom: '1rem', flexGrow: 0 }}>Koki automod </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', margin: 0, flexGrow: 1 }}>
                                Koki es un BOT de moderación que lanzamos el mes pasado y que ya está siendo utilizada por varias comunidades.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            <section className="reveal" style={{ paddingBottom: '100px' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
                        <i className="ph ph-sparkle" style={{ color: 'var(--primary-purple)', fontSize: '1.2rem', display: 'flex', lineHeight: 1 }}></i>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', margin: 0 }}>Proyectos a futuro</h2>
                    </div>

                    {/* Mismo truco de auto-fit para los proyectos mapeados */}
                    <div className="blog-grid" style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
                        gap: '1.5rem' 
                    }}>
                        {portfolioProjects.map((project, index) => (
                            <article key={index} className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#1A1A1D', color: '#8B8C8D', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem' }}>
                                    {project.status}
                                </div>

                                <div style={{ width: '50px', height: '50px', background: '#1A1A1D', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}>
                                    <i className={`${project.icon} icon-purple`} style={{ fontSize: '1.5rem', lineHeight: 1, display: 'flex', margin: 0 }}></i>
                                </div>

                                <span className="blog-minimal-tag" style={{ border: 'none', background: 'transparent', padding: 0, marginBottom: '0.5rem', display: 'block', color: 'var(--primary-purple)' }}>
                                    {project.label}
                                </span>

                                <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', marginBottom: '1rem', flexGrow: 0 }}>{project.title}</h3>

                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', margin: 0, flexGrow: 1 }}>{project.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección de Contacto adaptada */}
            <section className="reveal" style={{ paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="glass-panel" style={{
                        padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
                        borderRadius: '16px',
                        background: 'rgba(5, 5, 8, 0.6)',
                        position: 'relative',
                        overflow: 'hidden',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.2rem)', marginBottom: '1rem', color: 'white' }}>
                            ¿Tienes un proyecto en mente?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 3vw, 1.1rem)', lineHeight: '1.8', margin: '0 auto 2.5rem', maxWidth: '600px' }}>
                            Nuestro equipo está listo para ayudarte a diseñar, desarrollar y escalar tu próximo proyecto. Hablemos sobre tus ideas.
                        </p>
                        <Link href="/contacto" className="btn-cta" style={{ position: 'relative', zIndex: 1, display: 'inline-block' }}>
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}