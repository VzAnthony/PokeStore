import styled from "styled-components";
import { Card } from "primereact/card";

export const CardStyled = styled(Card)`
  position: relative;
  width: 100%;
  max-width: 50%;
  min-width: 300px;
  box-shadow: 3px 3px 5px 6px grey;
  margin: 40px 10px;
  border-radius: 10px;
  border: 3px solid #ddd;

  .p-card-title {
    text-align: center;
    text-transform: capitalize;
  }

  .p-card-content {
    padding-top: 0;
  }

  .p-card-subtitle .type {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #ddd;
    text-transform: capitalize;
    color: white;
    width: 50px;
    height: 22px;
    box-shadow: 0 8px 6px -7px grey;
    text-shadow: 0 1px 1px #807870;
  }

  .p-card-subtitle .fire {
    background-color: #f08030;
    border-top-color: #f8d030;
    border-bottom-color: #c03028;
  }

  .p-card-subtitle .normal {
    background-color: #a8a878;
    border-top-color: #d8d8d0;
    border-bottom-color: #705848;
    width: 65px;
  }

  .p-card-subtitle .water {
    background-color: #6890f0;
    border-top-color: #98d8d8;
    border-bottom-color: #807870;
  }

  .p-card-subtitle .grass {
    background-color: #78c850;
    border-top-color: #c0f860;
    border-bottom-color: #588040;
  }

  .p-card-subtitle .electric {
    background-color: #f8d030;
    border-top-color: #f8f878;
    border-bottom-color: #b8a038;
    width: 60px;
  }

  .p-card-subtitle .ice {
    background-color: #98d8d8;
    border-top-color: #d0f8e8;
    border-bottom-color: #9090a0;
  }

  .p-card-subtitle .fighting {
    background-color: #c03028;
    border-top-color: #f08030;
    border-bottom-color: #484038;
    width: 75px;
  }

  .p-card-subtitle .poison {
    background-color: #a040a0;
    border-top-color: #d880b8;
    border-bottom-color: #483850;
    width: 60px;
  }

  .p-card-subtitle .ground {
    background-color: #e0c068;
    border-top-color: #f8f878;
    border-bottom-color: #886830;
    width: 65px;
  }

  .p-card-subtitle .flying {
    background-color: #a890f0;
    border-top-color: #c8c0f8;
    border-bottom-color: #705898;
    width: 55px;
  }

  .p-card-subtitle .psychic {
    background-color: #f85888;
    border-top-color: #f8c0b0;
    border-bottom-color: #789010;
    width: 65px;
  }

  .p-card-subtitle .bug {
    background-color: #a8b820;
    border-top-color: #d8e030;
    border-bottom-color: #a8b820;
  }

  .p-card-subtitle .rock {
    background-color: #b8a038;
    border-top-color: #e0c068;
    border-bottom-color: #886830;
  }

  .p-card-subtitle .ghost {
    background-color: #705898;
    border-top-color: #a890f0;
    border-bottom-color: #483850;
    width: 55px;
  }

  .p-card-subtitle .dark {
    background-color: #705848;
    border-top-color: #a8a878;
    border-bottom-color: #484038;
  }

  .p-card-subtitle .dragon {
    background-color: #7038f8;
    border-top-color: #b8a0f8;
    border-bottom-color: #483890;
    width: 65px;
  }

  .p-card-subtitle .steel {
    background-color: #b8b8d0;
    border-top-color: #d8d8c0;
    border-bottom-color: #807870;
  }

  .p-card-subtitle .fairy {
    background-color: #f0b6bc;
    border-top-color: #f5cad1;
    border-bottom-color: #905f63;
  }
`;

export const DivContainer = styled.div`
  border-bottom: 1px solid #dddddd;

  && h2 {
    margin-top: 40px;
    font-weight: bold;
    text-align: center;
    color: #30475e;
  }

  button {
    position: absolute;
  }
`;

export const Div = styled.div`
  width: 100%;
`;

export const DivList = styled.div`
  font-size: 1.5rem;
  border-bottom: 1px solid #ddd;
  padding: 15px 5px;
  text-align: center;

  ul {
    margin-top: 15px;
    width: 100%;
  }

  ul li {
    position: relative;
  }

  ul li::before {
    content: "›";
    position: absolute;
    left: 8%;
    color: #f05454;
  }
`;
