"use client";
import Link from "next/link";
import React, { useState } from "react";
import LogoSVG from "@/public/images/logo";
import { fredoka } from "@/assets/fonts";
import { usePathname } from "next/navigation";
import { IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";

export default function Navbar(): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="bg-emerald-deep shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* 1. Global Styling Container */}
        <div className="h-18 flex items-center">
          {/* 2. Local Styling Container (navbar row) */}

          <div className="flex md:hidden ml-4 mt-1 items-center">
            {/* 3. Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile menu"
            >
              <svg
                className="block h-6 w-6 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:justify-start">
            {/* 4. Logo + Links wrapper */}

            <Link
              className="flex items-center ml-4 "
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogoSVG className="w-10 h-10 " />

              <span
                className={`${fredoka.className} text-emerald-400 text-3xl`}
              >
                Portfolio
              </span>
            </Link>
            <div className="hidden md:block md:ml-6">
              {/* 5. Desktop links visibility wrapper */}

              <div className="space-x-2  translate-y-1">
                {/* 6. Desktop links flex/spacing wrapper */}
                <Link
                  className={
                    pathname === "/"
                      ? "text-mint-light px-3 py-1 rounded-md border-b-2 border-t-2 border-emerald-400"
                      : "text-mint-light rounded-md px-3 py-2  hover:bg-emerald hover:text-white"
                  }
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className={
                    pathname === "/about"
                      ? "text-mint-light px-3 py-1 rounded-md border-b-2 border-t-2 border-emerald-400"
                      : "text-mint-light rounded-md px-3 py-2  hover:bg-emerald hover:text-white"
                  }
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className={
                    pathname === "/projects"
                      ? "text-mint-light px-3 py-1 rounded-md border-b-2 border-t-2 border-emerald-400"
                      : "text-mint-light rounded-md px-3 py-2  hover:bg-emerald hover:text-white"
                  }
                  href="/projects"
                >
                  Projects
                </Link>
                <Link
                  className={
                    pathname === "/contact"
                      ? "text-mint-light px-3 py-1 rounded-md border-b-2 border-t-2 border-emerald-400"
                      : "text-mint-light rounded-md px-3 py-2  hover:bg-emerald hover:text-white"
                  }
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-8 mr-4">
              <Link
                href="https://www.linkedin.com/in/ben-wallace-630462174/"
                target="_blank"
              >
                <IoLogoLinkedin size={40} className="text-emerald-400" />
              </Link>
              <Link href="https://github.com/Wallace-Ben" target="_blank">
                <IoLogoGithub size={40} className="text-emerald-400" />
              </Link>
              <Link href="/contact">
                <IoMail size={40} className="text-emerald-400" />
              </Link>
            </div>
          </div>
          <div className="md:hidden mr-4 mt-1 w-[52px]"></div>
        </div>
      </div>

      <div className="bg-emerald">
        <div
          className={`flex flex-col bg-mint-light border-2 rounded-md border-emerald-500
    transition-all duration-400 ease-in-out overflow-hidden
    ${isMobileMenuOpen ? " max-h-80" : " max-h-0 pointer-events-none"}
  `}
        >
          {/* Mobile Menu Display */}
          <Link
            className={
              pathname === "/"
                ? "text-charcoal font-semibold px-3 py-4 rounded-md bg-mint"
                : "text-emerald-deep px-3 py-4"
            }
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={
              pathname === "/about"
                ? "text-charcoal font-semibold px-3 py-4 rounded-md bg-mint"
                : "text-emerald-deep px-3 py-4"
            }
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className={
              pathname === "/projects"
                ? "text-charcoal font-semibold px-3 py-4 rounded-md bg-mint"
                : "text-emerald-deep px-3 py-4"
            }
            href="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            className={
              pathname === "/contact"
                ? "text-charcoal font-semibold px-3 py-4 rounded-md bg-mint"
                : "text-emerald-deep px-3 py-4"
            }
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex justify-around mx-[10%] my-3">
            <Link
              href="https://www.linkedin.com/in/ben-wallace-630462174/"
              className="px-4"
              target="_blank"
            >
              <IoLogoLinkedin size={40} className="text-emerald" />
            </Link>
            <Link
              href="https://github.com/Wallace-Ben"
              className="px-4"
              target="_blank"
            >
              <IoLogoGithub size={40} className="text-emerald" />
            </Link>
            <Link href="/" className="px-4" target="_blank">
              <IoMail size={40} className="text-emerald" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
