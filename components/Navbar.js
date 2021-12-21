import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
function Navbar() {
  return (
    <>
      <nav className="sticky z-50 top-0 shadow-md p-4 bg-white">
        <div className="max-w-8xl mx-auto md:px-14">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Link href="/">
              <img
                className="cursor-pointer h-10 md:h-14"
                src="/energysolution.svg"
                alt="energy solution logo"
              />
            </Link>
            {/* navmenu */}
            <div className="hidden lg:flex lg:items-center md:space-x-5 lg:font-bold lg:text-gray-700">
              <Link href="/">
                <a className="hover:text-blue-400 focus:text-white">Home</a>
              </Link>
              <Link href="/dashboard">
                <a className="hover:text-blue-400 focus:text-white">
                  Portfolio
                </a>
              </Link>
              <Link href="/dashboard">
                <a className="hover:text-blue-400 focus:text-white">Contact</a>
              </Link>
              <Link href="/dashboard">
                <a className="hover:text-blue-400 focus:text-white">Partners</a>
              </Link>
              <Link href="/dashboard">
                <a className="hover:text-blue-400 flex items-center focus:text-white">
                  More
                  <ChevronDownIcon className="w-5 h-5 " aria-hidden="true" />
                </a>
              </Link>
              {/* dropdown */}

              <button className="sm:visible text-xl right-0 bg-transparent hover:bg-gradient-to-r from-green-500 to-blue-500 transition-all ease-linear text-blue-400 font-semibold hover:text-white py-4 px-4 border border-blue-400 hover:border-transparent rounded inline-flex items-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a href="tel:+8802222262118">+8802222262118</a>
              </button>
            </div>
          </div>
          {/* toggler button */}
          <div className="lg:hidden absolute inset-y-0 right-8 inline-flex items-center">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* <div className="">
          <ul className="block">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Partners</li>
          </ul>
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
