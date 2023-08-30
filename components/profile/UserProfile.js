import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Col, Form, Image } from "react-bootstrap";
import CustomCard from "../common/CustomCard";

const UserProfile = ({ user }) => {
  const users = JSON.parse(localStorage.getItem("users"));
  const currentUser = JSON.parse(localStorage.getItem("current-user"));

  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [commentsArray, setCommentsArray] = useState(currentUser.comments);
  const [validated, setValidated] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;

    if (form.checkValidity()) {
      const submitComment = { title: title, comment: comment };
      setCommentsArray([...commentsArray, submitComment]);
      setTitle("");
      setComment("");
      window.location.reload();
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  useEffect(() => {
    const index = users.findIndex((obj) => obj.email === currentUser.email);

    if (index !== -1) {
      const newObj = {
        name: currentUser.name,
        email: currentUser.email,
        password: currentUser.password,
        comments: commentsArray,
      };
      users.splice(index, 1, newObj);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("current-user", JSON.stringify(newObj));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentsArray]);
  return (
    <div style={{ height: "100vh" }} className="d-flex flex-wrap">
      <div className="col-12 col-lg-6 d-flex justify-content-center bg-light p-4 ">
        <div className="col-10">
          <Link href="/">
            <strong>Fiber</strong>
          </Link>

          <div className="d-flex justify-content-start my-5 align-items-center col-12">
            <strong className="user-avatar2 me-3 fs-1 d-flex justify-content-center align-items-center col-12">
              {user?.name[0].toUpperCase()}
            </strong>
            <div>
              <h2 className="fw-bold d-flex align-items-center">
                {user?.name}
              </h2>
              <span>{user?.email}</span>
            </div>
          </div>

          <div className="col-12">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmitComment}
            >
              <Form.Group
                as={Col}
                controlId="validationCustom03"
                className="mb-3 position-relative"
              >
                <Form.Label>Comment Title</Form.Label>
                <Form.Control
                  onChange={handleTitleChange}
                  value={title}
                  type="text"
                  placeholder="what's yout topic"
                  required
                />
                <Form.Control.Feedback type="invalid" className="form-error2">
                  Title is empty
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3 position-relative"
                as={Col}
                controlId="validationCustom03"
              >
                <Form.Label>Type your comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={comment}
                  onChange={handleCommentChange}
                  required
                />
                <Form.Control.Feedback type="invalid" className="form-error3">
                  Comment is empty
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <button className="custom-btn" type="submit">
                  Submit Comment
                </button>
                <Link href={"/"}>
                  <button className="custom-btn3 ms-3">Back to Home</button>
                </Link>
              </Form.Group>
            </Form>
          </div>

          <div
            style={{ height: "33vh" }}
            className="col-12 d-flex flex-wrap overflow-auto"
          >
            {currentUser.comments.map((item, idx) => (
              <div className="col-12 col-xl-6" key={idx}>
                <CustomCard
                  name={currentUser.name}
                  email={currentUser.email}
                  password={currentUser.password}
                  title={item.title}
                  comment={item.comment}
                  deleteIcon={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 bg-color-primary py-5 py-lg-0 d-flex row justify-content-center align-items-center">
        <Image
          className="col-8 mb-3"
          src="/assets/user-img.png"
          alt="hero-Illustration"
        />
      </div>
    </div>
  );
};

export default UserProfile;
