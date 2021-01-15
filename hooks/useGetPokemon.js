import { gql, useQuery } from "@apollo/client";

const Pokemon = gql`
  query initialPokemon($name: String!) {
    pokemon(name: $name) {
      name
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export const useGetPokemon = (name = "charmander") => {
  const { loading, data } = useQuery(Pokemon, { variables: { name } });
  return [loading, data];
};
