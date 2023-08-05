import Image from "next/image";

import mdPhoto from "../public/images/person-images/md-portrait.webp";

export default function Testimonials() {
  return (
    <>
      {/* This component uses @tailwindcss/aspect-ratio

  yarn add @tailwindcss/aspect-ratio
  npm install @tailwindcss/aspect-ratio

  plugins: [require('@tailwindcss/aspect-ratio')] */}

      <div className='max-w-5xl px-4 pt-36 py-12 mx-auto'>
        <section className='p-8 bg-gray-100 rounded-lg md:drop-shadow-xl md:hover:drop-shadow-2xl transition duration-200'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
            <div className='relative'>
              <div className='aspect-w-1 aspect-h-1'>
                <Image
                  className=''
                  src={mdPhoto}
                  alt='Arif I.Z Rahman Photo'
                  layout='fill'
                  objectFit='contain'
                  quality='70'
                  // blurDataURL='data:...' // automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              </div>

              <div className='absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4'>
                <span className='inline-block w-12 h-10 bg-gray-300 rounded-lg'></span>
              </div>
            </div>

            <blockquote className='sm:col-span-2'>
              <p className='text-xl font-medium sm:text-2xl sm:text-justify'>
                &quot;Our integrity, transparency, and sincerity enabled us to
                build long-term relationships with our foreign and local
                partners. Our achievement proves our growth. We believe in Team
                Work, Let us join our hands, grow together, and fulfill our
                goals and commitment&quot;
              </p>

              <cite className='inline-flex items-center mt-8 not-italic'>
                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                <p className='text-sm text-gray-500 uppercase sm:ml-3'>
                  <strong>Arif I.Z Rahman</strong>, Managing Director | Energy
                  Solution Engineering Ltd.
                </p>
              </cite>

              <div className='flex mt-8 space-x-1 text-gray-500 sm:mt-8'>
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

                <a
                  className='hover:text-green-600 flex'
                  href='https://wa.me/+8801711591070'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> WhatsApp </span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-green-600 mr-1 ml-2'
                    fill='currentColor'
                    viewBox='0 0 448 512'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
}
