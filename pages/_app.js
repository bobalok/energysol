import "../styles/globals.css";
// importing script from nextjs for formsree to work
import Script from "next/script";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src='https://www.google.com/recaptcha/api.js'></Script>
    </Layout>
  );
}

export default MyApp;
