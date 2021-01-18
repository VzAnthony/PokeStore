import React from "react";
import Link from "next/link";
import useLocalStorage from "../hooks/useLocalStorage";
import { Button } from "primereact/button";
import { CardStyled, Img } from "../styles/pokemonItemStyled";

import styled from "styled-components";

const CardFavStyled = styled(CardStyled)`
  border-color: ${(props) => props.theme.themeFav && "#FBC02D"};
  box-shadow: 3px 3px 5px 6px
    ${(props) => (props.theme.themeFav ? "#ffff9e" : "#ccc")};
  &&:hover {
    box-shadow: 3px 3px 5px 6px
      ${(props) => (props.theme.themeFav ? "#ffff24" : "grey")};
    border-color: ${(props) => props.theme.themeFav && "#FBC02D"};
  }
`;

const PokemonFavItem = ({ pokemon }) => {
  const key = `fav-${pokemon.name}`;

  const [fav, setFav] = useLocalStorage(key, false);

  const header = (pokemon) => {
    return (
      <Link href={`../details/${pokemon.name}`}>
        <Img src={pokemon.image} alt={pokemon.name} />
      </Link>
    );
  };

  const footer = (pokemon) => {
    return (
      <div className="p-d-flex p-jc-between p-ai-center">
        <Link href={`../details/${pokemon.name}`}>
          <Button label="Details" className="p-button-raised-info " />
        </Link>
        <Button
          className="p-button-rounded p-button-warning p-button-outlined"
          icon={`pi ${fav ? "pi-star" : "pi-star-o"}`}
          onClick={() => setFav(!fav, pokemon)}
        />
      </div>
    );
  };

  return (
    <CardFavStyled
      theme={{ themeFav: fav }}
      title={pokemon.name}
      subTitle="49.99 $"
      header={header(pokemon)}
      footer={footer(pokemon)}
    ></CardFavStyled>
  );
};

export default PokemonFavItem;
