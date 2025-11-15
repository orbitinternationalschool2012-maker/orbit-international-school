"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1c2333] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Orbit International School"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-white font-semibold text-xl">
              Orbit International School
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Committed to nurturing confident, responsible, and creative students through quality education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Admissions</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>395 Shadhinata Sharani, Dhaka 1212</p>
          <p>Phone: +880 1234 567890</p>
          <p>Email: info@orbit-school.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">🌐</a>
            <a href="#" className="hover:text-white transition">🐦</a>
            <a href="#" className="hover:text-white transition">📘</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Orbit International School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
