import React from "react";
import "./moreTools.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MoreTools = () => {
  return (
    <>
      <Container className="top">
        <h2 className="title">Explore More Tools</h2>
        <Row className="top gy-5">
          <Col xs={12} lg={3} className="toolsOuter">
            <NavLink to="/editor">
              <Card className="toolsCard">
                <Card.Img variant="top" src="./images/qr_code_editor.webp" />
                <Card.Body>
                  <Card.Title>QR Code</Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
          <Col xs={12} lg={3} className="toolsOuter">
            <NavLink to="/editor">
              <Card className="toolsCard">
                <Card.Img variant="top" src="./images/charts_editor.webp" />
                <Card.Body>
                  <Card.Title>Charts</Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
          <Col xs={12} lg={3} className="toolsOuter">
            <NavLink to="/editor">
              <Card className="toolsCard">
                <Card.Img variant="top" src="./images/image_editor.webp" />
                <Card.Body>
                  <Card.Title>Image Editor</Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
          <Col xs={12} lg={3} className="toolsOuter">
            <NavLink to="/editor">
              <Card className="toolsCard">
                <Card.Img variant="top" src="./images/tools-background.webp" />
                <Card.Body>
                  <Card.Title>Remove Background</Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MoreTools;
