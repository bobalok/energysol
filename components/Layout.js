import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Slider />
      {children}
      <Footer />
    </>
  );
}
