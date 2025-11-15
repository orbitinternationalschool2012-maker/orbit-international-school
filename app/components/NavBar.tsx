"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1c2333] px-6 py-3 flex items-center justify-between shadow-md relative">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-white font-semibold text-2xl md:text-3xl">
          Orbit International School
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
        <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
        <Link href="/admission" className="text-gray-300 hover:text-white transition">Admissions</Link>
        <Link href="/teachers" className="text-gray-300 hover:text-white transition">Teachers</Link>
        <Link href="/photo" className="text-gray-300 hover:text-white transition">Photo Gallery</Link>
        <Link href="/blogs" className="text-gray-300 hover:text-white transition">Blogs</Link>

      </div>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden text-white cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1c2333] flex flex-col items-center gap-4 py-4 md:hidden shadow-lg z-40">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/admission"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Admissions
          </Link>
          <Link
            href="/teachers"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Teachers
          </Link>
          <Link
            href="/photo"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Photo Gallery
          </Link>
          <Link
            href="/blogs"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
