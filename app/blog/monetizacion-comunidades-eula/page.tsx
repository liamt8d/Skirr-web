import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function BlogWIP() {
    return (
        <main style={{ background: '#050508', minHeight: '100vh' }}>
            <Navbar />
            
            <section style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100vh',
                padding: '20px'
            }}>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '2rem',
                    color: 'white'
                }}>
                    <h1 style={{ 
                        fontSize: '3rem', 
                        fontWeight: '600', 
                        margin: 0,
                        paddingRight: '2rem',
                        borderRight: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        707
                    </h1>
                    
                    <div>
                        <p style={{ 
                            fontSize: '1.2rem', 
                            margin: 0,
                            letterSpacing: '0.5px'
                        }}>
                            Blog en proceso.
                        </p>
                        <Link href="/blog" style={{
                            color: 'var(--primary-purple)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            marginTop: '10px',
                            display: 'inline-block',
                            opacity: '0.8'
                        }}>
                            &larr; Volver al blog
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}