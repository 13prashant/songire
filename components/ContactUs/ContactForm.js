import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <h2>Get in Touch</h2>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="contact-image" data-tilt>
              <img src="/images/contact.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control"
                        {...register('name', { required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        {errors.name && 'Name is required.'}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your email address"
                        className="form-control"
                        {...register('email', {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        {errors.email && 'Email is required.'}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your phone number"
                        className="form-control"
                        {...register('number', { required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        {errors.number && 'Number is required.'}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Subject"
                        className="form-control"
                        {...register('subject', { required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        {errors.subject && 'Subject is required.'}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="form-control"
                        {...register('text', { required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        {errors.text && 'Text body is required.'}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="default-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
