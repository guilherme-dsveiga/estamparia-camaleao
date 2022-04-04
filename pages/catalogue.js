/* eslint-disable @next/next/no-img-element */
import React from "react";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { products } from "../lib/products";

function Catalogue() {
  return (
    <div>
      <Header />
      <main className="mt-20">
        <div className="w-full mb-20">
          <img
            className="w-full h-full object-cover"
            src="./assets/banner-products.png"
            alt="Banner de catalogo de produtos"
          ></img>
        </div>
        <div className="flex flex-col gap-10 mb-20">
          {products.map((p, k) => (
            <CartItem
              key={k}
              img={p.img}
              alt={p.alt}
              title={p.title}
              paragraph={p.paragraph}
              sizes={p.sizes}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Catalogue;
