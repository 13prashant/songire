import Head from 'next/head';
import { APP_DOMAIN } from '../../utils/AppConfig';

const SongireSeo = ({
  seoTitle = 'Songire - An SEO & Digital Marketing Company',
  seoDescription = 'An SEO & Digital Marketing Company in Surat',
  seoUrl,
  seoImage = '',
}) => {
  seoUrl = seoUrl ? `${APP_DOMAIN}${seoUrl}` : APP_DOMAIN;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={seoDescription} />
      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={seoUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content="songire" />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="450" />
    </Head>
  );
};

export default SongireSeo;
