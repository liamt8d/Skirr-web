"use client";

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';

// 1. Definimos la interfaz para indicar qué tipo de datos recibe la tarjeta
interface BentoServiceCardProps {
    icon: string;
    title: string;
    desc: string;
    list: string[];
    extraText: string;
}

// 2. Le asignamos la interfaz a las props del componente
function BentoServiceCard({ icon, title, desc, list, extraText }: BentoServiceCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="BentoCard glass-panel service-detail-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <i className={`ph ${icon} icon-purple`} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></i>
            <h3>{title}</h3>
            <p>{desc}</p>
            
            <ul style={{ flexGrow: 1, marginTop: '1rem', listStyle: 'none', padding: 0 }}>
                {list.map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                        <i className="ph-fill ph-check-circle" style={{ color: 'var(--primary-purple)', marginRight: '8px' }}></i> 
                        {item}
                    </li>
                ))}
            </ul>

            <div className={`extra-text-content ${isOpen ? 'open' : ''}`}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{extraText}</p>
            </div>

            <button className="btn-bento-more" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Ver menos' : 'Ver más detalles'}
            </button>
        </div>
    );
}

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      
      <main style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
        
        <section className="hero reveal" style={{ minHeight: 'auto', paddingTop: '60px', paddingBottom: '40px' }}>
            <div className="container services-header">
                <div className="status-badge" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
                    <span className="dot-purple"></span>
                    <span data-i18n="footerColumnResources">SERVICIOS</span>
                </div>
                <h1 data-i18n="pageServicesTitle">Soluciones a <span className="highlight-purple">Medida</span></h1>
                <p data-i18n="pageServicesDesc">Descubre cómo transformamos comunidades con infraestructura sólida y desarrollo premium.</p>
            </div>
        </section>

        <section className="grid-section reveal" style={{ paddingTop: '0' }}>
            <div className="container">
                <div className="services-bento-grid">
                    
                    <BentoServiceCard 
                        icon="ph-robot"
                        title="Bots Personalizados"
                        desc="Desarrollamos bots únicos para Discord que automatizan, entretienen y gestionan tu comunidad a la perfección."
                        list={[
                            "Programación en Python.",
                            "Bases de datos con MongoDB.",
                            "Sistemas completos."
                        ]}
                        extraText="Integramos lógicas complejas como economía global, sistemas de experiencia, tiendas virtuales y moderación automatizada, todo respaldado por código limpio y bases de datos eficientes para un tiempo de respuesta instantáneo."
                    />

                    <BentoServiceCard 
                        icon="ph-hard-drives"
                        title="Servidores Minecraft"
                        desc="Configuración y gestión de servidores de Minecraft de alto rendimiento y escalabilidad."
                        list={[
                            "Optimización y mitigación de lag.",
                            "Configuración de plugins premium."
                        ]}
                        extraText="Ajustamos los archivos internos del servidor (paper.yml) para exprimir al máximo los recursos de tu máquina física, garantizando un servidor estable."
                    />

                    <BentoServiceCard 
                        icon="ph-shield-check"
                        title="Moderación"
                        desc="Equipo de moderación profesional y sistemas automatizados para mantener un entorno seguro y activo."
                        list={[
                            "Sistemas de Tickets avanzados.",
                            "Filtros Anti-Raid y Auto-Mod.",
                            "Gestión de crisis y soporte a usuarios."
                        ]}
                        extraText="Diseñamos sistemas de verificación doble y pasarelas de seguridad para bloquear cuentas falsas, ataques de raiders y bots de spam antes de que siquiera puedan ver los canales de tu comunidad."
                    />

                    <BentoServiceCard 
                        icon="ph-lightbulb"
                        title="Asesoría"
                        desc="Consultoría experta para el crecimiento y gestión eficiente de tus comunidades."
                        list={[
                            "Estrategias de monetización y rangos VIP.",
                            "Arquitectura de canales y roles en Discord.",
                            "Campañas de engagement y retención."
                        ]}
                        extraText="Revisamos a fondo tu proyecto para estructurar paquetes VIP que cumplan con las normativas (ToS/EULA) e incrementen la retención de usuarios activos mediante eventos dinámicos y jerarquías bien pensadas."
                    />

                </div>
            </div>
        </section>

      </main>
    </>
  );
}