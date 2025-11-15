import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "How Orbit Encourages Creative Learning",
      desc: "Discover how our creative teaching methods help students learn with enthusiasm.",
      img: "/blogs/blog1.jpg",
      date: "February 5, 2025",
    },
    {
      id: 2,
      title: "Annual Science Fair Highlights",
      desc: "A recap of the innovative science projects showcased by our talented students.",
      img: "/blogs/blog2.jpg",
      date: "January 28, 2025",
    },
    {
      id: 3,
      title: "Sports Day: A Celebration of Strength & Teamwork",
      desc: "From relay races to teamwork activities — here’s what made Sports Day special.",
      img: "/blogs/blog3.jpg",
      date: "January 10, 2025",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">

      {/* Header */}
      <div className="w-full py-14 bg-blue-600 text-center text-white">
        <h1 className="text-4xl font-bold">Our Blogs</h1>
        <p className="text-gray-100 mt-2">
          Read the latest updates, events & stories from Orbit International School
        </p>
      </div>

      {/* Blogs */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl duration-300"
          >
            {/* Image */}
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">{blog.date}</p>

              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {blog.desc}
              </p>

              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 duration-200">
                Read More
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default page;
