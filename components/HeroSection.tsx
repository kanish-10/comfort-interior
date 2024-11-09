"use client";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights if needed
});

const HeroSection = () => {
  return (
    <section className="border-none px-4 pt-24 shadow-none md:h-[600px] md:px-16 lg:h-[700px] lg:px-10">
      {/* Container for the image and content */}
      <div className="relative mx-auto size-full max-w-7xl border-none py-32 shadow-none">
        {/* Background Image with rounded corners */}
        <div
          className="absolute inset-0 rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/hero-section.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-black opacity-40"></div>

        {/* Text Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-24 text-center text-white md:px-12 md:pt-28 lg:px-6 lg:pt-16">
          <h1
            className={`${montserrat.className} text-2xl font-bold md:text-4xl md:leading-[60px] lg:text-5xl`}
          >
            Transform Your Space into a{" "}
            <span className="md:inline-block">
              Dream with Comfort Interiors
            </span>
          </h1>
          <p className={`${montserrat.className} mt-4 text-lg md:text-xl`}>
            Expertly crafted designs for every Room!
          </p>
          <a
            href="#contact"
            className="mt-8 rounded-md bg-[#FFFEF8] px-4 py-2 font-bold text-[#75877C] hover:scale-105 md:px-6 md:text-[18px]"
          >
            Schedule a Free Consultation!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
