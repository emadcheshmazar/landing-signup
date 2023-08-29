import { useState } from "react";
import { FloatingLabel, Col, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("John@example.com");
  const [namePlaceholder, setNamePlaceholder] = useState("Jhon Doe");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    "At least 8 characters"
  );
  const [checkboxChecked, setCheckboxChecked] = useState(false);
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
      const existingUser = parsedUsers.find((user) => user.email === email);

      if (existingUser) {
        setErrorMessage("This email is already registered");
        setValidated(false);
        return;
      }

      const user = { email, name, password, comments: [] };
      parsedUsers.push(user);

      localStorage.setItem("users", JSON.stringify(parsedUsers));
      localStorage.setItem("current-user", JSON.stringify(user));
      router.push("/");
    }

    setValidated(true);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
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
      <Form.Group as={Col} controlId="validationName">
        <Form.Label className="fw-bold">Name</Form.Label>
        <FloatingLabel
          name="name"
          controlId="floatingInput"
          label={namePlaceholder}
          className="mb-3"
          onFocus={() => handleFocus(setNamePlaceholder, "your name:")}
          onBlur={() =>
            handleBlur(setNamePlaceholder, name, namePlaceholder, "Jhon Doe")
          }
          onChange={(e) => handleInputChange(e, setName)}
          value={name}
        >
          <Form.Control required type="text" placeholder="name@example.com" />
          <Form.Control.Feedback className="form-error" type="invalid">
            Need your name
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
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

      <Form.Group className="mb-5" id="formGridCheckbox">
        <Form.Check
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
          required
          checked={checkboxChecked}
          onChange={(e) => handleInputChange(e, setCheckboxChecked)}
        />
      </Form.Group>
      {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
      <Form.Group
        as={Col}
        className="d-flex justify-content-center align-items-center row"
      >
        <button type="submit" className="custom-btn m-3 col-12">
          Create Fiber Account
        </button>
        <span className="fw-medium col-12 text-center">
          Already have an account?
          <Link href="/signin">
            <span className="color-primary pointer">Sign in</span>
          </Link>
        </span>
      </Form.Group>
    </Form>
  );
}

export default SignupForm;
