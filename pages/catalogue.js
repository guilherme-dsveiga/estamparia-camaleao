/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { products } from "../lib/products";

function Catalogue() {
  return (
    <div>
      <Head>
        <title>Catálogo - Estamparia Camaleão</title>
      </Head>

      <Header />
      <main className="mt-20">
        <div className="w-full relative 2xl:min-h-[650px] xl:min-h-[500px] lg:min-h-[450px] bg-[url(../public/assets/banner-products.png)] bg-no-repeat bg-cover bg-center mb-20">
          <div className="static text-center  lg:absolute top-12 left-24 text-main-purple p-4 bg-white text-6xl 2xl:text-8xl font-extrabold lg:text-right lg:shadow-md">
            Catálogo de <br></br>Produtos
          </div>
          <div className="hidden lg:block absolute bottom-14 left-24 text-4xl 2xl:text-5xl -rotate-[6deg]">
            <p className="mb-1">Camisetas personalizadas</p>

            <p className="bg-red-600 bg-opacity-75 ml-5 mb-2  text-white w-fit">
              para você
            </p>
            <span className="ml-10">e </span>
            <span className="bg-cyan-300 bg-opacity-75  text-white">
              para sua empresa.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10 mb-20">
          {products.map((p, k) => {
            return (
              <CartItem
                key={k}
                id={p.id}
                img={p.img}
                alt={p.alt}
                title={p.title}
                paragraph={p.paragraph}
                sizes={p.sizes}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Catalogue;
