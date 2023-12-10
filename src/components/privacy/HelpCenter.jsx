import React from "react";
import "./help.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HelpCenter = () => {
  return (
    <>
      <section className="terms mb-5">
        <Container fluid>
          <div className="mb-5">
            <h2>How can we help you today?</h2>
          </div>
          <Row>
            <Col xs={12} lg={{ span: 6, offset: 3 }}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter Your Search Here..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="warning  fw-bold" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="mb-5">
        <Card body>
          <h2 className="mb-4">Knowledge base</h2>
          <hr />
          <Row className="gy-4 mb-5">
            <Col xs={12} lg={6}>
              <h5>Free version limitations (6)</h5>
              <div className="help-list">
                <ul>
                  <li>
                    <NavLink to="/help-details">
                      Why I can't create new designs ?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      In what format can I download my designs?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      How many designs can I create in the free ver
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <h5>Most common issues 6</h5>
              <div className="help-list">
                <ul>
                  <li>
                    <NavLink to="/help-details">
                      Image upload file requirements
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      Reasons for Payment Failure
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      I bought the yearly subscription by mistake, I wan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      How to print Flyer or business Card
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      How to find your saved templates?
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="gy-4 mb-5">
            <Col xs={12} lg={6}>
              <h5>Audio & Video (6)</h5>
              <div className="help-list">
                <ul>
                  <li>
                    <NavLink to="/help-details">
                      How to add stock videos?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">How to upload videos?</NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">How to trim videos?</NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">How to add audio?</NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">How to trim audio?</NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <h5>Pricing (10)</h5>
              <div className="help-list">
                <ul>
                  <li>
                    <NavLink to="/help-details">
                      What happens when my membership subscription
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      What is the advantage of having premium?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      Where can I cancel my subscription?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      How long can I use the free plan?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help-details">
                      Why should I upgrade from the free plan?
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default HelpCenter;
