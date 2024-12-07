import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = ({ slides, settings }) => {
  return (
    <div>
      <Swiper modules={[Navigation, Pagination, Autoplay]} {...settings}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="element"
              // style={{ backgroundImage: `url` }}
            >
              <div className="banner-overlay"></div>
              <img src={slide.image} alt="" />

              <div className="banner-text">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <h1 className="title">{slide.title}</h1>
                          <p className="subtitle">{slide.subtitle}</p>
                        </div>
                        <div className="col-lg-6 text-lg-end text-start mt-lg-0 mt-5">
                          <div className="custom-btn banner-btn">
                            <NavLink to="/">{slide.btnText}</NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
