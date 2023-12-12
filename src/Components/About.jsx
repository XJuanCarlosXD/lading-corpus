import React from "react";
import Tilty from "react-tilty";

const About = (props) => {
  const valores = [
    {
      title: "Innovación",
      subtitle:
        "Nos destacamos por nuestra constante búsqueda de nuevas ideas y enfoques creativos para superar los desafíos y ofrecer soluciones únicas.",
    },
    {
      title: "Excelencia",
      subtitle:
        "Nos comprometemos a mantener los más altos estándares de calidad en cada proyecto, desde el desarrollo de software hasta el diseño de páginas web, asegurando la satisfacción total del cliente.",
    },
    {
      title: "Compromiso",
      subtitle:
        "Nos dedicamos a entender las necesidades de nuestros clientes y a cumplir con nuestras promesas, construyendo relaciones sólidas basadas en la confianza y la transparencia.",
    },
    {
      title: "Colaboración",
      subtitle:
        "Fomentamos un ambiente de trabajo colaborativo, donde la diversidad de ideas y la cooperación son fundamentales para lograr resultados excepcionales.",
    },
    {
      title: "Ética",
      subtitle:
        "Operamos con integridad y ética en cada aspecto de nuestro trabajo, manteniendo la confianza de nuestros clientes y colegas como un valor fundamental.",
    },
  ];

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
          <p className="font-extralight mb-4 lg:text-md md:text-sm text-xs font-sanchez text-justify">
            Nuestra misión es ser líderes en la industria del desarrollo web y
            software, brindando soluciones innovadoras que transformen la
            experiencia digital de nuestros clientes. Nos comprometemos a
            ofrecer servicios de alta calidad, impulsados por la excelencia y la
            creatividad, para optimizar procesos, diseñar páginas web
            impactantes y superar las expectativas de nuestros usuarios.
            <br />
            <br />
            Buscamos ser reconocidos como la principal empresa de desarrollo web
            y software, destacando por nuestra capacidad para impulsar la
            innovación y la eficiencia. Nos esforzamos por ser un referente en
            la creación de soluciones tecnológicas vanguardistas que contribuyan
            al éxito y crecimiento sostenible de nuestros clientes en el mundo
            digital.
            <br />
            <br />
            Nuestros Valores:
          </p>
          <ValoresComponent valores={valores} />
        </div>
        <Tilty
          perspective={3000}
          className="flex flex-col justify-center items-center lg:relative md:relative absolute lg:z-10 -z-10 lg:opacity-100 md:opacity-100 opacity-25 lg:top-0 top-20 bg-green_logo rounded-full shadow-2xl shadow-blue_logo"
        >
          <div style={{ userSelect: "none" }}>
            <img
              src="/images/icono_info.png"
              className="py-0 lg:px-64"
              alt="corpus logo"
            />
            <h2 className="lg:text-6xl text-4xl text-white text-center">
              <span className=" font-stay">informatica CONSULTING</span> <br />{" "}
              ABREU Y PAULINO SRL
            </h2>
          </div>
        </Tilty>
      </div>
    </div>
  );
};

export default About;

const ValoresComponent = ({ valores }) => {
  return (
    <div className="grid grid-cols-2 gap-10 w-full">
      {valores.map((valor, index) => (
        <div
          key={index}
          className={`w-full flex flex-col justify-center items-center ${
            index === 4 &&
            "col-span-2 flex items-center justify-center text-center"
          }`}
        >
          <h3 className="bg-green_logo pt-1 px-6 custom-shadow shadow-lg text-white text-2xl mb-2 rounded-full">
            {valor.title}
          </h3>
          <p className="font-sanchez text-xs text-justify">{valor.subtitle}</p>
        </div>
      ))}
    </div>
  );
};
