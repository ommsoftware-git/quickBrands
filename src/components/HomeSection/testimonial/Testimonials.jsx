import React from "react";
import "./Testimonials.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <section className="top ">
        <h2 className="title">
          Loved by the <span>people</span> around the world
        </h2>
        <Container className="top loved-review-container">
          <Row>
            <Col xs={12} lg={8}>
              <Row className="gy-4">
                <Col xs={12} lg={6}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col xs={2} lg={2}>
                          <FaQuoteLeft className="quote-icon" />
                        </Col>
                        <Col xs={10} lg={10}>
                          <p className="text-justify">
                            This App has helped me to create amazing and
                            beautiful designs for my online business and
                            colleagues as well which has also given job
                            opportunities as well as it's ...
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={2} lg={2}>
                          <div class="review-user-avatar">
                            <img
                              src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/user_review_first.png"
                              alt="avatar"
                            />
                          </div>
                        </Col>
                        <Col xs={6} lg={6}>
                          <div class="review-user-details">
                            <p>Emmanuel R.</p>
                            <p>Business Owner</p>
                            <p>(USA)</p>
                          </div>
                        </Col>
                        <Col xs={4} lg={4}>
                          <div className="review-start">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} lg={6}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col xs={2} lg={2}>
                          <FaQuoteLeft className="quote-icon" />
                        </Col>
                        <Col xs={10} lg={10}>
                          <p className="text-justify">
                            This App has helped me to create amazing and
                            beautiful designs for my online business and
                            colleagues as well which has also given job
                            opportunities as well as it's ...
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={2} lg={2}>
                          <div class="review-user-avatar">
                            <img
                              src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/user_review_first.png"
                              alt="avatar"
                            />
                          </div>
                        </Col>
                        <Col xs={6} lg={6}>
                          <div class="review-user-details">
                            <p>Emmanuel R.</p>
                            <p>Business Owner</p>
                            <p>(USA)</p>
                          </div>
                        </Col>
                        <Col xs={4} lg={4}>
                          <div className="review-start">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} lg={6}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col xs={2} lg={2}>
                          <FaQuoteLeft className="quote-icon" />
                        </Col>
                        <Col xs={10} lg={10}>
                          <p className="text-justify">
                            This App has helped me to create amazing and
                            beautiful designs for my online business and
                            colleagues as well which has also given job
                            opportunities as well as it's ...
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={2} lg={2}>
                          <div class="review-user-avatar">
                            <img
                              src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/user_review_first.png"
                              alt="avatar"
                            />
                          </div>
                        </Col>
                        <Col xs={6} lg={6}>
                          <div class="review-user-details">
                            <p>Emmanuel R.</p>
                            <p>Business Owner</p>
                            <p>(USA)</p>
                          </div>
                        </Col>
                        <Col xs={4} lg={4}>
                          <div className="review-start">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} lg={6}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col xs={2} lg={2}>
                          <FaQuoteLeft className="quote-icon" />
                        </Col>
                        <Col xs={10} lg={10}>
                          <p className="text-justify">
                            This App has helped me to create amazing and
                            beautiful designs for my online business and
                            colleagues as well which has also given job
                            opportunities as well as it's ...
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={2} lg={2}>
                          <div class="review-user-avatar">
                            <img
                              src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/user_review_first.png"
                              alt="avatar"
                            />
                          </div>
                        </Col>
                        <Col xs={6} lg={6}>
                          <div class="review-user-details">
                            <p>Emmanuel R.</p>
                            <p>Business Owner</p>
                            <p>(USA)</p>
                          </div>
                        </Col>
                        <Col xs={4} lg={4}>
                          <div className="review-start">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
