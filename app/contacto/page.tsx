"use client";

import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useState, FormEvent, ChangeEvent } from 'react';

// Definimos los tipos permitidos para el estado del formulario
type EstadoFormulario = "inicial" | "enviando" | "exito" | "error";

export default function ContactoPage() {
  const [estado, setEstado] = useState<EstadoFormulario>("inicial");
  const [caracteres, setCaracteres] = useState<number>(0);
  const [motivo, setMotivo] = useState<string>("Bot Custom");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado("enviando");

    // Usamos currentTarget que es más seguro en TypeScript para formularios
    const form = e.currentTarget; 
    const formData = new FormData(form);
    
    // Si es Legal, mandamos N/A en presupuesto y plazo para que el backend no falle
    const data = {
        nombre: formData.get('nombre') as string,
        correo: formData.get('correo') as string,
        discord: (formData.get('discord') as string) || "",
        servicio: motivo, 
        presupuesto: motivo === 'Legal / Privacidad' ? 'N/A' : (formData.get('presupuesto') as string),
        plazo: motivo === 'Legal / Privacidad' ? 'N/A' : (formData.get('plazo') as string),
        detalles: formData.get('detalles') as string,
        metodoContacto: formData.get('metodoContacto') as string,
    };

    try {
        const respuesta = await fetch('/api/contacto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (respuesta.ok) {
            setEstado("exito");
            form.reset();
            setCaracteres(0);
        } else {
            setEstado("error");
        }
    } catch (error) {
        setEstado("error");
    }
  };

  return (
    <main>
      <Navbar />

      <section className="hero reveal" style={{ minHeight: 'auto', paddingTop: 'clamp(100px, 15vw, 150px)', paddingBottom: '20px', paddingInline: '1rem' }}>
        <div className="container contact-header" style={{ textAlign: 'left' }}>
            <div className="status-badge" style={{ marginBottom: '1rem', display: 'inline-flex', background: 'var(--primary-purple-faint)', color: 'var(--primary-purple)' }}>
                <i className="ph ph-paper-plane-tilt" style={{ marginRight: '8px' }}></i>
                <span>CONTACTO</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1.1' }}>
                Conectemos <span style={{ fontStyle: 'italic', color: 'var(--primary-purple)' }}>Juntos</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 3vw, 1.1rem)', marginTop: '1rem', maxWidth: '600px' }}>
                Déjanos saber cómo podemos ayudar a hacer realidad la visión de tu comunidad o resolver tus dudas sobre nuestros servicios.
            </p>
        </div>
      </section>

      <section className="reveal" style={{ paddingTop: '1rem', paddingBottom: '100px', paddingInline: '1rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>
            
            {/* PANEL DEL FORMULARIO */}
            <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="ph-fill ph-chat-circle-dots" style={{ fontSize: '1.5rem', color: 'var(--primary-purple)' }}></i>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', margin: 0 }}>Envíanos un mensaje</h2>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem', marginLeft: '3.5rem' }}>
                    Completa los datos a continuación y nos pondremos en contacto contigo rápidamente.
                </p>

                {estado === "exito" ? (
                    <div style={{ padding: '3rem 2rem', textAlign: 'center', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '16px' }}>
                        <div style={{ width: '80px', height: '80px', background: 'var(--primary-purple)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }}>
                            <i className="ph-bold ph-check" style={{ fontSize: '2.5rem', color: 'white' }}></i>
                        </div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>¡Transmisión Exitosa!</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto contigo en breve.</p>
                        <button onClick={() => setEstado("inicial")} className="btn-outline-aesthetic" style={{ width: '100%' }}>Enviar otro mensaje</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'block' }}>Nombre o Nickname *</label>
                                    <input type="text" name="nombre" className="form-input" placeholder="Ej: Liam" style={{ width: '100%', padding: '0.8rem 1rem', background: '#111113', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: 'white' }} required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'block' }}>Correo electrónico *</label>
                                    <input type="email" name="correo" className="form-input" placeholder="correo@ejemplo.com" style={{ width: '100%', padding: '0.8rem 1rem', background: '#111113', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: 'white' }} required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'block' }}>Usuario de Discord <span style={{ opacity: 0.5 }}>(Opcional)</span></label>
                                <div style={{ position: 'relative' }}>
                                    <i className="ph ph-discord-logo" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '1.2rem' }}></i>
                                    <input type="text" name="discord" className="form-input" placeholder="ej: usuario#1234" style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', background: '#111113', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: 'white' }} />
                                </div>
                            </div>

                            {/* SELECTOR DE MOTIVO DINÁMICO */}
                            <div className="form-group">
                                <label className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem', display: 'block' }}>¿Motivo de tu mensaje?</label>
                                <div className="budget-options" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.5rem' }}>
                                    {['Bot Custom', 'Servidor MC', 'Moderación', 'Asesoría', 'Legal / Privacidad'].map((svc) => (
                                        <label key={svc} style={{ cursor: 'pointer' }}>
                                            <input 
                                                type="radio" 
                                                name="servicio" 
                                                value={svc} 
                                                className="budget-radio" 
                                                style={{ display: 'none' }} 
                                                checked={motivo === svc}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => setMotivo(e.target.value)}
                                            />
                                            <div style={{ textAlign: 'center', padding: '0.8rem 0.5rem', background: '#111113', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', fontSize: '0.85rem', transition: 'all 0.2s', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="budget-label-custom">
                                                {svc}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* SE OCULTA SI ES UNA CONSULTA LEGAL */}
                            {motivo !== 'Legal / Privacidad' && (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', animation: 'fadeIn 0.3s ease-in-out' }}>
                                    <div className="form-group">
                                        <label className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem', display: 'block' }}>Presupuesto Aproximado</label>
                                        <select name="presupuesto" style={{ width: '100%', padding: '0.8rem 1rem', background: '#111113', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                                            <option value="Menos de $50">Menos de $50 USD</option>
                                            <option value="$50 - $150">$50 - $150 USD</option>
                                            <option value="$150 - $500">$150 - $500 USD</option>
                                            <option value="Más de $500">Más de $500 USD</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem', display: 'block' }}>Plazo de entrega</label>
                                        <select name="plazo" style={{ width: '100%', padding: '0.8rem 1rem', background: '#111113', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: 'white', cursor: 'pointer', appearance: 'none' }}>
                                            <option value="Estándar (2-4 semanas)">Estándar (2-4 semanas)</option>
                                            <option value="Relajado (1-2 meses)">Relajado (1-2 meses)</option>
                                            <option value="Urgente (Lo antes posible)">Urgente (Lo antes posible)</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            <div className="form-group">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
                                    <label className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', margin: 0 }}>
                                        {motivo === 'Legal / Privacidad' ? 'Dinos tu duda o solicitud' : 'Cuéntanos sobre tu proyecto'}
                                    </label>
                                    <span style={{ fontSize: '0.75rem', color: caracteres > 500 ? '#ef4444' : 'var(--text-muted)' }}>{caracteres}/500</span>
                                </div>
                                <textarea 
                                    name="detalles" 
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCaracteres(e.target.value.length)} 
                                    maxLength={500} 
                                    className="form-textarea" 
                                    placeholder={motivo === 'Legal / Privacidad' ? "Ej: Quisiera saber cómo puedo solicitar la eliminación de mis datos..." : "Ej: Tengo una comunidad de rol y necesito un bot en Python..."} 
                                    style={{ width: '100%', minHeight: '120px', padding: '1rem', background: '#111113', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: 'white', resize: 'vertical' }} 
                                    required
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem', display: 'block' }}>Método de respuesta preferido</label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.6rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <input type="radio" name="metodoContacto" value="Correo" style={{ accentColor: 'var(--primary-purple)' }} defaultChecked />
                                        <span style={{ fontSize: '0.9rem' }}>Correo</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.6rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <input type="radio" name="metodoContacto" value="Discord" style={{ accentColor: 'var(--primary-purple)' }} />
                                        <span style={{ fontSize: '0.9rem' }}>Discord</span>
                                    </label>
                                </div>
                            </div>

                            {estado === "error" && (
                                <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '8px', color: '#ef4444', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <i className="ph-fill ph-warning-circle"></i>
                                    Hubo un error al enviar el formulario. Verifica tu conexión e inténtalo de nuevo.
                                </div>
                            )}

                            <button type="submit" disabled={estado === "enviando"} className="btn-aesthetic-large" style={{ width: '100%', borderRadius: '8px', opacity: estado === "enviando" ? 0.7 : 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                                {estado === "enviando" ? (
                                    <><i className="ph ph-spinner" style={{ animation: 'spin 1s linear infinite' }}></i> Procesando...</>
                                ) : (
                                    <><i className="ph-bold ph-paper-plane-right"></i> Enviar Mensaje</>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>

            {/* PANEL DERECHO DE INFO Y TIMELINE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'linear-gradient(145deg, rgba(17,17,19,0.9) 0%, rgba(10,10,12,0.9) 100%)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="ph-fill ph-address-book" style={{ color: 'var(--primary-purple)' }}></i> Contacto Directo
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <i className="ph ph-envelope-simple" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}></i>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Correo</span>
                                <a href="mailto:contacto@skirr.dev" style={{ fontWeight: '600', color: 'white', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary-purple)'} onMouseOut={e => e.currentTarget.style.color='white'}>contacto@skirr.dev</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <i className="ph ph-discord-logo" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}></i>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Servidor Privado</span>
                                <a href="https://discord.gg/rdkDrR7wUB" target="_blank" rel="noreferrer" style={{ fontWeight: '600', color: 'white', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary-purple)'} onMouseOut={e => e.currentTarget.style.color='white'}>discord.gg/skirr</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <i className="ph ph-map-pin" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}></i>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Ubicación</span>
                                <span style={{ fontWeight: '600', color: 'white' }}>Agencia Remota Global</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>¿Qué pasa después?</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '10px', width: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}></div>
                        
                        <div className="timeline-step step-1" style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
                            <div className="step-circle" style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#1A1A1D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '4px solid #050508' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>1</span>
                            </div>
                            <div className="step-text">
                                <h4 style={{ fontSize: '0.95rem', margin: '0 0 0.3rem 0', color: '#ccc' }}>Revisión</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>Analizamos tu solicitud a la brevedad.</p>
                            </div>
                        </div>
                        
                        <div className="timeline-step step-2" style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
                            <div className="step-circle" style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#1A1A1D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '4px solid #050508' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>2</span>
                            </div>
                            <div className="step-text">
                                <h4 style={{ fontSize: '0.95rem', margin: '0 0 0.3rem 0', color: '#ccc' }}>Respuesta</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>Te enviamos la información o propuesta.</p>
                            </div>
                        </div>

                        <div className="timeline-step step-3" style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
                            <div className="step-circle" style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#1A1A1D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '4px solid #050508' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>3</span>
                            </div>
                            <div className="step-text">
                                <h4 style={{ fontSize: '0.95rem', margin: '0 0 0.3rem 0', color: '#ccc' }}>Solución</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>Iniciamos el desarrollo o cerramos el caso.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        .budget-radio:checked + .budget-label-custom {
            background: rgba(139, 92, 246, 0.15) !important;
            border-color: var(--primary-purple) !important;
            color: white !important;
            font-weight: 600;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

        /* --- MAGIA DEL TIMELINE --- */
        @keyframes stepActivate {
            0%, 100% { background: #1A1A1D; box-shadow: none; }
            10%, 30% { background: var(--primary-purple); box-shadow: 0 0 15px rgba(139, 92, 246, 0.5); }
        }
        @keyframes stepTextActivate {
            0%, 100% { color: var(--text-muted); }
            10%, 30% { color: white; }
        }
        @keyframes stepHighlight {
            0%, 100% { opacity: 0.6; transform: translateX(0); }
            10%, 30% { opacity: 1; transform: translateX(5px); }
        }

        .timeline-step .step-circle { transition: all 0.4s ease; }
        .timeline-step .step-circle span { transition: all 0.4s ease; }
        .timeline-step .step-text { transition: all 0.4s ease; }

        .step-1 .step-circle { animation: stepActivate 9s infinite 0s; }
        .step-1 .step-circle span { animation: stepTextActivate 9s infinite 0s; }
        .step-1 .step-text { animation: stepHighlight 9s infinite 0s; }

        .step-2 .step-circle { animation: stepActivate 9s infinite 3s; }
        .step-2 .step-circle span { animation: stepTextActivate 9s infinite 3s; }
        .step-2 .step-text { animation: stepHighlight 9s infinite 3s; }

        .step-3 .step-circle { animation: stepActivate 9s infinite 6s; }
        .step-3 .step-circle span { animation: stepTextActivate 9s infinite 6s; }
        .step-3 .step-text { animation: stepHighlight 9s infinite 6s; }
      `}} />
    </main>
  );
}