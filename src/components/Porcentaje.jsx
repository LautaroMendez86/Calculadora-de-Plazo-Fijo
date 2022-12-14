import React, { useContext } from "react";
import { PlazoContext } from "./content/PlazoContent";

export const Porcentaje = () => {
  const { setPorcentaje } = useContext(PlazoContext);

  return (
    <>
      <div className="contenedor">
        <p>Interes anual (TNA)</p>
        <input
          type={"number"}
          min={1}
          placeholder="Ingrese el interes anual (TNA)"
          onChange={(e) => {
            setPorcentaje(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};
