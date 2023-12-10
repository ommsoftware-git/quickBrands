/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Create.css";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SocialBanner from "./SocialBanner";
import Steps from "./Steps";
import GraphicsTemplates from "./GraphicsTemplates";
import ImgScroll from "../HomeSection/imgscroll/ImgScroll";
import Faq from "../HomeSection/faq/Faq";

const Create = () => {
  return (
    <>
      <section>
        <Container fluid>
          <div className="createSection">
            <h2>Graphic Maker Online</h2>
            <p>
              20000+ creative graphic design templates, quick & easy to use.
            </p>
            <NavLink to="">
              <Button className="theme-btn mb-5">
                Create Social Media Graphics <FaArrowRight />
              </Button>
            </NavLink>
          </div>
          <div className="createVideoSection">
            <iframe
              class="responsive-iframe"
              src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/video/graphic_maker_first_video.mp4?1"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </Container>
      </section>
      <SocialBanner />
      <Steps />
      <GraphicsTemplates />
      <ImgScroll />
      <Faq />
    </>
  );
};

export default Create;
