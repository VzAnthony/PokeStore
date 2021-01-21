import React, { useState, useContext, useRef } from "react";
import Loading from "./Loading";
import Link from "next/link";
import { useGetPokemon } from "../hooks/useGetPokemon";
import { Context } from "../lib/context";

import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { Toast } from "primereact/toast";
import {
  CardStyled,
  DivContainer,
  Div,
  DivList,
} from "../styles/pokemonStyled";

const PokemonDetail = ({ pokemonName }) => {
  const toast = useRef(null);
  const context = useContext(Context);
  const [gender, setGender] = useState(false);
  const [loading, { pokemon } = {}] = useGetPokemon(pokemonName);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Added to cart",
      detail: "SUCCESS",
      life: 2000,
    });
  };

  if (loading) {
    return <Loading />;
  }

  let header = (
    <DivContainer className="p-d-flex p-jc-center">
      <Div>
        <Link href="../">
          <Button
            label="Back"
            icon="pi pi-chevron-left"
            className="p-button-secondary p-button-text"
          />
        </Link>
        <h2>Front</h2>
        <img
          src={
            gender
              ? `${pokemon.sprites.front_female}`
              : `${pokemon.sprites.front_default}`
          }
          alt={`${pokemon.name} sprite`}
        />
      </Div>
      <Div>
        <h2>Back</h2>
        <img
          src={
            gender
              ? `${pokemon.sprites.back_female}`
              : `${pokemon.sprites.back_default}`
          }
          alt={`${pokemon.name} sprite`}
        />
      </Div>
    </DivContainer>
  );

  const footer = (
    <div className="p-grid">
      <div className="p-d-flex p-flex-column p-ai-center p-col-12 p-sm-12 p-md-6 p-lg-6">
        <h3>{gender ? "Female" : "Male"}</h3>
        <InputSwitch
          checked={gender}
          onChange={(e) => pokemon.sprites.front_female && setGender(e.value)}
          tooltip="Solo estara disponible, si existe alguna diferencia visual entre generos"
        />
      </div>
      <div className="p-d-flex p-jc-center p-col-12 p-sm-12 p-md-6 p-lg-6">
        <Toast ref={toast} />
        <Button
          label="add to cart"
          icon="pi pi-shopping-cart"
          iconPos="left"
          className="p-button-raised p-button-success"
          onClick={() => {
            context.addCart(pokemon);
            showSuccess();
          }}
        />
      </div>
    </div>
  );

  const types = (
    <div className="p-d-flex p-jc-center">
      {pokemon.types.map(({ type }, index) => (
        <p key={`${type.name}-${index}`} className={`type ${type.name}`}>
          {type.name}
        </p>
      ))}
    </div>
  );
  return (
    <>
      <CardStyled
        title={pokemon.name}
        subTitle={types}
        header={header}
        footer={footer}
      >
        <DivList className="p-grid ">
          <p className="p-col-12 p-sm-12 p-md-6 p-lg-6">
            Height : {pokemon.height}
          </p>
          <p className="p-col-12 p-sm-12 p-md-6 p-lg-6">
            Weight : {pokemon.weight}
          </p>
        </DivList>

        <DivList className="p-d-flex p-flex-column p-ai-center">
          <h3>Abilities</h3>
          <ul className="p-grid">
            {pokemon.abilities.map(({ ability }, index) => (
              <li
                key={`${ability.name}-${index}`}
                className="p-col-12 p-sm-12 p-md-6 p-lg-6"
              >
                <p>{ability.name}</p>
              </li>
            ))}
          </ul>
        </DivList>
      </CardStyled>
    </>
  );
};

export default PokemonDetail;
