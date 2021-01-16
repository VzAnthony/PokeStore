import React from "react";
import { useGetPokemon } from "../hooks/useGetPokemon";
import Hero from "../components/Hero";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [loading, initialPokemon] = useGetPokemon("bulbasaur");
  if (!loading) {
  }

  return (
    <div>
      <Hero />
      <PokemonList />
    </div>
  );
};

export default Home;
