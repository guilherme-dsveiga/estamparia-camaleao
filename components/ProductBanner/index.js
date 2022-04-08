import React, { useState, useEffect } from "react";
import { goTo } from "../../hooks";

const ProductBanner = ({ props, key }) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div
      className={`flex w-full justify-center items-center min-h-[350px] md:min-h-[400px]  gap-10 my-20 px-14 relative`}
      key={key}
      style={{ backgroundColor: props.bgColor }}
    >
      <div className="text-center max-w-md">
        <h4 className="text-white text-2xl font-bold mb-3">{props.title}</h4>
        <p className="text-sm mb-3">{props.paragraph}</p>
        <button
          className="text-sm uppercase rounded-2xl px-8 py-3 bg-white"
          onClick={() => goTo("http://wa.me/5513991176391")}
        >
          {props.buttonText}
        </button>
      </div>
      {props.imgs.map((i, k) => (
        <div
          key={k}
          className={`absolute ${
            k % 2 === 0
              ? "bottom-0 left-2 xl:left-44"
              : "bottom-0 right-2 xl:right-44"
          }`}
        >
          <img src={i}></img>
        </div>
      ))}
    </div>
  );
};

export default ProductBanner;
