import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { FaFacebookF } from "react-icons/fa";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="z-10 mx-4 my-10 flex max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
        <h2 className="text-center text-xl text-[#044E82] font-poppins xs:text-3xl font-normal">
          Before continuing to the application please subscrbe on these social media platforms.
        </h2>
        <div className="mt-5 flex gap-3 md:text-sm">
            <div className="flex h-8 w-8 cursor-pointor items-center justify-center bg-[#4267B2] rounded-full text-white"><FaFacebookF/></div>
        </div>
        <div className="group w-full xs:w-52">
            <div className="popover rounded-lg bg-white px-4 py-2 text-center text-sm text-red-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                <p>Click the icon above first</p>
            </div>
        </div>

<button className="w-full bg-[#044E82] py-4  text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 font-poppins">CONTINUE</button>
  <p className="text--center">
    Already applied?
    <a href="/" className="text-blue-400 underline">Get Admit Card</a>
    </p>      
      </div>
    
      <Footer />
    </>
  );
};

export default page;
