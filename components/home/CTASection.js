import React from "react";
import { Container, Image } from "react-bootstrap";

const CTASection = () => {
  return (
    <div>
      <Container className="cta-section d-flex flex-wrap align-items-center pt-5 px-5">
        <div className="col-12 col-lg-5">
          <h2 className="fw-bolder my-2 text-white">
            Diversify your portfolio.
          </h2>
          <p className="text-white col-9">
            Create an even more impressive portfolio by creating case studies
            for youe projects, Simply follow our step-by-step guides.
          </p>
          <button className="custom-btn2">Start Free Trial</button>
        </div>
        <div className="col-12 col-lg-7 mt-4 mt-lg-0">
          <Image
            className="col-12"
            src="/assets/Page Image.png"
            alt="hero-Illustration"
          />
        </div>
      </Container>
    </div>
  );
};

export default CTASection;
