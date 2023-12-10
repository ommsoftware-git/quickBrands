import React from "react";
import "./ImgScroll.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ImgScroll = () => {
  return (
    <>
      <Container className="top">
        <Row>
          <Col
            xs={12}
            lg={{ span: 8, offset: 2 }}
            className="bg-info rounded-4 imgScrollSection"
          >
            <Row>
              <Col lg={6} xs={12} className=" imgScrollLeft">
                <h2 className="pb-lg-5 text-white">
                  Social Media Post Creator
                </h2>
                <p className="pb-3 pb-lg-3 text-white">
                  Elevate Your Brand with Customizable Social Media Posts.
                </p>

                <NavLink to="/create-image">
                  <Button className="theme-btn mb-5">
                    Create Social Media Posts <FaArrowRight />
                  </Button>
                </NavLink>
              </Col>
              <Col lg={6} xs={12}>
                <Row className="last-sec-slider">
                  <Col xs={4} lg={4} className="ftr-first-row">
                    <div>
                      <figure>
                        <img
                          src="./images/1.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          src="./images/2.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          src="./images/3.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          src="./images/4.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                  </Col>
                  <Col xs={4} lg={4} className="ftr-first-row">
                    <div>
                      <figure>
                        <img
                          src="./images/5.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          src="./images/6.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          src="./images/7.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          src="./images/8.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                  </Col>
                  <Col xs={4} lg={4} className="ftr-scnd-row">
                    <div>
                      <figure>
                        <img
                          src="./images/9.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          src="./images/10.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          src="./images/11.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          src="./images/12.webp"
                          alt="banner"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImgScroll;
