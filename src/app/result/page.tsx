import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
const result = () => {
  return (
    <>
   
    <NavBar/>
    <main className="flex flex-col items-center justify-center">
      <h1 className="my-8 text-center text-lg font-bold text-[#044E82] md:text-3xl text-normal font-poppins ">
        Grand Entrance Exam Result
      </h1>
      <form
        action=""
        className="-top-10 z-10 mx-4 my-10 mt-0 w-full max-w-2xl rounded px-4 py-8 text-black shadow-lg sm:mt-10 md:mx-10 md:px-6"
        noValidate
      >
        <div className="my-6">
          <label
            htmlFor="regNo"
            className="mb-6 mt-4 text-slate-700 md:text-xl"
          >
            Registration Number *
          </label>
          <div className="">
            <input
              type="tel"
              id="regNo"
              maxLength={10}
              className="block h-12 w-full  border border-gray-400 bg-gray-100 p-3  ring-red-
    500 outline-none focus:ring-1 md:text-xl mb-2 mt-1 rounded disabled:border-red-400 "
              placeholder="Resgistration Number"
              name="regNo"
            />
          </div>

          <div className="my-6">
            <label
              htmlFor="cnic"
              className="mb-6 mt-4 text-slate-700 md:text-xl"
            >
              CNIC or B-Form Number *
            </label>
            <input
              type="tel"
              id="cnic"
              maxLength={13}
              className="block h-12 w-full  border border-gray-400 bg-gray-100 p-3 ring-red-
    500 outline-none focus:ring-1 md:text-xl mb-2 mt-1 rounded disabled:border-red-400  "
              placeholder="CNIC or B-Form Number"
              name="regNo"
            />
          </div>
          <p className="mb-4 text-red-400">CNIC must be 13 characters.</p>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-5 w-full bg-[#044E82] py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled::opacity-60 disabled:hover:cursor-not-allowed sm:w-52 sm:py-4 sm:text-base font-poppins "
            >
              GET RESULT
            </button>
          </div>
        </div>
      </form>
    </main>
   <Footer/>

</>
  );
};

export default result;
