import Head from "next/head";
import Portfolio from "../components/Portfolio";

export default function portfolio() {
  return (
    <>
      <Head>
        <title>Energy Solution | Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Portfolio />
    </>
  );
}
