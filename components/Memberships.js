import Image from "next/image";
import Link from "next/link";
import { OfficeBuildingIcon, TagIcon } from "@heroicons/react/outline";

import DCCI from "../public/images/membership-logos/comp_dcci.png";
import BIAA from "../public/images/membership-logos/comp_biaa.png";
import BR from "../public/images/membership-logos/comp_br.png";
import BFA from "../public/images/membership-logos/comp_bfa.png";

export default function Memberships() {
  return (
    <section className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-xl mx-auto text-center'>
        <h2 className='text-3xl font-bold sm:text-4xl'>
          We are proud member of
        </h2>

        <p className='mt-4 text-lg text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Cards start here */}
      <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4'>
        {/* DCCI */}
        <Link href={"#!"}>
          <a className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>
            <div className=''>
              <Image
                className='rounded-md'
                src={DCCI}
                alt='DCCI'
                //   height={170}
                //   width={255}
                layout='responsive'
                //   objectFit='cover'
                quality='70'
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
              />
            </div>

            <div className='mt-2'>
              <dl>
                <div>
                  <dt className='sr-only'>Company Name</dt>

                  <dd className='font-bold text-gray-600'>
                    Dhaka Chamber of Commerce &amp; Industry
                  </dd>
                </div>
              </dl>
            </div>
          </a>
        </Link>
        {/* BIAA */}
        <Link href={"#!"}>
          <a className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>
            <div className=''>
              <Image
                className='rounded-md'
                src={BIAA}
                alt='norinco'
                //   height={170}
                //   width={255}
                layout='responsive'
                // objectFit='cover'
                quality='70'
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
              />
            </div>

            <div className='mt-2'>
              <dl>
                <div>
                  <dt className='sr-only'>Company Name</dt>

                  <dd className='font-bold text-gray-600'>
                    Bangladesh Indenting Agents Association
                  </dd>
                </div>
              </dl>
            </div>
          </a>
        </Link>
        {/* BR */}
        <Link href={"#!"}>
          <a className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>
            <div className=''>
              <Image
                className='rounded-md'
                src={BR}
                alt='norinco'
                //   height={170}
                //   width={255}
                //   layout='intrinsic'
                //   objectFit='cover'
                quality='70'
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
              />
            </div>

            {/* <img
                alt='123 Wallaby Avenue, Park Road'
                src='https://images.unsplash.com/photo-1554995207-c18c203602cb'
                className='object-cover w-full h-56 rounded-md'
              /> */}

            <div className='mt-2'>
              <dl>
                {/* <div>
                    <dt className='sr-only'>Establishment Date</dt>

                    <dd className='text-sm text-gray-500'>Energy company</dd>
                  </div> */}

                <div>
                  <dt className='sr-only'>Company Name</dt>

                  <dd className='font-bold text-gray-600'>
                    Bangladesh Railway
                  </dd>
                </div>
              </dl>
            </div>
          </a>
        </Link>
        {/* BFA */}
        <Link href={"#!"}>
          <a className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>
            <div className=''>
              <Image
                className='rounded-md'
                src={BFA}
                alt='norinco'
                //   height={170}
                //   width={255}
                //   layout='intrinsic'
                //   objectFit='cover'
                quality='70'
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
              />
            </div>

            <div className='mt-2'>
              <dl>
                {/* <div>
                    <dt className='sr-only'>Establishment Date</dt>

                    <dd className='text-sm text-gray-500'>Energy company</dd>
                  </div> */}

                <div>
                  <dt className='sr-only'>Company Name</dt>

                  <dd className='font-bold text-gray-600'>
                    Bangladesh Fertilizer Association
                  </dd>
                </div>
              </dl>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}