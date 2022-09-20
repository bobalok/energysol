import Head from "next/head";
import Clients from "../components/Clients.js";
import Contact from "../components/Contact.js";
import FAQ from "../components/FAQ.js";
import Sixtype from "../components/Sixtype.js";
import Slider from "../components/Slider.js";
import Stats from "../components/Stats.js";
import Testimonials from "../components/Testimonials.js";

export default function Home() {
  return (
    <>
      {/* <div className='flex flex-col items-center justify-center min-h-screen py-2'> */}
      <Head>
        <title>Energy Solution | Home</title>
      </Head>

      <Slider />
      <Stats />
      <Sixtype />
      <Testimonials />
      <Clients />
      <Contact />
      <FAQ />
      {/* </div> */}
    </>
  );
}
