import React from "react";
import { Image } from "react-bootstrap";

const RegesterImage = () => {
  return (
    <div className="col-8 d-flex row justify-content-center align-items-center">
      <Image
        className="col-12 mb-3"
        src="/assets/Sign Up Image.png"
        alt="hero-Illustration"
      />
      <h2 className="text-light text-center fs-1">Unparalleled Templates</h2>
      <p className="text-light text-center col-10 fs-5">
        Crafted by a team of professional designers, our templates are
        eunparalleled in the market.
      </p>
      <div className="d-flex justify-content-center gap-2 col-12">
        <span class="active-dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  );
};

export default RegesterImage;
