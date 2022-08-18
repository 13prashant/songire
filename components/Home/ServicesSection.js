import Link from 'next/link';

const services = [
  {
    iconClass: 'flaticon-megaphone',
    href: '/single-services',
    title: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    iconClass: 'flaticon-keywords',
    href: '/single-services',
    title: 'Google Ads',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    iconClass: 'flaticon-content-management',
    href: '/single-services',
    title: 'Content Writing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    iconClass: 'flaticon-startup',
    href: '/single-services',
    title: 'Social Media Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    iconClass: 'flaticon-ppc',
    href: '/single-services',
    title: 'E-Commerce Account Management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    iconClass: 'flaticon-competitor',
    href: '/single-services',
    title: 'Email Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    iconClass: 'flaticon-keywords',
    href: '/single-services',
    title: 'Website Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
];

const ServicesSection = () => {
  return (
    <div className="services-area bg-f9f9f9 ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Services</span>
          <h2>Let’s Check Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
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
