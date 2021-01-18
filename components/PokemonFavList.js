import React from "react";
import useGetListLocalStorage from "../hooks/useGetListLocalStorage";

const PokemonFavList = () => {
  let data = useGetListLocalStorage() || [];
  const favList = Object.values(data);
  console.log(favList);

  return <div>esta es la lista</div>;
};

export default PokemonFavList;
