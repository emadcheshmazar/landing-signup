import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Link from "next/link";

const MyLottieAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/404.json",
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className="col-12 d-flex row justify-content-center align-items-center">
      <div className="col-10 col-lg-5 m-4" ref={containerRef}></div>
      <strong className="col-12 text-center text-secondary fs-3">Page not found</strong>
      <Link
        className="col-8 d-flex justify-content-center align-items-center"
        href="/"
      >
        <button className="custom-btn m-3 col-12 col-lg-4">Back to Home</button>
      </Link>
    </div>
  );
};

export default MyLottieAnimation;
