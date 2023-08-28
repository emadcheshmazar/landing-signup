import React from "react";
import CustomForm from "../components/signup/CustomForm";
import { Image } from "react-bootstrap";

const signup = () => {
  return (
    <div style={{ height: "100vh" }} className="d-flex flex-wrap">
      <div className="col-12 col-lg-6 d-flex justify-content-center bg-light p-4 py-5 py-lg-0">
        <div className="col-10">
          <strong>Fiber</strong>
          <h2 className="fw-bold my-5">Create your Fiber account</h2>
          <div className="col-12">
            <CustomForm />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 bg-color-primary py-5 py-lg-0 d-flex row justify-content-center align-items-center">
        <div className="col-8 d-flex row justify-content-center align-items-center">
          <Image
            className="col-12 mb-3"
            src="/assets/Sign Up Image.png"
            alt="hero-Illustration"
          />
          <h2 className="text-light text-center fs-1">
            Unparalleled Templates
          </h2>
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
      </div>
    </div>
  );
};

export default signup;
