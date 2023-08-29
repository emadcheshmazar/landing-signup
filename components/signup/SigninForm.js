import { useState } from "react";
import { FloatingLabel, Col, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("John@example.com");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    "At least 8 characters"
  );
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;

    if (form.checkValidity()) {
      const users = localStorage.getItem("users");
      const parsedUsers = JSON.parse(users) || [];
      const existingUser = parsedUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (existingUser) {
        setErrorMessage("");
        localStorage.setItem("current-user", JSON.stringify(existingUser));
        router.push(`/user/${router.query.user}`);
      } else {
        setErrorMessage("Invalid email or password");
      }

      setValidated(false);
    }

    setValidated(true);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value.toLowerCase());
  };

  const handleFocus = (setter, placeholder) => {
    setter(placeholder);
  };

  const handleBlur = (setter, value, placeholder, initialPlaceholder) => {
    if (value && value.length > 0) {
      setter(placeholder);
    } else {
      setter(initialPlaceholder);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="validationEmail">
        <Form.Label className="fw-bold">E-mail</Form.Label>
        <FloatingLabel
          controlId="floatingInput"
          label={emailPlaceholder}
          className="mb-3"
          onFocus={() => handleFocus(setEmailPlaceholder, "your email:")}
          onBlur={() =>
            handleBlur(
              setEmailPlaceholder,
              email,
              emailPlaceholder,
              "John@example.com"
            )
          }
          onChange={(e) => handleInputChange(e, setEmail)}
          value={email}
        >
          <Form.Control required type="email" placeholder="name@example.com" />
          <Form.Control.Feedback className="form-error" type="invalid">
            Need a valid email address
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} className="mb-4" controlId="validationPassword">
        <Form.Label className="fw-bold">Password</Form.Label>
        <FloatingLabel
          controlId="floatingPassword"
          label={passwordPlaceholder}
          onFocus={() => handleFocus(setPasswordPlaceholder, "your password:")}
          onBlur={() =>
            handleBlur(
              setPasswordPlaceholder,
              password,
              passwordPlaceholder,
              "At least 8 characters"
            )
          }
          onChange={(e) => handleInputChange(e, setPassword)}
          value={password}
        >
          <Form.Control
            required
            type="password"
            placeholder="Password"
            minLength={8}
          />
          <Form.Control.Feedback className="form-error-password" type="invalid">
            Needs at least 8 characters for the password
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
      <Form.Group
        as={Col}
        className="d-flex justify-content-center align-items-center row"
      >
        <button type="submit" className="custom-btn m-3 col-12">
          Login to Fiber Account
        </button>
        <span className="fw-medium col-12 text-center">
          Not registered?
          <Link href="/signup">
            <span className="color-primary pointer">Sign up</span>
          </Link>
        </span>
      </Form.Group>
    </Form>
  );
}

export default SigninForm;
