import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Discount = () => {
  return (
    <>
      <Container className="top">
        <h2 className="title mb-5">Education and Nonprofits Get Discount</h2>
        <Row className="gy-4">
          <Col xs={12} lg={6}>
            <Card className="discountCards">
              <Card.Body>
                <Row>
                  <Col xs={8} lg={8}>
                    <h2>Students & Educators</h2>
                    <p>
                      QuickBrands provides affordable plans for students and
                      teachers.
                    </p>
                    <NavLink to="/contact">
                      <Button variant="white">Contact Us</Button>
                    </NavLink>
                  </Col>
                  <Col xs={4} lg={4}>
                    <figure>
                      <img
                        src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/education.webp"
                        alt="img"
                        className="img-fluid"
                      />
                    </figure>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={6}>
            <Card className="discountCards">
              <Card.Body>
                <Row>
                  <Col xs={8} lg={8}>
                    <h2>Nonprofit Discount</h2>
                    <p>
                      QuickBrands supports nonprofits with discounts on business
                      plans.
                    </p>
                    <NavLink to="/contact">
                      <Button variant="white">Contact Us</Button>
                    </NavLink>
                  </Col>
                  <Col xs={4} lg={4}>
                    <figure>
                      <img
                        src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/donation.webp"
                        alt="img"
                        className="img-fluid"
                      />
                    </figure>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Discount;
