import React from "react";
import "./Price.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import EnterPrice from "./EnterPrice";
import Testimonials from "../HomeSection/testimonial/Testimonials";
import Faq from "../HomeSection/faq/Faq";
import Discount from "./Discount";
import Premium from "./Premium";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Price = () => {
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
                <h2 className="text-white">Create better design. Faster.</h2>
                <p className="text-white">
                  Save up to 30% on yearly subscriptions
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
      <Container fluid>
        <div className="pricing">
          <div className="container">
            <div className="pricing-table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>
                      Free
                      <span className="ptable-star red">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="ptable-price">$0.0</span>
                    </th>
                    <th className="highlight">
                      Basic
                      <span className="ptable-star green">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="ptable-price">$99.0</span>
                    </th>
                    <th>
                      Business
                      <span className="ptable-star lblue">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="ptable-price">$149.0</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="ptable-title">
                        <i className="fa fa-hdd-o"></i> Image Templates
                      </span>
                    </td>
                    <td>
                      <i className="fa fa-hdd-o red"></i>
                      10/Lifetime
                    </td>
                    <td>
                      <i className="fa fa-hdd-o green"></i>
                      30/Month
                    </td>
                    <td>
                      <i className="fa fa-hdd-o lblue"></i>
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="ptable-title">
                        <i className="fa fa-signal"></i> Video & Intro/Outro
                        Templates
                      </span>
                    </td>
                    <td>
                      <i className="fa fa-signal red"></i>
                      3/Lifetime
                    </td>
                    <td>
                      <i className="fa fa-signal green"></i>
                      10/Month
                    </td>
                    <td>
                      <i className="fa fa-signal lblue"></i>
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="ptable-title">
                        <i className="fa fa-shield"></i> Photo Editing Tools
                      </span>
                    </td>
                    <td>
                      <i className="fa fa-shield red"></i>
                      Yes
                    </td>
                    <td>
                      <i className="fa fa-shield green"></i>
                      Yes
                    </td>
                    <td>
                      <i className="fa fa-shield lblue"></i>
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="ptable-title">
                        <i className="fa fa-headphones"></i> 3D Text
                      </span>
                    </td>
                    <td>
                      <i className="fa fa-times red"></i>
                      No
                    </td>
                    <td>
                      <i className="fa fa-phone green"></i>
                      Yes
                    </td>
                    <td>
                      <i className="fa fa-envelope-o lblue"></i>
                      Yes
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="ptable-title">
                        <i className="fa fa-headphones"></i> Folders
                      </span>
                    </td>
                    <td>
                      <i className="fa fa-times red"></i>
                      No
                    </td>
                    <td>
                      <i className="fa fa-phone green"></i>
                      Yes
                    </td>
                    <td>
                      <i className="fa fa-envelope-o lblue"></i>
                      Yes
                    </td>
                  </tr>

                  <tr>
                    <td>&nbsp;</td>
                    <td className="bg-red">
                      <NavLink className="btn" to="#">
                        Get Started
                      </NavLink>
                    </td>
                    <td className="bg-green">
                      <NavLink className="btn" to="#">
                        Buy Now
                      </NavLink>
                    </td>
                    <td className="bg-lblue">
                      <NavLink className="btn" to="#">
                        Buy Now
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
      <EnterPrice />
      <Testimonials />
      <Discount />
      <Premium />
      <Faq />
    </>
  );
};

export default Price;
