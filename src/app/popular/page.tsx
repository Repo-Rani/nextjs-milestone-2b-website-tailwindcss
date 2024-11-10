import React from "react";
import Link from "next/link";
import Image from "next/image";

const Popular = () => {
  return (
    <section className=" bg-sectionColor">
      <div className="container ">
        <div className=" flex flex-col items-center gap-5 text-center mb-20 md:md-28 xsm:mt-5">
          <h2 className=" text-titleColor lg:text-5xl xl:text-5xl xxl:text-6xl xs:text-4xl sm:text-4xl xs:mt-5 md:text-5xl  md:-mt-2 font-bold inline-block font-DancingScript">
            Popular
          </h2>
          <p className="text-white xl:text-3xl xxl:text-4xl sm:text-2xl md:text-4xl lg:text-4xl xs:text-[30px] xsm:my-3 font-bold">
            Our Most Loved Scents
          </p>
        </div>
        <div className="w-full grid grid-col-1 sm:w-[20rem] sm:mx-4 md:grid-col-2 lg:grid-cols-3  gap-y-20 lg:gap-y-15  gap-x-8 lg:gap-x-5 xsm:w-[23rem]  xxl:w-full xl:ml-2 lg:w-full md:w-full md:-ml-1  ">
          {/* card 1 */}
          <div className="relative bg-cardColor rounded-xl  px-10 py-20  xs:mx-2 xxl:mr-[2rem] lg:ml-[2rem] xxl:ml-[2rem]">
            <Image
              src="/popular-1.png"
              alt="popular-image"
              height={300}
              width={300}
              className="w-40 absolute -top-20 left-0  transition-all duration-300 hover:scale-110"
            />
            <div className="space-y-5">
              <h2 className="text-white text-2xl  md:text-3xl font-bold">
                Meteor Essence
              </h2>
              <p className="text-white">
                Extracted from the heart of meteors, it captures the pure
                essence of the star.
              </p>
            </div>
            <div className="bg-titleColor w-20 h-20 rounded-full flex items-center justify-center text-2xl border-8 border-sectionColor absolute -right-3 -bottom-3">
              <i className="bx bx-right-arrow-alt text-white hover:translate-x-1 duration-300 "></i>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative bg-cardColor rounded-xl px-10 py-20 xs:mx-2 xxl:mr-[2rem]  xxl:ml-[2rem]">
            <Image
              src="/popular-2.png"
              alt="popular-image"
              height={300}
              width={300}
              className="w-40 absolute -top-20 left-0  transition-all duration-300 hover:scale-110"
            />
            <div className="space-y-5">
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Celestial Bloom
              </h2>
              <p className="text-white">
                Blooming from cosmic flowers, this scent is truly out of this
                world pleasure.
              </p>
            </div>
            <div className="bg-titleColor w-20 h-20 rounded-full flex items-center justify-center text-2xl border-8 border-sectionColor absolute -right-3 -bottom-3">
              <i className="bx bx-right-arrow-alt text-white hover:translate-x-1 duration-300 "></i>
            </div>
          </div>

          {/* card 3 */}

          <div className="relative bg-cardColor rounded-xl px-10 py-20 xs:mx-2  xxl:ml-[2rem] xxl:mr-[3rem]">
            <Image
              src="/popular-3.png"
              alt="collection image"
              height={300}
              width={300}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-110"
            />
            <div className="space-y-5">
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Galactic Misto
              </h2>
              <p className="text-white ">
                An ethereal mist from distance galaxies, bottled for your
                pleasure.
              </p>
            </div>
            <div className="bg-titleColor w-20 h-20 rounded-full flex items-center justify-center text-2xl border-8 border-sectionColor absolute -right-3 -bottom-3">
              <i className="bx bx-right-arrow-alt text-white hover:translate-x-1 duration-300 "></i>
            </div>
          </div>
        </div>

        <div className="bg-sectionColor xl:p-8 xs:p-6 rounded-lg text-center mt-20">
          <h2 className="xl:text-4xl xs:text-xl sm:text-[25px] xsm:text-2xl font-bold text-titleColor mb-6 xxl:text-5xl lg:text-4xl ">
            Craft Your Personalized Fragrance
          </h2>
          <p className="text-white mb-8 sm:text-base xxl:text-lg xs:text-sm lg:text-lg">
            Select your preferences to find a match uniquely suited to you.
          </p>
          <button className="bg-titleColor text-white xl:px-6 xl:py-3 xxl:px-5 xs:px-4 sm:px-3 xs:py-2 xsm:px-4 lg:px-6 lg:py-3 rounded-lg font-bold transition-all duration-300 ease-linear hover:scale-105 hover:text-titleColor hover:bg-white">
            <Link href="/collection">Begin Your Journey</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popular;
