import { gql, useQuery } from "@apollo/client";

const Pokemon = gql`
  query initialPokemon($name: String!) {
    pokemon(name: $name) {
      name
      height
      weight
      abilities {
        ability {
          name
          url
        }
      }
      sprites {
        front_default
        front_female
        back_default
        back_female
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export const useGetPokemon = (name) => {
  const { loading, data } = useQuery(Pokemon, { variables: { name } });
  return [loading, data];
};
