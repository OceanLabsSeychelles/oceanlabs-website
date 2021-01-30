import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BrettsCarousel(props) {
    function renderItems() {
        return props.data.map((item, index) => {
            return (
                <Carousel.Item key={index} interval={2000}>
                    <img className="carouselImage" src={item.img} alt={item.alt} />
                    <Carousel.Caption>
                        <h3>{item.heading}</h3>
                        <p>{item.paragraph}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });
    }
    return <Carousel>{renderItems()}</Carousel>;
}
