"use client";
import React from "react";

const ServicesSection = () => {
  const Data = [
    {
      title: "Residential Designing",
      desc: "From cozy apartments to sprawling homes, we create personalized interiors to match your style.",
      src: "/images/residential-design.png",
      alt: "Residential Designing",
    },
    {
      title: "Commercial Designing",
      desc: " From dynamic offices to inviting retail spaces, we design spaces that enhance functionality and reflect your brand’s identity.",
      src: "/images/commercial-design.png",
      alt: "Commercial Designing",
    },
    {
      title: "Renovations and Upgrades",
      desc: "Transform your existing space with our innovative renovation solutions, blending modern upgrades with timeless style.",
      src: "/images/renovations-upgrades.png",
      alt: "Renovations and Upgrades",
    },
  ];
  return (
    <section
      id="services"
      className="bg-white px-4 py-12 sm:px-10 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-[24px] font-semibold text-black md:text-center md:text-[32px] lg:text-left">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {Data.map((d, i) => (
            <div
              className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105"
              key={i}
            >
              <div className="h-48 w-full overflow-hidden rounded-lg sm:h-60 lg:h-60">
                <img
                  src={d.src}
                  alt={d.alt}
                  className="size-full rounded-xl object-cover md:rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="mb-2 text-[24px] font-bold text-black">
                  {d.title}
                </h3>
                <p className="mt-2 text-[16px] text-black">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
