import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const EnterPrice = () => {
  return (
    <>
      <Container className="top">
        <h2 className="title mb-5">Quick Brands Enterprise</h2>
        <div className="text-center">
          <p>Looking to integrate quickBrands editor within your solution?</p>
          <p>
            We've got you covered with our Enterprise plan. Contact us for more
            details.
          </p>
          <NavLink to="/contact">
            <Button className="theme-btn mb-5">
              Contact Us
              <FaArrowRight />
            </Button>
          </NavLink>
        </div>
      </Container>
    </>
  );
};

export default EnterPrice;
