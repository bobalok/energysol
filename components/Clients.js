// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import { Autoplay } from "swiper";

import Image from "next/image";
import comp1 from "../public/images/clients-logos/comp_desco.png";
import comp2 from "../public/images/clients-logos/comp_bpdb.png";
import comp3 from "../public/images/clients-logos/comp_wzpdcl.png";
import comp4 from "../public/images/clients-logos/comp_dwasa.png";
import comp5 from "../public/images/clients-logos/comp_bmtf.png";
import comp6 from "../public/images/clients-logos/comp_bsc.png";
import comp7 from "../public/images/clients-logos/comp_beza.png";
import comp8 from "../public/images/clients-logos/comp_bcic.png";
import comp9 from "../public/images/clients-logos/comp_badc.png";

export default function Clients() {
  return (
    <>
      <section>
        <div className='px-4 py-12 lg:pb-20 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center py-12'>
            <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
              <span className='relative inline-block'>
                <span className='relative'>Our Best Clients</span>
              </span>{" "}
            </h2>
            <p className='mt-4 text-gray-500 sm:text-xl sm:max-w-md mx-auto text-center'>
              Some of our solutions have been successfully implemented by the
              local government agencies.
            </p>
          </div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            speed={5500}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            centeredSlides={true}
            freeMode={true}
          >
            <SwiperSlide>
              <Image
                src={comp1}
                alt='Dhaka Electric Supply Company Limited'
                // width={120} automatically provided
                // height={100} automatically provided
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
                // priority
              />
              <p className='hidden sm:block text-center text-gray-400'>
                Dhaka Electric Supply Company Limited
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={comp2}
                alt='Bangladesh Power Development Board'
                // width={120} automatically provided
                // height={100} automatically provided
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
                // priority
              />
              <p className='hidden sm:block text-center text-gray-400'>
                Bangladesh Power Development Board
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={comp3}
                alt='West Zone Power Distribution Company'
                // width={120} automatically provided
                // height={100} automatically provided
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
                // priority
              />
              <p className='hidden sm:block text-center text-gray-400'>
                West Zone Power Distribution Company
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={comp4}
                alt='Dhaka WASA'
                // width={120} automatically provided
                // height={100} automatically provided
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
                // priority
              />
              <p className='hidden sm:block text-center text-gray-400'>
                Dhaka WASA
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={comp5}
                alt='Bangladesh Machine Tools Factory'
                // width={120} automatically provided
                // height={100} automatically provided
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
                // priority
              />
              <p className='hidden sm:block text-center text-gray-400'>
                Bangladesh Machine Tools Factory
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={comp6}
                alt='Bangladesh Shipping Corporation'
                // width={120} automatically provided
                // height={100} automatically provided
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
                // priority
              />
              <p className='hidden sm:block text-center text-gray-400'>
                Bangladesh Shipping Corporation
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={comp7}
                alt='Bangladesh Economic Zones Authority'
                // width={120} automatically provided
                // height={100} automatically provided
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
                // priority
              />
              <p className='hidden sm:block text-center text-gray-400'>
                Bangladesh Economic Zones Authority
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={comp8}
                alt='Bangladesh Chemical Industries Corporation'
                // width={120} automatically provided
                // height={100} automatically provided
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
                // priority
              />
              <p className='hidden sm:block text-center text-gray-400'>
                Bangladesh Chemical Industries Corporation
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={comp9}
                alt='Bangladesh Agricultural Development Corporation'
                // width={120} automatically provided
                // height={100} automatically provided
                // blurDataURL='data:...' // automatically provided
                placeholder='blur' // Optional blur-up while loading
                // priority
              />
              <p className='hidden sm:block text-center text-gray-400'>
                Bangladesh Agricultural Development Corporation
              </p>
            </SwiperSlide>
            {/* <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
}
