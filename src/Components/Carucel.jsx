import React from "react";
import { Link } from "react-router-dom";

const Carucel = (props) => {
  return (
    <div>
      <div className="relative" id="home">
        <img
          src="/images/peakpx.jpg"
          alt="carusel"
          className="w-full h-screen brightness-50"
        />
        <div className="absolute lg:top-10 top-0 lg:p-20 p-8 text-white ">
          <h2 className="lg:text-8xl text-4xl">
            Somos{" "}
            <span className="text-green_logo font-stay">
              informatica CONSULTING
            </span>{" "}
            <br /> ABREU Y PAULINO SRL
          </h2>
          <p className="uppercase font-sanchez bg-blue_logo p-1 px-6 rounded-full font-bold w-80 text-center">
            sistematizando tus ideas
          </p>
          <div className="border-b border-white lg:pt-4 pt-2 lg:w-80 w-56" />
          <p className="font-extralight font-mono lg:w-custom_lg lg:text-xl text-xs lg:pt-6 pt-2 lg:mb-6 mb-4 text-justify">
            Una empresa especializada en el desarrollo web y de software que se
            dedica a ofrecer soluciones innovadoras para mejorar procesos y
            diseñar páginas web. Su enfoque está en proporcionar servicios que
            optimicen la eficiencia y brinden soluciones creativas para clientes
            empresariales, individuales y proyectos de diseño web.
          </p>
          <Link
            className="uppercase font-extrabold text-darkGray bg-white lg:p-3 p-1.5 rounded-full lg:px-8 px-4 text-2xl "
            to={"/contiza"}
          >
            Cotizar
          </Link>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 my-4 flex flex-row">
          <div className="border border-white rounded-full lg:px-4 md:px-3 px-2 lg:p-1 md:p-1 p-0.5">
            <div className="bg-blue_logo lg:w-3 md:w-2 w-1 lg:h-3 md:h-2 h-1 rounded-full cursor-pointer" />
          </div>
          <div className="rounded-full lg:px-4 md:px-3 px-2 lg:p-1 md:p-1 p-0.5">
            <div className="bg-blue_logo  lg:w-3 md:w-2 w-1 lg:h-3 md:h-2 h-1 rounded-full cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carucel;
