// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";

import Image from "next/image";

// loading project images
import slider1 from "../public/images/slider-images/slider1opt.webp";
import slider2 from "../public/images/slider-images/slider2opt.webp";
import slider3 from "../public/images/slider-images/slider3opt.webp";
import slider4 from "../public/images/slider-images/slider4opt.webp";

export default function Slider() {
  return (
    <>
      <div className='relative top-0 w-full mx-auto bg-white'>
        <Swiper
          className='xl:h-[90vh] h-[92vh]'
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFade,
          ]}
          // spaceBetween={20}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
          }}
          effect='fade'
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
        >
          {/* slider1 */}
          <SwiperSlide className=''>
            <Image
              className=''
              src={slider1}
              alt='basketball'
              layout='fill'
              // width={700}
              // height={475}
              objectFit='cover'
              priority
              quality='100'
            />
            <div className='hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-zinc-900 sm:to-transparent'></div>
            <div className='sm:hidden block inset-0 absolute bg-zinc-900 bg-opacity-75'></div>
            {/* <span className='absolute swiper-no-swiping text-5xl md:text-7xl text-white font-extrabold py-20 p-6'>
              a betternet for new generation 2
            </span> */}
            <div className='relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
              <div className='max-w-xl text-center sm:text-left'>
                <h1 className='text-3xl font-extrabold sm:text-6xl text-white'>
                  COMBINE CYCLE SINGLE SHAFT POWER PLANT (NORTH AND SOUTH 400MW
                  EACH)
                  {/* <strong class='block font-extrabold text-sky-600 sm:block'>
                    Completed.
                  </strong> */}
                </h1>

                <p className='max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white'>
                  Ashuganj Power Station Company Ltd. (APSCL)
                </p>

                <div className='flex flex-wrap gap-4 mt-8 text-center'>
                  <a
                    className='block w-full px-12 py-3 text-lg font-medium text-white rounded shadow bg-blue-600 sm:w-auto active:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring'
                    href='/get-started'
                  >
                    Details
                  </a>

                  {/* <a
                    class='block w-full px-12 py-3 text-lg font-medium bg-white rounded shadow text-gray-600 sm:w-auto hover:text-gray-700 active:text-gray-500 focus:outline-none focus:ring'
                    href='/about'
                  >
                    Contact us
                  </a> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slider2 */}
          <SwiperSlide className=''>
            <Image
              className=''
              src={slider2}
              alt='basketball'
              layout='fill'
              // width={700}
              // height={475}
              objectFit='cover'
              priority
              quality='100'
            />
            <div className='hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-zinc-900 sm:to-transparent'></div>
            <div className='sm:hidden block inset-0 absolute bg-zinc-900 bg-opacity-75'></div>
            {/* <span className='absolute swiper-no-swiping text-5xl md:text-7xl text-white font-extrabold py-20 p-6'>
              a betternet for new generation 2
            </span> */}
            <div className='relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
              <div className='max-w-xl text-center sm:text-left'>
                <h1 className='text-3xl font-extrabold sm:text-6xl text-white'>
                  PAYRA 660 x 2 MW SUPER CRITICAL COAL BASED POWER PLANT
                  {/* <strong class='block font-extrabold text-sky-600 sm:block'>
                    Completed.
                  </strong> */}
                </h1>

                <p className='max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white'>
                  North West Power Generation Company Limited (NWPGCL)
                </p>

                <div className='flex flex-wrap gap-4 mt-8 text-center'>
                  <a
                    className='block w-full px-12 py-3 text-lg font-medium text-white rounded shadow bg-blue-600 sm:w-auto active:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring'
                    href='/get-started'
                  >
                    Details
                  </a>

                  {/* <a
                    class='block w-full px-12 py-3 text-lg font-medium bg-white rounded shadow text-gray-600 sm:w-auto hover:text-gray-700 active:text-gray-500 focus:outline-none focus:ring'
                    href='/about'
                  >
                    Contact us
                  </a> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          Name
          {/* slider3 */}
          <SwiperSlide className=''>
            <Image
              className=''
              src={slider3}
              alt='basketball'
              layout='fill'
              // width={700}
              // height={475}
              objectFit='cover'
              priority
              quality='100'
            />
            <div className='hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-zinc-900 sm:to-transparent'></div>
            <div className='sm:hidden block inset-0 absolute bg-zinc-900 bg-opacity-75'></div>
            {/* <span className='absolute swiper-no-swiping text-5xl md:text-7xl text-white font-extrabold py-20 p-6'>
              a betternet for new generation 2
            </span> */}
            <div className='relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
              <div className='max-w-xl text-center sm:text-left'>
                <h1 className='text-3xl font-extrabold sm:text-6xl text-white'>
                  SHIRAJ GANJ-2 225MW CCPP OF NWPGCL
                  {/* <strong class='block font-extrabold text-sky-600 sm:block'>
                    Completed.
                  </strong> */}
                </h1>

                <p className='max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white'>
                  North West Power Generation Company Limited (NWPGCL)
                </p>

                <div className='flex flex-wrap gap-4 mt-8 text-center'>
                  <a
                    className='block w-full px-12 py-3 text-lg font-medium text-white rounded shadow bg-blue-600 sm:w-auto active:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring'
                    href='/get-started'
                  >
                    Details
                  </a>

                  {/* <a
                    class='block w-full px-12 py-3 text-lg font-medium bg-white rounded shadow text-gray-600 sm:w-auto hover:text-gray-700 active:text-gray-500 focus:outline-none focus:ring'
                    href='/about'
                  >
                    Contact us
                  </a> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slider4 */}
          <SwiperSlide className=''>
            <Image
              className=''
              src={slider4}
              alt='basketball'
              layout='fill'
              // width={700}
              // height={475}
              objectFit='cover'
              priority
              quality='100'
            />
            <div className='hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-zinc-900 sm:to-transparent'></div>
            <div className='sm:hidden block inset-0 absolute bg-zinc-900 bg-opacity-75'></div>
            {/* <span className='absolute swiper-no-swiping text-5xl md:text-7xl text-white font-extrabold py-20 p-6'>
              a betternet for new generation 2
            </span> */}
            <div className='relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
              <div className='max-w-xl text-center sm:text-left'>
                <h1 className='text-3xl font-extrabold sm:text-6xl text-white'>
                  SHIRAJ GANJ-3 225MW CCPP OF NWPGCL
                  {/* <strong class='block font-extrabold text-sky-600 sm:block'>
                    Completed.
                  </strong> */}
                </h1>

                <p className='max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white'>
                  North West Power Generation Company Limited (NWPGCL)
                </p>

                <div className='flex flex-wrap gap-4 mt-8 text-center'>
                  <a
                    className='block w-full px-12 py-3 text-lg font-medium text-white rounded shadow bg-blue-600 sm:w-auto active:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring'
                    href='/get-started'
                  >
                    Details
                  </a>

                  {/* <a
                    class='block w-full px-12 py-3 text-lg font-medium bg-white rounded shadow text-gray-600 sm:w-auto hover:text-gray-700 active:text-gray-500 focus:outline-none focus:ring'
                    href='/about'
                  >
                    Contact us
                  </a> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <Image
              className=''
              src='https://images.unsplash.com/photo-1519861531473-9200262188bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80'
              alt='basketball'
              layout='fill'
              // width={700}
              // height={475}
              objectFit='cover'
              priority
            />
            <div className='container mx-auto flex justify-center'>
              <span className='absolute swiper-no-swiping text-5xl md:text-7xl text-green-900 font-extrabold'>
                a sedfdsg
              </span>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
