import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className="container" data-aos="fade-up">
        <header className="sectionHeader">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className={classes.infoBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <h3>Address</h3>
                  <p>
                    A108 Adam Street,
                    <br />
                    New York, NY 535022
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={classes.infoBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <h3>Call Us</h3>
                  <p>
                    +1 5589 55488 55
                    <br />
                    +1 6678 254445 41
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={classes.infoBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                  <h3>Email Us</h3>
                  <p>
                    info@example.com
                    <br />
                    contact@example.com
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={classes.infoBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <h3>Open Hours</h3>
                  <p>
                    Monday - Friday
                    <br />
                    9:00AM - 05:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className={classes.phpEmailForm}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className={classes.loading}>Loading</div>
                  <div className={classes.errorMessage}></div>
                  <div className="sentMessage">
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
