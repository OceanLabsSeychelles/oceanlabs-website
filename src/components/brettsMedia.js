import React from "react";
import { Image, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BrettsMedia(props) {
  function renderItems() {
    return props.media.map((item, index) => {
      return (
        <Col xs={12} sm={12} md={6} ld={3}>
          <Card>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>
                <h1>{item.title}</h1>
              </Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
  return <Row>{renderItems()}</Row>;
}
