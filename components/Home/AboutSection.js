import Link from 'next/link';
import {
  COMPLETED_PROJECTS,
  EXPERT_TEAM_MEMBERS,
  YEARS_OF_EXPERIENCE,
} from '../../utils/AppConfig';

const AboutSection = () => {
  return (
    <div className="about-area ptb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src="/images/about-img1.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">
                <span className="sub-title">About Us</span>
                <h2>Enjoy Full-Service Digital Marketing Expertise</h2>
                <p>
                  From content writing to SEO to email marketing, we offer
                  everything you need to make your digital presence. Our digital
                  marketing services are more than just ranking your website on
                  the top of search engine result pages. Along with making your
                  website rank on top of SERPs, we focus on converting your
                  website visitors into paying customers.
                </p>

                <ul className="funfacts-list">
                  <li>
                    <div className="list">
                      <i className="flaticon-menu-1"></i>
                      <h3>{COMPLETED_PROJECTS}</h3>
                      <p>Completed projects</p>
                    </div>
                  </li>
                  <li>
                    <div className="list">
                      <i className="flaticon-web-settings"></i>
                      <h3>{YEARS_OF_EXPERIENCE}</h3>
                      <p>Years of experience</p>
                    </div>
                  </li>
                  <li>
                    <div className="list">
                      <i className="flaticon-conversation"></i>
                      <h3>{EXPERT_TEAM_MEMBERS}</h3>
                      <p>Expert team members</p>
                    </div>
                  </li>
                </ul>
                <Link href="/about-us">
                  <a className="default-btn">More About Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
