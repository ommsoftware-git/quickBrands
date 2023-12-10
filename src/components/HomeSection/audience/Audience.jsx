import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Audience = () => {
  return (
    <>
      <Container fluid>
        <section className="top">
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} lg={6}>
              <figure>
                <img
                  src="./images/usage_model.webp"
                  alt="banner-img"
                  className="img-fluid"
                />
              </figure>
            </Col>
            <Col xs={12} lg={6}>
              <h2 className="text-info mb-3">Engage Your Audience</h2>
              <p>
                Ignite your social media presence with our dynamic social media
                post and graphic design templates, where we combine captivating
                visuals, compelling copy, and strategic branding to engage your
                audience and amplify your online reach.
              </p>
              <h2 className="text-info mb-3">Increase Your Followers</h2>
              <p>
                Stand out in the crowded social media landscape with our
                expertly crafted posts and graphic designs, tailored to your
                brand's personality and goals, delivering impactful messages and
                driving meaningful interactions with your followers.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Audience;
