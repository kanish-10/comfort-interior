"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Desktop view
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of testimonials
  const testimonials = [
    {
      quote:
        "The team transformed our office into a vibrant and functional workspace that truly represents our brand. We've received countless compliments from clients and employees alike!",
      author: "Arif Khan",
    },
    {
      quote:
        "Our home renovation was handled with such professionalism and care. The upgrades have made a huge difference in our daily living, blending modern features with our original charm.",
      author: "Priya Singh",
    },
    {
      quote:
        "Excellent and Professional Work. The team at Comfort zone helped me to customize my house interior as per my requirement and did a fabulous job. A special mention to Mr. Pravin Kumar.",
      author: "Anup Bannati",
    },
    {
      quote:
        "Working with this team has been a dream! They managed our project seamlessly from start to finish, ensuring every detail was perfect. Highly recommend their services!",
      author: "Samira Kapoor",
    },
    {
      quote:
        "From design to execution, the team was attentive to our needs and delivered on time. Our space has never looked better, and the final result exceeded expectations.",
      author: "Rajiv Sharma",
    },
  ];

  return (
    <section className="relative bg-[#FDFBF6] pb-10">
      <div className="container mx-auto px-6 py-12 sm:px-8 md:px-6 lg:px-6">
        {/* Background Image with Darkened Overlay */}
        <div className="relative flex h-[450px] w-full items-center justify-center overflow-hidden rounded-xl">
          <div className="absolute inset-0 z-10 bg-black opacity-70"></div>
          <img
            src="/images/testimonial.png"
            alt="testimonial background"
            className="size-full object-cover"
          />

          {/* Center-aligned Heading */}
          <div className="absolute top-[40px] z-20 flex size-full flex-col px-6 lg:px-12">
            <h2 className="mb-12 text-[32px] font-bold text-white">
              What our Clients are Saying
            </h2>

            {/* Testimonial Slider */}
            <div className="w-full">
              <Slider {...settings}>
                {/* Map through testimonials and render each slide */}
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="mx-auto flex h-[200px] w-[310px] flex-col items-center justify-between rounded-xl bg-white p-4 shadow-lg">
                      <p className="text-center text-sm font-medium leading-snug text-gray-900">
                        &#34;{testimonial.quote}&#34;
                      </p>
                      {testimonial.author && (
                        <p className="mt-4 text-right font-semibold italic text-[#75877C]">
                          ~ {testimonial.author}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
