import React from "react";
import styled from "styled-components";
import { Button } from "primereact/button";

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <div>
      <Title>This is my new app</Title>
      <Button label="Prueba" />
    </div>
  );
};

export default Home;
