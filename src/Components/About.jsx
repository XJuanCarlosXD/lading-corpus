import React, { useState } from "react";

const About = (props) => {
  const listValores = [
    { name: "Integridad", icon: "people.svg" },
    { name: "Compromiso", icon: "hands.svg" },
    { name: "Honestidad", icon: "safe.svg" },
    { name: "Confidencialidad", icon: "cand.svg" },
    { name: "Disciplina", icon: "book.svg" },
    { name: "Profesionalidad", icon: "pseudo.svg" },
  ];
  const [active, setActive] = useState(false);
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
          <div className={`flex flex-col items-start gap-3 mt-8`}>
            <h2 className="font-bold font-poppins_regular lg:text-lg md:text-lg text-md truncate">
              Licencias y certificaciones
            </h2>
            <div
              className="flex gap-2 items-center hover:underline hover:text-blue-500 cursor-pointer"
              onClick={() => setActive(true)}
            >
              <i className="fa-solid fa-file-pdf text-red-500"></i>
              <p>permiso-de-la-superintendencia.pdf</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:relative md:relative absolute lg:z-10 -z-10 lg:opacity-100 md:opacity-100 opacity-25 lg:top-0 top-20">
          <img src="/images/Corpus-3.png" alt="corpus logo" />
        </div>
      </div>
      <div
        className={`fixed w-screen h-screen top-0 rounded-2xl transition-all ${
          active ? "scale-100 z-10 " : "scale-0 -z-30"
        }`}
      >
        <div
          className="absolute bg-black/60 w-full h-full"
          onClick={() => setActive(false)}
        />
        <div className="p-8 w-full h-full relative">
          <i
            className="fa-solid fa-xmark absolute text-white right-6 z-20 top-2 text-4xl cursor-pointer hover:text-red-500"
            onClick={() => setActive(false)}
          ></i>
          <iframe
            src="https://appbot.nyc3.digitaloceanspaces.com/corpus/CamScanner%2009-27-2024%2011.12.pdf"
            title="Lincencia"
            className="w-full h-full rounded-2xl shadow-lg relative z-10"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
