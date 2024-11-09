// ResidentialInteriorDesign.js

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is loaded
import FAB from "@/components/Fab";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights if needed
});

const ResidentialInteriorDesign = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleImages, setVisibleImages] = useState(4); // Number of images initially visible for mobile view
  const [isMobileView, setIsMobileView] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  // State to store the image URL for full-screen view

  // Detect if the screen is in mobile view
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 640); // Mobile view if screen width <= 640px
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const toggleDropdown = (setDropdown) => {
  //   setDropdown((prev) => !prev);
  // };

  // URLs for each category's images
  const images = {
    "Bedroom Interiors": [
      "/images/bedroom1.jpg",
      "/images/bedroom2.png",
      "/images/bedroom3.jpg",
      "/images/bedroom4.jpg",
      "/images/bedroom5.jpg",
      "/images/bedroom6.jpg",
      "/images/bedroom7.jpg",
      "/images/bedroom8.jpg",
      "/images/bedroom9.jpg",
      "/images/bedroom10.jpg",
      "/images/bedroom11.jpg",
      "/images/bedroom12.jpg",
    ],
    "Kitchen Interiors": [
      "/images/kitchen1.jpg",
      "/images/kitchen2.jpg",
      "/images/kitchen3.jpg",
      "/images/kitchen4.jpg",
      "/images/kitchen5.jpg",
      "/images/kitchen6.jpg",
      "/images/kitchen7.jpg",
      "/images/kitchen8.jpg",
      "/images/kitchen9.jpg",
      "/images/kitchen10.jpg",
      "/images/kitchen11.jpg",
      "/images/kitchen12.jpg",
    ],
    "Dining Interiors": [
      "/images/dining1.jpg",
      "/images/dining2.jpg",
      "/images/dining3.jpg",
      "/images/dining4.jpg",
      "/images/dining5.jpg",
      "/images/dining6.jpg",
      "/images/dining7.jpg",
      "/images/dining8.jpg",
      "/images/dining9.jpg",
      "/images/dining10.jpg",
      "/images/dining11.jpg",
      "/images/dining12.jpg",
    ],
    "Living Area Interiors": [
      "/images/living1.jpg",
      "/images/living2.jpg",
      "/images/living3.jpg",
      "/images/living4.jpg",
      "/images/living5.jpg",
      "/images/living6.jpg",
      "/images/living7.jpg",
      "/images/living8.jpg",
      "/images/living9.jpg",
      "/images/living10.jpg",
      "/images/living11.jpg",
      "/images/living12.jpg",
    ],
    "Drawing Room Interiors": [
      "/images/drawing1.jpg",
      "/images/drawing2.jpg",
      "/images/drawing3.jpg",
      "/images/drawing4.jpg",
      "/images/drawing5.jpg",
      "/images/drawing6.jpg",
      "/images/drawing7.jpg",
      "/images/drawing8.jpg",
      "/images/drawing9.jpg",
      "/images/drawing10.jpg",
      "/images/drawing11.jpg",
      "/images/drawing12.jpg",
    ],
    "Toilet Interiors": [
      "/images/toilet1.jpg",
      "/images/toilet2.jpg",
      "/images/toilet3.jpg",
      "/images/toilet4.jpg",
      "/images/toilet5.jpg",
      "/images/toilet6.jpg",
      "/images/toilet7.jpg",
      "/images/toilet8.jpg",
      "/images/toilet9.jpg",
      "/images/toilet10.jpg",
      "/images/toilet11.jpg",
      "/images/toilet12.jpg",
    ],
    "Study Room": [
      "/images/study1.jpg",
      "/images/study2.jpg",
      "/images/study3.jpg",
      "/images/study4.jpg",
      "/images/study5.jpg",
      "/images/study6.jpg",
      "/images/study7.jpg",
      "/images/study8.jpg",
      "/images/study9.jpg",
      "/images/study10.jpg",
      "/images/study11.jpg",
      "/images/study12.jpg",
    ],
    "Kids Room": [
      "/images/kids1.jpg",
      "/images/kids2.jpg",
      "/images/kids3.jpg",
      "/images/kids4.jpg",
      "/images/kids5.jpg",
      "/images/kids6.jpg",
      "/images/kids7.jpg",
      "/images/kids8.jpg",
      "/images/kids9.jpg",
      "/images/kids10.jpg",
      "/images/kids11.jpg",
      "/images/kids12.jpg",
    ],
    "Pooja Room": [
      "/images/pooja1.jpeg",
      "/images/pooja2.jpeg",
      "/images/pooja3.jpeg",
      "/images/pooja4.jpeg",
      "/images/pooja5.jpeg",
      "/images/pooja6.jpeg",
      "/images/pooja7.jpeg",
      "/images/pooja8.jpeg",
      "/images/pooja9.jpeg",
      "/images/pooja10.jpeg",
      "/images/pooja11.jpeg",
      "/images/pooja12.jpeg",
    ],
    "Entertainment Room": [
      "/images/entertainment1.jpg",
      "/images/entertainment2.jpg",
      "/images/entertainment3.jpg",
      "/images/entertainment4.jpg",
      "/images/entertainment5.jpg",
      "/images/entertainment6.jpg",
      "/images/entertainment7.jpg",
      "/images/entertainment8.jpg",
      "/images/entertainment9.jpg",
      "/images/entertainment10.jpg",
      "/images/entertainment11.jpg",
      "/images/entertainment12.jpg",
    ],
    Stairs: [
      "/images/stairs1.jpg",
      "/images/stairs2.jpg",
      "/images/stairs3.jpg",
      "/images/stairs4.jpg",
      "/images/stairs5.jpg",
      "/images/stairs6.jpg",
      "/images/stairs7.jpg",
      "/images/stairs8.jpg",
      "/images/stairs9.jpg",
      "/images/stairs10.jpg",
      "/images/stairs11.jpg",
      "/images/stairs12.jpg",
    ],
    "Doors Window": [
      "/images/door1.jpg",
      "/images/door2.jpg",
      "/images/door3.jpg",
      "/images/door4.jpg",
      "/images/door5.jpg",
      "/images/door6.jpg",
      "/images/door7.jpg",
      "/images/door8.jpg",
      "/images/door9.jpg",
      "/images/door10.jpg",
      "/images/door11.jpg",
      "/images/door12.jpg",
    ],
    "TV Cabinet": [
      "/images/tvcabinet1.jpg",
      "/images/tvcabinet2.jpg",
      "/images/tvcabinet3.jpg",
      "/images/tvcabinet4.jpg",
      "/images/tvcabinet5.jpg",
      "/images/tvcabinet6.jpg",
      "/images/tvcabinet7.jpg",
      "/images/tvcabinet8.jpg",
      "/images/tvcabinet9.jpg",
      "/images/tvcabinet10.jpg",
      "/images/tvcabinet11.jpg",
      "/images/tvcabinet12.jpg",
    ],
    "False Ceiling": [
      "/images/falseceiling1.jpg",
      "/images/falseceiling2.jpg",
      "/images/falseceiling3.jpg",
      "/images/falseceiling4.jpg",
      "/images/falseceiling5.jpg",
      "/images/falseceiling6.jpg",
      "/images/falseceiling7.jpg",
      "/images/falseceiling8.jpg",
      "/images/falseceiling9.jpg",
      "/images/falseceiling10.jpg",
      "/images/falseceiling11.jpg",
      "/images/falseceiling12.jpg",
    ],
    // Additional categories as needed...
  };

  const categories = Object.keys(images);

  // URLs for default images to display when no category is selected
  const defaultImages = [
    "/images/default1.png",
    "/images/default2.jpg",
    "/images/default3.jpg",
    "/images/default4.jpg",
    "/images/default5.jpg",
    "/images/default6.jpg",
    "/images/default7.jpg",
    "/images/default8.jpg",
    "/images/default9.jpg",
    "/images/default10.jpg",
    "/images/default11.jpg",
    "/images/default12.jpg",
  ];

  // Show more or less images logic
  const showMoreImages = () => setVisibleImages(visibleImages + 4);
  const showLessImages = () => setVisibleImages(4);

  // Function to handle full-screen view
  const openFullScreen = (image: any) => setFullScreenImage(image);
  const closeFullScreen = () => setFullScreenImage(null);

  return (
    <div>
      {/* Navbar */}
      {/* Add Header component here */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex h-[60vh] w-full items-center justify-center bg-cover bg-center md:h-[80vh]"
        style={{ backgroundImage: "url('/images/hero_interior.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Dark overlay */}
        <div className="relative z-10 px-4 text-center text-white">
          <h1
            className={`${montserrat.className} text-3xl font-bold md:text-5xl`}
          >
            Residential Interior Designing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
            We provide customized interior design solutions to make your home a
            perfect reflection of your personal style and comfort.
          </p>
        </div>

        {/* Breadcrumbs in Bottom-Left Corner */}
        <div className="absolute bottom-4 left-4 flex space-x-2 text-sm text-gray-200 md:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>~</span>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <span>~</span>
          <span>Residential Interior Designing</span>
        </div>
      </section>

      {/* Category Links or Back Button */}
      <div className="container mx-auto px-4 py-8">
        {selectedCategory ? (
          <div className="mb-4 flex items-center">
            <button
              className="rounded bg-gray-200 px-4 py-2 font-semibold text-gray-800 transition hover:bg-gray-300"
              onClick={() => {
                setSelectedCategory(null);
                setVisibleImages(4);
              }}
            >
              ← Back
            </button>
            <h2 className="mx-auto text-center text-2xl font-bold text-gray-800">
              {selectedCategory}
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-2 text-center text-sm sm:grid-cols-4 lg:flex lg:flex-wrap lg:text-base">
            {categories.map((category) => (
              <button
                key={category}
                className="px-2 py-1 font-semibold text-gray-800 transition "
                // @ts-ignore
                onClick={() => setSelectedCategory(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full-Screen Image Modal */}
      {fullScreenImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <img
            src={fullScreenImage}
            alt="Full Screen"
            className="max-h-full max-w-full rounded-md"
          />
          <button
            onClick={closeFullScreen}
            className="absolute right-4 top-4 rounded-full bg-white p-2 text-black hover:bg-gray-200 focus:outline-none"
          >
            ✕
          </button>
        </div>
      )}

      {/* Image Display */}
      <div className="container mx-auto grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(selectedCategory ? images[selectedCategory] : defaultImages)
          .slice(
            0,
            isMobileView
              ? visibleImages
              : selectedCategory
                ? // @ts-ignore
                  images[selectedCategory].length
                : defaultImages.length,
          )
          .map((image, index) => (
            <div
              key={index}
              className="relative h-48 w-full cursor-pointer overflow-hidden rounded-lg bg-cover bg-center shadow-md transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => openFullScreen(image)}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-lg font-semibold text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                View Full Screen
              </div>
            </div>
          ))}
      </div>

      {/* Show More / Show Less Buttons for Default Images */}
      {!selectedCategory && isMobileView && (
        <div className="mb-6 mt-4 text-center">
          {visibleImages < defaultImages.length && (
            <button
              className="mr-2 rounded-full bg-[#758F78] px-6 py-2 text-sm text-white hover:bg-[#5d7360] lg:text-base"
              onClick={showMoreImages}
            >
              Show More
            </button>
          )}
          {visibleImages > 4 && (
            <button
              className="mt-2 rounded-full bg-[#758F78] px-6 py-2 text-sm text-white hover:bg-[#5d7360] lg:text-base"
              onClick={showLessImages}
            >
              Show Less
            </button>
          )}
        </div>
      )}

      {/* Show More / Show Less Buttons for Category-Specific Images */}
      {selectedCategory && isMobileView && (
        <div className="mb-6 mt-4 text-center">
          {/* @ts-ignore */}
          {visibleImages < images[selectedCategory].length && (
            <button
              className="mr-2 rounded-full bg-[#758F78] px-6 py-2 text-sm text-white hover:bg-[#5d7360] lg:text-base"
              onClick={showMoreImages}
            >
              Show More
            </button>
          )}
          {visibleImages > 4 && (
            <button
              className="rounded-full bg-[#758F78] px-6 py-2 text-sm text-white hover:bg-[#5d7360] lg:text-base"
              onClick={showLessImages}
            >
              Show Less
            </button>
          )}
        </div>
      )}
      {/* Footer */}
      {/* Add Footer component here */}
      <Footer />

      {/* Add FAB component here */}
      <FAB />
    </div>
  );
};

export default ResidentialInteriorDesign;
