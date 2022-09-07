import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;
