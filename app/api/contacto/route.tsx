import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactData {
    nombre: string;
    correo: string;
    discord?: string;
    servicio: string;
    presupuesto: string;
    plazo: string;
    metodoContacto: string;
    detalles: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: ContactData = await request.json();

        const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL; 

        const discordMessage = {
            embeds: [{
                title: "🚀 ¡Nuevo Prospecto para Skirr!",
                color: 9133311,
                fields: [
                    { name: "👤 Cliente", value: data.nombre || "N/A", inline: true },
                    { name: "📧 Correo", value: data.correo || "N/A", inline: true },
                    { name: "👾 Discord", value: data.discord || "N/A", inline: true },
                    { name: "🛠️ Servicio", value: data.servicio || "N/A", inline: true },
                    { name: "💰 Presupuesto", value: data.presupuesto || "N/A", inline: true },
                    { name: "⏱️ Plazo", value: data.plazo || "N/A", inline: true },
                    { name: "📞 Contacto", value: data.metodoContacto || "N/A", inline: true },
                    { name: "📝 Detalles", value: data.detalles || "Sin detalles." }
                ],
                timestamp: new Date().toISOString()
            }]
        };

        if (discordWebhookUrl) {
            try {
                await fetch(discordWebhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(discordMessage)
                });
                console.log("Mensaje de Discord enviado!");
            } catch (discordError) {
                console.error("No se pudo conectar con Discord:", discordError);
            }
        }

        await resend.emails.send({
            from: 'Skirr Sistema <no-reply@skirr.dev>', 
            to: ['contacto@skirr.dev'], 
            subject: `🔥 Nuevo Lead: ${data.nombre} - ${data.servicio}`,
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h2>Tienes un nuevo prospecto en Skirr</h2>
                    <p><strong>Nombre:</strong> ${data.nombre}</p>
                    <p><strong>Correo:</strong> ${data.correo}</p>
                    <p><strong>Discord:</strong> ${data.discord || 'No proporcionado'}</p>
                    <p><strong>Servicio:</strong> ${data.servicio}</p>
                    <p><strong>Presupuesto:</strong> ${data.presupuesto}</p>
                    <p><strong>Plazo esperado:</strong> ${data.plazo}</p>
                    <p><strong>Preferencia de Contacto:</strong> ${data.metodoContacto}</p>
                    <br/>
                    <p><strong>Detalles del proyecto:</strong></p>
                    <p style="background: #f4f4f5; padding: 15px; border-radius: 8px;">${data.detalles}</p>
                </div>
            `
        });

        if (data.correo) {
            await resend.emails.send({
                from: 'Skirr <no-reply@skirr.dev>',
                to: [data.correo],
                subject: 'Hemos recibido tu solicitud 🚀',
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #050508; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #2a2a35;">
                        <h2 style="color: #8B5CF6; margin-top: 0;">¡Hola, ${data.nombre}!</h2>
                        <p style="color: #d1d5db; line-height: 1.6;">Hemos recibido correctamente tu solicitud de consulta para tu proyecto de <strong>${data.servicio}</strong>.</p>
                        <p style="color: #d1d5db; line-height: 1.6;">Nuestro equipo está revisando los detalles de tu comunidad y nos pondremos en contacto contigo muy pronto a través de tu método preferido (${data.metodoContacto}).</p>
                        <br/>
                        <p style="color: #d1d5db;">Gracias por confiar en el equipo de <strong>Skirr</strong>.</p>
                        <hr style="border: none; border-top: 1px solid #2a2a35; margin: 30px 0;" />
                        <p style="font-size: 12px; color: #6b7280; text-align: center;">Este es un mensaje automático, por favor no respondas a este correo.</p>
                    </div>
                `
            });
        }

        return NextResponse.json({ success: true, message: "¡Mensajes enviados con éxito!" });
        
    } catch (error) {
        console.error("Error en el backend:", error);
        return NextResponse.json({ success: false, error: "Hubo un error al enviar el mensaje." }, { status: 500 });
    }
}