import React from "react";
import { CardStyled } from "../styles/ContinentStyled";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Chart } from "primereact/chart";

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
