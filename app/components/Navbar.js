"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "../../../public/material-symbols_school-outline.svg";
import profile from "../../../public/mingcute_user-4-line.svg";
import Link from "next/link";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="w-full text-secondary">
      <div className="max-w-[1440px] mx-auto p-4  bg-white">
        <div className="md:flex hidden justify-between items-center">
          <Image src={logo} alt="logo" />
          <ul className="flex lg:gap-[40px] md:gap-[20px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">What we do</Link>
            </li>
            <li>
              <Link href="/">Hire a Tutor</Link>
            </li>
            <li>
              <Link href="/">Find Students</Link>
            </li>
            <li>
              <Link href="/">Jobs</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
          <div className="flex items-center">
            <Link href="/" className="px-2">
              Sign in
            </Link>
            /
            <Link href="/" className="px-2">
              Sign up
            </Link>
            <Image src={profile} alt="profile-icon" />
          </div>
        </div>
        <div></div>

        <div
          className="md:hidden flex items-center justify-between"
          onClick={handleNav}
        >
          <Image src={logo} alt="logo" />
          {nav ? <AiOutlineClose size={25} /> : <FaBars size={25} />}
          <div
            className={
              nav
                ? "w-full flex flex-col left-0 absolute top-0 mt-16 py-8 bg-gray-200"
                : "hidden"
            }
          >
            <ul className="flex flex-col text-secondary">
              <li className="py-3 px-4 text-lg">
                <Link href="/">Home</Link>
              </li>
              <li className="py-3 px-4 text-lg">
                <Link href="/">What we do</Link>
              </li>
              <li className="py-3 px-4 text-lg">
                <Link href="/">Hire a Tutor</Link>
              </li>
              <li className="py-3 px-4 text-lg">
                <Link href="/">Find Students</Link>
              </li>
              <li className="py-3 px-4 text-lg">
                <Link href="/">Jobs</Link>
              </li>
              <li className="py-3 px-4 text-lg">
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
            <div className="w-full flex flex-col">
              <button className="px-2 bg-transparent text-black">
                Sign in
              </button>
              <button className="px-4 mx-4 py-4 rounded-md">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
