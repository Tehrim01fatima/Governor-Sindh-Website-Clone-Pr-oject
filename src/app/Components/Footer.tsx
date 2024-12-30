import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 w-full bg-zinc-100 font-Roboto">
      <div className="m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Core Courses</h1>
            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              <a href="/">Programming Fundamental</a>
              <a href="/">Web2 Using NextJS</a>
              <a href="/">Earn as You Learn</a>
            </div>
          </div>
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Advanced Courses</h1>
            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              <a href="/">Web3 and Metaverse</a>
              <a href="/">Cloud-Native Computing</a>
              <a href="/">Artificial Intelligence (AI) and Deep Learning</a>
              <a href="/">Ambient Computing and IoT</a>
              <a href="/">Genomics and Bioinformatics</a>
              <a href="/">Network Programmability and Automation</a>
            </div>
          </div>
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Social Links</h1>
            <div className="my-5 flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/TeamKTessori"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4267B2] text-white"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/TeamKTessori"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f04867] text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/TeamKTessori"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com/TeamKTessori"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/TeamKTessori"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
            <div className="mt-4 flex items-center py-1 text-[#044E82] underline">
              <a
                href="mailto:education@governorsindh.com"
                target="blank"
                className="mr-3 h-6 w-6"
              >
                education@governorsindh.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
