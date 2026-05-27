import Link from 'next/link';
import Navbar from '../components/Navbar';
import { blogPosts } from './blogData';

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      <section className="reveal" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh' }}>
        <div className="container">

            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Nuestro <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Blog</span></h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    Información sobre desarrollo web, optimización de servidores y crecimiento digital.
                </p>
            </div>

            <div className="blog-minimal-grid">
                {blogPosts.map((post) => (
                    <article key={post.slug} className="glass-panel blog-minimal-card">
                        <span className="blog-minimal-tag">{post.tag}</span>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className="blog-minimal-footer">
                            <span>{post.date}</span>
                            <Link href={`/blog/${post.slug}`} className="read-more" style={{ color: 'white' }}>
                                Leer más &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

        </div>
      </section>
    </main>
  );
}