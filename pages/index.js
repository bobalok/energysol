import Head from "next/head";
import Slider from "../components/Slider.js";

export default function Home() {
  return (
    <>
      {/* <div className='flex flex-col items-center justify-center min-h-screen py-2'> */}
      <Head>
        <title>Energy Solution | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slider />
      {/* </div> */}
    </>
  );
}
