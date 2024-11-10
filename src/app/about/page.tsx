import React from "react";
import Button from "../components/Button";
import Image from "next/image";

const About = () => {
  return (
    <section className="xl:mt-20 lg:mt-8 md:mt-7 xs:mt-[2rem] bg-sectionColor">
      <div className="container mx-auto px-5  ">
        {/* Heading Section */}
        <div className="text-center  mb-10">
          <h2 className="title text-titleColor font-DancingScript  xl:-mt-8  xxl:text-6xl xl:text-6xl xxl:mt-[-3rem]  lg:text-5xl md:text-5xl xs:text-4xl  font-bold">
            About Us
          </h2>
          <hr className="w-20 h-1 mx-auto my-4 bg-titleColor border-none" />
          <p className="max-w-2xl mx-auto text-xl xs:text-lg xxl:text-2xl lg:text-2xl text-white font-semibold xs:text-medium  text-bold">
            Things you need to know
          </p>
        </div>
        {/* Content Section */}
        <div className="flex  md:flex-col-reverse  xl:flex-row items-center lg:flex-row xs:flex-col-reverse gap-5 lg:gap-10 ">
          <div className="w-full lg:w-full xl:w-full md:w-[33rem] xs:mt-5 ">
            <Image
              src="/about.png"
              alt="About Us"
              width={800}
              height={1000}
              className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="w-full xs:w-[90%] md:w-[80%] xsm:w-[90%] sm:w-[90%] ]">
            <p className="text-base xl:text-xl text-white xl:text-center xxl:text-2xl xxl:text-left xxl:ml-2 sm:text-center sm:-ml-9  Uppercase mb-2 lg:mt-7  ">
              TOP STAFF PICK
            </p>
            <h3 className="text-2xl xl:text-4xl xs:text-lg xs:text-left sm:text-2xl  xsm:text-xl font-bold xxl:text-4xl xsm:text-center xsm:font-semibold lg:text-3xl text-titleColor mb-4  lg:mt-3 xxl:text-left">
              Our Perfume Philosophy
            </h3>
            <p className=" text-white  sm:mx-2 ">
              Our perfumes are crafted with a blend of luxurious ingredients,
              carefully selected to create long-lasting, unforgettable aromas.
              From floral tones to musky undertones, each fragrance is designed
              to leave a lasting impression, wherever you go.
            </p>
            <br />
            <p className="text-white mb-4 sm:mx-2">
              At LovelyPerfume, we believe a perfume is not just a scent; its a
              statement, a reflection of your personality. Every spray envelops
              you in a world of sophistication, where elegance and charm dance
              in harmony.
            </p>

            <ul className="list-decimal list-inside text-white mb-5 sm:mx-2">
              <li>
                <strong>Luxurious Ingredients:</strong> Crafted with care
              </li>
              <li>
                <strong>Long-lasting Fragrances:</strong> Perfect for all-day
                wear
              </li>
              <li>
                <strong>Unique Blends:</strong> Designed to leave a lasting
                impression
              </li>
            </ul>

            <div className="flex justify-center mt-10">
              <ul className="list-disc list-inside text-white">
                <li className="transition-transform transform hover:scale-105 hover:text-titleColor cursor-pointer">
                  Handcrafted Quality
                </li>
                <li className="transition-transform transform hover:scale-105 hover:text-titleColor cursor-pointer">
                  Luxurious Ingredients
                </li>
                <li className="transition-transform  transform hover:scale-105 hover:text-titleColor cursor-pointer ">
                  Artistic Craftsmanship
                </li>
              </ul>
            </div>
            <div className="text-white flex justify-center items-center mt-6">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
