import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "../styles/carousel.sass";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  Keyboard,
} from "swiper/modules";

import slide_image_1 from "../assets/images/img_1.jpg";
import slide_image_2 from "../assets/images/img_2.jpg";
import slide_image_3 from "../assets/images/img_3.jpg";
import slide_image_4 from "../assets/images/img_4.jpg";
import slide_image_5 from "../assets/images/img_5.jpg";
import slide_image_6 from "../assets/images/img_6.jpg";
import slide_image_7 from "../assets/images/img_7.jpg";
import slide_image_8 from "../assets/images/img_8.jpg";
import slide_image_9 from "../assets/images/img_9.jpg";
import slide_image_10 from "../assets/images/img_10.jpg";
export const Carousel = () => {
  useEffect(() => {
    setTimeout(() => {
      const button = document.querySelector(".swiper-button-next");
      button.click();
    }, 300);
  }, []);
  return (
    <div className="container">
      <h1 className="heading">Featured Products</h1>
      <h2 className="sub-heading">
        Explore and Discover a variety of Products
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        loop={true}
        slidesPerView={3}
        autoplay={{ delay: 2500 }}
        // spaceBetween={-20}
        keyboard={{
          enabled: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Keyboard]}
        className="swiper_container"
      >
       <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_10} alt="slide_image" />
            <div className="description">Phool Hu kisi ko bi Baa jaata hu</div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_1} alt="slide_image" />
            <div className="description">!! Welcome to Avataar Home !!</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_2} alt="slide_image" />
            <div className="description">Stylish JBL HeadPhone in 50% OFF</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_3} alt="slide_image" />
            <div className="description">Get Greatest Books in 50% OFF</div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_4} alt="slide_image" />
            <div className="description">Listen Top 90's Songs</div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_5} alt="slide_image" />
            <div className="description">DDLJ Dekhne Chale Kya</div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_6} alt="slide_image" />
            <div className="description">Get Stylish Clothes</div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_7} alt="slide_image" />
            <div className="description">Mario the Greatest Level</div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_8} alt="slide_image" />
            <div className="description">Designer Furnise 40% OFF</div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={slide_image_9} alt="slide_image" />
            <div className="description">World Tour Plan at your Door</div>
          </div>{" "}
        </SwiperSlide>
       

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
