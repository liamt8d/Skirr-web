// Archivo: lib/searchIndex.ts

export type CategoriaIndex = 'AGENCIA' | 'SERVICIOS' | 'SOPORTE' | 'LEGAL' | 'BLOG';

export interface SearchItem {
    id: number;
    titulo: string;
    categoria: CategoriaIndex;
    desc: string;
    link: string;
}

export const indiceSkirr: SearchItem[] = [
    // --- AGENCIA Y PORTAFOLIO ---
    { id: 1, titulo: 'Agencia Skirr: Construye comunidades', categoria: 'AGENCIA', desc: 'Agencia premium de Discord & Minecraft. Gestionamos +50K usuarios. Nuestro proceso: Entender, Planificar, Desarrollar y Lanzar.', link: '/' },
    { id: 2, titulo: 'Acerca de Skirr / Nosotros', categoria: 'AGENCIA', desc: 'Equipo remoto fundado en 2025 por Liam (Lead Developer) y Lester (Finanzas). Operamos desde Colombia y El Salvador con 100% de satisfacción.', link: '/nosotros' },
    { id: 3, titulo: 'Ixora Tickets (Bot en Desarrollo)', categoria: 'AGENCIA', desc: 'Bot de Discord propio que estamos desarrollando para ofrecer un sistema de tickets avanzado.', link: '/portafolio' },
    { id: 4, titulo: 'Michi Moderación (Bot Beta)', categoria: 'AGENCIA', desc: 'Herramienta de moderación automatizada que estamos probando en servidores seleccionados (Beta Privada).', link: '/portafolio' },
    { id: 5, titulo: 'Koki Automod (Bot Lanzado)', categoria: 'AGENCIA', desc: 'Bot de moderación de Discord lanzado exitosamente y utilizado actualmente por varias comunidades.', link: '/portafolio' },
    
    // --- SERVICIOS ---
    { id: 6, titulo: 'Desarrollo de Bots Personalizados', categoria: 'SERVICIOS', desc: 'Programación de bots únicos en Python y bases de datos MongoDB. Sistemas de economía, tiendas, experiencia y moderación automatizada.', link: '/servicios' },
    { id: 7, titulo: 'Configuración de Servidores Minecraft', categoria: 'SERVICIOS', desc: 'Optimización y gestión de servidores de alto rendimiento. Mitigación de lag, configuración de paper.yml y plugins premium.', link: '/servicios' },
    { id: 8, titulo: 'Sistemas de Moderación Automática', categoria: 'SERVICIOS', desc: 'Sistemas de Tickets avanzados, filtros Auto-Mod y verificación doble para bloquear cuentas falsas o raiders en Discord.', link: '/servicios' },
    { id: 9, titulo: 'Asesoría Estratégica', categoria: 'SERVICIOS', desc: 'Consultoría para estructurar paquetes VIP (cumpliendo ToS y EULA), arquitectura de canales y estrategias de retención de usuarios.', link: '/servicios' },

    // --- SOPORTE Y FAQ ---
    { id: 10, titulo: 'Tiempos de Desarrollo', categoria: 'SOPORTE', desc: 'Un bot básico toma de 3 a 5 días. Sistemas complejos toman de 1 a 3 semanas. Entregamos con garantía de código de 7 a 14 días.', link: '/preguntas-frecuentes' },
    { id: 11, titulo: 'Hosting y Remodelaciones', categoria: 'SOPORTE', desc: 'No proveemos hosting (VPS/Nube), pero te asesoramos. También hacemos remodelaciones y auditorías de servidores de Discord existentes.', link: '/preguntas-frecuentes' },
    { id: 12, titulo: 'Contacto Directo', categoria: 'SOPORTE', desc: '¿Tienes un proyecto en mente? Contáctanos a contacto@skirr.dev o a través de nuestro servidor de Discord oficial para iniciar.', link: '/contacto' },
    
    // --- LEGAL ---
    { id: 13, titulo: 'Términos de Servicio', categoria: 'LEGAL', desc: 'Políticas de pagos, retención de propiedad intelectual del código fuente, y cumplimiento estricto con el EULA de Minecraft y ToS de Discord.', link: '/terminos' },
    { id: 14, titulo: 'Política de Privacidad', categoria: 'LEGAL', desc: 'Transparencia sobre la recopilación de datos, protección de la comunidad y nuestros límites técnicos frente a proveedores de hosting.', link: '/privacidad' },

    // --- BLOG ---
    { id: 15, titulo: 'El impacto de la moderación automatizada', categoria: 'BLOG', desc: 'Análisis sobre cómo sistemas Auto-Mod con algoritmos NLP y bases de datos NoSQL previenen crisis de raids en menos de 5 segundos.', link: '/blog/impacto-moderacion-automatizada' },
    { id: 16, titulo: 'Mitigación de latencia y estabilización de TPS', categoria: 'BLOG', desc: 'Estudio sobre la configuración de recolección de basura (GC) y optimización de hilos en servidores de Minecraft en redes Velocity.', link: '/blog/optimizacion-tps-minecraft' },
    { id: 17, titulo: 'Estructuración de rangos VIP', categoria: 'BLOG', desc: 'Cómo diseñar una economía virtual rentable y atractiva sin infringir las normativas EULA de Minecraft y ToS de las plataformas.', link: '/blog/monetizacion-comunidades-eula' }
];