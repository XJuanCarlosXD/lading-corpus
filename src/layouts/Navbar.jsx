import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = (props) => {
  const Menulist = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Servicios", href: "#planes" },
    { name: "Contacto", href: "#contact" },
    { name: "Cotizar", href: "/contiza" },
  ];
  return (
    <div>
      <div className="flex flex-col relative h-full">
        <div className="flex justify-between row-auto shadow lg:p-3 md:p-2 relative top-0 bg-white group">
          <div className="logo">
            <img src="/images/Corpus-1.png" alt="logo" className="w-full" />
          </div>
          <div className="lg:hidden md:hidden flex justify-center items-center px-4 text-4xl shadow">
            <i className="fas fa-bars"></i>
          </div>
          <nav className="menu flex lg:flex-row md:flex-row flex-col lg:justify-end lg:items-center md:justify-end md:items-center lg:gap-10 md:gap-5 gap-2 lg:text-sm font-bold text-gray lg:relative md:relative absolute right-0 z-10 bg-white lg:p-0 md:p-0 lg:pt-0 md:pt-0 pt-2 b-0 p-4 w-full lg:scale-100 md:scale-100 scale-0 group-hover:scale-100 transition-all">
            {Menulist.map((row, index) => (
              <Link
                key={index}
                href={row.href}
                to={row.href}
                className={`lg:border-none md:border-none border-b border-darkGray mt-2 ${
                  row.name === "Cotizar" &&
                  "bg-darkGray text-white p-1.5 px-6 uppercase rounded-2xl m-0 font-bold text-center"
                }`}
              >
                {row.name}
              </Link>
            ))}
          </nav>
        </div>

        <section>
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
