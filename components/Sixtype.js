import {
  ChevronDownIcon,
  BriefcaseIcon,
  RefreshIcon,
  CogIcon,
  OfficeBuildingIcon,
  SunIcon,
  TruckIcon,
  CubeTransparentIcon,
} from "@heroicons/react/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faShip,
  faBuilding,
  faSolarPanel,
  faSeedling,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
// import { faHandshake } from "@fortawesome/free-regular-svg-icons";

export default function Sixtype() {
  return (
    <>
      <section className='text-white bg-gray-900'>
        <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
          <div className='max-w-lg mx-auto text-center'>
            <h2 className='text-3xl font-bold sm:text-4xl'>
              The fields we are best at
            </h2>

            <p className='mt-4 text-base text-gray-300'>
              We are good at solving problems. Problems are everywhere. We solve
              them everyday. We are always looking for ways to improve ourselves
              and our surroundings.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3'>
            <a
              className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'
              href='#!'
            >
              {/* <BriefcaseIcon
                className='w-10 h-10 text-blue-400'
                aria-hidden='true'
              /> */}
              <FontAwesomeIcon
                icon={faHandshake}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />
              <h3 className='mt-4 text-xl font-bold text-white'>Consultancy</h3>

              <p className='mt-1 text-base text-gray-300'>
                Our team&apos;s vision and mission is to leverage physically in
                office research, indentation, global forecasting models and
                expertise to advise government and private companies in
                strategic issues related to the energy world.
              </p>
            </a>

            <a
              className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'
              href='#!'
            >
              <FontAwesomeIcon
                icon={faShip}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />
              {/* <RefreshIcon
                className='w-10 h-10 text-blue-400'
                aria-hidden='true'
              /> */}

              <h3 className='mt-4 text-xl font-bold text-white'>Supply</h3>

              <p className='mt-1 text-base text-gray-300'>
                We have been involved in the industry since 2010, we have grown
                our company from the ground up and now provide everything from
                materials for Power Plants, construction, agriculture and other
                suppliable goods.
              </p>
            </a>

            <a
              className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'
              href='#!'
            >
              <FontAwesomeIcon
                icon={faBuilding}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />

              <h3 className='mt-4 text-xl font-bold text-white'>
                Construction
              </h3>

              <p className='mt-1 text-base text-gray-300'>
                We build the future in every project and community. Construction
                safety management and quality controls, to an extensive network
                of locations, leading-edge equipments and a highly-trained
                workforce.
              </p>
            </a>

            <a
              className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'
              href='#!'
            >
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />
              <h3 className='mt-4 text-xl font-bold text-white'>Engineering</h3>
              <p className='mt-1 text-base text-gray-300'>
                We offer the services of our professional engineers in the field
                of project management in executing complex projects. Our
                Engineers have the experience and track record to drive high-
                priority project to successful completion
              </p>
            </a>

            <a
              className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'
              href='#!'
            >
              <FontAwesomeIcon
                icon={faSolarPanel}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />
              <h3 className='mt-4 text-xl font-bold text-white'>
                Solar Infrastructure
              </h3>
              <p className='mt-1 text-base text-gray-300'>
                Enhancing the country&apos;s power generation infrastructures to
                produce more renewable energy as we know Solar energy is widely
                available and unlimited. No air or water pollution is given off
                when solar panels are used for energy production
              </p>
            </a>

            <a
              className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'
              href='#!'
            >
              <FontAwesomeIcon
                icon={faSeedling}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />
              <h3 className='mt-4 text-xl font-bold text-white'>
                Fertilizer Distribution
              </h3>

              <p className='mt-1 text-base text-gray-300'>
                We import best quality fertilizer (in bulk) from other countries
                like India, China, Russia and America. As we know fertilizer is
                an important input for agriculture production, we’re also a
                proud member of Bangladesh Fertilizer Association
                {/* The fertilizer industry is one of the most important sectors in
                the agriculture sector of a country. Fertilizer helps in the
                growth of plants and crops. The bulk import of fertilizer is
                more beneficial for developing countries because it reduces the
                cost of production and provides better quality products. */}
              </p>
            </a>
          </div>

          <div className='mt-12 text-center'>
            <a
              className='inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent active:text-blue-400 focus:outline-none focus:ring'
              href='#!'
            >
              <span className='text-base font-medium'> Know us more </span>
              <svg
                className='w-5 h-5 ml-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
