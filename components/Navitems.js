import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export default function Navitems() {
  return (
    <>
      <div className="hidden lg:flex lg:items-center md:space-x-5 lg:font-bold lg:text-gray-700">
        <Link href="/">
          <a className="hover:text-blue-400 focus:text-white">Home</a>
        </Link>
        <Link href="/dashboard">
          <a className="hover:text-blue-400 focus:text-white">Portfolio</a>
        </Link>
        <Link href="/dashboard">
          <a className="hover:text-blue-400 focus:text-white">Contact</a>
        </Link>
        <Link href="/dashboard">
          <a className="hover:text-blue-400 focus:text-white">Partners</a>
        </Link>

        {/* dropdown start */}

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center items-center w-full text-md font-bold text-gray-700 hover:text-blue-400">
              More
              <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right backdrop-blur-sm bg-white/30 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-8 flex flex-col space-y-2">
                <Menu.Item>
                  <MyLink
                    href="/Slider"
                    className="hover:text-blue-400 border-4 border-yellow-400"
                  >
                    Home
                  </MyLink>
                </Menu.Item>
                <hr />
                <Menu.Item>
                  <MyLink href="/" className="hover:text-blue-400">
                    Management
                  </MyLink>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <button className="sm:visible text-xl right-0 bg-transparent hover:bg-gradient-to-r from-green-900 to-red-800 transition-all ease-linear text-blue-400 font-semibold hover:text-white py-4 px-4 border   rounded inline-flex items-center">
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
    </>
  );
}
