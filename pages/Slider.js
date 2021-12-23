// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import Image from 'next/image';

export default function Slider() {
  return (
    <>
      <div className="relative top-0 w-full mx-auto bg-white">
        <Swiper
          className="xl:h-[90vh] h-[92vh]"
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
          // effect={{fade
          // }}
          // f
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Image
              className=""
              src="https://energysolutionbd.net/assets/images/ashuganj-01-1-1024x576.png"
              alt="basketball"
              layout="fill"
              // width={700}
              // height={475}
              objectFit="cover"
              priority
              quality="100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className=""
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
              alt="basketball"
              layout="fill"
              // width={700}
              // height={475}
              objectFit="cover"
              priority
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <section className="text-center flex justify-center mx-auto bg-indigo-600">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl text-white font-extrabold py-20 p-6">
            a{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
              betternet
            </span>{' '}
            for new generation
          </h1>
          <p className="text-lg md:text-2xl text-white">
            neutechbd.com is the most unified <br />
            internet service provider <br />
            enterprise grade solution
            <br />
            everywhere.
          </p>
          <div className="px-8 p-4">
            <button className="bg-green-500 hover:bg-gradient-to-r from-green-500 to-blue-500 transition-all text-white font-semibold hover:text-white py-4 px-4 border border-green-500 hover:border-transparent rounded inline-flex items-center">
              Get started
            </button>
            <span className="mx-1 text-white">or</span>
            <button className="bg-transparent hover:bg-gradient-to-r from-green-500 to-blue-500 transition-all text-green-500 font-semibold hover:text-white py-4 px-4 border border-green-500 hover:border-transparent rounded inline-flex items-center">
              Try free!
            </button>
          </div>
        </div>
      </section>
      {/* <div className="relative max-w-7xl mx-auto bg-white px-8 py-20 lg:py-32">
        <Swiper
          className=""
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Image
              className=""
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
              alt="basketball"
              layout="responsive"
              width={700}
              height={475}
              // objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
              alt="basketball"
              layout="responsive"
              width={700}
              height={475}
              // objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
              alt="basketball"
              layout="responsive"
              width={700}
              height={475}
              // objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
              alt="basketball"
              layout="responsive"
              width={700}
              height={475}
              // objectFit="cover"
            />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </>
  );
}
