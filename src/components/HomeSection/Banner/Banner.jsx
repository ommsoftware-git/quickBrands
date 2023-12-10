import React from "react";
import "./Banner.css";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className="homeBanner">
        <Container fluid>
          <Row className="gy-4">
            <Col xs={12} lg={8}>
              <Carousel fade>
                <Carousel.Item style={{ height: "80vh" }}>
                  <img
                    className="d-block w-100"
                    style={{ maxHeight: "100vh" }}
                    src="https://www.3dotsdesign.in/images/RGS-mockup/Free%20Night%20Scene%20Advertisement%20Billboard%20Mockup%206.webp"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "80vh" }}>
                  <img
                    className="d-block w-100"
                    style={{ maxHeight: "100vh" }}
                    src="https://www.3dotsdesign.in/images/portfolio/pis/main.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "80vh" }}>
                  <img
                    className="d-block w-100"
                    style={{ maxHeight: "100vh" }}
                    src="https://www.3dotsdesign.in/images/portfolio/pis/calendar.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={12} lg={4} className="d-none d-lg-block">
              <Row className="gy-3">
                <Col xs={12} lg={12}>
                  <Carousel fade>
                    <Carousel.Item style={{ height: "40vh" }}>
                      <img
                        className="d-block w-100"
                        style={{ maxHeight: "100vh", height: "100%" }}
                        src="https://www.3dotsdesign.in/images/portfolio/pis/calendar.jpg"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "40vh" }}>
                      <img
                        className="d-block w-100"
                        style={{ maxHeight: "100vh", height: "100%" }}
                        src="https://www.3dotsdesign.in/images/portfolio/pis/brochure/01.jpg"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col xs={12} lg={12}>
                  <Carousel fade>
                    <Carousel.Item style={{ height: "50vh" }}>
                      <img
                        className="d-block w-100"
                        style={{ maxHeight: "100vh" }}
                        src="https://www.3dotsdesign.in/images/portfolio/pis/brochure/02.jpg"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "50vh" }}>
                      <img
                        className="d-block w-100"
                        style={{ maxHeight: "100vh" }}
                        src="https://www.3dotsdesign.in/images/portfolio/pis/brochure/03.jpg"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
