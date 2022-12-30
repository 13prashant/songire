import Link from 'next/link';
import PageBanner from '../components/Common/PageBanner';

const ThankYou = () => {
  return (
    <>
      <PageBanner pageTitle="Thank You" />

      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <p>
              Thank you for submitting the contact form! Your message has been
              received and we will get back to you as soon as possible. Thank
              you for choosing us as your digital marketing partner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
