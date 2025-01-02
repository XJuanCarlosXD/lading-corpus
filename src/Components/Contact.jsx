import React from "react";

const Contact = (props) => {
  const listContac = [
    {
      name: "Santo Domingo, R.D.",
      sub: "Corpus Security",
      icon: "location.svg",
    },
    { name: "(809) 581-6733", sub: "Número de Teléfono", icon: "phone.svg" },
    { name: "Horario", sub: "Lun-Vier 9am - 6pm", icon: "clock.svg" },
  ];
  return (
    <div>
      <div className="lg:p-36 md:p-36 p-8 lg:pt-24 md:pt-24 pt-12 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-2">
          <h2 className="font-bold font-poppins text-md md:text-2xl lg:text-4xl">
            Contáctanos
          </h2>
          <div className="border border-lightGray lg:mb-4 md:mb-4  lg:w-28 md:w-26 w-16 lg:mt-2 md:mt-2 mt-1" />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:mb-4 md:mb-4 mb-2 lg:gap-0 md:gap-2 gap-2 md:place-items-center lg:place-items-center w-full">
          {listContac.map((row, index) => (
            <div key={index} className="flex flex-row gap-2 items-center">
              <img
                key={index}
                src={"/images/" + row.icon}
                className={`w-10 border-dashed border border-lightGray ${
                  index === 0 && "pl-2 pr-0"
                } p-1`}
                alt={row.icon}
              />
              <div>
                <p className="text-xs text-lightGray font-normal">{row.sub}</p>
                <h2 className="text-darkGray text-sm font-normal font-poppins_regular leading-relaxed">
                  {row.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full lg:flex-row md:flex-row flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="block py-2.5 ps-6 pe-0 w-full text-sm text-darkGray bg-transparent border-0 border-b border-lightGray appearance-none focus:outline-none focus:ring-0 focus:border-darkGray peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute lg:text-sm md:text-sm text-xs text-darkGray font-bold italic duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:start-2 peer-focus:start-0 peer-focus:text-lightGray  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto capitalize"
              >
                Nombre Completo
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="block py-2.5 ps-6 pe-0 w-full text-sm text-darkGray bg-transparent border-0 border-b border-lightGray appearance-none focus:outline-none focus:ring-0 focus:border-darkGray peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute lg:text-sm md:text-sm text-xs text-darkGray font-bold italic duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:start-2 peer-focus:start-0 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto capitalize"
              >
                Correo electrónico
              </label>
            </div>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                className="block py-2.5 ps-6 pe-0 w-full text-sm text-darkGray bg-transparent border-0 border-b border-lightGray appearance-none focus:outline-none focus:ring-0 focus:border-darkGray peer"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="absolute lg:text-sm md:text-sm text-xs text-darkGray font-bold italic duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:start-2 peer-focus:start-0 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto capitalize"
              >
                Teléfono
              </label>
            </div>
          </div>
          <div className="w-full mt-7">
            <textarea
              title="Comentario"
              className="block w-full h-28 p-2 text-sm text-gray-900 border-b border border-lightGray bg-gray-50 focus:border-darkGray"
            />
          </div>
        </div>
        <div className="pt-4 w-full flex justify-end items-end">
          <button
            className="bg-darkGray text-white uppercase font-bold py-2 px-6 rounded-full text-sm"
            type="button"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
