import React, { useState } from "react";
import Cart from "./Cart";
import PaymentForm from "./PaymentForm";
import { StepsStyled } from "../styles/StepsMenuStyled";

const StepsMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      label: "Cart",
    },
    {
      label: "Payment",
      template: <h2>adios</h2>,
    },
  ];
  return (
    <>
      <StepsStyled
        model={items}
        readOnly={false}
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e.index)}
      />
      {activeIndex === 0 && <Cart />}
      {activeIndex === 1 && <PaymentForm />}
    </>
  );
};

export default StepsMenu;
