import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const Div = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 15px;

  h2 {
    font-size: 1.5rem;
    margin: 20px 0;
  }
`;

export const DivData = styled.div`
  @media (min-width: 425px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    label {
      margin: 0 5px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-center;
    flex-wrap: wrap;

    label {
      margin: 0 5px;
    }
  }
`;
