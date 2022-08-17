import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import GoTop from './GoTop';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Songire - An SEO & Digital Marketing Company</title>
      </Head>

      <Navbar />

      {children}

      <Footer />

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
