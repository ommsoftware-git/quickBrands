import { useState } from "react";
import "./account.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { FaList, FaDownload, FaArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import productsData from "../templates/productsData";
import categoryData from "./category/categoryData";

const Account = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid className="py-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="gy-4">
            <Col sm={12} lg={3}>
              <Nav variant="pills" className="flex-column">
                <Card style={{ height: "80vh" }}>
                  <Nav.Item className="mb-3">
                    <Nav.Link
                      eventKey="first"
                      style={{
                        width: "100%",
                        marginLeft: "0",
                      }}
                    >
                      <span className="mx-2">
                        <FaList />
                      </span>
                      Business
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-3">
                    <Nav.Link
                      eventKey="second"
                      style={{ width: "100%", marginLeft: "0" }}
                    >
                      <span className="mx-2">
                        <FaDownload />
                      </span>
                      Downloads
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-3">
                    <Nav.Link
                      eventKey="third"
                      style={{ width: "100%", marginLeft: "0" }}
                    >
                      <span className="mx-2">
                        <FaArrowDown />
                      </span>
                      Change Business Category
                    </Nav.Link>
                  </Nav.Item>
                </Card>
              </Nav>
            </Col>
            <Col sm={12} lg={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="gy-4">
                    <Col xs={12} lg={6}>
                      <Card className="py-4">
                        <Row className="text-center">
                          <Col xs={12} lg={2} border="primary">
                            <figure>
                              <img
                                src="./images/logo.jpeg"
                                alt="img"
                                className="img-fluid py-4"
                              />
                            </figure>
                          </Col>
                          <Col xs={12} lg={6}>
                            <div>
                              <h2>web design</h2>
                            </div>
                          </Col>
                          <Col xs={12} lg={4}>
                            <button
                              onClick={handleShow}
                              className="btn btn-light btn-sm mb-3 mx-4 mx-lg-0"
                            >
                              Edit
                            </button>
                            <NavLink to="/pricing">
                              <button className="btn btn-primary btn-sm">
                                Subscribe Now
                              </button>
                            </NavLink>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="gy-4">
                    {productsData.map((curVal) => {
                      return (
                        <Col xs={12} lg={4} key={curVal.id}>
                          <div class="card">
                            <div class="content">
                              <div class="front">
                                <img
                                  class="profile"
                                  width="100%"
                                  src={curVal.img}
                                  alt={curVal.name}
                                />
                                <h2>{curVal.name}</h2>
                              </div>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <Col xs={12} lg={8}>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Search Here..."
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="secondary" id="button-addon2">
                          Search
                        </Button>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="gy-4">
                    {categoryData.map((curVal) => {
                      return (
                        <Col
                          xs="12"
                          lg="3"
                          key={curVal.id}
                          className="category-card"
                        >
                          <NavLink to="/templates">
                            <Card className="py-4">
                              <h4>{curVal.name}</h4>
                            </Card>
                          </NavLink>
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} lg={12}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Change Logo</Form.Label>
                  <Form.Control type="file" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Business Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Account;
