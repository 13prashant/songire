import Link from 'next/link';
import PageBanner from '../components/Common/PageBanner';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';

const services = [
  {
    id: 'seo',
    title: 'SEO',
    subTitle: 'Lorem ipsum dolor sit',
    image: '/images/services/services-img1.png',
    features: [
      {
        title: 'Local SEO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus perferendis nemo quia. Voluptatem exercitationem enim itaque soluta, ipsa quasi libero!',
      },
      {
        title: 'E-Commerce SEO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus perferendis nemo quia. Voluptatem exercitationem enim itaque soluta, ipsa quasi libero!',
      },
      {
        title: 'Real Estate SEO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus perferendis nemo quia. Voluptatem exercitationem enim itaque soluta, ipsa quasi libero!',
      },
    ],
  },
  {
    id: 'google-ads',
    title: 'GOOGLE ADS',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus perferendis nemo quia. Voluptatem exercitationem enim itaque soluta, ipsa quasi libero!',
    image: '/images/services/services-img2.png',
    checklist: [
      'Google Search Ads',
      'Google Display Ads',
      'Google Retargetting',
      'Google Shopping Feed',
    ],
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus perferendis nemo quia. Voluptatem exercitationem enim itaque soluta, ipsa quasi libero!',
    image: '/images/services/services-img2.png',
    checklist: [
      'Diamond Jewelry',
      'Health Services',
      'Cleaning Services',
      'Real Estate',
    ],
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus perferendis nemo quia. Voluptatem exercitationem enim itaque soluta, ipsa quasi libero!',
    image: '/images/services/services-img2.png',
    checklist: [
      'Facebook/Instagram Lead Campaign',
      'Brand Awareness',
      'Engagement Campaign',
      'App Download Leads',
      'Lead Generation',
    ],
  },
  {
    id: 'e-commerce-account-management',
    title: 'E-Commerce Account Management',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus perferendis nemo quia. Voluptatem exercitationem enim itaque soluta, ipsa quasi libero!',
    image: '/images/services/services-img2.png',
    checklist: ['Amazon', 'Flipkart', 'Inventory Management'],
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    subTitle: 'Lorem ipsum dolor sit',
    image: '/images/services/services-img1.png',
    features: [
      {
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus perferendis nemo quia. Voluptatem exercitationem enim itaque soluta, ipsa quasi libero!',
      },
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    subTitle: 'Lorem ipsum dolor sit',
    image: '/images/services/services-img1.png',
    features: [
      {
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus perferendis nemo quia. Voluptatem exercitationem enim itaque soluta, ipsa quasi libero!',
      },
    ],
  },
];

const Services = () => {
  return (
    <>
      <PageBanner pageTitle="Services" />
      <div className="overview-area ptb-100">
        <div className="container">
          {services.map(
            ({
              id,
              title,
              subTitle,
              description,
              image,
              features,
              checklist,
            }) => (
              <div key={id} id={id} className="overview-box">
                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">{title}</span>
                    <h2>{subTitle}</h2>
                    <p>{description}</p>
                    {features &&
                      features.map(({ title, description }) => (
                        <div key={title} className="features-text">
                          <h4>{title}</h4>
                          <p>{description}</p>
                        </div>
                      ))}
                    {id === 'seo' && (
                      <Link href="/seo">
                        <a className="default-btn">Learn More</a>
                      </Link>
                    )}

                    {checklist && (
                      <ul className="features-list">
                        {checklist.map((item) => (
                          <li key={item}>
                            <span>
                              <i className="bx bx-check"></i> {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="overview-image">
                  <div className="image">
                    <img src={image} alt="image" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <StartProjectWithUs />
    </>
  );
};

export default Services;
