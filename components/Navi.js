/* This example requires Tailwind CSS v2.0+ */
// import { Fragment, useState } from "react";

// import { Disclosure, Menu, Transition, Switch } from "@headlessui/react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  // BriefcaseIcon,
  // BellIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
// import Image from "next/image";

const defaultNavigation = [
  // { name: "Residential", href: "/residential", current: false },
  // { name: "Business", href: "/", current: false },
  // { name: "Blog", href: "#", current: false },
  { name: "Home", href: "/", current: false },
  { name: "Portfolio", href: "/portfolio", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Partners", href: "/partners", current: false },
  //   { name: "More", href: "#whyus", current: false },
  // { name: "F.A.Q", href: "/", current: false },
];

const dropdownNavigation = [
  // { name: " O&M Support", href: "/onm", current: false },
  { name: "Acquired Memberships", href: "/memberships", current: false },
  { name: "Sister Concern", href: "/sisconcern", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export default function Navi() {
  return (
    <Disclosure
      as='nav'
      className='sticky z-50 top-0 shadow-md px-4 backdrop-blur-lg bg-white/90'
    >
      {({ open }) => (
        <>
          <div className='max-w-8xl mx-auto md:px-14'>
            <div className='relative flex items-center justify-between h-24'>
              <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex md:items-stretch md:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link href='/'>
                    <a className='bg-logo-default bg-no-repeat w-72 sm:w-96 h-14 sm:h-14'></a>
                  </Link>
                </div>
              </div>
              <div className='hidden lg:block sm:ml-6 select-none '>
                <div className='flex md:space-x-4 lg:space-x-10 py-4'>
                  {defaultNavigation.map((item) => (
                    <MyLink
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "focus:text-tatsuBTN2 xs:bg-gray-900"
                          : "hover:text-blue-600 focus:text-blue-500",
                        "rounded-md text-gray-700 text-base font-bold"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </MyLink>
                  ))}
                  <Menu as='div' className=''>
                    <div>
                      <Menu.Button className='relative inline-flex justify-center items-center w-full text-md font-bold text-gray-700 hover:text-blue-600'>
                        More
                        <ChevronDownIcon
                          className='w-4 h-4'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right backdrop-blur-sm bg-white/90 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-4 py-8 flex flex-col space-y-2 text-gray-700 text-base font-bold'>
                          {/* <Menu.Item>
                            <MyLink href='/onm' className='hover:text-blue-600'>
                              O&amp;M Support
                            </MyLink>
                          </Menu.Item>
                          <hr /> */}
                          <Menu.Item>
                            <MyLink
                              href='/memberships'
                              className='hover:text-blue-600'
                            >
                              Acquired Memberships
                            </MyLink>
                          </Menu.Item>
                          <hr />
                          <Menu.Item>
                            <MyLink
                              href='/sisconcern'
                              className='hover:text-blue-600'
                            >
                              Sister Concern
                            </MyLink>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              {/* <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button className='sm:visible text-lg right-0 bg-transparent hover:bg-blue-400 transition-all ease-linear text-blue-400 font-semibold hover:text-white py-4 px-4 border   rounded inline-flex items-center'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <a
                    href='/docs/ESEL-ES_Company-Profile.pdf'
                    alt='Download Energy Solution Company Profile'
                    target='_self'
                    rel='noopener noreferrer'
                  >
                    Company Profile
                  </a>
                </button>
              </div> */}
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {defaultNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* otheritems */}
              {dropdownNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
