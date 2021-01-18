import React from "react";
import Continent from "./Continent";
import styled from "styled-components";

const Div = styled.div`
  color: #30475e;
  width: 100%;
  height: 200px;
  text-shadow: 2px 2px 2px white;
  padding: 20px 0;
  h2 {
    font-size: 1.6rem;
  }
  p {
    margin-top: 20px;
    text-align: center;
    font-size: 0.95rem;
  }

  @media (min-width: 550px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 650px) {
    h2 {
      font-size: 3.5rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

const ContinentList = () => {
  const continentList = [
    {
      name: "Africa",
      img: "./images/africa.png",
      type: "fight",
      theme: {
        background: "#c03028",
        borderTop: "#f08030",
        borderBottom: "#484038",
      },
      dataGraph: {
        labels: ["spring", "summer", "fall", "winter"],
        datasets: [
          {
            label: "%",
            data: [10, 30, 20, 5],
            fill: false,
            borderColor: "#484038",
          },
        ],
      },
      reason:
        "Se considera al contienen africano como la cuna de la civilizacion humana, debido a evidencias arqueologicas, se cuenta que esta primera civilizacion humana desarrollo un fuerte lazo con los pokemons de tipo lucha, por lo que se puede decir que es un lazo que posee cada habitante del contienente con un pokemon de este tipo, ademas de poseer un clima mas tropical que estos pokemons encuentren este clima muy agradable",
    },
    {
      name: "America",
      img: "./images/america.png",
      type: "grass",
      theme: {
        background: "#78c850",
        borderTop: "#c0f860",
        borderBottom: "#588040",
      },
      dataGraph: {
        labels: ["spring", "summer", "fall", "winter"],
        datasets: [
          {
            label: "%",
            data: [40, 20, 16, 30],
            fill: false,
            borderColor: "#588040",
          },
        ],
      },
      reason:
        "Es un continente de gran extension que posee mayormente un clima tropical el cual beneficia a las plantas y pokemons tipo planta, se podria decir que son los que mas predominan por este contienente y se benefician por ambos lados, ayudando a los habitantes ademas de ayudar en mejorar la fauna y la vegetacion",
    },
    {
      name: "Antarctica",
      img: "./images/antartica.png",
      type: "ice",
      theme: {
        background: "#98d8d8",
        borderTop: "#d0f8e8",
        borderBottom: "#9090a0",
      },
      dataGraph: {
        labels: ["spring", "summer", "fall", "winter"],
        datasets: [
          {
            label: "%",
            data: [30, 35, 30, 40],
            fill: false,
            borderColor: "#807870",
          },
        ],
      },
      reason:
        "Debido a que es un continente cubierto de hielo, donde la flora y fauna esta compuesta solo por organismos adaptados a condiciones climaticas extremas los pokemon tipo Hielo se adecuan perfectamente para este lugar ayudando a lo que lo visitan debido a que no posee una poblacion permanente solo habitantes temporales.",
    },
    {
      name: "Asia",
      img: "./images/asia.png",
      type: "dragon",
      theme: {
        background: "#7038f8",
        borderTop: "#b8a0f8",
        borderBottom: "#483890",
      },
      dataGraph: {
        labels: ["spring", "summer", "fall", "winter"],
        datasets: [
          {
            label: "%",
            data: [30, 40, 30, 40],
            fill: false,
            borderColor: "#483890",
          },
        ],
      },
      reason:
        "Es el sitio que mayor poblacion que existe entre los otros continentes debido a las diversas criaturas legendarias de sus mitologias y folclore entre los mas populares se encuentran los dragones, por lo que cada habitante del contienete asiatico aspira a tener un dragon como acompañante de vida, algunos habitantes declaran haber visto por los cielos pokemons legendarios tipo dragon por lo que llama muchisimo mas su atencion tener uno de estos pokemons",
    },
    {
      name: "Europe",
      img: "./images/europe.png",
      type: "fire",
      theme: {
        background: "#f08030",
        borderTop: "#f8d030",
        borderBottom: "#c03028",
      },
      dataGraph: {
        labels: ["spring", "summer", "fall", "winter"],
        datasets: [
          {
            label: "%",
            data: [20, 30, 40, 40],
            fill: false,
            borderColor: "#c03028",
          },
        ],
      },
      reason:
        "El segundo continente mas pequeño, debido al clima variado que este posee actualmente en algunos sitios esta empezando a never o continua nevando por lo que la necesidad de tener pokemons de tipo fuego ha servido de gran ayuda para todos los habitates de este contienente y han logrado encontrar un sitio en europa",
    },
    {
      name: "Oceania",
      img: "./images/oceania.png",
      type: "water",
      theme: {
        background: "#6890f0",
        borderTop: "#98d8d8",
        borderBottom: "#807870",
      },
      dataGraph: {
        labels: ["spring", "summer", "fall", "winter"],
        datasets: [
          {
            label: "%",
            data: [20, 40, 30, 40],
            fill: false,
            borderColor: "#807870",
          },
        ],
      },
      reason:
        "Gracias a que es un contienete de menor tamaño, con respecto a los demas y tambien posee muchas islas, los pokemons de tipo agua pudieron encontrar un sitio entre los habitantes de oseania debido a que gracias a pertenecer a este elemento facilita mucho el transporte de islas ademas de rendir homenaje a su nombre que se bede a las hijas del oceano.",
    },
  ];
  return (
    <>
      <Div className="p-d-flex p-flex-column p-ai-center p-jc-center">
        <h2>TRENDING</h2>
        <p>
          En esta seccion podremos observar como fluctua la adquisicion de
          cierto tipos de pokemon en los continentes del mundo y su motivo,
          ademas de poder observar una grafica para que se pueda ver mejor la
          velocidad de crecimiento de estas especies.
        </p>
      </Div>
      <div className="p-grid p-justify-center">
        {continentList.map((continent, index) => (
          <Continent
            key={`${continent.name}-${index}`}
            continent={continent.name}
            img={continent.img}
            type={continent.type}
            theme={continent.theme}
            dataGraph={continent.dataGraph}
            reason={continent.reason}
          />
        ))}
      </div>
    </>
  );
};

export default ContinentList;
