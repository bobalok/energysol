import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faShip,
  faBuilding,
  faSolarPanel,
  faSeedling,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
              {/* ESEL is a company that specializes in engineering, procurement,
              and construction services. The company provides the public with
              construction consulting and engineering design for buildings,
              roads, bridges and other infrastructure projects. ESEL’s clients
              include government agencies as well as private sector companies. */}
              We are good at solving problems. Problems are everywhere. We solve
              them everyday. We are always looking for ways to improve ourselves
              and our surroundings.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 select-none'>
            {/* Consultancy */}
            <div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              <FontAwesomeIcon
                icon={faHandshake}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />
              <h3 className='mt-4 text-xl font-bold text-white'>Consultancy</h3>

              <p className='mt-1 text-base text-gray-300'>
                We have a team of experienced and skilled people who are helping
                companies to reach their goals by providing them with best
                solution they need. We provide consultancy services and These
                include indentation, market-research, global &amp; local
                forecasting models and more
                {/* Our team&apos;s vision and mission is to leverage physically
                  in office research, indentation, global forecasting models and
                  expertise to advise government and private companies in
                  strategic issues related to the energy world. */}
              </p>
            </div>
            {/* Supply */}
            <div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              <FontAwesomeIcon
                icon={faShip}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />

              <h3 className='mt-4 text-xl font-bold text-white'>Supply</h3>

              <p className='mt-1 text-base text-gray-300'>
                Providing supply service from a wide range of suppliable goods
                that have no specific category. These include specialty
                chemicals, vehicles, machinery, medical equipment, heavy
                equipment, materials for power plants, agriculture,
                construction, and much more
                {/* We have been involved in the industry since 2010, we have
                  grown our company from the ground up and now provide
                  everything from materials for power plants, construction,
                  agriculture and other suppliable goods. */}
              </p>
            </div>

            {/* Construction */}
            <div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              <FontAwesomeIcon
                icon={faBuilding}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />

              <h3 className='mt-4 text-xl font-bold text-white'>
                Construction
              </h3>

              <p className='mt-1 text-base text-gray-300'>
                When it comes to construction, it should not only be done fast
                but also done efficiently. We at “Energy Solution” are here to
                assist you in achieving both goals. Our team consists of highly
                skilled professionals who have years of experience in their
                respective fields
                {/* We build the future in every project and community.
                  Construction safety management and quality controls, to an
                  extensive network of locations, leading-edge equipments and a
                  highly-trained workforce. */}
              </p>
            </div>

            {/* Engineering */}
            <div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />
              <h3 className='mt-4 text-xl font-bold text-white'>Engineering</h3>
              <p className='mt-1 text-base text-gray-300'>
                The team at Engineering is made up of professionals with a
                favourable national reputation for skill and experience in the
                design, construction, reconstruction, maintenance and repair of
                any commercial projects
                {/* We offer the services of our professional engineers in the
                  field of project management in executing complex projects. Our
                  Engineers have the experience and track record to drive high-
                  priority project to successful completion */}
              </p>
            </div>

            {/* Solar Infrastructure */}
            <div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              <FontAwesomeIcon
                icon={faSolarPanel}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />
              <h3 className='mt-4 text-xl font-bold text-white'>
                Solar Infrastructure
              </h3>
              <p className='mt-1 text-base text-gray-300'>
                Creating a better future for ourselves and our children by
                bringing solar energy to the masses. Solar infrastructures are
                vital to reduce our reliance on fossil fuels, and empower the
                new renewable-energy economy
                {/* Enhancing the country&apos;s power generation infrastructures
                  to produce more renewable energy as we know Solar energy is
                  widely available and unlimited. No air or water pollution is
                  given off when solar panels are used for energy production */}
              </p>
            </div>

            {/* Fertilizer Distribution */}
            <div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              <FontAwesomeIcon
                icon={faSeedling}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              />
              <h3 className='mt-4 text-xl font-bold text-white'>
                Fertilizer Distribution
              </h3>

              <p className='mt-1 text-base text-gray-300'>
                We are the largest importer of fertilizer in Bangladesh. We have
                developed a network for importing fertilizer through sea and air
                routes, even using container ships when necessary
                {/* We import best quality fertilizer (in bulk) from around the
                  world. As we know fertilizer is an important input for
                  agriculture production, we’re also a proud member of
                  Bangladesh Fertilizer Association */}
              </p>
            </div>
          </div>

          <div className='mt-12 text-center'>
            <Link href={"/contact"}>
              <a className='inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent active:text-blue-400 focus:outline-none focus:ring'>
                <span className='text-base font-medium'> Contact us </span>
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
