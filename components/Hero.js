import React from "react";
import Link from "next/link";
import { CarouselStyle, Span } from "../styles/HeroStyled";

const quizTemplate = (bag) => (
  <Link href="../trending">
    <Span>
      <span className={bag.type}></span>
    </Span>
  </Link>
);

const Hero = () => {
  const carouselImg = [
    {
      type: "welcome",
    },
    {
      type: "fire",
    },
    {
      type: "grass",
    },
    {
      type: "water",
    },
    {
      type: "fight",
    },
    {
      type: "dragon",
    },
    {
      type: "ice",
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
