"use client";

import { useEffect, useState } from 'react';

interface DiscordServerData {
    name: string;
    iconUrl: string;
    bannerUrl: string | null;
    memberCount: number;
    onlineCount: number;
    description: string;
}

export default function CommunityCard({ inviteCode, description }: { inviteCode: string, description: string }) {
    const [serverData, setServerData] = useState<DiscordServerData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Consultamos la API pública de Discord usando el código de invitación
        fetch(`https://discord.com/api/v9/invites/${inviteCode}?with_counts=true`)
            .then(res => res.json())
            .then(data => {
                if (data.guild) {
                    const guild = data.guild;
                    
                    const iconUrl = guild.icon 
                        ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=256` 
                        : 'https://cdn.discordapp.com/embed/avatars/0.png'; // Icono por defecto
                        
                    const bannerUrl = guild.banner 
                        ? `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=600` 
                        : null;

                    setServerData({
                        name: guild.name,
                        iconUrl: iconUrl,
                        bannerUrl: bannerUrl,
                        memberCount: data.approximate_member_count || 0,
                        onlineCount: data.approximate_presence_count || 0,
                        description: description
                    });
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error al cargar datos de Discord para", inviteCode, err);
                setLoading(false);
            });
    }, [inviteCode]);

    // Estado de carga con un esqueleto (Skeleton) estilo Skirr
    if (loading) return (
        <div className="discovery-card" style={{ height: '320px', background: '#111113', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="ph ph-spinner" style={{ fontSize: '2rem', color: 'var(--primary-purple)', animation: 'spin 1s linear infinite' }}></i>
        </div>
    );

    // Si la invitación expiró o es inválida
    if (!serverData) return null;

    return (
        <div className="discovery-card" style={{ 
            borderRadius: '12px', 
            overflow: 'hidden', 
            background: '#111113', 
            border: '1px solid rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            {/* BANNER SUPERIOR */}
            <div className="discovery-banner" style={{ 
                height: '140px', 
                background: serverData.bannerUrl ? `url(${serverData.bannerUrl}) center/cover` : 'var(--primary-purple)',
                position: 'relative',
                transition: 'transform 0.3s ease'
            }}></div>

            {/* CONTENIDO INFERIOR */}
            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', position: 'relative', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* ICONO DEL SERVIDOR */}
                <img 
                    src={serverData.iconUrl} 
                    alt={serverData.name} 
                    style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '16px', 
                        border: '6px solid #111113', // Borde grueso para separar del banner
                        marginTop: '-32px',
                        marginBottom: '10px',
                        backgroundColor: '#2b2d31',
                        position: 'relative',
                        zIndex: 2
                    }} 
                />
                
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: 'white' }}>
                    {serverData.name}
                </h3>
                
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 1.5rem 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', flexGrow: 1 }}>
                    {serverData.description}
                </p>

                {/* CONTADORES ESTILO DISCORD */}
                <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.8rem', color: '#888', fontWeight: '500', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', background: '#23a559', borderRadius: '50%', display: 'inline-block' }}></span>
                        {serverData.onlineCount.toLocaleString()} En línea
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', background: '#80848e', borderRadius: '50%', display: 'inline-block' }}></span>
                        {serverData.memberCount.toLocaleString()} Miembros
                    </div>
                </div>
            </div>
            
            {/* CSS inyectado para el efecto Hover */}
            <style dangerouslySetInnerHTML={{__html: `
                .discovery-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(139, 92, 246, 0.2);
                    border-color: rgba(139, 92, 246, 0.4) !important;
                }
                .discovery-card:hover .discovery-banner {
                    transform: scale(1.05);
                }
            `}} />
        </div>
    );
}