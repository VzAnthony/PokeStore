import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import styled from "styled-components";

const Div = styled.div`
  height: 500px;
`;

const quiz = () => {
  return (
    <Div className="p-d-flex p-flex-column p-jc-center p-ai-center">
      <h2>Loading...</h2>
      <ProgressSpinner strokeWidth="4" />
    </Div>
  );
};

export default quiz;
