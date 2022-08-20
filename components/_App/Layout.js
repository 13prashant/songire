import Navbar from './Navbar';
import Footer from './Footer';
import GoTop from './GoTop';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
