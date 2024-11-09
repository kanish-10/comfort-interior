"use client";

const CallToActionSection = () => {
  return (
    <section className="bg-white py-4">
      <div className="mx-auto grid max-w-full grid-cols-1 gap-0 lg:grid-cols-2">
        <div className="h-full overflow-hidden">
          <img
            src="/images/cta.jpg"
            alt="Budget Aapka, Kaam Humara"
            className="size-full object-cover object-left"
          />
        </div>
        <div className="mx-auto flex w-full flex-col items-center justify-center bg-[#F0E6D5] py-12 md:py-4">
          <div className="text-center">
            <h3 className="font mb-4 text-3xl text-black md:text-left">
              <span className="font-bold">Budget</span> Aapka,{" "}
              <span className="font-bold">Kaam</span> Humara
              <br />
              <span className="font-bold">Tareef</span> Aapki!
            </h3>
            <div className="mt-4 flex w-full justify-center md:justify-start">
              <button className="rounded-lg bg-[#75877C] px-6 py-2 text-white transition-all duration-300 hover:bg-[#5d7360]">
                Discuss with an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
