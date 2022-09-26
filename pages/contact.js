import Head from "next/head";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Sixtype from "../components/Sixtype";

export default function contact() {
  return (
    <>
      <Head>
        <title>Energy Solution | Contact</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <div className='py-12'>
        <Contact />
      </div>
    </>
  );
}
