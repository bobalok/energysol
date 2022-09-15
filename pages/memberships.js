import Head from "next/head";
import Memberships from "../components/Memberships";
import Clients from "../components/Clients";
import FAQ from "../components/FAQ";

export default function memberships() {
  return (
    <>
      <Head>
        <title>Energy Solution | memberships</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Memberships />
      <Clients />
      <FAQ />
    </>
  );
}
