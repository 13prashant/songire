const team1 = [
  {
    name: 'Rahul Songire',
    designation: 'CEO',
    image: '/images/team/team-img1.jpg',
  },
  {
    name: 'Taylor Sopia',
    designation: 'Content Writer',
    image: '/images/team/team-img2.jpg',
  },
];

const team2 = [
  {
    name: 'Harry Steve',
    designation: 'Graphic Designer',
    image: '/images/team/team-img3.jpg',
  },
  {
    name: 'Alina Smith',
    designation: 'Web Developer',
    image: '/images/team/team-img4.jpg',
  },
  {
    name: 'Alina Smith',
    designation: 'Web Developer',
    image: '/images/team/team-img5.jpg',
  },
  {
    name: 'Alina Smith',
    designation: 'Web Developer',
    image: '/images/team/team-img6.jpg',
  },
];

const OurTeam = () => {
  return (
    <div className="team-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          {team1.map(({ name, designation, image }, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-box">
                <img src={image} alt="team-image" />

                <div className="content">
                  <h3>{name}</h3>
                  <span>{designation}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="section-title">
              <span className="sub-title">Our Team</span>
              <h2>We Help to Acheive Your Business Goal</h2>
            </div>
          </div>

          {team2.map(({ name, designation, image }, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-box">
                <img src={image} alt="team-image" />

                <div className="content">
                  <h3>{name}</h3>
                  <span>{designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
