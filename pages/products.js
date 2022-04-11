import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBanner from "../components/ProductBanner";
import { productsBanner } from "../lib/productsBanner";

const Products = () => {
  return (
    <div>
      <Head>
        <title>Produtos - Estamparia Camaleão</title>
      </Head>
      <Header />
      <main>
        {productsBanner.map((b, key) => (
          <ProductBanner key={key} props={b} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
