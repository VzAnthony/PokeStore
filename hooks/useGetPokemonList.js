import { gql, useQuery } from "@apollo/client";

//Limite de pokemons es de 988 de ahi se acaban los sprites
const ListPokemon = gql`
  query listPokemon($startNumber: Int!) {
    pokemons(limit: 251, offset: $startNumber) {
      nextOffset
      prevOffset
      results {
        name
        image
      }
    }
  }
`;

export const useGetPokemonList = (startNumber) => {
  const { loading, data } = useQuery(ListPokemon, {
    variables: { startNumber },
  });
  return [loading, data];
};
