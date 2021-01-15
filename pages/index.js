import React from "react";
import { useGetPokemon } from "../hooks/useGetPokemon";
import Hero from "../components/Hero";

const Home = () => {
  const [loading, initialPokemon] = useGetPokemon("bulbasaur");
  if (!loading) {
    console.log(initialPokemon.pokemon);
  }

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
