import React from "react";
import CotizacionComponent from "../Components/Cotizacion.tsx";

const Cotizacion = (props) => {
  return (
    <div className="relative">
      <div>
        <img
          className="w-full h-screen top-0 left-0 absolute -z-10"
          src="/images/colling.png"
          alt="logo_colling"
        />
      </div>
      <CotizacionComponent />
    </div>
  );
};

export default Cotizacion;
