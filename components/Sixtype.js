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
              Partnering with us will benefit your business in numerous ways,
              including increased efficiency, higher customer satisfaction, and
              improved profitability. Let&rsquo;s grow together!
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
                We excel at consultancy. Our team of experts offers customized
                solutions to complex business problems. We empower our clients
                with data-driven insights and proven strategies, enabling them
                to make informed decisions and achieve long-term success
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
                We specialize in supplying a diverse range of goods including
                heavy machinery, vehicles, medical equipment, specialty
                chemicals, and power plant materials. Count on us for reliable,
                efficient, and cost-effective procurement services
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
                Our construction services are designed to meet your needs with
                exceptional quality, on-time delivery, and within budget. With a
                strong focus on safety and sustainability, our expert team
                ensures your project is a success from start to finish
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
                Delivering a wide range of services to meet the needs of our
                clients. From design and planning to implementation and
                management, we provide innovative and efficient solutions that
                drive success. Trust us for all your engineering needs.
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
                We&rsquo;re committed to building a greener future through solar
                infrastructure. Our team of experts delivers turnkey solutions
                that drive sustainability, energy efficiency, and cost savings.
                Join us in creating a better tomorrow by choosing our solar
                infrastructure services
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
                Fertilizer in bulk
              </h3>

              <p className='mt-1 text-base text-gray-300'>
                We import different types of fertilizers in bulk, catering to
                distributors, corporations, and private sectors. Our extensive
                network of suppliers and logistics management ensures
                cost-effective and efficient procurement and delivery. Partner
                with us for reliable and timely supply of quality fertilizers
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
