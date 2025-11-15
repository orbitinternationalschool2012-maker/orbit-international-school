"use client";

import Image from "next/image";

const PrincipalsQuote = () => {
  return (
    <section className="w-full bg-[#1c2333] py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote */}
        <p className="text-white text-xl md:text-2xl italic mb-8">
          "Education is not the filling of a pail, but the lighting of a fire.  
          At Orbit International School, we strive to ignite curiosity, creativity, and confidence in every student."
        </p>

        {/* Principal Info */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-24 h-24">
            <Image
              src="/principal.jpg"
              alt="Principal"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-white font-semibold text-lg">Dr Shajada</h3>
          <p className="text-gray-400 text-sm">Principal, Orbit International School</p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalsQuote;
