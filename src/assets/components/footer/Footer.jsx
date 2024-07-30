import React from "react";

export default function Footer() {
  return (
    <>
      <section>
        <div className=" bg-slate-800  px-5 py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 ">
            <div className=" text-center text-white">
              <h1 className="font-bold uppercase text-2xl my-4">location</h1>
              <p className="my-4">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className=" text-center text-white">
              <h1 className="font-bold uppercase text-2xl my-4">
                AROUND THE WEB
              </h1>
              <div className="my-4 ">
                <i className="fa-brands fa-facebook text-xl border w-11 p-2 rounded-circle mx-2"></i>
                <i className="fa-brands fa-twitter text-xl border w-11 p-2 rounded-circle mx-2"></i>
                <i className="fa-brands fa-linkedin text-xl border w-11 p-2 rounded-circle mx-2"></i>
                <i className="fa-solid fa-globe text-xl border p-2 w-11 rounded-circle mx-2"></i>
              </div>
            </div>

            <div className=" text-center text-white">
              <h1 className="font-bold uppercase text-2xl my-4">
                ABOUT FREELANCER
              </h1>
              <p className="my-4">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <p className=" bg-slate-900 py-5 text-center  text-white">
          Copyright © Your Website 2021
        </p>
      </section>
    </>
  );
}
