import React from "react";
import { Container, Image } from "react-bootstrap";

const IntroSection = () => {
  return (
    <div className="col-12 py-5 bg-light">
      <Container className="intro-section pb-4 d-flex flex-wrap">
        <div className="col-12 col-lg-7">
          <div className="d-flex col-12">
            <Image
              className="mx-1"
              src="/assets/star.svg"
              alt="hero-Illustration"
            />
            <Image
              className="mx-1"
              src="/assets/star.svg"
              alt="hero-Illustration"
            />
            <Image
              className="mx-1"
              src="/assets/star.svg"
              alt="hero-Illustration"
            />
            <Image
              className="mx-1"
              src="/assets/star.svg"
              alt="hero-Illustration"
            />
            <Image
              className="mx-1"
              src="/assets/star.svg"
              alt="hero-Illustration"
            />
            <span className="mx-2">Rated 4.8/5 (243 reviews)</span>
          </div>
          <h1 className="intro-title">Create your portfolio in minutes.</h1>
          <p>
            With Fiber, you can setup own personal portfolio in minutes
            <br />
            withdozens pf premade, beautiful templates
          </p>
          <div>
            <button className="custom-btn">Start Free Trial</button>
            <strong className="mx-3 color-primary pointer">
              <u>View Examples</u>
            </strong>
          </div>
          <div className="mt-3">
            <span className="mx-1">
              <Image
                className="mx-1"
                src="/assets/Checkmark.svg"
                alt="hero-Illustration"
              />
              No Credit Card Required
            </span>
            <span className="mx-1">
              <Image
                className="mx-1"
                src="/assets/Checkmark.svg"
                alt="hero-Illustration"
              />
              10 Free Templates
            </span>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <Image
            className="col-12"
            src="/assets/hero-Illustration.png"
            alt="hero-Illustration"
          />
        </div>
      </Container>
    </div>
  );
};

export default IntroSection;
