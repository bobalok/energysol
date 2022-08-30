import Image from "next/image";

import mdPhoto from "../public/images/person-images/md-portrait.webp";

export default function Testimonials() {
  return (
    <>
      {/* This component uses @tailwindcss/aspect-ratio

  yarn add @tailwindcss/aspect-ratio
  npm install @tailwindcss/aspect-ratio

  plugins: [require('@tailwindcss/aspect-ratio')] */}

      <div className='max-w-5xl px-4 pt-44 py-12 mx-auto'>
        <section className='p-8 bg-gray-100 rounded-lg md:drop-shadow-xl md:hover:drop-shadow-2xl transition duration-200'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
            <div className='relative'>
              <div className='aspect-w-1 aspect-h-1'>
                <Image
                  className=''
                  src={mdPhoto}
                  alt=''
                  layout='fill'
                  //   width={277}
                  //   height={277}
                  objectFit='contain'
                  // priority
                  quality='70'
                />
              </div>

              <div className='absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4'>
                <span className='inline-block w-12 h-10 bg-gray-300 rounded-lg'></span>
              </div>
            </div>

            <blockquote className='sm:col-span-2'>
              <p className='text-xl font-medium sm:text-2xl sm:text-justify'>
                Our integrity, transparency, and sincerity enabled us to build
                long-term relationships with our foreign and local partners. Our
                achievement proves our growth. We believe in Team Work, Let us
                join our hands, grow together, and fulfill our goals and
                commitment.
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
                  <span>Available on LinkedIn</span>
                </a>
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
}
