import Navbar from "./Navbar";
import Footer from "./Footer";
import Navi from "./Navi";
export default function Layout({ children }) {
  return (
    <>
      <Navi />
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  );
}
