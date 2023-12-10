import React from "react";
import "./BannerSlide.css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TopBannerData from "./TopBannerData";
import { NavLink } from "react-router-dom";

const TopBanner = () => {
  return (
    <>
      <Container fluid className="pt-5">
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {TopBannerData.map((curVal) => {
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

export default TopBanner;
