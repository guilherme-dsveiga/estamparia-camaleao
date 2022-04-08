import React from "react";
import Link from "next/link";
import { Routes } from "../../routes";
import { goTo } from "../../hooks";

const Footer = () => {
  return (
    <footer className="bg-main-purple px-20 py-8 text-white flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
      <nav className="flex  items-center">
        <ul className="flex flex-col gap-1 justify-center items-center md:items-start md:justify-between text-left">
          {Routes.map((r, k) => (
            <li key={k}>
              <Link href={r.route}>{r.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-center items-center flex-col ">
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
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
