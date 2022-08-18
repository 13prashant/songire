import Link from 'next/link';

const MainBanner = () => {
  return (
    <>
      <div className="home-wrapper-area ptb-100">
        <div className="container">
          <div className="single-banner-item">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="banner-content">
                  <span className="sub-title">Seo Marketing</span>
                  <h1>We Provide Best SEO Marketing Solutions</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>

                  <div className="btn-box">
                    <div className="d-flex align-items-center">
                      <Link href="/contact-us">
                        <a className="default-btn">Get Started</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="banner-image">
                  <img src="/images/banner-img3.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape2">
          <img src="/images/shape/shape2.png" alt="image" />
        </div>
        <div className="shape3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <img src="/images/shape/shape4.png" alt="image" />
        </div>
        <div className="shape5">
          <img src="/images/shape/shape5.png" alt="image" />
        </div>
        <div className="shape6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="shape7">
          <img src="/images/shape/shape7.png" alt="image" />
        </div>
        <div className="shape8">
          <img src="/images/shape/shape8.png" alt="image" />
        </div>
        <div className="shape13">
          <img src="/images/shape/shape13.png" alt="image" />
        </div>
        <div className="shape14">
          <img src="/images/shape/shape14.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
