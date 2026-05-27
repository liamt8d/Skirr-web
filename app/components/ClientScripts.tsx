"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// 1. Definimos los tipos para nuestras traducciones
type Lang = "es" | "en";
type Translations = Record<Lang, Record<string, string>>;

export default function ClientScripts() {
    const pathname = usePathname();

    useEffect(() => {
        // Le decimos a TypeScript la estructura exacta de 'translations'
        const translations: Translations = {
            es: {
                navBots: "Bots", navServers: "Servidores", navConsulting: "Asesorías", navMod: "Moderación",
                navContact: "Iniciar Proyecto", btnServices: "Ver Servicios", agendarConsultaFree: "Contactar",
                footerColumnAvailability: "AGENCIA PREMIUM DISCORD & MINECRAFT",
                title: "Construye comunidades. Eleva experiencias con <span class='highlight-purple'>Skirr</span>.",
                description: "Skirr es tu socio definitivo para el ecosistema de Discord, Minecraft y Moderación. Desde bots personalizados hasta diseño estratégico de servidores, impulsamos tu visión con tecnología y gestión premium.",
                featBotsTitle: "Bots Personalizados", featServersTitle: "Servidores Minecraft", featModTitle: "Moderación Elite", featConsultingTitle: "Asesoría Estratégica",
                featBotsDesc: "Desarrollamos bots únicos para Discord que automatizan, entretienen y gestionan tu comunidad a la perfección.",
                featServersDesc: "Configuración y gestión de redes y servidores de Minecraft de alto rendimiento y escalabilidad.",
                featModDesc: "Equipo de moderación profesional y sistemas automatizados para mantener un entorno seguro y activo.",
                featConsultingDesc: "Consultoría experta para el crecimiento, monetización y gestión eficiente de tus comunidades digitales.",
                metricSupport: "Tranquilidad Total", metricUsers: "Usuarios Gestionados", metricCustom: "Creación a Medida",
                processTitle: "Nuestro Proceso Ágil", step1Title: "Entender", step2Title: "Planificar", step3Title: "Desarrollar", step4Title: "Lanzar",
                hablemosTitle: "¿Listo para construir el futuro de tu comunidad?",
                footerDesc: "Construimos el futuro para tu comunidad.", footerColumnResources: "SERVICIOS",
                footerLinkServices: "Bots Custom", footerLinkPortfolio: "Servidores", footerLinkContact: "Moderación", footerLinkPrivacy: "Privacidad",
                footerAvailabilityText: "Aceptando Proyectos Nuevos", footerCopyright: "© 2026 Skirr. Todos los derechos reservados.",
                pageServicesTitle: "Soluciones a <span class='highlight-purple'>Medida</span>",
                pageServicesDesc: "Descubre cómo transformamos comunidades con infraestructura sólida y desarrollo premium.",
                btnBack: "Volver al Inicio"
            },
            en: {
                navBots: "Bots", navServers: "Servers", navConsulting: "Consulting", navMod: "Moderation",
                agendarConsultaFree: "Contact Us", navContact: "Start Project", btnServices: "View Services",
                footerColumnAvailability: "PREMIUM DISCORD & MINECRAFT AGENCY",
                title: "Build communities. Elevate experiences with <span class='highlight-purple'>Skirr</span>.",
                description: "Skirr is your ultimate partner for the Discord, Minecraft, and Moderation ecosystem. From custom bots to strategic server design, we power your vision with premium technology and management.",
                featBotsTitle: "Custom Bots", featServersTitle: "Minecraft Servers", featModTitle: "Elite Moderation", featConsultingTitle: "Strategic Consulting",
                featBotsDesc: "We develop unique Discord bots that automate, entertain, and perfectly manage your community.",
                featServersDesc: "Configuration and management of high-performance, scalable Minecraft networks and servers.",
                featModDesc: "Professional moderation team and automated systems to maintain a safe and active environment.",
                featConsultingDesc: "Expert consulting for the growth, monetization, and efficient management of your digital communities.",
                metricSupport: "Total Peace of Mind", metricUsers: "Users Managed", metricCustom: "Tailored Creation",
                processTitle: "Our Agile Process", step1Title: "Understand", step2Title: "Plan", step3Title: "Develop", step4Title: "Launch",
                hablemosTitle: "Ready to build the future of your community?",
                footerDesc: "We build the future for your community.", footerColumnResources: "SERVICES",
                footerLinkServices: "Custom Bots", footerLinkPortfolio: "Servers", footerLinkContact: "Moderation", footerLinkPrivacy: "Privacy Policy",
                footerAvailabilityText: "Accepting New Projects", footerCopyright: "© 2026 Skirr. All rights reserved.",
                pageServicesTitle: "Tailored <span class='highlight-purple'>Solutions</span>",
                pageServicesDesc: "Discover how we transform communities with solid infrastructure and premium development.",
                btnBack: "Back to Home"
            }
        };

        let currentLang: Lang = "es";
        const langBtn = document.getElementById("lang-toggle");

        // 2. Agregamos el tipo 'Lang' al parámetro
        function changeLanguage(lang: Lang) {
            currentLang = lang;
            if (langBtn) langBtn.textContent = lang === "es" ? "EN" : "ES";

            document.querySelectorAll("[data-i18n]").forEach(element => {
                const key = element.getAttribute("data-i18n");
                if (key && translations[lang] && translations[lang][key]) {
                    element.innerHTML = translations[lang][key]; 
                }
            });
        }

        if (langBtn && langBtn.parentNode) {
            const newBtn = langBtn.cloneNode(true);
            langBtn.parentNode.replaceChild(newBtn, langBtn);
            
            newBtn.addEventListener("click", () => {
                const newLang: Lang = currentLang === "es" ? "en" : "es";
                changeLanguage(newLang);
            });
        }

        setTimeout(() => {
            const revealElements = document.querySelectorAll('.reveal');
            const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
            
            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);
            
            revealElements.forEach(el => revealOnScroll.observe(el));

            const heroSection = document.querySelector('.hero.reveal');
            if (heroSection) heroSection.classList.add('active');
        }, 100);

        setTimeout(() => {
            const cards = document.querySelectorAll('.glass-panel');
            cards.forEach(card => {
                // 3. Convertimos 'card' a HTMLElement para poder modificar su .style
                const htmlCard = card as HTMLElement;
                let spotlight = htmlCard.querySelector('.spotlight');
                
                if (!spotlight) {
                    spotlight = document.createElement('div');
                    spotlight.classList.add('spotlight');
                    htmlCard.appendChild(spotlight);
                }
                
                // 4. Especificamos que 'e' es un MouseEvent
                htmlCard.addEventListener('mousemove', (e: MouseEvent) => {
                    const rect = htmlCard.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    htmlCard.style.setProperty('--x', `${x}px`);
                    htmlCard.style.setProperty('--y', `${y}px`);
                });
            });
        }, 150);

        // 5. Convertimos estos elementos a HTMLElement (o null) para modificar sus estilos
        const backToTopBtn = document.getElementById("back-to-top") as HTMLElement | null;
        const progressFill = document.querySelector(".progress-fill") as HTMLElement | null;
        
        const handleScroll = () => {
            if (progressFill) {
                const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
                const scrollProgress = (window.scrollY / scrollTotal) * 100;
                progressFill.style.width = `${scrollProgress}%`;
            }

            if (backToTopBtn) {
                if (window.scrollY > 300) {
                    backToTopBtn.style.opacity = '1';
                    backToTopBtn.style.pointerEvents = 'auto';
                    backToTopBtn.style.transform = 'translateY(0)';
                } else {
                    backToTopBtn.style.opacity = '0';
                    backToTopBtn.style.pointerEvents = 'none';
                    backToTopBtn.style.transform = 'translateY(20px)';
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        if (backToTopBtn) {
            backToTopBtn.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [pathname]);

    return null;
}