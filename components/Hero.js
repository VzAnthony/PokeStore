import React from "react";
import styled from "styled-components";
import { Carousel } from "primereact/carousel";

const CarouselStyle = styled(Carousel)`
  height: 300px;
  max-width: 1116px;
  min-width: 320px;
  width: 100%;
  background-color: #30475e;
  margin: 0 0 20px 0;
  box-shadow: inset 0 0 10px #f05454;
  border: 1px solid #222831;

  && .p-carousel-header {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
    color: #dddddd;
  }

  && .carousel-items-content {
    width: 100%;
    background: black;
  }

  && .carousel-items-content ..carousel-items-container .p-carousel-item {
    width: 1020px;
  }
`;

const Span = styled.span`
  display: block;
  width: inherit;
  height: 200px;
  min-width: 100px;
  max-width: 1020px;
  background: blue;
`;
const quizTemplate = (bag) => <Span>{bag.type}</Span>;

const Hero = () => {
  const carouselImg = [
    {
      // image: "../images/welcome.png",
      type: "welcome",
    },
    {
      // image: "../images/fire-type.png",
      type: "fire",
    },
    {
      // image: "../images/dragon-type.png",
      type: "grass",
    },
    {
      // image: "../images/grass-type.png",
      type: "water",
    },
    {
      // image: "../images/water-type.png",
      type: "fight",
    },
    {
      // image: "../images/fight-type.png",
      type: "dragon",
    },
  ];
  return (
    <div className="p-d-flex p-jc-center">
      <CarouselStyle
        value={carouselImg}
        itemTemplate={quizTemplate}
        header={<h4>TRENDING</h4>}
      />
    </div>
  );
};

export default Hero;
