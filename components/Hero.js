import React from "react";
import styled from "styled-components";
import { Carousel } from "primereact/carousel";

const CarouselStyle = styled(Carousel)`
  height: 300px;
  max-width: 1116px;
`;

const Picture = styled.picture`
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  max-width: 1020px;
`;

const productTemplate = (bag) => (
  <Picture>
    <Image src={bag.image} alt="" />
  </Picture>
);

const Hero = () => {
  const carouselImg = [
    {
      image: "../images/welcome.png",
    },
    {
      image: "../images/fire-type.png",
    },
    {
      image: "../images/dragon-type.png",
    },
    {
      image: "../images/grass-type.png",
    },
    {
      image: "../images/water-type.png",
    },
    {
      image: "../images/fight-type.png",
    },
  ];
  return (
    <div>
      <CarouselStyle
        value={carouselImg}
        itemTemplate={productTemplate}
        circular
        autoplayInterval={3000}
        header={<h4>Trending</h4>}
      ></CarouselStyle>
    </div>
  );
};

export default Hero;
