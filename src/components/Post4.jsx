import React from "react";
import { Card } from "react-bootstrap";

const Post4 = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        width={20}
        height={250}
        src="https://static.vecteezy.com/system/resources/previews/012/625/260/original/lan-network-icons-symbol-elements-for-infographic-web-vector.jpg"
      />
      <Card.Body>
        <Card.Title>Data Structure</Card.Title>
        <Card.Text>
          An interconnection of multiple devices, also known as hosts, that are
          connected using multiple paths for the purpose of sending/ receiving
          data media. Computer networks can also include multiple
          devices/mediums which help in the communication between two different
          devices; these are known as Network devices and include things such as
          routers, switches, hubs, and bridges.
        </Card.Text>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </Card.Body>
    </Card>
  );
};

export default Post4;
