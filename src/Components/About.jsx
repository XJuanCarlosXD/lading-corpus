import React from "react";

const About = (props) => {
  return (
    <div>
      <div
        className="flex lg:flex-row md:flex-row flex-col justify-between lg:p-36 p-8 shadow text-darkGray relative"
        id="about"
      >
        <div className="lg:w-custom w-full">
          <h2 className="font-extrabold lg:text-4xl md:text-2xl text-2xl">
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
          <img src="/images/Frame 23.png" alt="" />
        </div>
        <div className="flex justify-center items-center lg:relative md:relative absolute lg:z-10 -z-10 lg:opacity-100 md:opacity-100 opacity-25 lg:top-0 top-20">
          <img src="/images/Corpus-3.png" alt="corpus logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
