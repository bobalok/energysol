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
              {/* <Link href="/dashboard">
                <a className="hover:text-blue-400 flex items-center focus:text-white dropdown relative">
                  More
                  <ChevronDownIcon className="w-5 h-5 " aria-hidden="true" />
                </a>
              </Link> */}
              {/* dropdown */}

              <div className="flex justify-center">
                <div>
                  <div className="dropdown relative">
                    <a
                      className="
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                      href="#"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown link
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="svg-inline--fa fa-caret-down w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul
                      className="
          dropdown-menu
          min-w-max
          absolute
          
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a
                          className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

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
