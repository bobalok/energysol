import Image from "next/legacy/image";
import Link from "next/link";

import UCABLE from "../public/images/supply-images/comp_xlpe_desco.jpg";
import HMCRANE from "../public/images/supply-images/comp_xmcg_bapex.png";
import FORKL from "../public/images/supply-images/comp_tcm_bapex.jpg";
import HMCRANE2 from "../public/images/supply-images/comp_powerplus_bapex.jpg";
import TSWITCHGEAR from "../public/images/supply-images/comp_tamco_many.jpg";
import TVINTERRUPTER from "../public/images/supply-images/comp_tvi_wzpdcl.jpg";
import STONE from "../public/images/supply-images/comp_stone_many.jpg";
import FERTILIZER from "../public/images/supply-images/comp_fertilizer.png";

export default function Portfolio() {
  return <>
    <section className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='text-3xl font-bold sm:text-4xl'>Supply Works</h2>

        <p className='mt-4 text-lg text-gray-500'>
          Import | Export | Distribution
        </p>
      </div>
      <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3'>
        {/* UCABLE */}
        <Link
          href={"#!"}
          className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-t-lg'
              src={UCABLE}
              alt='XLPE 33/11 kv PVC Copper Cable | DESCO'
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
                <dt className='sr-only'>Supply Type</dt>

                <dd className='font-bold mb-2 text-gray-700'>
                  XLPE 33/11 kv PVC Copper Cable
                </dd>
              </div>
              {/* <div>
                <dt className='sr-only'>Project Details</dt>

                <dd className='font-normal text-gray-500'>
                  EPC for the construction of 2 Combined Cycle Single Shaft
                  Power Plant (North), equipped with SCC 5-4000F/3000-1S
                  Siemens turbogroup package and CMI heat recovery steam
                  generator
                </dd>
              </div> */}
            </dl>

            <hr className='mt-3' />

            <dl className='my-3 text-sm'>
              <ul className='text-gray-500'>
                <li>
                  <strong>Manufacturer:</strong> TBEA Deyang Cable Co,Ltd.
                </li>
                <li>
                  <strong>Country of Origin:</strong>China
                </li>
                <li>
                  <strong>Client:</strong> DESCO
                </li>
                <li>
                  <strong>Task:</strong> Supply Only
                </li>
                <li>
                  <strong>Our Role:</strong> Local Agents
                </li>
              </ul>
            </dl>
          </div>

        </Link>
        {/* HMCRANE */}
        <Link
          href={"#!"}
          className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-t-lg'
              src={HMCRANE}
              alt='25-30TON Hydraulic Mounted Crane | BAPEX'
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
                <dt className='sr-only'>Supply Type</dt>

                <dd className='font-bold mb-2 text-gray-700'>
                  Hydraulic Mounted Crane
                </dd>
              </div>
              {/* <div>
                <dt className='sr-only'>Project Details</dt>

                <dd className='font-normal text-gray-500'>
                  EPC for the construction of 2 Combined Cycle Single Shaft
                  Power Plant (South), equipped with SCC 5-4000F/3000-1S
                  Siemens turbogroup package and CMI heat recovery steam
                  generator
                </dd>
              </div> */}
            </dl>

            <hr className='mt-3' />

            <dl className='my-3 text-sm'>
              <ul className='text-gray-500'>
                <li>
                  <strong>Manufacturer:</strong> XCMG
                </li>
                <li>
                  <strong>Country of Origin:</strong> China
                </li>
                <li>
                  <strong>Loading Capacity:</strong> 25-30ton
                </li>
                <li>
                  <strong>Client:</strong> BAPEX
                </li>
                <li>
                  <strong>Task:</strong> Supply with warranty
                </li>
                <li>
                  <strong>Supplied by:</strong> BMTF with Energy Solution
                </li>
                <li>
                  <strong>Our Role:</strong> Supply and 2 yrs O&amp;M
                </li>
              </ul>
            </dl>
          </div>

        </Link>
        {/* FORKL */}
        <Link
          href={"#!"}
          className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-t-lg'
              src={FORKL}
              alt='Diesel Forklift'
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
                <dt className='sr-only'>Supply Type</dt>

                <dd className='font-bold mb-2 text-gray-700'>
                  Forklift (Diesel)
                </dd>
              </div>
              {/* <div>
                <dt className='sr-only'>Project Details</dt>

                <dd className='font-normal text-gray-500'>
                  Consultancy services for the construction of 660x2 MW
                  super critical coal based power plant for North West Power
                  Generation Company Limited under IPP in Payra, Bangladesh.
                </dd>
              </div> */}
            </dl>

            <hr className='mt-3' />

            <dl className='my-3 text-sm'>
              <ul className='text-gray-500'>
                <li>
                  <strong>Manufacturer:</strong> TCM
                </li>
                <li>
                  <strong>Country of Origin:</strong> Japan
                </li>
                <li>
                  <strong>Loading Capacity:</strong> 2ton - 10ton
                </li>
                <li>
                  <strong>Client:</strong> BAPEX
                </li>
                <li>
                  <strong>Task:</strong> Supply
                </li>
                <li>
                  <strong>Supplied by:</strong> BMTF with Energy Solution
                </li>
                <li>
                  <strong>Our Role:</strong> Supply and 2 yrs O&amp;M
                </li>
              </ul>
            </dl>
          </div>

        </Link>
        {/* HMCRANE2 */}
        <Link
          href={"#!"}
          className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-t-lg'
              src={HMCRANE2}
              alt='ENERGY SOLUTION | 25Ton Hydraulic Mounted Crane | BAPEX'
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
                <dt className='sr-only'>Supply Type</dt>

                <dd className='font-bold mb-2 text-gray-700'>
                  Hydraulic Mounted Crane
                </dd>
              </div>
              {/* <div>
                <dt className='sr-only'>Project Details</dt>

                <dd className='font-normal text-gray-500'>
                  Sirajganj 225 MW Combined Cycle Power Plant Unit 2
                </dd>
              </div> */}
            </dl>

            <hr className='mt-3' />

            <dl className='my-3 text-sm'>
              <ul className='text-gray-500'>
                <li>
                  <strong>Manufacturer:</strong> PowerPlus
                </li>
                <li>
                  <strong>Country of Origin:</strong> USA
                </li>
                <li>
                  <strong>Loading Capacity:</strong> 25ton
                </li>
                <li>
                  <strong>Client:</strong> BAPEX
                </li>
                <li>
                  <strong>Task:</strong> Supply with warranty
                </li>
                <li>
                  <strong>Supplied by:</strong> BMTF with Energy Solution
                </li>
                <li>
                  <strong>Our Role:</strong> Supply and 2 yrs O&amp;M
                </li>
              </ul>
            </dl>
          </div>

        </Link>
        {/* TSWITCHGEAR */}
        <Link
          href={"#!"}
          className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-t-lg'
              src={TSWITCHGEAR}
              alt='ENERGY SOLUTION |TAMCO Switch Gear Pannels | WZPDCL, DESCO, DPDC'
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
                <dt className='sr-only'>Supply Type</dt>

                <dd className='font-bold mb-2 text-gray-700'>
                  Switch Gear Pannels
                </dd>
              </div>
              {/* <div>
                <dt className='sr-only'>Project Details</dt>

                <dd className='font-normal text-gray-500'>
                  Sirajganj 225 MW Combined Cycle Power Plant Unit 2
                </dd>
              </div> */}
            </dl>

            <hr className='mt-3' />

            <dl className='my-3 text-sm'>
              <ul className='text-gray-500'>
                <li>
                  <strong>Manufacturer:</strong> TAMCO
                </li>
                <li>
                  <strong>Country of Origin:</strong> Malaysia
                </li>
                <li>
                  <strong>Client:</strong> WZPDCL, DESCO, DPDC
                </li>
                <li>
                  <strong>Task:</strong> EPC, Supply, Installation,
                  Commissioning
                </li>
                <li>
                  <strong>Our Role:</strong> Supply, Installation and
                  O&amp;M
                </li>
              </ul>
            </dl>
          </div>

        </Link>
        {/* TVINTERRUPTER */}
        <Link
          href={"#!"}
          className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-t-lg'
              src={TVINTERRUPTER}
              alt='ENERGY SOLUTION | Vaccum Interrupter | WZPDCL'
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
                <dt className='sr-only'>Supply Type</dt>

                <dd className='font-bold mb-2 text-gray-700'>
                  Vaccum Interrupter
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
                  <strong>Manufacturer:</strong> L&amp;T Eaton
                </li>
                <li>
                  <strong>Capacity:</strong> 12kV 630A~1250A
                </li>
                <li>
                  <strong>Country of Origin:</strong> India
                </li>
                <li>
                  <strong>Client:</strong> WZPDCL
                </li>
                <li>
                  <strong>Task:</strong> EPC, Supply, Installation,
                  Commissioning
                </li>
                <li>
                  <strong>Our Role:</strong> Supply, Installation and
                  O&amp;M
                </li>
              </ul>
            </dl>
          </div>

        </Link>
        {/* STONE */}
        <Link
          href={"#!"}
          className='block rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-t-lg'
              src={STONE}
              alt='ENERGY SOLUTION | Stone Chips &amp; Boulders'
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
                <dt className='sr-only'>Supply Type</dt>

                <dd className='font-bold mb-2 text-gray-700'>
                  Supply of Stone Chips &amp; Boulders
                </dd>
              </div>
              <div>
                <dt className='sr-only'>Project Details</dt>

                <dd className='font-normal text-gray-500'>
                  We Supply various sizes of stone chips ranging from 10mm
                  to 16mm, 16mm to 20mm, 20mm to 26mm, and boulders ranging
                  from 10kg to 100kg, 100kg to 800kg. We are directly
                  importing from Fujairah, UAE, Oman, Thailand, India and
                  China
                </dd>
              </div>
            </dl>

            <hr className='mt-3' />

            <dl className='my-3 text-base'>
              <h1 className='font-bold'>Our clients are:</h1>
              <ul className='text-gray-500 list-inside list-disc'>
                <li>Northeast No.1 Electric Power Construction Co. Ltd</li>
                <li>Ruppur Nuclear Power Plant</li>
                <li>Sinohydro Corporation Ltd</li>
                <li>Chongqing International Construction Corporation</li>
              </ul>
            </dl>
          </div>

        </Link>
        {/* FERTILIZER */}
        <Link
          href={"#!"}
          className='block lg:col-span-2 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-100 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-t-lg'
              src={FERTILIZER}
              alt='ENERGY SOLUTION | Fertilizer'
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
            <dl className='my-3 text-base'>
              <h1 className='font-bold'>Fertilizer type:</h1>
              <p className='text-gray-500'>UREA | TSP | MOP | DAP</p>
              {/* <ul className='text-gray-500 list-inside list-disc'>
                <li>UREA</li>
                <li>TSP</li>
                <li>MOP</li>
                <li>DAP</li>
              </ul> */}
            </dl>

            <hr className='mt-3' />

            <dl className='my-3 text-base'>
              <h1 className='font-bold'>Our clients are:</h1>
              <ul className='text-gray-500 list-inside list-disc'>
                <li>Bangladesh Chemical Industries Corporation</li>
                <li>Bangladesh Agricultural Development Corporation</li>
                <li>Private Sector</li>
              </ul>
            </dl>
          </div>

        </Link>
      </div>
    </section>
  </>;
}
