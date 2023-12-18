import React from "react";

const About = (props) => {
  const listValores = [
    { name: "Integridad", icon: "people.svg" },
    { name: "Compromiso", icon: "hands.svg" },
    { name: "Honestidad", icon: "safe.svg" },
    { name: "Confidencialidad", icon: "cand.svg" },
    { name: "Disciplina", icon: "book.svg" },
    { name: "Profesionalidad", icon: "pseudo.svg" },
  ];
  return (
    <div>
      <div
        className="flex lg:flex-row md:flex-row flex-col justify-between lg:p-36 p-8 shadow text-darkGray relative"
        id="about"
      >
        <div className="lg:w-custom w-full">
          <h2 className="font-bold font-poppins lg:text-4xl md:text-2xl text-2xl">
            Sobre Nosotros
          </h2>
          <div className="border border-lightGray mb-4 w-28 mt-2" />
          <p className="font-extralight mb-4 lg:text-md md:text-sm text-xs">
            Nuestra misión consiste en proteger, vigilar y custodiar mediante
            servicios integrales, a todas las entidades físicas y/o jurídicas
            que nos contraten para resguardar los intereses particulares de
            nuestros clientes.
            <br />
            <br />
            Nuestra visión es ser una empresa referencia en la protección y
            custodia de entidades privadas, en toda la Región del Caribe.
            <br />
            <br />
            Nuestros Valores:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {listValores.map((row, index) => (
              <div key={index} className={`flex flex-row items-center gap-3 `}>
                <img
                  src={`images/${row.icon}`}
                  alt="corpus logo"
                  className={`border-dashed border-lightGray border lg:w-12 md:w-12 lg:h-12 md:h-12 w-8 h-8  ${
                    index === 5 && "py-0 px-0"
                  } lg:p-2 md:p-2 p-1`}
                />
                <h2 className="font-bold font-poppins_regular lg:text-lg md:text-lg text-md truncate">
                  {row.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center lg:relative md:relative absolute lg:z-10 -z-10 lg:opacity-100 md:opacity-100 opacity-25 lg:top-0 top-20">
          <img src="/images/Corpus-3.png" alt="corpus logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
