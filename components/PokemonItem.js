import React from "react";
import Link from "next/link";
import useLocalStorage from "../hooks/useLocalStorage";
import { Button } from "primereact/button";
import { CardStyled, Img } from "../styles/pokemonItemStyled";

const PokemonItem = ({ pokemon }) => {
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
    <CardStyled
      theme={{ themeFav: fav }}
      title={pokemon.name}
      subTitle="49.99 $"
      header={header(pokemon)}
      footer={footer(pokemon)}
    ></CardStyled>
  );
};

export default PokemonItem;
