import Head from 'next/head';

export default function SEO({ 
  title, 
  description, 
  keywords = [], 
  image = '/images/logo/logo2.png',
  url = 'https://scoverbimbel.com',
  type = 'website'
}) {
  const fullTitle = title ? `${title} | Scover Bimbel Malang` : 'Scover Bimbel - Bimbingan Belajar Terbaik di Malang';
  const fullDescription = description || 'Scover Bimbel Malang - Bimbingan belajar terpercaya dengan pengajar berkualitas. Program UTBK, SBMPTN, Kedinasan, TOEFL, dan Studi Luar Negeri.';
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`https://scoverbimbel.com${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Scover Bimbel Malang" />
      <meta property="og:locale" content="id_ID" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`https://scoverbimbel.com${image}`} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Scover Bimbel" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#003049" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="id" />
    </Head>
  );
}
