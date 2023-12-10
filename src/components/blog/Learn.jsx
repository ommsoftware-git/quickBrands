import React from "react";
import "./Learn.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import learnData from "./learnData";

const Learn = () => {
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
                <h2 className="text-white">Latest Blog</h2>
                <p className="text-center text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form,words which don't look even slightly believable.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <Container fluid>
        <section class="blog-area pt-5 pb-5">
          <div class="container">
            <div class="row gy-5">
              {learnData.map((curVal) => {
                return (
                  <div class="col-xl-4 col-lg-4 col-md-6 mb-30" key={curVal.id}>
                    <div class="blog-wrapper home-blog-wrapper white-bg">
                      <div class="blog-thumb">
                        <NavLink to={curVal.path}>
                          <img
                            src={curVal.img}
                            alt={curVal.name}
                            className="img-fluid"
                          />
                        </NavLink>
                      </div>
                      <div class="meta-info">
                        <ul>
                          <li class="posts-time">{curVal.date}</li>
                        </ul>
                      </div>
                      <div class="blog-content home-blog">
                        <h2 class="blog-title">
                          <NavLink to="/learn-details">{curVal.name}</NavLink>
                        </h2>
                        <p>{curVal.desc.slice(0, 120)}...</p>
                      </div>
                      <div class="link-box home-blog-link">
                        <NavLink to={curVal.path}>
                          <button className="theme-btn">Read More</button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Learn;
