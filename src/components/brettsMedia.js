import React from "react";
import {Row, Col, Card, CardImg, Media, Jumbotron} from "react-bootstrap";
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

  let titleStyle={background:"linear-gradient(\n          90deg,\n          rgba(0, 139, 139, 1) 0%,\n          rgba(188, 209, 255, 1) 100%\n  )",
    paddingTop:"1.5rem",
    paddingBottom:"1rem",
    width:"span",
  };

  function renderItems() {
    return props.media.map((item, index) => {
      return (
        <Col xs={12} sm={6} lg={3} >
        <Card style={{padding:"10px"}}>
          <Card.Title>
            <Jumbotron fluid style={titleStyle} >
            <h1>{item.title}</h1>
            </Jumbotron>
          </Card.Title>
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
    <div style={{backgroundColor:'whitesmoke'}}>
      <h1 style={{textAlign:"center", padding:"10px"}}>Our <b>Workflow</b></h1>
      <Row className="m-auto align-self-center" >
        <br/>
        {renderItems()}
      </Row>
    </div>
  );
}
