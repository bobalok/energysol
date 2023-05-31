import Image from "next/image";
import Link from "next/link";
// import { OfficeBuildingIcon, TagIcon } from "@heroicons/react/outline";

import DCCI from "../public/images/membership-logos/comp_dcci.png";
import BIAA from "../public/images/membership-logos/comp_biaa.png";
// import BR from "../public/images/membership-logos/comp_br.png";
import BFA from "../public/images/membership-logos/comp_bfa.png";
import BFEIA from "../public/images/membership-logos/comp_bfeia.jpg";

export default function Memberships() {
  return (
    <section className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-xl mx-auto text-center'>
        <h2 className='text-3xl font-bold sm:text-4xl'>
          We are proud member of
        </h2>

        {/* <p className='mt-4 text-lg text-gray-500'>
          It’s not easy to make it this far, but it’s worth it. Each year, our
          organization becomes more and more sustainable. Our diverse
          sustainability committee does a great job of creating a plan for
          promoting environmental stewardship for our company and passionate
          community members. The sustainability challenges we face will never be
          easy to overcome, but we are unstoppable.
        </p> */}
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
                layout='responsive'
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
        {/* BFEIA */}
        <Link href={"#!"}>
          <a className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>
            <div className=''>
              <Image
                className='rounded-md'
                src={BFEIA}
                alt='norinco'
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
                {/* <div>
                    <dt className='sr-only'>Establishment Date</dt>

                    <dd className='text-sm text-gray-500'>Energy company</dd>
                  </div> */}

                <div>
                  <dt className='sr-only'>Company Name</dt>

                  <dd className='font-bold text-gray-600'>
                    Bangladesh Fish Exporters & Importers Association
                  </dd>
                </div>
              </dl>
            </div>
          </a>
        </Link>
      </div>
      <div className='mt-12 p-8 rounded-xl border border-gray-200'>
        <p className='text-lg text-gray-500 select-none sm:text-justify'>
          Each year, <strong> Energy Solution Engineering Limited</strong>{" "}
          becomes more and more sustainable. At our company, we are committed to
          maintaining the highest standards of honesty and integrity in all of
          our business dealings. That&rsquo;s why we have acquired memberships
          from respected agencies, giving our clients and partners the
          confidence and peace of mind they need to trust us with their
          projects.
        </p>
      </div>
    </section>
  );
}
