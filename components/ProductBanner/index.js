import React from "react";

const ProductBanner = ({ props, key }) => {
  return (
    <div
      className={`flex w-full justify-center items-center gap-10 my-20 px-14`}
      key={key}
      style={{ backgroundColor: props.bgColor }}
    >
      <div>
        <div className="w-[350px] h-[450px] bg-slate-500"></div>
      </div>
      <div className="text-center">
        <h4 className="text-white text-2xl font-bold mb-3">{props.title}</h4>
        <p className="text-sm mb-3">{props.paragraph}</p>
        <button className="text-sm uppercase rounded-2xl px-8 py-3 bg-white">
          {props.buttonText}
        </button>
      </div>
      <div>
        <div className="w-[350px] h-[450px] bg-slate-500"></div>
      </div>
    </div>
  );
};

export default ProductBanner;
