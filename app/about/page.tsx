"use client";

import Image from "next/image";

const Page = () => {
  return (
    <div className=" text-black">

      <section className="w-full h-[40vh] md:h-[50vh] relative flex items-center justify-center">
        <Image
          src="/about-banner.avif"
          alt="About Banner"
          fill
          className="object-cover opacity-40"
        />
        <h1 className="text-4xl font-bold">About Orbit</h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 w-full">
          <Image
            src="/aboutus.jpg"
            alt="School"
            width={700}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-black mb-4">
            Orbit International School is dedicated to shaping the minds of future
            leaders through quality education, discipline, and modern learning
            environments.
          </p>
          <p className="text-black">
            For more than a decade, we have been empowering students with academic
            excellence and moral values.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-[#1c2333]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To provide quality education that inspires students to be
              confident, responsible, and creative.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To build a community where students become future leaders with
              compassion and knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h3 className="text-center text-3xl font-bold mb-10">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#1c2333] p-6 rounded-xl text-center hover:scale-105 transition">
            <h4 className="text-xl font-semibold text-white mb-2">Experienced Teachers</h4>
            <p className="text-gray-300">Highly qualified and dedicated faculty members.</p>
          </div>

          <div className="bg-[#1c2333] p-6 rounded-xl text-center hover:scale-105 transition">
            <h4 className="text-xl font-semibold text-white mb-2">Modern Facilities</h4>
            <p className="text-gray-300">Smart classrooms, labs, and activity spaces.</p>
          </div>

          <div className="bg-[#1c2333] p-6 rounded-xl text-center hover:scale-105 transition">
            <h4 className="text-xl font-semibold text-white mb-2">Holistic Development</h4>
            <p className="text-gray-300">Co-curricular activities that build character and skills.</p>
          </div>

        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="py-16 bg-[#1c2333]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-6 text-white">Message From Principal</h3>
          <p className="text-white leading-relaxed">
            “Our goal is not only to educate but to inspire students to learn,
            explore and grow with confidence. We believe in developing each child
            academically, socially, and emotionally.”
          </p>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-center text-3xl font-bold mb-10">Our Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-[#1c2333] p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-white">10+</h4>
            <p className="text-gray-300 mt-2">Years of Excellence</p>
          </div>
          <div className="bg-[#1c2333] p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-white">1200+</h4>
            <p className="text-gray-300 mt-2">Students Graduated</p>
          </div>
          <div className="bg-[#1c2333] p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-white">25+</h4>
            <p className="text-gray-300 mt-2">Awards Won</p>
          </div>
          <div className="bg-[#1c2333] p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-white">35+</h4>
            <p className="text-gray-300 mt-2">Teachers</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16">
        <h3 className="text-center text-3xl font-bold mb-10">Campus Gallery</h3>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          <Image src="/campus1.jpg" alt="Campus" width={300} height={200} className="rounded-xl object-cover" />
          <Image src="/campus2.jpg" alt="Campus" width={300} height={200} className="rounded-xl object-cover" />
          <Image src="/campus3.jpg" alt="Campus" width={300} height={200} className="rounded-xl object-cover" />
          <Image src="/campus4.jpg" alt="Campus" width={300} height={200} className="rounded-xl object-cover" />
        </div>
      </section>

    </div>
  );
};

export default Page;
