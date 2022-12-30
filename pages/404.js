import Link from 'next/link';
import PageBanner from '../components/Common/PageBanner';

const Custom404 = () => {
  return (
    <>
      <PageBanner pageTitle="Page Not Found" />

      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <p>
              "Oops, looks like you've taken a wrong turn. This page doesn't
              exist, but don't worry, we can still help with your digital
              marketing needs.{' '}
              <Link href="/contact-us">
                <a>Contact us</a>
              </Link>{' '}
              to get started!"
            </p>
            <Link href="/">
              <a className="default-btn">Back to Homepage</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
