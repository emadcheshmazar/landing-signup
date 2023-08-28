import React from "react";
import { Card, Container, Image } from "react-bootstrap";

const WhyFiberSection = () => {
  return (
    <div className="my-5 col-12">
      <Container className="d-flex flex-wrap">
        <div className="mb-4 col-12">
          <strong className="color-primary">Why Fiber?</strong>
          <h2 className="fw-bold my-2">
            A good portfolio means good <br />
            employability
          </h2>
        </div>
        <div className="d-flex flex-wrap col-12">
          <Card className="custom-card my-3 my-lg-0 col-12 col-lg-4">
            <Card.Body className="p-0">
              <Card.Title className="mb-3">
                <Image src="/assets/time.svg" alt="hero-Illustration" />
              </Card.Title>
              <Card.Subtitle className="mb-2 fw-bold">
                Bulid in minutes
              </Card.Subtitle>
              <Card.Text className="col-12 col-md-10">
                With a selection of premade templates, you can build portfolio
                in less than 10 minutes.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="custom-card my-3 my-lg-0 p-0 col-12 col-lg-4">
            <Card.Body className="p-0">
              <Card.Title className="mb-3">
                <Image src="/assets/code.svg" alt="hero-Illustration" />
              </Card.Title>
              <Card.Subtitle className="mb-2 fw-bold">
                Add custom CSS
              </Card.Subtitle>
              <Card.Text className="col-12 col-md-10">
                Customize your personal protfolio even more with the ability to
                add your own custom CSS style
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="custom-card my-3 my-lg-0 p-0 col-12 col-lg-4">
            <Card.Body className="p-0">
              <Card.Title className="mb-3">
                <Image src="/assets/allSizes.svg" alt="hero-Illustration" />
              </Card.Title>
              <Card.Subtitle className="mb-2 fw-bold">Responsive</Card.Subtitle>
              <Card.Text className="col-12 col-md-10">
                All Fiber templates are fully responsive to ensure the
                experience is seemless across all devices.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default WhyFiberSection;
