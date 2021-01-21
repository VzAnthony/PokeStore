import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: ${(props) => props.theme};
`;

const Empty = ({ title, height = 0 }) => {
  const theme = height;
  return (
    <Div theme={theme} className="p-d-flex p-jc-center p-ai-center">
      <p>{`${title} esta actualmente Vacio! 😔`}</p>
    </Div>
  );
};

export default Empty;
