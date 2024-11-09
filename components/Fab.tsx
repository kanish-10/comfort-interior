"use client";
import React from "react";

const FAB = () => {
  return (
    <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center">
      <a
        href="mailto:your-email@example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-3 flex size-12 items-center justify-center rounded-md border border-[#D0B17D] bg-[#F0E6D5] shadow-lg hover:bg-[#D9C4A5]"
      >
        <img src="/icons/email-icon.png" alt="Email" className="size-6" />
      </a>
      <a
        href="https://wa.me/your-phone-number"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-3 flex size-12 items-center justify-center rounded-md bg-[#25D366]/30 shadow-lg hover:bg-[#128C7E]"
      >
        <img
          src="/icons/whatsapp-icon.png"
          alt="WhatsApp"
          className="size-8"
        />
      </a>
      <a
        href="tel:+your-phone-number"
        className="flex size-12 items-center justify-center rounded-md bg-[#FF5C5C]/30 shadow-lg hover:bg-[#E03B3B]"
      >
        <img src="/icons/phone-icon.png" alt="Phone" className="size-6" />
      </a>
    </div>
  );
};

export default FAB;
