import React from "react";

export default function Stats() {
  return (
    <>
      <section className='bg-white'>
        <div className='max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
              Trusted by Businesses
            </h2>

            <p className='mt-4 text-gray-500 sm:text-xl'>
              we are the most experienced and reliable solution in{" "}
              <strong className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-green-700'>
                Bangladesh
              </strong>
            </p>
          </div>

          <div className='mt-8 sm:mt-12'>
            <dl className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
              <div className='flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg'>
                <dt className='order-last text-lg font-medium text-gray-500'>
                  Ongoing projects
                </dt>

                <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
                  08
                </dd>
              </div>

              <div className='flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg'>
                <dt className='order-last text-lg font-medium text-gray-500'>
                  Completed projects
                </dt>

                <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
                  107
                </dd>
              </div>

              <div className='flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg'>
                <dt className='order-last text-lg font-medium text-gray-500'>
                  Satisfiction rate
                </dt>

                <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
                  93%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
