import { useEffect } from 'react';
import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/boxicons.min.css';
import '../public/css/flaticon.css';
// import 'react-accessible-accordion/dist/fancy-example.css';
// import '../node_modules/react-modal-video/css/modal-video.min.css';
// import 'react-image-lightbox/style.css';
// import 'react-tabs/style/react-tabs.css';
import '../public/css/style.scss';
import '../public/css/responsive.scss';

import Layout from '../components/_App/Layout';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
