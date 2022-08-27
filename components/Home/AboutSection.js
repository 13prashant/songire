import Link from 'next/link';
import {
  COMPLETED_PROJECTS,
  EXPERT_TEAM_MEMBERS,
  WORKING_HOURS_SPENT,
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
                <h2>It's Time to Grow Online</h2>
                <p>
                  Providing digital marketing services is our passion, and we're
                  passionate about helping businesses create a solid online
                  presence. Indeed, creating a robust online presence is no
                  longer a choice; it's mandatory. From ranking your website on
                  search engines to revamping your existing brand identity, we
                  can do it all for you. As a thriving digital marketing agency,
                  you won't get the same old-school strategy— you'll get a
                  well-created plan that fits your needs and goals.
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
                      <h3>{WORKING_HOURS_SPENT}</h3>
                      <p>Working hours were spent</p>
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
