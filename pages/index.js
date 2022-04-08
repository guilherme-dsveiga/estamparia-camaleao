/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductBanner from "../components/ProductBanner";
import { productsBanner } from "../lib/productsBanner";
import { goTo } from "../hooks";

export default function Home() {
  return (
    <div className="font-roboto">
      <Head>
        <title>Home - Estamparia Camaleão</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative">
        <div className="w-full min-h-[384px] flex justify-center relative">
          <div className="flex items-center justify-between px-14 w-full max-w-[1400px]">
            <div className="md:w-1/2 flex justify-center items-center md:block flex-col">
              <h1 className="text-main-purple text-3xl font-bold mb-2 text-center md:text-left">
                Voce tem a ideia, nós cuidamos das cores!
              </h1>
              <p className="text-lg font-medium mb-2 text-center md:text-left">
                Produtos personalizados para você,
                <br />
                sua empresa, seu evento, sua marca e muito mais!
              </p>
              <button className="px-12 py-1 bg-main-purple rounded-md text-white text-lg text-center md:text-left">
                Faça um orçamento
              </button>
            </div>
            <div className="absolute bottom-0 right-0 -z-10 hidden md:block">
              <img
                className="h-full"
                src="./assets/home-banner.png"
                alt="Camiseta"
              ></img>
            </div>
            <div className="absolute bottom-0  left-0 -z-10 opacity-25 w-[330px] hidden md:block">
              <img
                className="w-full"
                src="./assets/camaleao-solo.png"
                alt="Camaleão"
              ></img>
            </div>
          </div>
        </div>
        <div className="py-5 md:py-20 flex gap-5 md:gap-2 flex-col md:flex-row md:px-0 px-5   justify-center items-center max-w-[1400px] mx-auto">
          <div className="basis-full">
            <img
              src="./assets/camaleao-home.png"
              alt="Logo da empresa Camaleão na frente do local da empresa, com efeito de blur"
            ></img>
          </div>
          <div className="basis-full">
            <h2 className="text-2xl font-bold text-main-purple">Quem somos?</h2>
            <div className="text-sm">
              <p>
                A Camaleão Estamparia, chegou em Santos no ano de 2022 para
                entregar um produto de extrema qualidade com serviço rápido e
                personalizado para você ou para sua empresa.
              </p>
              <br />
              <p>
                Com profissionais especializados e muito comprometimento com
                nossos clientes, suprimos sua demanda e garantimos sua
                satisfação, além de oferecermos a melhor experiência possível
                desde o atendimento até a entrega do produto.
              </p>
              <br />
              <p>Nossos diferenciais:</p>
              <br />
              <ul className="list-disc list-inside">
                <li>Entrega Rápida</li>
                <li>Excelentes Profissionais</li>
                <li>Impressão Digital direta no tecido</li>
                <li>Tecido 100% algodão Premium</li>
                <li>Equipe de suporte de Arte</li>
                <li>Variedade de cores e modelos</li>
                <li>Atendimento Personalizado</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-20">
          <h2 className="text-[40px] text-main-purple font-bold mb-10">
            Como comprar?
          </h2>
          <div className="flex justify-center items-center reg:gap-5 flex-col reg:flex-row">
            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400  flex justify-center items-center">
                <img
                  src="./assets/shirt-icon.svg"
                  alt="Icone de camiseta"
                ></img>
              </div>
              <p className="text-center text-main-lime-green font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-80px] reg:left-0 reg:right-0 reg:mx-auto">
                Escolha o modelo
                <br /> e a cor da camiseta
              </p>
            </div>

            <i className="fas fa-arrow-down mb-4 reg:mb-0 reg:-rotate-90 text-4xl"></i>

            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400  flex justify-center items-center">
                <img
                  src="./assets/art-icon.svg"
                  alt="Icone de paleta de tinta"
                ></img>
              </div>
              <p className="text-center text-main-lime-green font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-80px] reg:left-0 reg:right-0 reg:mx-auto">
                Envie a imagem
                <br /> a ser estampada
              </p>
            </div>

            <i className="fas fa-arrow-down mb-4 reg:mb-0 reg:-rotate-90 text-4xl"></i>

            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400  flex justify-center items-center">
                <img
                  src="./assets/resize-icon.svg"
                  alt="Icone de aumentar/diminuir imagem"
                ></img>
              </div>
              <p className="text-center text-main-lime-green font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-80px] reg:left-0 reg:right-0 reg:mx-auto">
                Escolha
                <br /> o posicionamento
                <br /> da imagem
              </p>
            </div>

            <i className="fas fa-arrow-down mb-4 reg:mb-0 reg:-rotate-90 text-4xl"></i>

            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400  flex justify-center items-center">
                <img src="./assets/coins-icon.svg" alt="Icone de moedas"></img>
              </div>
              <p className="text-center text-main-lime-green font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-80px] reg:left-0 reg:right-0 reg:mx-auto">
                Defina a
                <br /> quantidade
              </p>
            </div>

            <i className="fas fa-arrow-down mb-4 reg:mb-0 reg:-rotate-90 text-4xl"></i>

            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400 flex justify-center items-center">
                <img
                  src="./assets/happy-icon.svg"
                  alt="Icone de pessoa feliz"
                ></img>
              </div>
              <p className="text-center text-main-lime-green font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-80px] reg:left-0 reg:right-0 reg:mx-auto">
                Agora é só
                <br /> aproveitar!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-5 md:px-20 pt-20">
          <h2 className="text-main-purple font-bold text-[40px] mb-10 text-center">
            Perguntas Frequentes
          </h2>
          <div className="flex gap-14 md:flex-row flex-col max-w-none md:max-w-4xl">
            <ul className="flex flex-col gap-10 text-sm text-center">
              <li className="basis-full">
                <h4 className="text-lg font-bold text-main-purple mb-1">
                  Existe alguma quantidade minima?
                </h4>
                <p>Não! O pedido mínimo para produção é de uma unidade</p>
              </li>
              <li className="basis-full">
                <h4 className="text-lg font-bold text-main-purple mb-1">
                  Posso levar minha camisetas para estampar?
                </h4>
                <p>
                  Sim, sua camiseta sendo feita de algodão nós conseguimos
                  estampar.
                </p>
              </li>
              <li className="basis-full">
                <h4 className="text-lg font-bold text-main-purple mb-1">
                  Posso estampar qualquer imagem na camiseta?
                </h4>
                <p>
                  Sim, é possível estampar qualquer imagem desde que tendo
                  qualidade e tamanho para impressão.
                </p>
              </li>
              <li className="basis-full">
                <h4 className="text-lg font-bold text-main-purple mb-1">
                  Como faço para fazer um orçamento?
                </h4>
                <p>
                  Para fazer um orçamento é muito simples, é preciso apenas
                  enviar a quantidade e modelo das camisetas, Além da arte e
                  posicionamento da estampa.
                </p>
              </li>
            </ul>
            <ul className="flex flex-col gap-10 text-sm text-center">
              <li className="basis-full">
                <h4 className="text-lg font-bold text-main-purple mb-1">
                  Vocês enviam para todo Brasil?
                </h4>
                <p>Sim! Podemos enviar seu pedido para todo Brasil.</p>
              </li>
              <li className="basis-full">
                <h4 className="text-lg font-bold text-main-purple mb-1">
                  Como envio meu logotipo?
                </h4>
                <p>É possível enviar por e-mail ou por WhatsApp</p>
              </li>
              <li className="basis-full">
                <h4 className="text-lg font-bold text-main-purple mb-1">
                  Posso comprar camisetas de cores diferentes para minha
                  empresa?
                </h4>
                <p>
                  Sim! Você pode escolher cores diferentes de nosso catálogo e
                  variar entre elas em seu pedido.
                </p>
              </li>

              <li className="basis-full">
                <h4 className="text-lg font-bold text-main-purple mb-1">
                  Tenho uma ideia de estampa mas não consigo desenhar, vocês
                  conseguem me ajudar?
                </h4>
                <p>
                  Sim! Temos uma equipe de ilustradores aptos para tirar sua
                  idéia do papel e virar uma camiseta incrível.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-14 md:flex-row flex-col justify-center items-center my-20">
          <div className="w-[372px] h-[372px] bg-[url(/assets/resting-men.png)] inside-container-text-shadow text-center font-extrabold shadow-lg shadow-zinc-400 text-[40px] text-white flex justify-center items-center">
            SEM PEDIDO MÍNIMO
          </div>
          <div className="w-[372px] h-[372px] bg-[url(/assets/printer.png)] text-[40px] inside-container-text-shadow font-extrabold shadow-lg shadow-zinc-400 text-white flex justify-center items-center">
            IMPRESSÃO DTG
          </div>
        </div>
        {/*(<div>
          <h2 className="text-main-purple font-bold text-[40px] mb-10 text-center">
            Faça um orçamento
          </h2>
          <div className="w-full h-[450px] bg-gray-400"></div>
        </div>*/}
        <div className="fixed right-5 bottom-5 w-14 cursor-pointer hidden md:block">
          <img
            className="w-full"
            src="./assets/whatsapp-floating-icon.png"
            alt="Icone do Whatsapp"
            onClick={() => goTo("http://wa.me/5513991176391")}
          ></img>
        </div>
      </main>

      <Footer />
    </div>
  );
}
