import { useState, useEffect } from "react";
import HeroImg from "../../img/heroImg.jpg";
// import logo from "../../img/logo.png";
import services from "../../services/services";
import PokemonOfTheDay from "./PokemonOfTheDay";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type PokemonOfTheDay = {
  name: string;
  id: number;
  types: [{ type: { name: string } }];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

const Home: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const [pokemonData, setPokemonData] = useState<PokemonOfTheDay | null>(() => {
    const storedData = localStorage.getItem("pokemonOfTheDay");
    return storedData ? JSON.parse(storedData) : null;
  });

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await services.getPokemonOfTheDay();
        setPokemonData(data);
        localStorage.setItem("pokemonOfTheDay", JSON.stringify(data));
      } catch (error) {
        console.log("Error fetching Pokemon of the day:", error);
      }
    };
    if (!pokemonData) {
      fetchPokemonData();
    }

    const intervalId = setInterval(fetchPokemonData, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [pokemonData]);

  return (
    <div className="">
      <Header />
      {/* <Footer /> */}
      <div className="grid grid-cols-4">
        {/* <div className="col-span-4">
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
        </div> */}
        <div className="col-span-3 pl-10 bg-[#222831]">
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
        <div className="col-span-4 pr-10 py-0">
          <PokemonOfTheDay pokemon={pokemonData} />
        </div>
        {/* <div className="col-span-4 px-3 py-2 bg-[#e5593f]">
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto mr-4 block cursor-pointer"
              />
            </a>
            <p className="text-sm">© Copyright 2024.</p>
            <p className="text-sm">
              Created by{" "}
              <a
                href="https://github.com/orchaiTea"
                target="_black"
                className="text-gray-800 hover:underline"
              >
                Pushkar Tripathi
              </a>
            </p>
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
