"use client";

import React from "react";

const achievements = [
  { id: 1, title: "Years of Excellence", value: 10 },
  { id: 2, title: "Students Graduated", value: 1200 },
  { id: 3, title: "Awards Won", value: 25 },
  { id: 4, title: "Qualified Teachers", value: 35 },
];

const Achievements = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#1c2333] rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <p className="text-4xl font-bold text-[white] mb-2">
                {item.value}+
              </p>
              <p className="text-gray-300 text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
