import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LearnDetails = () => {
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
                <h2 className="text-white text-center">
                  10 Best Poster Making Apps for Android in 2023
                </h2>
                <p className="text-center text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form,words which don't look even slightly believable.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <Container className="py-5">
        <Row>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <div class="blog-wrapper home-blog-wrapper white-bg">
              <div class="blog-thumb">
                <NavLink to="">
                  <img
                    src="https://blog.photoadking.com/wp-content/uploads/2023/10/feature-image-poster-maker1-1.jpg"
                    alt="blog-img"
                    className="img-fluid"
                  />
                </NavLink>
              </div>
              <div class="meta-info">
                <ul>
                  <li class="posts-time">July 31, 2023 - by Hetal Suthar</li>
                </ul>
              </div>
              <div class="blog-content home-blog">
                <h2 class="blog-title">
                  <NavLink to="/learn-details">
                    10 Best Poster Making Apps for Android in 2023
                  </NavLink>
                </h2>
                <p>
                  Are you tired of scouring the internet for the best poster
                  making app, only to be overwhelmed by the many options
                  available? Look no further! Creating eye-catching posters for
                  events, promotions, or personal projects has always been
                  challenging in a world where visual content is king. In this
                  blog, we’ll unveil the 10 Best poster making apps that are not
                  only user-friendly but also pack a punch when it comes to
                  design possibilities.
                </p>
                <p>
                  Are you tired of scouring the internet for the best poster
                  making app, only to be overwhelmed by the many options
                  available? Look no further! Creating eye-catching posters for
                  events, promotions, or personal projects has always been
                  challenging in a world where visual content is king. In this
                  blog, we’ll unveil the 10 Best poster making apps that are not
                  only user-friendly but also pack a punch when it comes to
                  design possibilities.
                </p>
                <p>
                  Are you tired of scouring the internet for the best poster
                  making app, only to be overwhelmed by the many options
                  available? Look no further! Creating eye-catching posters for
                  events, promotions, or personal projects has always been
                  challenging in a world where visual content is king. In this
                  blog, we’ll unveil the 10 Best poster making apps that are not
                  only user-friendly but also pack a punch when it comes to
                  design possibilities.
                </p>
                <p>
                  Are you tired of scouring the internet for the best poster
                  making app, only to be overwhelmed by the many options
                  available? Look no further! Creating eye-catching posters for
                  events, promotions, or personal projects has always been
                  challenging in a world where visual content is king. In this
                  blog, we’ll unveil the 10 Best poster making apps that are not
                  only user-friendly but also pack a punch when it comes to
                  design possibilities.
                </p>
                <p>
                  Are you tired of scouring the internet for the best poster
                  making app, only to be overwhelmed by the many options
                  available? Look no further! Creating eye-catching posters for
                  events, promotions, or personal projects has always been
                  challenging in a world where visual content is king. In this
                  blog, we’ll unveil the 10 Best poster making apps that are not
                  only user-friendly but also pack a punch when it comes to
                  design possibilities.
                </p>
                <p>
                  Are you tired of scouring the internet for the best poster
                  making app, only to be overwhelmed by the many options
                  available? Look no further! Creating eye-catching posters for
                  events, promotions, or personal projects has always been
                  challenging in a world where visual content is king. In this
                  blog, we’ll unveil the 10 Best poster making apps that are not
                  only user-friendly but also pack a punch when it comes to
                  design possibilities.
                </p>
                <p>
                  Are you tired of scouring the internet for the best poster
                  making app, only to be overwhelmed by the many options
                  available? Look no further! Creating eye-catching posters for
                  events, promotions, or personal projects has always been
                  challenging in a world where visual content is king. In this
                  blog, we’ll unveil the 10 Best poster making apps that are not
                  only user-friendly but also pack a punch when it comes to
                  design possibilities.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LearnDetails;
