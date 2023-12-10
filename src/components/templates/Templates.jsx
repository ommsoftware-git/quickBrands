import React from "react";
import "./Templates.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Filter from "./Filter";
import Products from "./Products";

const Templates = () => {
  return (
    <>
      <section className="featureSection">
        <Container>
          <div className="featureSectionData">
            <Row className="">
              <Col
                xs={12}
                lg={12}
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <h2 className="text-white text-center">
                  Graphic Design Templates
                </h2>
                <p className="text-white text-center">
                  20000+ creative graphic design templates, quick & easy to use.
                </p>
                <NavLink to="/create-image">
                  <Button className="theme-btn mb-5">
                    Customize Template Here <FaArrowRight />
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row className="mt-4 mb-5">
            <Col xs={12} lg={4}>
              <Filter />
            </Col>
            <Col xs={12} lg={8}>
              <Products />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Templates;
