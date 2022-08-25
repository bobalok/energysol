import React from "react";

export default function FAQ() {
  return (
    <>
      <section className='max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center py-12'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
            Freqently Asked Questions
          </h2>
        </div>
        <div className='bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl'>
          <details className='p-6 group' open>
            <summary className='flex items-center justify-between cursor-pointer'>
              <h5 className='text-lg font-medium text-gray-900'>
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h5>

              <span className='relative flex-shrink-0 ml-1.5 w-5 h-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </span>
            </summary>

            <p className='mt-4 leading-relaxed text-gray-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className='p-6 group'>
            <summary className='flex items-center justify-between cursor-pointer'>
              <h5 className='text-lg font-medium text-gray-900'>
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h5>

              <span className='relative flex-shrink-0 ml-1.5 w-5 h-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </span>
            </summary>

            <p className='mt-4 leading-relaxed text-gray-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
