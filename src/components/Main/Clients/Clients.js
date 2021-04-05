import React from "react";
import "./Clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import client_1 from "../../../assets/images/clients/client-1.png";
import client_2 from "../../../assets/images/clients/client-2.png";
import client_3 from "../../../assets/images/clients/client-3.png";
import client_4 from "../../../assets/images/clients/client-4.png";
import client_5 from "../../../assets/images/clients/client-5.png";
import client_6 from "../../../assets/images/clients/client-6.png";
import client_7 from "../../../assets/images/clients/client-7.png";
import client_8 from "../../../assets/images/clients/client-8.png";

SwiperCore.use([Pagination, A11y, Autoplay]);

const Client = () => {
  const clients = [
    client_1,
    client_2,
    client_3,
    client_4,
    client_5,
    client_6,
    client_7,
    client_8,
  ];

  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="fade-up">
        <header className="sectionHeader">
          <h2>Our Clients</h2>
          <p>Temporibus omnis officia</p>
        </header>

        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          loop="true"
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
          className="clients-slider swiper-container"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
        >
          {clients.map((client) => {
            return (
              <SwiperSlide key={client}>
                <img src={client} className="img-fluid" alt="" />
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Client;
