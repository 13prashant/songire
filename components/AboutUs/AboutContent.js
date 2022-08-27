import {
  COMPLETED_PROJECTS,
  EXPERT_TEAM_MEMBERS,
  WORKING_HOURS_SPENT,
} from '../../utils/AppConfig';

const AboutContent = () => {
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
                <span className="sub-title">Who We Are</span>
                <h6>At Songire,</h6>
                <p>
                  we have astute minds, writers, dreamers, achievers, marketers,
                  and brand strategists, all working around one common goal: to
                  deliver digital solutions that help businesses create a solid
                  online presence.
                </p>
                <h6>A Small Agency Delivering Promising Results</h6>
                <p>
                  We don't deliver "projects" because we love what we do. We are
                  never in a hurry to finish one project and jump on to another.
                  We provide outstanding results while having fun while working.
                  <em>
                    <strong>
                      Our clients have spent more than INR 50,00,000 on ad
                      campaigns, resulting in excellent ad pay returns.
                    </strong>
                  </em>{' '}
                  As an experienced digital marketing agency, spending money on
                  techniques that don't produce quantifiable outcomes is not
                  something we do. Join us today to use our specialized digital
                  marketing solutions to achieve your market dominance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
