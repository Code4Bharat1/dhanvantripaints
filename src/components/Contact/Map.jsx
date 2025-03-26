"use client"; // Required if using Next.js App Router

import React from "react";

const GoogleMap = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 text-center my-10">
      <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-bold">Map</h2>
      <iframe
        className="w-full max-w-[1200px] h-[300px] sm:h-[350px] md:h-[450px] border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906702869!2d73.69815139367945!3d18.524870612673503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1742281761448!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
