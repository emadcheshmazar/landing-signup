import React, { useEffect, useState } from "react";
import SigninForm from "../components/signup/SigninForm";
import RegesterImage from "../components/signup/RegesterImage";
import Link from "next/link";

const Signin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("current-user"));
    console.log(storedUser);
    if (storedUser && storedUser.name && storedUser.email) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div style={{ height: "100vh" }} className="d-flex flex-wrap">
      <div className="col-12 col-lg-6 d-flex justify-content-center bg-light p-4 ">
        <div className="col-10">
          <Link href="/">
            <strong>Fiber</strong>
          </Link>
          <h2 className="fw-bold my-5">Create your Fiber account</h2>
          <div className="col-12">
            <SigninForm />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 bg-color-primary py-5 py-lg-0 d-flex row justify-content-center align-items-center">
        <RegesterImage />
      </div>
    </div>
  );
};

export default Signin;
