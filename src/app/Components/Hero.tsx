'use client';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div>
      <main className="relative z-0 w-full h-screen">
        <div
          className="relative h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/bg_house.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-zinc-100 bg-opacity-75 z-10">
            <div className="z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">
              <div className="h-fit w-full pt-5 md:w-1/2 md:py-10">
                <h1 className="text-[#044E83] font-poppins text-center text-[2rem] font-extrabold leading-10 tracking-wider sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
                  Governor Sindh
                </h1>
                <h1 className="text-[#044E83] font-poppins text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
                  Kamran Khan Tessori
                </h1>
                <h1 className="text-[#2EB6E8] font-poppins mt-5 text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
                  Certified Cloud
                  <br />
                  Applied Generative AI
                  <br />
                  Engineer (GenEng)
                </h1>
                <p className="text-[#044E83] font-poppins my-5 w-full text-center text-[1.25rem] font-extrabold sm:text-2xl md:text-left">
                  Earn up to $5,000/month
                </p>
                <p className="text-[#044E83] font-poppins my-5 w-full text-center text-[1.25rem] font-bold tracking-wider sm:text-2xl md:w-[80%] md:text-left">
                  Now admissions are open in Hyderabad
                </p>
                <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
                  <a href="/apply" className="w-full md:w-auto">
                    <button className="w-full rounded-md font-poppins bg-[#044E83] py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                      APPLY NOW
                    </button>
                  </a>
                  <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
                    <div className="flex-col text-center text-xl tracking-widest sm:text-3xl">
                      <div className="text-[#044E83] w-40 font-extrabold">
                        562,143
                      </div>
                    </div>
                    <div className="text-[#044E83] font-poppins text-center text-xs tracking-wider sm:text-sm">
                      Accepted Applications
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 mb-0 flex justify-center">
                <Image
                  alt="governor"
                  src="/Governor.png"
                  height={1212}
                  width={1600}
                  loading="lazy"
                  className="h-auto w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
