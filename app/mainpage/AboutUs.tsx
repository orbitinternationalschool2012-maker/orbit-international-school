"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="md:w-1/2 w-full relative h-[300px] md:h-[400px]">
          <Image
            src="/aboutus.jpg"
            alt="About Us"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Orbit International School
          </h2>
          <p className="text-black mb-4">
            Orbit International School has been committed to providing quality
            education for over a decade. Our mission is to nurture students
            into confident, responsible, and creative individuals.
          </p>
          <p className="text-black">
            We offer modern classrooms, experienced faculty, and a wide range of
            co-curricular activities to ensure holistic development of our
            students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
