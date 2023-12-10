import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { FaArrowsToDot } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { FaRupeeSign, FaChessKing } from "react-icons/fa";

const CreateImg = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid className="py-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="second">
          <Row className="gy-4">
            <Col sm={12} lg={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link>
                    <NavLink to="/">
                      <figure>
                        <img
                          src="./images/logo.jpeg"
                          alt="logo"
                          className="img-fluid"
                        />
                      </figure>
                    </NavLink>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <div className="text-center">
                      <FaArrowsToDot />
                      <p>Select</p>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <div className="text-center">
                      <FiGrid />
                      <p>Images</p>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12} lg={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="text-center">
                    <NavLink to="">
                      <figure>
                        <img
                          src="./images/1.webp"
                          alt="img"
                          className="img-fluid"
                        />
                      </figure>
                    </NavLink>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="gy-4">
                    <Col xs={12} lg={4}>
                      <Card style={{ height: "100vh", overflowY: "scroll" }}>
                        <Card.Header>
                          <div className="d-flex justify-content-between">
                            <h4>Poster Media</h4>
                            <VscSettings />
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <Row className="gy-5">
                            <Col xs={6} lg={6} md={6} sm={6}>
                              <NavLink onClick={handleShow}>
                                <figure>
                                  <img
                                    src="./images/2.webp"
                                    alt="img"
                                    className="img-fluid"
                                  />
                                </figure>
                              </NavLink>
                            </Col>
                            <Col xs={6} lg={6} md={6} sm={6}>
                              <NavLink onClick={handleShow}>
                                <figure>
                                  <img
                                    src="./images/1.webp"
                                    alt="img"
                                    className="img-fluid"
                                  />
                                </figure>
                              </NavLink>
                            </Col>
                            <Col xs={6} lg={6} md={6} sm={6}>
                              <NavLink onClick={handleShow}>
                                <figure>
                                  <img
                                    src="./images/3.webp"
                                    alt="img"
                                    className="img-fluid"
                                  />
                                </figure>
                              </NavLink>
                            </Col>
                            <Col xs={6} lg={6} md={6} sm={6}>
                              <NavLink onClick={handleShow}>
                                <figure>
                                  <img
                                    src="./images/4.webp"
                                    alt="img"
                                    className="img-fluid"
                                  />
                                </figure>
                              </NavLink>
                            </Col>
                            <Col xs={6} lg={6} md={6} sm={6}>
                              <NavLink onClick={handleShow}>
                                <figure>
                                  <img
                                    src="./images/5.webp"
                                    alt="img"
                                    className="img-fluid"
                                  />
                                </figure>
                              </NavLink>
                            </Col>
                            <Col xs={6} lg={6} md={6} sm={6}>
                              <NavLink onClick={handleShow}>
                                <figure>
                                  <img
                                    src="./images/6.webp"
                                    alt="img"
                                    className="img-fluid"
                                  />
                                </figure>
                              </NavLink>
                            </Col>
                          </Row>
                          <Button variant="primary">Load More</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} lg={8}>
                      <NavLink to="">
                        <figure>
                          <img
                            src="./images/1.webp"
                            alt="img"
                            className="img-fluid"
                          />
                        </figure>
                      </NavLink>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col
              xs={12}
              lg={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <figure>
                <img src="./images/1.webp" alt="img" className="img-fluid" />
              </figure>
            </Col>
            <Col xs={12} lg={8}>
              <dir>
                <h5>
                  <span>
                    <FaChessKing className="text-warning mx-2" />
                  </span>
                  Subscribe to Download this image
                </h5>
                <h4 className="fw-bold mb-4">Subscribe to Premium Images</h4>
                <p>
                  Enhance Your Marketing with Premium Features and Countless
                  Possibilities.
                </p>
                <div>
                  <h6>
                    Here’s what’s inside <NavLink to="/">QuickBrands</NavLink>
                  </h6>
                  <ul>
                    <li>Enjoy 10,000+ Premium Festival Images and Videos.</li>
                    <li>
                      Access a vast library of 100,000+ Business Images and
                      Videos.
                    </li>
                    <li>
                      Create eye-catching content with 10,000+ Custom Templates.
                    </li>
                    <li>Stand out with Personalized Video.</li>
                  </ul>
                  <NavLink to="/pricing">
                    <button className="theme-btn">
                      {" "}
                      <span>
                        <FaRupeeSign />
                      </span>{" "}
                      Subscribe Now
                    </button>
                  </NavLink>
                </div>
              </dir>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateImg;
