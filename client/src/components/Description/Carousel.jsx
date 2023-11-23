import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyCarousel.css";

function MyCarousel() {
  useEffect(() => {
    const carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach((item) => {
      item.style.transitionDuration = "2s";
    });
  }, []);
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 full-height-image carousel-item"
          src="/Images/Carousel1.png"
          alt="Creams"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 full-height-image carousel-item"
          src="/Images/Carousel2.png"
          alt="Serums"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 full-height-image carousel-item"
          src="/Images/Carousel3.png"
          alt="Model"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default MyCarousel;
