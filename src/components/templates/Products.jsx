import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { FaEye, FaEdit } from "react-icons/fa";
import productsData from "./productsData";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container>
        <Row className="mb-4 gy-4 mt-lg-0 mt-4">
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
          <Col xs={12} lg={4}>
            <Form.Select aria-label="Default select example">
              <option>Sorting Products</option>
              <option value="1">a-z</option>
              <option value="2">z-a</option>
            </Form.Select>
          </Col>
        </Row>
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
                    <div class="back from-left">
                      <Button
                        className=" mb-2 w-50"
                        onClick={() => setShow(true)}
                      >
                        <FaEye /> Preview
                      </Button>

                      <br />

                      <Button className=" mb-2 w-50">
                        <FaEdit /> Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Modal
        show={show}
        size="xl"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} lg={6}>
              <figure>
                <img
                  src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/5ee4a84504d4c_template_image_1592043589.webp"
                  alt="img"
                  className="img-fluid"
                />
              </figure>
            </Col>
            <Col xs={12} lg={6}>
              <h2>Minimalist Endless Sale Instagram Post</h2>
              <p>Flyers | 1080 x 1080 px</p>
              <NavLink to="/create-image">
                <button className="theme-btn">Customize This Template</button>
              </NavLink>
              <h5 className="mt-4">Explore more</h5>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Business
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Instagram
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Post
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Women
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Writing
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Fashion
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Ad
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Flyer
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Flyer
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Sale
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Offer
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Discount
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Flats
              </Button>
              <Button variant="secondary" className="mt-2 mb-2 mx-2">
                Shop
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Products;
