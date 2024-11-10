import React from "react";

const Contact = () => {
  return (
    <section className="py-14 lg:mt-10 md:mt-11 xsm:mt-10 sm:mt-7 bg-cardColor">
      <div className="container mx-auto ">
        <div className="text-center mt-8  mb-12 text-white xl:text-2xl xs:text-[1.25rem]">
          <h2 className="xl:mt-4 xl:text-4xl xxl:mt-6 xs:text-2xl text-5xl sm:text-3xl  xxl:text-4xl  text-white font-bold">
            Get In Touch
          </h2>
          <p className="text-gray-400 xs:text-base sm:text-base text-lg lg:text-xl mt-4 mb-4 xs:mx-2 xs:px-2">
            Have a question or just want to say hello? we,d love to hear from
            you.
          </p>
        </div>
        {/* Contact Information */}

        <div className=" flex xl:flex-col lg:flex-row justify-center items-center  gap-8 lg:gap-10 xs:flex xs:justify-center xs:items-center xs:flex-col xxl:flex-row ">
          <div className="xxl:flex xxl:justify-center xxl:flex-col xxl:ml-[4rem] xxl:mt-[-4rem]">
            <h3 className="xl:text-3xl font-bold text-white xs:text-2xl xs:text-center mb-4 sm:text-center lg:text-center">
              For Contact
            </h3>
            <p className=" text-gray-300 text-lg mb-3 sm:text-[17px] sm:text-center xl:text-lg xs:text-[15px] xxl:text-[22px] ">
              <i className="bx bxs-envelope  xl:text-lg xs:px-1 xs:text-xl sm:text-[20px]  xs:text-[15px] xxl:text-[22px] text-white transition-all  duration-300 hover:text-titleColor hover:scale-110 "></i>
              support@perfume.com
            </p>
            <p className="text-gray-300 text-lg sm:text-[20px]  sm:text-center xs:text-[15px] xl:text-lg     xxl:text-[20px] mb-3">
              <i
                className="bx bx-phone   xl:text-xl xs:text-xl sm:text-[20px] xs:text-[15px] xxl:text-[22px]
             text-white transition-all duration-300 hover:text-titleColor hover:scale-110"
              ></i>
              +92 234 567 880
            </p>
            <p className="text-gray-300 xl:text-lg xs:text-[15px]  sm:text-[17px]  xxl:text-[22px] sm:text-center mb-3">
              <i className="bx bx-location-plus text-3xl xs:text-xl xl:text-xl   sm:text-[20px]  text-white transition-all duration-300 xs:text-[15px] xxl:text-[22px] hover:text-titleColor hover:scale-110"></i>
              457 perfume fb, Misto City
            </p>
          </div>
          <form className="bg-gray-900 xl:py-19 xl:px-13 xs:py-[1.5rem] xxl:mr-[1rem]  xs:px-1  rounded-lg shadow-lg w-full lg:w-2/3 sm:mx-auto  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4   ">
              <input
                type="text"
                className="xl:p-3 xl:w-[21rem] xxl:py-4 xxl:px-5 xs:py-2 xs:-px-3  xs:w-[15rem] sm:w-[20rem] sm:px-[1rem] xs:px-[3rem] xs:ml-6 lg:w-[16rem] bg-gray-800 text-white text-center rounded-lg xxl:w-[25rem] xxl:mr-[1.5rem] sm:text-left sm:ml-[0.25rem] xsm:text-left xsm:ml-9 md:w-[19rem] md:ml-[2rem] xs:text-left xs:pl-[1rem]"
                placeholder="Your Name"
              />

              <input
                type="email"
                className="xl:p-3  xl:w-[21rem] lg:ml-3 xs:py-2 xs:px-2 xs:w-[15rem] sm:w-[20rem] sm:px-[1rem] sm:text-left sm:ml-[0.25rem] lg:w-[16rem] md:w-[19rem] md:ml-[2px] lg:mr-[10rem] xs:ml-6 xxl:w-[25rem]   bg-gray-800 text-white text-center  rounded-lg xsm:ml-9 xs:text-left xs:pl-[1rem]"
                placeholder="Your Email"
              />
            </div>
            <textarea
              className="xl:p-4 xxl:p-7 xs:p-3 bg-gray-800 text-white rounded-lg sm:w-[20rem] sm:px-[1rem] sm:h-64 mt-6 xl:w-[90%] xxl:w-[53rem]  xl:h-72  lg:w-[35.5rem] md:w-[90%] md:ml-[2rem] md:mr-[2rem] xxl:h-60 xs:w-[15rem] xsm:w-[20rem]  xs:ml-6  xs:h-48 sm:ml-[0.5rem]  xsm:ml-9 "
              placeholder="Your Message"
            />
            <button
              type="submit"
              className="mt-4 xl:mt-6 xl:ml-[19rem] lg:ml-[16rem] md:ml-[18rem]  xl:w-40 xl:py-4 xs:py-3 sm:py-3  xs:ml-[5rem] xs:text-[15px] xs:w-32 sm:w-32 sm:ml-24 xxl:ml-[25rem] xsm:ml-32   xs:text-center bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors duration-300 hover:scale-105"
              aria-placeholder="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
