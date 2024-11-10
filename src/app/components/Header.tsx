"use client";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import React from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  // State for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-bodyColor text-white fixed w-full top-0 left-0 z-50">
      <nav className="container xl:px-4 flex justify-between items-center h-16 sm:h-20 max-w-full gap-8">

        
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo_image"
            height={200}
            width={200}
            className="xxl:h-32 h-28 max-w-full sm:h-32 xsm:h-28 xs:h-24 xs:w-28 lg:h-32 lg:w-32 md:h-24"
          />
        </div>

        {/* Menu Section */}
        <div
          className={`bg-cardColor/70 absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:flex-row md:h-auto md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full p-4 md:p-0 xxl:justify-end xxl:mr-5 lg:justify-end lg:mr-4 md:justify-end">
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                className={`hover:text-titleColor ${
                  pathName === "/" ? "text-titleColor font-bold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/collection"
                onClick={toggleMenu}
                className={`hover:text-titleColor ${
                  pathName === "/collection" ? "text-titleColor font-bold" : ""
                }`}
              >
                Collection
              </Link>
            </li>
            <li>
              <Link
                href="/popular"
                onClick={toggleMenu}
                className={`hover:text-titleColor ${
                  pathName === "/popular" ? "text-titleColor font-bold" : ""
                }`}
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={toggleMenu}
                className={`hover:text-titleColor ${
                  pathName === "/about" ? "text-titleColor font-bold" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className={`hover:text-titleColor ${
                  pathName === "/contact" ? "text-titleColor font-bold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Toggle Button for Mobile View */}
        <div className="xs:text-xl sm:text-3xl cursor-pointer z-50 md:hidden">
          <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
