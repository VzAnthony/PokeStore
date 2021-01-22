import React, { useContext } from "react";
import { DataTableStyled } from "../styles/CartStyled";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Context } from "../lib/context";

const Cart = () => {
  const context = useContext(Context);
  const cart = context.cart.map((pokemon) => {
    return {
      name: pokemon.name,
      image: <img src={pokemon.sprites.front_default} alt={pokemon.name} />,
      price: "49.99$",
      delete: (
        <Button
          className="p-button-danger p-button-rounded"
          icon="pi pi-trash"
        />
      ),
    };
  });

  const total = cart.length * 49.99;
  return (
    <>
      <DataTableStyled
        header="Your Pokemon Cart"
        footer={`Total to pay : ${total} $`}
        value={cart}
      >
        <Column field="name" header="Name"></Column>
        <Column field="image" header="Image"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="delete" header="Delete"></Column>
      </DataTableStyled>
    </>
  );
};

export default Cart;
