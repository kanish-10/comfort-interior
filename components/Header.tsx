"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen size to apply mobile or desktop view
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#FFFEF8] py-6 shadow-md">
      <div className="container mx-auto flex items-center justify-end px-4 lg:px-20">
        {/* Mobile Menu Button */}
        <button
          className="text-gray-800 hover:text-gray-900 focus:outline-none lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute right-0 top-20 w-full items-center bg-white text-[16px] transition-transform duration-300 lg:static lg:flex lg:w-auto lg:space-x-8 lg:bg-transparent lg:text-[18px] ${
            isOpen ? "flex flex-col space-y-4 p-4" : "hidden lg:flex"
          }`}
        >
          <Link href="/" className="text-gray-800 hover:text-gray-900">
            Home
          </Link>
          <Link href="#about" className="text-gray-800 hover:text-gray-900">
            About Us
          </Link>

          {/* Regular Projects Link (No Dropdown) */}
          <Link
            href="/projects"
            className="flex items-center text-gray-800 hover:text-gray-900"
          >
            Projects
          </Link>

          {/* Services Dropdown */}
          <div className="group relative cursor-pointer text-gray-800 hover:text-gray-900">
            <span className="flex items-center">
              Our Services
              <ChevronDownIcon className="ml-1 size-4" />
            </span>
            <div className="absolute top-full z-20 hidden w-56 min-w-max flex-col rounded-md bg-white shadow-xl group-hover:block">
              <div className="mt-2">
                <Link
                  href="/services/online-interior-designing"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Online Interior Designing
                </Link>
                <Link
                  href="/services/furnishing"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Furnishing
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Dropdown */}
          <div className="group relative cursor-pointer text-gray-800 hover:text-gray-900">
            <span className="group flex items-center">
              Portfolio
              <ChevronDownIcon className="ml-1 size-4" />
            </span>
            <div className="absolute top-full z-20 hidden w-56 min-w-max flex-col rounded-md bg-white shadow-xl group-hover:block">
              <div className="mt-2">
                <Link
                  href="/portfolio/residential-interior-design"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Residential Interior Design
                </Link>
                <Link
                  href="/portfolio/commercial-interior-design"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Commercial Interior Design
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="#contact"
            className="ml-0 rounded-lg bg-[#758F78] px-6 py-2 text-sm text-white hover:scale-105 hover:text-white lg:ml-8 lg:text-[18px]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
