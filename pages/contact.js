import Head from "next/head";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Sixtype from "../components/Sixtype";

export default function contact() {
  return (
    <>
      <Head>
        <title>Energy Solution | Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='py-12'>
        {/* <Stats /> */}
        <Contact />
        {/* <Clients /> */}
        {/* <Sixtype /> */}
        {/* <Testimonials /> */}
      </section>
    </>
  );
}
