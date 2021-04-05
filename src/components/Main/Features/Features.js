import React from "react";
import classes from "./Features.module.css";
import features_1 from "../../../assets/images/features.png";
import features_2 from "../../../assets/images/features-2.png";
import features_3 from "../../../assets/images/features-3.png";

const Features = () => {
  return (
    <section id="features" className={classes.features}>
      <div className="container" data-aos="fade-up">
        <header className="sectionHeader">
          <h2>Features</h2>
          <p>Laboriosam et omnis fuga quis dolor direda fara</p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            <img src={features_1} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">
              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <div
                  className={`${classes.featureBox} d-flex align-items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h3>Eos aspernatur rem</h3>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <div
                  className={`${classes.featureBox} d-flex align-items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h3>Facilis neque ipsa</h3>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <div
                  className={`${classes.featureBox} d-flex align-items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h3>Volup amet voluptas</h3>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="500"
              >
                <div
                  className={`${classes.featureBox} d-flex align-items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h3>Rerum omnis sint</h3>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="600"
              >
                <div
                  className={`${classes.featureBox} d-flex align-items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h3>Alias possimus</h3>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="zoom-out"
                data-aos-delay="700"
              >
                <div
                  className={`${classes.featureBox} d-flex align-items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h3>Repellendus mollitia</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${classes.fetureTabs} row`} data-aos="fade-up">
          <div className="col-lg-6">
            <h3>
              Neque officiis dolore maiores et exercitationem quae est seda
              lidera pat claero
            </h3>

            <ul className={`${classes.navPills} nav  mb-3`}>
              <li>
                <a
                  className={`${classes.navLink} ${classes.active} active`}
                  data-bs-toggle="pill"
                  href="#tab1"
                >
                  Saepe fuga
                </a>
              </li>
              <li>
                <a
                  className={classes.navLink}
                  data-bs-toggle="pill"
                  href="#tab2"
                >
                  Voluptates
                </a>
              </li>
              <li>
                <a
                  className={classes.navLink}
                  data-bs-toggle="pill"
                  href="#tab3"
                >
                  Corrupti
                </a>
              </li>
            </ul>

            <div className={classes.tabContent}>
              <div className="tab-pane fade show" id="tab1">
                <p>
                  Consequuntur inventore voluptates consequatur aut vel et. Eos
                  doloribus expedita. Sapiente atque consequatur minima nihil
                  quae aspernatur quo suscipit voluptatem.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <svg
                    width="26"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>

                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>
                  Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                  Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                  et.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <svg
                    width="26"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>
                  Non quod totam minus repellendus autem sint velit. Rerum
                  debitis facere soluta tenetur. Iure molestiae assumenda sunt
                  qui inventore eligendi voluptates nisi at. Dolorem quo
                  tempora. Quia et perferendis.
                </p>
              </div>
              {/* <div className="tab-pane fade show" id="tab2">
                <p>
                  Consequuntur inventore voluptates consequatur aut vel et. Eos
                  doloribus expedita. Sapiente atque consequatur minima nihil
                  quae aspernatur quo suscipit voluptatem.
                </p>
                <div className="d-flex align-items-center mb-2">
                                    <svg
                    width="26"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>
                  Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                  Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                  et.
                </p>
                <div className="d-flex align-items-center mb-2">
                                    <svg
                    width="26"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>
                  Non quod totam minus repellendus autem sint velit. Rerum
                  debitis facere soluta tenetur. Iure molestiae assumenda sunt
                  qui inventore eligendi voluptates nisi at. Dolorem quo
                  tempora. Quia et perferendis.
                </p>
              </div>
              <div className="tab-pane fade show" id="tab3">
                <p>
                  Consequuntur inventore voluptates consequatur aut vel et. Eos
                  doloribus expedita. Sapiente atque consequatur minima nihil
                  quae aspernatur quo suscipit voluptatem.
                </p>
                <div className="d-flex align-items-center mb-2">
                                    <svg
                    width="26"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>
                  Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                  Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                  et.
                </p>
                <div className="d-flex align-items-center mb-2">
                                    <svg
                    width="26"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={classes.icon}
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>
                  Non quod totam minus repellendus autem sint velit. Rerum
                  debitis facere soluta tenetur. Iure molestiae assumenda sunt
                  qui inventore eligendi voluptates nisi at. Dolorem quo
                  tempora. Quia et perferendis.
                </p>
              </div> */}
            </div>
          </div>

          <div className="col-lg-6">
            <img src={features_2} className="img-fluid" alt="" />
          </div>
        </div>

        <div className={`${classes.featureIcons} row`} data-aos="fade-up">
          <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

          <div className="row">
            <div
              className="col-xl-4 text-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src={features_3} className="img-fluid p-4" alt="" />
            </div>

            <div className={`${classes.content} col-xl-8 d-flex`}>
              <div className="row align-self-center gy-4">
                <div
                  className={`${classes.iconBox} col-md-6`}
                  data-aos="fade-up"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={classes.boxIcon}
                  >
                    <path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999l-4.293 4.292l-1.414-1.414L13 7.586l3 2.999l4.293-4.292z" />
                  </svg>
                  <div>
                    <h4>Corporis voluptates sit</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>

                <div
                  className={`${classes.iconBox} col-md-6`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={classes.boxIcon}
                  >
                    <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13L2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7L12 10.668L18.113 7L12 3.332z" />
                  </svg>
                  <div>
                    <h4>Ullamco laboris nisi</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>

                <div
                  className={`${classes.iconBox} col-md-6`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={classes.boxIcon}
                  >
                    <path d="M9 5v6.273H7V5H5v9h14V5H9zm11 11H4v2h16v-2zM3 14V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5h1z" />
                  </svg>
                  <div>
                    <h4>Labore consequatur</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>

                <div
                  className={`${classes.iconBox} col-md-6`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={classes.boxIcon}
                  >
                    <path d="M15.199 9.945a2.6 2.6 0 0 1-.79-1.551l-.403-3.083l-2.73 1.486a2.6 2.6 0 0 1-1.72.273L6.5 6.5l.57 3.056a2.6 2.6 0 0 1-.273 1.72l-1.486 2.73l3.083.403a2.6 2.6 0 0 1 1.55.79l2.138 2.257l1.336-2.807a2.6 2.6 0 0 1 1.23-1.231l2.808-1.336l-2.257-2.137zm.025 5.563l-2.213 4.65a.6.6 0 0 1-.977.155l-3.542-3.739a.6.6 0 0 0-.357-.182l-5.107-.668a.6.6 0 0 1-.449-.881l2.462-4.524a.6.6 0 0 0 .062-.396L4.16 4.86a.6.6 0 0 1 .7-.7l5.063.943a.6.6 0 0 0 .396-.062l4.524-2.462a.6.6 0 0 1 .881.45l.668 5.106a.6.6 0 0 0 .182.357l3.739 3.542a.6.6 0 0 1-.155.977l-4.65 2.213a.6.6 0 0 0-.284.284zm.797 1.927l1.414-1.414l4.243 4.242l-1.415 1.415l-4.242-4.243z" />
                  </svg>
                  <div>
                    <h4>Beatae veritatis</h4>
                    <p>
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
                    </p>
                  </div>
                </div>

                <div
                  className={`${classes.iconBox} col-md-6`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={classes.boxIcon}
                  >
                    <path d="M10 8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 1 1 10 6.5V8zM8 8V6.5A1.5 1.5 0 1 0 6.5 8H8zm0 8H6.5A1.5 1.5 0 1 0 8 17.5V16zm8-8h1.5A1.5 1.5 0 1 0 16 6.5V8zm0 8v1.5a1.5 1.5 0 1 0 1.5-1.5H16zm-6-6v4h4v-4h-4z" />
                  </svg>
                  <div>
                    <h4>Molestiae dolor</h4>
                    <p>
                      Et fuga et deserunt et enim. Dolorem architecto ratione
                      tensa raptor marte
                    </p>
                  </div>
                </div>

                <div
                  className={`${classes.iconBox} col-md-6`}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={classes.boxIcon}
                  >
                    <path d="M12.506 3.623l-1.023 1.772c-2.91-.879-5.514-.45-6.411 1.105c-1.178 2.04.79 5.652 4.678 7.897s8 2.142 9.178.103c.898-1.555-.033-4.024-2.249-6.105l1.023-1.772c3.082 2.709 4.463 6.27 2.958 8.877c-1.86 3.222-7.189 3.355-11.91.63C4.029 13.402 1.48 8.721 3.34 5.5c1.505-2.607 5.28-3.192 9.166-1.877zm3.378-1.85l1.732 1l-5 8.66l-1.732-1l5-8.66zM6.732 20H17v2H5.017a.995.995 0 0 1-.883-.5a1.005 1.005 0 0 1 0-1l2.25-3.897l1.732 1L6.732 20z" />
                  </svg>
                  <div>
                    <h4>Explicabo consectetur</h4>
                    <p>
                      Est autem dicta beatae suscipit. Sint veritatis et sit
                      quasi ab aut inventore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
