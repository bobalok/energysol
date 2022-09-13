import Head from "next/head";
import Portfolio from "../components/Portfolio";
import Supply from "../components/Supply";
import Clients from "../components/Clients";
import Contact from "../components/Contact";

export default function portfolio() {
  return (
    <>
      <Head>
        <title>Energy Solution | Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Portfolio />
      <Supply />
      <Clients />
      <Contact />
    </>
  );
}
