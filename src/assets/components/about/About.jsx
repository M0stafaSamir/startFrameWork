import React from "react";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-green-400 flex items-center py-32 ">
        <div className="container px-3 sm:px-3 lg:px-40  mx-auto flex items-center justify-center flex-col">
          <h1 className="font-bold uppercase text-white lg:text-5xl sm:text-2xl mt-8">
            ABOUT COMPONENT
          </h1>
          <p className="text-white lines relative my-4">
            <i className="fa-solid fa-star"></i>
            <span className="lineBefore bg-white"></span>
            <span className="lineAfter bg-white"></span>
          </p>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
