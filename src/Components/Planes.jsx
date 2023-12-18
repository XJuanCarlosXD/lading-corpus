import React from "react";
import { Link } from "react-router-dom";

const Planes = (props) => {
  const planList = [
    {
      name: "PLAN BASICO \n + PLUS ONE",
      sub: `4 cameras de vigilancia IP \n DVR 1TR \n Logística de monitoreo 24h \n Unidad de reacción`,
    },
    {
      name: "PLAN INTERMEDIO \n + PLUS ONE",
      sub: `8 cameras de vigilancia IP \n DVR 2TR \n Logística de monitoreo 24h \n Unidad de reacción`,
    },
    {
      name: "PLAN AVANZADO \n + PLUS ONE",
      sub: `12 cameras de vigilancia IP \n DVR 4TR \n Logística de monitoreo 24h \n Controles de Acceso y alarma \n Unidad de reacción `,
    },
    {
      name: "PLAN Custom \n + PLUS ONE",
      sub: `(N/D) cameras de vigilancia IP \n DVR (N/D) \n Logística de monitoreo 24h \n Controles de Acceso y alarma (N/D) \n Unidad de reacción `,
    },
  ];
  const animalList = [
    {
      name: "Chimpancé ",
      sub: "Es un agente de seguridad de categoría amateur, conocimientos básico de defensa, habilidad en manejo de armas no letales.",
    },
    {
      name: "ORANGUTÁN ",
      sub: "Es un agente de seguridad de categoría experimentado, conocimiento en defensa, habilidad en manejo de armas letales y no letales.",
    },
    {
      name: "gorila",
      sub: "Es un agente de seguridad de categoría avanzada, fornido, con conocimiento en defensa, e inteligencia, manejo de armas letales.",
    },
  ];
  return (
    <div>
      <div
        className="shadow bg-stone-50 flex flex-col justify-center items-center lg:gap-4 md:gap-3 gap-0 w-full text-darkGray lg:p-24 pt-16"
        id="planes"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold font-poppins text-md md:text-2xl lg:text-4xl">
            Planes de Vigilancia y Monitoreo
          </h2>
          <div className="border-b border-lightGray lg:w-96 w-64 mt-2" />
        </div>
        <div className="grid grid-cols-2 md:flex lg:flex justify-center items-start lg:gap-4 md:gap-3 gap-2 w-full lg:p-4 md:p-4 p-8">
          {planList.map((row, index) => (
            <div className="w-full lg:w-80" key={index}>
              <div className="h-20 md:h-32 lg:h-36 bg-darkGray flex justify-center items-center text-center uppercase">
                <h4 className="text-white font-bold text-sm md:text-md lg:text-md font-poppins">
                  {row.name.split("\n").map((paragraph, pIndex) => (
                    <React.Fragment key={pIndex}>
                      {paragraph}
                      <div />
                    </React.Fragment>
                  ))}
                </h4>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 shadow p-4 bg-white h-full md:h-72 lg:h-64">
                <div className="lg:text-sm md:text-sm text-xs font-extralight leading-7">
                  {row.sub.split("\n").map((paragraph, pIndex) => (
                    <React.Fragment key={pIndex}>
                      {paragraph}
                      <div />
                    </React.Fragment>
                  ))}
                </div>
                <div className="text-center flex justify-center items-end w-full h-full">
                  <Link
                    to={"/contiza"}
                    className="border border-darkGray p-0.5 px-4 lg:p-1.5 lg:px-8 rounded-full text-center font-bold uppercase lg:text-sm md:text-sm text-xs"
                  >
                    Cotizar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-32">
          <h2 className="font-bold font-poppins text-md md:text-2xl lg:text-4xl">
            Planes de Agentes de Seguridad Privada
          </h2>
          <div className="border-b border-lightGray lg:w-96 w-64 mt-2" />
        </div>
        <div className="grid grid-cols-2 md:flex lg:flex justify-center items-start lg:gap-4 md:gap-3 gap-2 lg:p-4 md:p-4 p-8 w-full">
          {animalList.map((row, index) => (
            <div className="w-full lg:w-80" key={index}>
              <div className="h-20 md:h-32 lg:h-36 bg-darkGray flex justify-center items-center text-center uppercase">
                <h4 className="text-white font-bold text-sm md:text-md lg:text-md font-poppins">
                  {row.name.split("\n").map((paragraph, pIndex) => (
                    <React.Fragment key={pIndex}>
                      {paragraph}
                      <div />
                    </React.Fragment>
                  ))}
                </h4>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 shadow p-4 bg-white h-72 lg:h-64 text-center">
                <div className="lg:text-sm md:text-sm text-xs font-extralight leading-7">
                  {row.sub.split("\n").map((paragraph, pIndex) => (
                    <React.Fragment key={pIndex}>
                      {paragraph}
                      <div />
                    </React.Fragment>
                  ))}
                </div>
                <div className="text-center flex justify-center items-end w-full h-full">
                  <Link
                    to={"/contiza"}
                    className="border border-darkGray p-0.5 px-4 lg:p-1.5 lg:px-8 rounded-full text-center font-bold uppercase lg:text-sm md:text-sm text-xs"
                  >
                    Cotizar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planes;
