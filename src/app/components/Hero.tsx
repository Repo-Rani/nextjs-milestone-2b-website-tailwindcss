"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container relative mt-16 sm:mt-20 xsm:mt-20 py-10  xl:min-h-screen overflow-x-hidden">
      {/* Background Text */}
      <div className="absolute xl:top-[21%] sm:top-[30%] sm:left-1/2 xs:top-[30%] xs:left-40  xsm:top-[32%] xl:left-1/2  transform -translate-x-1/2 -translate-y-1/2 -z-10 md:top-[35%] md:left-1/2 lg:top-[50%] lg:left-1/2 xxl:top-[45%] animate-pulse ">
        <p className="xl:text-[130px] xxl:text-[135px]  leading-none sm:text-[80px] xs:text-[60px] xsm:text-[85px] font-black text-[#241826] opacity-50 lg:text-[120px] md:text-[105px] ">
          FRA <br /> GRA <br /> NCE
        </p>
      </div>

      {/* Hero Content */}

      <div className="flex flex-col items-center">
        <div className="text-[20px] sm:text-[48px] xsm:text-[50px] md:text-[80px]  lg:text-[100px] xl:text-[130px] xs:text-[35px] font-bold uppercase text-white xs:text-center xxl:text-[155px]">
          MysticAura.
        </div>

        <div className="relative xl:mt-[-9rem]  sm:mt-[-4.5rem] xsm:-mt-16 md:-mt-28 xs:-mt-14 xxl:-mt-44 lg:-mt-28">
          <Image
            src="/hero.png"
            alt="hero-image"
            width={900}
            height={900}
            className="xxl:w-[30rem] mx-auto md:w-[68%] lg:w-[80%] xl:w-[83%]  xs:w-[75%] xsm:w-[78%] transition-all duration-500 ease-in-out hover:scale-105"
          />
          <p className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center xxl:text-3xl xl:text-4xl lg:text-2xl md:text-xl xs:text-sm xsm:text-xl font-bold font-DancingScript text-white">
            made by Rani
          </p>
        </div>
        <div
          className="flex xl:flex-row xl:items-center xl:w-full xl:justify-between xl:gap-10  xxl:flex-row xxl:items-center xxl:w-full xxl:justify-between xxl:gap-12
        md:gap-3  md:justify-center md:flex-col  lg:justify-center lg:items-center lg:gap-4 lg:flex-row xl:ml-[2rem] xl:mr-[2rem]  xs:flex-col xxl:text-justify sm:gap-3 xs:gap-0 "
        >
          {/* Left side text */}

          <p className="text-white xl:max-w-[30%] xxl:max-w-[40%] xxl:text-lg lg:text-sm xxl:mr-8 lg:mr-7 xxl:pl-[2rem] xl:ml-4 transform transition duration-500 ease-in-out hover:scale-110 hover:translate-x-2 hover:text-[#f7c0cb] md:text-sm md:mx-[10rem] md:mt-[2rem] xs:text-sm  xs:mt-4 xs:text-center xs:ml-8 xs:w-[80%] xsm:text-sm xsm:mt-7 xxl:ml-[-1rem] lg:ml-[-1rem] md:w-[70%] md:ml-[6rem]">
            MysticAura captures the allure of cosmic beauty, crafted from rare
            celestial wonders.
          </p>

          <div className="flex justify-center items-center mt-6 mb-3 lg:ml-8 md:pr-7">
            <button className="border rounded-xl text-white font-semibold px-4 py-3 text-base text-center transition-all duration-300 hover:bg-titleColor hover:scale-105 w-full xl:w-[10rem] xxl:w-[10rem] xxl:ml-9 lg:w-[10rem] md:w-[8rem] md:text-sm xsm:text-sm lg:px-8 lg:py-2 lg:text-lg xsm:w-[8rem] sm:w-[7rem] sm:text-xs xs:w-[7rem] xs:text-xs">
              <Link
                href="/collection"
                className="flex items-center justify-between gap-2 xl:gap-3 xsm:gap-1"
              >
                <span className=" xxl:-ml-4 xl:-ml-5 lg:-ml-4 md:-ml-1 sm:-ml-2 xs:-ml-2">
                  Discover
                </span>
                <span className="lg:ml-1 xxl:-ml-1">Now</span>
              </Link>
            </button>
          </div>

          {/* Right side text */}
          <p className="text-white xl:max-w-[30%] xxl:max-w-[80%] xxl:text-lg lg:text-sm xl:mr-4 transform transition duration-500 ease-in-out hover:scale-110 hover:translate-x-2 hover:text-[#f7c0cb] md:text-sm md:mx-[10rem] md:px-[2rem]xxs:text-sm  xs:text-sm xs:mt-4 xs:text-center xs:ml-8 xxl:mt-[2rem]  lg:ml-[4rem]  xs:w-[80%] xsm:text-sm xsm:mt-6 xxl:ml-[4rem] lg:mr-[-1rem] md:w-[70%] md:ml-[6rem]">
            MysticAura captures the allure of cosmic beauty, meticulously and
            timeless elegance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
