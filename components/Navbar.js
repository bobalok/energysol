import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <>
      <nav className="sticky z-50 top-0 shadow-md p-4 bg-gray-200">
        <div>
          <img src="/energysolution.svg" alt=""></img>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
