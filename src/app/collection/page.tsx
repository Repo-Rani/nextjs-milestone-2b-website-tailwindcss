import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import { Card } from "../../../Types/type";

const Collection = () => {
  const cards : Card[] = [
   {
      image: "/perfume-1.jpg",
      title: "Mystque",
      desc: "Discover the graceful notes of Mysterious perfume.",
    },
    {
      image: "/perfume-2.jpg",
      title: "Elegance",
      desc: "An exquisite blend of exotic, floral, and aromas.",
    },
    {
      image: "/perfume-3.jpg",
      title: "Celestial Bloom",
      desc: "A heavenly fragrance with a touch of fresh blooms",
    },
    {
      image: "/perfume-4.jpg",
      title: "Amber Delight",
      desc: "Rich amber and vanila make this fragrance delight.",
    },
    {
      image: "/perfume-5.jpg",
      title: "Noir Obsession",
      desc: "A captivating scent with deep woody undertones.",
    },
    {
      image: "/perfume-6.jpg",
      title: "Oceanic Breeze",
      desc: "Feel the freshness of the sea with this  scent.",
    },
  ];
 
  return (
    <section className="py-10 bg-sectionColor">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 pt-20">
          <h2 className="text-titleColor xl:text-5xl xs:text-4xl sm:text-4xl xsm:text-4xl sm:mb-4 md:text-4xl md:mb-3 font-bold font-DancingScript">
    Collection
          </h2>
          <p className="text-white xl:text-3xl xl:mt-3  xxl:mt-4 xxl:mb-[-1rem] md:text-3xl lg:text-5xl xs:text-[25px] sm:text-[24px] sm:mx-3 xsm:mx-5 xs:mb-[-2rem] lg:mb-0 font-bold">
          Discover the Cosmic Scents
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">

          {/* card 1 */}
{cards.map((card, index) => (

<div key={index} className="bg-cardColor p-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 sm:mx-5 xsm:mx-6 md:mx-2">
  <Image src={card.image} alt={card.title} height={300} width={300}
  className="xl:w-full xl:h-80 xxl:h-96 xxl:w-full object-cover mb-5 rounded-md lg:w-full lg:h-[247px] md:h-[270px] xs:h-[250px]  sm:h-[250px] xsm:h-[288px] xsm:w-full xsm:mr-[-2rem]" />
  <h3 className="text-white text-2xl sm:text-xl sm:text-center xl:text-2xl xxl:text-2xl font-bold mb-2">
   {card.title} 
  </h3>
  <p className=" text-gray-300 mb-4 sm:text-sm sm:text-center xxl:text-lg xl:text-lg">{card.desc}</p>
  <Button />
</div>
))}
        </div>
      </div>
    </section>
  );
};

export default Collection;









