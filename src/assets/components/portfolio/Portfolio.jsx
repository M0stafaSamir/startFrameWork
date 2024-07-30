import React from "react";

export default function Portfolio() {
  return (
    <>
      <div className="min-h-screen bg-white py-32 flex items-center  ">
        <div className="container px-3 sm:px-3 lg:px-28  mx-auto flex items-center justify-center flex-col">
          <h1 className="font-bold uppercase text-black lg:text-5xl sm:text-2xl mt-8">
            APORTFOLIO COMPONENT
          </h1>
          <p className="text-black lines relative my-4">
            <i className="fa-solid fa-star"></i>
            <span className="lineBefore bg-black"></span>
            <span className="lineAfter bg-black"></span>
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-12 w-full">
            <div className="item flex items-center justify-center relative">
              <img
                className="rounded-lg"
                src="/src/assets/imgs/poert1.png"
                alt=""
              />
              <div className="layerHover absolute w-full h-full rounded-lg flex text-7xl items-center  justify-center">
                <i className="fa-solid fa-plus opacity-100 text-white "></i>
              </div>
            </div>
            <div className="item flex items-center justify-center relative">
              <img
                className="rounded-lg"
                src="/src/assets/imgs/port2.png"
                alt=""
              />
              <div className="layerHover absolute w-full h-full rounded-lg flex text-7xl items-center  justify-center">
                <i className="fa-solid fa-plus opacity-100 text-white "></i>
              </div>
            </div>
            <div className="item flex items-center justify-center relative">
              <img
                className="rounded-lg"
                src="/src/assets/imgs/port3.png"
                alt=""
              />
              <div className="layerHover absolute w-full h-full rounded-lg flex text-7xl items-center  justify-center">
                <i className="fa-solid fa-plus opacity-100 text-white "></i>
              </div>
            </div>
            <div className="item flex items-center justify-center relative">
              <img
                className="rounded-lg"
                src="/src/assets/imgs/poert1.png"
                alt=""
              />
              <div className="layerHover absolute w-full h-full rounded-lg flex text-7xl items-center  justify-center">
                <i className="fa-solid fa-plus opacity-100 text-white "></i>
              </div>
            </div>
            <div className="item flex items-center justify-center relative">
              <img
                className="rounded-lg"
                src="/src/assets/imgs/port2.png"
                alt=""
              />
              <div className="layerHover absolute w-full h-full rounded-lg flex text-7xl items-center  justify-center">
                <i className="fa-solid fa-plus opacity-100 text-white "></i>
              </div>
            </div>
            <div className="item flex items-center justify-center relative">
              <img
                className="rounded-lg"
                src="/src/assets/imgs/port3.png"
                alt=""
              />
              <div className="layerHover absolute w-full h-full rounded-lg flex text-7xl items-center  justify-center">
                <i className="fa-solid fa-plus opacity-100 text-white "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
