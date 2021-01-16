import React from "react";
import { Card } from "primereact/card";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Chart } from "primereact/chart";
import styled from "styled-components";

const CardStyled = styled(Card)`
  max-width: 500px;
  margin: 20px;
  box-shadow: 3px 3px 5px 6px #ccc;
  border: 4px solid #ccc;
  border-radius: 10px;

  background: ${(props) => props.theme.background};
  border-top-color: ${(props) => props.theme.borderTop};
  border-bottom-color: ${(props) => props.theme.borderBottom};
  border-left-color: ${(props) => props.theme.borderTop};
  border-right-color: ${(props) => props.theme.borderBottom};
  box-shadow: 3px 3px 5px 6px ${(props) => props.theme.borderTop};

  .p-card-header {
    padding: 10px;
  }

  .p-card-body {
    text-align: center;
    color: white;
  }

  .p-card-title {
    color: white;
    text-shadow: 0 2px 1px black;
    font-weight: bold;
  }
  .p-card-subtitle {
    color: white;
    text-shadow: 0 2px 1px black;
    text-transform: capitalize;
  }

  .p-card-content {
    background: ${(props) => props.theme.borderTop};
    border-radius: 10px;
    padding: 1rem 5px;
    box-shadow: inset 0 0 10px ${(props) => props.theme.borderBottom};
  }
`;

const Continent = ({ continent, img, type, theme, dataGraph, reason }) => {
  const header = <img src={img} alt="" />;

  const footer = (
    <Accordion>
      <AccordionTab header="Reason">{reason}</AccordionTab>
    </Accordion>
  );

  return (
    <CardStyled
      title={continent}
      subTitle={type}
      header={header}
      footer={footer}
      theme={theme}
      className="p-col-12 p-sm-12 p-md-4 p-lg-3 "
    >
      <Chart type="line" data={dataGraph} />
    </CardStyled>
  );
};

export default Continent;
