import Head from "next/head";
import Opportunities from "../components/Opportunity";

export default function opportunities() {
  return (
    <>
      <Head>
        <title>Energy Solution | Opportunities</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Opportunities />
    </>
  );
}
