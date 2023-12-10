import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const GraphicsTemplates = () => {
  return (
    <>
      <div className="container top text-center">
        <h2 className="title">Graphic Design Template</h2>
        <p>
          Browse PhotoADKing's graphic design templates, which are designed by
          professional graphic designers to inspire you.
        </p>
        <Row className="mt-4 mb-5 gy-4">
          <Col xs={12} lg={3}>
            <div className="graphicsCard">
              <NavLink to="">
                <Card>
                  <Card.Img variant="top" src="./images/graphics/1.webp" />
                  <Card.Body>
                    <Card.Title>Flyer</Card.Title>
                  </Card.Body>
                </Card>
              </NavLink>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="graphicsCard">
              <NavLink to="">
                <Card>
                  <Card.Img variant="top" src="./images/graphics/1.webp" />
                  <Card.Body>
                    <Card.Title>Flyer</Card.Title>
                  </Card.Body>
                </Card>
              </NavLink>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="graphicsCard">
              <NavLink to="">
                <Card>
                  <Card.Img variant="top" src="./images/graphics/1.webp" />
                  <Card.Body>
                    <Card.Title>Flyer</Card.Title>
                  </Card.Body>
                </Card>
              </NavLink>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="graphicsCard">
              <NavLink to="">
                <Card>
                  <Card.Img variant="top" src="./images/graphics/1.webp" />
                  <Card.Body>
                    <Card.Title>Flyer</Card.Title>
                  </Card.Body>
                </Card>
              </NavLink>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="graphicsCard">
              <NavLink to="">
                <Card>
                  <Card.Img variant="top" src="./images/graphics/1.webp" />
                  <Card.Body>
                    <Card.Title>Flyer</Card.Title>
                  </Card.Body>
                </Card>
              </NavLink>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="graphicsCard">
              <NavLink to="">
                <Card>
                  <Card.Img variant="top" src="./images/graphics/1.webp" />
                  <Card.Body>
                    <Card.Title>Flyer</Card.Title>
                  </Card.Body>
                </Card>
              </NavLink>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GraphicsTemplates;
