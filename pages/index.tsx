import Link from "next/link";
import Head from "next/head";

interface SubGuide {
  id: string;
  name: string;
  description: string;
  url: string;
}

interface Guide {
  id: string;
  name: string;
  description: string;
  icon: string;
  subGuides: SubGuide[];
}

export default function Home() {
  const guides: Guide[] = [
    {
      id: "inpos",
      name: "Inpos",
      description: "Inpos yazarkasa işlemleri",
      icon: "🖥️",
      subGuides: [
        {
          id: "inpos-kurulum",
          name: "Kurulum",
          description: "Inpos yazarkasa kurulum rehberi",
          url: "/rehber/inpos-kurulum"
        },
        {
          id: "inpos-esleme",
          name: "Eşleme",
          description: "Inpos yazarkasa eşleme işlemleri",
          url: "/rehber/inpos-esleme"
        }
      ]
    },
    {
      id: "hugin",
      name: "Hugin",
      description: "Hugin yazarkasa işlemleri",
      icon: "🔧",
      subGuides: [
        {
          id: "hugin-kurulum",
          name: "Kurulum",
          description: "Hugin yazarkasa kurulum rehberi",
          url: "/rehber/hugin-kurulum"
        },
        {
          id: "hugin-esleme",
          name: "Eşleme",
          description: "Hugin yazarkasa eşleme işlemleri",
          url: "/rehber/hugin-esleme"
        }
      ]
    },
    {
      id: "pavo",
      name: "Pavo",
      description: "Pavo yazarkasa işlemleri",
      icon: "⚙️",
      subGuides: [
        {
          id: "pavo-kurulum",
          name: "Kurulum",
          description: "Pavo yazarkasa kurulum rehberi",
          url: "/rehber/pavo-kurulum"
        }
      ]
    },
    {
      id: "mizan",
      name: "Mizan Hızlı Satış",
      description: "Mizan yazılım kurulum işlemleri",
      icon: "🚀",
      subGuides: [
        {
          id: "mizan-hizli-satis",
          name: "Hızlı Satış Kurulum",
          description: "Mizan hızlı satış yazılımı kurulum",
          url: "/rehber/mizan-hizli-satis"
        },
        {
          id: "kasa-kurulum",
          name: "Kasa Kurulum",
          description: "Genel kasa kurulum işlemleri",
          url: "/rehber/kasa-kurulum"
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Mizan Yazılım Kurulum Rehberi</title>
        <meta name="description" content="Yazarkasa ve POS kurulum rehberleri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <header className="header">
          <h1>📋 Mizan Yazılım Kurulum Rehberi</h1>
          <p>Tüm kurulum işlemleri için detaylı rehberler</p>
        </header>

        <div className="guides-grid">
          {guides.map((guide) => (
            <div key={guide.id} className="guide-section">
              <div className="guide-header">
                <div className="guide-icon">{guide.icon}</div>
                <div>
                  <h2>{guide.name}</h2>
                  <p className="guide-description">{guide.description}</p>
                </div>
              </div>
              
              <div className="sub-guides">
                {guide.subGuides.map((subGuide) => (
                  <Link 
                    key={subGuide.id} 
                    href={subGuide.url} 
                    className="sub-guide-card"
                  >
                    <h3>{subGuide.name}</h3>
                    <p>{subGuide.description}</p>
                    <div className="arrow">→</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="footer">
          <p>© 2025 Mizan Yazılım - Kurulum Rehberleri</p>
        </footer>
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .header h1 {
          font-size: 2.5rem;
          color: #f1f5f9;
          margin-bottom: 0.5rem;
        }

        .header p {
          font-size: 1.1rem;
          color: #94a3b8;
          margin: 0;
        }

        .guides-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .guide-section {
          background: #27272a;
          border: 1px solid #3f3f46;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .guide-section:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
          border-color: #3b82f6;
        }

        .guide-header {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
          border-bottom: 1px solid #374151;
        }

        .guide-icon {
          font-size: 3rem;
          margin-right: 1rem;
        }

        .guide-header h2 {
          font-size: 1.5rem;
          color: #f1f5f9;
          margin: 0 0 0.25rem 0;
        }

        .guide-description {
          color: #94a3b8;
          margin: 0;
          font-size: 0.9rem;
        }

        .sub-guides {
          padding: 0.5rem;
        }

        .sub-guide-card {
          display: block;
          padding: 1.25rem;
          margin: 0.5rem;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
          position: relative;
          border: 1px solid transparent;
        }

        .sub-guide-card:hover {
          background: #374151;
          border-color: #3b82f6;
          transform: translateX(4px);
        }

        .sub-guide-card h3 {
          font-size: 1.1rem;
          color: #f1f5f9;
          margin: 0 0 0.5rem 0;
          font-weight: 600;
        }

        .sub-guide-card p {
          color: #94a3b8;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .arrow {
          position: absolute;
          top: 50%;
          right: 1.25rem;
          transform: translateY(-50%);
          font-size: 1.2rem;
          color: #64748b;
          transition: all 0.2s ease;
        }

        .sub-guide-card:hover .arrow {
          color: #3b82f6;
          transform: translateY(-50%) translateX(4px);
        }

        .footer {
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
          border-top: 1px solid #374151;
          padding-top: 2rem;
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
          
          .header h1 {
            font-size: 2rem;
          }
          
          .guides-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .guide-header {
            flex-direction: column;
            text-align: center;
          }

          .guide-icon {
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}