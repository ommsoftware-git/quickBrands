import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid>
          <NavLink to="/">
            <Navbar.Brand>
              <img src="./images/logo.jpeg" alt="logo" width="150px" />
            </Navbar.Brand>
          </NavLink>

          <Form.Select
            aria-label="Default select example"
            className="theme-btn mx-2 d-lg-none d-block btn-sm"
            style={{ width: "30%" }}
          >
            <option>Language</option>
            <option value="1">Marathi</option>
            <option value="2">Hindi</option>
            <option value="3">English</option>
          </Form.Select>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/templates">Templates</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/learn">Blogs</NavLink>
              <NavLink to="/account">Account</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="login-btn ">
              <Button variant="" className="mx-2 d-none d-lg-inline">
                <Form.Select aria-label="Default select example ">
                  <option>Language</option>
                  <option value="1">Marathi</option>
                  <option value="2">Hindi</option>
                  <option value="3">English</option>
                </Form.Select>
              </Button>

              <NavLink to="/signup">
                <Button variant="" className="theme-btn">
                  Sign Up Free
                </Button>
              </NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
