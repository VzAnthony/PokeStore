import React from "react";
import PokemonItem from "./PokemonItem";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="p-grid p-justify-center">
      {pokemonList.map((pokemon, index) => (
        <PokemonItem
          key={`${pokemon.name}-${index}`}
          pokemon={pokemon}
        ></PokemonItem>
      ))}
    </div>
  );
};

export default PokemonList;
