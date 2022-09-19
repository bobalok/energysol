import "../styles/globals.css";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          // exit='pageExit'
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            // pageExit: {
            //   backgroundColor: "white",
            //   filter: `invert()`,
            //   opacity: 0,
            // },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
