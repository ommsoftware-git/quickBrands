import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Steps = () => {
  return (
    <>
      <Container className="top">
        <h2 className="title mb-5">
          Quick Brands Save Time Every Step Of The Way{" "}
        </h2>
        <Row className="gy-5 d-flex align-items-center mb-5">
          <Col xs={12} lg={6}>
            <div className="stepsData">
              <h2>Designing Made Simpler For Non-professional</h2>
              <p>
                Quick Brands versatile drag-and-drop and keyboard shortcut
                features can help finish complex editing tasks with ease. Get
                started with our easy to use editing tool and make stunning
                designs within minutes.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <figure>
              <img
                src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/gp-resources/Design_made_simpler.webp"
                alt="img"
                className="img-fluid"
              />
            </figure>
          </Col>
        </Row>

        <Row className="gy-5 d-flex align-items-center mb-5">
          <Col xs={12} lg={6}>
            <figure>
              <img
                src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/gp-resources/Get_better_result.webp"
                alt="img"
                className="img-fluid"
              />
            </figure>
          </Col>
          <Col xs={12} lg={6}>
            <div className="stepsData">
              <h2>Get Better Result With Eye-catching Visuals</h2>
              <p>
                Study shows that posts with images get 37% more engagements on
                Facebook and 150% more retweets on Twitter. Our online graphics
                editor helps you achieve exactly that with our massive graphics
                library, Design components, and templates
              </p>
            </div>
          </Col>
        </Row>

        <Row className="gy-5 d-flex align-items-center mb-5">
          <Col xs={12} lg={6}>
            <div className="stepsData">
              <h2>Download And Share Your Designs To The World</h2>
              <p>
                Quick Brands provides 3 different formats that you can download
                your design PNG, JPG and PDF. Share your designs with friends to
                gather feedback. PhotoADKing gives you the power to push your
                design to social media straight from the editor.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <figure>
              <img
                src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/static_assets/web/gp-resources/Download_And_Share.webp"
                alt="img"
                className="img-fluid"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Steps;
