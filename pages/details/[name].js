import React from "react";
import { useRouter } from "next/router";
import PokemonDetail from "../../components/PokemonDetails";

const Details = () => {
  const router = useRouter();
  const {
    query: { name },
  } = router;

  return (
    <div className="p-d-flex p-jc-center">
      <PokemonDetail pokemonName={name} />
    </div>
  );
};

export default Details;
