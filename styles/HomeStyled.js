import styled from "styled-components";
import { AutoComplete } from "primereact/autocomplete";

export const AutoCompleteStyled = styled(AutoComplete)`
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;

  input {
    width: 80%;
    border-radius: 50px;
    padding: 10px 20px;
  }

  .p-autocomplete-panel {
    left: 0px !important;
  }
`;
