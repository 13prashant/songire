import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { EMAIL_ADDRESS } from '../../utils/AppConfig';

const ContactForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsPending(true);

      await fetch(`https://formsubmit.co/ajax/${EMAIL_ADDRESS}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          Phone: data.phone,
          subject: data.subject,
          message: data.message,
        }),
      });

      router.push('/thank-you');

      setIsPending(false);
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: 'Oops!',
        text: `Something went wrong while trying to send your message. Please try again later or contact us directly at ${EMAIL_ADDRESS} for assistance.`,
        icon: 'error',
        confirmButtonText: 'Try again',
      });

      setIsPending(false);
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
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        {errors.email && 'Put a valid email.'}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your phone number"
                        className="form-control"
                        {...register('phone', {
                          required: true,
                          pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                        })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        {errors.phone && 'Put a valid phone number.'}
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
                        {...register('message', { required: true })}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        {errors.message && 'Message is required.'}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button
                      type="submit"
                      className="default-btn"
                      disabled={isPending}
                    >
                      {isPending ? 'Sending...' : 'Send Message'}
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
