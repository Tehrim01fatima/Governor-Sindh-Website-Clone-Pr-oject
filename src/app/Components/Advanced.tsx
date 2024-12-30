import React from "react";

const Advanced=() => {
    return (
        <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10">
            <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-[#044E82] font-extrabold mt-10">
                Advanced Courses
            </h1>
            <div className="grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
                <a href="" className="hover:scale-105 duration-200 transition-all">
                    <div className="overflow-hidden h-fit shadow-md rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
                        <div>
                            <img
                                src="/course4.jpg"
                                alt="advanced course"
                                height={300}
                                width={450}
                                loading="lazy"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="px-4 flex justify-center items-center h-[70px]">
                            <text>Artifical Intelligece</text>
                        </div>
                    </div>
                </a>

                <a href="" className="hover:scale-105 duration-200 transition-all">
                    <div className="overflow-hidden h-fit shadow-md rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
                        <div>
                            <img
                                src="/course5.jpg"
                                alt="advanced course"
                                height={300}
                                width={450}
                                loading="lazy"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="px-4 flex justify-center items-center h-[70px]">
                            <text>Web 3 and Metaverse</text>
                        </div>
                    </div>
                </a>

                <a href="" className="hover:scale-105 duration-200 transition-all">
                    <div className="overflow-hidden h-fit shadow-md rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
                        <div>
                            <img
                                src="/course6.jpg"
                                alt="advanced course"
                                height={300}
                                width={450}
                                loading="lazy"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="px-4 flex justify-center items-center h-[70px]">
                            <text>Cloud-Native Computing </text>
                        </div>
                    </div>
                </a>


                <a href="" className="hover:scale-105 duration-200 transition-all">
                    <div className="overflow-hidden h-fit shadow-md rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
                        <div>
                            <img
                                src="/course7.jpg"
                                alt="advanced course"
                                height={300}
                                width={450}
                                loading="lazy"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="px-4 flex justify-center items-center h-[70px]">
                            <text>Ambient Computing and loT</text>
                        </div>
                    </div>
                </a>


                <a href="" className="hover:scale-105 duration-200 transition-all">
                    <div className="overflow-hidden h-fit shadow-md rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
                        <div>
                            <img
                                src="/course8.jpg"
                                alt="advanced course"
                                height={300}
                                width={450}
                                loading="lazy"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="px-4 flex justify-center items-center h-[70px]">
                            <text>Genomics and Bioinformatics</text>
                        </div>
                    </div>
                </a>

                <a href="" className="hover:scale-105 duration-200 transition-all">
                    <div className="overflow-hidden h-fit shadow-md rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
                        <div>
                            <img
                                src="/course9.jpg"
                                alt="advanced course"
                                height={300}
                                width={450}
                                loading="lazy"
                                className="object-cover w-full"
                            />
                        </div>
                        <div className="px-4 flex justify-center items-center h-[70px]">
                            <text>Network Programmability and automation </text >
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Advanced;
