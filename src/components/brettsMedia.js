import React from "react";
import { Row, Col, Card, CardImg,  Media } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BrettsMedia(props) {
  const cardImgStyle = {
    width: "200px",
    height: "200px",
    className: "mr-3",
    objectFit: "cover",
    padding: "10px",
    borderRadius: "10%",

  };

  function renderItems() {
    return props.media.map((item, index) => {
      return (
          <Col xs={12} sm={6} lg={3} >
          <Card style={{padding:"10px"}}>
            <Card.Title><h1>{item.title}</h1></Card.Title>
            <Card.Img src={item.img} ></Card.Img>
            <Card.Body>
                <h5 style={{textAlign:"left", verticalAlign:"middle"}}>{item.text}</h5>
            </Card.Body>
          </Card>
            <br/>
          </Col>

      );
    });
  }
  return  <Row className="m-auto align-self-center"><br/>{renderItems()}</Row>;
}
