import React from "react";

const Footer = (props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full bg-darkGray text-white">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center lg:p-16 md:p-16 p-8 w-full gap-6">
          <div className="flex flex-col justify-start items-start lg:w-custom">
            <h2 className="font-extrabold text-xl">Sobre Nosotros</h2>
            <p className="lg:text-lg md:text-md text-xs font-extralight">
              Nuestra misión consiste en proteger, vigilar y custodiar mediante
              servicios integrales, a todas las entidades físicas y/o jurídicas
              que nos contraten para resguardar los intereses particulares de
              nuestros clientes.
            </p>
          </div>
          <div className="w-full">
            <div className="lg:text-lg md:text-md text-xs">
              Planes <div className="border-b border-black my-2" />
              Servicios <div className="border-b border-black my-2" />
              Nosotros
            </div>
          </div>
          <div className="w-full lg:w-custom">
            <h2 className="font-extrabold text-xl">Subscribete</h2>
            <p className="lg:text-lg md:text-md text-xs">
              Subscribete a nuestro newsletter y mantente al tanto de ofertas
            </p>
            <div className="relative w-full lg:px-2 md:px-2 mt-4 lg:pr-0 md:pr-0 pr-24">
              <input
                type="email"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-darkGray bg-gray-50 rounded-e-lg border-none rounded-s-2 rounded-l-full focus:border-none"
                placeholder="Search"
              />
              <button
                type="button"
                className="absolute top-0 end-0 lg:translate-x-7 md:translate-x-7 -translate-x-16 p-2.5 px-3 h-full text-sm font-medium text-white bg-lightGray rounded-e-lg  rounded-r-full"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="border-b border-black w-10/12" />
        <div className="flex justify-between items-center p-4 px-16 w-full">
          <p>© 2023 Corpus Security</p>
          <div className="text-lightGray flex gap-2">
            <i className="fa-brands fa-facebook cursor-pointer"></i>
            <i className="fa-brands fa-twitter cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
