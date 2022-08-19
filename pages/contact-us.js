import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/ContactUs/ContactForm';
import {
  OFFICE_ADDRESS,
  EMAIL_ADDRESS,
  MOBILE_NUMBER,
  ADDRESS_GOOGLE_MAP,
} from '../utils/AppConfig';

const ContactUs = () => {
  return (
    <>
      <PageBanner pageTitle="Contact Us" />

      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-map"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>
                <h3>Our Address</h3>
                <p>{OFFICE_ADDRESS}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3>Contact</h3>
                <p>
                  Mobile:{' '}
                  <a href={`tel:+91${MOBILE_NUMBER}`}>+91 {MOBILE_NUMBER}</a>
                </p>
                <p>
                  E-mail:{' '}
                  <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <h3>Hours of Operation</h3>
                <p>Monday - Friday: 09:00 - 20:00</p>
                <p>Sunday & Saturday: 10:30 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />

      <div id="map">
        <iframe src={ADDRESS_GOOGLE_MAP}></iframe>
      </div>
    </>
  );
};

export default ContactUs;
