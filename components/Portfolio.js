import Image from "next/image";
import Link from "next/link";

import APSCL_N from "../public/images/epc-images/comp_apscl_north.jpg";
import APSCL_S from "../public/images/epc-images/comp_apscl_south.jpg";
import NWPGCL_PAYRA from "../public/images/epc-images/comp_nwpgcl_payra.jpg";
import UNIT2 from "../public/images/epc-images/comp_nwpgcl_unit2.jpg";
import UNIT3 from "../public/images/epc-images/comp_nwpgcl_unit3.jpg";
import SUB33KV from "../public/images/epc-images/comp_many_rehab.jpg";
import SUBGIS from "../public/images/epc-images/comp_apscl_gis_ns.jpg";

export default function Portfolio() {
  return (
    <>
      <section className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl'>
            TURNKEY EPC Project
          </h2>

          <p className='mt-4 text-lg text-gray-500'>
            The company has been executing many notable projects in association
            with its foreign partners and is one of the most trusted names in
            the industry.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 lg:grid-cols-3'>
          {/* APSCL NORTH */}
          <Link href={"#!"}>
            <a className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>
              <div className=''>
                <Image
                  className='rounded-t-lg'
                  src={APSCL_N}
                  alt='cobra'
                  //   height={170}
                  //   width={255}
                  //   layout='intrinsic'
                  //   objectFit='cover'
                  quality='70'
                  // blurDataURL='data:...' // automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              </div>

              <div className='mt-2 px-4'>
                <dl>
                  <div>
                    <dt className='sr-only'>Client Name</dt>

                    <dd className='font-bold mb-2 text-gray-700'>
                      Ashuganj 450MW CCPP (North)
                    </dd>
                  </div>
                  <div>
                    <dt className='sr-only'>Project Details</dt>

                    <dd className='font-normal text-gray-500'>
                      EPC for the construction of 2 Combined Cycle Single Shaft
                      Power Plant (North), equipped with SCC 5-4000F/3000-1S
                      Siemens turbogroup package and CMI heat recovery steam
                      generator
                    </dd>
                  </div>
                </dl>

                <hr className='mt-3' />

                <dl className='my-3 text-sm'>
                  <ul className='text-gray-500'>
                    <li>
                      <strong>Associate Partner:</strong> TSK, Spain
                    </li>
                    <li>
                      <strong>Client:</strong> Ashuganj Power Station Company
                      Ltd.
                    </li>
                    <li>
                      <strong>Our Role:</strong> Local Agents, Consultants,
                      Sub-contractors
                    </li>
                  </ul>
                </dl>
              </div>
            </a>
          </Link>
          {/* APSCL SOUTH */}
          <Link href={"#!"}>
            <a className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>
              <div className=''>
                <Image
                  className='rounded-t-lg'
                  src={APSCL_S}
                  alt='cobra'
                  //   height={170}
                  //   width={255}
                  //   layout='intrinsic'
                  //   objectFit='cover'
                  quality='70'
                  // blurDataURL='data:...' // automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              </div>

              <div className='mt-2 px-4'>
                <dl>
                  <div>
                    <dt className='sr-only'>Client Name</dt>

                    <dd className='font-bold mb-2 text-gray-700'>
                      Ashuganj 450MW CCPP (South)
                    </dd>
                  </div>
                  <div>
                    <dt className='sr-only'>Project Details</dt>

                    <dd className='font-normal text-gray-500'>
                      EPC for the construction of 2 Combined Cycle Single Shaft
                      Power Plant (South), equipped with SCC 5-4000F/3000-1S
                      Siemens turbogroup package and CMI heat recovery steam
                      generator
                    </dd>
                  </div>
                </dl>

                <hr className='mt-3' />

                <dl className='my-3 text-sm'>
                  <ul className='text-gray-500'>
                    <li>
                      <strong>Associate Partner:</strong> TSK, Spain
                    </li>
                    <li>
                      <strong>Client:</strong> Ashuganj Power Station Company
                      Ltd.
                    </li>
                    <li>
                      <strong>Our Role:</strong> Local Agents, Consultants,
                      Sub-contractors
                    </li>
                  </ul>
                </dl>
              </div>
            </a>
          </Link>
          {/* NWPGCL PAYRA POWER PLANT */}
          <Link href={"#!"}>
            <a className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>
              <div className=''>
                <Image
                  className='rounded-t-lg'
                  src={NWPGCL_PAYRA}
                  alt='cobra'
                  //   height={170}
                  //   width={255}
                  //   layout='intrinsic'
                  //   objectFit='cover'
                  quality='70'
                  // blurDataURL='data:...' // automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              </div>

              <div className='mt-2 px-4'>
                <dl>
                  <div>
                    <dt className='sr-only'>Client Name</dt>

                    <dd className='font-bold mb-2 text-gray-700'>
                      Supercritical Coal Based Power Plant
                    </dd>
                  </div>
                  <div>
                    <dt className='sr-only'>Project Details</dt>

                    <dd className='font-normal text-gray-500'>
                      Consultancy services for the construction of 660x2 MW
                      super critical coal based power plant for North West Power
                      Generation Company Limited under IPP in Payra, Bangladesh.
                    </dd>
                  </div>
                </dl>

                <hr className='mt-3' />

                <dl className='my-3 text-sm'>
                  <ul className='text-gray-500'>
                    <li>
                      <strong>Associate Partner:</strong> CMC, NEPC, China
                    </li>
                    <li>
                      <strong>Client:</strong> NWPGCL / BCPCL
                    </li>
                    <li>
                      <strong>Our Role:</strong> Sub-contractors, Consultants
                    </li>
                  </ul>
                </dl>
              </div>
            </a>
          </Link>
          {/* SIRAJGANJ 225MW CCPP UNIT2 */}
          <Link href={"#!"}>
            <a className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>
              <div className=''>
                <Image
                  className='rounded-t-lg'
                  src={UNIT2}
                  alt='cobra'
                  //   height={170}
                  //   width={255}
                  //   layout='intrinsic'
                  //   objectFit='cover'
                  quality='70'
                  // blurDataURL='data:...' // automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              </div>

              <div className='mt-2 px-4'>
                <dl>
                  <div>
                    <dt className='sr-only'>Client Name</dt>

                    <dd className='font-bold mb-2 text-gray-700'>
                      Sirajganj 225 MW CCPP (Unit-2)
                    </dd>
                  </div>
                  <div>
                    <dt className='sr-only'>Project Details</dt>

                    <dd className='font-normal text-gray-500'>
                      Sirajganj 225 MW Combined Cycle Power Plant Unit 2
                    </dd>
                  </div>
                </dl>

                <hr className='mt-3' />

                <dl className='my-3 text-sm'>
                  <ul className='text-gray-500'>
                    <li>
                      <strong>Contract Date:</strong> 20 August, 2014
                    </li>
                    <li>
                      <strong>Commercial Operation Date:</strong> 05 Feb, 2018
                    </li>
                    <li>
                      <strong>Associate Partner:</strong> CMC, China
                    </li>
                    <li>
                      <strong>Client:</strong> NWPGCL
                    </li>
                    <li>
                      <strong>Our Role:</strong> Local Agents
                    </li>
                  </ul>
                </dl>
              </div>
            </a>
          </Link>
          {/* SIRAJGANJ 225MW CCPP UNIT3 */}
          <Link href={"#!"}>
            <a className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>
              <div className=''>
                <Image
                  className='rounded-t-lg'
                  src={UNIT3}
                  alt='cobra'
                  //   height={170}
                  //   width={255}
                  //   layout='intrinsic'
                  //   objectFit='cover'
                  quality='70'
                  // blurDataURL='data:...' // automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              </div>

              <div className='mt-2 px-4'>
                <dl>
                  <div>
                    <dt className='sr-only'>Client Name</dt>

                    <dd className='font-bold mb-2 text-gray-700'>
                      Sirajganj 225 MW CCPP (Unit-2)
                    </dd>
                  </div>
                  <div>
                    <dt className='sr-only'>Project Details</dt>

                    <dd className='font-normal text-gray-500'>
                      Sirajganj 225 MW Combined Cycle Power Plant Unit 2
                    </dd>
                  </div>
                </dl>

                <hr className='mt-3' />

                <dl className='my-3 text-sm'>
                  <ul className='text-gray-500'>
                    <li>
                      <strong>Contract Date:</strong> 12 July, 2015
                    </li>
                    <li>
                      <strong>Commercial Operation Date:</strong> Simple Cycle:
                      09 Aug 2018, Combined Cycle: 20 Jan 2019
                    </li>
                    <li>
                      <strong>Associate Partner:</strong> CMC, China
                    </li>
                    <li>
                      <strong>Client:</strong> NWPGCL
                    </li>
                    <li>
                      <strong>Our Role:</strong> Local Agents
                    </li>
                  </ul>
                </dl>
              </div>
            </a>
          </Link>
          {/* 33kV SUB-STATION REHABILITATION */}
          <Link href={"#!"}>
            <a className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>
              <div className=''>
                <Image
                  className='rounded-t-lg'
                  src={SUB33KV}
                  alt='cobra'
                  //   height={170}
                  //   width={255}
                  //   layout='intrinsic'
                  //   objectFit='cover'
                  quality='70'
                  // blurDataURL='data:...' // automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              </div>

              <div className='mt-2 px-4'>
                <dl>
                  <div>
                    <dt className='sr-only'>Client Name</dt>

                    <dd className='font-bold mb-2 text-gray-700'>
                      33kV Sub-station Rehabilitation
                    </dd>
                  </div>
                  <div>
                    <dt className='sr-only'>Project Details</dt>

                    <dd className='font-normal text-gray-500'>
                      33kV Sub-station Rehabilitation executed jointly by Tamco
                      Malaysia and Energy Solution under West Zone Power
                      Distribution Company Ltd.(WZPDCL), Khulna , Dhaka Power
                      Distribution Company (DPDC), Dhaka Electric Supply Company
                      Limited (DESCO).
                    </dd>
                  </div>
                </dl>

                <hr className='mt-3' />

                <dl className='my-3 text-sm'>
                  <ul className='text-gray-500'>
                    <li>
                      <strong>Associate Partner:</strong> TAMCO, Malaysia
                    </li>
                    <li>
                      <strong>Client:</strong> WZPDCL, DPDC, DESCO
                    </li>
                    <li>
                      <strong>Our Role:</strong> Importer, Supplier,
                      Installation, Engineering
                    </li>
                  </ul>
                </dl>
              </div>
            </a>
          </Link>
          {/* GIS SUB-STATION */}
          <Link href={"#!"}>
            <a className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>
              <div className=''>
                <Image
                  className='rounded-t-lg'
                  src={SUBGIS}
                  alt='cobra'
                  //   height={170}
                  //   width={255}
                  //   layout='intrinsic'
                  //   objectFit='cover'
                  quality='70'
                  // blurDataURL='data:...' // automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              </div>

              <div className='mt-2 px-4'>
                <dl>
                  <div>
                    <dt className='sr-only'>Client Name</dt>

                    <dd className='font-bold mb-2 text-gray-700'>
                      Gas Insulated Sub-station
                    </dd>
                  </div>
                  {/* <div>
                    <dt className='sr-only'>Project Details</dt>

                    <dd className='font-normal text-gray-500'>
                      33kV Sub-station Rehabilitation executed jointly by Tamco
                      Malaysia and Energy Solution under West Zone Power
                      Distribution Company Ltd.(WZPDCL), Khulna , Dhaka Power
                      Distribution Company (DPDC), Dhaka Electric Supply Company
                      Limited (DESCO).
                    </dd>
                  </div> */}
                </dl>

                <hr className='mt-3' />

                <dl className='my-3 text-sm'>
                  <ul className='text-gray-500'>
                    <li>
                      <strong>Capacity:</strong> 2x 400kv GIS by Siemens
                    </li>
                    <li>
                      <strong>Client:</strong> APSCL (North &amp; South)
                    </li>
                    <li>
                      <strong>Task:</strong> EPC, Supply, Installation,
                      Commissioning by TSK, Spain
                    </li>
                    <li>
                      <strong>Our Role:</strong> Consultancy, Logistics
                    </li>
                  </ul>
                </dl>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
