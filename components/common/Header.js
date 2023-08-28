import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={
        navShadow
          ? "nav-container shadow-transition bg-light"
          : "nav-container bg-light"
      }
    >
      <Container>
        <Navbar.Brand href="#home">
          <strong>Fiber</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Community</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
          </Nav>
          <div className="sign-up">
            <strong className="">Sign In</strong>
            <Link href="/signup">
              <button className="custom-btn mx-3">Sign Up</button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
