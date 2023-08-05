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
                  href='https://wa.me/+8801711591070?text=Obtained%20your%20WhatsApp%20contact%20from%20the%20website.%20Are%20you%20free%20for%20a%20conversation%3F'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> Chat on WhatsApp </span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-green-600 mr-1 ml-2'
                    fill='currentColor'
                    viewBox='0 0 30 30'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
}
