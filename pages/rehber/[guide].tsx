import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

interface GuidePageProps {
  content: string;
  guide: string;
  frontMatter: {
    title: string;
    description: string;
    category: string;
    lastUpdate: string;
  };
}

export default function GuidePage({ content, guide, frontMatter }: GuidePageProps) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} - Mizan Kurulum Rehberi</title>
        <meta name="description" content={frontMatter.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container">
        <nav className="breadcrumb">
          <Link href="/">🏠 Ana Sayfa</Link>
          <span>/</span>
          <span>{frontMatter.title}</span>
        </nav>

        <header className="guide-header">
          <h1>{frontMatter.title}</h1>
          <p className="description">{frontMatter.description}</p>
          <div className="meta">
            <span className="category">📂 {frontMatter.category}</span>
            <span className="last-update">📅 Son güncelleme: {frontMatter.lastUpdate}</span>
          </div>
        </header>

        <article 
          className="guide-content"
          dangerouslySetInnerHTML={{ __html: content }} 
        />

        <footer className="guide-footer">
          <Link href="/" className="back-button">
            ← Tüm Rehberlere Dön
          </Link>
        </footer>
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          font-size: 0.9rem;
        }

        .breadcrumb a {
          color: #3b82f6;
          text-decoration: none;
        }

        .breadcrumb a:hover {
          text-decoration: underline;
        }

        .breadcrumb span {
          color: #64748b;
        }

        .guide-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .guide-header h1 {
          font-size: 2.5rem;
          color: #f1f5f9;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 1.2rem;
          color: #94a3b8;
          margin-bottom: 1.5rem;
        }

        .meta {
          display: flex;
          justify-content: center;
          gap: 2rem;
          font-size: 0.9rem;
          color: #64748b;
        }

        .guide-content {
          background: #27272a;
          border-radius: 12px;
          padding: 2.5rem;
          margin-bottom: 3rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          border: 1px solid #3f3f46;
        }

        .guide-footer {
          text-align: center;
        }

        .back-button {
          display: inline-block;
          background: #3b82f6;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
          
          .guide-header h1 {
            font-size: 2rem;
          }
          
          .meta {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .guide-content {
            padding: 1.5rem;
          }
        }

        /* Markdown Content Styling */
        :global(.guide-content h1) {
          color: #f1f5f9;
          border-bottom: 2px solid #3b82f6;
          padding-bottom: 0.5rem;
        }

        :global(.guide-content h2) {
          color: #e2e8f0;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        :global(.guide-content h3) {
          color: #cbd5e1;
          margin-top: 1.5rem;
          margin-bottom: 0.8rem;
        }

        :global(.guide-content ul, .guide-content ol) {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        :global(.guide-content li) {
          margin: 0.5rem 0;
        }

        :global(.guide-content code) {
          background: #1f2937;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.9em;
          color: #e5e7eb;
        }

        :global(.guide-content pre) {
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 8px;
          padding: 1rem;
          overflow-x: auto;
          margin: 1rem 0;
        }

        :global(.guide-content blockquote) {
          border-left: 4px solid #3b82f6;
          margin: 1rem 0;
          padding: 1rem;
          background: #1f2937;
          border-radius: 0 8px 8px 0;
        }

        :global(.guide-content img) {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1rem 0;
        }

        :global(.guide-content table) {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }

        :global(.guide-content th, .guide-content td) {
          border: 1px solid #374151;
          padding: 0.75rem;
          text-align: left;
        }

        :global(.guide-content th) {
          background: #1f2937;
          font-weight: 600;
          color: #f1f5f9;
        }
      `}</style>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Tüm rehber dosyalarının listesi
  const guides = [
    'inpos-kurulum',
    'inpos-esleme', 
    'hugin-kurulum',
    'hugin-esleme',
    'pavo-kurulum',
    'mizan-hizli-satis',
    'kasa-kurulum'
  ];

  const paths = guides.map((guide) => ({
    params: { guide },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Geçici olarak sabit içerik döndürelim
  const guideContents: { [key: string]: any } = {
    'inpos-kurulum': {
      title: 'Inpos Kurulum Rehberi',
      description: 'Inpos yazarkasa kurulum ve ilk ayarlar rehberi',
      category: 'Yazarkasa Kurulum',
      lastUpdate: '19 Eylül 2025',
      content: `
        <h1>Inpos Kurulum Rehberi</h1>
        
        <h2>📋 Kurulum Adımları</h2>
        
        <h3>1. Yeni Satış Kaydı Oluşturma</h3>
        <p><strong>İnpos panelinden</strong> yeni satış kaydı oluşturuyoruz.</p>
        
        <h3>2. SIM Kart Kurulumu</h3>
        <p>SIM kartı cihaza takıp <strong>çalıştırıyoruz</strong>.</p>
        
        <h3>3. Oturum Anahtarı Alma</h3>
        <p><strong>Oturum anahtarı sekmesinden</strong> oturum anahtarı alıyoruz ve <strong>servise giriş</strong> yapıyoruz.</p>
        
        <h3>4. Mali Onay</h3>
        <p>Cihazı <strong>malileştir</strong>.</p>
        
        <h3>5. Kasa Yetkilendirme</h3>
        <p><strong>Yöneticiden</strong> girip kasalara <strong>yetki veriyoruz</strong>.</p>
        
        <h3>6. Test Satışı ve EKÜ Kapatma</h3>
        <p><strong>1'er liralık</strong> satışlar yapıyoruz. <strong>Z raporu</strong> alıp <strong>EKÜ'yü kapatıyoruz</strong>.</p>
        
        <h3>7. Yeni EKÜ Takma</h3>
        <p><strong>Yeni EKÜ'yü takıp</strong> tekrar <strong>açıyoruz</strong>.</p>
        
        <h3>8. Tekrar Oturum Anahtarı</h3>
        <p>Tekrar <strong>oturum anahtarı sekmesinden</strong> oturum anahtarı alıyoruz ve <strong>servise giriş</strong> yapıyoruz.</p>
        
        <h3>9. EKÜ Başlatma</h3>
        <p><strong>EKÜ'yü başlat</strong> diyoruz.</p>
        
        <h3>10. Final Test</h3>
        <p>En son tekrar <strong>1'er liralık satışlar</strong> yapıp <strong>Z raporu</strong> alıyoruz.</p>
        
        <h3>✅ 11. Kurulum Tamamlandı</h3>
        <p><strong>İnpos artık kullanıma hazır!</strong></p>
        
        <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 1rem; margin-top: 2rem;">
          <p><strong>💡 Not:</strong> Kurulum sırasında herhangi bir sorun yaşarsanız, her adımı sırasıyla takip ettiğinizden emin olun.</p>
        </div>
      `
    },
    'inpos-esleme': {
      title: 'Inpos Eşleme Rehberi',
      description: 'Inpos yazarkasa Mizan yazılım eşleme rehberi',
      category: 'Yazarkasa Eşleme',
      lastUpdate: '19 Eylül 2025',
      content: `
        <h1>Inpos Eşleme Rehberi</h1>

        <h2>📋 Eşleme Adımları</h2>

        <h3>1. Inpos Eşleme Adımları</h3>
        <p><strong>Visual C++ 2010,2012,2013</strong> kurulumlarını yapıyoruz.</p>

        <h3>2. Inpos Eşleme Adımları</h3>
        <p><strong>inposgmp3.exe'yi çalıştırıyoruz.</strong></p>

        <h3>3. İnpos GMP3</h3>
        <p><strong>IP: otomatik pc'nin ipsi. Cihaz sicil no: SD00242. Uygulama No: 28071. Port:59000</strong></p>

        <h3>4. Inpos Üzerinden Eşleme Adımları</h3>
        <p><strong>Servis ekranından giriş yapıyoruz.</strong> Sağ alttan diğer. 3 Harici uygulamalar. 1 uygulama eşle. uygulama no: 28071. ip pc'nin ipsi. port: 59000.</h3>

        <h3>5. Eşleme Son Adım</h3>
        <p><strong>Önce uygulama üzerinden biz eşleye basıyoruz ardından müşterimiz inpos üzerinden eşlemeye basıyoruz.</strong></p>

        <h3>6. Eşleme Tamamlandı</h3>
        <p><strong>✅ İnpos artık kullanıma hazır!</strong></p>
      `
    },
    'hugin-kurulum': {
      title: 'Hugin Kurulum Rehberi',
      description: 'Hugin yazarkasa kurulum ve ilk ayarlar rehberi',
      category: 'Yazarkasa Kurulum',
      lastUpdate: '19 Eylül 2025',
      content: `
        <h1>Hugin Kurulum Rehberi</h1>

        <h2>📋 Kurulum Adımları</h2>

        <h3>1. Hugin Kurulum Adımları</h3>
        <p><strong>Hugin partnere giriş yapıyoruz.</strong> Kurulumlar -> Kurulum oluştur.</p>

        <h3>2. Hugin Kurulum Adımları</h3>
        <p><strong>Kurulumlar -> Kurulumları görüntüle.</strong> İsme sağ tık yapıp bağlantıyı yeni sekmede açıyoruz. Gib faaliyet kodu listesinden kodu sorguluyoruz. Nace kodunu dolu görmemiz gerekiyor.</p>

        <h3>3. Hugin Kurulum Adımları</h3>
        <p><strong>Yazarkasa alanını açıyoruz.</strong> Yazarkasa seç. Seri numarasını giriyoruz.Seri numarasına sağ tık yapıp bağlantıyı yeni sekmede açıyoruz.</p>

        <h3>4. Hugin Kurulum Adımları</h3>
        <p><strong>Fiş başlığını dolduruyoruz.</strong></p>

        <h3>5. Hugin Kurulum Adımları</h3>
        <p><strong>Cihaz Sicil numarasından işlem kodunu girip servise giriş yapıyoruz. Mali açılış yapıyoruz.</strong></p>

        <h3>6. Hugin Kurulum Adımları</h3>
        <p><strong>Ayarlar -> Sistem ayarları -> tsm bildirimi yap.</strong></p>

        <h3>7. Hugin Kurulum Adımları</h3>
        <p><strong>KDV oranlarını giriyoruz. Satış Yapıp Z raporu alıp kapatıyoruz</strong></p>

        <h3>8. Hugin Kurulum Adımları</h3>
        <p><strong>✅ Hugin kurulumu tamam.</strong></p>

      `
    },
    'hugin-esleme': {
      title: 'Hugin Eşleme Rehberi',
      description: 'Hugin yazarkasa Mizan yazılım eşleme rehberi',
      category: 'Yazarkasa Eşleme',
      lastUpdate: '19 Eylül 2025',
      content: `
        <h1>Hugin Eşleme Rehberi</h1>
        <p>Buraya Hugin eşleme içeriğini yazacaksın...</p>
      `
    },
    'pavo-kurulum': {
      title: 'Pavo Kurulum Rehberi',
      description: 'Pavo yazarkasa kurulum ve ilk ayarlar rehberi',
      category: 'Yazarkasa Kurulum',
      lastUpdate: '19 Eylül 2025',
      content: `
        <h1>Pavo Kurulum Rehberi</h1>
        <p>Buraya Pavo kurulum içeriğini yazacaksın...</p>
      `
    },
    'mizan-hizli-satis': {
      title: 'Mizan Hızlı Satış Kurulum Rehberi',
      description: 'Mizan hızlı satış yazılımı kurulum rehberi',
      category: 'Yazılım Kurulum',
      lastUpdate: '19 Eylül 2025',
      content: `
        <h1>Mizan Hızlı Satış Kurulum Rehberi</h1>
        <p>Buraya Mizan hızlı satış kurulum içeriğini yazacaksın...</p>
      `
    },
    'kasa-kurulum': {
      title: 'Kasa Kurulum Rehberi',
      description: 'Genel yazarkasa kurulum ve temel ayarlar rehberi',
      category: 'Genel Kurulum',
      lastUpdate: '19 Eylül 2025',
      content: `
        <h1>Kasa Kurulum Rehberi</h1>
        <p>Buraya genel kasa kurulum içeriğini yazacaksın...</p>
      `
    }
  };

  const guide = guideContents[params?.guide as string];

  if (!guide) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      guide: params?.guide,
      content: guide.content,
      frontMatter: {
        title: guide.title,
        description: guide.description,
        category: guide.category,
        lastUpdate: guide.lastUpdate,
      },
    },
  };
};