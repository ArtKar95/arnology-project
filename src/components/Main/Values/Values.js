import React from "react";
import classes from "./Values.module.css";
import values_1 from "../../../assets/images/values-1.png";
import values_2 from "../../../assets/images/values-2.png";
import values_3 from "../../../assets/images/values-3.png";

const Values = () => {
  return (
    <div id="values" className={classes.values}>
      <section id="values" className={classes.values}>
        <div className="container" data-aos="fade-up">
          <header className="sectionHeader">
            <h2>Our Values</h2>
            <p>Odit est perspiciatis laborum et dicta</p>
          </header>

          <div className="row">
            <div className="col-lg-4">
              <div
                className={classes.box}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={values_1} className="img-fluid" alt="" />
                <h3>Ad cupiditate sed est odio</h3>
                <p>
                  Eum ad dolor et. Autem aut fugiat debitis voluptatem
                  consequuntur sit. Et veritatis id.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div
                className={classes.box}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img src={values_2} className="img-fluid" alt="" />
                <h3>Voluptatem voluptatum alias</h3>
                <p>
                  Repudiandae amet nihil natus in distinctio suscipit id.
                  Doloremque ducimus ea sit non.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div
                className={classes.box}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img src={values_3} className="img-fluid" alt="" />
                <h3>Fugit cupiditate alias nobis.</h3>
                <p>
                  Quam rem vitae est autem molestias explicabo debitis sint.
                  Vero aliquid quidem commodi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;
