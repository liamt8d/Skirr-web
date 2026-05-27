import Navbar from '../components/Navbar';
import CommunityCard from '../components/CommunityCard';

export default function ComunidadesPage() {
    // Array con las comunidades que quieres mostrar
    // Solo necesitas el código de invitación (lo que va después de discord.gg/) y tu descripción.
    const comunidades = [
        {
            inviteCode: "VFX4cV5SUh", 
            description: "Servidor Oficial de URUGODD"
        },
        {
        inviteCode: "VVbxM2fa2n", // Reemplaza esto con el código real
        description: "¡Bienvenidos a cinnamochi! Donde podras conocer personitas con tus intereses en un ambiente seguro!"
        },
        {
        inviteCode: "qzYGrXQvKB", // Reemplaza esto con el código real
        description: "La mayor comunidad en español de Minecraft. Encuentra con quién jugar, charla, únete a eventos y mucho más."
        },
        {
            inviteCode: "hNVZguDeqB", // Reemplaza esto con el código real
            description: "en construcción"
        }
];

    return (
        <main style={{ minHeight: '100vh', background: '#0a0a0c' }}>
            <Navbar />

            {/* HEADER DE LA PÁGINA */}
            <section className="hero reveal" style={{ minHeight: 'auto', paddingTop: '150px', paddingBottom: '60px' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <div className="status-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                        <i className="ph ph-compass"></i>
                        <span>DESCUBRE</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem' }}>
                        Nuestras <span style={{ fontStyle: 'italic', color: 'var(--primary-purple)' }}>Comunidades</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Explora los servidores que hemos construido, gestionado o que forman parte del ecosistema de Skirr. Conéctate con miles de usuarios en tiempo real.
                    </p>
                </div>
            </section>

            {/* GRID DE DESCUBRIMIENTO ESTILO DISCORD */}
            <section className="reveal" style={{ paddingBottom: '120px' }}>
                <div className="container">
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                        gap: '2rem' 
                    }}>
                        {comunidades.map((comunidad, index) => (
                            <a 
                                key={index} 
                                href={`https://discord.gg/${comunidad.inviteCode}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <CommunityCard 
                                    inviteCode={comunidad.inviteCode} 
                                    description={comunidad.description} 
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}