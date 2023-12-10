import React from "react";
import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const DesignTemplates = () => {
  return (
    <>
      <section className="bg-info mb-5" style={{ height: "450px" }}>
        <Container fluid>
          <div className="d-flex justify-content-between align-align-items-center">
            <div className="d-flex justify-content-center align-items-center flex-column justify-content-sm-center">
              <h2 className="text-white">More Design Templates</h2>
              <div className="mb-5 py-2">
                <NavLink to="">
                  <Button variant="light" className="m-3">
                    Instagram Post Maker
                  </Button>
                </NavLink>
                <NavLink to="">
                  <Button variant="light" className="m-3">
                    Facebook Post Maker
                  </Button>
                </NavLink>
                <br />
                <NavLink to="">
                  <Button variant="light" className="m-3">
                    Pinterest Post Maker
                  </Button>
                </NavLink>
                <NavLink to="">
                  <Button variant="light" className="m-3">
                    Linkedin Post Maker
                  </Button>
                </NavLink>
                <br />
                <NavLink to="">
                  <Button variant="light" className="m-3">
                    Social Media Content Calender
                  </Button>
                </NavLink>
              </div>
            </div>
            <div
              style={{ overflow: "hidden", height: "450px" }}
              className="d-none d-lg-block"
            >
              <figure>
                <img
                  src="./images/mask_group.webp"
                  alt="banner"
                  className="img-fluid"
                  style={{
                    maxWidth: "fit-content",
                    height: "100%",
                  }}
                />
              </figure>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DesignTemplates;
