import type { Metadata } from 'next';
import './globals.css';
import ClientScripts from './components/ClientScripts'; 
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Skirr | Soluciones a medida para Discord y Minecraft',
  description: 'Soluciones a medida para Discord y Minecraft',
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2179117559557714" crossOrigin="anonymous"></script>
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body>

        <div className="aesthetic-background">
          <div className="stars"></div>
          <div className="particles"></div>
          <div className="main-gradient"></div>
        </div>
        
        {children}

        <Footer />

        <ClientScripts />
      </body>
    </html>
  );
}