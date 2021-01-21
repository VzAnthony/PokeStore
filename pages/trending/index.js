import React from "react";
import ContinentList from "../../components/ContinentList";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  color: #30475e;
  text-shadow: 2px 2px 2px white;
  padding: 50px 0 0 0;
  h2 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.4rem;
    padding: 10px 0 50px 0;
  }
`;

const Trending = () => {
  return (
    <Div>
      <ContinentList />
    </Div>
  );
};

export default Trending;
