import React, { useContext } from "react";
import Empty from "../../components/Empty";
import { Context } from "../../lib/context";
import StepsMenu from "../../components/StepsMenu";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  color: #30475e;
  text-shadow: 2px 2px 2px white;
  h2 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.4rem;
    padding: 10px 0 50px 0;
  }
`;

const Payment = () => {
  const { cart } = useContext(Context);
  return (
    <Div>
      {cart.length === 0 ? (
        <Empty title="Cart" height="694px" />
      ) : (
        <StepsMenu />
      )}
    </Div>
  );
};

export default Payment;
