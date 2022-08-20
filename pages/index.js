import SongireSeo from '../components/_App/SongireSeo';
import MainBanner from '../components/Home/MainBanner';
import AboutSection from '../components/Home/AboutSection';
import ServicesSection from '../components/Home/ServicesSection';
import FeedbackSection from '../components/Home/FeedbackSection';
import CaseStudiesSection from '../components/Home/CaseStudiesSection';
import PartnersSection from '../components/Home/PartnersSection';

export default function Home() {
  return (
    <>
      <SongireSeo />
      <MainBanner />
      <AboutSection />
      <ServicesSection />
      <FeedbackSection />
      <PartnersSection />
      <CaseStudiesSection />
    </>
  );
}
