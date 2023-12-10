import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Premium = () => {
  return (
    <>
      <Container className="py-5">
        <h2 className="title mb-5">Get Premium And Unlock All the Feature</h2>
        <Row className="gy-5">
          <Col xs={12} lg={3}>
            <div className="premiumData">
              <figure>
                <img
                  src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/gp-resources/Limit_templates.webp"
                  alt="img"
                  className="img-fluid"
                />
              </figure>
              <h2>Limitless Templates</h2>
              <p>
                Get full access to our massive template library on the internet.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="premiumData">
              <figure>
                <img
                  src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/gp-resources/ReadyToUseResources.webp"
                  alt="img"
                  className="img-fluid"
                />
              </figure>
              <h2>Ready to Use resources</h2>
              <p>Unlock all the premium shapes, stickers and buttons to use </p>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="premiumData">
              <figure>
                <img
                  src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/gp-resources/Limitless_Background.webp"
                  alt="img"
                  className="img-fluid"
                />
              </figure>
              <h2>Limitless Background</h2>
              <p>
                Unlock all Images and backgrounds to boost your designing
                options to next level.{" "}
              </p>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="premiumData">
              <figure>
                <img
                  src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/gp-resources/High_Quality_Downloads.webp"
                  alt="img"
                  className="img-fluid"
                />
              </figure>
              <h2>High-Quality Downloads</h2>
              <p>
                Download Your Designs in high-resolution and share them with
                others on social media.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Premium;
