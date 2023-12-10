import React from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Container>
        <Row className="py-5">
          <Col xs={12} lg={{ span: 4, offset: 4 }}>
            <div className="wrapper login">
              <div className="heading text-center">
                <h2>Signup!</h2>
                <p>Sign In to your account</p>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  id="Full Name"
                  className="input-field"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  placeholder="Email Address"
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  className="input-field"
                  placeholder="Password"
                />
              </div>

              <div className="input-group">
                <button>
                  Signup <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="mt-2 mb-4">
                Have an Account &nbsp;
                <NavLink to="/login">Login</NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
