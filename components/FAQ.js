import React from "react";

export default function FAQ() {
  return (
    <>
      <section className='max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center py-12'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='d9d7687a-355f-4502-8ec4-7945db034688'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#d9d7687a-355f-4502-8ec4-7945db034688)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>Frequently Asked Questions</span>
            </span>{" "}
          </h2>
        </div>
        <div className='bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl'>
          <details className='p-6 group' open>
            <summary className='flex items-center justify-between cursor-pointer'>
              <h5 className='text-lg font-medium text-gray-900'>
                Why do I need a business consulting service?
              </h5>

              <span className='relative flex-shrink-0 ml-1.5 w-5 h-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </span>
            </summary>

            <p className='mt-4 leading-relaxed text-gray-700'>
              Business consultants can help find weak areas in your spending and
              provide creative solutions for those areas. ‌Business consultants
              can help increase sales by researching your desired client and
              creating a targeted marketing plan to attract them.
            </p>
          </details>

          <details className='p-6 group'>
            <summary className='flex items-center justify-between cursor-pointer'>
              <h5 className='text-lg font-medium text-gray-900'>
                What industries or businesses do you specialize in?
              </h5>

              <span className='relative flex-shrink-0 ml-1.5 w-5 h-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </span>
            </summary>

            <p className='mt-4 leading-relaxed text-gray-700'>
              We take pride in our ability to learn the fundamentals of
              virtually any industry or technology quickly. Some of the markets
              we have served include green technologies, medical devices,
              biotechnology, Internet/e-commerce, telecommunications, distance
              education/e-learning, real estate, financial services, healthcare
              services, manufacturing, retail, food service, consumer products,
              media and entertainment, aerospace, artificial intelligence,
              enterprise software, insurance, energy, and networking. Having
              said that, we believe that the value we bring to the table is not
              industry expertise — which you already possess in abundance — but
              rather an understanding of what investors like to see in a
              potential opportunity.
            </p>
          </details>

          <details className='p-6 group'>
            <summary className='flex items-center justify-between cursor-pointer'>
              <h5 className='text-lg font-medium text-gray-900'>
                Will you sign a non-disclosure agreement?
              </h5>

              <span className='relative flex-shrink-0 ml-1.5 w-5 h-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </span>
            </summary>

            <p className='mt-4 leading-relaxed text-gray-700'>
              Gladly. We prefer to use a Mutual NDA so that our own trade
              secrets can be protected as well.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
