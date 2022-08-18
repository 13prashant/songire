import Link from 'next/link';
import { navItems } from './Navbar';
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  OFFICE_ADDRESS,
  EMAIL_ADDRESS,
  MOBILE_NUMBER,
  APP_NAME,
} from '../../utils/AppConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <Link href="/">
                <a className="logo">
                  <h3 style={{ color: 'white' }}>LOGO</h3>
                </a>
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <ul className="social-link">
                <li>
                  <a href={FACEBOOK_LINK} className="d-block" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href={INSTAGRAM_LINK} className="d-block" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>
              <ul className="footer-links-list">
                {navItems.map(({ link, href }) => (
                  <li key={link}>
                    <Link href={href}>
                      <a>{link}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact Us</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  {OFFICE_ADDRESS}
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                </li>
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href={`tel:+91${MOBILE_NUMBER}`}>+91 {MOBILE_NUMBER}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                <i className="bx bx-copyright"></i> {currentYear}{' '}
                <strong>{APP_NAME}</strong>
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="shape16">
        <img src="/images/shape/shape16.png" alt="image" />
      </div>
    </footer>
  );
};

export default Footer;
