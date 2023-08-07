import Image from "next/image";
// import Link from "next/link";
// import mdPhoto from "../public/images/person-images/md-portrait.webp";
// import sinamm from "../public/images/partners-logos/comp_sinamm.png";
import handshake from "../public/images/handshakes.jpg";
import Contact from "./Contact";

export default function opportunities() {
  return (
    <section className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-xl mx-auto text-center'>
        <h2 className='text-3xl font-bold sm:text-4xl'>Sister Concern</h2>

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

      {/* Arif Cards starts here */}
      <div className='max-w-5xl px-4 py-12 mx-auto'>
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
                {/* &quot;We have joined our hands to create a strong hold and take
                Bangladesh&rsquo;s development to a new horizon.&quot; */}
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
                {/* <a
                  className='hover:text-blue-600 flex'
                  href='https://sinammengineering.com/top-management/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> Sinamm Engineering Limited</span>

                  <svg
                    className='w-6 h-6 text-sky-600 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                    />
                  </svg>
                  <span>Sinamm&rsquo;s website</span>
                </a> */}
              </div>
            </blockquote>
          </div>
        </section>
      </div>

      <Contact />
    </section>
  );
}
