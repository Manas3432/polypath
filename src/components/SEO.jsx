import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image = '/og-image.png' }) {
  const fullTitle = title ? `${title} | Polypath` : 'Polypath — Language Learning Roadmaps';
  const url = 'https://polypath-delta.vercel.app';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

