import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicMapFooter = dynamic(() => import("../components/Mapiframe"), {
  ssr: true,
});

export default function Footer() {
  return (
    <>
      <footer className='text-white bg-gray-900 lg:grid lg:grid-cols-5'>
        <aside className='hidden lg:relative lg:col-span-2 lg:block aspect-w-1 aspect-h-0'>
          <DynamicMapFooter className='absolute inset-0 object-cover w-full h-full' />

          {/* <img
            class='absolute inset-0 object-cover w-full h-full'
            src='https://images.unsplash.com/photo-1624456735729-03594a40c5fb'
            alt='Comic Graphic'
          /> */}
        </aside>

        <div className='px-4 py-16 sm:px-6 lg:px-8 lg:col-span-3'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            <div>
              <p className='font-medium'>
                <span className='text-xs tracking-widest uppercase'>
                  Call us
                </span>

                <a
                  className='block text-2xl sm:text-3xl hover:opacity-75'
                  href='tel:+8802222262118'
                >
                  +8802 222262118
                </a>
              </p>

              <ul className='mt-8 space-y-2 text-sm'>
                <li>Saturday - Thursday: 10am - 6pm</li>
                <li>House 16, Flat-SW4, Road-10, Gulshan-1</li>

                <br />
                <a
                  href='https://goo.gl/maps/jPFLm4puSqqdKxoE6'
                  className='hover:text-green-500 flex sm:hidden'
                >
                  <svg
                    className='w-4 h-4 mr-1'
                    fill='currentColor'
                    viewBox='0 0 50 50'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M28.292 1.326C27.226 1.116 26.127 1 25 1c-4.71 0-8.98 1.93-12.06 5.04l6.92 5.592L28.292 1.326zM18.595 13.178L11.62 7.55C9.35 10.43 8 14.07 8 18c0 2.281.452 4.487 1.304 6.534L18.595 13.178zM22.608 11.432C23.353 11.159 24.154 11 25 11c3.87 0 7 3.13 7 7 0 .338-.032.667-.078.992l7.772-9.499c-2.058-3.539-5.348-6.268-9.285-7.595L22.608 11.432zM27.341 24.591C26.608 24.851 25.822 25 25 25c-3.87 0-7-3.13-7-7 0-.354.034-.7.084-1.039l-7.803 9.537c.386.666.809 1.315 1.289 1.932.37.5.87 1.14 1.45 1.89 1.267 1.633 2.959 3.816 4.59 6.164L27.341 24.591zM18.778 38.215c2.082 3.184 3.852 6.497 4.172 9.055.14.99.99 1.73 1.99 1.73 1.02 0 1.87-.75 1.99-1.75.61-4.83 6.57-12.48 9.78-16.6.56-.72 1.05-1.35 1.5-1.94C40.65 25.69 42 21.89 42 18c0-2.322-.471-4.536-1.319-6.555L18.778 38.215z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Google Map Direction
                </a>
              </ul>

              <div className='flex mt-16 space-x-3'>
                <a
                  className='hover:text-green-400 p-2 border rounded-full border-white/25 hover:opacity-75'
                  href='https://api.whatsapp.com/send?phone=+8801685626238'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> WhatsApp </span>

                  <svg
                    className='w-4 h-4 '
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
                </a>

                <a
                  className='hover:text-green-300 p-2 border rounded-full border-white/25 hover:opacity-75'
                  href=''
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> WeChat </span>

                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 50 50'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M 19 6 C 9.625 6 2 12.503906 2 20.5 C 2 24.769531 4.058594 28.609375 7.816406 31.390625 L 5.179688 39.304688 L 13.425781 34.199219 C 15.714844 34.917969 18.507813 35.171875 21.203125 34.875 C 23.390625 39.109375 28.332031 42 34 42 C 35.722656 42 37.316406 41.675781 38.796875 41.234375 L 45.644531 45.066406 L 43.734375 38.515625 C 46.3125 36.375 48 33.394531 48 30 C 48 23.789063 42.597656 18.835938 35.75 18.105469 C 34.40625 11.152344 27.367188 6 19 6 Z M 13 14 C 14.101563 14 15 14.898438 15 16 C 15 17.101563 14.101563 18 13 18 C 11.898438 18 11 17.101563 11 16 C 11 14.898438 11.898438 14 13 14 Z M 25 14 C 26.101563 14 27 14.898438 27 16 C 27 17.101563 26.101563 18 25 18 C 23.898438 18 23 17.101563 23 16 C 23 14.898438 23.898438 14 25 14 Z M 34 20 C 40.746094 20 46 24.535156 46 30 C 46 32.957031 44.492188 35.550781 42.003906 37.394531 L 41.445313 37.8125 L 42.355469 40.933594 L 39.105469 39.109375 L 38.683594 39.25 C 37.285156 39.71875 35.6875 40 34 40 C 27.253906 40 22 35.464844 22 30 C 22 24.535156 27.253906 20 34 20 Z M 29.5 26 C 28.699219 26 28 26.699219 28 27.5 C 28 28.300781 28.699219 29 29.5 29 C 30.300781 29 31 28.300781 31 27.5 C 31 26.699219 30.300781 26 29.5 26 Z M 38.5 26 C 37.699219 26 37 26.699219 37 27.5 C 37 28.300781 37.699219 29 38.5 29 C 39.300781 29 40 28.300781 40 27.5 C 40 26.699219 39.300781 26 38.5 26 Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>

                <a
                  className='hover:text-cyan-500 p-2 border rounded-full border-white/25 hover:opacity-75'
                  href=''
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> Telegram </span>

                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 50 50'
                    aria-hidden='true'
                  >
                    <path d='M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z' />
                  </svg>
                </a>

                <a
                  className='hover:text-blue-500 p-2 border rounded-full border-white/25 hover:opacity-75'
                  href=''
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> LinkedIn </span>

                  <svg
                    className='w-4 h-4'
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
                </a>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-4'>
              <div className=' sm:justify-between sm:flex'>
                <span></span>
                <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-300'>
                  <p className='font-bold'>Support</p>
                  <Link href={"/contact"}>
                    <a className='hover:opacity-75'> Contact </a>
                  </Link>
                  <a
                    className='hover:opacity-75'
                    href='/docs/ESEL-ES_Company-Profile.pdf'
                    alt='Download Energy Solution Company Profile'
                    target='_self'
                    rel='noopener noreferrer'
                  >
                    {" "}
                    Company profile{" "}
                  </a>
                  {/* <a className='text-gray-500' href='#!'>
                    {" "}
                    !Live Chat{" "}
                  </a> */}
                  <Link href='/privacypolicy'>
                    <a className='hover:opacity-75'> Privacy Policy </a>
                  </Link>
                  <Link href='https://up.energysolutionbd.net/status/availability-check'>
                    <a className='hover:opacity-75'> Availability Check </a>
                  </Link>
                </nav>
              </div>

              {/* <div>
                <p className='font-medium'>Products</p>

                <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-300'>
                  <a className='hover:opacity-75' href=''>
                    {" "}
                    1to1 Coaching{" "}
                  </a>
                  <a className='hover:opacity-75' href=''>
                    {" "}
                    Lesson Plans{" "}
                  </a>
                  <a className='hover:opacity-75' href=''>
                    {" "}
                    Meal Plans{" "}
                  </a>
                  <a className='hover:opacity-75' href=''>
                    {" "}
                    Gym Sessions{" "}
                  </a>
                </nav>
              </div> */}
            </div>
          </div>

          <div className='pt-12 mt-12 border-t border-gray-800'>
            <div className='text-sm text-gray-300 sm:items-center sm:justify-between sm:flex'>
              <div className='flex space-x-3'>
                <a className='hover:opacity-75' href='#!'>
                  {" "}
                  Developed by ▶️Betternet.
                </a>
                {/* <a class='hover:opacity-75' href=''>
                  {" "}
                  Terms & Conditions{" "}
                </a>
                <a class='hover:opacity-75' href=''>
                  {" "}
                  Returns Policy{" "}
                </a> */}
              </div>

              <p className='mt-4 sm:mt-0'>
                &copy; 2010-{new Date().getFullYear()} Energy Solution
                Engineering Ltd.
              </p>
            </div>

            <p className='mt-8 text-xs text-gray-500'>
              Energy Solution Engineering Ltd will take all the steps reasonably
              necessary to ensure that your data is treated securely and in
              accordance with this Privacy Policy and no transfer of your
              Personal Data will take place to an organisation or a country
              unless there are adequate controls in place including the security
              of your data and other personal information.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
