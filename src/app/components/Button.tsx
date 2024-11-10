import Link from "next/link";

import React from "react";

const Button = () => {
  return (
    <Link href="/contact">
      <div className="sm:flex sm:justify-center">
        <button className="border rounded-xl lg:rounded-lg text-white text-lg lg:text-lg  md:text-sm xs:text-sm sm:text-center sm:px-3 sm:text-sm font-semibold  md:px-5 md:py-3  px-3 py-2 lg:px-3 lg:py-2 xxl:px-4 xxl:py-2 transition-all duration-300 hover:bg-titleColor hover:scale-105">
          TRY NOW
        </button>
      </div>
    </Link>
  );
};

export default Button;
