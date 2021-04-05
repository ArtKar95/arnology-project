import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import testimonials_1 from "../../../assets/images/testimonials/testimonials-1.jpg";
import testimonials_2 from "../../../assets/images/testimonials/testimonials-2.jpg";
import testimonials_3 from "../../../assets/images/testimonials/testimonials-3.jpg";
import testimonials_4 from "../../../assets/images/testimonials/testimonials-4.jpg";
import testimonials_5 from "../../../assets/images/testimonials/testimonials-5.jpg";

SwiperCore.use([Pagination, A11y, Autoplay]);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Saul Goodman",
      testimonial:
        " Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      image: testimonials_1,
      profession: "Ceo &amp; Founder",
    },
    {
      name: "Sara Wilsson",
      testimonial:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. ",
      image: testimonials_2,
      profession: "Designer",
    },
    {
      name: "Jena Karlis",
      testimonial:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. ",
      image: testimonials_3,
      profession: "Store Owner",
    },
    {
      name: "Matt Brandon",
      testimonial:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      image: testimonials_4,
      profession: "Freelancer",
    },
    {
      name: "John Larson",
      testimonial:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      image: testimonials_5,
      profession: "Entrepreneur",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <header className="sectionHeader">
          <h2>Testimonials</h2>
          <p>What they are saying about us</p>
        </header>
        <Swiper
          loop="true"
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-slider swiper-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {testimonials.map((item) => {
            return (
              <SwiperSlide
                key={item.name + item.profession}
                className="swiper-slide"
              >
                <div className="testimonial-item">
                  <div className="stars">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      fill="currentColor"
                      className="icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      fill="currentColor"
                      className="icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      fill="currentColor"
                      className="icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      fill="currentColor"
                      className="icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      fill="currentColor"
                      className="icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <p>{item.testimonial}</p>
                  <div className="profile mt-auto">
                    <img src={item.image} className="testimonial-img" alt="" />
                    <h3>{item.name}</h3>
                    <h4>{item.profession}</h4>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
