import React from "react";
import "./BannerSlide.css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import spotlightData from "./spotlightData";
import { NavLink } from "react-router-dom";

const Spotlight = () => {
  return (
    <>
      <Container fluid>
        <div className="pt-5 pb-3">
          <h2 className="title">Daily Spotlight</h2>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {spotlightData.map((curVal) => {
            return (
              <SwiperSlide className="banner_slide">
                <div className="swipeCard">
                  <NavLink to="/create-image">
                    <Card className="swipeCardData">
                      <Card.Img
                        variant="top"
                        src={curVal.img}
                        className="img-fluid swipeCardImg"
                      />
                      <Card.Body className="swipeCardBody">
                        <Card.Title className="swipe_title text-center">
                          {curVal.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </NavLink>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Spotlight;
