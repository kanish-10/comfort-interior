"use client";

import { useEffect, useState } from "react";
import FAB from "@/components/Fab"; // Import the FAB component
import Header from "@/components/Header"; // Import the Header component
import Footer from "@/components/Footer"; // Import the Footer component
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights if needed
});

const Furnishing = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleImages, setVisibleImages] = useState(4); // Number of images initially visible for mobile view
  const [isMobileView, setIsMobileView] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null); // State to store the image URL for full-screen view

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
    Beds: [
      "/images/bed1.jpg",
      "/images/bed2.jpg",
      "/images/bed3.jpg",
      "/images/bed4.jpg",
      "/images/bed5.jpg",
      "/images/bed6.jpg",
      "/images/bed7.jpg",
      "/images/bed8.jpg",
      "/images/bed9.jpg",
      "/images/bed10.jpg",
      "/images/bed11.jpg",
      "/images/bed12.jpg",
    ],
    Cabinets: [
      "/images/cabinets1.jpg",
      "/images/cabinets2.jpg",
      "/images/cabinets3.jpg",
      "/images/cabinets4.jpg",
      "/images/cabinets5.jpg",
      "/images/cabinets6.jpg",
      "/images/cabinets7.jpg",
      "/images/cabinets8.jpg",
      "/images/cabinets9.jpg",
      "/images/cabinets10.jpg",
      "/images/cabinets11.jpg",
      "/images/cabinets12.jpg",
    ],
    Sofas: [
      "/images/sofa1.jpg",
      "/images/sofa2.jpg",
      "/images/sofa3.jpg",
      "/images/sofa4.jpg",
      "/images/sofa5.jpg",
      "/images/sofa6.jpg",
      "/images/sofa7.jpg",
      "/images/sofa8.jpg",
      "/images/sofa9.jpg",
      "/images/sofa10.jpg",
      "/images/sofa11.jpg",
      "/images/sofa12.jpg",
    ],
    "Dining Furniture": [
      "/images/diningf1.jpg",
      "/images/diningf2.jpg",
      "/images/diningf3.jpg",
      "/images/diningf4.jpg",
      "/images/diningf5.jpg",
      "/images/diningf6.jpg",
      "/images/diningf7.jpg",
      "/images/diningf8.jpg",
      "/images/diningf9.jpg",
      "/images/diningf10.jpg",
      "/images/diningf11.jpg",
      "/images/diningf12.jpg",
    ],
    "Desks and Tables": [
      "/images/desk1.jpg",
      "/images/desk2.jpg",
      "/images/desk3.jpg",
      "/images/desk4.jpg",
      "/images/desk5.jpg",
      "/images/desk6.jpg",
      "/images/desk7.jpg",
      "/images/desk8.jpg",
      "/images/desk9.jpg",
      "/images/desk10.jpg",
      "/images/desk11.jpg",
      "/images/desk12.jpg",
    ],
    Recliners: [
      "/images/rec1.jpeg",
      "/images/rec2.jpeg",
      "/images/rec3.jpeg",
      "/images/rec4.jpeg",
      "/images/rec5.jpeg",
      "/images/rec6.jpeg",
      "/images/rec7.jpeg",
      "/images/rec8.jpeg",
      "/images/rec9.jpeg",
      "/images/rec10.jpeg",
      "/images/rec11.jpeg",
      "/images/rec12.jpeg",
    ],
    Bench: [
      "/images/bench1.jpg",
      "/images/bench2.jpg",
      "/images/bench3.jpg",
      "/images/bench4.jpg",
      "/images/bench5.jpg",
      "/images/bench6.jpg",
      "/images/bench7.jpg",
      "/images/bench8.jpg",
      "/images/bench9.jpg",
      "/images/bench10.jpg",
      "/images/bench11.jpg",
      "/images/bench12.jpg",
    ],
    Nightstands: [
      "/images/night1.jpg",
      "/images/night2.jpg",
      "/images/night3.jpg",
      "/images/night4.jpg",
      "/images/night5.jpg",
      "/images/night6.jpg",
      "/images/night7.jpg",
      "/images/night8.jpg",
      "/images/night9.jpg",
      "/images/night10.jpg",
      "/images/night11.jpg",
      "/images/night12.jpg",
    ],

    // Additional categories as needed...
  };

  const categories = Object.keys(images);

  // URLs for default images to display when no category is selected
  const defaultImages = [
    "/images/furniture1.jpg",
    "/images/furniture2.jpg",
    "/images/furniture3.jpg",
    "/images/furniture4.jpg",
    "/images/furniture5.jpg",
    "/images/furniture6.jpg",
    "/images/furniture7.jpg",
    "/images/furniture8.jpg",
    "/images/furniture9.jpg",
    "/images/furniture10.jpg",
    "/images/furniture11.jpg",
    "/images/furniture12.jpg",
  ];

  // Show more or less images logic
  const showMoreImages = () => setVisibleImages(visibleImages + 4);
  const showLessImages = () => setVisibleImages(4);

  // Function to handle full-screen view
  const openFullScreen = (image: any) => setFullScreenImage(image);
  const closeFullScreen = () => setFullScreenImage(null);

  return (
    <div className="bg-[#FFFEF8]">
      <Header />
      <section
        className="relative mx-16 mt-24 flex h-[40vh] items-center justify-center rounded-[24px] bg-cover bg-center md:h-[60vh]"
        style={{ backgroundImage: "url('/images/furniture-hero.jpg')" }}
      >
        <div className="absolute inset-0 rounded-[24px] bg-black opacity-50"></div>
        {/* Dark overlay */}
        <div className="relative z-10 px-4 text-center text-white">
          <h1
            className={`${montserrat.className} text-3xl font-bold md:text-5xl`}
          >
            Furnitures
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
            We provide various types of customized furnitures to make your house
            or your workspace a perfect reflection of your personal style and
            ideas.
          </p>
        </div>

        {/* Breadcrumbs in Bottom-Left Corner */}
        {/* <div className="absolute bottom-4 left-4 text-sm md:text-base text-gray-200 flex space-x-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:underline">Our services</Link>
          <span>/</span>
          <span>Furnishing</span>
        </div> */}
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
                className=" border-1 px-2 py-1 font-semibold text-gray-800 transition "
                // @ts-ignore
                onClick={() => setSelectedCategory(category)}
              >
                {category}
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

export default Furnishing;
