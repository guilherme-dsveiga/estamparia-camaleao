import React from "react";
import Link from "next/link";
import { Routes } from "../../routes";

const Footer = () => {
  const goTo = (url) => {
    document.location.href = url;
  };

  return (
    <footer className="bg-main-purple px-20 py-8 text-white">
      <nav className="flex lg:w-[60%] items-center  md:pb-14">
        <ul className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-between w-full">
          {Routes.map((r, k) => (
            <li
              key={k}
              className={`${k === 0 ? "md:ml-10" : null} md:mr-10 text-center`}
            >
              <Link href={r.route}>{r.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex md:justify-between justify-center text-center md:text-left gap-3 flex-col md:flex-row items-center md:pt-14 pt-6 ">
        <div>
          <address className="not-italic">
            Rua Heitor Penteado, 22 - Santos
          </address>
          <p>contato@estampariacamaleao.com.br</p>
          <p>Telefone: 13 13 99117-6391</p>
        </div>

        <div>
          <ul className="flex gap-5">
            <li
              className="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center text-black text-2xl cursor-pointer hover:bg-gray-300 transition-all ease-in-out"
              onClick={() =>
                goTo("https://www.instagram.com/camaleao_estamparia/")
              }
            >
              <i className="fab fa-instagram"></i>
            </li>
            <li
              className="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center text-black text-2xl cursor-pointer hover:bg-gray-300 transition-all ease-in-out"
              onClick={() =>
                goTo(
                  "https://www.facebook.com/Camaleão-Estamparia-107513878527067"
                )
              }
            >
              <i className="fab fa-facebook-f"></i>
            </li>
            <li className="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center text-black text-2xl cursor-pointer hover:bg-gray-300 transition-all ease-in-out">
              <i className="fab fa-whatsapp"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
