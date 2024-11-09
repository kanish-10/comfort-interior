"use client";

const WhatSetsUsApart = () => {
  return (
    <section className="bg-[#e2e0d6] px-6 py-12 sm:px-8 md:px-[56px] lg:px-[56px]">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-2xl  text-black sm:text-left sm:text-3xl md:text-4xl">
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {/* Experienced Team */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl">
              <img
                src="/icons/experienced-team.png"
                alt="Experienced Team"
                className="mx-auto size-16"
              />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-black">
              Experienced Team
            </h3>
            <p className="text-sm text-gray-600">
              Our skilled team brings years of expertise to every project,
              blending deep knowledge with creativity to make your vision a
              reality.
            </p>
          </div>

          {/* Budget Oriented */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl">
              <img
                src="/icons/budget-oriented.png"
                alt="Budget Oriented"
                className="mx-auto size-16"
              />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-black">
              Budget Oriented
            </h3>
            <p className="text-sm text-gray-600">
              We maximize value with tailored solutions that fit your budget,
              ensuring high-quality results without overspending.
            </p>
          </div>

          {/* Free Consultation */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl">
              <img
                src="/icons/free-consultation.png"
                alt="Free Consultation"
                className="mx-auto size-16"
              />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-black">
              Free Consultation
            </h3>
            <p className="text-sm text-gray-600">
              Get started with a no-cost consultation to discuss your ideas and
              receive expert advice, helping you make informed decisions.
            </p>
          </div>

          {/* Final Box - Hidden on Mobile */}
          <div className="hidden items-center justify-center rounded-lg bg-white p-6 text-center shadow-md lg:flex">
            <p className="text-sm text-gray-600">
              Additional content coming soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
