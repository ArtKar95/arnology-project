import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import portfolio_1 from "../../../assets/images/portfolio/portfolio-1.jpg";
import portfolio_2 from "../../../assets/images/portfolio/portfolio-2.jpg";
import portfolio_3 from "../../../assets/images/portfolio/portfolio-3.jpg";
import portfolio_4 from "../../../assets/images/portfolio/portfolio-4.jpg";
import portfolio_5 from "../../../assets/images/portfolio/portfolio-5.jpg";
import portfolio_6 from "../../../assets/images/portfolio/portfolio-6.jpg";
import portfolio_7 from "../../../assets/images/portfolio/portfolio-7.jpg";
import portfolio_8 from "../../../assets/images/portfolio/portfolio-8.jpg";
import portfolio_9 from "../../../assets/images/portfolio/portfolio-9.jpg";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Isotope from "isotope-layout";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  const portfolios = [
    {
      title: "App 1",
      type: "APP",
      image: portfolio_1,
    },
    {
      title: "Web 3",
      type: "WEB",
      image: portfolio_2,
    },
    {
      title: "App 2",
      type: "APP",
      image: portfolio_3,
    },
    {
      title: "Card 2",
      type: "CARD",
      image: portfolio_4,
    },
    {
      title: "Web 2",
      type: "WEB",
      image: portfolio_5,
    },
    {
      title: "App 3",
      type: "APP",
      image: portfolio_6,
    },
    {
      title: "Card 1",
      type: "CARD",
      image: portfolio_7,
    },
    {
      title: "Card 3",
      type: "CARD",
      image: portfolio_8,
    },
    {
      title: "Web 3",
      type: "WEB",
      image: portfolio_9,
    },
  ];

  const [type, setType] = useState("*");

  const [show, setShow] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  const images = [
    portfolio_1,
    portfolio_2,
    portfolio_3,
    portfolio_4,
    portfolio_5,
    portfolio_6,
    portfolio_7,
    portfolio_8,
    portfolio_9,
  ];

  const isotope = React.useRef();

  React.useEffect(() => {
    isotope.current = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });
    if (isotope.current.destory) {
      return () => isotope.current.destory();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      type === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${type}` });
    }, 300);
  }, [type]);

  const handleFilterKeyChange = (key) => () => setType(key);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <header className="sectionHeader">
          <h2>Portfolio</h2>
          <p>Check our latest work</p>
        </header>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolioFilters" className="portfolio-links">
              <li
                onClick={handleFilterKeyChange("*")}
                className={type === "*" ? "filter-active" : ""}
              >
                All
              </li>
              <li
                data-filter=".filter-app"
                onClick={handleFilterKeyChange("APP")}
                className={type === "APP" ? "filter-active" : ""}
              >
                App
              </li>
              <li
                data-filter=".filter-card"
                onClick={handleFilterKeyChange("CARD")}
                className={type === "CARD" ? "filter-active" : ""}
              >
                Card
              </li>
              <li
                data-filter=".filter-web"
                onClick={handleFilterKeyChange("WEB")}
                className={type === "WEB" ? "filter-active" : ""}
              >
                Web
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row gy-4 portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {portfolios.map((portfolio, index) => {
            return (
              <div
                key={portfolio.title + portfolio.type + index}
                className={`col-lg-4 col-md-6 portfolio-item ${portfolio.type} `}
              >
                <div className="portfolio-wrap">
                  <img src={portfolio.image} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{portfolio.title}</h4>
                    <p>{portfolio.type}</p>
                    <div className="portfolio-links">
                      <span
                        //eslint disable nextline
                        // href={portfolio.image}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox glightbox"
                        title={portfolio.title}
                      >
                        <svg
                          onClick={() =>
                            setShow({ photoIndex: index, isOpen: true })
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="icon"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                      </span>

                      <NavLink
                        to="/blog-single"
                        // href="portfolio-details.html"
                        title="More Details"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="icon"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                          <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                        </svg>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {show.isOpen && (
          <Lightbox
            wrapperClassName="lightbox-wrapper"
            enableZoom={false}
            onAfterOpen={() => (document.body.style.overflow = "hidden")}
            imageCaption={portfolios[show.photoIndex].title}
            mainSrc={images[show.photoIndex]}
            nextSrc={images[(show.photoIndex + 1) % images.length]}
            prevSrc={
              images[(show.photoIndex + images.length - 1) % images.length]
            }
            onCloseRequest={() => {
              setShow({ ...show, isOpen: false });
              document.body.style.overflow = "visible";
            }}
            onMovePrevRequest={() =>
              setShow({
                ...show,
                photoIndex:
                  (show.photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              setShow({
                ...show,
                photoIndex: (show.photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
