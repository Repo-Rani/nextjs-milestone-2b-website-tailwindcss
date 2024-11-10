import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/70 text-white py-10 mt-10 xs:py-lg:py-6 ">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center gap-6 mb-8 lg:mt-2 ">
          <a
            href="https://www.instagram.com/starry__rani/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram  xl:text-4xl xs:text-3xl text-white transition-all duration-500 hover:scale-125 hover:text-titleColor"></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100089698213012"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook-circle xl:text-4xl  xs:text-3xl text-white transition-all duration-500 hover:scale-125 hover:text-titleColor"></i>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter xl:text-4xl xs:text-3xl   text-white transition-all duration-500 hover:scale-125 hover:text-titleColor"></i>
          </a>

          <a
            href="mailto:ranimiss968@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-gmail xl:text-4xl xs:text-3xl  text-white transition-all  duration-500 hover:scale-125 hover:text-titleColor"></i>
          </a>
        </div>

        <div className="flex xl:justify-center xl:text-lg  xxl:justify-center xxl:items-center xxl:flex-row  xs:flex-col xs:justify-center xs:items-center xs:gap-4 sm:text-sm gap-8 lg:flex-row lg:gap-7 mb-8 xxl:text-lg">
          <a
            href="/about"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-titleColor"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-titleColor"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-titleColor"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-titleColor"
          >
            Privacy Policy
          </a>
        </div>

        <div className="text-center">
          <p className=" opacity-75 text-sm xxl:text-lg xl:text-lg ">
            &copy; 2024 LovelyPerfume | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
