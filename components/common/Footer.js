import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="col-12 bg-light py-5">
      <Container className="d-flex flex-wrap">
        <div className="col-12 col-lg-4 d-flex flex-wrap align-content-start">
          <strong className="col-12 mb-2">Fiber</strong>
          <span className="text-secondary col-9 mb-4">
            with Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </span>
          <p className="text-secondary">
            made with &#9829; by <strong>Emad Cheshmazar</strong>
          </p>
        </div>
        <div className="col-6 col-lg-2 d-flex flex-wrap align-content-start">
          <strong className="col-12 mb-2">Sitemap</strong>
          <span className="text-secondary col-12">Homepage</span>
          <span className="text-secondary col-12">Pricing</span>
          <span className="text-secondary col-12">Testimonials</span>
          <span className="text-secondary col-12">Features</span>
        </div>
        <div className="col-6 col-lg-2 d-flex flex-wrap align-content-start">
          <strong className="col-12 mb-2">Resources</strong>
          <span className="text-secondary col-12">Support</span>
          <span className="text-secondary col-12">Contact</span>
          <span className="text-secondary col-12">FAQ</span>
        </div>
        <div className="col-6 col-lg-2 d-flex flex-wrap align-content-start">
          <strong className="col-12 mb-2">Company</strong>
          <span className="text-secondary col-12">About</span>
          <span className="text-secondary col-12">Customer</span>
          <span className="text-secondary col-12">Blog</span>
        </div>
        <div className="col-6 col-lg-2 d-flex flex-wrap align-content-start">
          <strong className="col-12 mb-2">Portfolio</strong>
          <span className="text-secondary col-12">Sarah Andrew</span>
          <span className="text-secondary col-12">Mathew Higgins</span>
          <span className="text-secondary col-12">Janice Dave</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
