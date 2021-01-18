import React, { useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Context } from "../../lib/context";
import styled from "styled-components";

const DataTableStyled = styled(DataTable)`
  .p-datatable-header {
    text-align: center;
  }

  .p-datatable-thead tr th {
    text-align: center;
  }

  .p-datatable-tbody tr td {
    text-align: center;
    vertical-align: middle;
    text-transform: capitalize;
  }

  .p-datatable-footer {
    text-align: center;
  }
`;

const Cart = () => {
  const context = useContext(Context);

  console.log(context);

  const cart = context.cart.map((pokemon) => {
    return {
      name: pokemon.name,
      image: <img src={pokemon.sprites.front_default} alt={pokemon.name} />,
      price: "49.99$",
      type: pokemon.types.map((data) => data.type.name),
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
        <Column field="type" header="Type"></Column>
        <Column field="delete" header="Delete"></Column>
      </DataTableStyled>
    </>
  );
};

export default Cart;
