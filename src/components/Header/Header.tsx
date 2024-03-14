import { useState } from "react";
import logo from "../../img/logo.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {" "}
      <div className="col-span-4">
        <div className="bg-[#e5593f]">
          <nav className="container mx-auto flex items-center justify-between py-1">
            <a href="#">
              <img
                src={logo}
                alt="Poké World"
                className="h-10 w-auto mr-4 lg:hidden cursor-pointer"
              />
            </a>
            <a href="#">
              <img
                src={logo}
                alt="Poké World"
                className="h-10 w-auto mr-auto hidden lg:block cursor-pointer"
              />
            </a>

            <button
              onClick={toggleMenu}
              className="block lg:hidden focus:outline-none mr-2"
            >
              <svg
                className="w-8 h-8 text-gray-800 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2z" />
              </svg>
            </button>

            <ul className="hidden lg:flex flex-grow items-end justify-end">
              <li className="px-4 py-2 rounded-md text-gray-800 hover:bg-[#a03e2c] hover:text-white">
                <a href="#">Home</a>
              </li>
              <li className="px-4 py-2 rounded-md text-gray-800 hover:bg-[#a03e2c] hover:text-white">
                <a href="#">About</a>
              </li>
              <li className="px-4 py-2 rounded-md text-gray-800 hover:bg-[#a03e2c] hover:text-white">
                <a href="#">Pokédex</a>
              </li>
              <li className="px-4 py-2 rounded-md text-gray-800 hover:bg-[#a03e2c] hover:text-white">
                <a href="#">Article's</a>
              </li>
              <li className="px-4 py-2 rounded-md text-gray-800 hover:bg-[#a03e2c] hover:text-white">
                <a href="#">More</a>
              </li>
            </ul>
          </nav>

          {isOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-[#e5593f] flex flex-col items-end">
              <div className="px-4 py-2 flex items-center justify-between w-full">
                <img src={logo} alt="Poké World" className="h-10 w-auto" />

                <button onClick={toggleMenu} className="focus:outline-none">
                  <svg
                    className="w-8 h-8 text-gray-800 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="py-2">
                <li className="px-4 py-2 rounded-md text-gray-800 hover:bg-[#a03e2c] hover:text-white">
                  <a href="#">Home</a>
                </li>
                <li className="px-4 py-2 rounded-md text-gray-800 hover:bg-[#a03e2c] hover:text-white">
                  <a href="#">About</a>
                </li>
                <li className="px-4 py-2 rounded-md text-gray-800 hover:bg-[#a03e2c] hover:text-white">
                  <a href="#">Services</a>
                </li>
                <li className="px-4 py-2 rounded-md text-gray-800 hover:bg-[#a03e2c] hover:text-white">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
