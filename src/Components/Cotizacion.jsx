import React from "react";

const CotizacionComponent = () => {
  return (
    <div>
      <div className="p-36 pt-16">
        <div className="card p-10 bg-white rounded-lg flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="font-extrabold text-md md:text-2xl lg:text-4xl">
              Cotizar Servicio de Seguridad Privada
            </h2>
            <div className="border-b border-lightGray lg:w-96 w-64 mt-2" />
          </div>
          <form className="flex flex-row justify-center items-center w-full gap-3">
            <input
              className="py-3 px-8 shadow-md shadow-slate-400 rounded-full w-full placeholder:font-normal placeholder:italic"
              type="text"
              name="sevice"
              placeholder="Elige un servicio"
            />
            <input
              className="py-3 px-4 w-36 shadow-md shadow-slate-400 rounded-full placeholder:font-normal placeholder:italic"
              type="text"
              name="ctpersona"
              placeholder="Cant. Personas"
            />
            <input
              className="py-3 px-8 shadow-md shadow-slate-400 rounded-full w-full placeholder:font-normal placeholder:italic"
              type="date"
              name="date"
              placeholder="Fecha de Servicio"
            />
            <button
              type="submit"
              className="bg-darkGray text-white p-1.5 px-6  rounded-2xl m-0 font-bold text-center uppercase"
            >
              cotizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CotizacionComponent;
