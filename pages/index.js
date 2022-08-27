import Head from "next/head";
import FAQ from "../components/FAQ.js";
import Fourtype from "../components/Fourtype.js";
import Slider from "../components/Slider.js";
import Stats from "../components/Stats.js";
import Testimonials from "../components/Testimonials.js";

export default function Home() {
  return (
    <>
      {/* <div className='flex flex-col items-center justify-center min-h-screen py-2'> */}
      <Head>
        <title>Energy Solution | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Slider />
      <Stats />
      <Fourtype />
      <Testimonials />
      <FAQ />
      {/* </div> */}
    </>
  );
}
