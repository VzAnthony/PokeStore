import styled from "styled-components";
import { Carousel } from "primereact/carousel";

export const CarouselStyle = styled(Carousel)`
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

  && .carousel-items-content .carousel-items-container .p-carousel-item {
    width: 1020px;
  }
`;

export const Span = styled.span`
  display: block;
  width: inherit;
  height: 200px;
  min-width: 100px;
  max-width: 1020px;
  cursor: pointer;

  .welcome {
    display: block;
    height: inherit;
    background: url("../images/welcome.png") center no-repeat;
  }

  .fire {
    display: block;
    height: inherit;
    background: url("../images/fire-type.png") center no-repeat;
  }

  .water {
    display: block;
    height: inherit;
    background: url("../images/water-type.png") center no-repeat;
  }

  .fight {
    display: block;
    height: inherit;
    background: url("../images/fight-type.png") center no-repeat;
  }

  .dragon {
    display: block;
    height: inherit;
    background: url("../images/dragon-type.png") center no-repeat;
  }

  .grass {
    display: block;
    height: inherit;
    background: url("../images/grass-type.png") center no-repeat;
  }

  .ice {
    display: block;
    height: inherit;
    background: url("../images/ice-type.png") center no-repeat;
  }

  @media (max-width: 650px) {
    .welcome {
      background-size: 500px 200px;
    }

    .fire {
      background-size: 560px 200px;
    }

    .water {
      background-size: 560px 200px;
    }

    .fight {
      background-size: 560px 200px;
    }

    .dragon {
      background-size: 560px 200px;
    }

    .grass {
      background-size: 560px 200px;
    }

    .ice {
      background-size: 560px 200px;
    }
  }
`;
