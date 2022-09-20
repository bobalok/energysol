import Head from "next/head";
import Partners from "../components/Partners";
import Clients from "../components/Clients";
import FAQ from "../components/FAQ";

export default function partners() {
  return (
    <>
      <Head>
        <title>Energy Solution | Partners</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <section className='pb-20'>
        <Partners />

        <Clients />

        <FAQ />
      </section>
    </>
  );
}
