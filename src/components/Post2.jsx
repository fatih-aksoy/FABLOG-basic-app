import React from "react";
import { Card } from "react-bootstrap";

const Post2 = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        width={20}
        height={250}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJNk6nhaeFINWHh5-_t8KTQK5cEMwj_7hAg&s"
      />
      <Card.Body>
        <Card.Title>Data Structure</Card.Title>
        <Card.Text>
          The word Algorithm means “a process or set of rules to be followed in
          calculations or other problem-solving operations”. Therefore Algorithm
          refers to a set of rules/instructions that step-by-step define how a
          work is to be executed upon in order to get the expected results.
        </Card.Text>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </Card.Body>
    </Card>
  );
};

export default Post2;
