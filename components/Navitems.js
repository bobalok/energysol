import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

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
      <div className='hidden lg:flex lg:items-center md:space-x-5 lg:font-bold lg:text-gray-700'>
        <Link href='/'>
          <a className='hover:text-blue-400 focus:text-blue-500'>Home</a>
        </Link>
        <Link href='/dashboard'>
          <a className='hover:text-blue-400 focus:text-blue-500'>Portfolio</a>
        </Link>
        <Link href='/dashboard'>
          <a className='hover:text-blue-400 focus:text-blue-500'>Contact</a>
        </Link>
        <Link href='/dashboard'>
          <a className='hover:text-blue-400 focus:text-blue-500'>Partners</a>
        </Link>

        {/* dropdown start */}

        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex justify-center items-center w-full text-md font-bold text-gray-700 hover:text-blue-400'>
              More
              <ChevronDownIcon className='w-5 h-5' aria-hidden='true' />
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
              <div className='px-4 py-8 flex flex-col space-y-2'>
                <Menu.Item>
                  <MyLink href='/Slider' className='hover:text-blue-400'>
                    Subsidiary Company
                  </MyLink>
                </Menu.Item>
                <hr />
                <Menu.Item>
                  <MyLink href='/' className='hover:text-blue-400'>
                    Management
                  </MyLink>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
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
      </div>
    </>
  );
}
