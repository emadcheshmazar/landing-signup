import React from "react";
import { Container, Image } from "react-bootstrap";

const IntroSection = () => {
  return (
    <div className="col-12 py-5 bg-light">
      <Container className="intro-section pb-4 mt-5 d-flex flex-wrap">
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
        <div className="col-12 col-lg-5 position-relative">
          <Image
            className="col-12"
            src="/assets/hero.png"
            alt="hero-Illustration"
          />
          <Image
            className="col-3 custom-shadow image-container1 obj1"
            src="/assets/obj1.png"
            alt="hero-Illustration"
          />
          <Image
            className="col-3 custom-shadow image-container2 obj2"
            src="/assets/obj2.png"
            alt="hero-Illustration"
          />
          <Image
            className="col-3 custom-shadow image-container3 obj3"
            src="/assets/obj3.png"
            alt="hero-Illustration"
          />
          <Image
            className="col-3 custom-shadow image-container4 obj4"
            src="/assets/obj4.png"
            alt="hero-Illustration"
          />
          <Image
            className="col-3 custom-shadow image-container5 obj5"
            src="/assets/obj5.png"
            alt="hero-Illustration"
          />
          <Image
            className="col-3 custom-shadow image-container6 obj6"
            src="/assets/obj6.png"
            alt="hero-Illustration"
          />
          <Image
            className="col-2 custom-shadow image-container7 plus1"
            src="/assets/plus.png"
            alt="hero-Illustration"
          />
          <Image
            className="col-2 custom-shadow image-container8 plus2"
            src="/assets/plus.png"
            alt="hero-Illustration"
          />
          <Image
            className="col-2 custom-shadow image-container9 plus3"
            src="/assets/plus.png"
            alt="hero-Illustration"
          />
        </div>
      </Container>
    </div>
  );
};

export default IntroSection;
