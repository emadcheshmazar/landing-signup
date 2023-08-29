import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  const [navShadow, setNavShadow] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    const storedUser = JSON.parse(localStorage.getItem("current-user"));
    if (storedUser && storedUser.name && storedUser.email) {
      setUser(storedUser);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("current-user");
    setUser(null);
  };

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
          {user ? (
            <NavDropdown
              className="my-1"
              title={user.name}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <div>
              <Link href="/signin">
                <button className="custom-btn3">Sign in</button>
              </Link>
              <Link href="/signup">
                <button className="custom-btn mx-3">Sign Up</button>
              </Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
