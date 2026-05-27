"use client";

import Navbar from '../components/Navbar';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { indiceSkirr, CategoriaIndex } from '../lib/searchIndex'; 

type TabType = 'TODOS' | CategoriaIndex;

function BuscadorContenido() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || ''; 
    
    const [tabActiva, setTabActiva] = useState<TabType>('TODOS');

    // BÚSQUEDA INTELIGENTE
    const resultados = useMemo(() => {
        if (!query) return [];
        
        // Convertimos a minúsculas y quitamos acentos
        const busqueda = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        
        return indiceSkirr.filter(item => {
            const tituloLimpio = item.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const descLimpia = item.desc.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            
            return tituloLimpio.includes(busqueda) || descLimpia.includes(busqueda);
        });
    }, [query]);

    // CONTADORES DINÁMICOS
    const conteo = {
        TODOS: resultados.length,
        AGENCIA: resultados.filter(r => r.categoria === 'AGENCIA').length,
        SERVICIOS: resultados.filter(r => r.categoria === 'SERVICIOS').length,
        SOPORTE: resultados.filter(r => r.categoria === 'SOPORTE').length,
        LEGAL: resultados.filter(r => r.categoria === 'LEGAL').length,
        BLOG: resultados.filter(r => r.categoria === 'BLOG').length,
    };

    // FILTRO
    const resultadosMostrados = tabActiva === 'TODOS' 
        ? resultados 
        : resultados.filter(r => r.categoria === tabActiva);

    return (
        <main style={{ minHeight: '100vh', background: '#0a0a0c' }}>
            <Navbar />

            <section style={{ paddingTop: '150px', paddingBottom: '30px', textAlign: 'center', background: '#0a0a0c' }}>
                <div className="container">
                    <h1 style={{ 
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                        fontWeight: '900', 
                        fontStyle: 'italic',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '10px'
                    }}>
                        Resultados de Búsqueda
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '500' }}>
                        Mostrando {conteo.TODOS} resultados para "{query}"
                    </p>
                </div>
            </section>

            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0c', position: 'sticky', top: '70px', zIndex: 40 }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', overflowX: 'auto', paddingBottom: '2px' }}>
                        {(['TODOS', 'AGENCIA', 'SERVICIOS', 'BLOG', 'SOPORTE', 'LEGAL'] as TabType[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setTabActiva(tab)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: tabActiva === tab ? 'white' : '#888',
                                    fontWeight: '800',
                                    fontSize: '0.9rem',
                                    padding: '1.2rem 0.5rem',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    transition: 'color 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                            >
                                {tab}
                                <span style={{ 
                                    background: tabActiva === tab ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)', 
                                    color: tabActiva === tab ? 'var(--primary-purple)' : '#666',
                                    padding: '2px 6px', 
                                    borderRadius: '4px', 
                                    fontSize: '0.7rem' 
                                }}>
                                    {conteo[tab]}
                                </span>
                                
                                {tabActiva === tab && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-1px',
                                        left: 0,
                                        width: '100%',
                                        height: '3px',
                                        background: 'white'
                                    }}></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="container" style={{ padding: '3rem 1rem 100px 1rem' }}>
                {query === '' ? (
                    <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
                        <i className="ph ph-magnifying-glass" style={{ fontSize: '4rem', opacity: 0.2, marginBottom: '1rem' }}></i>
                        <h2>Escribe algo para buscar</h2>
                        <p>Intenta con palabras como "Python", "Velocity", "EULA", "Michi" o "Lester".</p>
                    </div>
                ) : resultadosMostrados.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
                        <i className="ph ph-ghost" style={{ fontSize: '4rem', opacity: 0.2, marginBottom: '1rem' }}></i>
                        <h2>No se encontraron coincidencias en {tabActiva}</h2>
                        <p>Intenta con otra palabra clave o revisa la ortografía.</p>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                        {resultadosMostrados.map((item) => (
                            <Link href={item.link} key={item.id} style={{ textDecoration: 'none' }}>
                                <div className="resultado-card" style={{ 
                                    padding: '1.5rem', 
                                    background: '#111113', 
                                    border: '1px solid rgba(255,255,255,0.05)', 
                                    borderRadius: '12px',
                                    transition: 'all 0.2s ease',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--primary-purple)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            {item.categoria}
                                        </span>
                                    </div>
                                    <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '0.5rem', transition: 'color 0.2s' }}>
                                        {item.titulo}
                                    </h3>
                                    <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <style dangerouslySetInnerHTML={{__html: `
                .resultado-card:hover {
                    background: rgba(139, 92, 246, 0.05) !important;
                    border-color: rgba(139, 92, 246, 0.3) !important;
                    transform: translateY(-2px);
                }
                .resultado-card:hover h3 {
                    color: var(--primary-purple) !important;
                }
            `}} />
        </main>
    );
}

// Envolver en Suspense es necesario en Next.js App Router cuando usas useSearchParams
export default function BuscarPage() {
    return (
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '150px 0', color: 'white' }}>Cargando buscador...</div>}>
            <BuscadorContenido />
        </Suspense>
    );
}