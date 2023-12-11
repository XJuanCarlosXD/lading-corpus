import React from "react";
import { Link } from "react-router-dom";

const Carucel = (props) => {
  return (
    <div>
      <div className="relative" id="home">
        <img
          src="/images/image_inicio1.png"
          alt="carusel"
          className="w-full h-72 lg:h-custom"
        />
        <div className="absolute lg:top-10 top-0 lg:p-20 p-8 text-white ">
          <h2 className="lg:text-6xl text-4xl">
            Somos <span className="text-lightGray font-bold">Corpus</span>{" "}
            <br /> Security
          </h2>
          <div className="border-b border-white lg:pt-4 pt-2 w-56" />
          <p className="font-extralight lg:w-custom lg:text-sm text-xs lg:pt-6 pt-2 lg:mb-6 mb-4">
            Una empresa de seguridad privada que ofrece servicios integrales de
            protección a empresas, personas, eventos, condominios y residencias,
            como también la vigilancia para tener un perímetro y ambiente
            controlado.
          </p>
          <Link
            className="uppercase font-extrabold text-darkGray bg-white lg:p-3 p-1.5 rounded-full lg:px-8 px-4 lg:text-md text-xs"
            to={"/contiza"}
          >
            Cotizar
          </Link>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 my-4 flex flex-row">
          <div className="border border-white rounded-full lg:px-4 md:px-3 px-2 lg:p-1 md:p-1 p-0.5">
            <div className="bg-lightGray lg:w-3 md:w-2 w-1 lg:h-3 md:h-2 h-1 rounded-full cursor-pointer" />
          </div>
          <div className="rounded-full lg:px-4 md:px-3 px-2 lg:p-1 md:p-1 p-0.5">
            <div className="bg-lightGray  lg:w-3 md:w-2 w-1 lg:h-3 md:h-2 h-1 rounded-full cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carucel;
