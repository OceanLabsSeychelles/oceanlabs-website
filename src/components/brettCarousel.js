import React from "react";
import { Carousel } from "react-bootstrap";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

import "bootstrap/dist/css/bootstrap.min.css";

export default function BrettsCarousel(props) {
    let carouselStyle={
        width: "auto",
        height: "55vh",
        padding: "20px",
    }

    function renderItems() {
        return props.data.map((item, index) => {
            return (
                <MDBCarouselItem itemId={index+1}>
                    <MDBView>
                        <img
                            style={carouselStyle}
                            className="d-block w-100"
                            src={item.img}
                            alt=""
                        />
                        <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">{item.title}</h3>
                        <p>{item.text}</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            );
        });
    }
    return(
        <MDBContainer>
        <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
        >
            <MDBCarouselInner>
                {renderItems()}
            </MDBCarouselInner>
        </MDBCarousel>
    </MDBContainer>);
}
