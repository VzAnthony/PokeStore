import React from "react";
import useGetContienetList from "../hooks/useGetContinentList";
import Continent from "./Continent";

const ContinentList = () => {
  const continentList = useGetContienetList();
  return (
    <>
      <h2>TRENDING</h2>
      <p>
        En esta sección podremos observar como fluctúa la adquisición de cierto
        tipos de pokemons en los continentes del mundo y su motivo, ademas de
        una gráfica para que se pueda ver mejor la velocidad de crecimiento de
        estas especies.
      </p>
      <div className="p-grid p-justify-center">
        {continentList.map((continent, index) => (
          <Continent
            key={`${continent.name}-${index}`}
            continent={continent.name}
            img={continent.img}
            type={continent.type}
            theme={continent.theme}
            dataGraph={continent.dataGraph}
            reason={continent.reason}
          />
        ))}
      </div>
    </>
  );
};

export default ContinentList;
