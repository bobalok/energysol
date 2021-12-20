import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <>
      <nav className="sticky z-50 top-0 shadow-md p-4 bg-gray-200">
        <div className="max-w-8xl mx-auto relative flex items-center">
          <img src="/energysolution.svg" alt="" className="w-1/5"></img>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
