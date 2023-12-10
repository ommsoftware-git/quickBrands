import React from "react";
import { Button } from "react-bootstrap";
import "./Banner.css";
import { FaArrowRight } from "react-icons/fa";
import BannerSlides from "../BannerSlides/BannerSlides";

const BannerCopy = () => {
  return (
    <>
      <section className="home_section ">
        <div className="banner_content">
          <h2>Social Media Post Maker</h2>
          <p>Design Awesome Social Media Graphics With PhotoADKing.</p>
          <Button className="theme-btn mb-5">
            Create Stunning Social Media Posts <FaArrowRight />
          </Button>
        </div>
      </section>
    </>
  );
};

export default BannerCopy;
