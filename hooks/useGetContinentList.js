function useGetContienetList() {
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
        "Se le considera al continente africano como la cuna de la civilización humana, debido a evidencias arqueológicas, se cuenta que esta primera civilización humana desarrollo un fuerte lazo con los pokemons de tipo lucha, por lo que se puede decir que es un lazo que posee cada habitante del continente con un pokemon de este tipo, ademas de poseer un clima más tropical que estos pokemons encuentren este clima muy agradable.",
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
        "Es un continente de gran extensión que posee mayormente un clima tropical el cual beneficia a las plantas y pokemons tipo planta, se podría decir que son los que más predominan por este continente y se benefician por ambos lados, ayudando a los habitantes ademas de ayudar en mejorar la fauna y la vegetación.",
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
        "Debido a que es un continente cubierto de hielo, donde la flora y fauna está compuesta solo por organismos adaptados a condiciones climáticas extremas los pokemons tipo Hielo se adecúan perfectamente para este lugar ayudando a lo que lo visitan debido a que no posee una población permanente solo habitantes temporales.",
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
        "Es el sitio que mayor población que existe entre los otros continentes debido a las diversas criaturas legendarias de sus mitologías y folclore entre los más populares se encuentran los dragones, por lo que cada habitante del continente asiático aspira a tener un dragón como acompañante de vida, algunos habitantes declaran haber visto por los cielos pokemons legendarios tipo dragón por lo que llama muchísimo más su atención tener uno de estos pokemons.",
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
        "El segundo continente más pequeño, debido al clima variado que este posee actualmente en algunos sitios está empezando a nevar o continúa nevando por lo que la necesidad de tener pokemons de tipo fuego ha servido de gran ayuda para todos los habitantes de este continente y han logrado encontrar un sitio en Europa.",
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
        "Gracias a que es un continente de menor tamaño, con respecto a los demás y también posee muchas islas, los pokemons de tipo agua pudieron encontrar un sitio entre los habitantes de Oceanía debido a que gracias a pertenecer a este elemento facilita mucho el transporte de islas ademas de rendir homenaje a su nombre que se debe a las hijas del océano.",
    },
  ];
  return continentList;
}

export default useGetContienetList;
