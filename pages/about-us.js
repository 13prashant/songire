import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import OurTeam from '../components/AboutUs/OurTeam';

const AboutUs = () => {
  return (
    <>
      <PageBanner pageTitle="About Us" />

      <AboutContent />

      <OurTeam />
    </>
  );
};

export default AboutUs;
