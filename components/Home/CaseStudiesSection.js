import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const caseStudies = [
  {
    image: '/images/portfolio/portfolio-img1.jpg',
    title: 'Customer Satisfaction for a Digital Marketing Agency',
    href: '/single-portfolio',
  },
  {
    image: '/images/portfolio/portfolio-img2.jpg',
    title: 'Return on Investment for Various Digital Marketing Strategies',
    href: '/single-portfolio',
  },
  {
    image: '/images/portfolio/portfolio-img3.jpg',
    title: 'Google Search Engine Marketing Case Study Analysis',
    href: '/single-portfolio',
  },
  {
    image: '/images/portfolio/portfolio-img4.jpg',
    title: 'Analysis of New Product Launch Using Google Double Click',
    href: '/single-portfolio',
  },
  {
    image: '/images/portfolio/portfolio-img5.jpg',
    title: 'Social Media Strategies for Online Shopping Cart',
    href: '/single-portfolio',
  },
];

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='flaticon-back'></i>",
    "<i class='flaticon-chevron'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const CaseStudiesSection = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="portfolio-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Case Studies</span>
          <h2>Check of Our Some Recent Works & Case Studies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        {display ? (
          <OwlCarousel
            className="portfolio-slides owl-carousel owl-theme"
            {...options}
          >
            {caseStudies.map(({ image, title, href }) => (
              <div key={title} className="single-portfolio-item">
                <Link href={href}>
                  <a className="image d-block">
                    <img src={image} alt="image" />
                  </a>
                </Link>

                <div className="content">
                  <h3>
                    <Link href={href}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <Link href={href}>
                    <a className="link-btn">
                      <i className="flaticon-next-button"></i>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
