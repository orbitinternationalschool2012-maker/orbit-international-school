"use client";

import React from "react";

const Location = () => {
  return (
    <section className="w-full py-12 px-6 bg-[#0E1724]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Left: Map */}
        <div className="md:w-1/2 w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.803785167424!2d90.4310947!3d23.7840894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7952940dce7%3A0x6597ece3a52ebb4!2sOrbit%20International%20School!5e0!3m2!1sen!2sbd!4v1700190000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right: Contact Info */}
        <div className="md:w-1/2 w-full text-white flex flex-col justify-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Us
          </h2>

          <p>
            <span className="font-semibold">Address:</span> 395 Shadhinata Sharani, Dhaka 1212
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +880 1234 567890
          </p>
          <p>
            <span className="font-semibold">Email:</span> info@orbit-school.com
          </p>
          <p>
            <span className="font-semibold">Open Time:</span> Sat - Thu: 8:00 AM - 4:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
