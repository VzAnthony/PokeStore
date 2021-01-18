import React from "react";
import { useGetPokemonList } from "../hooks/useGetPokemonList";
import PokemonItem from "./PokemonItem";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";

const PokemonList = () => {
  const [loading, pokemonList] = useGetPokemonList();
  if (loading) {
    return (
      <div className="p-grid p-justify-center">
        <Card>
          <Skeleton width="50px" height="50px" />
        </Card>
      </div>
    );
  }
  let {
    pokemons: { results: pokemonsData },
  } = pokemonList;

  return (
    <div className="p-grid p-justify-center">
      {pokemonsData.map((pokemon, index) => (
        <PokemonItem
          key={`${pokemon.name}-${index}`}
          pokemon={pokemon}
        ></PokemonItem>
      ))}
    </div>
  );
};

export default PokemonList;
