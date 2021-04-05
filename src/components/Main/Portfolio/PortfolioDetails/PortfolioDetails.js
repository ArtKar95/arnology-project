import React from "react";
import "./../Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import portfolio_1 from "../../../../assets/images/portfolio/portfolio-1.jpg";
import portfolio_2 from "../../../../assets/images/portfolio/portfolio-2.jpg";
import portfolio_3 from "../../../../assets/images/portfolio/portfolio-3.jpg";

const PortfolioDetails = () => {
  const images = [portfolio_1, portfolio_2, portfolio_3];
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Portfolio Details</li>
          </ol>
          <h2>Portfolio Details</h2>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <Swiper
                speed={400}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                  type: "bullets",
                }}
                className="portfolio-details-slider swiper-container"
              >
                <div className="portfolio-details-slider swiper-container">
                  {images.map((img, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={img} alt="" />
                      </SwiperSlide>
                    );
                  })}
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="/#">www.example.com</a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetails;
