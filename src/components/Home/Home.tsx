import { useState } from "react";
import HeroImg from "../../img/heroImg.jpg";
import logo from "../../img/logo.png";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="col-span-3">
          <div className="bg-[#e5593f]">
            <nav className="container mx-auto flex items-center justify-between py-1">
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

              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Poké World"
                  className="h-8 w-auto mr-4 lg:hidden"
                />
                <img
                  src={logo}
                  alt="Poké World"
                  className="h-10 w-auto mr-auto hidden lg:block"
                />
              </div>

              <ul className="hidden lg:flex flex-grow items-end justify-end">
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  <a href="#">Home</a>
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  <a href="#">About</a>
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  <a href="#">Pokédex</a>
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  <a href="#">Article's</a>
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  <a href="#">More</a>
                </li>
              </ul>
            </nav>

            {isOpen && (
              <div className="lg:hidden fixed inset-0 z-50 bg-gray-200 flex flex-col items-end">
                <div className="px-4 py-2 flex items-center justify-between w-full">
                  <img src={logo} alt="Poké World" className="h-8 w-auto" />

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
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-300">
                    <a href="#">Home</a>
                  </li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-300">
                    <a href="#">About</a>
                  </li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-300">
                    <a href="#">Services</a>
                  </li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-300">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-2 pl-10 bg-[#222831]">
          <div
            style={{
              backgroundImage: `url(${HeroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "cetner",
              backgroundRepeat: "no-repeat",
              minHeight: "80vh",
              position: "relative",
            }}
          ></div>
        </div>
        <div className="pr-10 py-0 bg-[#222831]">
          <div className="bg-[#31363F] text-white min-h-full flex flex-col items-center justify-evenly">
            <p className="text-center font-bold text-lg py-3 px-2">
              Welcome to the Ultimate Pokémon Adventure!
            </p>
            <p className="text-center leading-8 text-md py-3 px-1">
              Discover new regions, catch rare Pokémon, and embark on epic
              adventures in the Pokemon World!
            </p>
            <button className="px-2 py-3 mt-2 bg-blue-600 rounded-lg hover:bg-blue-800 active:bg-white">
              Start Exploring
            </button>
          </div>
        </div>
        <div className="col-span-3 px-3 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus
          necessitatibus modi eaque! Dicta magnam omnis dolorum unde
          reprehenderit vero quae voluptate, repudiandae deleniti similique,
          aspernatur id eligendi. Quas, voluptat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iure nisi facere minima qui porro
          repellat corporis rem possimus error odit maiores voluptate, sit minus
          nihil? Expedita mollitia doloribus quisquam ab. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Cum optio impedit culpa saepe
          aliquam quae at earum. Magni recusandae officiis quisquam culpa
          tempora labore, ipsum obcaecati, architecto vel, eveniet dignissimos.
        </div>
        <div className="col-span-3 px-3 py-4">Footer</div>
      </div>
    </div>
  );
};

export default Home;
