import Head from "next/head";
import Partners from "../components/Partners";

export default function partners() {
  return (
    <>
      <Head>
        <title>Energy Solution | Partners</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className=''>
        <Partners />
      </section>
    </>
  );
}
