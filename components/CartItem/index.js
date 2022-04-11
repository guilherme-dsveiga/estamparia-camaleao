/* eslint-disable @next/next/no-img-element */
import React from "react";

const CartItem = ({ id, img, alt, title, paragraph, sizes, colors }) => {
  return (
    <div key={id} className="flex max-w-6xl mx-auto gap-10 px-10">
      <div className=" shadow-lg shadow-zinc-200 hidden md:block">
        <img className="w-full h-full object-cover" src={img} alt={alt}></img>
      </div>
      <div className="max-w-lg">
        <h3 className="font-extrabold text-main-purple text-2xl">{title}</h3>
        <p className="font-semibold mb-3">{paragraph}</p>
        <small>TAMANHOS DISPONIVEIS:</small>
        <div className="flex gap-[10px] text-main-purple font-bold text-xl leading-4 mb-3">
          {sizes.map((s, key) => (
            <div key={key}>{s}</div>
          ))}
        </div>

        <small>CORES DISPONIVEIS: </small>
        {id === 3 ? (
          <div className="flex gap-1 flex-wrap max-w-[9rem] mb-5">
            {kidsColorCircles.map((i) => i)}
          </div>
        ) : (
          <div className="flex gap-1 flex-wrap max-w-[9rem] mb-5">
            {colorCircles.map((i) => i)}
          </div>
        )}

        <button className="bg-gray-300 px-5 py-3 rounded-xl text-sm">
          SAIBA MAIS
        </button>
      </div>
    </div>
  );
};

export default CartItem;

const colorCircles = [
  <div
    key={0}
    className="w-4 h-4 rounded-full bg-black shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={1}
    className="w-4 h-4 rounded-full bg-blue-900 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={2}
    className="w-4 h-4 rounded-full bg-gray-800 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={3}
    className="w-4 h-4 rounded-full bg-yellow-400 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={4}
    className="w-4 h-4 rounded-full bg-red-600 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={5}
    className="w-4 h-4 rounded-full bg-orange-400 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={6}
    className="w-4 h-4 rounded-full bg-green-900 shadow-inner shadow-zinc-700"
  ></div>,
  <div
    key={7}
    className="w-4 h-4 rounded-full bg-emerald-900 shadow-inner shadow-zinc-800  "
  ></div>,
  <div
    key={8}
    className="w-4 h-4 rounded-full bg-gray-600 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={9}
    className="w-4 h-4 rounded-full bg-amber-900 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={10}
    className="w-4 h-4 rounded-full bg-gray-400 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={11}
    className="w-4 h-4 rounded-full bg-purple-800 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={12}
    className="w-4 h-4 rounded-full bg-red-900 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={13}
    className="w-4 h-4 rounded-full bg-red-300 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={14}
    className="w-4 h-4 rounded-full bg-lime-400 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={15}
    className="w-4 h-4 rounded-full bg-cyan-400 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={16}
    className="w-4 h-4 rounded-full bg-white shadow-inner shadow-zinc-800"
  ></div>,
];

const kidsColorCircles = [
  <div
    key={0}
    className="w-4 h-4 rounded-full bg-white shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={1}
    className="w-4 h-4 rounded-full bg-gray-600 shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={2}
    className="w-4 h-4 rounded-full bg-black shadow-inner shadow-zinc-800"
  ></div>,
  <div
    key={3}
    className="w-4 h-4 rounded-full bg-blue-900 shadow-inner shadow-zinc-800"
  ></div>,
];
