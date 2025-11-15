"use client";

import Image from "next/image";

const blogs = [
    {
        id: 1,
        title: "Annual Sports Day Highlights",
        description: "A look into the memorable moments from this year's sports day events.",
        image: "/blog1.jpg",
        link: "/blogs/1"
    },
    {
        id: 2,
        title: "Art Exhibition 2025",
        description: "Our students showcased their creative talent at the annual art exhibition.",
        image: "/blog2.jpg",
        link: "/blogs/2"
    },
    {
        id: 3,
        title: "Science Fair Winners",
        description: "Celebrating the young innovators who amazed everyone at the science fair.",
        image: "/blog3.jpg",
        link: "/blogs/3"
    },
];

const Blogs = () => {
    return (
        <section className="w-full py-16 px-6 bg-[#0E1724]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    Latest Blogs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {blogs.map((blog) => (
                        <a
                            key={blog.id}
                            href={blog.link}
                            className="bg-[#1c2333] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 block"
                        >
                            {/* Blog Image */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Blog Text */}
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-[#BB71FF] mb-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-300">{blog.description}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* View All Blogs Button */}
                <a
                    href="/blogs"
                    className="inline-block px-8 py-3 bg-[#BB71FF] text-white font-semibold rounded-lg hover:bg-purple-600 transition"
                >
                    View All Blogs
                </a>
            </div>
        </section>
    );
};

export default Blogs;
