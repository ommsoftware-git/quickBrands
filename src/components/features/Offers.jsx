import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Offers = () => {
  return (
    <>
      <section className="offerSection py-5">
        <Container>
          <h2 className="mb-5">What We Offer?</h2>
          <Row className="gy-4">
            <Col xs={"auto"} md={4}>
              <div className="offerImg">
                <figure>
                  <img
                    src="./images/features/1.webp"
                    alt="img"
                    className="img-fluid"
                  />
                </figure>
                <h2>1 M+</h2>
                <p>Resources</p>
              </div>
            </Col>
            <Col xs={"auto"} md={4}>
              <div className="offerImg">
                <figure>
                  <img
                    src="./images/features/2.webp"
                    alt="img"
                    className="img-fluid"
                  />
                </figure>
                <h2>30,000+</h2>
                <p>Templates</p>
              </div>
            </Col>
            <Col xs={"auto"} md={4}>
              <div className="offerImg">
                <figure>
                  <img
                    src="./images/features/3.webp"
                    alt="img"
                    className="img-fluid"
                  />
                </figure>
                <h2>500+</h2>
                <p>Collections</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Offers;
