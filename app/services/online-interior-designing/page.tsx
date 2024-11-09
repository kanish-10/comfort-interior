"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import FAB from "@/components/Fab";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights if needed
});

const OnlineInteriorDesigning = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false);
  // const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen size to apply mobile or desktop view
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 1024); // Mobile view if screen width <= 1024px
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const toggleDropdown = (setDropdown) => {
  //   setDropdown((prev) => !prev);
  // };

  return (
    <div>
      {/* Add Header component here */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex h-[60vh] w-full items-center justify-center bg-cover bg-center md:h-[80vh]"
        style={{ backgroundImage: "url('/images/hero_interior.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4 text-center text-white">
          <h1
            className={`${montserrat.className} text-3xl font-bold md:text-5xl`}
          >
            Online Interior Designing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
            Experience the future of interior design from the comfort of your
            home. Our virtual design services bring your dream space to life, no
            matter where you are.
          </p>
        </div>

        <div className="absolute bottom-4 left-4 flex space-x-2 text-sm text-gray-200 md:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>~</span>
          <Link href="/online-interior-designing" className="hover:underline">
            Our Services
          </Link>
          <span>~</span>
          <span>Online Interior Designing</span>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
            How It Works
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Our online interior design process is tailored to ensure that you
            get a customized, convenient, and professional interior design
            experience from the comfort of your home.
          </p>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="items-center md:flex md:space-x-10">
              <div className="text-left md:w-1/2">
                <h3 className="font-semibold text-[#758F78]">Stage 1</h3>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Discuss Your Space
                </h3>
                <p className="mb-4 text-gray-600">
                  Connect with our{" "}
                  <span className="font-semibold">expert consultant</span> via
                  various telephonic methods available, or leave your query on
                  our website. We will contact you at the earliest. Share your
                  space through pictures and videos, floor plans, and discuss
                  your <span className="font-semibold">requirements</span>.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2">
                <img
                  src="/images/discuss_space.png"
                  alt="Discuss Your Space"
                  className="mx-auto w-full max-w-md rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="items-center md:flex md:flex-row-reverse md:space-x-10">
              <div className="text-left md:w-1/2">
                <h3 className="font-semibold text-[#758F78]">Stage 2</h3>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Get Paired with a Designer
                </h3>
                <p className="mb-4 text-gray-600">
                  Once aboard, you will be paired with a{" "}
                  <span className="font-semibold">
                    dedicated interior designer
                  </span>
                  , who will coordinate with you throughout the project. The
                  designer will have brainstorming sessions to understand your
                  taste, budget, and family structure for customizing the
                  design.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2">
                <img
                  src="/images/paired_designer.png"
                  alt="Get Paired with a Designer"
                  className="mx-auto w-full max-w-md rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="items-center md:flex md:space-x-10">
              <div className="text-left md:w-1/2">
                <h3 className="font-semibold text-[#758F78]">Stage 3</h3>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Co-Create the Designs
                </h3>
                <p className="mb-4 text-gray-600">
                  The designer will create an initial concept of space planning
                  and furniture layout according to{" "}
                  <span className="font-semibold">Vastu</span>. Modifications
                  will be made until you are satisfied. Exclusive 3D Interiors
                  will be designed based on the selected{" "}
                  <span className="font-semibold">budget</span>,{" "}
                  <span className="font-semibold">layout</span>, and{" "}
                  <span className="font-semibold">theme</span>.
                  <br />
                  These 3D designs will showcase ceiling designs, flooring,
                  color schemes, and more. Any required changes will be made to
                  ensure complete satisfaction.
                  <br />
                  Once finalized, the designer will provide{" "}
                  <span className="font-semibold">work drawings</span> with{" "}
                  <span className="font-semibold">material specifications</span>{" "}
                  and measurements.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2">
                <img
                  src="/images/co_create.png"
                  alt="Co-Create the Designs"
                  className="mx-auto w-full max-w-md rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="items-center md:flex md:flex-row-reverse md:space-x-10">
              <div className="text-left md:w-1/2">
                <h3 className="font-semibold text-[#758F78]">Stage 4</h3>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Execution Support
                </h3>
                <p className="mb-4 text-gray-600">
                  Receive telephonic support from your designer during the
                  execution phase, ensuring that your vision comes to life
                  seamlessly.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2">
                <img
                  src="/images/execution_support.png"
                  alt="Execution Support"
                  className="mx-auto w-full max-w-md rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase text-[#758F78]">
                Projects
              </h3>
              <h2 className="text-3xl font-bold text-gray-800">
                Recent <span className="font-normal">Work</span>
              </h2>
            </div>
            <a
              href="#explore-more"
              className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              Explore More <span className="ml-2">→</span>
            </a>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Project Card 1 */}
            <div className="relative overflow-hidden rounded-lg bg-gray-200 shadow-lg">
              <img
                src="/images/project1.jpg"
                alt="Project Image 1"
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span className="text-3xl font-bold text-white">→</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="relative overflow-hidden rounded-lg bg-gray-200 shadow-lg">
              <img
                src="/images/project2.jpg"
                alt="Project Image 2"
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span className="text-3xl font-bold text-white">→</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="relative overflow-hidden rounded-lg bg-gray-200 shadow-lg">
              <img
                src="/images/project3.jpg"
                alt="Project Image 3"
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span className="text-3xl font-bold text-white">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-8 text-center">
            <h3 className="text-sm font-semibold uppercase text-[#758F78]">
              Featuring
            </h3>
            <h2 className="text-3xl font-bold text-gray-800">Our Portfolio</h2>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Residential Interior Designing */}
            <a
              href="/portfolio/residential-interior-design"
              className="group relative block overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="/images/hero_interior.png"
                alt="Residential Interior Designing"
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 px-4 py-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Residential Interior Designing
                </h3>
                <p className="flex items-center justify-center text-sm font-medium text-gray-600">
                  Explore More <span className="ml-2">→</span>
                </p>
              </div>
            </a>

            {/* Commercial Interior Designing */}
            <a
              href="/portfolio/commercial-interior-design"
              className="group relative block overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="/images/herocommercial.jpg"
                alt="Commercial Interior Designing"
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 px-4 py-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Commercial Interior Designing
                </h3>
                <p className="flex items-center justify-center text-sm font-medium text-gray-600">
                  Explore More <span className="ml-2">→</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Add Footer component here */}
      <Footer />

      {/* Add FAB component here */}
      <FAB />
    </div>
  );
};

export default OnlineInteriorDesigning;
