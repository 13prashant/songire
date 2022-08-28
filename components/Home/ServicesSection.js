import Link from 'next/link';

const services = [
  {
    iconClass: 'flaticon-megaphone',
    href: '/single-services',
    title: 'SEO Services',
    description:
      'Our team will improve your organic traffic and search engine rankings by utilizing cutting-edge SEO technologies supported by the best digital marketing strategies.',
  },
  {
    iconClass: 'flaticon-keywords',
    href: '/single-services',
    title: 'Google Ads',
    description:
      'Our Google ads services allow you to promote your businesses, sell products and services, drive sales, generate leads & increase brand awareness with Google ads.',
  },
  {
    iconClass: 'flaticon-content-management',
    href: '/single-services',
    title: 'Content Writing',
    description:
      'From creating a content marketing strategy to curating unique and engaging content, our content writers make content keeping your brand voice and target audience in mind.',
  },
  {
    iconClass: 'flaticon-startup',
    href: '/single-services',
    title: 'Social Media Marketing',
    description:
      'Our social media marketing service helps you put strategic social media content and social ads in front of users, giving your business valuable, extensive, and targeted exposure.',
  },
  {
    iconClass: 'flaticon-ppc',
    href: '/single-services',
    title: 'E-Commerce Account Management',
    description:
      'From product description writing to customer queries, our e-commerce account management services will help your business generate ROI and create a positive brand identity.',
  },
  {
    iconClass: 'flaticon-competitor',
    href: '/single-services',
    title: 'Email Marketing',
    description:
      'Our email marketing services will help you stay connected with your potential customers by gradually "dripping" helpful information, like brand updates, product teasers, and much more.',
  },
  {
    iconClass: 'flaticon-keywords',
    href: '/single-services',
    title: 'Website Development',
    description:
      'We offer a range of intuitive and user-friendly website development services to help boost your brand identity and convert your visitors into paying customers.',
  },
];

const ServicesSection = () => {
  return (
    <div className="services-area bg-f9f9f9 ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Services</span>
          <h2>Our Range of Digital Marketing Services</h2>
          <p>
            As a trusted digital marketing agency, we offer many services at a
            fraction of the cost. Browse our range of services:
          </p>
        </div>

        <div className="row">
          {services.map(({ iconClass, href, title, description }) => (
            <div key={title} className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className={iconClass}></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                  <Link href={href}>
                    <a>{title}</a>
                  </Link>
                </h3>
                <p>{description}</p>

                <Link href={href}>
                  <a className="learn-more-btn">
                    <i className="left-icon flaticon-next-button"></i>
                    Learn More
                    <i className="right-icon flaticon-next-button"></i>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
