import React from "react";

const courses=() => {
    return (
        <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
            <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-[#044E83] font-extrabold mt-10">Core Courses Sequence
            </h1>
            <div className="grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
                <a href="/" className="hover:scale-105 duration-200 transiton-all">
                    <div
                        className="
overflow-hidden h-fit shadow-md rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold"
                    >
                        <div>
                            <img
                                src="/course1.jpg"
                                alt="course1"
                                height={300}
                                width={450}
                                loading="lazy"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="px-4 flex justify-center item-center h-[70px]">
                            <text>Programming Fundamentals </text>
                        </div>
                    </div>
                </a>

                <a href="/" className="hover:scale-105 duration-200 transiton-all">
                    <div
                        className="
overflow-hidden h-fit shadow-md rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold"
                    >
                        <div>
                            <img
                                src="/course2.jpg"
                                alt="course2"
                                height={300}
                                width={450}
                                loading="lazy"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="px-4 flex justify-center item-center h-[70px]">
                            <text>Web2 Using NextJS </text>
                        </div>
                    </div>
                </a>


                <a href="/" className="hover:scale-105 duration-200 transiton-all">
                    <div
                        className="
overflow-hidden h-fit shadow-md rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold"
                    >
                        <div>
                            <img
                                src="/course3.jpg"
                                alt="course3"
                                height={300}
                                width={450}
                                loading="lazy"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="px-4 flex justify-center item-center h-[70px]">
                            <text>Advanced Courses</text>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default courses;
