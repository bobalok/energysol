import Image from "next/image";
import Link from "next/link";
// import mdPhoto from "../public/images/person-images/md-portrait.webp";
import handshake from "../public/images/handshakes.jpg";
import { OfficeBuildingIcon, TagIcon } from "@heroicons/react/outline";
import sinamm from "../public/images/partners-logos/comp_sinamm_alt.png";
import sar from "../public/images/partners-logos/comp_sar.png";
import esgtl from "../public/images/partners-logos/comp_esgtl.png";
import Contact from "./Contact";

export default function opportunities() {
  return (
    <section className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-xl mx-auto text-center'>
        <h2 className='text-3xl font-bold sm:text-4xl'>Sister Concern</h2>
        <p className='mt-4 text-gray-500 sm:text-xl sm:max-w-xl mx-auto text-center'>
          Always there for each other, no matter what.
        </p>
        {/* <p className='text-lg text-gray-500 select-none sm:text-justify mt-4'>
          SINAMM ENGINEERING LIMITED named as SINAMM was conceived and formed in
          the year 2004 by a team of qualified Engineers and other professionals
          possessing long-standing experience in various fields of
          Constructional activities with a vision and mission and to play a
          significant role in development and construction sector in near
          future.
        </p> */}
      </div>

      {/* <div className='mt-12 p-8 rounded-xl border border-gray-200'>
        <p className='text-lg text-gray-500 select-none sm:text-justify'>
          It’s not easy to make it this far, but it’s worth it. Each year, our
          organization becomes more and more sustainable. Our diverse
          sustainability committee does a great job of creating a plan for
          promoting environmental stewardship for our company and passionate
          community members. The sustainability challenges we face will never be
          easy to overcome, but we are unstoppable.
        </p>
      </div> */}

      <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 pb-24'>
        {/* sar */}
        <Link href={"#!"}>
          <a className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>
            <div className=''>
              <Image
                className='rounded-md'
                src={sar}
                alt='sar group'
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

                  <dd className='font-medium'>SAR GROUP</dd>
                </div>
              </dl>

              <dl className='flex items-center mt-6 text-xs space-x-8'>
                <div className='sm:inline-flex sm:items-center sm:shrink-0'>
                  {/* <svg
                      className='w-4 h-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
                      />
                    </svg> */}
                  <OfficeBuildingIcon className='w-4 h-4 text-gray-500' />

                  <div className='sm:ml-3 mt-1.5 sm:mt-0'>
                    <dt className='text-gray-500'>Headquarters</dt>

                    <dd className='font-medium'>UAE</dd>
                  </div>
                </div>

                <div className='sm:inline-flex sm:items-center sm:shrink-0'>
                  {/* <svg
                      className='w-4 h-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                      />
                    </svg> */}
                  <TagIcon className='w-4 h-4 text-gray-500' />

                  <div className='sm:ml-3 mt-1.5 sm:mt-0'>
                    <dt className='text-gray-500'>Established </dt>

                    <dd className='font-medium'>2022</dd>
                  </div>
                </div>

                {/* <div className='sm:inline-flex sm:items-center sm:shrink-0'>
                    <svg
                      className='w-4 h-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      />
                    </svg>

                    <div className='sm:ml-3 mt-1.5 sm:mt-0'>
                      <dt className='text-gray-500'>Bedroom</dt>

                      <dd className='font-medium'>4 rooms</dd>
                    </div>
                  </div> */}
              </dl>
            </div>
          </a>
        </Link>
        <Link href={"#!"}>
          <a className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>
            <div className=''>
              <Image
                className='rounded-md'
                src={sinamm}
                alt='sinamm engineering'
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

                  <dd className='font-medium'>Sinamm Engineering Ltd.</dd>
                </div>
              </dl>

              <dl className='flex items-center mt-6 text-xs space-x-8'>
                <div className='sm:inline-flex sm:items-center sm:shrink-0'>
                  {/* <svg
                      className='w-4 h-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
                      />
                    </svg> */}
                  <OfficeBuildingIcon className='w-4 h-4 text-gray-500' />

                  <div className='sm:ml-3 mt-1.5 sm:mt-0'>
                    <dt className='text-gray-500'>Headquarters</dt>

                    <dd className='font-medium'>Bangladesh</dd>
                  </div>
                </div>

                <div className='sm:inline-flex sm:items-center sm:shrink-0'>
                  {/* <svg
                      className='w-4 h-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                      />
                    </svg> */}
                  <TagIcon className='w-4 h-4 text-gray-500' />

                  <div className='sm:ml-3 mt-1.5 sm:mt-0'>
                    <dt className='text-gray-500'>Established </dt>

                    <dd className='font-medium'>2004 </dd>
                  </div>
                </div>

                {/* <div className='sm:inline-flex sm:items-center sm:shrink-0'>
                    <svg
                      className='w-4 h-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      />
                    </svg>

                    <div className='sm:ml-3 mt-1.5 sm:mt-0'>
                      <dt className='text-gray-500'>Bedroom</dt>

                      <dd className='font-medium'>4 rooms</dd>
                    </div>
                  </div> */}
              </dl>
            </div>
          </a>
        </Link>
        <Link href={"#!"}>
          <a className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>
            <div className=''>
              <Image
                className='rounded-md items-center justify-center'
                src={esgtl}
                alt='sinamm engineering'
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

                  <dd className='font-medium'>
                    Energy Solutions General Trading L.L.C
                  </dd>
                </div>
              </dl>

              <dl className='flex items-center mt-6 text-xs space-x-8'>
                <div className='sm:inline-flex sm:items-center sm:shrink-0'>
                  {/* <svg
                      className='w-4 h-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
                      />
                    </svg> */}
                  <OfficeBuildingIcon className='w-4 h-4 text-gray-500' />

                  <div className='sm:ml-3 mt-1.5 sm:mt-0'>
                    <dt className='text-gray-500'>Headquarters</dt>

                    <dd className='font-medium'>UAE</dd>
                  </div>
                </div>

                <div className='sm:inline-flex sm:items-center sm:shrink-0'>
                  {/* <svg
                      className='w-4 h-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                      />
                    </svg> */}
                  <TagIcon className='w-4 h-4 text-gray-500' />

                  <div className='sm:ml-3 mt-1.5 sm:mt-0'>
                    <dt className='text-gray-500'>Established </dt>

                    <dd className='font-medium'>2012</dd>
                  </div>
                </div>

                {/* <div className='sm:inline-flex sm:items-center sm:shrink-0'>
                    <svg
                      className='w-4 h-4 text-indigo-700'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      />
                    </svg>

                    <div className='sm:ml-3 mt-1.5 sm:mt-0'>
                      <dt className='text-gray-500'>Bedroom</dt>

                      <dd className='font-medium'>4 rooms</dd>
                    </div>
                  </div> */}
              </dl>
            </div>
          </a>
        </Link>
      </div>

      {/* Arif Cards starts here */}
      {/* <div className='max-w-5xl px-4 py-12 mx-auto'>
        <section className='p-8 bg-gray-100 rounded-lg md:drop-shadow-xl md:hover:drop-shadow-2xl transition duration-200'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
            <div className='relative'>
              <div className='aspect-w-1 aspect-h-1'>
                <Image
                  className=''
                  src={handshake}
                  alt='Shaking Hands Photo'
                  layout='fill'
                  objectFit='contain'
                  quality='70'
                  // blurDataURL='data:...' // automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              </div>

              <div className='absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4'>
                <span className='inline-block w-12 h-10 bg-black rounded-lg'></span>
              </div>
            </div>

            <blockquote className='sm:col-span-2'>
              <h1 className='text-sm text-gray-500 uppercase underline font-bold'>
                Sinamm Engineering Ltd:
              </h1>
              <p className='text-xl font-medium sm:text-2xl sm:text-justify'>
                &quot;Our mission is to work hand in hand with our clients to
                deliver engineering, construction, and related services that
                make Bangladesh a better place for the present and future
                generations. Trust us for innovative solutions that drive growth
                and success.&quot;
              </p>

              <cite className='inline-flex items-center mt-8 not-italic'>
                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                <p className='text-sm text-gray-500 uppercase sm:ml-3'>
                  <strong>Arif I.Z Rahman</strong>, Director | SINAMM
                  Engineering Limited
                </p>
              </cite>

              <div className='flex mt-8 space-x-2 text-gray-500 sm:mt-8'>
                <a
                  className='hover:text-blue-600 flex'
                  href='https://www.linkedin.com/in/arif-i-z-rahman-71774570/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> Linkedin </span>

                  <svg
                    className='w-6 h-6 text-sky-600 mr-1'
                    fill='currentColor'
                    viewBox='0 0 64 64'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M25,44h-5V26h5V44z M22.485,24h-0.028C20.965,24,20,22.888,20,21.499C20,20.08,20.995,19,22.514,19c1.521,0,2.458,1.08,2.486,2.499 C25,22.887,24.035,24,22.485,24z M44,44h-5v-9c0-3-1.446-4-3-4c-1.445,0-3,1-3,4v9h-5V26h5v3c0.343-0.981,1.984-3,5-3c4,0,6,3,6,8 V44z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </blockquote>
          </div>
        </section>
      </div> */}

      <Contact />
    </section>
  );
}
