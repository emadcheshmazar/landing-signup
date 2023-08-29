import React from "react";
import { Button, Card, Image } from "react-bootstrap";

const CustomCard = ({ name, title, comment, email, password }) => {
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  console.log(currentUser);

  const deleteComment = (selectedTitle, selectedComment) => {
    const filteredComments = currentUser?.comments.filter(
      (item) =>
        item.title.toLowerCase() !== selectedTitle.toLowerCase() &&
        item.comment.toLowerCase() !== selectedComment.toLowerCase()
    );
    const newObj = {
      name: name,
      email: email,
      password: password,
      comments: filteredComments,
    };
    localStorage.setItem("current-user", JSON.stringify(newObj));
    window.location.reload();
  };
  return (
    <div>
      <Card className="custom-card3 overflow-auto m-1">
        <Card.Body>
          <div>
            <Card.Title className="d-flex justify-content-start">
              <strong className="user-avatar me-2 fs-4 d-flex justify-content-center align-items-center col-12">
                {name[0].toUpperCase()}
              </strong>
              <div className="d-flex row me-auto fs-6">
                <strong className="color-primary">{name}</strong>
                <span>{title}</span>
              </div>
              <Button
                className="col-2"
                variant="link"
                onClick={() => deleteComment(title, comment)}
              >
                <Image
                  className="col-12 mb-2"
                  src="/assets/trash.png"
                  alt="hero-Illustration"
                />
              </Button>
            </Card.Title>
            <Card.Text className="col-9">{comment}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
