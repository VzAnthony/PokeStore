import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";

const Title = styled.h1`
  color: red;
`;

const Newbutton = styled(Button)`
  color: white;
  width: 500px;
  background: crimson;

  &&:hover {
    background: black;
  }
`;

const Home = () => {
  const [checked1, setChecked1] = useState(false);
  return (
    <div>
      <Title>This is my new app</Title>
      <Newbutton label="Submit" />
      <h1>basic</h1>
      <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
    </div>
  );
};

export default Home;
