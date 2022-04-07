/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Routes } from "../../routes";
import SearchBar from "../SearchBar";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <div className="shadow-md">
      <header
        className={`flex ${
          isMobile ? "justify-center" : "justify-between pr-7"
        } bg-main-purple  text-white text-lg `}
      >
        <div className="flex items-center w-full justify-between">
          <div className="w-80 p-3 bg-white">
            <img
              src="./assets/camaleao-logo.png"
              alt="Logo da Estamparia Camaleão"
            ></img>
          </div>
          {!isMobile ? (
            <nav className="flex justify-center items-center w-full">
              <ul className="flex">
                {Routes.map((r, k) => (
                  <li
                    key={k}
                    className={`${k === 0 ? "ml-10" : null} mr-10 text-center`}
                  >
                    <Link href={r.route}>{r.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </header>
    </div>
  );
};

export default Header;
