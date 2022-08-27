import Link from 'next/link';

const StartProjectWithUs = () => {
  return (
    <div className="project-start-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="project-start-image">
              <img src="/images/project-start1.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="project-start-content">
              <span className="sub-title">Get Started</span>
              <h2>
                Take your business online with our 360-degree digital marketing
                solutions.
              </h2>
              <p>
                You only need to get in touch with us and let us take care of
                all your needs because we are a skilled digital agency offering
                answers to your online needs. From consultation to planning to
                execution, our team will never hesitate to go that extra mile
                for you.
              </p>
              <p>
                As an agency offering a full suite of digital marketing
                solutions, we have a team with technology-nacked creativity. Our
                team is small enough to provide dedicated time and attention to
                our clients and large enough to deliver comprehensive solutions.
                Simply put, we don't use a cookie-cutter approach for our
                customers. Our team crafts tailored digital solutions for each
                client as soon as they are onboarded.
              </p>

              <Link href="/contact-us">
                <a className="default-btn">Get Started</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="shape2">
        <img src="/images/shape/shape2.png" alt="image" />
      </div>
      <div className="shape3">
        <img src="/images/shape/shape3.png" alt="image" />
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
      <div className="shape13">
        <img src="/images/shape/shape13.png" alt="image" />
      </div> */}
    </div>
  );
};

export default StartProjectWithUs;
