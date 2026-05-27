import Link from 'next/link';
import Navbar from './components/Navbar'; 

export default function Home() {
  return (
    <main>
      <Navbar /> 

      <section className="hero reveal">
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="status-badge">
              <span className="dot-purple"></span>
              <span data-i18n="footerColumnAvailability">AGENCIA PREMIUM DISCORD & MINECRAFT</span>
            </div>
            
            <h1 data-i18n="title">Construye comunidades. Renueva tu comunidad con <span className="highlight-purple">Skirr.</span></h1>
            
            <p data-i18n="description">
              Skirr es tu socio definitivo para el ecosistema de Discord, Minecraft y Moderación. Desde bots personalizados hasta diseño de servidores, impulsamos tu visión con tecnología y gestión premium.
            </p>
            
            <div className="button-group">
              <Link href="/contacto" className="btn-aesthetic" data-i18n="navContact">
                Iniciar Proyecto
              </Link>
              <Link href="/servicios" className="btn-outline-aesthetic" data-i18n="btnServices">
                Ver Servicios
              </Link>
            </div>
          </div>

          <div className="hero-visuals">
            <div className="floating-capsule service-card-1">
              <i className="ph-fill ph-robot"></i>
              <span data-i18n="featBotsTitle">Custom Bots</span>
            </div>
            <div className="floating-capsule service-card-2">
              <i className="ph-fill ph-hard-drives"></i>
              <span data-i18n="featServersTitle">Minecraft Servers</span>
            </div>
            <div className="floating-capsule service-card-3">
              <i className="ph-fill ph-shield-check"></i>
              <span data-i18n="featModTitle">Moderation</span>
            </div>
            <div className="floating-capsule service-card-4">
              <i className="ph-fill ph-lightbulb"></i>
              <span data-i18n="featConsultingTitle">Asesoría</span>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="grid-section reveal">
        <div className="container">
          <div className="grid-layout BentoGrid">
            <div className="BentoCard BentoTall glass-panel">
              <i className="ph ph-robot icon-purple"></i>
              <h3 data-i18n="featBotsTitle">Bots Personalizados</h3>
              <p data-i18n="featBotsDesc">Desarrollamos bots únicos para Discord que automatizan, entretienen y gestionan tu comunidad a la perfección.</p>
            </div>
            <div className="BentoCard glass-panel">
              <i className="ph ph-hard-drives icon-purple"></i>
              <h3 data-i18n="featServersTitle">Servidores Minecraft</h3>
              <p data-i18n="featServersDesc">Configuración de servidores de Minecraft.</p>
            </div>
            <div className="BentoCard glass-panel">
              <i className="ph ph-shield-check icon-purple"></i>
              <h3 data-i18n="featModTitle">Moderación</h3>
              <p data-i18n="featModDesc">Equipo de moderación profesional y sistemas automatizados para mantener un entorno seguro y activo.</p>
            </div>
            <div className="BentoCard glass-panel">
              <i className="ph ph-lightbulb icon-purple"></i>
              <h3 data-i18n="featConsultingTitle">Asesoría Estratégica</h3>
              <p data-i18n="featConsultingDesc">Consultoría para el crecimiento y gestión eficiente de tus comunidades.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="metrics" className="metrics-section reveal">
        <div className="container metrics-grid">
          <div className="metric-glass">
            <h3>+50K</h3>
            <span data-i18n="metricUsers">Usuarios Gestionados</span>
          </div>
          <div className="metric-glass">
            <h3>100%</h3>
            <span data-i18n="metricCustom">Creación a Medida</span>
          </div>
          <div className="metric-glass">
            <h3>24/7</h3>
            <span data-i18n="metricSupport">Tranquilidad Total</span>
          </div>
        </div>
      </section>

      <section id="process" className="data-section reveal">
        <div className="container timeline-process">
          <div className="timeline-head">
            <h2 data-i18n="processTitle">Nuestro Proceso</h2>
          </div>
          <div className="timeline-modern">
            <div className="process-step">
              <span className="step-badge-purple">01</span>
              <h3 data-i18n="step1Title">Entender</h3>
            </div>
            <div className="process-step">
              <span className="step-badge-purple">02</span>
              <h3 data-i18n="step2Title">Planificar</h3>
            </div>
            <div className="process-step">
              <span className="step-badge-purple">03</span>
              <h3 data-i18n="step3Title">Desarrollar</h3>
            </div>
            <div className="process-step">
              <span className="step-badge-purple">04</span>
              <h3 data-i18n="step4Title">Lanzar</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="cta-banner reveal">
        <div className="container cta-capsule">
          <h2 data-i18n="hablemosTitle">¿Listo para construir el futuro de tu comunidad?</h2>
          <a href="/contacto" className="btn-aesthetic-large" data-i18n="navContact">
            Iniciar Proyecto →
          </a>
        </div>
      </section>
    </main>
  );
}