import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Loading from "../components/Loading";
import { useGetPokemonList } from "../hooks/useGetPokemonList";
import { AutoCompleteStyled } from "../styles/HomeStyled";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState(null);
  const [loading, pokemonList] = useGetPokemonList(0);

  const { pokemons: { results: pokemonsData } = [] } = pokemonList || {};

  const searchPokemon = (e) => {
    setTimeout(() => {
      let filteredPokemon;
      if (!e.query.trim().length) {
        filteredPokemon = [...pokemonsData];
      } else {
        filteredPokemon = pokemonsData.filter((pokemon) => {
          return pokemon.name.toLowerCase().startsWith(e.query.toLowerCase());
        });
      }
      setFilteredList(filteredPokemon);
    }, 250);
  };

  function toggle(data) {
    if (typeof data === "string") {
      return (
        <PokemonList
          pokemonList={pokemonsData.filter((pokemon) =>
            pokemon.name.startsWith(data)
          )}
        />
      );
    } else {
      return (
        <PokemonList
          pokemonList={pokemonsData.filter((pokemon) => pokemon === data)}
        />
      );
    }
  }

  return (
    <div>
      <AutoCompleteStyled
        value={search}
        suggestions={filteredList}
        field="name"
        completeMethod={searchPokemon}
        onChange={(e) => setSearch(e.value)}
        placeholder="Find your Pokemon"
      />
      {loading ? <Loading /> : toggle(search)}
    </div>
  );
};

export default Home;
