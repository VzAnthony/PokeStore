import React from "react";
import PokemonFavList from "../../components/PokemonFavList";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  color: #30475e;
  text-shadow: 2px 2px 2px white;
  padding: 50px 0 0 0;
  h2 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.4rem;
    padding: 10px 0 50px 0;
  }
`;

const Favs = () => {
  return (
    <Div>
      <h2>FAVORITES</h2>
      <p>Aqui puedes observar tus pokemon favoritos </p>
      <PokemonFavList />
    </Div>
  );
};

export default Favs;
