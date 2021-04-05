// import Recat from "react";
import classes from "./Section.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import heroImg from "../../assets/images/hero-img.png";

const Section = () => {
  return (
    <section id="hero" className={`${classes.hero} d-flex align-items-center`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              We offer modern solutions for growing your business
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              We are team of talented designers making websites with Bootstrap
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a
                  href="#about"
                  className={`${classes.btnGetStarted} scrollto d-inline-flex align-items-center justify-content-center align-self-center`}
                >
                  <span>Get Started</span>
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className={classes.icon}
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${classes.heroImg} col-lg-6 `}
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={heroImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
