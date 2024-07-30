import React from "react";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-white py-32 flex items-center  ">
        <div className="container px-3 sm:px-3 lg:px-28  mx-auto flex items-center justify-center flex-col">
          <h1 className="font-bold uppercase text-black lg:text-5xl sm:text-2xl mt-8">
            CONATCT SECTION
          </h1>
          <p className="text-black lines relative mt-4 mb-20">
            <i className="fa-solid fa-star"></i>
            <span className="lineBefore bg-black"></span>
            <span className="lineAfter bg-black"></span>
          </p>

          <div class="lg:w-2/3 ">
            <div class="flex items-center border-b border-teal-500 py-2 mt-6">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="userName "
                aria-label="Full name"
              />
            </div>
            <div class="flex items-center border-b border-teal-500 py-2 mt-6">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="useAge "
                aria-label="Full name"
              />
            </div>
            <div class="flex items-center border-b border-teal-500 py-2 mt-6">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="userEmail"
                aria-label="Full name"
              />
            </div>
            <div class="flex items-center border-b border-teal-500 py-2 mt-6">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="userPassword"
                aria-label="Full name"
              />
            </div>
            <button
              class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 my-7 px-2 rounded"
              type="button">
              send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
