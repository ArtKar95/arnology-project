import React from "react";
import classes from "./Pricing.module.css";
import pricingFree from "../../../assets/images/pricing-free.png";
import pricingStarter from "../../../assets/images/pricing-starter.png";
import pricingBusiness from "../../../assets/images/pricing-business.png";
import pricingUltimate from "../../../assets/images/pricing-ultimate.png";

const Pricing = () => {
  return (
    <section id="pricing" className={classes.pricing}>
      <div className="container" data-aos="fade-up">
        <header className="sectionHeader">
          <h2>Pricing</h2>
          <p>Check our Pricing</p>
        </header>

        <div className="row gy-4" data-aos="fade-left">
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className={classes.box}>
              <h3 style={{ color: "#07d5c0" }}>Free Plan</h3>
              <div className={classes.price}>
                <sup>$</sup>0<span> / mo</span>
              </div>
              <img src={pricingFree} className="img-fluid" alt="" />
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className={classes.na}>Pharetra massa</li>
                <li className={classes.na}>Massa ultricies mi</li>
              </ul>
              <a href="/#" className={classes.btnBuy}>
                Buy Now
              </a>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className={classes.box}>
              <span className={classes.featured}>Featured</span>
              <h3 style={{ color: "#65c600" }}>Starter Plan</h3>
              <div className={classes.price}>
                <sup>$</sup>19<span> / mo</span>
              </div>
              <img src={pricingStarter} className="img-fluid" alt="" />
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className={classes.na}>Massa ultricies mi</li>
              </ul>
              <a href="/#" className={classes.btnBuy}>
                Buy Now
              </a>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className={classes.box}>
              <h3 style={{ color: "#ff901c" }}>Business Plan</h3>
              <div className={classes.price}>
                <sup>$</sup>29<span> / mo</span>
              </div>
              <img src={pricingBusiness} className="img-fluid" alt="" />
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <a href="/#" className={classes.btnBuy}>
                Buy Now
              </a>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className={classes.box}>
              <h3 style={{ color: "#ff0071" }}>Ultimate Plan</h3>
              <div className={classes.price}>
                <sup>$</sup>49<span> / mo</span>
              </div>
              <img src={pricingUltimate} className="img-fluid" alt="" />
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <a href="/#" className={classes.btnBuy}>
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
