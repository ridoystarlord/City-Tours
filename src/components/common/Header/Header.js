import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} height="50" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fw-bold align-items-center">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="active" as={NavLink} to="/our-services">
                Our Services
              </Nav.Link>
              <Nav.Link className="active" as={NavLink} to="/packages">
                Packages
              </Nav.Link>

              <Nav.Link className="active" as={NavLink} to="/blogs">
                Blogs
              </Nav.Link>
              {user.email ? (
                [
                  <Nav.Link
                    key="my-bookings"
                    className="active"
                    as={NavLink}
                    to="/my-bookings"
                  >
                    My Bookings
                  </Nav.Link>,
                  <Nav.Link
                    key="manage-all-bookings"
                    className="active"
                    as={NavLink}
                    to="/manage-all-bookings"
                  >
                    Manage All Bookings
                  </Nav.Link>,
                  <Nav.Link
                    key="add-a-new-place"
                    className="active"
                    as={NavLink}
                    to="/add-a-new-place"
                  >
                    Add a new Package
                  </Nav.Link>,
                  <p
                    key="user-name"
                    className="mb-0 login-username text-white px-3 py-2 rounded-pill me-3 fw-normal"
                  >
                    {user.displayName}
                  </p>,
                  <Button
                    onClick={logout}
                    key="logout-btn"
                    className="rounded-pill px-3"
                    variant="danger"
                  >
                    Logout
                  </Button>,
                ]
              ) : (
                <Nav.Link
                  key="register-login"
                  className="bg-register-btn rounded-pill text-white px-3 fw-normal"
                  as={NavLink}
                  to="/register-login"
                >
                  Register/Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
