import React from "react";

const Service = (props) => {
  const listService = [
    {
      name: "Seguridad",
      img: "/images/seguri.png",
      text: `Seguridad Física \n
    Seguridad Institucional \n
    Seguridad para Eventos`,
    },
    {
      name: "Escolta",
      img: "/images/escolta.png",
      text: `Escolta y patrullaje \n
    Transportación y custodia de valores.`,
    },
    {
      name: "Vigilacia",
      img: "/images/vigilacia.png",
      text: `Alarmas y control de accesos \n
    Vigilancia a través de circuito cerrado de cámaras`,
    },
  ];
  return (
    <div>
      <div className="w-full bg-darkGray lg:p-36 md:p-32 p-8 flex flex-col justify-center items-center text-white">
        <div className="flex flex-col justify-center items-center lg:mb-10 mb-5">
          <h2 className="font-extrabold text-md md:text-2xl lg:text-4xl">
            Nuestros Servicios
          </h2>
          <div className="border-b border-white lg:w-2/6 w-8/12 mt-2" />
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-4 justify-center content-center">
          {listService.map((row, index) => (
            <div
              className="flex justify-start flex-col lg:gap-4 md:gap-3 gap-2 w-full"
              key={index}
            >
              <div>
                <img src={row.img} alt={row.name} className="w-96 h-52" />
              </div>
              <h4 className="text-lightGray font-bold text-xl">{row.name}</h4>
              <div className="lg:text-sm md:text-sm text-xs font-extralight">
                {row.text.split("\n").map((paragraph, pIndex) => (
                  <React.Fragment key={pIndex}>
                    {paragraph}
                    <div />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
