import React from "react";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <section id="services" className={classes.services}>
      <div className="container" data-aos="fade-up">
        <header className="sectionHeader">
          <h2>Services</h2>
          <p>Veritatis et dolores facere numquam et praesentium</p>
        </header>

        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={`${classes.serviceBox} ${classes.blue}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${classes.icon} `}
              >
                <path d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17h5.161L14 19.298L15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z" />
              </svg>
              <h3>Nesciunt Mete</h3>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
              <a href="/#" className={classes.readMore}>
                <span>Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className={classes.arrowRightIcon}
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={`${classes.serviceBox} ${classes.orange}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${classes.icon} `}
              >
                <path d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17h5.161L14 19.298L15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z" />
              </svg>
              <h3>Eosle Commodi</h3>
              <p>
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem.
              </p>
              <a href="/#" className={classes.readMore}>
                <span>Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={classes.arrowRightIcon}
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className={`${classes.serviceBox} ${classes.green}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${classes.icon}  `}
              >
                <path d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17h5.161L14 19.298L15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z" />
              </svg>
              <h3>Ledo Markt</h3>
              <p>
                Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
                ea aut. Vel qui id voluptas adipisci eos earum corrupti.
              </p>
              <a href="/#" className={classes.readMore}>
                <span>Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={classes.arrowRightIcon}
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className={`${classes.serviceBox} ${classes.red}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${classes.icon} `}
              >
                <path d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17h5.161L14 19.298L15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z" />
              </svg>
              <h3>Asperiores Commodi</h3>
              <p>
                Non et temporibus minus omnis sed dolor esse consequatur.
                Cupiditate sed error ea fuga sit provident adipisci neque.
              </p>
              <a href="/#" className={classes.readMore}>
                <span>Read More</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={classes.arrowRightIcon}
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className={`${classes.serviceBox} ${classes.purple}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${classes.icon} `}
              >
                <path d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17h5.161L14 19.298L15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z" />
              </svg>
              <h3>Velit Doloremque.</h3>
              <p>
                Cumque et suscipit saepe. Est maiores autem enim facilis ut aut
                ipsam corporis aut. Sed animi at autem alias eius labore.
              </p>
              <a href="/#" className={classes.readMore}>
                <span>Read More</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={classes.arrowRightIcon}
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className={`${classes.serviceBox} ${classes.pink}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${classes.icon}`}
              >
                <path d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17h5.161L14 19.298L15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z" />
              </svg>
              <h3>Dolori Architecto</h3>
              <p>
                Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque
                non et debitis iure. Corrupti recusandae ducimus enim.
              </p>
              <a href="/#" className={classes.readMore}>
                <span>Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={classes.arrowRightIcon}
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
