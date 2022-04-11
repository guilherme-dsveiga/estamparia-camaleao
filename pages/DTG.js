/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { goTo } from "../hooks";

const DTG = () => {
  return (
    <div>
      <Head>
        <title>DTG - Estamparia Camaleão</title>
      </Head>
      <Header />
      <main>
        <div className="w-full min-h-[250px] md:min-h-[384px] flex justify-center relative md:mt-20">
          <div className="flex items-center justify-end px-14 w-full max-w-[1400px]">
            <div className="md:w-1/2 flex justify-center items-center md:block flex-col">
              <h1 className="text-main-purple text-3xl font-bold mb-2 text-center md:text-left">
                Voce tem a ideia, nós cuidamos das cores!
              </h1>
              <button className="px-12 py-1 bg-main-purple rounded-md text-white text-lg text-center md:text-left">
                Faça um orçamento
              </button>
            </div>
            <div className="absolute bottom-0 top-0 left-0 -z-10 hidden md:block">
              <img
                className="w-full"
                src="./assets/dtg-banner.png"
                alt="Impressora"
              ></img>
            </div>
          </div>
        </div>
        <div className="py-5 md:py-20 flex gap-5 md:gap-2 flex-col md:flex-row md:px-0 px-5 items-center  max-w-[1200px] mx-auto">
          <div className="md:mr-5">
            <img
              className="md:w-[400px] w-[350px] max-w-none"
              src="./assets/dtg-shirt.png"
              alt="Logo da empresa Camaleão na frente do local da empresa, com efeito de blur"
            ></img>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-main-purple mb-5 md:mb-0">
              Quem somos?
            </h2>
            <div className="text-sm">
              <p>
                Silk Digital ou DTG é o método de impressão, onde a tinta é
                aplicada por uma impressora, diretamente no tecido. Trata-se de
                uma excelente evolução tecnológica para o mercado de estamparia,
                pois dessa maneira, conseguimos imprimir imagens com diversas
                variações de cores nos tecidos, basta escolher a estampa que
                deseja e com poucos cliques a imagem é impressa na camiseta como
                num passe de mágicas.
              </p>
              <br />
              <p>
                Sim, passe de mágicas, há alguns anos atrás, seria impossível
                fazer esse processo de impressão digital diretamente no tecido.
                Os métodos anteriores a esse utilizados na indústria de
                estamparia eram: em primeiro lugar a Serigrafia (popularmente
                conhecida como Silk Screen), onde a tinta é aplicada diretamente
                no tecido, porém precisa fazer um processo de separação de cores
                em programas de edição gráfica e revelar uma matriz serigráfica
                para cada cor da estampa.
              </p>
              <br />
              <p>
                Posteriormente vieram os transfers, que também é impressão
                digital, mas utiliza materiais que são impressos ou recortados e
                transferidos para os tecidos por meio de prensas térmicas.
              </p>
              <br />
              <p>
                O Silk Digital é a junção de todas essas soluções anteriores,
                porém com a qualidade e o toque suave da tinta aplicada direto
                no tecido de algodão, resultado que antes, era possível somente
                com a Serigrafia. Além disso, ainda temos a qualidade da
                impressão digital, reproduzindo a imagem da maneira que vemos na
                tela do computador ou smartphone (claro que com algumas
                variações de tons).
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-14 mb-20 mt-20 md:my-0">
          <div className="bg-[url(../public/assets/dtg-square-1.png)] w-[225px] h-[225px] bg-center bg-cover text-center flex justify-center items-center text-white font-bold text-4xl">
            SILK
            <br /> SCREEN
          </div>

          <i className="fas fa-plus text-lg"></i>

          <div className="bg-[url(../public/assets/dtg-square-2.png)] w-[225px] h-[225px] bg-center bg-cover rounded-lg text-center flex justify-center items-center text-white font-bold text-4xl">
            TRANSFER
            <br /> DIGITAL
          </div>

          <i className="fas fa-equals text-lg"></i>

          <div className="bg-[url(../public/assets/dtg-square-3.png)] w-[225px] h-[225px] bg-center bg-cover rounded-lg text-center flex justify-center items-center text-white font-bold text-4xl">
            SILK
            <br /> DIGITAL
          </div>
        </div>
        <div className="py-5 md:py-20 flex gap-5 md:justify-between items-center flex-col-reverse md:flex-row-reverse md:px-0 px-5  max-w-[1200px] mx-auto">
          <div>
            <img
              className="md:w-[400px] w-[350px] max-w-none"
              src="./assets/dtg-stampmaker.png"
              alt="Logo da empresa Camaleão na frente do local da empresa, com efeito de blur"
            ></img>
          </div>
          <div className="flex flex-col max-w-[600px]">
            <h2 className="text-2xl font-bold text-main-purple mb-5 md:mb-0">
              IMPRESSÃO DIGITAL EM CAMISETAS
            </h2>
            <div className="text-sm">
              <p>
                A Impressão digital em camisetas, veio para facilitar o processo
                de personalização e elevar a qualidade oferecida para o Varejo.
              </p>
              <br />
              <p>
                É o tipo de estampa recomendada em casos onde é preciso fazer
                uma estampa por camiseta.
              </p>
              <br />
              <p>
                Exemplo disso são pessoas que estão empreendendo e montando suas
                marcas de roupas ou simplesmente querendo montar um estilo
                próprio.
              </p>
              <br />
              <p>
                As nossas estampas em Silk Digital são aplicadas por maquinário
                com tecnologia de última geração.
              </p>
              <br />
              <p>
                Usamos somente tintas e insumos de tratamentos certificados,
                testados e aprovados pelo fabricante, garantindo a melhor
                qualidade e durabilidade nos tecidos.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-20">
          <h2 className="text-[40px] text-main-purple font-bold mb-3">
            BENEFÍCIOS
          </h2>
          <p className="text-center md:mb-20 mb-10 max-w-[1000px]">
            Lorem ipsum dolor sit amet. Sed assumenda quibusdam est autem
            praesentium est nulla beatae cum rerum minima est ipsam galisum eos
            odit error nam molestiae molestiae! Aut illum dolor aut nesciunt
            autem est exercitationem voluptas 33 molestias esse ut dolor ullam.
          </p>
          <div className="flex justify-center items-center reg:gap-20 flex-col reg:flex-row">
            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400  flex justify-center items-center">
                <img src="./assets/pc-icon.svg" alt="Icone de Computador"></img>
              </div>
              <p className="text-center text-black font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-40px] reg:left-0 reg:right-0 reg:mx-auto">
                Efeitos Digitais
              </p>
            </div>

            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400  flex justify-center items-center">
                <img
                  src="./assets/agile-icon.svg"
                  alt="Icone de Metodologia Agil"
                ></img>
              </div>
              <p className="text-center text-black font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-40px] reg:left-0 reg:right-0 reg:mx-auto">
                Agilidade
              </p>
            </div>

            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400  flex justify-center items-center">
                <img src="./assets/tap-icon.svg" alt="Icone de Toque"></img>
              </div>
              <p className="text-center text-black font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-40px] reg:left-0 reg:right-0 reg:mx-auto">
                Diversidade
              </p>
            </div>

            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400  flex justify-center items-center">
                <img
                  src="./assets/cart-icon.svg"
                  alt="Icone de Carrinho de Compras"
                ></img>
              </div>
              <p className="text-center text-black font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-40px] reg:left-0 reg:right-0 reg:mx-auto">
                Varejo
              </p>
            </div>

            <div className="relative">
              <div className="w-[145px] h-[145px] bg-main-lime-green rounded-2xl shadow-lg shadow-zinc-400 flex justify-center items-center">
                <img
                  src="./assets/money-icon.svg"
                  alt="Icone de Dinheiro"
                ></img>
              </div>
              <p className="text-center text-black font-bold my-4 reg:my-0 reg:absolute reg:bottom-[-40px] reg:left-0 reg:right-0 reg:mx-auto">
                Acessível
              </p>
            </div>
          </div>
          <a
            onClick={() => goTo("/")}
            className="bg-main-purple shadow-md shadow-zinc-400 md:mt-28 mt-5 py-4 px-5 md:px-24 rounded-2xl text-white cursor-pointer"
          >
            PERSONALIZE AQUI SUA CAMISETA!
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DTG;
