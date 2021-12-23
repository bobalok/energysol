/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Navitems from './Navitems';
function Navbar() {
  return (
    <>
      <nav className="sticky z-50 top-0 shadow-md p-4 bg-white">
        <div className="max-w-8xl mx-auto md:px-14">
          <div className="flex justify-between items-center">
            {/* logo */}

            <img
              className="cursor-pointer h-10 md:h-14"
              src="/energysolution.svg"
              alt="energy solution logo"
            />

            <Navitems />
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
      </nav>
    </>
  );
}

export default Navbar;
