import Image from "next/image";
import Link from "next/link";
import { OfficeBuildingIcon, TagIcon } from "@heroicons/react/outline";

import acciona from "../public/images/partners-logos/comp_acciona.png";

import tbea from "../public/images/partners-logos/comp_tbea.png";
import norinco from "../public/images/partners-logos/comp_norinco.png";
import tedagua from "../public/images/partners-logos/comp_tedagua.png";
import cmc from "../public/images/partners-logos/comp_cmc.png";
import tsk from "../public/images/partners-logos/comp_tsk.png";
import stx from "../public/images/partners-logos/comp_stx.png";
import crcc from "../public/images/partners-logos/comp_crcc.png";
import cico from "../public/images/partners-logos/comp_cico.png";
import cobra from "../public/images/partners-logos/comp_cobra.png";
import benelux from "../public/images/partners-logos/comp_benelux.png";
import vebo from "../public/images/partners-logos/comp_vebo.png";
import cedc from "../public/images/partners-logos/comp_cedc.png";
import sab from "../public/images/partners-logos/comp_sab.png";

export default function Partners() {
  return <>
    <section className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-xl mx-auto text-center'>
        <h2 className='text-3xl font-bold sm:text-4xl'>Associate Partners</h2>

        <p className='mt-4 text-gray-500 sm:text-xl sm:max-w-xl mx-auto text-center'>
          We help our partners achieve more with strategy, creativity, and
          innovation! In a world where its easy to speak but hard to be heard
          - we work with our partners to find out their unique story.
          {/* We have found that these partnerships provide us with a competitive
          advantage by giving us access to new markets and new technologies.
          We are also able to learn from their expertise and experience. */}
        </p>
      </div>
      {/* Cards start here */}
      <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 lg:grid-cols-4'>
        {/* tbea */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={tbea}
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

                <dd className='font-medium'>TBEA Deyang Cable Co,Ltd.</dd>
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

                  <dd className='font-medium'>China</dd>
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

                  <dd className='font-medium'>1938</dd>
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

        </Link>
        {/* norinco */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={norinco}
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

                <dd className='font-medium'>Norinco International</dd>
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

                  <dd className='font-medium'>China</dd>
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

                  <dd className='font-medium'>1986</dd>
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

        </Link>
        {/* tedagua */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={tedagua}
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

                <dd className='font-medium'>
                  Tecnicas De Desalinizacion De Aguas SA
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

                  <dd className='font-medium'>Spain</dd>
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

                  <dd className='font-medium'>1983</dd>
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

        </Link>
        {/* cmc */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={cmc}
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

                <dd className='font-medium'>
                  China National Machinery Import and Export Corporation
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

                  <dd className='font-medium'>China</dd>
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

                  <dd className='font-medium'>1950</dd>
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

        </Link>
        {/* tsk */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={tsk}
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

                <dd className='font-medium'>TSK</dd>
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

                  <dd className='font-medium'>Spain</dd>
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

                  <dd className='font-medium'>1986</dd>
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

        </Link>
        {/* stx */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={stx}
              alt='Stx Corporation'
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

                <dd className='font-medium'>STX Corporation</dd>
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

                  <dd className='font-medium'>South Korea</dd>
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

                  <dd className='font-medium'>1976</dd>
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

        </Link>
        {/* cico */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={cico}
              alt='Stx Corporation'
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
                  China Chongqing International Construction Corporation
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

                  <dd className='font-medium'>China</dd>
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

                  <dd className='font-medium'>1985</dd>
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

        </Link>
        {/* benelux */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={benelux}
              alt='Stx Corporation'
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

                <dd className='font-medium'>BENELUX OVERSEAS DMCC</dd>
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

                  <dd className='font-medium'>Dubai</dd>
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

        </Link>
        {/* crcc */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={crcc}
              alt='China Railway Construction Corporation'
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
                  China Railway Construction Corporation
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

                  <dd className='font-medium'>China</dd>
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

                  <dd className='font-medium'>1948</dd>
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

        </Link>
        {/* vebo */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={vebo}
              alt='China Railway Construction Corporation'
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

                <dd className='font-medium'>Vebo Synergy DMCC</dd>
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

                  <dd className='font-medium'>Dubai</dd>
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

        </Link>
        {/* cedc */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={cedc}
              alt='China Energy Engineering Corporation (Energy China)'
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
                  China Energy Engineering Corporation (Energy China)
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

                  <dd className='font-medium'>China</dd>
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

                  <dd className='font-medium'>2011</dd>
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

        </Link>
        {/* acciona */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={acciona}
              alt='China Energy Engineering Corporation (Energy China)'
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

                <dd className='font-medium'>Acciona, S.A.</dd>
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

                  <dd className='font-medium'>Spain</dd>
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

                  <dd className='font-medium'>1997</dd>
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

        </Link>
        {/* cobra */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={cobra}
              alt='China Energy Engineering Corporation (Energy China)'
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

                <dd className='font-medium'>Cobra</dd>
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

                  <dd className='font-medium'>Spain</dd>
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

                  <dd className='font-medium'>1944</dd>
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

        </Link>
        {/* sab */}
        <Link
          href={"#!"}
          className='block p-4 rounded-lg border shadow-sm shadow-indigo-100 md:hover:-translate-y-1 md:hover:scale-110 md:transition-all'>

          <div className=''>
            <Image
              className='rounded-md'
              src={sab}
              alt='SATU ASIA BUMI SDN. BHD.'
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

                <dd className='font-medium'>SATU ASIA BUMI SDN. BHD.</dd>
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

                  <dd className='font-medium'>Malaysia</dd>
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

        </Link>
      </div>
    </section>
  </>;
}
