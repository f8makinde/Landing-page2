import React from "react";
import womanPics from "../../../public/Layer 0 1.png";
import Image from "next/image";
const Hero = () => {
  return (
    <main className="w-full bg-[#EFF6F2]">
      <div className="mx-auto max-w-[1440px] flex md:flex-row flex-col justify-between">
        <div className="px-4 md:w-7/12 pt-[100px] sm:px-8 ">
          <h1 className="text-4xl tracking-wide font-bold text-black leading-10 sm:text-5xl md:text-6xl lg:text-5xl xl:text-[70px]">
            <span className="block xl:inline">Get the perfect</span>{" "}
            <span className="block text-primary xl:inline">Tutor</span>{" "}
            <span className="block xl:inline">and get your</span>{" "}
            <span className="block xl:inline text-primary">Learning</span>{" "}
            <span className="block xl:inline">Started</span>{" "}
          </h1>
          <p className="pt-6 text-xl text-[#616161]">
            Lorem ipsum dolor sit amet consectetur. Ut neque est viverra..orem
            ipsum dolor sit amet consectetur. Ut neque est viverra. est viverra.
          </p>
          <div>
            <div className="bg-white flex md:flex-row flex-col mt-[103px] justify-between py-[2px] rounded-[20px]">
              <input
                type="text"
                placeholder="Search a Topic or Tutor name....................."
                className="outline-none bg-transparent font-bold text-greyDark md:w-[386px] md:pl-16 pl-4 py-2"
              />
              <button className="font-bold bg-primary rounded-[10px] text-white px-[46px] py-6">
                Search
              </button>
            </div>
          </div>
        </div>

        <div>
          <Image src={womanPics} alt="" className="mx-auto pt-4" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
