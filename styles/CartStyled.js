import styled from "styled-components";
import { DataTable } from "primereact/datatable";

export const DataTableStyled = styled(DataTable)`
  .p-datatable-header {
    text-align: center;
  }

  .p-datatable-thead tr th {
    text-align: center;
  }

  .p-datatable-tbody tr td {
    text-align: center;
    vertical-align: middle;
    text-transform: capitalize;
  }

  .p-datatable-footer {
    text-align: center;
  }
`;
