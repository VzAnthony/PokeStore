import React from "react";
import Link from "next/link";
import { useGetPokemonList } from "../hooks/useGetPokemonList";
import { Card } from "primereact/card";
import { Skeleton } from "primereact/skeleton";
import { Button } from "primereact/button";
import styled from "styled-components";

const CardStyled = styled(Card)`
  max-width: 180px;
  width: 100%;
  text-align: center;
  margin: 10px;
  box-shadow: 3px 3px 5px 6px #ccc;
  border: 1px solid #ddd;

  &&:hover {
    transition: 0.5s;
    border: solid 1px grey;
    box-shadow: 3px 3px 5px 6px grey;
  }
`;

const ButtonStyle = styled(Button)`
  width: 80px;
`;

const Img = styled.img`
  cursor: pointer;
`;

const PokemonList = () => {
  const [loading, pokemonList] = useGetPokemonList();
  if (loading) {
    return (
      <div className="p-grid p-justify-center">
        <Card>
          <Skeleton width="50px" height="50px" />
        </Card>
      </div>
    );
  }
  let {
    pokemons: { results: pokemonNames },
  } = pokemonList;

  let headerCard = (pokemon) => {
    return (
      <Link href={`../details/${pokemon.name}`}>
        <Img src={pokemon.image} alt={pokemon.name} />
      </Link>
    );
  };

  const footerCard = (pokemon) => {
    return (
      <div className="p-d-flex p-jc-between p-ai-center">
        <Link href={`../details/${pokemon.name}`}>
          <ButtonStyle label="Details" className="p-button-raised-info " />
        </Link>
        <Button
          className="p-button-rounded p-button-warning p-button-outlined"
          icon="pi pi-star-o"
        />
      </div>
    );
  };

  return (
    <div className="p-grid">
      {pokemonNames.map((pokemon) => (
        <>
          <CardStyled
            title={pokemon.name}
            subTitle="49.99 $"
            header={headerCard(pokemon)}
            footer={footerCard(pokemon)}
          ></CardStyled>
        </>
      ))}
    </div>
  );
};

export default PokemonList;
