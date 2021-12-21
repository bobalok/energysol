import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Energy Solution | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div></div>
      </main>
    </div>
  );
}
