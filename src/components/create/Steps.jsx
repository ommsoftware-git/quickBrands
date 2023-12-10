import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Steps = () => {
  return (
    <>
      <div className="container top">
        <h2 className="title mb-5">Create Stunning Graphics In 3 Easy Steps</h2>
        <Row>
          <Col xs={12} lg={4}>
            <Card className="stepsCard">
              <Card.Title>
                <h2>Choose A Template</h2>
              </Card.Title>
              <Card.Body>
                Choose from ready-made design templates designed by
                professionals
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card className="stepsCard">
              <Card.Title>
                <h2>Edit Elements</h2>
              </Card.Title>
              <Card.Body>
                Add/Edit text, stickers, background to customize
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card className="stepsCard">
              <Card.Title>
                <h2>Download And Share</h2>
              </Card.Title>
              <Card.Body>
                Save the design, download or share on social media
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4 mb-5 text-center">
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            <figure>
              <img
                src="./images/feature_image1.webp"
                alt="banner"
                className="img-fluid"
              />
            </figure>
            <div>
              <p>
                Create amazing graphic design without design skills. Showcase
                your products on social media with the use of filters, effects,
                background, and design templates that were hard to create once
                are now easily editable with PhotoADKing's graphic maker.
              </p>
            </div>
            <NavLink to="">
              <Button className="theme-btn mb-5">
                Create Social Media Graphics <FaArrowRight />
              </Button>
            </NavLink>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Steps;
