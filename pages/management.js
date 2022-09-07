import Head from "next/head";
import Management from "../components/Management";

export default function management() {
  return (
    <>
      <Head>
        <title>Energy Solution | Management</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Management />
    </>
  );
}
