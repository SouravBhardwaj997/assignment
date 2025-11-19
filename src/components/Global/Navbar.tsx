"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "../Atoms/Container";
import Link from "next/link";
import { Button } from "../Atoms/Button";
import { Logo } from "../icons/Logo";
import { ArrowIcon } from "../icons/Arrow";
import { MenuIcon, ChevronDownIcon, XIcon } from "../icons";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <Container>
      <div className="py-4 flex font-poppins justify-between items-center ">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center font-bold text-xl">
          <Logo />
        </Link>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <XIcon /> : <MenuIcon />}
        </button>

        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-base relative">
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-1 hover:text-primary transition"
              >
                Software Team <ChevronDownIcon />
              </button>

              <div
                className={`absolute left-0 mt-2 w-40 bg-white rounded-md shadow-md overflow-hidden 
                transition-all duration-300 origin-top
                ${
                  dropdown
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }
                `}
              >
                <ul className="flex flex-col">
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/">Frontend Team</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/">Backend Team</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/">DevOps Team</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/">UI/UX Team</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/"
                className="text-black hover:text-primary transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black hover:text-primary transition-all duration-300"
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black hover:text-primary transition-all duration-300"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black hover:text-primary transition-all duration-300"
              >
                Company
              </Link>
            </li>
          </ul>

          {/* Button */}
          <Button
            className="border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 px-4 flex items-center gap-2 group font-medium bg-transparent"
            rightIcon={
              <ArrowIcon className="group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 fill-primary transition-all duration-300 ease-in-out" />
            }
          >
            <span>Get In Touch</span>
          </Button>
        </div>

        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-6 transition-all duration-300 
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-4 text-base">
            <li className="flex flex-col">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center justify-between w-full"
              >
                Software Team <ChevronDownIcon />
              </button>

              <div
                className={`mt-2 ml-2 border-l pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-300 
                ${dropdown ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <Link href="/">Frontend Team</Link>
                <Link href="/">Backend Team</Link>
                <Link href="/">DevOps Team</Link>
                <Link href="/">UI/UX Team</Link>
              </div>
            </li>

            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Technologies</Link>
            </li>
            <li>
              <Link href="/">Resources</Link>
            </li>
            <li>
              <Link href="/">Company</Link>
            </li>
          </ul>

          {/* Button Mobile */}
          <Button
            className="border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 px-4 flex items-center w-fit gap-2 group font-medium bg-transparent"
            rightIcon={
              <ArrowIcon className="group-hover:text-white fill-primary transition-all duration-300 ease-in-out" />
            }
          >
            <span>Get In Touch</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};
