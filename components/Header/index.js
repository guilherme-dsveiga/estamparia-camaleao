/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Routes } from "../../routes";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <div className="shadow-md">
      <header className="flex justify-between bg-main-purple pr-7 text-white text-lg ">
        <div className="flex items-center">
          <div className="w-80 p-3 bg-white">
            <img
              src="./assets/camaleao-logo.png"
              alt="Logo da Estamparia Camaleão"
            ></img>
          </div>
          <nav className="flex justify-center items-center">
            <ul className="flex">
              {Routes.map((r, k) => (
                <li key={k} className={`${k === 0 ? "ml-10" : null} mr-10`}>
                  <Link href={r.route}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex justify-center items-center">
          <SearchBar />
        </div>
      </header>
    </div>
  );
};

export default Header;
