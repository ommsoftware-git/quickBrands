import React from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Container>
        <Row className="py-5">
          <Col xs={12} lg={{ span: 4, offset: 4 }}>
            <div className="wrapper login">
              <div className="heading text-center">
                <h2>Login!</h2>
                <p>Sign In to your account</p>
              </div>

              <div className="input-group">
                <input
                  type="text"
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
              <div className=" mb-4 forgot">
                <NavLink to="/forgot-password">Forgot password?</NavLink>
              </div>

              <div className="input-group">
                <button>
                  Login <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="mt-2 mb-4">
                Don't Have an Account &nbsp;
                <NavLink to="/signup">Signup</NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
