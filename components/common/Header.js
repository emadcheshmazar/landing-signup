import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";

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
    window.location.reload();
  };

  const userTitle = (
    <div className="d-flex justify-content-center align-items-center">
      <strong className="user-avatar mx-2 color-primary fs-4 d-flex justify-content-center align-items-center">
        {user?.name[0].toUpperCase()}
      </strong>
      <span>{user?.name}</span>
    </div>
  );

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
              className="my-1 user-dropdown"
              title={userTitle}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={handleLogout}>
                <Image
                  className="col-2 mx-2"
                  src="/assets/logout.png"
                  alt="hero-Illustration"
                />
                Logout
              </NavDropdown.Item>
              <NavDropdown.Item href={`/user/${user.name.replace(/ /g, "-")}`}>
                <Image
                  className="col-2 mx-2"
                  src="/assets/avatar-ico.png"
                  alt="hero-Illustration"
                />
                Profile
              </NavDropdown.Item>
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
