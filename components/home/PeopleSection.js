import React, { useEffect, useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import CustomCard from "../common/CustomCard";

const PeopleSection = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("current-user"));
    if (storedUser && storedUser.name && storedUser.email) {
      setUser(storedUser);
    }
  }, []);

  const userComments = user?.comments.map((item, idx) => (
    <div className="col-12 col-lg-10 col-xl-4" key={idx}>
      <CustomCard deleteIcon={false} name={user.name} title={item.title} comment={item.comment} />
    </div>
  ));
  return (
    <div className="my-5 col-12">
      {user ? (
        <Container>
          <h2>{`${user?.name.toUpperCase()}'s comments:`}</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {userComments && userComments.length > 0
              ? userComments
              : "No Comments..."}
          </div>
        </Container>
      ) : (
        <Container>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="col-12 col-lg-10 col-xl-4 my-2">
              <Card className="custom-card2">
                <Card.Body>
                  <div>
                    <Card.Title className="d-flex">
                      <Image
                        className="col-2 mb-2"
                        src="/assets/User Avatar.svg"
                        alt="hero-Illustration"
                      />
                      <div className="people-head">
                        <strong className="color-primary">Sarah Andrews</strong>
                        <span>$1000 in revenue</span>
                      </div>
                    </Card.Title>
                    <Card.Text className="col-9">
                      Setting up my portfolio with Fiber took no more than 10
                      minuntes. Since then, my portfolio has attracted a lot of
                      clients and made more than $100k.
                    </Card.Text>
                  </div>
                  <Button className="col-12 py-3" variant="outline-secondary">
                    <span className="color-primary fw-bold">{`View Sarah's Portfolio`}</span>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-lg-10 col-xl-4 my-2">
              <Card className="custom-card2">
                <Card.Body>
                  <div>
                    <Card.Title className="d-flex">
                      <Image
                        className="col-2 mb-2"
                        src="/assets/User Avatar 2.svg"
                        alt="hero-Illustration"
                      />
                      <div className="people-head">
                        <strong className="color-primary">
                          Mathew Higgins
                        </strong>
                        <span>$20 in revenue</span>
                      </div>
                    </Card.Title>
                    <Card.Text className="col-9">
                      {`I have been getting A LOT of leads ever since I uses Fiber's permade templates, now I just need to work on my case studies and I'll beready to go!`}
                    </Card.Text>
                  </div>
                  <Button className="col-12 py-3" variant="outline-secondary">
                    <span className="color-primary fw-bold">{`View Mathew's Portfolio`}</span>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-lg-10 col-xl-4 my-2">
              <Card className="custom-card2">
                <Card.Body>
                  <div>
                    <Card.Title className="d-flex">
                      <Image
                        className="col-2 mb-2"
                        src="/assets/User Avatar 32.svg"
                        alt="hero-Illustration"
                      />
                      <div className="people-head">
                        <strong className="color-primary">Janice Dave</strong>
                        <span>$30k in revenue</span>
                      </div>
                    </Card.Title>
                    <Card.Text className="col-9">
                      I only just started freelancing this year and I have
                      already made more than I ever made, in my full-time job.
                      The templates are so amazing.
                    </Card.Text>
                  </div>
                  <Button className="col-12 py-3" variant="outline-secondary">
                    <span className="color-primary fw-bold">{`View Janice's Portfolio`}</span>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default PeopleSection;
