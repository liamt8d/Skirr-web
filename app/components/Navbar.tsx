"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface NavLink {
    name: string;
    path: string;
}

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLogoMenuOpen, setIsLogoMenuOpen] = useState(false);
    
    const pathname = usePathname();
    const router = useRouter();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    // Función para ejecutar la búsqueda al presionar "Enter"
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchTerm.trim() !== '') {
            router.push(`/buscar?q=${encodeURIComponent(searchTerm)}`);
            setIsMobileMenuOpen(false); // Cierra el menú en móviles (opcional)
        }
    };

    const isActive = (path: string) => pathname === path ? "active-link" : "";

    const navLinks: NavLink[] = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Comunidades', path: '/comunidades' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Blog', path: '/blog' },
        { name: 'FAQ', path: '/preguntas-frecuentes' },
    ];

    return (
        <header className="skirr-game-navbar">
            <div className="nav-container-full">
                
                {/* ZONA IZQUIERDA Y CENTRAL AGRUPADAS */}
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 'clamp(1rem, 3vw, 2.5rem)' }}>
                    
                    {/* Logotipo y Trigger del Mega Menú (CON HOVER) */}
                    <div 
                        className="nav-left nav-zone" 
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setIsLogoMenuOpen(true)}
                        onMouseLeave={() => setIsLogoMenuOpen(false)}
                    >
                        <div 
                            className="skirr-brand" 
                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                        >
                            <img src="/skirr.ico" alt="Skirr Logo" className="skirr-icon" style={{ height: '32px', width: 'auto' }} />
                            <span className="skirr-text-logo" style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '1px' }}>SKIRR</span>
                            <i className={`ph ph-caret-${isLogoMenuOpen ? 'up' : 'down'}`} style={{ fontSize: '1rem', color: 'var(--text-muted)', transition: 'transform 0.3s' }}></i>
                        </div>

                        {/* MEGA MENÚ ESTILO EPIC GAMES */}
                        {isLogoMenuOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: '0',
                                paddingTop: '1rem', /* Puente invisible para mantener el hover */
                                zIndex: 100,
                            }}>
                                <div className="skirr-mega-menu" style={{
                                    background: 'rgba(17, 17, 19, 0.95)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(139, 92, 246, 0.15)',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    minWidth: '450px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(139, 92, 246, 0.1)',
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '2rem'
                                }}>
                                    
                                    {/* COLUMNA 1: Ecosistema */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'white', marginBottom: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Ecosistema</h4>
                                        
                                        <Link href="/portafolio" className="mega-link" onClick={() => setIsLogoMenuOpen(false)}>
                                            <i className="ph-fill ph-folder-star" style={{ fontSize: '1.3rem' }}></i> 
                                            <span>Proyectos Skirr</span>
                                        </Link>
                                        <Link href="https://discord.gg/rdkDrR7wUB" target="_blank" className="mega-link" onClick={() => setIsLogoMenuOpen(false)}>
                                            <i className="ph-fill ph-discord-logo" style={{ fontSize: '1.3rem' }}></i> 
                                            <span>Comunidad Discord</span>
                                        </Link>
                                    </div>

                                    {/* COLUMNA 2: Soporte y Legal */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'white', marginBottom: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>Soporte & Legal</h4>
                                        
                                        <Link href="/contacto" className="mega-link" onClick={() => setIsLogoMenuOpen(false)}>
                                            <i className="ph-fill ph-lifebuoy" style={{ fontSize: '1.3rem' }}></i> 
                                            <span>Centro de Soporte</span>
                                        </Link>
                                        <Link href="/terminos" className="mega-link" onClick={() => setIsLogoMenuOpen(false)}>
                                            <i className="ph-fill ph-file-text" style={{ fontSize: '1.3rem' }}></i> 
                                            <span>Términos de Servicio</span>
                                        </Link>
                                        <Link href="/privacidad" className="mega-link" onClick={() => setIsLogoMenuOpen(false)}>
                                            <i className="ph-fill ph-shield-check" style={{ fontSize: '1.3rem' }}></i> 
                                            <span>Privacidad</span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Enlaces principales */}
                    <nav className={`nav-center nav-zone ${isMobileMenuOpen ? 'open' : ''}`}>
                        <ul className="nav-links-center" style={{ display: 'flex', margin: 0, padding: 0 }}>
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link href={link.path} className={isActive(link.path)} onClick={closeMobileMenu}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>

                {/* ZONA DERECHA: Búsqueda y Botones */}
                <div className="nav-right nav-zone">
                    <div className="search-bar">
                        <i className="ph ph-magnifying-glass search-icon" style={{ fontSize: '20px' }}></i>
                        <input
                            type="search"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch} // EVENTO DE BÚSQUEDA AÑADIDO AQUÍ
                            className="search-input"
                        />
                    </div>

                    <Link href="/contacto" className="btn-secondary btn-contactar desktop-only">
                        <i className="ph ph-discord-logo" style={{ fontSize: '24px' }}></i>
                        <span>Contactar</span>
                    </Link>

                    <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Menú">
                        <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'}`} style={{ fontSize: '32px' }}></i>
                    </button>
                </div>
            </div>

            {/* Estilos CSS del Mega Menú Inyectados */}
            <style dangerouslySetInnerHTML={{__html: `
                .skirr-mega-menu {
                    animation: slideDown 0.2s ease-out forwards;
                    transform-origin: top left;
                }
                
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                .mega-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 0.6rem 0.8rem;
                    color: var(--text-muted);
                    text-decoration: none;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                .mega-link i {
                    color: rgba(255, 255, 255, 0.5);
                    transition: color 0.2s ease;
                }

                .mega-link:hover {
                    background: rgba(139, 92, 246, 0.1);
                    color: white;
                    transform: translateX(4px);
                }

                .mega-link:hover i {
                    color: var(--primary-purple);
                }
            `}} />
        </header>
    );
}