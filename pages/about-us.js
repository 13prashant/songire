import SongireSeo from '../components/_App/SongireSeo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import OurTeam from '../components/AboutUs/OurTeam';

const AboutUs = () => {
  return (
    <>
      <SongireSeo seoTitle="Songire | About Us" seoUrl="about-us" />

      <PageBanner pageTitle="About Us" />

      <AboutContent />

      <OurTeam />
    </>
  );
};

export default AboutUs;
