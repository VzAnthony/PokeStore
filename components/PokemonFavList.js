import React from "react";
import useGetListLocalStorage from "../hooks/useGetListLocalStorage";
import PokemonFavItem from "./PokemonFavItem";

const PokemonFavList = () => {
  let data = useGetListLocalStorage() || [];
  const favList = Object.values(data);
  return (
    <div className="p-grid p-justify-center">
      {favList
        .filter((pokemon) => pokemon.fav === true)
        .map((pokemon) => (
          <PokemonFavItem pokemon={pokemon} />
        ))}
    </div>
  );
};

export default PokemonFavList;
