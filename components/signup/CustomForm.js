import { useState } from "react";
import { FloatingLabel, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function CustomForm() {
  const [email, setEmail] = useState("John@example.com");
  const [name, setName] = useState("Jhon Doe");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    "At least 8 characters"
  );

  const handleEmailFocus = () => {
    setEmail("Your Email:");
  };

  const handleEmailBlur = () => {
    setEmail("John@example.com");
  };
  const handleNameFocus = () => {
    setName("Your Name:");
  };
  const handleNameBlur = () => {
    setName("John Doe");
  };
  const handlePasswordFocus = () => {
    setPasswordPlaceholder("Your Password:");
  };
  const handlePasswordBlur = () => {
    setPasswordPlaceholder("At least 8 characters");
  };

  return (
    <Form>
      <Form.Group as={Col}>
        <Form.Label className="fw-bold">Name</Form.Label>
        <FloatingLabel
          controlId="floatingInput"
          label={name}
          className="mb-3"
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label className="fw-bold">E-mail</Form.Label>
        <FloatingLabel
          controlId="floatingInput"
          label={email}
          className="mb-3"
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} className="mb-4">
        <Form.Label className="fw-bold">Password</Form.Label>
        <FloatingLabel
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          controlId="floatingPassword"
          label={passwordPlaceholder}
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-5" id="formGridCheckbox">
        <Form.Check
          size="large"
          type="checkbox"
          label={
            <span>
              By creating an account on Fiber, you agree to the
              <br />
              <u>
                <strong className="color-primary pointer">
                  Terms & Conditions
                </strong>
              </u>
              .
            </span>
          }
        />
      </Form.Group>
      <Form.Group
        as={Col}
        className="d-flex justify-content-center align-items-center row"
      >
        <button className="custom-btn m-3 col-12">Create Fiber Account</button>
        <span className="fw-medium col-12 text-center">
          Already have an account?{" "}
          <span className="color-primary pointer">Sing in</span>
        </span>
      </Form.Group>
    </Form>
  );
}

export default CustomForm;
