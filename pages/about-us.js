import SongireSeo from '../components/_App/SongireSeo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import OurBrandStory from '../components/AboutUs/OurBrandStory';
import OurTeam from '../components/AboutUs/OurTeam';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';

const AboutUs = () => {
  return (
    <>
      <SongireSeo seoTitle="Songire | About Us" seoUrl="about-us" />

      <PageBanner pageTitle="About Us" />

      <AboutContent />

      <OurBrandStory />

      {/* <OurTeam /> */}

      <StartProjectWithUs />
    </>
  );
};

export default AboutUs;
