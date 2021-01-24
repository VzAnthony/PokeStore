import React from "react";
import useGetListLocalStorage from "../hooks/useGetListLocalStorage";
import Empty from "./Empty";
import PokemonFavItem from "./PokemonFavItem";

const PokemonFavList = () => {
  let data = useGetListLocalStorage() || [];
  const favList = Object.values(data);
  const favListTrue = favList.filter((pokemon) => pokemon.fav === true);
  return (
    <div className="p-grid p-justify-center ">
      {favListTrue.length === 0 ? (
        <Empty title="Favorites" height="532px" />
      ) : (
        favListTrue.map((pokemon, index) => (
          <PokemonFavItem pokemon={pokemon} key={`${pokemon.name}-${index}`} />
        ))
      )}
    </div>
  );
};

export default PokemonFavList;
