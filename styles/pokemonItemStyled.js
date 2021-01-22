import styled from "styled-components";
import { Card } from "primereact/card";

export const CardStyled = styled(Card)`
  max-width: 180px;
  width: 100%;
  text-align: center;
  margin: 10px;
  box-shadow: 3px 3px 5px 6px #ccc;
  border: 1.5px solid #ddd;
  border-radius: 10px;
  text-transform: capitalize;

  &&:hover {
    transition: 0.5s;
    border: solid 1.5px grey;
    box-shadow: 3px 3px 5px 6px grey;
  }

  border-color: ${(props) => props.theme.themeFav && "#FBC02D"};
  box-shadow: 3px 3px 5px 6px
    ${(props) => (props.theme.themeFav ? "#ffff9e" : "#ccc")};
  &&:hover {
    box-shadow: 3px 3px 5px 6px
      ${(props) => (props.theme.themeFav ? "#ffff24" : "grey")};
    border-color: ${(props) => props.theme.themeFav && "#FBC02D"};
  }
`;

export const Img = styled.img`
  cursor: pointer;
`;
