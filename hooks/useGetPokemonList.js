import { gql, useQuery } from "@apollo/client";

const ListPokemon = gql`
  query listPokemon {
    pokemons {
      nextOffset
      prevOffset
      results {
        name
        image
      }
    }
  }
`;

export const useGetPokemonList = () => {
  const { loading, data } = useQuery(ListPokemon);
  return [loading, data];
};
