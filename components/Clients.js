// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

import Image from "next/image";
import comp1 from "../public/images/clients-logos/comp_desco.png";
import comp2 from "../public/images/clients-logos/comp_bpdb.png";
import comp3 from "../public/images/clients-logos/comp_wzpdcl.png";
import comp4 from "../public/images/clients-logos/comp_dwasa.png";
import comp5 from "../public/images/clients-logos/comp_bmtf.png";

export default function Clients() {
  return (
    <>
      <section>
        <div className='px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center py-12'>
            <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
              <span className='relative inline-block'>
                <span className='relative'>Honorable Clients</span>
              </span>{" "}
            </h2>
            <p className='mt-4 text-gray-500 sm:text-xl sm:max-w-md mx-auto text-center'>
              Some of our solutions have been successfully implemented by
              government agencies of bangladesh.
            </p>
          </div>
          <Swiper
            className='text-center'
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectFade,
            ]}
            spaceBetween={30}
            speed={3200}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={3}
            // navigation
            // pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Image
                className=''
                src={comp1}
                alt='Dhaka Electric Supply Company Limited'
                layout='intrinsic'
                width={120}
                height={100}
                objectFit='contain'
                // priority
                quality='70'
              />{" "}
              {/* <span className='text-center self-center flex'>company 1</span> */}
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=''
                src={comp2}
                alt='Bangladesh Power Development Board'
                layout='intrinsic'
                width={120}
                height={100}
                objectFit='contain'
                // priority
                quality='70'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=''
                src={comp3}
                alt='West Zone Power Distribution Company'
                layout='intrinsic'
                width={120}
                height={100}
                objectFit='contain'
                // priority
                quality='70'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=''
                src={comp4}
                alt='Dhaka WASA'
                layout='intrinsic'
                width={120}
                height={100}
                objectFit='contain'
                // priority
                quality='70'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=''
                src={comp5}
                alt='Bangladesh Machine Tools Factory'
                layout='intrinsic'
                width={120}
                height={100}
                objectFit='contain'
                // priority
                quality='70'
              />
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
