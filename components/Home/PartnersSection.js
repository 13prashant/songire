const partners = [
  {
    image: '/images/partner/partner-img1.png',
  },
  {
    image: '/images/partner/partner-img2.png',
  },
  {
    image: '/images/partner/partner-img3.png',
  },
  {
    image: '/images/partner/partner-img4.png',
  },
  {
    image: '/images/partner/partner-img5.png',
  },
  {
    image: '/images/partner/partner-img6.png',
  },
];

const PartnersSection = () => {
  return (
    <div className="partner-area bg-f9f9f9 ptb-70">
      <div className="container">
        <div className="row align-items-center justify-content-md-center">
          {partners.map(({ image }, index) => (
            <div key={index} className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="single-partner-item">
                <img src={image} alt="image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
