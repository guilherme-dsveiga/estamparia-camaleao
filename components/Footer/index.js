import React from "react";

const Footer = () => {
  return (
    <footer className="bg-main-purple px-20 py-8 text-white">
      <nav className="flex w-[60%] items-center  pb-14">
        <ul className="flex justify-between w-full">
          <li>Sobre</li>
          <li>Fale conosco</li>
          <li>Receba novidades e promoções</li>
        </ul>
      </nav>
      <div className="flex justify-between items-center pt-14 ">
        <address>Endereço XXXXXXXXXX</address>
        <div>
          <ul className="flex gap-5">
            <li className="w-[45px] h-[45px] bg-white rounded-full"></li>
            <li className="w-[45px] h-[45px] bg-white rounded-full"></li>
            <li className="w-[45px] h-[45px] bg-white rounded-full"></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
