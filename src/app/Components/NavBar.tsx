"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const NavBar = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#044E83] text-[#B9D8F3] sticky top-0 z-50">
      <div className="container mx-auto flex h-16 w-[95%] items-center justify-between px-4 py-4">
        <div className="sm:w-[80px] md:w-[90px] z-10">
          <Image
            src="/logo.png"
            alt="logo"
            width={90}
            height={113}
            loading="lazy"
          />
        </div>

        <h1 className="hidden md:block text-center text-[15px] font-extrabold text-[#b9d8f3] xl:text-xl xl:leading-snug">
          Tuition Free Education Program on Latest Technologies
        </h1>

        <div className="hidden items-center gap-5 font-bold text-[#FAF9F6] md:flex lg:gap-10">
          <Link href="/">Home</Link>
          <Link href="/apply">Apply</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/result">Result</Link>
          <Link className="flex items-center" href="/courses">
            Courses <FaAngleDown />
          </Link>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={25} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#044E83] text-[#FAF9F6]">
          <button
            className="absolute right-5 top-5"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={25} />
          </button>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="mb-4 text-lg"
          >
            Home
          </Link>
          <Link
            href="/apply"
            onClick={() => setIsOpen(false)}
            className="mb-4 text-lg"
          >
            Apply
          </Link>
          <Link
            href="/jobs"
            onClick={() => setIsOpen(false)}
            className="mb-4 text-lg"
          >
            Jobs
          </Link>
          <Link
            href="/result"
            onClick={() => setIsOpen(false)}
            className="mb-4 text-lg"
          >
            Result
          </Link>
          <Link
            href="/courses"
            onClick={() => setIsOpen(false)}
            className="mb-4 text-lg flex items-center"
          >
            Courses <FaAngleDown className="ml-2" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
