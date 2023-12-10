import React from "react";
import "./Features.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import FeatureTabs from "./FeatureTabs";
import Offers from "./Offers";
import Steps from "./Steps";
import ImgScroll from "../HomeSection/imgscroll/ImgScroll";
import Premium from "./Premium";

const Features = () => {
  return (
    <>
      <section className="featureSection">
        <Container>
          <div className="featureSectionData">
            <Row className="">
              <Col
                xs={12}
                lg={12}
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <h2 className="text-white">Online Graphics Editor</h2>
                <p className="text-center text-white">
                  quick Brands graphics editing tool helps you create designs
                  like a pro. Our easy-to-use tools help make graphic design
                  with just a few clicks.
                </p>
                <NavLink to="/create-image">
                  <Button className="theme-btn mb-5">
                    Customize Template Here <FaArrowRight />
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <FeatureTabs />
      <Offers />
      <Steps />
      <ImgScroll />
      <Premium />
    </>
  );
};

export default Features;
