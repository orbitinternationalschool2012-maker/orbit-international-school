import React from "react";

const page = () => {
  const photos = [
    { src: "/gallery/img1.jpg", caption: "Annual Cultural Program" },
    { src: "/gallery/img2.jpg", caption: "Science Fair Projects" },
    { src: "/gallery/img3.jpg", caption: "Classroom Activities" },
    { src: "/gallery/img4.jpg", caption: "Sports Day Celebration" },
    { src: "/gallery/img5.jpg", caption: "Student Award Ceremony" },
    { src: "/gallery/img6.jpg", caption: "Library Study Session" },
    { src: "/gallery/img7.jpg", caption: "Art & Creativity Showcase" },
    { src: "/gallery/img8.jpg", caption: "Campus Environment" },
    { src: "/gallery/img9.jpg", caption: "Field Trip Memories" },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">

      {/* Header Section */}
      <div className="w-full py-14 bg-blue-600 text-center text-white">
        <h1 className="text-4xl font-bold">Photo Gallery</h1>
        <p className="text-gray-100 mt-2">
          Capturing special moments at Orbit International School
        </p>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

        {photos.map((item, index) => (
          <div key={index} className="rounded-xl bg-white shadow-sm hover:shadow-lg duration-300 overflow-hidden">

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-48 object-cover hover:scale-110 duration-300"
              />
            </div>

            {/* Caption */}
            <p className="text-center text-sm text-gray-700 py-3 px-2">
              {item.caption}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default page;
