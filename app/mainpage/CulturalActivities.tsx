"use client";

import React from "react";
import Image from "next/image";

const activities = [
  { id: 1, title: "Music & Dance", description: "Explore classical and modern performances by our talented students.", image: "/cultural1.jpg" },
  { id: 2, title: "Art & Craft", description: "Creative workshops and exhibitions showcasing student artwork.", image: "/cultural2.jpg" },
  { id: 3, title: "Drama & Theater", description: "Stage performances and school plays throughout the year.", image: "/cultural3.jpg" },
];

const CulturalActivities = () => {
  return (
    <section className="w-full py-16 px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Cultural Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-[#1c2333] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[white] mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-300">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

     
        <a
          href="/cultural"
          className="inline-block px-8 py-3 bg-[black] text-white font-semibold rounded-lg hover:bg-gray-600 transition"
        >
          View All Cultural Activities
        </a>
      </div>
    </section>
  );
};

export default CulturalActivities;
