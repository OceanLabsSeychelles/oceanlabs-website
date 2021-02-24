import React from "react";
import { Row, Col, Card, CardImg,  Media } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BrettsMedia(props) {
  const cardImgStyle = {
    maxWidth: "400px",
    maxHeight: "400px",
    className: "mr-3",
    objectFit: "cover",
    padding: "10px",
    borderRadius: "15px",
    marginLeft: "auto",
    marginRight: "auto",


  };

  function renderItems() {
    return props.media.map((item, index) => {
      return (
        <Col xs={12} sm={6} lg={3} >
        <Card style={{padding:"10px"}}>
          <Card.Title><h1>{item.title}</h1></Card.Title>
          <Card.Img src={item.img} style={cardImgStyle}></Card.Img>
          <Card.Body>
              <p style={{textAlign:"left", verticalAlign:"middle"}}>{item.text}</p>
          </Card.Body>
        </Card>
          <br/>
        </Col>
      );
    });
  }
  return  (
    <div style={{backgroundColor:'aliceblue'}}>
      <h1 style={{textAlign:"center", padding:"10px"}}>Our <b>Workflow</b></h1>
      <Row className="m-auto align-self-center" >
        <br/>
        {renderItems()}
      </Row>
    </div>
  );
}
